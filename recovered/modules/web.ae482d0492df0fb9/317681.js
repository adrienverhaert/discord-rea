/* Recovered shipped factory. Module 317681.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3377487..3380825
 * Raw property SHA-256: 2cda6f8c9caf4afc5d9f995b9443bb46a3e27a4a0b932dd075a11cf9461e43ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    FV: () => p,
    M3: () => h,
    O7: () => f,
    SQ: () => I,
    cd: () => T,
    ke: () => m,
    n$: () => A,
    pY: () => g,
  }),
    n(321073));
  var i = n(155718),
    r = n(721768),
    a = n(861382),
    s = n(203779),
    l = n(31717),
    o = n(522602),
    d = n(408018),
    c = n(323350),
    u = n(820066),
    _ = n(551483);
  let E = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
  function A(e) {
    let t = u.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, _.Xg];
  }
  function h(e) {
    if (null == e.selection) return null;
    let t =
      u.VW.above(e, {
        at: e.selection.focus,
        match: (e) => u.AS.isType(e, "applicationCommandOption"),
      }) ?? null;
    return null != t || u.ZF.isCollapsed(e.selection)
      ? t
      : (u.VW.above(e, {
          at: e.selection.anchor,
          match: (e) => u.AS.isType(e, "applicationCommandOption"),
        }) ?? null);
  }
  function f(e) {
    let t = A(e),
      n = [],
      i = t?.[0].children;
    if (null != i)
      for (let e of i) u.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
  }
  function I(e, t, n) {
    let i = {};
    if (null == t.options) return {};
    let r = A(e),
      a = Object.fromEntries(t.options.map((e) => [e.name, e])),
      s = r?.[0].children;
    if (null != s) {
      for (let t of s)
        if (u.AS.isType(t, "applicationCommandOption")) {
          let r = a[t.optionName];
          null != r && (i[t.optionName] = p(e, r, t, n));
        }
    }
    return i;
  }
  function p(e, t, n, r) {
    let a = n.children.map((n) => {
      if (t.type === i.n4.ATTACHMENT) {
        let e = o.A.getUpload(r, t.name, l.C.SlashCommand);
        if (null != e) return { type: "text", text: e.filename ?? "" };
      }
      if (u.l5.isText(n)) return { type: "text", text: n.text };
      if (u.VW.isVoid(e, n)) {
        let e = (0, d.QR)(n);
        if (null != e) return e;
      }
      return { type: "text", text: (0, c.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== i.n4.STRING) {
      for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim();) a.shift();
      for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim();)
        a.pop();
    }
    return a;
  }
  function T(e, t, n, i, a) {
    if (null == e.options) return {};
    let l = Object.fromEntries(
      e.options.map((e) => [
        e.name,
        s.J({
          option: e,
          content: i[e.name] ?? null,
          guildId: t,
          channelId: n,
          allowEmptyValues: a,
        }),
      ]),
    );
    return (r._y(n, l), l);
  }
  function m(e, t, n, i, l) {
    let [o] = i,
      d = a.A.getActiveCommand(n),
      c = d?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let u = p(e, c, o, n),
      _ = s.J({ option: c, content: u, guildId: t, channelId: n, allowEmptyValues: l });
    return (r.H2(n, { [o.optionName]: { lastValidationResult: _ } }), _);
  }
  function g(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = u.VW.richValue(e),
      i = [],
      r = new Set(f(e)),
      a = {},
      s = new Set();
    for (let e of t.options) ((a[e.displayName] = e), r.has(e.name) || s.add(e.displayName));
    let l = null;
    for (let t = 0; t < n.length; t++) {
      let r = n[t];
      if ("line" === r.type || "applicationCommand" === r.type)
        for (let o = 0; o < r.children.length; o++) {
          let d,
            _ = r.children[o],
            A = [t, o];
          if (u.AS.isType(_, "applicationCommandOption")) {
            null != l &&
              ((l.valueRange.focus = u.VW.before(e, A) ?? u.VW.start(e, [])),
              (l.text = (0, c.WO)(n, { mode: "raw", range: l.valueRange }).trim()),
              i.push(l),
              (l = null));
            continue;
          }
          if (u.l5.isText(_))
            for (E.lastIndex = 0; null != (d = E.exec(_.text));) {
              if (0 !== d.index && null == _.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
              let e = d[1];
              if (!s.has(e)) continue;
              s.delete(e);
              let t = a[e];
              if (null == t) continue;
              let r = { path: A, offset: d.index },
                o = { path: A, offset: r.offset + d[0].length },
                u = { path: A, offset: o.offset },
                E = {
                  name: t.name,
                  displayName: t.displayName,
                  type: t.type,
                  keyRange: { anchor: r, focus: o },
                  valueRange: { anchor: u, focus: u },
                  text: "",
                };
              (null != l &&
                ((l.valueRange.focus = E.keyRange.anchor),
                (l.text = (0, c.WO)(n, { mode: "raw", range: l.valueRange }).trim()),
                i.push(l)),
                (l = E));
            }
        }
    }
    return (
      null != l &&
        ((l.valueRange.focus = u.VW.end(e, [])),
        (l.text = (0, c.WO)(n, { mode: "raw", range: l.valueRange }).trim()),
        i.push(l)),
      i
    );
  }
}
