/* Recovered shipped factory. Module 87952.
 * Source: recovered/web/assets/549b28bd876eb806.js
 * UTF-16 property offsets: 473..662
 * Raw property SHA-256: e952e1927cd2b024627e6d0d1a27439a5fdaa49073cd1caf190310bc0fa4aa4f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  e.d(t, { A: () => i });
  var n = e(582128),
    o = e(739508),
    s = e(71532);
  function i() {
    let [r, t] = n.useState(null);
    return (
      n.useEffect(() => {
        (0, s.Cv)()
          .then((r) => t(r))
          .catch((r) => {
            (0, o.pM)(r);
          });
      }, []),
      r
    );
  }
}
