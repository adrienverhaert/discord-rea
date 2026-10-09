/* Recovered shipped factory. Module 298990.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 529139..529605
 * Raw property SHA-256: 0a9a2b119474a0faf87bda0d4c7cfda8b60e8dbceaf257975ea8d6280fd76e97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Jb: () => l, b4: () => s, oR: () => a, qf: () => r });
  var i = n(73153);
  function r(e, t, n) {
    return new Promise((r) => {
      setTimeout(() => {
        i.h.dispatch({
          type: "ACTIVITY_INVITE_MODAL_OPEN",
          activity: e,
          isPrivate: t,
          context: n,
          resolve: r,
        });
      }, 0);
    });
  }
  function a(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
  }
  function s(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
  }
  function l(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
  }
}
