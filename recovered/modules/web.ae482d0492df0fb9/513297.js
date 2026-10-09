/* Recovered shipped factory. Module 513297.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6561156..6561902
 * Raw property SHA-256: aab6abd5beb4c4737b9fb5e9a554c3b090b609e2fe4e2227c752abdc467d866f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i,
    r = n(477900);
  n(582128);
  var a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(939249),
    d = n(660183),
    c = n(592835),
    u =
      (((i = u || {})[(i.ACCEPT = 0)] = "ACCEPT"),
      (i[(i.DENY = 1)] = "DENY"),
      (i[(i.DEFAULT = 2)] = "DEFAULT"),
      i);
  function _(e) {
    let {
        icon: t,
        tooltip: n,
        ariaLabelMessage: i,
        userName: a,
        applicationName: u,
        onClick: _,
        actionType: E = 2,
        shouldHighlight: A,
        loading: h = !1,
        tabIndex: f = 0,
      } = e,
      I = null != i && null != a,
      p = I ? d.intl.formatToPlainString(i, { action: n, name: a, application: u ?? "" }) : n;
    return (0, r.jsx)(l.m, {
      text: n,
      ariaHidden: I,
      children: (0, r.jsx)(o.D, {
        tag: "div",
        "aria-label": p,
        tabIndex: f,
        onClick: h ? void 0 : _,
        className: s()(c.hP, { [c.Jj]: 0 === E, [c.Bs]: 1 === E, [c.Zt]: A, [c.r9]: h }),
        children: (0, r.jsx)(t, { className: c.Kk, color: "currentColor" }),
      }),
    });
  }
  _.ActionTypes = u;
  let E = _;
}
