/* Recovered shipped factory. Module 404522.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2644060..2644513
 * Raw property SHA-256: 24e4815f566e04093758ebd941dd5bd8679944fd78fa09d3ffe4e8b10ba97372
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(476370),
    s = n(795816),
    l = n(933958);
  function o(e) {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
      o = (0, r.bG)([l.Ay], () => l.Ay.getState());
    return (
      (0, i.useEffect)(() => {
        var e;
        (null == (e = o.lastCheckedForBadgeableActivities) ||
          new Date(e).getTime() < Date.now() - 432e5) &&
          !n &&
          (0, s.LV)({ guildId: null });
      }, [o.lastCheckedForBadgeableActivities, n]),
      (0, i.useMemo)(() => (0, a.C)({ storeState: o, surface: t }), [o, t])
    );
  }
}
