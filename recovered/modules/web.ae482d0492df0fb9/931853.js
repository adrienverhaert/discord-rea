/* Recovered shipped factory. Module 931853.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8394458..8395257
 * Raw property SHA-256: 766944bd48b3c8b561acfd1e25caeddde814fe0c5d736beb99ca7d1903cc3b97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E, u: () => _ });
  var i = n(477900),
    r = n(17928),
    a = n(876230),
    s = n(366010),
    l = n(834730),
    o = n(363195),
    d = n(871273),
    c = n(660183),
    u = n(862649);
  function _(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: i } = e;
    return t
      ? n === a.Q6.PAUSED && i === a.KB.VISIBILITY
        ? c.intl.string(d.default["9St/zK"])
        : n === a.Q6.PAUSED && i === a.KB.FOCUS
          ? c.intl.string(d.default.c7IRfm)
          : null
      : c.intl.string(d.default["kX3+aM"]);
  }
  let E = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
      a = (0, r.bG)([o.A], () => o.A.getState().theme);
    return null == t
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            n && (0, i.jsx)("div", { className: u.MM }),
            (0, i.jsx)("div", {
              className: u.zG,
              style: {
                background: (0, s.M)(a) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)",
              },
              children: (0, i.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: t,
              }),
            }),
          ],
        });
  };
}
