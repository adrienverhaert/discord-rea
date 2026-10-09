/* Recovered shipped factory. Module 62199.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7988092..7988852
 * Raw property SHA-256: 2876771c2f6f954d4c37e713ab259c39852ff49f4a228be2bfc25e71dfa044a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(252732),
    s = n(101058),
    l = n(696451),
    o = n(352413),
    d = n(45837);
  function c(e) {
    let {
        user: t,
        guildId: n,
        size: c,
        showPending: u = !1,
        animateOnHover: _ = !1,
        avatarOverride: E,
      } = e,
      { onMouseEnter: A, onMouseLeave: h, shouldAnimate: f } = (0, d.A)(_),
      { pendingAvatar: I } = (0, o.A)({ guildId: null === n ? void 0 : n }),
      p = u && null != t ? (0, s.V7)({ userId: t.id, image: I, canAnimate: f, size: c }) : void 0,
      T =
        void 0 === E
          ? p
          : null === E || "string" == typeof E
            ? E
            : null != t
              ? (0, s.V7)({ userId: t.id, image: E, canAnimate: f, size: c })
              : void 0,
      m = (0, r.bG)([l.Ay], () => (null != n && null != t ? l.Ay.getMember(n, t.id) : null));
    return {
      avatarSrc: i.useMemo(
        () => (null != t ? (0, a.sv)(T, m, t, { canAnimate: f, size: c }) : void 0),
        [T, m, t, f, c],
      ),
      isAvatarAnimating: f,
      eventHandlers: { onMouseEnter: A, onMouseLeave: h },
    };
  }
}
