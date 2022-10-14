function execute(url, page) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    const data = [];
    doc.select(".fengtui dl").forEach((e) => {
      data.push({
        name: e.select("h3 a").first().text(),
        link: e.select(".fengtui a").first().attr("href"),
        cover:
          "http:" + e.select(".fengtui a img").first().attr("data-original"),
        description: e.select(".fengtui p").first().text(),
        host: "https://www.51du.org",
      });
    });

    return Response.success(data);
  }
  return null;
}
