/* Recovered shipped factory. Module 186111.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8977841..8978259
 * Raw property SHA-256: 50de09112fb16c256cfbe302c477bc882888d8ab59d0c124f081053f53a3f2ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = [];
  function s() {
    a = [];
  }
  class l extends i.Ay.Store {
    static displayName = "LayerStore";
    hasLayers() {
      return a.length > 0;
    }
    getLayers() {
      return a;
    }
  }
  let o = new l(r.h, {
    LAYER_PUSH: function (e) {
      let { component: t } = e;
      if (a.indexOf(t) >= 0) return !1;
      a = [...a, t];
    },
    LAYER_POP: function () {
      if (0 === a.length) return !1;
      a = a.slice(0, -1);
    },
    LAYER_POP_ALL: s,
    LOGOUT: s,
    NOTIFICATION_CLICK: s,
  });
}
