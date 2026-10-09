/* Recovered shipped factory. Module 256693.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2699305..2699904
 * Raw property SHA-256: b202d10f5a6f50a9e79ed1630e1d3fab88d6fd3e716db380274c6cc83d09d8b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ri: () => s, aQ: () => o, fS: () => l });
  var i = n(795816),
    r = n(933958);
  let a = "activity:";
  function s(e) {
    let { applicationId: t, location: n } = e;
    return `activity:${t}:${n.id}`;
  }
  function l(e) {
    return e.startsWith(a);
  }
  function o(e) {
    let t = (function (e) {
      let t = e.indexOf(":", a.length);
      if (-1 === t) return null;
      let n = e.slice(a.length, t),
        i = e.slice(t + 1);
      return "" === n || "" === i ? null : { applicationId: n, locationId: i };
    })(e);
    if (null == t) return;
    let { applicationId: n, locationId: s } = t,
      l = r.Ay.getSelfEmbeddedActivities().get(n);
    null != l &&
      l.location.id === s &&
      (0, i._H)({ location: l.location, applicationId: n, showFeedback: !1 });
  }
}
