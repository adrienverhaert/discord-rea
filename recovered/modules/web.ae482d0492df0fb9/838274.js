/* Recovered shipped factory. Module 838274.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2643443..2643708
 * Raw property SHA-256: 75293d60fbcd0ba9e49bbbb7be057427f13f9e291bf414b82acd4d9f690b5f8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128),
    r = n(73153);
  function a(e) {
    let { connectedEmbeddedActivity: t } = e,
      n = t?.applicationId;
    i.useEffect(() => {
      null != t &&
        null != n &&
        r.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
    }, [n, t]);
  }
}
