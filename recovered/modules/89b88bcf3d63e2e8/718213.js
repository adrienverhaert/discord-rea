/* Recovered shipped factory. Module 718213.
 * Source: recovered/web/assets/89b88bcf3d63e2e8.js
 * UTF-16 property offsets: 94..278
 * Raw property SHA-256: 7550eaaa6a01a324d892cb46fa778948e413c72c4966ce0157230732e970cf15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { A: () => l });
  var a = t(582128);
  let l = function (e, s) {
    let [t, l] = a.useState(e);
    return (
      a.useEffect(() => {
        let t = setTimeout(() => {
          l(e);
        }, s);
        return () => {
          clearTimeout(t);
        };
      }, [e, s]),
      t
    );
  };
}
