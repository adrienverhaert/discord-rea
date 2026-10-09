/* Recovered shipped factory. Module 829648.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3721136..3721740
 * Raw property SHA-256: 13ea6c5dbf95416bc3138698173a97fecd71f9d9c6acc385a1ceb56bcc9cfe31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(866665),
    s = n(939249),
    l = n(97808),
    o = n(778712),
    d = n(342296),
    c = n(427262),
    u = n(447177);
  function _(e) {
    let { user: t, guildId: n, layerContext: _ } = e,
      E = r.useRef(null),
      A = (0, c.$3)(t);
    return (0, i.jsx)(d.A, {
      targetElementRef: E,
      shouldPreload: !0,
      user: t,
      guildId: n,
      position: "bottom",
      layerContext: _,
      children: (e) =>
        (0, i.jsx)(a.m, {
          text: A,
          ariaHidden: !0,
          children: (0, i.jsx)(s.D, {
            ...e,
            innerRef: E,
            className: u.RB,
            onClick: (t) => {
              (e.onClick(t), t.stopPropagation());
            },
            "aria-label": A,
            children: (0, i.jsx)(l.eu, {
              src: t.getAvatarURL(n, 24),
              size: o._3.SIZE_24,
              "aria-hidden": !0,
            }),
          }),
        }),
    });
  }
}
