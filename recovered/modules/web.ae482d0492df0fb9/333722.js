/* Recovered shipped factory. Module 333722.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5115180..5116143
 * Raw property SHA-256: 053044995fffb185adc3deb73878be881dd44efa526e1c1680e45a1e29766c50
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { s: () => E, A: () => A });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(104510),
    l = n(957485),
    o = n(926268),
    d = n(297264),
    c = n(834730),
    u = n(660183),
    _ = n(778072);
  let E = [
    { icon: s._, getText: () => u.intl.string(u.t.TZigSO) },
    {
      icon: function (e) {
        let { className: t } = e;
        return (0, i.jsx)("img", {
          className: a()(t, _.Dp),
          src: "/assets/185ece790f20d870.svg",
          alt: "",
        });
      },
      getText: () => u.intl.string(u.t.hjQuV2),
    },
    { icon: l.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
    { icon: o.HeartIcon, getText: () => u.intl.string(u.t.bJoZKV) },
  ];
  function A(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
      className: a()(_.iE, t),
      children: [
        (0, i.jsx)(d.D, {
          className: _.R_,
          variant: "heading-xxl/semibold",
          children: u.intl.string(u.t.IzKs3o),
        }),
        (0, i.jsx)("div", {
          className: _.kR,
          children: E.map((e, t) => {
            let n = e.icon;
            return (0, i.jsxs)(
              "div",
              {
                className: _.Nr,
                children: [
                  (0, i.jsx)(n, { className: _.Kk }),
                  (0, i.jsx)(c.E, {
                    className: _.h_,
                    color: "text-muted",
                    variant: "text-md/medium",
                    children: e.getText(),
                  }),
                ],
              },
              t,
            );
          }),
        }),
      ],
    });
  }
}
