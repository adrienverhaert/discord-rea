/* Recovered shipped factory. Module 673953.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7290514..7290871
 * Raw property SHA-256: 30eef61147fd89e11013b64f84bb4d66f1c314cdd0f546109c3fef30ba8a9b0d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C6: () => d, JH: () => s, LV: () => o, cH: () => l });
  var i = n(231723),
    r = n(484697),
    a = n(652215);
  function s(e) {
    return e.ownerDocument.defaultView ?? window;
  }
  function l(e) {
    return s(e) === window ? a.BRT.APP : a.BRT.POPOUT;
  }
  function o(e) {
    let t = (0, r.fl)(e);
    return null == t ? null : l(t);
  }
  function d(e) {
    let t = o(e);
    return null == t ? null : t === a.BRT.POPOUT ? i.KX : i.SY;
  }
}
