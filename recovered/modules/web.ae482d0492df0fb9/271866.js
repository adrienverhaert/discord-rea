/* Recovered shipped factory. Module 271866.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 707583..708637
 * Raw property SHA-256: d0da5be40a71f02c2d38aa6f678fea2a56c82540553706f86685dc16e8ae43ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { SH: () => E, cL: () => _, q1: () => u });
  var i = n(73153),
    r = n(795816),
    a = n(627363),
    s = n(587895),
    l = n(793943),
    o = n(395671),
    d = n(998218),
    c = n(110782);
  async function u(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
      if (!(await (0, r.Ir)(e))) throw Error("Do not have access!");
      let n = s.A.getApplication(e);
      null == n && (n = o.Ay.createFromServer(await a.Ay.fetchApplication(e)));
      let l = n.isEmbedded;
      if (l && (null == t || !d.A.URL_REGEX.test(t)))
        throw Error("Invalid Origin URL for embedded application");
      return (
        l || c.Cd(n),
        i.h.dispatch({
          type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
          applicationId: e,
          originURL: l ? t : null,
        }),
        n
      );
    } catch (t) {
      return (
        i.h.dispatch({
          type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
          applicationId: e,
          error: t.message,
        }),
        null
      );
    }
  }
  function _() {
    (l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
      i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" }));
  }
  function E() {
    (l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
      i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" }));
  }
}
