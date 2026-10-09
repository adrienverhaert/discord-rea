/* Recovered shipped factory. Module 552618.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2855620..2855951
 * Raw property SHA-256: 602fafee10ad8a954f111f3af23bb1a4eef39a788d4ed988baf29a6a845817d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => d, c: () => o });
  var i = n(95701),
    r = n(734057),
    a = n(576705),
    s = n(652215);
  let l = s.hVb.VIEW_CHANNEL | s.hVb.READ_MESSAGE_HISTORY;
  function o(e) {
    return (
      null != e &&
      (e.type === s.rbe.DM ||
        e.type === s.rbe.GROUP_DM ||
        ((0, i.pQ)(e.type) && a.A.canBasicChannel(l, e)))
    );
  }
  function d(e) {
    return null != e && o(r.A.getBasicChannel(e));
  }
}
