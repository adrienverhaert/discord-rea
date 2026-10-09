/* Recovered shipped factory. Module 533148.
 * Source: recovered/web/assets/8b4eb1e0c14512a7.js
 * UTF-16 property offsets: 972..1256
 * Raw property SHA-256: 71bcc011a855e91e4a954c64ffb32e345929fa1d1df4516b944e7cb8ab598e0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => i });
  var r = n(477900),
    l = n(95477),
    s = n(927573);
  function i(t) {
    let { value: e, onChange: n, error: i, disabled: a, autoFocus: c = !1 } = t;
    return (0, r.jsx)(l.k, {
      leading: `${s.mu}/`,
      value: e,
      onChange: function (t) {
        n(t.replace(/ /g, "-"));
      },
      maxLength: 25,
      error: i,
      disabled: a,
      autoFocus: c,
    });
  }
}
