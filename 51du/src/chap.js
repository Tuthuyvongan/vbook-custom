function execute(url) {
  url = url.replace("m.51du.org", "www.51du.org");
  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    let htm = doc.select(".yd_text2 p").html();
    htm = htm.replace(/\&nbsp;/g, "");
    return Response.success(htm);
  }
  return null;
}
