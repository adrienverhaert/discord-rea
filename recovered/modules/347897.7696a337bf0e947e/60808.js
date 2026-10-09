/* Recovered shipped factory. Module 60808.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1022650..1023292
 * Raw property SHA-256: 9646bb220cee30807e0b0317b51fbbf2af0ec9f29e53f89abc3daf0cb5e83759
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { J: () => o });
  let n = new Map(),
    i = new Map();
  class o {
    constructor(e, t) {
      ((this.locale = e), (this.strings = t));
    }
    format(e, t) {
      let r = this.strings.getStringForLocale(e, this.locale);
      return "function" == typeof r ? r(t, this) : r;
    }
    plural(e, t, r = "cardinal") {
      let i = t["=" + e];
      if (i) return "function" == typeof i ? i() : i;
      let o = this.locale + ":" + r,
        a = n.get(o);
      return (
        a || ((a = new Intl.PluralRules(this.locale, { type: r })), n.set(o, a)),
        "function" == typeof (i = t[a.select(e)] || t.other) ? i() : i
      );
    }
    number(e) {
      let t = i.get(this.locale);
      return (t || ((t = new Intl.NumberFormat(this.locale)), i.set(this.locale, t)), t.format(e));
    }
    select(e, t) {
      let r = e[t] || e.other;
      return "function" == typeof r ? r() : r;
    }
  }
}
