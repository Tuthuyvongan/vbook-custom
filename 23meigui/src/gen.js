function execute(url, page) {
  url = url.replace("m.23meigui.com", "www.23meigui.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    const data = [];
    doc.select(".article .block").forEach((e) => {
      data.push({
        name: e.select(".block_h2 a").first().text(),
        link: e.select(".block_h2 a").first().attr("href"),
        cover: "http:" + e.select(".block_img").first().attr("data-original"),
        description: e.select(".block_txt p").first().text(),
        host: "https://www.23meigui.com",
      });
    });

    return Response.success(data);
  }
  return null;
}
