/* Recovered shipped factory. Module 488004.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5978395..5978727
 * Raw property SHA-256: 0fe6e86faf51f7b7b778ff00d2d6f80832a37bd3e21f70e5ed7cc84ee709897c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => a, p: () => s });
  var i = n(666860),
    r = n(652215);
  function a(e) {
    let t = null != e.fileItems ? s(e.fileItems) : [],
      n = e.errorMessage ?? void 0,
      a = e.failureCode ?? void 0;
    (0, i.zV)(r.HAw.SEND_MESSAGE_FAILURE, {
      failure_code: a,
      error_message: n,
      attachment_mimetypes: t,
    });
  }
  function s(e) {
    return e.map((e) => e.mimeType ?? "unknown");
  }
}
