/* Recovered shipped factory. Module 319225.
 * Source: recovered/web/assets/e0f17634d49a37c0.js
 * UTF-16 property offsets: 95..442
 * Raw property SHA-256: fe434476e034e43e2dd21c97f1bbb4226855f433ecb5a1f2f64227f206db3bbc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { E: () => u });
  var r = n(477900);
  n(582128);
  var i = n(189213),
    s = n(192308),
    o = n(660183);
  function a(t) {
    let { transitionState: e, title: n, body: s, onClose: a } = t;
    return (0, r.jsx)(i.a, {
      title: n,
      actions: [{ text: o.intl.string(o.t["NX+WJN"]), onClick: a }],
      transitionState: e,
      onClose: a,
      subtitle: s,
    });
  }
  function u(t) {
    (0, s.openModal)((e) => (0, r.jsx)(a, { ...e, ...t }));
  }
}
