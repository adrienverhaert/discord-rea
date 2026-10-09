/* Recovered shipped factory. Module 599062.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 253066..254148
 * Raw property SHA-256: 3fa96e039ce0114b7f94e5336a44f554a9bdf144c98162873d74ae4144c5b2f2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => f, h: () => S });
  var l,
    i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(462887),
    s = n(297264),
    o = n(834730),
    u = n(821609),
    c = n(736653),
    d = n(287809),
    p = n(660183),
    m = n(634090),
    h = n(626768),
    C = n(464896),
    f = (((l = {})[(l.SHOP_PAGE = 0)] = "SHOP_PAGE"), (l[(l.GIFT_MODAL = 1)] = "GIFT_MODAL"), l);
  let S = function (e) {
    let { onRetry: t, errorOrigin: n, errorMessage: l } = e,
      f = (0, c.Ay)(),
      S = (0, r.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isStaff() || e?.isStaffPersonal();
      }),
      E = 1 === n ? m.tV : m.Df,
      y = 1 === n ? p.intl.string(p.t["+2QBZX"]) : p.intl.string(p.t.LuhKs2);
    return (0, i.jsxs)("div", {
      className: E,
      children: [
        (0, i.jsx)("img", {
          className: m.__invalid_loadIssueImg,
          src: (0, a.M)(f) ? h : C,
          alt: "",
        }),
        (0, i.jsx)(s.D, {
          className: m.st,
          variant: "heading-xl/semibold",
          children: p.intl.string(p.t.i5SQ74),
        }),
        (0, i.jsx)(o.E, { className: m.h_, variant: "text-md/normal", children: y }),
        S &&
          null != l &&
          (0, i.jsx)(o.E, { variant: "text-md/normal", children: "staff-only debug: " + l }),
        (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": !0,
          className: m.yQ,
          children: (0, i.jsx)(u.$, {
            variant: "primary",
            text: p.intl.string(p.t["+hivLW"]),
            onClick: t,
          }),
        }),
      ],
    });
  };
}
