/* Recovered shipped factory. Module 992251.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10353633..10353953
 * Raw property SHA-256: 36cbd4e78392d6cd294caf1b9a8600287e73ef4c396a37a6b71237eb5c3e5e8d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(460890),
    s = n(834730),
    l = n(787165);
  function o(e) {
    let { message: t } = e,
      { i18n: n } = r.useContext(a.VO);
    return (0, i.jsx)("div", {
      className: l.p,
      role: "status",
      children: (0, i.jsx)(s.E, {
        variant: "text-md/medium",
        className: l.q,
        children: t ?? n.LISTBOX_EMPTY_STATE,
      }),
    });
  }
}
