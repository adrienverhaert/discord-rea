/* Recovered shipped factory. Module 839067.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9295655..9296211
 * Raw property SHA-256: 2988d3dff9e923c9ff379a92d6d0be71eea1e2ba07fbf7b289537d45e24acee8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = null;
  class s extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
      return null != a ? a.pathname : null;
    }
    getCurrentRoute() {
      var e;
      let t;
      return (
        (t = null != (e = a) && null != e.search ? e.search : ""),
        null != e ? `${e.pathname}${t}` : null
      );
    }
    reset() {
      throw Error("Should not reset the store this way outside of a test environment");
    }
  }
  let l = new s(r.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
      let { location: t } = e;
      a = { ...t };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
      a = null;
    },
  });
}
