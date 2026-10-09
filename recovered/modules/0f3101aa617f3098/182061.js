/* Recovered shipped factory. Module 182061.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 94..641
 * Raw property SHA-256: a4d06601b08a3f57714fe13742423200888c7fb5db99079142d378fc6ee47271
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    l = n(715757),
    a = n(867455),
    d = n(406704),
    s = n(660183);
  function o(t) {
    let e = (0, l.V)(t),
      n = (0, d.NI)(t),
      o = (0, d.lK)(t);
    if ((t.isArchivedThread() ? o : n) && !e)
      return t.threadMetadata?.archived
        ? (0, i.jsx)(r.Dr, {
            id: "unarchive-thread",
            label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
            action: () => a.A.unarchiveThread(t, !1),
          })
        : (0, i.jsx)(r.Dr, {
            id: "archive-thread",
            label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
            action: () => a.A.archiveThread(t, !1),
          });
  }
}
