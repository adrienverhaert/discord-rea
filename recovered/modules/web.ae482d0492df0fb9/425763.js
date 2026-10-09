/* Recovered shipped factory. Module 425763.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 818413..818674
 * Raw property SHA-256: 10dfe30f9c04b51f1c8e0bbcf554884c5d6a243c9c64efd93d37ab9d99e9eed7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { VU: () => l, ef: () => s, ny: () => o });
  var i = n(196765),
    r = n(121894);
  let a = (0, i.v)((e) => ({ inDndMode: !1 }));
  function s(e) {
    (0, r.r)(() => a.setState({ inDndMode: e }));
  }
  function l() {
    return a((e) => e.inDndMode);
  }
  function o() {
    return a.getState().inDndMode;
  }
}
