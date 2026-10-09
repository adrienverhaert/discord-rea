/* Recovered shipped factory. Module 24873.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6117677..6118357
 * Raw property SHA-256: df81504f27d15d655f248f5bc654e28fe3e2d0ce4f9995ada5e433bfc146676a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { N9: () => l, hJ: () => d, jU: () => o }), n(801541));
  var i,
    r = n(889137),
    a = n(652215),
    s = n(790782);
  n(660183);
  var l =
    (((i = {}).ALL_MESSAGES = "all_messages"),
    (i.HYBRID = "hybrid"),
    (i.MENTIONS = "mentions"),
    (i.NOTHING = "nothing"),
    (i.CUSTOM = "custom"),
    i);
  function o(e, t) {
    return (0, r.YW)([t, e])
      .with([a.orn.ALL_MESSAGES, s.e.ALL_MESSAGES], () => "all_messages")
      .with([a.orn.ONLY_MENTIONS, s.e.UNSET], () => "mentions")
      .with([a.orn.ONLY_MENTIONS, s.e.ONLY_MENTIONS], () => "mentions")
      .with([a.orn.NO_MESSAGES, s.e.UNSET], () => "nothing")
      .with([a.orn.NO_MESSAGES, s.e.ONLY_MENTIONS], () => "nothing")
      .otherwise(() => "custom");
  }
  function d(e, t) {
    return e === s.e.ALL_MESSAGES && t === a.orn.ONLY_MENTIONS ? "hybrid" : o(e, t);
  }
}
