function execute(url) {
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    //     let htm = doc.select("head meta#meta-preload-data").attr("content")
    //     htm = htm.replace('\",\"novel\":{\"'+book_id+'\":{\"boo', '\",\"novel\":{\"book_id\":{\"boo')
    //     let obj = JSON.parse(htm).novel.book_id
    //     let author = obj.userName;
    //     return Response.success({
    //         name: obj.title,
    //         cover: obj.coverUrl,
    //         author: author,
    //         description: obj.description,
    //         detail: "作者： " + author,
    //         host: "https://www.pixiv.net"
    //     });
    // }
    // return null;
    let coverImg = doc.select(".sc-vmsckl-1 jGHUJP img").first().attr("src");
    if (coverImg.startsWith("//")) {
      coverImg = "http:" + coverImg;
    }
    let author = doc
      .select(".sc-f30yhg-1 igIJfI")
      .first()
      .text()
      .replace(/作\s*者：/g, "");
    return Response.success({
      name: doc.select(".sc-vk2fvc-2 dKSaoW").text(),
      cover: coverImg,
      author: author,
      description: doc.select(".sc-eyxzap-0 iFFcXi p").text(),
      detail: "作者： " + author,
      host: "https://www.pixiv.net",
    });
  }
  return null;
}
