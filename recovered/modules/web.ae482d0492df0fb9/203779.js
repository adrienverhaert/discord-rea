/* Recovered shipped factory. Module 203779.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2973264..2978047
 * Raw property SHA-256: ad67ede34b24cfc134065ab377426e762dfbc7178b1a63d226e691e25efd19de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => T });
  var i = n(459016),
    r = n(392054),
    a = n(284009),
    s = n.n(a),
    l = n(155718),
    o = n(224868),
    d = n(773669),
    c = n(522602),
    u = n(360161),
    _ = n(168186),
    E = n(660183);
  let A = {
    [l.n4.SUB_COMMAND]: () => ({ success: !1 }),
    [l.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
    [l.n4.BOOLEAN]: (e) => {
      if ("text" !== e.type) return { success: !1 };
      let t = e.text.trim();
      return { success: null != (0, u.a5)(t) };
    },
    [l.n4.STRING]: (e, t, n) => {
      let i;
      switch ((s()(t.type === l.n4.STRING, "option type must match validator type"), e.type)) {
        case "emoji":
          i = e.surrogate;
          break;
        case "text":
          i = e.text.trim();
          break;
        default:
          return { success: !1 };
      }
      if (null != t.choices) return { success: null != (0, u.$7)(t.choices, i) };
      if (t.autocomplete && null != (0, u.Xf)(n, t.name, i)) return { success: !0 };
      let r = i;
      if (void 0 !== t.minLength || void 0 !== t.maxLength) {
        if (null == r) return { success: !1 };
        let e = (function (e, t, n) {
          if (
            (void 0 !== t.minLength && e.length < t.minLength) ||
            (void 0 !== t.maxLength && e.length > t.maxLength)
          ) {
            if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
              return {
                success: !1,
                error: E.intl.formatToPlainString(n.exactRangeErrorMessage, {
                  value: I(t.minLength),
                }),
              };
            else if (void 0 !== t.maxLength && void 0 !== t.minLength)
              return {
                success: !1,
                error: E.intl.formatToPlainString(n.rangeErrorMessage, {
                  minimum: I(t.minLength),
                  maximum: I(t.maxLength),
                }),
              };
            else if (void 0 !== t.minLength)
              return {
                success: !1,
                error: E.intl.formatToPlainString(n.minErrorMessage, { minimum: I(t.minLength) }),
              };
            else if (void 0 !== t.maxLength)
              return {
                success: !1,
                error: E.intl.formatToPlainString(n.maxErrorMessage, { maximum: I(t.maxLength) }),
              };
          }
          return { success: !0 };
        })(r, t, {
          exactRangeErrorMessage: E.t["e+9/SY"],
          rangeErrorMessage: E.t.IE1sTh,
          minErrorMessage: E.t.rXAFQD,
          maxErrorMessage: E.t["ycEPx/"],
        });
        if (!e.success) return e;
      }
      return { success: !0 };
    },
    [l.n4.INTEGER]: (e, t, n) => {
      s()(t.type === l.n4.INTEGER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return { success: !1 };
      if (null != t.choices) return { success: null != (0, u.Bk)(t.choices, r) };
      if (t.autocomplete && null != (0, u.lM)(n, t.name, r)) return { success: !0 };
      let a = Number(i.normalizeNumericString(d.default.locale, r));
      return null == a || isNaN(a) || !Number.isInteger(a) || !Number.isSafeInteger(a)
        ? { success: !1 }
        : f(a, t, E.t["8Y5zsp"], E.t.CyRLmH, E.t["VD3Q+S"]);
    },
    [l.n4.NUMBER]: (e, t, n) => {
      s()(t.type === l.n4.NUMBER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return { success: !1 };
      if (null != t.choices) return { success: null != (0, u.Bk)(t.choices, r) };
      if (t.autocomplete && null != (0, u.lM)(n, t.name, r)) return { success: !0 };
      let a = Number(i.normalizeNumericString(d.default.locale, r));
      return isNaN(a) || a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER
        ? { success: !1 }
        : f(a, t, E.t["8Y5zsp"], E.t.CyRLmH, E.t["VD3Q+S"]);
    },
    [l.n4.USER]: (e, t, n, i) => {
      if ("text" !== e.type) return { success: "userMention" === e.type };
      {
        if ((0, _.hT)(e.text)) return { success: !0 };
        let t = (0, o.f)(e.text, i, n, { allowRoles: !1 });
        return { success: t?.type === "userMention" };
      }
    },
    [l.n4.CHANNEL]: (e, t, n, i) => {
      if ("text" !== e.type) return { success: "channelMention" === e.type };
      {
        if ((0, _.hT)(e.text)) return { success: !0 };
        let t = (0, o.f)(e.text, i, n);
        return { success: t?.type === "channelMention" };
      }
    },
    [l.n4.ROLE]: (e, t, n, i) => {
      if ("text" !== e.type) return { success: h(e) };
      {
        if ((0, _.hT)(e.text)) return { success: !0 };
        let t = (0, o.f)(e.text, i, n, { allowUsers: !1 });
        return { success: t?.type === "roleMention" };
      }
    },
    [l.n4.MENTIONABLE]: (e, t, n, i) => {
      if ("text" !== e.type) return { success: "userMention" === e.type || h(e) };
      {
        if ((0, _.hT)(e.text)) return { success: !0 };
        let t = (0, o.f)(e.text, i, n);
        return { success: null != t && ("userMention" === t.type || h(t)) };
      }
    },
    [l.n4.ATTACHMENT]: (e, t, n, i, r) => {
      if ("text" !== e.type) return { success: !1 };
      let a = c.A.getUpload(n, t.name, (0, _.Qr)(r));
      return { success: null != a && a.filename === e.text };
    },
  };
  function h(e) {
    return "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
  }
  function f(e, t, n, i, r) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
      if (null != t.maxValue && null != t.minValue)
        return {
          success: !1,
          error: E.intl.formatToPlainString(n, { minimum: I(t.minValue), maximum: I(t.maxValue) }),
        };
      else if (null != t.minValue)
        return { success: !1, error: E.intl.formatToPlainString(i, { minimum: I(t.minValue) }) };
      else if (null != t.maxValue)
        return { success: !1, error: E.intl.formatToPlainString(r, { maximum: I(t.maxValue) }) };
    }
    return { success: !0 };
  }
  function I(e) {
    return e.toLocaleString(E.intl.currentLocale, { useGrouping: !1 });
  }
  var p = n(73510);
  function T(e) {
    let {
        option: t,
        content: n,
        guildId: a,
        channelId: s,
        allowEmptyValues: l,
        commandOrigin: o = r.iw.CHAT,
      } = e,
      d = null != n ? (0, i.getString)({ content: n }, "content").trim() : "",
      c = t.required;
    if (null == n) return c ? { success: !1, error: E.intl.string(E.t.JZJQL2) } : { success: !0 };
    if ("" === d)
      return l
        ? { success: !0 }
        : c
          ? { success: !1, error: E.intl.string(E.t.JZJQL2) }
          : { success: !1, error: (0, p.tE)(t) };
    let u = n.length > 1 ? { type: "text", text: d } : n[0],
      _ = A[t.type](u, t, s, a, o);
    return (_.success || null != _.error || (_.error = (0, p.tE)(t)), _);
  }
}
