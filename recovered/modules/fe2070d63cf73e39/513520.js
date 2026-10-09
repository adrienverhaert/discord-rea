/* Recovered shipped factory. Module 513520.
 * Source: recovered/web/assets/fe2070d63cf73e39.js
 * UTF-16 property offsets: 95..733
 * Raw property SHA-256: e68b28a3c60d0ccddb24ebc919dd39fc560af6308b09b0b2e2226d7cd9fb5359
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { I: () => r });
  var i = n(636537),
    s = n(73153),
    a = n(153488),
    h = n(130100),
    c = n(652215);
  function r() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return h.A.shouldFetch() && a.A.hasConsented(c.YAq.PERSONALIZATION)
      ? (s.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
        i.Bo.get({
          url: c.Rsh.CHANNEL_AFFINITIES_V2,
          retries: 3 * !!e,
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(
          (e) => {
            let { body: t } = e;
            s.h.dispatch({
              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
              affineChannels: t.channel_affinities.map((e) => ({
                channelId: e.channel_id,
                score: e.score ?? 0,
              })),
            });
          },
          () => {
            s.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
          },
        ))
      : Promise.resolve();
  }
}
