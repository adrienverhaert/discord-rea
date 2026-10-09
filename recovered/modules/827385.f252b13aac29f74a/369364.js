/* Recovered shipped factory. Module 369364.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 20827..22587
 * Raw property SHA-256: 46177e558cf10d714e8b90742ee4686c75f1579d648becd6ef4a9779800b35b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { m: () => i });
  var a = t(243399),
    r = t(206311),
    u = t(411211),
    s = t(501974);
  function i(e, n) {
    let t = [],
      i = !1,
      d = !1,
      l = (0, s.n)(e),
      o = l.dataLocale,
      _ = u.Y.localeData[o];
    if (!_) throw TypeError("Invalid locale");
    let c = l.numberingSystem,
      y = _.digitalFormat[c];
    for (let e = 0; e < r.u.length && !i; e++) {
      let u = r.u[e],
        s = n[u.valueField],
        o = l[u.styleSlot],
        _ = l[u.displaySlot],
        { unit: c, numberFormatUnit: f } = u,
        h = Object.create(null);
      ("seconds" === c || "milliseconds" === c || "microseconds" === c) &&
        "numeric" ===
          ("seconds" === c
            ? l.milliseconds
            : "milliseconds" === c
              ? l.microseconds
              : l.nanoseconds) &&
        ("seconds" === c
          ? (s += n.milliseconds / 1e3 + n.microseconds / 1e6 + n.nanoseconds / 1e9)
          : "milliseconds" === c
            ? (s += n.microseconds / 1e3 + n.nanoseconds / 1e6)
            : (s += n.nanoseconds / 1e3),
        void 0 === l.fractionalDigits
          ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
          : ((h.maximumFractionDigits = l.fractionalDigits),
            (h.minimumFractionDigits = l.fractionalDigits)),
        (h.roundingMode = "trunc"),
        (i = !0));
      if (0 !== s || "auto" !== _) {
        let e;
        ((h.numberingSystem = l.numberingSystem),
          "2-digit" === o && (h.minimumIntegerDigits = 2),
          "2-digit" !== o &&
            "numeric" !== o &&
            ((h.style = "unit"), (h.unit = f), (h.unitDisplay = o)));
        let n = (0, a.Nt)(l.locale, h);
        (d ? (e = t[t.length - 1]).push({ type: "literal", value: y }) : (e = []),
          n.formatToParts(s).forEach(({ type: n, value: t }) => {
            e.push({ type: n, value: t, unit: f });
          }),
          d || (("2-digit" === o || "numeric" === o) && (d = !0), t.push(e)));
      } else d = !1;
    }
    let f = Object.create(null);
    f.type = "unit";
    let h = l.style;
    ("digital" === h && (h = "short"), (f.style = h));
    let w = (0, a.A4)(l.locale, f),
      m = [];
    for (let e of t) {
      let n = "";
      for (let { value: t } of e) n += t;
      m.push(n);
    }
    let p = w.formatToParts(m),
      b = 0,
      g = t.length,
      M = [];
    for (let { type: e, value: n } of p)
      if ("element" === e) {
        for (let e of ((0, a.V1)(b < g, "Index out of bounds"), t[b])) M.push(e);
        b++;
      } else
        ((0, a.V1)("literal" === e, "Type must be literal"), M.push({ type: "literal", value: n }));
    return M;
  }
  t(632459);
}
