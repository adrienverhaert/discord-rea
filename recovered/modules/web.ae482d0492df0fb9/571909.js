/* Recovered shipped factory. Module 571909.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7660453..7660910
 * Raw property SHA-256: e55b625ca2bc0b17971fa7d999f06193063bd0b401cd74412f1796cdf146c12f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => _, ek: () => E, vI: () => A });
  var i = n(582128),
    r = n(196765),
    a = n(121894),
    s = n(17928),
    l = n(576705),
    o = n(309010),
    d = n(233993),
    c = n(505543);
  let u = (0, r.v)((e) => ({ isOnStartStageScreen: !0 })),
    _ = u;
  function E(e) {
    (0, a.r)(() => u.setState({ isOnStartStageScreen: e }));
  }
  function A(e) {
    let t = (0, s.bG)([o.Ay], () => o.Ay.getVoiceChannelId() === e.id),
      n = (0, s.bG)([l.A], () => l.A.can(d.QY, e), [e]),
      r = (0, c.A)(e.id),
      a = n && !r;
    i.useEffect(() => {
      t ? a || E(!1) : E(a);
    }, [t, a]);
  }
}
