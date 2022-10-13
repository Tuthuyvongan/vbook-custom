function execute(url) {
  url = url.replace("m.51du.org", "www.51du.org");
  let url2 = url.split(/[/ ]+/).pop().replace(".html", "");
  url = "http://www.51du.org/xs/" + url2 + "/";

  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let el1 = doc.select(".mulu").last();
    let el = el1.select("li a");
    const data = [];
    for (let i = 0; i < el.size(); i++) {
      var e = el.get(i);
      data.push({
        name: e.select("a").text(),
        url: url + e.attr("href"),
        host: "http://www.51du.org",
      });
    }
    return Response.success(data);
  }
  return null;
}
