/* Recovered shipped factory. Module 806932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2866065..2868645
 * Raw property SHA-256: 34094ca9aed6f36be347a2b398dd81fc4cb131bfc81d37f112cc0fd904c3b736
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => v, A: () => b });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(785007),
    l = n(297264),
    o = n(331322),
    d = n(73153),
    c = n(915089),
    u = n(450232),
    _ = n(526162),
    E = n(503698),
    A = n.n(E),
    h = n(435558),
    f = n.n(h),
    I = n(866665),
    p = n(939249),
    T = n(194261),
    m = n(653523),
    g = n(350972),
    S = n(677056),
    N = n(174197),
    C = n(652215),
    O = n(660183),
    R = n(997328);
  function L(e) {
    let {
        id: t,
        className: n,
        style: a,
        onSelect: s,
        isSelected: l = !1,
        tabIndex: o,
        children: d,
        locked: c = !1,
        disabled: u = !1,
      } = e,
      [_, E] = r.useState((0, N.gG)(t).name),
      h = t === g.Ic.PIRATE;
    return (0, i.jsx)(I.m, {
      text: _,
      onTooltipShow: () =>
        h &&
        E(
          f().sample([
            O.intl.string(O.t["EgWTY+"]),
            O.intl.string(O.t.umBn5f),
            O.intl.string(O.t.dG1wD1),
            O.intl.string(O.t.SesI4S),
            O.intl.string(O.t.RnMLvl),
          ]) ?? O.intl.string(O.t["EgWTY+"]),
        ),
      children: (0, i.jsxs)("div", {
        className: R.Co,
        style: a,
        children: [
          (0, i.jsx)(p.D, {
            role: "radio",
            "aria-label": _,
            "aria-checked": l,
            "aria-disabled": u,
            tabIndex: o ?? (l ? 0 : -1),
            className: A()(R.Ni, { [R.wH]: l }, n),
            onClick: l ? C.tEg : () => s?.(t),
            children: d,
          }),
          l && (0, i.jsx)(m.H$, {}),
          c &&
            (0, i.jsx)("div", {
              className: R.RK,
              children: (0, i.jsx)(T.LockIcon, { className: R.AA, color: "currentColor" }),
            }),
        ],
      }),
    });
  }
  function y(e) {
    let {
        size: t = N.N8.SIZE_60,
        icon: n,
        isSelected: a,
        disabled: s,
        tabIndex: l,
        onSelect: o,
        locked: d,
      } = e,
      c = r.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(L, {
      style: c,
      onSelect: s ? void 0 : o,
      isSelected: a,
      id: n.id,
      className: s ? R.r9 : void 0,
      tabIndex: l,
      locked: d,
      disabled: s,
      children: (0, i.jsx)(S.A, { id: n.id, size: t }),
    });
  }
  var D = n(40025);
  function v(e) {
    let { disabled: t, size: n } = e,
      [r] = (0, a.yK)([_.A], () => [_.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
      children: (0, N.v8)()
        .filter((e) => {
          let { isHidden: t } = e;
          return !t;
        })
        .map((e, a) =>
          (0, i.jsx)(
            y,
            {
              icon: e,
              isSelected: r === e.id,
              onSelect: (e) => {
                d.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
              },
              disabled: t,
              tabIndex: 0 !== a || t ? void 0 : 0,
              locked: !1,
              size: n,
            },
            e.id,
          ),
        ),
    });
  }
  function b(e) {
    let { className: t, disabled: n, isEditor: r, renderCTAButtons: a, iconSize: d } = e,
      _ = (0, c.GV)(),
      { ref: E, ...A } = (0, s._u)({ orientation: "horizontal", labelledBy: _ });
    return (0, i.jsx)("div", {
      ...A,
      ref: E,
      children: (0, i.jsxs)("div", {
        className: t,
        children: [
          (0, i.jsxs)("div", {
            className: D.wx,
            children: [
              (0, i.jsxs)("div", {
                className: D.so,
                children: [
                  !r &&
                    (0, i.jsxs)("div", {
                      className: D.DD,
                      children: [
                        (0, i.jsx)(l.D, {
                          className: D.Qw,
                          variant: "heading-xl/normal",
                          color: "text-strong",
                          children: O.intl.string(O.t.NThqTw),
                        }),
                        (0, i.jsx)(u.A, { color: "strong", size: "sm" }),
                      ],
                    }),
                  (0, i.jsx)(l.D, {
                    variant: "text-sm/normal",
                    className: D.W$,
                    children: O.intl.string(O.t.IgENJo),
                  }),
                ],
              }),
              a?.(),
            ],
          }),
          (0, i.jsx)(o.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, i.jsx)(v, { disabled: n, size: d }),
          }),
        ],
      }),
    });
  }
}
