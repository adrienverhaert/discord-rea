/* Recovered shipped factory. Module 573725.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 927746..929208
 * Raw property SHA-256: 778fe71ced55144748dfd0f7539c5fb1cbfe1de0021f8c433a12d0981c0e37ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(668639),
    o = n(559106),
    d = n(281595),
    c = n(660183),
    u = n(151167);
  function _(e) {
    let t,
      {
        className: n,
        inputClassName: a,
        disabled: _ = !1,
        editable: E,
        inputRef: A,
        prefixElement: h,
        focusProps: f,
        name: I = "",
        type: p = "text",
        placeholder: T = "",
        maxLength: m = 999,
        value: g,
        defaultValue: S,
        minLength: N,
        error: C,
        defaultDirty: O = !1,
        ...R
      } = e,
      [L, y] = r.useState(O),
      D =
        ((t = r.useContext(l.cK)),
        r.useEffect(() => {
          (t.setHasValue?.((null != S && "" !== S) || (null != g && "" !== g)),
            t.setIsFocused?.(!1));
        }, []),
        r.useEffect(() => {
          null != g && "" !== g && t.setHasValue?.(!0);
        }, [t, g]),
        t),
      v = r.useMemo(
        () =>
          null === C || "" === C
            ? null
            : null != C
              ? C
              : L
                ? null != N && (g?.length ?? 0) < N
                  ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: N })
                  : null != m && (g?.length ?? 0) > m
                    ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: m })
                    : null
                : null,
        [C, L, N, m, g?.length],
      ),
      b = (null != C && "" !== C) || null != v;
    return (0, i.jsxs)("div", {
      className: s()(u.I6, n),
      children: [
        null != h && h,
        (0, i.jsx)(o.vN, {
          ...f,
          children: (0, i.jsx)("input", {
            name: I,
            className: s()(u.hF, a, { [u.z3]: b, [u.r9]: _, [u.LL]: E }),
            disabled: _,
            readOnly: !1 === E || void 0,
            type: p,
            placeholder: T,
            maxLength: m,
            minLength: N,
            value: g,
            defaultValue: S,
            ...R,
            "aria-labelledby": R["aria-labelledby"] ?? D.titleId,
            onChange: function (e) {
              (R.onChange?.(e.currentTarget.value, I),
                y(!0),
                D.setHasValue?.("" !== e.currentTarget.value));
            },
            onBlur: function (e) {
              (R.onBlur?.(e, I), D.setIsFocused?.(!1));
            },
            onFocus: function (e) {
              (R.onFocus?.(e, I), D.setIsFocused?.(!0));
            },
            ref: A,
          }),
        }),
        (0, i.jsx)(d.U, { error: v }),
      ],
    });
  }
}
