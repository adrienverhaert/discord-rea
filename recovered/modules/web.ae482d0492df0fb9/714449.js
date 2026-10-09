/* Recovered shipped factory. Module 714449.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7629964..7630316
 * Raw property SHA-256: 5e44aedc7234565465e48b0110a3ae798fb692d89b72cc6a84875896448ff558
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(439372),
    r = n(66834),
    a = n(71393),
    s = n(287809);
  let l = "21154681615024128";
  class o extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
      let e;
      ((e = s.default.getCurrentUser()),
        e?.isStaff() && null != a.A.getGuild(l) && r.A.requestMembers(l, "", 0, !1));
    };
  }
  let d = new o();
}
