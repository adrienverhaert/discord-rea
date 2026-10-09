/* Recovered shipped factory. Module 624044.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4025597..4026687
 * Raw property SHA-256: 2e3d5cec354d9f9966c6d90485fd16dab0db548f38092620a0b8c21c0fc4507a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { V: () => o, a: () => c, ep: () => l, rO: () => d, y4: () => u }), n(321073));
  var i = n(320095),
    r = n(815807),
    a = n(280450),
    s = n(994500);
  function l(e) {
    let {
      meta: t,
      messages: n,
      fullyHydrated: r,
      messageReferences: a = [],
      upsertMessage: s,
      upsertReference: l,
    } = e;
    if (!r && t.fullyHydrated) return !1;
    let o = [];
    for (let e of n) {
      let t = (0, i.rh)(e);
      (o.push(t), s(t));
    }
    for (let e of ((t.hydratedMessages = o), (t.fullyHydrated = r), a)) l((0, i.rh)(e));
    return !0;
  }
  function o(e, t, n) {
    if (e?.hydratedMessages == null) return;
    let i = e.hydratedMessages.findIndex((e) => e.id === t);
    if (-1 === i) return;
    let r = e.hydratedMessages.slice();
    ((r[i] = n), (e.hydratedMessages = r));
  }
  function d(e, t) {
    e?.hydratedMessages != null &&
      (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
  }
  function c(e) {
    let t = s.A.isBlockedForMessage(e),
      n = s.A.isIgnoredForMessage(e);
    return e.blocked === t && e.ignored === n ? null : e.set("blocked", t).set("ignored", n);
  }
  function u(e, t) {
    if (!(0, r.vp)(e)) return null;
    let n = a.default.getId() === e.userId;
    return "MESSAGE_REACTION_ADD" === e.type
      ? t.addReaction(e.emoji, n, { colors: e.colors, reactionType: e.reactionType })
      : t.removeReaction(e.emoji, n, e.reactionType);
  }
}
