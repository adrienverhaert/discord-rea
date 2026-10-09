/* Recovered shipped factory. Module 921037.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5019006..5019556
 * Raw property SHA-256: 187acb561d559813eef5b70dccd83ded25793a2f2b730924af012161438a998a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _, B: () => c });
  var i = n(362474),
    r = n(73153),
    a = n(376728),
    s = n(439372),
    l = n(280450),
    o = n(723702),
    d = n(652215);
  let c = "guestInviteToAccept";
  class u extends s.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    handleConnectionOpen = async () => {
      if ((0, o.isWeb)()) {
        let e = i.u.get(c);
        if (null != e && "string" == typeof e && l.default.isAuthenticated()) {
          let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
          null != t &&
            (r.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: e, context: d.BRT.APP }),
            i.u.remove(c));
        }
      }
    };
  }
  let _ = new u();
}
