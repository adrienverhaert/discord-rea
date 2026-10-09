/* Recovered shipped factory. Module 566331.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8328922..8329996
 * Raw property SHA-256: 484863a55ca56b228e9686154fb10a0596d6040899bf37ce4da3357fbf8254ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(43990),
    o = n(297264),
    d = n(821609),
    c = n(401843),
    u = n(964486),
    _ = n(652896),
    E = n(734057),
    A = n(818348),
    h = n(660183),
    f = n(2753);
  function I(e) {
    let { stream: t, width: n } = e,
      r = (0, s.bG)([E.A], () => E.A.getChannel(t.channelId));
    (0, u.Ay)(() => {
      r?.isGuildStageVoice() && (0, c.Xi)((0, _._z)(t), !1);
    });
    let I = n < 550 ? "small" : n < 1e3 ? "medium" : "large";
    return (0, i.jsx)(l.N, {
      disableAdaptiveTheme: !0,
      theme: A.NJ.ONYX,
      children: (e) =>
        (0, i.jsx)("div", {
          className: a()(f.container, e),
          children: (0, i.jsxs)("div", {
            className: f.content,
            children: [
              (0, i.jsx)("div", {
                className: a()(f.artContainer, f[I]),
                children: (0, i.jsx)("div", { className: a()(f.art, f[I]) }),
              }),
              (0, i.jsxs)("div", {
                className: f.cta,
                children: [
                  (0, i.jsx)(o.D, {
                    color: "none",
                    variant: "small" === I ? "heading-md/normal" : "heading-lg/normal",
                    className: f.header,
                    children: h.intl.formatToMarkdownString(h.t.Kb4Ukp, {}),
                  }),
                  (0, i.jsx)(d.$, {
                    variant: "secondary",
                    size: "small" === I ? "sm" : "md",
                    onClick: (e) => {
                      (e.stopPropagation(), (0, c.Xi)((0, _._z)(t)));
                    },
                    text: h.intl.string(h.t["4EGMWL"]),
                  }),
                ],
              }),
            ],
          }),
        }),
    });
  }
}
