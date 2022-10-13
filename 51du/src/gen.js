function execute(url, page) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    const data = [];
    doc.select(".reviews-bd .review").forEach((e) => {
      data.push({
        name: e.select("h3 a").first().text(),
        link: e.select(".review-hd a").first().attr("href"),
        cover:
          "http:" + e.select(".review-hd a img").first().attr("data-original"),
        description: e.select(".review-content").first().text(),
        host: "http://www.51du.org",
      });
    });

    return Response.success(data);
  }
  return null;
}
