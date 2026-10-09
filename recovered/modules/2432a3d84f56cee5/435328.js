/* Recovered shipped factory. Module 435328.
 * Source: recovered/web/assets/2432a3d84f56cee5.js
 * UTF-16 property offsets: 95..543
 * Raw property SHA-256: 658cbeabdca29025f555a0d7b36d120c37975203ef24899626d0dfeb9d5d15eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { l: () => d, y: () => u });
  var i = n(46054),
    r = n(556300),
    a = n(881140);
  let s = i.A.guildEventRules,
    l = {
      ...s.link,
      react: (0, a.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react,
    },
    o = {
      ...s.channelMention,
      react: (0, r.A)({
        enableBuildOverrides: !1,
        shouldCloseDefaultModals: !0,
        shouldStopPropagation: !0,
      }).react,
    },
    d = i.A.reactParserFor({ ...s, link: l, channelMention: o }),
    u = i.A.reactParserFor({ ...i.A.guildEventLocationRules, link: l, channelMention: o });
}
