/* Recovered shipped factory. Module 823784.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7052644..7052983
 * Raw property SHA-256: 43fe3a5ed70995d0f715c7ea10cdf5e82df16e0a653dc23a90b056c8508bee64
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $N: () => s, l6: () => l, tv: () => o });
  var i = n(132500),
    r = n(604594);
  let a = null;
  function s() {
    let e = Date.now();
    return null == a
      ? {
          searchSession: (a = {
            uuid: (0, i.A)(),
            createdAtTimestamp: e,
            lastUsedTimestamp: e,
            version: r.Ir,
          }),
          isNew: !0,
        }
      : ((a.lastUsedTimestamp = e), { searchSession: a, isNew: !1 });
  }
  function l() {
    a = null;
  }
  function o() {
    return a;
  }
}
