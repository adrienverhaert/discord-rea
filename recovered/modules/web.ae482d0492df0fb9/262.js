/* Recovered shipped factory. Module 262.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7974778..7975292
 * Raw property SHA-256: a5fa33b2a2f40539531011f08d52305a5d217375446c8d4f59353963815465fd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c, h: () => o });
  var i = n(702841),
    r = n(885386),
    a = n(351906),
    s = n(287809),
    l = n(660183);
  let o = "quest_completed",
    d = "legacy_username";
  function c(e, t) {
    let n = r.m$.useSetting(),
      o = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
      c = (0, i.bG)([a.A], () => a.A.hidePersonalInformation);
    if (null == e) return [];
    let u = e?.getBadges() ?? [];
    return (
      null != o && o.id === e.userId && (void 0 !== t ? t : n) && (u = u.filter((e) => e.id !== d)),
      c &&
        (u = u.map((e) => ({
          ...e,
          description: e.id === d ? l.intl.string(l.t.Br1ls3) : e.description,
        }))),
      u
    );
  }
}
