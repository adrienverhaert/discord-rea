/* Recovered shipped factory. Module 101555.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4113534..4114168
 * Raw property SHA-256: 6755b3f8d0737e6cb038eb58c2e5405b7f14f3cc7c5bdf7499db2c9ff0972e45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $n: () => d, Ay: () => c, wv: () => o });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(939249),
    l = n(738745);
  function o(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: a()(t, l.me) });
  }
  function d(e) {
    let {
      onClick: t,
      onContextMenu: n,
      className: r,
      selected: o = !1,
      children: d,
      disabled: c = !1,
      dangerous: u,
      ref: _,
      ...E
    } = e;
    return (0, i.jsx)(s.D, {
      innerRef: _,
      onClick: c ? void 0 : t,
      onContextMenu: c ? void 0 : n,
      "aria-disabled": !!c || void 0,
      className: a()(r, { [l.x6]: !0, [l.wH]: o, [l.r9]: c, [l.lv]: u }),
      ...E,
      children: d,
    });
  }
  let c = function (e) {
    let { className: t, children: n, ...r } = e;
    return (0, i.jsx)("div", { className: a()(t, l.iE), ...r, children: n });
  };
}
