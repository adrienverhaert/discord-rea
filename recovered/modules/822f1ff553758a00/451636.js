/* Recovered shipped factory. Module 451636.
 * Source: recovered/web/assets/822f1ff553758a00.js
 * UTF-16 property offsets: 7655..8021
 * Raw property SHA-256: c6a1622b1b89bc6f8e6a89813b4039f0971e0b39385ab871d181c0c3715d9236
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { q: () => c });
  var r = n(477900);
  n(582128);
  var i = n(503698),
    a = n.n(i),
    l = n(457287),
    s = n(660183),
    u = n(640956);
  function c(e) {
    let { className: t, currencies: n, onChange: i, selectedCurrency: c, ...o } = e;
    return (0, r.jsx)(l.f, {
      currencies: n,
      className: a()(u.p, t),
      children: (0, r.jsx)(l.A, {
        label: s.intl.string(s.t["/AAR02"]),
        selectedCurrency: c,
        currencies: n,
        onChange: i,
        ...o,
      }),
    });
  }
}
