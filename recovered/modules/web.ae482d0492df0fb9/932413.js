/* Recovered shipped factory. Module 932413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7104171..7104587
 * Raw property SHA-256: f93f709ef72e155defac184ea1f95d9dd6aeb6b40717612ac6fe612acbce9a77
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(702841),
    s = n(859703),
    l = n(639214),
    o = n(657792);
  let d = function (e) {
    let { applicationId: t, children: n, questContent: d } = e,
      c = (0, a.bG)([s.A], () => s.A.quests),
      u = r.useMemo(() => (0, l.jm)(c, t), [c, t]),
      _ = r.useRef(null);
    return u.length > 0
      ? (0, i.jsx)(o.R, {
          questOrQuests: u[0],
          questContent: d,
          sourceQuestContent: d,
          children: n,
        })
      : (0, i.jsx)(i.Fragment, { children: n(_, _) });
  };
}
