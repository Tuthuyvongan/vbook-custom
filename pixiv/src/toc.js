function execute(url) {
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let el1 = doc.select(".sc-8wmyib-2 jHtLYj").last();
    let el = el1.select("li a");
    const data = [];
    for (let i = 0; i < el.size(); i++) {
      var e = el.get(i);
      data.push({
        name: e.select(".sc-d98f2c-0 sc-lfrhpy-4 joJUKU").text(),
        url: e.attr("href"),
        host: "https://www.pixiv.net",
      });
    }
    return Response.success(data);
  }
  return null;
}
