/* Recovered shipped factory. Module 795791.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 34894..35493
 * Raw property SHA-256: cce6aaec4b706882eae1e55047829fffd68140c47082e4392de48b4511fff96d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { $w: () => u, uM: () => c });
  var l = n(492462),
    r = n(806163);
  (n(809733), n(38405));
  var i = n(26279),
    s = n(652215);
  function a(e, t, n) {
    if (!e.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
      if (t === s.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
      if (n === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
  }
  function u() {
    let { search: e, pathname: t } = (0, r.zy)(),
      { deep_link_type: n, flow_type: i } = (0, l.parse)(e);
    return a(t, n, i);
  }
  function c() {
    let e = window.location.pathname,
      { deep_link_type: t, flow_type: n } = (0, l.parse)(window.location.search);
    return a(e, t, n);
  }
}
