/* Recovered shipped factory. Module 667049.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7987731..7988091
 * Raw property SHA-256: 1a6a98819458133d41400a8db24be4af4aa39685e5bb3be4df7c3ac409c885c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(280450),
    a = n(321191),
    s = n(61881);
  function l(e) {
    let t = (0, i.bG)(
        [r.default],
        () => {
          let t = r.default.getId();
          return null != e && t === e;
        },
        [e],
      ),
      n = (0, i.bG)([s.A], () => s.A.getPendingWidgets()),
      l = (0, i.yK)(
        [a.A],
        () => {
          if (null == e) return [];
          let t = a.A.getUserProfile(e);
          return t?.widgets ?? [];
        },
        [e],
      );
    return t && null !== n ? n : l;
  }
}
