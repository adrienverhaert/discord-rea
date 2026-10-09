/* Recovered shipped factory. Module 55619.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 705450..705656
 * Raw property SHA-256: 084aa2d5453528cb1b7a652c0a8fd6c11fca4eb69770f4204e958ec8732543b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    setEnabled(e) {
      this.update({ enabled: e });
    },
    update(e) {
      for (let t of Object.keys(e))
        i.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
    },
  };
}
