function execute(url) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);
  let novelTags;
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
      novelTags: doc.select(".info a").text(),
      detail: "作者： " + author + "<br>" + novelTags,
      host: "http://www.51du.org",
    });
  }
  return null;
}
