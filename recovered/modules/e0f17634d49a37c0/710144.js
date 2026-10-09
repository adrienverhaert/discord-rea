/* Recovered shipped factory. Module 710144.
 * Source: recovered/web/assets/e0f17634d49a37c0.js
 * UTF-16 property offsets: 443..726
 * Raw property SHA-256: 257369bcf79c61c0d2be5cc9f3abdc88f5e72f33ff1b760f895ad5811d17397a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => o });
  var r = n(477900),
    i = n(582128);
  function s(t) {
    return (e) => {
      (e?.stopPropagation(), t());
    };
  }
  function o(t) {
    let { onClick: e, className: n, children: o } = t,
      a = i.useRef(null);
    return (0, r.jsx)("div", {
      onClick: e,
      ref: a,
      className: n,
      children: o({ areaRef: a, handleStopPropagation: s }),
    });
  }
}
