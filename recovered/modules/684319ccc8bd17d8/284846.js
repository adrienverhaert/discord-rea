/* Recovered shipped factory. Module 284846.
 * Source: recovered/web/assets/684319ccc8bd17d8.js
 * UTF-16 property offsets: 29119..29559
 * Raw property SHA-256: 23384c4d6107c74e1d82f8e93f3d84432a6fc572ac7d670c13671c4b7b7d6b3f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { U: () => u });
  var i = n(359800),
    r = n(206828),
    l = n(429913),
    s = n(792620),
    o = n(942370);
  function u(e) {
    let t = (0, s.I6)(e),
      n = (0, s.xc)(e),
      u = (0, l.h)(n),
      {
        fetched: a,
        hasAlreadyLinked: c,
        canStartAuthorization: d,
        startAuthorization: f,
      } = (0, r.RD)(t ? u : null, { allowedFlows: [o._.WEB] }),
      m = (0, i.z)(f, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
      isInGameQuest: t,
      fetched: a,
      hasAlreadyLinked: a ? c : void 0,
      canStartAuthorization: d,
      startAuthorization: m,
    };
  }
}
