/* Recovered shipped factory. Module 832604.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3031521..3032066
 * Raw property SHA-256: 1e55ce99f77ecb29c8e176a9d60349ebdfa7ca0d53179dc6ab6e76c9d801fa6f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(635377),
    a = n.n(r),
    s = n(306044);
  let l = new (a())({ max: 1e3 });
  function o(e, t) {
    let [n, r] = i.useState();
    return (
      i.useEffect(() => {
        if (null == e || null != t) return void r(void 0);
        let n = l.get(e);
        if (null != n) return void r(n);
        let i = !1;
        return (
          (0, s.A)()
            .then((t) => {
              null == t ||
                i ||
                t.identifyGame(e, (t, n) => {
                  if (i) return;
                  if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name)
                    return void r(void 0);
                  let a = `data:image/png;base64,${n.icon}`;
                  (l.set(e, a), r(a));
                });
            })
            .catch(() => {
              i || r(void 0);
            }),
          () => {
            i = !0;
          }
        );
      }, [e, t]),
      t ?? n
    );
  }
}
