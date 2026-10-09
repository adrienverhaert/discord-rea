/* Recovered shipped factory. Module 836753.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2584192..2585411
 * Raw property SHA-256: 54cf8a5c4dcbe5fc1b76ca747139a1d6a1b2aa81979efd891e28891816cf2ad0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(73153),
    s = n(272355),
    l = n(960736),
    o = n(174459),
    d = n(972387),
    c = n(539895),
    u = n(652215);
  let _ = "INVITE_MODAL_KEY";
  class E extends s.A {
    _initialize() {
      (a.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
        a.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal));
    }
    _terminate() {
      ((0, r.closeModal)(_),
        a.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
        a.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal));
    }
    handleOpenModal(e) {
      let { context: t } = e;
      c.A.isOpen() &&
        !(0, r.hasModalOpen)(_) &&
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              n.e("689387"),
              n.e("444038"),
              n.e("816027"),
              n.e("458855"),
              n.e("305161"),
              n.e("807432"),
              n.e("601495"),
              n.e("88599"),
              n.e("709640"),
              n.e("163235"),
              n.e("731503"),
              n.e("893349"),
              n.e("439089"),
              n.e("705871"),
              n.e("807265"),
              n.e("840247"),
              n.e("549106"),
              n.e("901352"),
            ]).then(n.bind(n, 777307));
            return (t) => (0, i.jsx)(e, { ...t });
          },
          {
            modalKey: _,
            contextKey: (0, r.modalContextFromAppContext)(t),
            onCloseRequest: () => {
              let e = (0, l.p9)(),
                t = (0, l.xD)();
              (o.default.track(u.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                d.A.close(c.A.getProps().invite?.code ?? e));
            },
          },
        );
    }
    handleCloseModal(e) {
      (0, r.closeModal)(_);
    }
  }
  let A = new E();
}
