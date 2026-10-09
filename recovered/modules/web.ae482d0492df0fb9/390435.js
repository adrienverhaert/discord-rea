/* Recovered shipped factory. Module 390435.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2298057..2298651
 * Raw property SHA-256: 7f0f5a40e2153b998561289a8759262ade86bfff5c9bffcb17933397364eff23
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => c });
  var i = n(621466),
    r = n(425763),
    a = n(267102),
    s = n(712687),
    l = n(625494),
    o = n(406975),
    d = n(652215);
  let c = {
    POP_LAYER: {
      binds: ["esc"],
      comboKeysBindGlobal: !0,
      action(e) {
        if ((0, r.ny)()) return !1;
        if (l._.hasSubscribers(d.jej.CALL_DECLINE)) return (l._.dispatch(d.jej.CALL_DECLINE), !1);
        if (s.A.close()) return !1;
        if ((0, i.vq)(e.target)) {
          let t = (0, a.mU)(e.target);
          if (t?.hasSubscribers(d.jej.POPOUT_CLOSE)) return (t.dispatch(d.jej.POPOUT_CLOSE), !1);
        }
        if (l._.hasSubscribers(d.jej.MODAL_CLOSE)) return (l._.dispatch(d.jej.MODAL_CLOSE), !1);
        l._.dispatch(d.jej.LAYER_POP_ESCAPE_KEY);
      },
    },
    ...o.Ay,
  };
}
