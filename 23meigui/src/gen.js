function execute(url, page) {
  url = url.replace("m.23meigui.com", "www.23meigui.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    const data = [];
    doc.select(".article .block").forEach((e) => {
      data.push({
        name: e.select(".block_h2 a").first().text(),
        link:
          "https://www.23meigui.com" +
          e.select(".block_h2 a").first().attr("href"),
        cover: e.select(".block_img").first().attr("src"),
        description: e.select(".block_txt p").last().text(),
        host: "https://www.23meigui.com",
      });
    });

    return Response.success(data);
  }
  return null;
}
