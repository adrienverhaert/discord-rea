/* Recovered shipped factory. Module 56494.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2932085..2932396
 * Raw property SHA-256: 456d57ca923bcb19c128d5fb5429fda2b3975c918e6605be0a1db170019c5cd2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(594061),
    s = n(26909),
    l = n(355097);
  function o(e) {
    i.useEffect(() => {
      a.bW.loadIfUncached(l.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, r.bG)([s.Ay], () => s.Ay.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, s.RG)(t, e), [t, e]);
  }
}
