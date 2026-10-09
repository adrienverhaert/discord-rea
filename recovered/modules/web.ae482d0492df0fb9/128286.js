/* Recovered shipped factory. Module 128286.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8408177..8408547
 * Raw property SHA-256: 8986479faf56298acfbc79ed877aed5d1814cc98b89cba7de8954c7c38e1dce4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(811893),
    l = n(204651),
    o = n(660183),
    d = n(364082);
  function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: r, ...c } = e,
      u = t ? o.intl.string(o.t["7Dwcnj"]) : o.intl.string(o.t.JzWezz);
    return (0, i.jsx)(l.A, {
      label: u,
      onClick: t ? n : r,
      iconComponent: s.t,
      iconClassName: a()({ [d.r]: t }),
      ...c,
    });
  }
}
