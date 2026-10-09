/* Recovered shipped factory. Module 861621.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7276210..7276760
 * Raw property SHA-256: eeb8a3beb3f89741c449784ae47787a1b0471cd5d04737e8a62b23c682c4b870
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(652215);
  let r = "<removed>";
  function a(e) {
    var t, n;
    let a = { ...e };
    return (
      "object" == typeof (t = a).args &&
        "string" == typeof t.cmd &&
        (a = (function (e) {
          switch (e.cmd) {
            case i.e$_.AUTHENTICATE:
            case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
              return { ...e, args: { ...e.args, access_token: r } };
            default:
              return { ...e };
          }
        })(a)),
      "object" == typeof (n = a).data &&
        "string" == typeof n.cmd &&
        (a = (function (e) {
          switch (e.cmd) {
            case i.e$_.AUTHENTICATE:
            case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
              return { ...e, data: { ...e.data, access_token: r } };
            default:
              return { ...e };
          }
        })(a)),
      a
    );
  }
}
