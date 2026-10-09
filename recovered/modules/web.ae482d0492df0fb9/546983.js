/* Recovered shipped factory. Module 546983.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7287993..7289276
 * Raw property SHA-256: b0b6250a77c879412f1429ea3f1e9b8a26d5ed46334b4d5656687efd78766d4d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Au: () => I, d5: () => A, j7: () => h, kS: () => E, l6: () => f });
  var i = n(684013),
    r = n(296027),
    a = n(233741),
    s = n(19575),
    l = n(350535),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    u = n(652215);
  let _ = ["207646673902501888"];
  function E(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && a.A.isReady(e);
  }
  function A(e) {
    return null == e
      ? { lock: u.FXj, context: u.BRT.APP }
      : E(e)
        ? (i.A.setInputLocked(!1, e),
          {
            lock() {
              i.A.setInputLocked(!0, e);
            },
            context: u.BRT.POPOUT,
          })
        : (s.Ay.focus(null, !0),
          {
            lock() {
              s.Ay.setForegroundProcess(e);
            },
            context: u.BRT.APP,
          });
  }
  let h = async (e, t, n) => {
      if (((0, d.sq)(e, t), (null == n || "" === n) && (0, d.IR)(t)))
        return ((e.authorization.scopes = new Set([c.LQ, c.kw])), Promise.resolve());
      if (null == n || "" === n)
        return Promise.reject(
          new o.A({ closeCode: u.YI$.INVALID_CLIENTID }, "No Client ID Specified"),
        );
      let i =
        s.Ay.releaseChannel !== u.BIo.CANARY && !_.includes(n) && e.transport !== c.z4.POST_MESSAGE;
      return (await (0, d.e2)(n, i, e.abortController.signal), (0, d.uM)(e, n, t));
    },
    f = () =>
      (0, d.BB)((e) => {
        let t = [];
        return (
          null != e.modeOptions.shortcut &&
            Array.isArray(e.modeOptions.shortcut) &&
            (t = e.modeOptions.shortcut.map((e) => ({
              type: e[0],
              code: e[1],
              name: (0, l.Qd)(e) ?? "unknown",
            }))),
          t
        );
      }),
    I = (e) =>
      (0, d.Ub)(e, (e) => {
        let t = "";
        return (
          null != e.modeOptions.shortcut &&
            Array.isArray(e.modeOptions.shortcut) &&
            (t = (0, l.dI)(e.modeOptions.shortcut)),
          t
        );
      });
}
