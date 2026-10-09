/* Recovered shipped factory. Module 208971.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4723447..4723935
 * Raw property SHA-256: 4dc4c66cdaf43ffb168a7bc36e30dcaec54e31c63d101bed64f2485b7097f658
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => _ });
  var i = n(582128),
    r = n(17928),
    a = n(49491),
    s = n(311043),
    l = n(569926),
    o = n(287809),
    d = n(240248),
    c = n(827669),
    u = n(660183);
  function _(e) {
    let t = i.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
    return (
      (0, l.x)(t),
      (0, r.bG)(
        [s.A, o.default],
        () => {
          if ((0, d.uJ)(e) || 0 === t.length) return e;
          let n = o.default.getCurrentUser()?.nsfwAllowed;
          return e.replace(c.Dx, (e, t) => {
            let i = s.A.getGame(t);
            return (0, a.b)(i, n)
              ? u.intl.string(u.t["11pdXZ"])
              : (i?.name ?? u.intl.string(u.t["11pdXZ"]));
          });
        },
        [e, t],
      )
    );
  }
}
