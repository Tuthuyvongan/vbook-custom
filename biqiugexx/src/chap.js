function execute(url) {
  url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    doc.select("script").remove();
    doc.select(".adsbygoogle").remove();
    let htm = doc.select(".showtxt").html();
    htm = htm.replace(/\&nbsp;/g, "");
    return Response.success(htm);
  }
  return null;
}
