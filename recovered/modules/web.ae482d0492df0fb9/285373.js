/* Recovered shipped factory. Module 285373.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6911958..6912857
 * Raw property SHA-256: 58752294136e72e0c4cf35e4fa5bad007acc17b8ab2bb83f66b740b4a2cccf71
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { g: () => _, l: () => E });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(753704),
    s = n(895360),
    l = n(152472),
    o = n(594832),
    d = n(280450),
    c = n(202541),
    u = n(660183);
  let _ = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/e6a95b370154817e3cec977345baf14c7643d3dacb99c3034005b10be99a36c7.svg",
  };
  function E(e) {
    let {
        className: t,
        disabled: n,
        size: E,
        variant: A,
        location: h,
        forceDarkTheme: f,
        ref: I,
      } = e,
      p = c.pe.TIER_2,
      T = u.intl.string(u.t.lG6a5x),
      m = (0, r.bG)([d.default], () => d.default.getId());
    (0, o.pE)();
    let {
      isWishlisted: g,
      isBusy: S,
      isFirstTimeWishlister: N,
      handleToggle: C,
    } = (0, l.c)({ userId: m, location: h, skuId: p, nuxGraphic: _, onNuxShow: s.D });
    return (0, i.jsx)("div", {
      ref: I,
      className: f ? "theme-dark" : void 0,
      children: (0, i.jsx)(a._, {
        skuId: p,
        productName: T,
        className: t,
        disabled: n,
        size: E,
        variant: A,
        isWishlisted: g,
        isBusy: S,
        isFirstTimeWishlister: N,
        onClick: C,
        tooltipConfig: { add: u.intl.string(u.t.cjmnm6) },
      }),
    });
  }
}
