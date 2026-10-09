/* Recovered shipped factory. Module 723690.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6565030..6566192
 * Raw property SHA-256: 905148403168d5b40054a5d15a82b8fbfedff71c043da86e46985db6347180f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(778712),
    d = n(97808),
    c = n(297413),
    u = n(562819),
    _ = n(215689),
    E = n(386467),
    A = n(994500);
  n(427262);
  var h = n(19575),
    f = n(803790);
  let I = h.Ay.getEnableHardwareAcceleration(),
    p = function (e) {
      let {
          user: t,
          hovered: n,
          subText: a,
          showAccountIdentifier: h,
          status: p,
          isMobile: T,
          isVR: m,
          className: g,
        } = e,
        S = (0, l.bG)([A.A], () => A.A.getNickname(t.id)),
        N = r.useContext(E.A),
        C = t.getAvatarURL(N, (0, o.FT)(o._3.SIZE_32), n),
        {
          avatarDecorationSrc: O,
          eventHandlers: { onMouseEnter: R, onMouseLeave: L },
        } = (0, _.A)({
          user: t,
          guildId: N,
          size: (0, u.Te)(o._3.SIZE_32),
          onlyAnimateOnHoverOrFocus: !0,
        });
      r.useEffect(() => {
        n ? R() : L();
      }, [n, R, L]);
      let y = I ? d.Js : d.eu;
      return (0, i.jsxs)("div", {
        className: s()(f.eF, g, { [f.yo]: n }),
        children: [
          (0, i.jsx)(y, {
            src: C,
            size: o._3.SIZE_32,
            status: p,
            isMobile: T,
            isVR: m,
            avatarDecoration: O,
            "aria-label": t.username,
            className: f.my,
          }),
          (0, i.jsxs)("div", {
            className: f.Qq,
            children: [
              (0, i.jsx)(c.A, {
                user: t,
                nick: S,
                botClass: f.AO,
                className: s()(f.xK, { [f.Nu]: t.hasUniqueUsername() }),
                usernameClass: f.Xh,
                discriminatorClass: f.D2,
                showAccountIdentifier: h,
                showGuildTag: !0,
              }),
              (0, i.jsx)("div", { className: f.W$, children: a }),
            ],
          }),
        ],
      });
    };
}
