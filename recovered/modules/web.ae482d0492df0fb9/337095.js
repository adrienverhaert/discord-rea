/* Recovered shipped factory. Module 337095.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6934131..6935197
 * Raw property SHA-256: 9a2d5ef71d6a2bac5106490d9e85f47f9e6871bd9ba7f0b78f375b81cfc61e44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L5: () => u, TA: () => c, dU: () => o, fY: () => l, q$: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(181658),
    s = n(652215);
  async function l(e, t) {
    return (
      await i.Bo.get({
        url: s.Rsh.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
  async function o(e) {
    return (
      await i.Bo.get({
        url: s.Rsh.GUILD_ENTITLEMENTS(e),
        query: { with_sku: !0, with_application: !0 },
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
  async function d(e) {
    return (
      await i.Bo.get({
        url: s.Rsh.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
  function c(e, t) {
    return (
      r.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e }),
      i.Bo.get({ url: s.Rsh.APPLICATION_PUBLIC(e), signal: t, rejectWithError: (0, i.fT)() })
        .then(
          (e) => (
            r.h.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: e.body,
              isHydrated: !0,
            }),
            e.body
          ),
        )
        .catch(
          (t) => (
            r.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }),
            Promise.reject(new a.A(t))
          ),
        )
    );
  }
  async function u(e, t) {
    return (
      await i.Bo.get({
        url: s.Rsh.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
        query: { application_id: e, sku_id: t },
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
}
