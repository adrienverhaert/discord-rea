/* Recovered shipped factory. Module 409978.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6558901..6559201
 * Raw property SHA-256: 677cd71f6cbb6423368610ee4aa91c3735b6e1e7115b76c3233ce409495f98af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { y: () => s }), n(321073));
  var i = n(582128),
    r = n(429913);
  let a = [];
  function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = i.useMemo(() => {
        if (!t) return a;
        let n = [];
        return (
          e.forEach((e) => {
            let { applicationId: t } = e;
            null != t && n.push(t);
          }),
          n
        );
      }, [t, e]);
    (0, r.A)(n, t);
  }
}
