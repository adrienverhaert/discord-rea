/* Recovered shipped factory. Module 796878.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6911251..6911957
 * Raw property SHA-256: 688f7538faf6d7e9077b075cd6f31f7e819250eabce730ad0373e5ff425c8c9f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(877624),
    a = n(683063),
    s = n(549996),
    l = n(807098),
    o = n(92551),
    d = n(660183);
  function c(e) {
    let { children: t } = e,
      n = (0, s.c)(r.C.PREMIUM_TAB_TOOLTIP),
      c =
        null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
          ? n.properties.properties.premiumTabTooltip
          : null,
      u = (0, l.T)(c?.asset);
    if (null == c || null == n) return t;
    let _ = n.getFormatVariableValues(d.intl.currentLocale),
      E = (0, o.d)(c.body, _);
    if (!E.ok) return t;
    let A = (0, o.d)(c.header, _);
    return A.ok
      ? (0, i.jsx)(a.u, {
          title: A.content,
          body: E.content,
          asset: null != u ? (0, i.jsx)("img", { src: u, alt: "" }) : void 0,
          assetSize: 80,
          padding: "lg",
          position: "right",
          asContainer: !0,
          children: (0, i.jsx)("div", { children: t }),
        })
      : t;
  }
}
