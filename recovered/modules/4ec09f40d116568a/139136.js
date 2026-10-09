/* Recovered shipped factory. Module 139136.
 * Source: recovered/web/assets/4ec09f40d116568a.js
 * UTF-16 property offsets: 95..844
 * Raw property SHA-256: 4a5021ffa02982d6bcadfb9cc1d0e5197f1d38fa372fec3798b6b95b3bea61ac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, a) {
  a.d(s, { A: () => o });
  var t = a(477900),
    i = a(582128),
    l = a(503698),
    r = a.n(l),
    d = a(203632);
  a(881106);
  var c = a(480335),
    n = a(23240),
    u = a(778765);
  let o = (e) => {
    let {
        skuId: s,
        isHighlighted: a,
        removeSetHeight: l = !1,
        withScaleAnimation: o = !1,
        delayProfileEffectIntro: h = !1,
        hideBackground: m = !1,
      } = e,
      [v, p] = i.useState(!0);
    return (i.useEffect(() => {
      if (!0 !== o) p(!1);
      else {
        let e = setTimeout(() => {
          p(!1);
        }, 500);
        return () => {
          clearTimeout(e);
        };
      }
    }, [o]),
    null == s)
      ? null
      : (0, t.jsxs)("div", {
          className: r()(n.i1, { [n.qy]: o, [n.pE]: !l, [n.JQ]: m }),
          children: [
            (0, t.jsx)("img", {
              src: u.A,
              alt: "",
              className: n.VH,
              "aria-hidden": !0,
              draggable: !1,
            }),
            !v &&
              (0, t.jsx)(c.A, {
                skuId: s,
                useThumbnail: !0,
                autoPlay: o,
                restartMethod: d.HL.FromStart,
                resetOnHover: !0,
                isHovering: a,
                useOpacityOnHover: !1,
                delayIntro: h,
                shopPreview: !0,
              }),
          ],
        });
  };
}
