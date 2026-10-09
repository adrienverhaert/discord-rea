/* Recovered shipped factory. Module 110782.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 634333..635164
 * Raw property SHA-256: 444faab7529bbf5aa512bbd14fb68a0771a6b6db2e4b6336a15d517c63f55a58
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Cd: () => d, Wp: () => c, Yq: () => o });
  var i = n(636537),
    r = n(73153),
    a = n(319317),
    s = n(371794),
    l = n(652215);
  async function o() {
    try {
      let e = await (0, s.aP)(
        { url: l.Rsh.LIBRARY, oldFormErrors: !0, rejectWithError: (0, i.fT)() },
        !1,
      );
      r.h.dispatch({ type: "LIBRARY_FETCH_SUCCESS", libraryApplications: e.body });
    } catch (e) {
      r.h.dispatch({ type: "LIBRARY_FETCH_FAIL", error: e });
    }
  }
  async function d(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
      await i.Bo.get({
        url: l.Rsh.APPLICATION_BRANCH_LIST(e.id),
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      }).then((e) => e.body)
    ).map((n) => a.A.createForTestMode({ id: e.id, skuId: t, branch: n }));
    r.h.dispatch({ type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED", libraryApplications: n });
  }
  function c(e, t, n) {
    r.h.dispatch({
      type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
      applicationId: e,
      branchId: t,
      launchOptionId: n,
    });
  }
}
