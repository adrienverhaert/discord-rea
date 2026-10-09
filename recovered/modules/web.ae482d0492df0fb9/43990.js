/* Recovered shipped factory. Module 43990.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10469829..10470317
 * Raw property SHA-256: 2f2983f0e6b15d054806eaaf3a53f4272f8b51e55e6ba6f93eb051ac1a6c36b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(38021),
    o = n(86182),
    d = n(112834);
  function c(e) {
    let {
        theme: t,
        gradient: n,
        disableAdaptiveTheme: a,
        reduceAdaptiveTheme: c,
        customBackgroundClassName: u,
        children: _,
      } = e,
      { theme: E } = r.useContext(l.Dx);
    return (0, i.jsx)(o.w, {
      theme: t,
      gradient: n,
      disableAdaptiveTheme: a,
      reduceAdaptiveTheme: c,
      children: _(
        s()((0, d.m)(n?.theme ?? t ?? E), {
          [u ?? ""]: null != n && null != u,
          "disable-adaptive-theme": a,
          "reduce-adaptive-theme": c,
        }),
      ),
    });
  }
}
