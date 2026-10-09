/* Recovered shipped factory. Module 538451.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7904195..7905168
 * Raw property SHA-256: 648ae10b143c4f79f1b5f046596b47ddd5db7026b13d952b4248f2ee8ad0e014
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(297413),
    _ = n(342296),
    E = n(475977);
  function A(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        nick: A,
        className: h,
        textClassName: f,
        disablePopout: I,
        ignoreModalClicks: p,
        onClick: T,
        onContextMenu: m,
        onPopoutRequestOpen: g,
        onPopoutRequestClose: S,
      } = e,
      N = r.useRef(null);
    return (0, i.jsx)(_.A, {
      targetElementRef: N,
      user: t,
      guildId: n,
      channelId: a,
      position: "left",
      shouldShow: !I && void 0,
      onRequestOpen: g,
      onRequestClose: S,
      ignoreModalClicks: p,
      children: (e) => {
        let { onClick: r, ...a } = e;
        return (0, i.jsxs)(l.D, {
          ...a,
          innerRef: N,
          className: s()(E.DV, h, { [E.YR]: I }),
          onContextMenu: m,
          onClick: (e) => {
            (r(e), T?.(e));
          },
          children: [
            (0, i.jsx)(o.eu, {
              src: t.getAvatarURL(n, (0, d.FT)(d._3.SIZE_24)),
              className: E.my,
              "aria-label": t.username,
              size: d._3.SIZE_24,
            }),
            (0, i.jsx)(c.E, {
              className: s()(E.Ft, f),
              variant: "text-sm/normal",
              children: (0, i.jsx)(u.A, {
                user: t,
                nick: A,
                usernameClass: E.Xh,
                hideDiscriminator: !0,
              }),
            }),
          ],
        });
      },
    });
  }
}
