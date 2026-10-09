/* Recovered shipped factory. Module 373677.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3923108..3923662
 * Raw property SHA-256: cc8b2397aad7ebb161e962627300cb62efac123bed7da7deda4bae7a91a26b36
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Hc: () => o, PH: () => c, YF: () => s, hR: () => d });
  var i = n(991690),
    r = n(164892);
  let a = [
      { type: i.U.APP_CHANNEL, declaredBy: r.q7.APP_CHANNEL },
      { type: i.U.VOICE_CHANNEL, declaredBy: r.q7.VOICE_CHANNEL },
    ],
    s = a.map((e) => {
      let { type: t } = e;
      return t;
    }),
    l = [i.U.APP_CHANNEL];
  function o(e) {
    return a.some((t) => {
      let { declaredBy: n } = t;
      return e.includes(n);
    });
  }
  function d(e) {
    let t = a
      .filter((t) => {
        let { declaredBy: n } = t;
        return e?.includes(n) === !0;
      })
      .map((e) => {
        let { type: t } = e;
        return t;
      });
    return t.length > 0 ? t : l;
  }
  function c(e, t) {
    return null != e && t.includes(e) ? e : (t[0] ?? i.U.APP_CHANNEL);
  }
}
