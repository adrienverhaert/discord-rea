/* Recovered shipped factory. Module 772707.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10364086..10364604
 * Raw property SHA-256: 4dbc6c09c1de080616208174d3910b1737ef502283b0e063485dbe9b9fbb8c8e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => o });
  var i = n(477900);
  n(582128);
  var r = n(224640),
    a = n(696208),
    s = n(430993),
    l = n(20742);
  function o(e) {
    let {
      size: t = "md",
      gradientColor: n = "purple",
      graphic: o,
      badge: d,
      title: c,
      subtitle: u,
      actionBarInput: _,
      actions: E,
      children: A,
      "aria-label": h,
      ...f
    } = e;
    return (0, i.jsxs)(r.d, {
      ...f,
      "aria-label": h ?? c,
      size: t,
      paddingSize: "lg",
      children: [
        (0, i.jsx)(l.V6, { gradientColor: n, graphic: o, badge: d, title: c, subtitle: u }),
        (0, i.jsx)(s.c, { children: A }),
        (0, i.jsx)(a.H, { leading: _, actions: E, actionsFullWidth: null == _ }),
      ],
    });
  }
}
