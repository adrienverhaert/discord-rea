/* Recovered shipped factory. Module 715022.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10434468..10435241
 * Raw property SHA-256: 5c0b4b0704dc595551fd8460333168cfa843043e83d82b4dea9f47bfe8c4678f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    return (
      null != t &&
      (Array.isArray(t)
        ? t.includes(e)
        : "object" == typeof e
          ? JSON.stringify(e) === JSON.stringify(t)
          : e === t)
    );
  }
  function r(e, t, n) {
    let i = [...t];
    return (
      t.includes(n)
        ? (i = t.filter((e) => e.id !== n.id))
        : "multiple" === e
          ? i.push(n)
          : (i = [n]),
      i
    );
  }
  function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
      t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
  }
  function s(e) {
    if (
      !(function (e) {
        if (0 === e.length) return !1;
        let t = e[0];
        return !("value" in t) && Array.isArray(t.options);
      })(e)
    )
      return { flatOptions: e, groups: [] };
    let t = [],
      n = [];
    for (let i of e)
      0 !== i.options.length &&
        (t.push(...i.options), n.push({ label: i.label, count: i.options.length }));
    return { flatOptions: t, groups: n };
  }
  (n.d(t, { ZN: () => a, fI: () => i, qH: () => r, yG: () => s }), n(321073));
}
