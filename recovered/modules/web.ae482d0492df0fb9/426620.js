/* Recovered shipped factory. Module 426620.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6143507..6143888
 * Raw property SHA-256: c811876e3fd435cf772034d8459218cbc1fbc23fcdc266bddba5d401427612ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = null;
  class s extends i.Ay.PersistedStore {
    static displayName = "NewUserStore";
    static persistKey = "nuf";
    initialize(e) {
      a = e?.type ?? null;
    }
    getType() {
      return a;
    }
    getState() {
      return { type: a };
    }
  }
  let l = new s(r.h, {
      NUF_NEW_USER: function (e) {
        let { newUserType: t } = e;
        ((a = t), l.persist());
      },
      NUF_COMPLETE: function () {
        ((a = null), l.persist());
      },
    }),
    o = l;
}
