/* Recovered shipped factory. Module 641277.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 42955..45386
 * Raw property SHA-256: 50ebd8794c5172529ea70d4f7b3c2dc97847c0df812aa26a89e86a04fcb0faec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { B: () => s });
  var a = t(26232);
  function r(e) {
    return Intl.getCanonicalLocales(e)[0];
  }
  var u = t(183580);
  function s(e, n, t, s, i, d) {
    let l, o;
    if ("lookup" === t.localeMatcher)
      l = (function (e, n, t) {
        let r = { locale: "" };
        for (let t of n) {
          let n = t.replace(a.KB, ""),
            s = (0, u.q)(e, n);
          if (s) return ((r.locale = s), t !== n && (r.extension = t.slice(n.length, t.length)), r);
        }
        return ((r.locale = t()), r);
      })(Array.from(e), n, d);
    else {
      var _;
      let t, r, u, s, i;
      ((_ = Array.from(e)),
        (u = []),
        (s = n.reduce((e, n) => {
          let t = n.replace(a.KB, "");
          return (u.push(t), (e[t] = n), e);
        }, {})),
        (i = (0, a.B4)(u, _)).matchedSupportedLocale &&
          i.matchedDesiredLocale &&
          ((t = i.matchedSupportedLocale),
          (r = s[i.matchedDesiredLocale].slice(i.matchedDesiredLocale.length) || void 0)),
        (l = t ? { locale: t, extension: r } : { locale: d() }));
    }
    null == l && (l = { locale: d(), extension: "" });
    let c = l.locale,
      y = i[c],
      f = { locale: "en", dataLocale: c };
    o = l.extension
      ? (function (e) {
          let n;
          ((0, a.V1)(e === e.toLowerCase(), "Expected extension to be lowercase"),
            (0, a.V1)(
              "-u-" === e.slice(0, 3),
              "Expected extension to be a Unicode locale extension",
            ));
          let t = [],
            r = [],
            u = e.length,
            s = 3;
          for (; s < u;) {
            let i,
              d = e.indexOf("-", s);
            i = -1 === d ? u - s : d - s;
            let l = e.slice(s, s + i);
            ((0, a.V1)(i >= 2, "Expected a subtag to have at least 2 characters"),
              void 0 === n && 2 != i
                ? -1 === t.indexOf(l) && t.push(l)
                : 2 === i
                  ? ((n = { key: l, value: "" }),
                    void 0 === r.find((e) => e.key === n?.key) && r.push(n))
                  : n?.value === ""
                    ? (n.value = l)
                    : ((0, a.V1)(void 0 !== n, "Expected keyword to be defined"),
                      (n.value += "-" + l)),
              (s += i + 1));
          }
          return { attributes: t, keywords: r };
        })(l.extension).keywords
      : [];
    let h = [];
    for (let e of s) {
      let n,
        r = y?.[e] ?? [];
      (0, a.V1)(Array.isArray(r), `keyLocaleData for ${e} must be an array`);
      let u = r[0];
      (0, a.V1)(void 0 === u || "string" == typeof u, "value must be a string or undefined");
      let s = o.find((n) => n.key === e);
      if (s) {
        let t = s.value;
        "" !== t
          ? r.indexOf(t) > -1 && (n = { key: e, value: (u = t) })
          : r.indexOf("true") > -1 && (n = { key: e, value: (u = "true") });
      }
      let i = t[e];
      ((0, a.V1)(null == i || "string" == typeof i, "optionsValue must be a string or undefined"),
        "string" == typeof i &&
          "" ===
            (i = (function (e, n) {
              let t = n.toLowerCase();
              return ((0, a.V1)(void 0 !== e, "ukey must be defined"), t);
            })(e.toLowerCase(), i)) &&
          (i = "true"),
        i !== u && r.indexOf(i) > -1 && ((u = i), (n = void 0)),
        n && h.push(n),
        (f[e] = u));
    }
    return (
      h.length > 0 &&
        (c = (function (e, n, t) {
          (0, a.V1)(
            -1 === e.indexOf("-u-"),
            "Expected locale to not have a Unicode locale extension",
          );
          let u = "-u";
          for (let e of n) u += `-${e}`;
          for (let e of t) {
            let { key: n, value: t } = e;
            ((u += `-${n}`), "" !== t && (u += `-${t}`));
          }
          if ("-u" === u) return r(e);
          let s = e.indexOf("-x-");
          return r(-1 === s ? e + u : e.slice(0, s) + u + e.slice(s));
        })(c, [], h)),
      (f.locale = c),
      f
    );
  }
}
