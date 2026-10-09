/* Recovered shipped factory. Module 739508.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9506882..9507585
 * Raw property SHA-256: 47771b86b849abbd8ff257d4c80981af396a25fb8bd7e7eae376c9cfbfb9d474
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { eS: () => o, gr: () => u, hD: () => _, ob: () => d, pM: () => c });
  var i = n(636537),
    r = n(136857),
    a = n(184015),
    s = n(38405),
    l = n(818348);
  function o(e, t) {
    let n = new Date();
    return (n.setMonth(e - 1), n.toLocaleString(t, { month: "short" }));
  }
  async function d(e) {
    let t = null;
    if (null != e && e.paymentGateway === l.kM.BRAINTREE) {
      let e = await (0, a.Z)();
      null != e && (t = { braintree_device_data: e });
    }
    return t;
  }
  function c(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
  }
  function u(e) {
    return (
      (e instanceof i.oh && !!(e.status >= 400) && !!(e.status < 500)) ||
      (e instanceof r.Ay && null != e.status && !!(e.status >= 400) && !!(e.status < 500))
    );
  }
  function _(e, t) {
    s.A.captureMessage(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
  }
}
