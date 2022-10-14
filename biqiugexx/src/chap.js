function execute(url) {
  url = url.replace("m.biqiugexx.com", "www.biqiugexx.com");
  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    let htm = doc.select("#content").html();
    let scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    htm = htm.replace(/\&nbsp;/g, "").replace(scriptRegex, "");
    return Response.success(htm);
  }
  return null;
}
