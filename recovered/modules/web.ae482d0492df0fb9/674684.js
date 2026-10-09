/* Recovered shipped factory. Module 674684.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6228058..6228394
 * Raw property SHA-256: f04f5dfe9b7ed1faf6ccdd81d6c41dc28bf066c6d87eafea6f0e4ffbbe7d6c50
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(442433),
    r = n(439372),
    a = n(267102),
    s = n(712687),
    l = n(625494),
    o = n(652215);
  class d extends r.A {
    actions = {
      OVERLAY_SET_INPUT_LOCKED: () => {
        null != s.A.getContextMenu() && (0, i.Z_)();
        let e = (0, a.rH)();
        (null != e && e.windowDispatch.dispatch(o.jej.POPOUT_CLOSE),
          l._.dispatch(o.jej.MODAL_CLOSE));
      },
    };
  }
  let c = new d();
}
