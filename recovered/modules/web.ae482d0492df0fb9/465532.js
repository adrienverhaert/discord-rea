/* Recovered shipped factory. Module 465532.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 585741..586373
 * Raw property SHA-256: 91fc5fbc248abff5b58a0b26789d5ac9f68aed5baf23aae1e19db6a1b9a259f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    clearDraft(e, t) {
      i.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: t });
    },
    clearDraftCommand(e, t) {
      i.h.dispatch({ type: "DRAFT_COMMAND_CLEAR", channelId: e, draftType: t });
    },
    saveDraft(e, t, n, r) {
      i.h.dispatch({ type: "DRAFT_SAVE", channelId: e, draft: t, draftType: n, command: r });
    },
    changeDraft(e, t, n, r) {
      i.h.dispatch({ type: "DRAFT_CHANGE", channelId: e, draft: t, draftType: n, command: r });
    },
    changeThreadSettings(e, t) {
      i.h.dispatch({ type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: e, draft: t });
    },
    changeScheduledMessage(e, t) {
      i.h.dispatch({ type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId: e, draft: t });
    },
  };
}
