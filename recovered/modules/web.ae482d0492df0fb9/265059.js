/* Recovered shipped factory. Module 265059.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4176102..4177049
 * Raw property SHA-256: 06862e0596bb87f8aaf0c8d31611ea39023e8d1d367729a2a0faf257e7c83633
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, q: () => s });
  var i = n(17928),
    r = n(73153),
    a = n(540999);
  let s = 460,
    l = {
      sidebarWidth: 460,
      lastOpenTabId: null,
      lastOpenSubTabId: null,
      displayTools: !1,
      showDevWidget: !1,
      devWidgetPosition: { x: 0, y: 0 },
      sortedScreenKeys: [],
    };
  class o extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsSettingsStore";
    static persistKey = "DevToolsSettingsStore";
    initialize(e) {
      ((l = e ?? l), (r.h.actionLogger.persist = a.A.isDeveloper));
    }
    getUserAgnosticState() {
      return l;
    }
    get sidebarWidth() {
      return this.displayTools ? l.sidebarWidth : 0;
    }
    get lastOpenTabId() {
      return l.lastOpenTabId ?? null;
    }
    get lastOpenSubTabId() {
      return l.lastOpenSubTabId ?? null;
    }
    get displayTools() {
      return a.A.isDeveloper && l.displayTools;
    }
    get showDevWidget() {
      return a.A.isDeveloper && l.showDevWidget;
    }
    get devWidgetPosition() {
      return l.devWidgetPosition;
    }
    get sortedScreenKeys() {
      return l.sortedScreenKeys;
    }
  }
  let d = new o(r.h, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
      a.A.isDeveloper && (l = { ...l, ...e.settings });
    },
  });
}
