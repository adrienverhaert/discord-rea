/* Recovered shipped factory. Module 901139.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3833967..3834583
 * Raw property SHA-256: 1fef9dfe5f54af5a72de758381a6731344e8937680f60b0b3c785922be5467b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => s, DE: () => a, TW: () => r });
  let i = (0, n(196765).v)(() => ({ imgCache: {}, toolsCache: {} }));
  function r() {
    return {
      getImgCache: function (e) {
        if (null != e) return i.getState().imgCache[e];
      },
      setImgCache: function (e, t, n) {
        i.setState((i) => ({ imgCache: { ...i.imgCache, [e]: { animatedUrl: t, staticUrl: n } } }));
      },
    };
  }
  function a() {
    return {
      toolsCache: i.getState().toolsCache,
      setToolsCache: function (e, t, n) {
        null != e &&
          null != t &&
          i.setState((i) => ({ toolsCache: { ...i.toolsCache, [e]: { url: t, palette: n } } }));
      },
      removeToolsCache: function (e) {
        i.setState((t) => {
          let {
            toolsCache: { [e]: n, ...i },
          } = t;
          return { imgCache: t.imgCache, toolsCache: i };
        });
      },
    };
  }
  let s = i;
}
