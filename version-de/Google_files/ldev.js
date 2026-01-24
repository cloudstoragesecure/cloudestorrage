function ldevGetURLParameter(name) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === name) {
      return decodeURIComponent(pair[1]);
    }
  }
  return "";
}
function ldevReport(event) {
  var cid = ldevGetURLParameter("cid");
  var query = "event=" + event + "&cid=" + cid;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", window.location.origin + "/api/ldev?" + query);
  xmlhttp.send();
}
