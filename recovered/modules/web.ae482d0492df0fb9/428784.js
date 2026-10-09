/* Recovered shipped factory. Module 428784.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4553480..4553785
 * Raw property SHA-256: cd15200bf3f42fa04d2df612a744730e89731719eb4dbdbdacddeba826868e5e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => s });
  var i = n(477900),
    r = n(582128),
    a = n(442433);
  function s(e) {
    return r.useCallback(
      (t) => {
        (0, a.L3)(t, async () => {
          let { default: t } = await Promise.all([
            n.e("146652"),
            n.e("57729"),
            n.e("610124"),
            n.e("208113"),
          ]).then(n.bind(n, 806280));
          return (n) => (0, i.jsx)(t, { ...n, navId: e });
        });
      },
      [e],
    );
  }
}
