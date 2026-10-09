/* Recovered shipped factory. Module 454719.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7996570..7997906
 * Raw property SHA-256: 9190b9b8cf6454b61551b4c0a42a875985f091702318ba63e7ad3ee0ad085d7e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => T }), n(321073));
  var i = n(90644),
    r = n(382483),
    a = n(385113),
    s = n(627363),
    l = n(587895),
    o = n(201718),
    d = n(885386),
    c = n(889227),
    u = n(280450),
    _ = n(633075),
    E = n(321191),
    A = n(758873),
    h = n(903209);
  async function f() {
    let e = d.Q_.getSetting(),
      t = [(0, r.Wq)()];
    (e && t.push((0, r.i$)()), await Promise.allSettled(t));
  }
  async function I(e) {
    let t = new Set(
      (E.A.getWidgets(e) ?? [])
        .filter((e) => e instanceof _.R)
        .map((e) => e.applicationId)
        .filter((e) => a.A.getFetchState(e) === a.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, r.un)(e))));
  }
  async function p(e, t) {
    let [n] = (0, A.G)({ userId: e, currentUserId: u.default.getId(), guildId: t }).cards;
    if (n?.type !== "live" || null == n.activity.application_id || (0, i.A)(n.activity)) return;
    let r = n.activity.application_id;
    l.A.isHydrated(r) || l.A.didFetchingApplicationFail(r) || (await s.Ay.fetchApplication(r, !1));
  }
  async function T() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, r, a] = t[0] instanceof c.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
      s = (0, h.A)(i, r, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...a });
    if (a?.type !== "popout" && a?.type !== "account_popout") return s;
    let l = o.P.fetchMany([i]),
      d = f(),
      u = p(i, a?.guildId),
      _ = Promise.allSettled([s, d]).then((e) => {
        let [t] = e;
        if ("rejected" !== t.status) return I(i);
      });
    await Promise.all([s, Promise.allSettled([l, d, u, _])]);
  }
}
