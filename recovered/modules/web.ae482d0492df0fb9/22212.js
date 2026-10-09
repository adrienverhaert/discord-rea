/* Recovered shipped factory. Module 22212.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6554788..6555786
 * Raw property SHA-256: 1e086c55bb18d1947fbdd780b0680fbb84a2a06958d7d0f8e8e3baa7c246c34f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Cf: () => o,
    Jo: () => u,
    WD: () => l,
    X9: () => d,
    Yq: () => _,
    lP: () => c,
    xF: () => s,
  });
  var i = n(174459),
    r = n(652215);
  function a(e) {
    let { targetUserId: t, tab: n, actionType: a } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_ACTION, { target_user_id: t, tab: n, action_type: a });
  }
  function s(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "row_clicked" });
  }
  function l(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "message_clicked" });
  }
  function o(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "video_call_clicked" });
  }
  function d(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "voice_call_clicked" });
  }
  function c(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "remove_friend_clicked" });
  }
  function u(e) {
    let { targetUserId: t, tab: n } = e;
    a({ targetUserId: t, tab: n, actionType: "context_menu_interacted" });
  }
  function _(e) {
    let { analyticsLocation: t, noteLength: n } = e;
    i.default.track(r.HAw.FRIEND_REQUEST_NOTE_VIEWED, { location: t, note_length: n });
  }
}
