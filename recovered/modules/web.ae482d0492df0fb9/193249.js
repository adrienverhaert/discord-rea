/* Recovered shipped factory. Module 193249.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10446571..10447247
 * Raw property SHA-256: a7dc46b71dbc89c5411bfed3ab63b29d9d5a0235393e9f5014808309f9ad0f1e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(844222),
    s = n(452027),
    l = n(489718);
  function o(e) {
    let {
      checked: t,
      disabled: n,
      displayOnly: r,
      id: a,
      onChange: o,
      focusProps: d,
      hasIcon: c = !1,
      ...u
    } = e;
    return r
      ? (0, i.jsx)(l.I, { checked: t, disabled: n, displayOnly: !0, hasIcon: c })
      : (0, i.jsx)(s.D, {
          ...u,
          id: a,
          disabled: n,
          layout: "horizontal",
          interactiveLabel: !0,
          auxiliaryContentPosition: "under-label",
          children: (e) =>
            (0, i.jsx)(l.I, {
              focusProps: d,
              id: e.controlId,
              checked: t,
              disabled: n,
              onChange: o,
              hasIcon: c,
              describedBy: e.describedById,
              labelledBy: e.labelId,
            }),
        });
  }
  function d(e) {
    let { switchIconsEnabled: t } = r.useContext(a.C),
      n = void 0 !== e.hasIcon ? e.hasIcon : t;
    return (0, i.jsx)(o, { ...e, hasIcon: n });
  }
}
