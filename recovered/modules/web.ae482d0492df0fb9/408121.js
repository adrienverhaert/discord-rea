/* Recovered shipped factory. Module 408121.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8387310..8388290
 * Raw property SHA-256: f3691efeeb154a4d615e902d20bbedcde30b0238ffd923984d775ac923904dc7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(297264),
    s = n(939249),
    l = n(789645),
    o = n(559106),
    d = n(364522),
    c = n(289873),
    u = n(871273),
    _ = n(660183),
    E = n(862649);
  function A(e) {
    let { text: t, isLoading: n = !1, onClose: A } = e,
      h = r.useMemo(
        () =>
          (t ?? "")
            .split("\n")
            .map((e) => e.trim())
            .filter((e) => e.length > 0),
        [t],
      );
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("div", {
          className: E.Mm,
          children: [
            (0, i.jsx)(a.D, {
              variant: "heading-md/semibold",
              color: "currentColor",
              children: _.intl.string(u.default["VZkd/n"]),
            }),
            (0, i.jsx)(s.D, {
              onClick: A,
              className: E.GI,
              "aria-label": _.intl.string(u.default["6/dkHh"]),
              children: (0, i.jsx)(l.P, { color: "currentColor" }),
            }),
          ],
        }),
        (0, i.jsx)(o.vN, {
          children: (0, i.jsx)(d.Ar, {
            className: E.j5,
            fade: !0,
            children: (0, i.jsx)("div", {
              className: E.FN,
              children: n
                ? (0, i.jsx)("div", {
                    className: E.Cw,
                    children: (0, i.jsx)(c.y, { type: c.y.Type.WANDERING_CUBES }),
                  })
                : (0, i.jsx)(a.D, {
                    variant: "heading-md/normal",
                    color: "text-muted",
                    children: h.map((e, t) => (0, i.jsx)("p", { children: e }, t)),
                  }),
            }),
          }),
        }),
      ],
    });
  }
}
