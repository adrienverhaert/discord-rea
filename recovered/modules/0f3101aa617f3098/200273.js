/* Recovered shipped factory. Module 200273.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 3422..3832
 * Raw property SHA-256: adb60648ad3ea34d10966110e35d375bd7cc533feb71bf385784e6190b31cd93
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    l = n(192308),
    a = n(435183),
    d = n(406704),
    s = n(660183);
  function o(t) {
    let e = (0, d.NI)(t),
      n = (0, d.Id)(t),
      o = (0, d.s5)(t);
    return !e || !n || o || t.isModeratorReportChannel() || __OVERLAY__
      ? null
      : (0, i.jsx)(r.Dr, {
          id: "edit-thread",
          label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
          action: () => {
            ((0, l.closeAllModals)(), a.Ay.open(t.id));
          },
        });
  }
}
