/* Recovered shipped factory. Module 683574.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8360224..8360752
 * Raw property SHA-256: 38db047751b1559d2568d2d228fb205c7fb2503184aa8798c1a02492606ff8d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X$: () => s, pT: () => l });
  var i = n(477900),
    r = n(582128);
  let a = r.createContext(null);
  function s() {
    let e = r.useContext(a);
    if (null == e)
      throw Error(
        "useDiscordVideoPlayerContext must be used within a DiscordVideoPlayerContextProvider",
      );
    return e;
  }
  function l(e) {
    let {
        children: t,
        activeLayer: n,
        isFullscreen: s,
        isActive: l,
        isControlBarExpanded: o,
        videoRef: d,
      } = e,
      c = r.useMemo(
        () => ({
          activeLayer: n,
          isFullscreen: s,
          isActive: l,
          isControlBarExpanded: o,
          videoRef: d,
        }),
        [n, s, l, o, d],
      );
    return (0, i.jsx)(a.Provider, { value: c, children: t });
  }
}
