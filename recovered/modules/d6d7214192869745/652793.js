/* Recovered shipped factory. Module 652793.
 * Source: recovered/web/assets/d6d7214192869745.js
 * UTF-16 property offsets: 5034..5873
 * Raw property SHA-256: 32d608e07847e0934e75f45e4b30b25af85839864b9e3530eecf0e935cb830ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { G: () => h });
  var i = n(477900);
  n(582128);
  var l = n(503698),
    s = n.n(l),
    r = n(837381),
    a = n(84571),
    o = n(890856),
    d = n(834730),
    c = n(964306),
    u = n(672812);
  function h(e) {
    let {
        id: t,
        className: n,
        innerClassName: l,
        renderIcon: h,
        text: g,
        selected: m,
        trailing: A,
        background: f,
        showUnread: p = !1,
        ref: C,
        ...E
      } = e,
      x = (0, r.rm)(t),
      N = (0, a.O)(g) ?? "";
    return (0, i.jsx)("li", {
      ref: C,
      children: (0, i.jsxs)(o.s, {
        ...E,
        buttonProps: { ...x, id: t, role: "button" },
        tag: "div",
        "aria-label": N,
        focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
        onContextMenu:
          null != E.onContextMenu
            ? E.onContextMenu
            : (e) => {
                e.stopPropagation();
              },
        className: s()(c.fx, u.iE, { [u.J1]: m }, n),
        children: [
          f,
          p ? (0, i.jsx)("div", { className: s()(u.gy, u.WS) }) : null,
          (0, i.jsxs)("div", {
            className: s()([u.nf, u.ae, l]),
            children: [
              h(u.Kk),
              (0, i.jsx)(d.E, {
                color: "none",
                variant: "text-md/medium",
                className: u.UU,
                "aria-hidden": !0,
                children: g,
              }),
              A,
            ],
          }),
        ],
      }),
    });
  }
}
