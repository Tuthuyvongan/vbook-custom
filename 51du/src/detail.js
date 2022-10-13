function execute(url) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let coverImg = doc.select(".jieshao .lf img").first().attr("src");
    if (coverImg.startsWith("//")) {
      coverImg = "http:" + coverImg;
    }

    return Response.success({
      name: doc.select("h1").text(),
      cover: coverImg,
      author: doc
        .select(".msg em")
        .first()
        .text()
        .replace(/作\s*者：/g, ""),
      description: doc.select(".jieshao p").text(),
      detail: doc.select(".msg em").get(2).text(),
      host: "http://www.51du.org",
    });
  }
  return null;
}
