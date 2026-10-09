/* Recovered shipped factory. Module 928550.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7238274..7239002
 * Raw property SHA-256: 98e1c9c6e3a8500772bbcfc1c5c12b01999fc4fe4da53c1f4d285b67759967f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L_: () => u, au: () => A, dB: () => E });
  var i = n(17928),
    r = n(627363),
    a = n(651743),
    s = n(134861),
    l = n(760751),
    o = n(189081),
    d = n(340829),
    c = n(144914);
  function u(e) {
    return (0, i.yK)(
      [o.A, a.A, d.A, s.A],
      () => [
        null != e &&
          (0, c.A)({
            LibraryApplicationStore: o.A,
            LaunchableGameStore: a.A,
            DispatchApplicationStore: d.A,
            ConnectedAppsStore: s.A,
            applicationId: e,
          }),
        null != e && a.A.isLaunchableLoading(e),
      ],
      [e],
    );
  }
  function _(e, t) {
    let [n] = u(e),
      [i] = u(t?.id);
    return null != e && n ? e : null != t && i ? t.id : null;
  }
  function E(e) {
    let { data: t } = (0, r.YY)(e);
    return _(
      e,
      (0, i.bG)(
        [l.A],
        () => (null != t ? (l.A.getOfficialGame(t) ?? l.A.getGameByApplication(t)) : null),
        [t],
      ),
    );
  }
  function A(e) {
    let { data: t } = (0, r.YY)(e);
    return _(
      e,
      (0, i.bG)([l.A], () => (null != t ? l.A.getOfficialGame(t) : null), [t]),
    );
  }
}
