/* Recovered shipped factory. Module 625180.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4615794..4616186
 * Raw property SHA-256: 7fc1eedfeeeac41b46e2840f53dc360fb5923aa1869efd0c4a4804ab258a61e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(991690),
    r = n(523527),
    a = n(267102),
    s = n(567249),
    l = n(574172),
    o = n(494126),
    d = n(652215);
  async function c(e) {
    let t = (0, a.zd)();
    e.surface.type !== i.U.OVERLAY &&
      s.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT) &&
      (0, l.close)(d.MLl.ACTIVITY_POPOUT);
    let n = await o.launchFrame(e);
    return (t === d.BRT.POPOUT && null == e.hostWindowKey && (0, r.A)(), n);
  }
  let u = { ...o, launchFrame: c };
}
