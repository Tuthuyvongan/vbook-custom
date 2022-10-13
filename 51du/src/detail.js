function execute(url) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let coverImg = doc.select(".jieshao .lf img").first().attr("src");
    if (coverImg.startsWith("//")) {
      coverImg = "http:" + coverImg;
    }
    let novelTags = doc.select(".msg em").get(1).text();
    let author = doc
      .select(".msg em")
      .first()
      .text()
      .replace(/作\s*者：/g, "");
    return Response.success({
      name: doc.select("h1").text(),
      cover: coverImg,
      author: author,
      description: doc.select(".jieshao p").text(),
      novelTags: novelTags,
      detail: "作者： " + author + "<br>" + novelTags,
      host: "https://www.51du.org",
    });
  }
  return null;
}
