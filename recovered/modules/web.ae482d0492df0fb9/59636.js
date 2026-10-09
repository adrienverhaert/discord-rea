/* Recovered shipped factory. Module 59636.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 635165..635586
 * Raw property SHA-256: d208591e53617b95b9f63cdb95a7661b3acb627f20104b282ce41c80d6708a96
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s(e, t, n) {
    return (
      r.h.dispatch({
        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
        applicationId: e,
        branchId: t,
        flags: n,
      }),
      i.Bo.patch({
        url: a.Rsh.LIBRARY_APPLICATION_BRANCH(e, t),
        body: { flags: n },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      }).then((e) => {
        r.h.dispatch({
          type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
          libraryApplication: e.body,
        });
      })
    );
  }
}
