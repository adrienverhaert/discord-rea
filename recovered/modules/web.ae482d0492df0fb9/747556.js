/* Recovered shipped factory. Module 747556.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10479343..10479689
 * Raw property SHA-256: 24dfbb1f8fadc541d9513673eab0b9c2824ac1ef09a1c271512962041c375a01
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bc: () => s, w6: () => l });
  var i = n(477900),
    r = n(582128);
  let a = r.createContext({ isRichTooltip: !1 });
  function s(e) {
    let { children: t, isRichTooltip: n = !1, richTooltipPadding: s } = e,
      l = r.useMemo(() => ({ isRichTooltip: n, richTooltipPadding: s }), [n, s]);
    return (0, i.jsx)(a.Provider, { value: l, children: t });
  }
  function l() {
    return r.useContext(a);
  }
}
