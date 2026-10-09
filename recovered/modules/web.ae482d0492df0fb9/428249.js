/* Recovered shipped factory. Module 428249.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4008567..4009041
 * Raw property SHA-256: 7533e052b1e305ce2a11d3c88ebddbf56b647d71a8a23ef73c46481062ae7d7b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => s, d: () => a });
  var i = n(148494),
    r = n(451909);
  function a(e) {
    let { channel: t, content: n, entry: a, whenReady: s, doNotNotifyOnError: l, location: o } = e,
      d = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, d, s, {
      contentInventoryEntry: { unverified_content: a },
      doNotNotifyOnError: l,
      location: o,
    });
  }
  function s(e) {
    let { channel: t, content: n, whenReady: a, doNotNotifyOnError: s, location: l } = e,
      o = r.Ay.parse(t, n);
    return i.A.sendMessage(t.id, o, a, { doNotNotifyOnError: s, location: l });
  }
}
