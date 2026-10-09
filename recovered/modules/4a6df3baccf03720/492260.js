/* Recovered shipped factory. Module 492260.
 * Source: recovered/web/assets/4a6df3baccf03720.js
 * UTF-16 property offsets: 95..411
 * Raw property SHA-256: 10cdb842d6a6b86fb0aaa5d77f1332dc6cd05a441904c30bb5423c28d77545d8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => i });
  var l = n(582128),
    r = n(974930);
  function i(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      [i, a] = l.useState(() => (0, r.CC)(t, e));
    return (
      l.useEffect(() => {
        if (!n) return;
        a((0, r.CC)(t, e));
        let l = setInterval(() => a((0, r.CC)(t, e)), 1e3);
        return () => {
          clearInterval(l);
        };
      }, [t, e, n]),
      i
    );
  }
}
