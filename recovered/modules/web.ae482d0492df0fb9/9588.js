/* Recovered shipped factory. Module 9588.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5729758..5730281
 * Raw property SHA-256: ea3fb8b3f14a294fc06b2cea2fab06a1bb33975d00145cab72130bb4e537ea69
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, { showInaccessibleLinkModal: () => c, showInaccessibleReportPostModal: () => u }));
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(139033),
    s = n(975571),
    l = n(652215),
    o = n(660183),
    d = n(256416);
  function c(e) {
    let { kind: t } = e;
    (0, r.openModalLazy)(async () => {
      let { default: e } = await n.e("511546").then(n.bind(n, 763969));
      return (n) => (0, i.jsx)(e, { ...n, kind: t });
    });
  }
  function u() {
    (0, a.A)({
      title: o.intl.string(d.default.odgSTk),
      subtitle: o.intl.format(d.default.EZfHRq, {
        helpURL: s.A.getArticleURL(l.MVz.NSFW_AGE_GATING),
      }),
    });
  }
}
