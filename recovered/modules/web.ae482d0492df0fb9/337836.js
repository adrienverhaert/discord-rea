/* Recovered shipped factory. Module 337836.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10332587..10333222
 * Raw property SHA-256: b5885f55dddcf0664f1e4e1629511c6d7dd6e250a3a5c4efe01f7207a5202029
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Jh: () => o, P: () => d, sM: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(499957);
  let s = "popover-portal",
    l = r.createContext(null);
  function o(e) {
    let { children: t, enabled: n = !0 } = e,
      [a, s] = r.useState(null),
      o = r.useMemo(() => ({ enabled: n, target: a, registerTarget: s }), [n, a]);
    return (0, i.jsx)(l.Provider, { value: o, children: t });
  }
  function d() {
    let e = r.useContext(l);
    return (0, i.jsx)("div", { id: null == e ? s : void 0, ref: e?.registerTarget });
  }
  function c(e) {
    let { ownerDocument: t = document, ...n } = e,
      o = r.useContext(l);
    if (o?.enabled === !0 && null == o.target) return null;
    let d = o?.enabled === !0 ? o.target : t.getElementById(s);
    return (0, i.jsx)(a.XF, { ...n, root: d });
  }
}
