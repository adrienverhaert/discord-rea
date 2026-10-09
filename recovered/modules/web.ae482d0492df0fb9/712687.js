/* Recovered shipped factory. Module 712687.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9334420..9334936
 * Raw property SHA-256: 1fd13320fca5a308ac035d595fa13a3bed12d5acc5bc1a372862dda07e1b0fa8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(625494),
    s = n(652215);
  let l = null,
    o = 0;
  function d() {
    l = null;
  }
  class c extends i.Ay.Store {
    static displayName = "ContextMenuStore";
    isOpen() {
      return null != l;
    }
    get version() {
      return o;
    }
    getContextMenu() {
      return l;
    }
    close() {
      return !!this.isOpen() && (a._.dispatch(s.jej.CONTEXT_MENU_CLOSE), !0);
    }
  }
  let u = new c(r.h, {
    CONTEXT_MENU_OPEN: function (e) {
      let { contextMenu: t } = e;
      (o++, (l = t));
    },
    LAYER_PUSH: d,
    CONTEXT_MENU_CLOSE: d,
    OVERLAY_SET_INPUT_LOCKED: d,
    OVERLAY_DEACTIVATE_ALL_REGIONS: d,
  });
}
