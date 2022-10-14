function execute(url) {
  url = url.replace("m.23meigui.com", "www.23meigui.com");
  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    let htm = doc.select(".read_tt\\d+").html();
    htm = htm.replace(/\&nbsp;/g, "");
    return Response.success(htm);
  }
  return null;
}
