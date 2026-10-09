/* Recovered shipped factory. Module 449585.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5058545..5060608
 * Raw property SHA-256: 3ec76890c3360c309fe857f882e598bd8611f1333f92b269e04966cb4bc8614e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bx: () => o, is: () => c, rI: () => u, w2: () => d });
  var i = n(477900);
  n(582128);
  var r = n(314116),
    a = n(192308),
    s = n(243277),
    l = n(660183);
  function o(e) {
    return {
      [s.AH.BLOCK_MESSAGE]: (e, t) =>
        new Promise((e) => {
          (0, a.openModalLazy)(async () => {
            let { default: r } = await Promise.all([
              n.e("142753"),
              n.e("268582"),
              n.e("135023"),
            ]).then(n.bind(n, 148210));
            return (n) =>
              (0, i.jsx)(r, {
                initialCustomMessage: t.metadata.customMessage ?? "",
                onSubmit: (i) => {
                  ((t.metadata.customMessage = i), e(t), n.onClose());
                },
                ...n,
                onClose: () => (e(null), n.onClose()),
              });
          });
        }),
      [s.AH.FLAG_TO_CHANNEL]: (t, r) =>
        new Promise((l) => {
          (0, a.openModalLazy)(async () => {
            let { default: a } = await Promise.all([
                n.e("278045"),
                n.e("727779"),
                n.e("93907"),
                n.e("965341"),
              ]).then(n.bind(n, 158956)),
              o = t.actions.find((e) => e.type === s.AH.FLAG_TO_CHANNEL);
            return (n) =>
              (0, i.jsx)(a, {
                action: r,
                isEdit: null != o,
                triggerType: t.triggerType,
                guildId: e,
                onEditChannel: (e) => {
                  ((r.metadata.channelId = e), t.exemptChannels.add(e), l(r), n.onClose());
                },
                ...n,
                onClose: () => (l(null), n.onClose()),
              });
          });
        }),
      [s.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
        new Promise((r) => {
          (0, a.openModalLazy)(async () => {
            let { default: a } = await Promise.all([
                n.e("278045"),
                n.e("727779"),
                n.e("93907"),
                n.e("821932"),
              ]).then(n.bind(n, 16039)),
              l = e.actions.find((e) => e.type === s.AH.USER_COMMUNICATION_DISABLED);
            return (n) =>
              (0, i.jsx)(a, {
                action: t,
                isEdit: null != l,
                triggerType: e.triggerType,
                onUpdateDuration: (e) => {
                  (null != e && (t.metadata.durationSeconds = e), r(t), n.onClose());
                },
                ...n,
                onClose: () => (r(null), n.onClose()),
              });
          });
        }),
    };
  }
  function d(e, t, r, s) {
    (0, a.openModalLazy)(async () => {
      let { default: a } = await n.e("115112").then(n.bind(n, 794267));
      return (n) =>
        (0, i.jsx)(a, {
          ...n,
          automodDecision: { messageId: e, messageContent: t, decisionId: r, channel: s },
        });
    });
  }
  function c(e, t) {
    (0, a.openModalLazy)(async () => {
      let { default: r } = await Promise.all([
        n.e("684290"),
        n.e("142753"),
        n.e("513221"),
        n.e("940258"),
        n.e("268582"),
        n.e("273669"),
        n.e("911802"),
        n.e("307133"),
      ]).then(n.bind(n, 580812));
      return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
    });
  }
  function u(e) {
    (0, r.A)({
      title: l.intl.string(l.t.wLGrjB),
      subtitle: l.intl.string(l.t.arYQ2X),
      confirmText: l.intl.string(l.t["cY+Oob"]),
      onConfirm: e,
    });
  }
}
