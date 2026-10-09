/* Recovered shipped factory. Module 775946.
 * Source: recovered/web/assets/52b11e58d146e0ac.js
 * UTF-16 property offsets: 1101..1445
 * Raw property SHA-256: 475ae428eb714ddbe4c80907953f5ef57f848fffe324c741000073115e8fc653
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => o });
  var N = e(477900);
  e(582128);
  var s = e(661531),
    I = e(812993),
    u = e(146630);
  function o(t) {
    let { mentionsCount: n, isMentionLowImportance: e } = t;
    return (0, N.jsx)("div", {
      className: u.R,
      "aria-hidden": !0,
      children: (0, N.jsx)(I.hV, {
        count: n,
        color: e
          ? s.A.colors.BACKGROUND_MOD_STRONG.css
          : s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
      }),
    });
  }
}
