/* Recovered shipped factory. Module 608461.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 20878..21279
 * Raw property SHA-256: be7511e8d9b77c9a6dc082f4b642d67ecac7822287219bec789843744e8e3069
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => a });
  var l = n(582128),
    i = n(181658),
    r = n(660183);
  function a(e) {
    let [t, n] = l.useState(!1),
      [a, s] = l.useState(null);
    return [
      l.useCallback(
        async function () {
          for (var t = arguments.length, l = Array(t), a = 0; a < t; a++) l[a] = arguments[a];
          try {
            return (s(null), n(!0), await e(...l));
          } catch (e) {
            e.message !== r.intl.string(r.t.N2yb9a) && s(e instanceof i.A ? e : new i.A(e));
          } finally {
            n(!1);
          }
        },
        [e],
      ),
      { loading: t, error: a },
    ];
  }
}
