/* Recovered shipped factory. Module 713804.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5750627..5751476
 * Raw property SHA-256: 564747c4ee73c447784a28f2fff829cfc0ec49ba08f775a4c8b8c9a37b27cbd4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  (n.r(t),
    n.d(t, {
      getOrParseBioAST: () => T,
      parseBioReact: () => p,
      parseBioReactWithCachedAST: () => m,
      parseBioReactWithoutScrolling: () => g,
    }));
  var r = n(435558),
    a = n.n(r),
    s = n(635377),
    l = n.n(s),
    o = n(478676),
    d = n.n(o),
    c = n(807081),
    u = n(247186),
    _ = n(999915);
  n(46054);
  var E = n(551965);
  let A = (0, E.A)([
      _.Ay.PROFILE_BIO_RULES,
      (0, u.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
      (0, u.r3)(),
    ]),
    h = new (l())({ max: 2e3 }),
    f = { allowGameMentions: !0 },
    I = c.aV(A);
  function p(e, t, n, i) {
    return I(e, t, { ...f, ...n }, i);
  }
  function T(e, t) {
    let n = `${t ?? ""}:${e}`,
      r = h.get(n);
    return (null != r || ((r = i(e, !0, { guildId: t })), h.set(n, r)), r);
  }
  function m(e, t) {
    if (0 === e.trim().length) return null;
    let n = T(e, t);
    return d().reactFor(d().ruleOutput(A, "react"))(n);
  }
  let g = c.aV(
    (0, E.A)([
      a().omit(A, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
      { emoji: { react: () => null } },
    ]),
  );
}
