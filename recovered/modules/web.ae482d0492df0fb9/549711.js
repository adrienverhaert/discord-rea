/* Recovered shipped factory. Module 549711.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2833628..2834184
 * Raw property SHA-256: d92e7cb91fdd260510b96d8c24ee86d934212a0b460bf3866f6a3b297cea58e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(806163),
    a = n(562708),
    s = n(334465),
    l = n(139286);
  function o(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: o, ...d } = e,
      c = (0, r.zy)(),
      u = d.location?.pathname ?? c.pathname,
      _ = n;
    if ("function" == typeof _) {
      let e = Array.isArray(d.path) ? d.path : null != d.path ? [d.path] : [],
        t = null;
      for (let n of e)
        if (null != (t = (0, s.B)(u, { path: n, exact: d.exact, strict: d.strict }))) break;
      _ = _({ match: t });
    }
    return (
      (0, l.A)({ type: a.ImpressionTypes.PAGE, name: t, properties: _ }, { disableTrack: o }, [u]),
      (0, i.jsx)(r.qh, { ...d })
    );
  }
}
