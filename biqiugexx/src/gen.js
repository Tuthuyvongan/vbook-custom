function execute(url, page) {
  url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
  url;
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    const data = [];
    doc.select(".item .p10").forEach((e) => {
      data.push({
        name: e.select(".p10 a").last().text(),
        link:
          "https://www.biqiugexx.com" + e.select(".p10 a").first().attr("href"),
        cover:
          "https://www.biqiugexx.com" +
          e.select(".item .p10 .img").first().attr("src"),
        description: e.select(".p10 dd").first().text(),
        host: "https://www.biqiugexx.com",
      });
    });

    return Response.success(data);
  }
  return null;
}
