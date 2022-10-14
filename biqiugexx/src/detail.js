function execute(url) {
  url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let coverImg = doc.select(".cover img").first().attr("src");
    if (coverImg.startsWith("//")) {
      coverImg = "http:" + coverImg;
    } else if (coverImg.startsWith("/")) {
      coverImg = "https://www.biqiugexx.com" + coverImg;
    }
    let novelTags = doc.select(".small span").get(2).text();
    let author = doc
      .select(".small span")
      .first()
      .text()
      .replace(/作\s*者：/g, "");
    return Response.success({
      name: doc.select("h2").text(),
      cover: coverImg,
      author: author,
      description: doc.select(".intro").text(),
      novelTags: novelTags,
      detail: "作者： " + author + "<br>" + novelTags,
      host: "https://www.biqiugexx.com",
    });
  }
  return null;
}
