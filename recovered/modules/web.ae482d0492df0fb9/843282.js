/* Recovered shipped factory. Module 843282.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 940419..948477
 * Raw property SHA-256: 4c14c06d7be04b25fc6e6a796e969f6d81b9e839b004c6c254ad860b45aba817
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $l: () => b, Ev: () => D, M8: () => v, Pw: () => F, Te: () => k, lS: () => M });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(461771),
    o = n(887129),
    d = n(837381),
    c = n(602034),
    u = n(172218),
    _ = n(900797),
    E = n(847374),
    A = n(452027),
    h = n(862301),
    f = n(939249),
    I = n(834730),
    p = n(789645),
    T = n(315710),
    m = n(689175),
    g = n(628284),
    S = n(691885),
    N = n(863610),
    C = n(922016),
    O = n(765671),
    R = n(194498),
    L = n(660183),
    y = n(980148);
  function D(e) {
    let { value: t, onChange: n, onSelectInteraction: i, serialize: r = (e) => String(e) } = e;
    return {
      select: (e) => {
        let { newValues: r, updated: a } = i(e, t);
        a && n(r);
      },
      isSelected: (e) => t?.has(e) ?? !1,
      clear: () => n(new Set()),
      serialize: r,
    };
  }
  function v(e, t) {
    let n = new Set(t);
    return (n.has(e) ? n.delete(e) : n.add(e), { newValues: n, updated: !0 });
  }
  function b(e, t) {
    return t.has(e)
      ? { newValues: new Set(), updated: !0 }
      : { newValues: new Set([e]), updated: !0 };
  }
  function M(e, t) {
    return t.has(e) ? { newValues: t, updated: !1 } : { newValues: new Set([e]), updated: !0 };
  }
  function P(e) {
    return e?.label;
  }
  function U(e) {
    return e.map((e) => P(e)).join(", ");
  }
  function w(e) {
    let {
        options: t,
        placeholder: n = L.intl.string(L.t.XqMe3N),
        className: a,
        isDisabled: l = !1,
        maxVisibleItems: o = 7,
        autoFocus: d = !1,
        popoutWidth: c,
        clearable: T = !1,
        size: m = "md",
        variant: g = "filled",
        onClose: S,
        onOpen: R,
        renderOptionLabel: D = P,
        renderOptionValue: v = U,
        popoutClassName: b,
        popoutPosition: M = "bottom",
        popoutLayerContext: w,
        optionClassName: x,
        closeOnSelect: k,
        select: F,
        isSelected: B,
        serialize: V,
        clear: H,
        hideIcon: j = !1,
        isProcessing: W = !1,
        "aria-label": Y,
        "aria-labelledby": K,
        label: $,
        description: z,
        helperText: X,
        errorMessage: Z,
        successMessage: q,
        layout: Q = "vertical",
      } = e,
      [J, ee] = r.useState(!1),
      { ref: et, width: en, height: ei } = (0, O.Ay)();
    r.useLayoutEffect(() => {
      l && ee(!1);
    }, [l]);
    let er = r.useCallback(
        (e) => {
          J === e || l || (ee(e), e ? R?.() : S?.());
        },
        [l, S, R, J],
      ),
      ea = r.useCallback(
        (e) => {
          J && !e && er(!1);
        },
        [er, J],
      ),
      es = (0, u.K)(ea),
      el = r.useCallback(
        (e) => {
          (F(e), k && et.current?.focus());
        },
        [F, k, et],
      ),
      eo = r.useCallback(
        (e) => {
          (e.stopPropagation(), H?.());
        },
        [H],
      ),
      ed = t.filter((e) => B(e.value));
    return (
      r.useLayoutEffect(() => {
        d && et.current?.focus();
      }, [d, et]),
      (0, i.jsx)(C.Y, {
        targetElementRef: et,
        spacing: 0,
        animation: C.Y.Animation.NONE,
        shouldShow: J,
        onRequestOpen: () => {
          er(!0);
        },
        onRequestClose: () => {
          er(!1);
        },
        renderPopout: (e) => {
          let { closePopout: n, position: r, updatePosition: a } = e;
          return (0, i.jsx)(G, {
            className: b,
            closeOnSelect: k,
            maxVisibleItems: o,
            width: "auto" === c ? void 0 : (c ?? en),
            isSelected: B,
            closePopout: n,
            buttonHeight: ei ?? 0,
            buttonRef: et,
            onSelect: el,
            options: t,
            serialize: V,
            renderOptionLabel: D,
            optionClassName: x,
            updatePosition: a,
            popoutPosition: r,
          });
        },
        position: M,
        layerContext: w,
        children: (e, t) => {
          let { onClick: r, onKeyDown: o, ...d } = e,
            { isShown: c } = t,
            u = c ? _.t : E.a;
          return (0, i.jsx)(A.D, {
            label: $,
            description: z,
            helperText: X,
            errorMessage: Z,
            successMessage: q,
            layout: Q,
            children: (e) =>
              (0, i.jsxs)(h.F, {
                as: f.D,
                tag: "div",
                role: "button",
                id: e?.controlId,
                "aria-describedby": e?.describedById,
                "aria-errormessage": e?.errorMessageId,
                "aria-invalid": e?.errorMessageId != null,
                disabled: l,
                "aria-busy": W,
                "aria-disabled": l,
                fullWidth: "horizontal" === Q,
                innerRef: (e) => {
                  ((et.current = e), (es.current = e));
                },
                onClick: l
                  ? void 0
                  : (e) => {
                      (r(e), er(!J));
                    },
                onKeyDown: (e) => {
                  ("ArrowDown" === e.key
                    ? er(!0)
                    : "Escape" === e.key && c && (e.stopPropagation(), er(!1)),
                    o(e));
                },
                ...d,
                containerClassName: s()(y.kL, a),
                "data-size": m,
                "data-variant": g,
                className: y.Lt,
                "aria-haspopup": "listbox",
                "aria-expanded": c,
                "aria-label": Y,
                "aria-labelledby": K,
                children: [
                  ed.length > 0
                    ? (0, i.jsx)(I.E, {
                        className: y.Uq,
                        variant: "text-md/medium",
                        children: v(ed),
                      })
                    : (0, i.jsx)("span", { className: y.qf, children: n }),
                  (0, i.jsx)("div", {
                    className: y.Pt,
                    children: W
                      ? (0, i.jsx)(N.n, { dotRadius: 3.5, themed: !0 })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            T
                              ? (0, i.jsx)(f.D, {
                                  role: "button",
                                  "aria-disabled": l,
                                  onClick: eo,
                                  "aria-label": L.intl.string(L.t.VkKicb),
                                  children: (0, i.jsx)(p.P, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: y.IU,
                                  }),
                                })
                              : null,
                            j ? null : (0, i.jsx)(u, { color: "currentColor", size: "sm" }),
                          ],
                        }),
                  }),
                ],
              }),
          });
        },
      })
    );
  }
  function G(e) {
    let {
        className: t,
        onSelect: n,
        closePopout: a,
        closeOnSelect: u = !0,
        isSelected: _,
        options: E,
        width: A,
        maxVisibleItems: h,
        renderOptionLabel: f,
        serialize: I,
        optionClassName: p,
        buttonHeight: g,
        buttonRef: S,
        updatePosition: N,
        popoutPosition: C,
      } = e,
      [O, L] = r.useState(0),
      D = r.useRef(null),
      v = r.useId(),
      b = (0, o.Ay)({
        id: v,
        async scrollToEnd() {},
        async scrollToStart() {},
        isEnabled: !0,
        wrap: !0,
      }),
      [M, P] = r.useState(null);
    r.useEffect(
      () =>
        (0, l.e)(v, (e) => {
          P(e);
        }),
      [v],
    );
    let U = r.useRef(null);
    ((0, T.tj)(U, { returnRef: S }),
      r.useLayoutEffect(() => {
        U.current?.focus();
      }, []),
      r.useEffect(() => {
        g > 0 && N();
      }, [g, N]),
      (0, R.A)(N),
      r.useLayoutEffect(() => {
        let e = D.current?.getBoundingClientRect()?.height;
        null != e && L(e);
      }, [h, E.length]),
      r.useEffect(() => {
        N();
      }, [N, O]));
    let w = r.useCallback(
        (e, t) => {
          (n(e), u && !t && a());
        },
        [a, n, u],
      ),
      G = r.useMemo(
        () =>
          E.map((e, t) =>
            (0, i.jsx)(
              x,
              {
                isSelected: _(e.value),
                value: e.value,
                label: f(e),
                onSelect: w,
                className: p,
                isDisabled: e.disabled,
                preventCloseOnSelect: e.preventCloseOnSelect,
                serialize: I,
              },
              e.key ?? t,
            ),
          ),
        [w, _, p, E, f, I],
      ),
      k = r.useMemo(
        () =>
          E.slice(0, h).map((e, t) =>
            (0, i.jsx)(
              x,
              {
                isSelected: _(e.value),
                value: e.value,
                label: f(e),
                onSelect: w,
                className: p,
                isDisabled: e.disabled,
                preventCloseOnSelect: e.preventCloseOnSelect,
                serialize: I,
                omitId: !0,
              },
              e.key ?? t,
            ),
          ),
        [w, _, h, p, E, f, I],
      ),
      F = E.length <= h ? m.zC : m.Ch;
    return (0, i.jsx)(d.hD, {
      navigator: b,
      children: (0, i.jsx)(d.PR, {
        children: (e) => {
          let { ref: n, onKeyDown: r, ...l } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(F, {
                className: s()(y.SW, t, { [y.O3]: "top" === C }),
                style: { width: A, maxHeight: O },
                ref: (e) => {
                  let t = e?.getScrollerNode() ?? null;
                  ((n.current = t), (U.current = t));
                },
                ...l,
                onKeyDown: (e) => {
                  if ("Escape" === e.key) {
                    (e.stopPropagation(), e.preventDefault(), a());
                    return;
                  }
                  r(e);
                },
                "aria-activedescendant": null != M ? (0, c.t$)(v, M) : void 0,
                role: "listbox",
                children: G,
              }),
              (0, i.jsx)("div", { "aria-hidden": !0, ref: D, className: y.PG, children: k }),
            ],
          });
        },
      }),
    });
  }
  function x(e) {
    let {
        className: t,
        value: n,
        label: r,
        onSelect: a,
        isSelected: l,
        isDisabled: o,
        preventCloseOnSelect: c,
        serialize: u,
        omitId: _ = !1,
      } = e,
      E = (0, d.rm)(u(n));
    return (0, i.jsxs)(f.D, {
      focusProps: { enabled: !1 },
      className: s()(y.uK, t, { [y.IZ]: o }),
      onClick: () => !o && a(n, c),
      ...E,
      id: _ ? void 0 : E["data-list-item-id"],
      "aria-selected": l,
      "aria-disabled": o,
      role: "option",
      children: [
        r,
        l &&
          (0, i.jsx)(g.y, {
            size: "custom",
            color: "currentColor",
            secondaryColor: "white",
            className: y.Dt,
            width: 20,
            height: 20,
          }),
      ],
    });
  }
  function k(e) {
    let { renderLeading: t, renderTrailing: n, value: r, onChange: a, ...s } = e,
      l = (function (e) {
        let { value: t, onChange: n, serialize: i = (e) => String(e) } = e;
        return {
          select: (e) => n(e),
          isSelected: (e) => e === t,
          clear: () => n(null),
          serialize: i,
        };
      })({ value: r, onChange: a }),
      {
        id: o,
        options: d,
        autoFocus: c,
        required: u,
        isDisabled: _,
        isProcessing: E,
        clearable: h,
        closeOnSelect: f = !0,
        maxVisibleItems: I,
        "aria-label": p,
        placeholder: T,
        variant: m,
        renderOptionLabel: g,
      } = s,
      { fieldProps: N } = (0, A.n)(s);
    if ("text-only" !== m && null == g) {
      let e = null == N.label && null != p;
      return (0, i.jsx)(S.l, {
        id: o,
        selectionMode: "single",
        onSelectionChange: (e) => {
          a(e);
        },
        options: d,
        formatOption: (e) => {
          let { key: i, value: r, label: a, disabled: s } = e;
          return {
            id: i ?? l.serialize(r),
            value: r,
            label: a,
            disabled: s,
            leading: null != t ? t(e) : void 0,
            trailing: null != n ? n(e) : void 0,
          };
        },
        value: r,
        fullWidth: !0,
        autoFocus: c,
        required: u,
        disabled: _,
        loading: E,
        clearable: h,
        closeOnSelect: f,
        maxOptionsVisible: I,
        placeholder: T,
        ...N,
        label: e ? p : N.label,
        hideLabel: !0 === N.hideLabel || e,
      });
    }
    return (0, i.jsx)(w, {
      ...s,
      ...l,
      renderOptionLabel:
        g ??
        (function () {
          if (null != t || null != n)
            return (e) =>
              (0, i.jsxs)("div", { className: y.G$, children: [t?.(e), e.label, n?.(e)] });
        })(),
    });
  }
  function F(e) {
    let { renderLeading: t, renderTrailing: n, ...r } = e,
      {
        id: a,
        serialize: s,
        options: l,
        select: o,
        autoFocus: d,
        required: c,
        isDisabled: u,
        isProcessing: _,
        clearable: E,
        closeOnSelect: h,
        maxVisibleItems: f,
        placeholder: I,
        "aria-label": p,
        variant: T,
        isSelected: m,
        renderOptionLabel: g,
      } = r,
      { fieldProps: N } = (0, A.n)(r);
    if ("text-only" !== T && null == g) {
      let e = null == N.label && null != p;
      return (0, i.jsx)(S.l, {
        id: a,
        selectionMode: "single",
        onSelectionChange: (e) => {
          o(e);
        },
        value: l?.find((e) => m?.(e.value))?.value ?? void 0,
        options: l,
        formatOption: (e) => {
          let { key: i, value: r, label: a, disabled: l } = e;
          return {
            id: i ?? s(r),
            value: r,
            label: a,
            disabled: l,
            leading: null != t ? t(e) : void 0,
            trailing: null != n ? n(e) : void 0,
          };
        },
        fullWidth: !0,
        autoFocus: d,
        required: c,
        disabled: u,
        loading: _,
        clearable: E,
        closeOnSelect: h,
        maxOptionsVisible: f,
        placeholder: I,
        ...N,
        label: e ? p : N.label,
        hideLabel: !0 === N.hideLabel || e,
      });
    }
    return (0, i.jsx)(w, {
      ...r,
      renderOptionLabel:
        g ??
        (function () {
          if (null != t || null != n)
            return (e) =>
              (0, i.jsxs)("div", { className: y.G$, children: [t?.(e), e.label, n?.(e)] });
        })(),
    });
  }
}
