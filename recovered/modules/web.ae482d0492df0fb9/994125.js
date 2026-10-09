/* Recovered shipped factory. Module 994125.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6072027..6072598
 * Raw property SHA-256: bb9d2c95c996042a005e80559185cfdc8bd12c78ea7ab545a2eac1c0c7de3320
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(73153),
    s = n(287809),
    l = n(429707),
    o = n(274303);
  function d() {
    let e = (0, r.cf)([o.A, s.default], () => {
      let e = o.A.getUsers(),
        t = s.default.getCurrentUser();
      return null == t ||
        e.some((e) => {
          let { id: n } = e;
          return n === t.id;
        })
        ? { isLoading: o.A.getIsValidatingUsers(), multiAccountUsers: e }
        : {
            isLoading: o.A.getIsValidatingUsers(),
            multiAccountUsers: [
              {
                id: t.id,
                avatar: t.avatar,
                username: t.username,
                discriminator: t.discriminator,
                tokenStatus: o.U.VALID,
                pushSyncToken: null,
              },
              ...e,
            ],
          };
    });
    return (
      i.useEffect(() => {
        a.h.wait(() => {
          l.F6();
        });
      }, []),
      e
    );
  }
}
