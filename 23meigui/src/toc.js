// function execute(url) {
//   url = url.replace("m.23meigui.com", "www.23meigui.com");
//   let url2 = url.split(/[/ ]+/).pop().replace(".html", "");
//   url = "http://www.23meigui.com/xs/" + url2 + "/";

//   let response = fetch(url);
//   if (response.ok) {
//     let doc = response.html();
//     let el1 = doc.select(".mulu").last();
//     let el = el1.select("li a");
//     const data = [];
//     for (let i = 0; i < el.size(); i++) {
//       var e = el.get(i);
//       data.push({
//         name: e.select("a").text(),
//         url: url + e.attr("href"),
//         host: "http://www.23meigui.com",
//       });
//     }
//     return Response.success(data);
//   }
//   return null;
// }
function execute(url) {
  url = url.replace("m.23meigui.com", "www.23meigui.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let el1 = doc.select(".contlist").last();
    let el = el1.select("li a");
    const data = [];
    for (let i = 0; i < el.size(); i++) {
      var e = el.get(i);
      let p = e.attr("onclick");
      data.push({
        name: e.select("a").text(),
        url:
          url +
          "/" +
          p.substring(p.indexOf("./") + 2, p.lastIndexOf(".")) +
          ".html",
        host: "https://www.23meigui.com",
      });
    }
    return Response.success(data);
  }
  return null;
}
