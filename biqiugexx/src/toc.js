// function execute(url) {
//   url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
//   let url2 = url.split(/[/ ]+/).pop().replace(".html", "");
//   url = "http://www.biqiugexx.com/xs/" + url2 + "/";

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
//         host: "http://www.biqiugexx.com",
//       });
//     }
//     return Response.success(data);
//   }
//   return null;
// }
function execute(url) {
  url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    let el1 = doc.select(".listmain").last();
    let el = el1.select("li a");
    const data = [];
    for (let i = 0; i < el.size(); i++) {
      var e = el.get(i);
      data.push({
        name: e.select("a").text(),
        url: "https://www.biqiugexx.com" + e.attr("href"),
        host: "https://www.biqiugexx.com",
      });
    }
    return Response.success(data);
  }
  return null;
}
