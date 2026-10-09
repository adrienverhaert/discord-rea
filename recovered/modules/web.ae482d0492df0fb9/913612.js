/* Recovered shipped factory. Module 913612.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7739737..7739976
 * Raw property SHA-256: 93ec90203d2c30c0576f8ce8c010b522a3e5d80819f855dd4891f85636445929
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => l, K: () => o });
  var i = n(582128),
    r = n(506774),
    a = n(935671);
  let s = "systemServiceAutoInstall";
  function l() {
    r.w.set(s, !0);
  }
  function o() {
    i.useEffect(() => {
      null == r.w.get(s) && (l(), (0, a.sL)("first-start", !1));
    }, []);
  }
}
