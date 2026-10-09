/* Recovered shipped factory. Module 411211.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 44984..49123
 * Raw property SHA-256: 224bb63e9b913eccf82bb1b4dfa0dcc2b21a097ef14b9c2790f3344b1eb71cd2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Y: () => b });
  var n = r(842830),
    a = r(120330),
    o = r(518375),
    i = r(97626),
    s = r(243399),
    l = r(29685),
    c = r(641277),
    u = r(439489),
    h = r(369364),
    d = r(727504),
    f = r(501974),
    p = r(225441),
    m = r(762437);
  r(632459);
  let g = [
      "locale",
      "style",
      "years",
      "yearsDisplay",
      "months",
      "monthsDisplay",
      "weeks",
      "weeksDisplay",
      "days",
      "daysDisplay",
      "hours",
      "hoursDisplay",
      "minutes",
      "minutesDisplay",
      "seconds",
      "secondsDisplay",
      "milliseconds",
      "millisecondsDisplay",
      "microseconds",
      "microsecondsDisplay",
      "nanoseconds",
      "nanosecondsDisplay",
      "numberingSystem",
      "fractionalDigits",
    ],
    y = [
      {
        styleSlot: "years",
        displaySlot: "yearsDisplay",
        unit: "years",
        values: ["long", "short", "narrow"],
        digitalDefault: "short",
      },
      {
        styleSlot: "months",
        displaySlot: "monthsDisplay",
        unit: "months",
        values: ["long", "short", "narrow"],
        digitalDefault: "short",
      },
      {
        styleSlot: "weeks",
        displaySlot: "weeksDisplay",
        unit: "weeks",
        values: ["long", "short", "narrow"],
        digitalDefault: "short",
      },
      {
        styleSlot: "days",
        displaySlot: "daysDisplay",
        unit: "days",
        values: ["long", "short", "narrow"],
        digitalDefault: "short",
      },
      {
        styleSlot: "hours",
        displaySlot: "hoursDisplay",
        unit: "hours",
        values: ["long", "short", "narrow", "numeric", "2-digit"],
        digitalDefault: "numeric",
      },
      {
        styleSlot: "minutes",
        displaySlot: "minutesDisplay",
        unit: "minutes",
        values: ["long", "short", "narrow", "numeric", "2-digit"],
        digitalDefault: "numeric",
      },
      {
        styleSlot: "seconds",
        displaySlot: "secondsDisplay",
        unit: "seconds",
        values: ["long", "short", "narrow", "numeric", "2-digit"],
        digitalDefault: "numeric",
      },
      {
        styleSlot: "milliseconds",
        displaySlot: "millisecondsDisplay",
        unit: "milliseconds",
        values: ["long", "short", "narrow", "numeric"],
        digitalDefault: "numeric",
      },
      {
        styleSlot: "microseconds",
        displaySlot: "microsecondsDisplay",
        unit: "microseconds",
        values: ["long", "short", "narrow", "numeric"],
        digitalDefault: "numeric",
      },
      {
        styleSlot: "nanoseconds",
        displaySlot: "nanosecondsDisplay",
        unit: "nanoseconds",
        values: ["long", "short", "narrow", "numeric"],
        digitalDefault: "numeric",
      },
    ];
  class b {
    constructor(e, t) {
      if (!(this && this instanceof b ? this.constructor : void 0))
        throw TypeError("Intl.DurationFormat must be called with 'new'");
      const r = (0, n.N)(e),
        s = Object.create(null),
        l = void 0 === t ? Object.create(null) : (0, a.BT)(t),
        h = (0, o.W)(l, "localeMatcher", "string", ["best fit", "lookup"], "best fit"),
        d = (0, o.W)(l, "numberingSystem", "string", void 0, void 0);
      if (void 0 !== d && 0 > p.P.indexOf(d)) throw RangeError(`Invalid numberingSystems: ${d}`);
      ((s.nu = d), (s.localeMatcher = h));
      const { localeData: m, availableLocales: g } = b,
        w = (0, c.B)(g, r, s, ["nu"], m, b.getDefaultLocale),
        v = w.locale,
        M = (0, f.n)(this);
      ((M.initializedDurationFormat = !0), (M.locale = v), (M.numberingSystem = w.nu));
      const x = (0, o.W)(l, "style", "string", ["long", "short", "narrow", "digital"], "short");
      ((M.style = x), (M.dataLocale = w.dataLocale));
      let _ = "";
      (y.forEach((e) => {
        let { styleSlot: t, displaySlot: r, unit: n, values: a, digitalDefault: o } = e,
          i = (0, u.$)(n, l, x, a, o, _);
        ((M[t] = i.style),
          (M[r] = i.display),
          ("hours" === n ||
            "minutes" === n ||
            "seconds" === n ||
            "milliseconds" === n ||
            "microseconds" === n) &&
            (_ = i.style));
      }),
        (M.fractionalDigits = (0, i.z)(l, "fractionalDigits", 0, 9, void 0)));
    }
    resolvedOptions() {
      if ("object" != typeof this || !(0, a.Wt)(b, this))
        throw TypeError(
          "Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver",
        );
      let e = (0, f.n)(this),
        t = {};
      for (let r of g) {
        let n = e[r];
        ("fractionalDigits" === r
          ? void 0 !== n && (n = Number(n))
          : (0, s.V1)(void 0 !== n, `Missing internal slot ${r}`),
          (t[r] = n));
      }
      return t;
    }
    formatToParts(e) {
      if (void 0 === (0, f.n)(this).initializedDurationFormat)
        throw TypeError("Error uninitialized locale");
      let t = (0, d.H)(e),
        r = (0, h.m)(this, t),
        n = [];
      for (let { type: e, unit: t, value: a } of r) {
        let r = { type: e, value: a };
        (t && (r.unit = t), n.push(r));
      }
      return n;
    }
    format(e) {
      if (void 0 === (0, f.n)(this).initializedDurationFormat)
        throw TypeError("Error uninitialized locale");
      let t = (0, d.H)(e),
        r = (0, h.m)(this, t),
        n = "";
      for (let { value: e } of r) n += e;
      return n;
    }
    static supportedLocalesOf(e, t) {
      return (0, l.U)(b.availableLocales, (0, n.N)(e), t);
    }
    static __defaultLocale = "en";
    static availableLocales = new Set();
    static localeData = Object.keys(m.N.localeData).reduce((e, t) => {
      b.availableLocales.add(t);
      let r = m.N.localeData[t].nu;
      return (
        (e[t] = {
          nu: r,
          digitalFormat:
            m.N.localeData[t].separator || r.reduce((e, t) => ((e[t] = m.N.default), e), {}),
        }),
        e
      );
    }, {});
    static getDefaultLocale = () => b.__defaultLocale;
    static polyfilled = !0;
  }
}
