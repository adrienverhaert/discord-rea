/* Recovered shipped factory. Module 213404.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2996816..2997922
 * Raw property SHA-256: 815900b5e27891bca0b5585fae81a455803acaa4acaf8e98a566b9c97da4d14f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(573435),
    d = n(696451),
    c = n(486020),
    u = n(392054),
    _ = n(125805),
    E = n(532406);
  function A(e) {
    let {
        section: t,
        channel: { guild_id: n },
        isSelected: a,
        width: A,
        height: h,
        className: f,
        selectable: I = !1,
        isSquircle: p,
        onFocus: T,
        onBlur: m,
        onMouseOver: g,
        onMouseLeave: S,
        ...N
      } = e,
      [C, O] = r.useState(!1),
      R = r.useCallback(() => {
        (O(!0), T?.());
      }, [T]),
      L = r.useCallback(() => {
        (O(!1), m?.());
      }, [m]),
      y = r.useCallback(() => {
        (O(!0), g?.());
      }, [g]),
      D = r.useCallback(() => {
        (O(!1), S?.());
      }, [S]),
      v = (0, l.bG)([d.Ay], () =>
        t.application?.bot?.id != null ? d.Ay.getMember(n, t.application?.bot?.id) : null,
      ),
      b = r.useMemo(
        () =>
          t.type === u.Hf.APPLICATION
            ? c.Ay.getApplicationIconURL({
                id: t.id,
                icon: t.icon,
                bot: t.application?.bot,
                botIconFirst: !0,
                guildMember: v,
                size: A,
              })
            : E,
        [t, A, v],
      );
    return (0, i.jsx)("div", {
      ...N,
      className: s()(_.iE, f, { [_.rb]: I, [_.wH]: I && a }),
      onFocus: R,
      onBlur: L,
      onMouseOver: y,
      onMouseLeave: D,
      children: (0, i.jsx)(o.Ay, {
        className: _.dK,
        mask: p || (I && (a || C)) ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
        width: A,
        height: h,
        children: (0, i.jsx)("img", {
          alt: "",
          className: _.Kk,
          style: { width: A, height: h },
          src: b,
        }),
      }),
    });
  }
}
