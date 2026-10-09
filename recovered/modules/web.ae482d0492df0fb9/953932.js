/* Recovered shipped factory. Module 953932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3701806..3702362
 * Raw property SHA-256: b1394a04b86a6a1fcf877e962d0cb710808a9dd0a46592c417c96f16c21bdb7a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(821609),
    s = n(975571),
    l = n(614584),
    o = n(652215),
    d = n(660183),
    c = n(353796);
  function u() {
    let e = r.useCallback(() => {
        window.open(s.A.getArticleURL(o.MVz.CLIPS), "_blank", "noopener,noreferrer");
      }, []),
      t = r.useCallback(() => {
        l.yO({ clipsEnabled: !0, trackAnalytics: !0 });
      }, []);
    return (0, i.jsxs)("div", {
      className: c.o,
      children: [
        (0, i.jsx)(a.$, {
          onClick: e,
          text: d.intl.string(d.t.hvVgAZ),
          variant: "secondary",
          size: "sm",
        }),
        (0, i.jsx)(a.$, {
          onClick: t,
          text: d.intl.string(d.t.h8rgrK),
          variant: "primary",
          size: "sm",
        }),
      ],
    });
  }
}
