/* Recovered shipped factory. Module 604681.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 568443..569132
 * Raw property SHA-256: 29398faaece6fea9e74cf85cbdda8b7f8624c0a90c9de7220f8455b78f6e7901
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    toggleMembersSection() {
      i.h.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
    },
    toggleUserProfileSidebarSection() {
      i.h.dispatch({ type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION" });
    },
    toggleSummariesSection() {
      i.h.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
    },
    toggleConversationsSection() {
      i.h.dispatch({ type: "CHANNEL_TOGGLE_CONVERSATIONS_SECTION" });
    },
    openConversationsSection() {
      i.h.dispatch({ type: "CHANNEL_OPEN_CONVERSATIONS_SECTION" });
    },
    setFriendsSidebarCollapsed(e) {
      i.h.dispatch({ type: "FRIENDS_SIDEBAR_SET_COLLAPSED", collapsed: e });
    },
    setFriendsSidebarAvailable(e) {
      i.h.dispatch({ type: "FRIENDS_SIDEBAR_SET_AVAILABLE", available: e });
    },
  };
}
