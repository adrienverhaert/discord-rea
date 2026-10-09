/* Recovered shipped factory. Module 331611.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 244336..244632
 * Raw property SHA-256: a05682ed116d398fab4255968bec831e0bcfb3d462111cab99184f24862e9de2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { e: () => s });
  var l = n(477900),
    i = n(582128),
    r = n(86379),
    a = n(545075);
  function s(e) {
    let { paymentModalStepProps: t, defaultStep: n } = e,
      s = (0, i.useRef)(!1),
      o = (0, r.Hp)(),
      { handleStepChange: u } = t;
    return ((0, i.useEffect)(() => {
      o || s.current || (u(n), (s.current = !0));
    }, [o, u, n]),
    o)
      ? (0, l.jsx)(a.oO, {})
      : null;
  }
}
