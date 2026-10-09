/* Recovered shipped factory. Module 103557.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10458822..10460364
 * Raw property SHA-256: 4b6bc05917d748fae15f5807ba5740edd48a8fc63c02dde6bea6c20a1c4d8f96
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(559106),
    o = n(452027),
    d = n(15626),
    c = n(668639),
    u = n(862301),
    _ = n(205086),
    E = n(281595),
    A = n(643135),
    h = n(648239),
    f = n(969490);
  function I(e) {
    let {
        value: t,
        placeholder: n = "",
        autoFocus: a = !1,
        autosize: d = !1,
        minLength: c,
        maxLength: A,
        error: I,
        defaultDirty: T,
        showCharacterCount: m,
        showRemainingCharacterCount: g = !0,
        rows: S = 3,
        maxRows: N,
        inputRef: C,
        ...O
      } = e,
      { fieldProps: R, props: L } = (0, o.n)(O),
      { disabled: y } = R,
      D = (0, E.Y)({
        validateOn: "change",
        error: I,
        value: t,
        minLength: c,
        maxLength: A,
        defaultDirty: T,
      }),
      v = r.useMemo(() => {
        if (!m || null == A) return 10;
        let e = `${A}`.length;
        return 7.23 * (e += `${A} / `.length) + 10;
      }, [A, m]),
      b = m ? (0, i.jsx)(_.n, { value: t, maxLength: g && null != A ? A : void 0 }) : null;
    return (0, i.jsx)(o.D, {
      ...R,
      trailingAuxiliaryContent: b,
      errorMessage: D.hasError ? (D.errorMessage ?? void 0) : void 0,
      children: (0, i.jsx)(u.F, {
        validation: D,
        disabled: y,
        children: (0, i.jsx)(l.vN, {
          children: (0, i.jsx)(p, {
            autosize: d,
            maxRows: N,
            className: s()(h.Tg, f.qD),
            style: { paddingRight: v },
            placeholder: n,
            value: t,
            autoFocus: a,
            minLength: c,
            maxLength: A,
            rows: S,
            disabled: y,
            "data-mana-component": "text-area",
            ...L,
            onChange: (e) => {
              let { onChange: t } = L;
              (t?.(e.currentTarget.value), D.setShouldValidate(!0));
            },
            ref: C,
          }),
        }),
      }),
    });
  }
  function p(e) {
    let { "aria-labelledby": t, autosize: n, maxRows: a, ...s } = e,
      l = (0, c.xW)(),
      o = r.useContext(d._),
      u = n ? A.d : "textarea";
    return (0, i.jsx)(u, {
      ...s,
      ...(n ? { maxRows: a } : null),
      id: o?.controlId,
      "aria-labelledby": t ?? l.titleId,
      "aria-describedby": o?.describedById,
      "aria-errormessage": o?.errorMessageId,
      "aria-invalid": o?.errorMessageId != null,
    });
  }
}
