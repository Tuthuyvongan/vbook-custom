function execute(url) {
  url = url.replace("m.23meigui.com", "www.23meigui.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let coverImg = doc.select(".mohe-imgs").first().attr("src");
    if (coverImg.startsWith("//")) {
      coverImg = "https:" + coverImg;
    }
    let novelTags = doc.select(".theme-term span").get(1).text();
    let author = doc
      .select(".theme-term span")
      .first()
      .text()
      .replace(/作\s*者：/g, "");
    return Response.success({
      name: doc.select("h1").text(),
      cover: coverImg,
      author: author,
      description: doc.select("#mohetext").text(),
      novelTags: novelTags,
      detail: "作者： " + author + "<br>" + novelTags,
      host: url,
    });
  }
  return null;
}
