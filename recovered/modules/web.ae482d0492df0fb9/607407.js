/* Recovered shipped factory. Module 607407.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5009331..5010457
 * Raw property SHA-256: af70c69dc4b8c5225cf4510edb2c65ca384c20832969ccf0923c8ca468dc9c44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(289873),
    d = n(834730),
    c = n(734057),
    u = n(576705),
    _ = n(450149),
    E = n(652215),
    A = n(660183),
    h = n(142893);
  function f(e) {
    let { isLoading: t, noText: n, noImage: r, previewText: a, className: l } = e;
    return (0, i.jsx)("div", {
      className: s()(h.Hd, l),
      children: t
        ? (0, i.jsx)(o.y, {})
        : (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: s()(h.js, { [h.$0]: r }) }),
              n
                ? null
                : (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: h.pY,
                    children: a ?? A.intl.string(A.t.uQZTBV),
                  }),
            ],
          }),
    });
  }
  function I(e) {
    let { stream: t, className: n, noText: a = !1, noImage: s = !1 } = e,
      o = (0, l.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
      d = (0, l.bG)([u.A], () => null != o && u.A.canBasicChannel(E.hVb.CONNECT, o)),
      { previewUrl: I, isLoading: p } = (0, _.A)(t.guildId, t.channelId, t.ownerId),
      T = r.useRef(p ? null : I);
    r.useEffect(() => {
      p || (T.current = I);
    }, [I, p]);
    let m = null == I || p ? T.current : I;
    return null == m
      ? (0, i.jsx)(f, {
          className: n,
          isLoading: p,
          noText: a,
          noImage: s,
          previewText: d ? void 0 : A.intl.string(A.t.pgUTZC),
        })
      : (0, i.jsx)("div", {
          className: n,
          children: (0, i.jsx)("img", { src: m, alt: "", className: h.Sl, draggable: !1 }),
        });
  }
}
