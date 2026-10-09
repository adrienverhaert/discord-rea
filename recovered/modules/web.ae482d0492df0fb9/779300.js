/* Recovered shipped factory. Module 779300.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9852926..9854358
 * Raw property SHA-256: 18653fc112392ebe782a548b3fb3d161718c3572f7057a2257f531fef5fe4c24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CZ: () => s, Hx: () => a, eq: () => o, rr: () => l });
  var i = n(894279),
    r = n(620632);
  function a(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return i ? { status: "skeleton" } : { status: "hidden" };
    let s = t(e.fields.text, [r.o.STRING, r.o.NUMBER]),
      l = a ? null : t(e.fields.label, [r.o.STRING, r.o.NUMBER]);
    if (null == s && null == l) return { status: "skeleton" };
    let o = t(e.fields.icon, [r.o.MEDIA]),
      d =
        null == l || "" === l.value
          ? ""
          : `${"number" == typeof l.value ? n.format(l.value) : l.value}: `,
      c =
        null == s || "" === s.value
          ? "\u2013"
          : "number" == typeof s.value
            ? n.format(s.value)
            : s.value;
    return { status: "value", text: `${d}${c}`, icon: o?.media ?? null };
  }
  function s(e, t, n, a) {
    let s,
      l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e)
      return l ? { value: { status: "skeleton" }, label: { status: "skeleton" } } : null;
    let o = t(e.fields.value, [r.o.STRING, r.o.NUMBER]),
      d = t(e.fields.label, [r.o.STRING]),
      c = t(e.fields.icon, [r.o.MEDIA]);
    if (null == o) s = { status: "skeleton" };
    else
      s = {
        status: "value",
        text:
          o.type === r.o.STRING
            ? o.value
            : o.presentationType === i.P.DURATION
              ? a(o.value)
              : n.format(o.value),
        icon: c?.media ?? null,
      };
    return {
      value: s,
      label:
        null == e.fields.label
          ? { status: "hidden" }
          : null == d
            ? { status: "skeleton" }
            : { status: "value", text: d.value },
    };
  }
  function l(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
  }
  function o(e, t) {
    return null == e ? 0 : null == t ? l(e.value) : 0 === t.value ? 0 : l(e.value / t.value);
  }
}
