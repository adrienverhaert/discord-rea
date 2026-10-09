/* Recovered shipped factory. Module 383394.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8897846..8898737
 * Raw property SHA-256: 5d03a5f885b90886cf81e1b3a651fc22d711a2a7c7998b35ef56627ce8eb4117
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(617617);
  let s = new Set();
  class l extends i.Ay.PersistedStore {
    static displayName = "ExpandedGuildFolderStore";
    static persistKey = "ExpandedGuildFolderStore";
    initialize(e) {
      (null != e && (s = new Set(e.expandedFolders)), this.waitFor(a.A));
    }
    getState() {
      return { expandedFolders: Array.from(s) };
    }
    getExpandedFolders() {
      return s;
    }
    isFolderExpanded(e) {
      return s.has(e);
    }
  }
  let o = new l(r.h, {
    TOGGLE_GUILD_FOLDER_EXPAND: function (e) {
      let { folderId: t } = e;
      (s = new Set(s)).has(t) ? s.delete(t) : s.add(t);
    },
    SET_GUILD_FOLDER_EXPANDED: function (e) {
      let { folderId: t, expanded: n } = e;
      ((s = new Set(s)), n ? s.add(t) : s.has(t) && s.delete(t));
    },
    USER_SETTINGS_PROTO_UPDATE: function () {
      let e = a.A.getGuildFolders();
      if (null == e) return !1;
      let t = !1;
      for (let n of s) e.some((e) => e.folderId === n) || ((s = new Set(s)).delete(n), (t = !0));
      return t;
    },
    GUILD_FOLDER_COLLAPSE: function () {
      if (0 === s.size) return !1;
      s = new Set();
    },
  });
}
