/* Recovered shipped factory. Module 587481.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9603700..9604306
 * Raw property SHA-256: 3468f83517c9089187c34220a5556453cd5a0f896163e3dc3a5c067d9575edf1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { GD: () => l, ls: () => o, oc: () => d, uj: () => c, v1: () => s, y5: () => u });
  var i = n(506774),
    r = n(824744);
  let a = "MediaPlayerVolume";
  function s() {
    let { volume: e } = i.w.get(a) ?? {};
    return ("number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e))));
  }
  function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return (0, r.M)(s(), e);
  }
  function o(e) {
    i.w.set(a, { volume: e, muted: c() });
  }
  function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    o((0, r.w)(e, t));
  }
  function c() {
    let { muted: e } = i.w.get(a) ?? {};
    return ("boolean" != typeof e && (e = !1), e);
  }
  function u(e) {
    i.w.set(a, { volume: s(), muted: e });
  }
}
