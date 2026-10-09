/* Recovered shipped factory. Module 890497.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10423738..10424637
 * Raw property SHA-256: eb1b46418dd657f14daded5c6d1a5c9e6d081cf99c12c3a7dd18d68f50c0f0e8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => d });
  var i = n(477900),
    r = n(452027),
    a = n(230937),
    s = n(44482),
    l = n(641668),
    o = n(470791);
  function d(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: d = 5, ...c } = e,
      { fieldProps: u } = (0, r.n)(c),
      {
        disabled: _,
        required: E,
        onQueryChange: A,
        onKeyDown: h,
        onFocus: f,
        onBlur: I,
        placeholder: p,
        closeOnSelect: T,
        selectionMode: m,
      } = c,
      {
        isOpen: g,
        setIsOpen: S,
        refs: N,
        floatingStyles: C,
        getFloatingProps: O,
        getReferenceProps: R,
        transitionStyles: L,
      } = (0, l.G)();
    return (0, i.jsxs)(a.iS, {
      ...c,
      isCollapsible: !0,
      isOpen: g,
      setIsOpen: S,
      closeOnSelect: T ?? "single" === m,
      children: [
        (0, i.jsx)(a.a3, {
          hideTags: t,
          required: E,
          disabled: _,
          wrapTags: n,
          showChevronButton: !0,
          ref: N.setReference,
          placeholder: p,
          ...u,
          ...R(),
          onKeyDown: h,
          onBlur: I,
          onQueryChange: A,
          onFocus: f,
        }),
        g &&
          (0, i.jsx)("div", {
            ref: N.setFloating,
            className: o.S_,
            style: { ...C, ...L },
            ...O(),
            children: (0, i.jsx)(a.X2, {
              renderListItem: (e) => (0, i.jsx)(s.c, { ...e }),
              maxVisibleItems: d,
            }),
          }),
      ],
    });
  }
}
