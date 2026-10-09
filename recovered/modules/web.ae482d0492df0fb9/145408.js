/* Recovered shipped factory. Module 145408.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5534956..5535443
 * Raw property SHA-256: 84e4d7cd89bca04b96c868df04718acea634ce6ee0bbc3785e6dca6bb952d7be
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, M: () => s });
  var i = n(477900);
  n(582128);
  var r = n(834730),
    a = n(660183);
  function s(e) {
    return null == e || null == e.end_time
      ? null
      : a.intl.formatToPlainString(a.t.j7h4AJ, {
          endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }),
        });
  }
  function l(e) {
    let { muteConfig: t, className: n } = e,
      a = s(t);
    return null != a
      ? (0, i.jsx)(r.E, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: n,
          children: a,
        })
      : null;
  }
}
