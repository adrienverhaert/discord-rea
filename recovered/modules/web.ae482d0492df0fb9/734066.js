/* Recovered shipped factory. Module 734066.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3582581..3583602
 * Raw property SHA-256: 539bc6914b28ac7f04ad457b710eb351059a58445081f7d705ee8a8a110551c0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BW: () => f, Pm: () => _, cx: () => h, ri: () => I, sw: () => E });
  var i = n(17928),
    r = n(945810),
    a = n(192820),
    s = n(287809),
    l = n(723702),
    o = n(158045),
    d = n(202541),
    c = n(731854);
  let u = (0, r.mj)({
    kind: "user",
    name: "2026-03-clips-experiment",
    defaultConfig: { enableClips: !1, ignorePlatformRestriction: !1 },
    variations: {
      1: { enableClips: !0, ignorePlatformRestriction: !1 },
      2: { enableClips: !0, ignorePlatformRestriction: !0 },
    },
  });
  function _() {
    if (!I(a.Ay)) return !1;
    let e = A(s.default.getCurrentUser()),
      { enableClips: t } = u.getConfig({ location: "areClipsEnabled" });
    return e || t;
  }
  function E() {
    let e = I(a.Ay),
      t = (0, i.bG)([s.default], () => A(s.default.getCurrentUser())),
      { enableClips: n } = u.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
  }
  function A(e) {
    return o.Ay.isPremiumAtLeast(e?.premiumType, d.PremiumTypes.TIER_2);
  }
  function h() {
    return !1;
  }
  function f() {
    return !1;
  }
  function I(e) {
    let { ignorePlatformRestriction: t } = u.getConfig({ location: "isClipsClientCapable" }),
      n = e.getMediaEngine();
    return t || (l.isDesktop() && n.supports(c.O5.CLIPS) && n.hasClipsV3Support());
  }
}
