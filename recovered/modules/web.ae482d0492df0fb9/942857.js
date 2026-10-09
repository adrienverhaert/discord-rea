/* Recovered shipped factory. Module 942857.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2248115..2248515
 * Raw property SHA-256: 7cb46c88c374cd173f5706964e657b8fc32abc26ef64821f580e12d9451e91e9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(192308),
    a = n(595528),
    s = n(361158),
    l = n(33524),
    o = n(174768),
    d = n(186111);
  let c = function () {
    let e = (0, i.bG)([d.A], () => d.A.hasLayers()),
      t = (0, s.xr)((e) => e.fullScreenLayers.length > 0),
      n = (0, l.useIsModalOpen)(),
      c = (0, r.useModalsStore)(r.hasAnyModalOpen),
      u = (0, i.bG)([a.A], () => a.A.isConnected()),
      _ = (0, i.bG)([o.A], () => o.A.isOpen());
    return e || t || c || n || !u || _;
  };
}
