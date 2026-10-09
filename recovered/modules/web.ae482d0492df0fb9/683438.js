/* Recovered shipped factory. Module 683438.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10412852..10413442
 * Raw property SHA-256: 43bd9d36e757f7d7a935de3c54c15f3baeb131082a5d0922e10f3ced4ef702e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => l });
  var i = n(477900);
  n(582128);
  var r = n(7689),
    a = n(460890),
    s = n(95477);
  function l(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: l,
        placeholder: o,
        onKeyDown: d,
        size: c = "md",
        disabled: u = !1,
        onChange: _,
        onBlur: E,
        onFocus: A,
        autoComplete: h,
        inputProps: f,
        focusProps: I,
        "aria-label": p,
        ref: T,
      } = e,
      { i18n: m } = (0, a.G9)();
    return (0, i.jsx)(s.k, {
      ...f,
      onFocus: A,
      onBlur: E,
      value: t,
      onChange: _,
      onKeyDown: d,
      placeholder: o ?? m.SEARCH,
      disabled: u,
      autoFocus: n,
      autoComplete: h,
      "aria-label": p ?? m.SEARCH,
      inputRef: T,
      leading: r.MagnifyingGlassIcon,
      onClear: l,
      clearable: null != l,
      size: c,
      fullWidth: !0,
      focusProps: I,
    });
  }
}
