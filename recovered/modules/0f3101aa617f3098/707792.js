/* Recovered shipped factory. Module 707792.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 1460..1960
 * Raw property SHA-256: 82dd2974ca6517288d96a4b7b221bf601830e9e81901911a51db754becc76a35
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => s });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    l = n(867455),
    a = n(406704),
    d = n(660183);
  function s(t) {
    let e = (0, a.H_)(t),
      n = t.isLockedThread();
    if (!(!e || t.isModeratorReportChannel()))
      return n
        ? (0, i.jsx)(r.Dr, {
            id: "unlock-thread",
            label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
            action: () => l.A.unlockThread(t),
          })
        : (0, i.jsx)(r.Dr, {
            id: "lock-thread",
            label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
            action: () => l.A.lockThread(t),
          });
  }
}
