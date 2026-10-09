/* Recovered shipped factory. Module 971745.
 * Source: recovered/web/assets/695866cf8555bc73.js
 * UTF-16 property offsets: 95..269
 * Raw property SHA-256: 316d1069cb6132af5c81abb42cafc7f80e2dc6aa013b938f643b0df4ab0ab962
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, p, r) {
  r.d(p, { A: () => s });
  var t = r(582128);
  let s = () => {
    let [e, p] = (0, t.useState)(null);
    return (
      (0, t.useEffect)(() => {
        window?.EyeDropper != null && p(new window.EyeDropper());
      }, []),
      e
    );
  };
}
