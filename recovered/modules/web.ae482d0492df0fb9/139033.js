/* Recovered shipped factory. Module 139033.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 952044..952339
 * Raw property SHA-256: 656c1c8315bc8398f9e8fa73e76a109cdf9cee5a870413836fac63d047ff1b6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(189213),
    s = n(660183);
  function l(e) {
    let { title: t, subtitle: n, confirmText: l = s.intl.string(s.t.BddRzS) } = e;
    return (0, r.openModal)((e) =>
      (0, i.jsx)(a.a, { ...e, title: t, subtitle: n, actions: [{ text: l, onClick: e.onClose }] }),
    );
  }
}
