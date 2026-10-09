/* Recovered shipped factory. Module 228662.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6928171..6928503
 * Raw property SHA-256: d05296b3f041383fa4d3bfe4d64deddd84a51bd3e66c691407114b9ee885ef5d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(174459),
    a = n(652215);
  function s(e, t, n) {
    let s = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
      if (null == n) {
        s.current = !1;
        return;
      }
      s.current ||
        ((s.current = !0),
        r.default.track(a.HAw.PAST_DUE_CHECKOUT_INVOICE_LOAD_FAILED, {
          entry_point: e,
          subscription_id: t,
          error_status: n.status,
        }));
    }, [e, t, n]);
  }
}
