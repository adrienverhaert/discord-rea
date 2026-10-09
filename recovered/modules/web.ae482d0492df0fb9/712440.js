/* Recovered shipped factory. Module 712440.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6145243..6146447
 * Raw property SHA-256: 84d3bd4c1d47d1ae7d725e206f63fd4a2b5ac691597c53e68fbf45b07a820cf3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(636537),
    r = n(451988),
    a = n(73153),
    s = n(733110),
    l = n(652215);
  let o = new r.OC(d, {
    predicate: (e) => s.default.getFetchStateForApplication(e) !== s.FetchState.FETCHING,
    onQueued: (e) =>
      a.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: { type: "partial", applicationIds: e },
      }),
    onCancelled: (e) =>
      a.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds: e }),
  });
  async function d(e) {
    await i.Bo.get({
      url: l.Rsh.OAUTH2_TOKENS,
      oldFormErrors: !0,
      rejectWithError: !0,
      query: { application_ids: e },
    }).then(
      (t) =>
        a.h.dispatch({
          type: "USER_AUTHORIZED_APPS_UPDATE",
          isFullFetch: null == e,
          tokens: (function (e, t) {
            let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
            for (let t of e) n[t.application.id] = t;
            return n;
          })(t.body, e),
        }),
      () =>
        a.h.dispatch({
          type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
          request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
        }),
    );
  }
  let c = {
    fetch(e) {
      if (s.default.getFetchState() !== s.FetchState.FETCHING)
        if (null != e)
          o.queue(e).catch((e) => {
            if (!(e instanceof r.bY)) throw e;
          });
        else
          (o.reset(),
            a.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } }),
            d());
    },
    delete(e) {
      i.Bo.del({ url: l.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
        this.fetch();
      });
    },
  };
}
