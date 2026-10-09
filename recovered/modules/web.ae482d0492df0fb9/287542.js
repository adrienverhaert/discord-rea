/* Recovered shipped factory. Module 287542.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6112982..6113297
 * Raw property SHA-256: 637b71d3b081b28d232443b47094b8aa89099bd006d9139e4635f4f60c0776cc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(439372),
    r = n(174459),
    a = n(479975),
    s = n(652215);
  class l extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    async handlePostConnectionOpen() {
      let e = await (0, a.Ng)();
      r.default.track(s.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
  }
  let o = new l();
}
