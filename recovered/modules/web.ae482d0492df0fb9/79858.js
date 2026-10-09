/* Recovered shipped factory. Module 79858.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7900038..7901907
 * Raw property SHA-256: 759345d4d869985125fccb4bd48c1662cd258e829eb6f058cf083bf2a227c2bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(607399),
    r = n(17928),
    a = n(73153),
    s = n(595528);
  let l = Object.freeze({
    "voice-conversations": { popoutOffset: { x: 45, y: 0 } },
    "writing-messages": { prerequisites: ["voice-conversations"], popoutOffset: { x: -36, y: 0 } },
    "direct-messages": { popoutOffset: { x: 50, y: 0 } },
    "create-first-server": { popoutOffset: { x: 45, y: 0 } },
    "organize-by-topic": { popoutOffset: { x: 50, y: 0 } },
    "instant-invite": { prerequisites: ["organize-by-topic"], popoutOffset: { x: -10, y: 0 } },
    "whos-online": { prerequisites: ["instant-invite"], popoutOffset: { x: -50, y: 0 } },
    "server-settings": { prerequisites: ["instant-invite"], popoutOffset: { y: 32, x: 0 } },
    "friends-list": { prerequisites: ["instant-invite"], popoutOffset: { x: 45, y: 0 } },
    "create-more-servers": { prerequisites: ["server-settings"], popoutOffset: { x: 45, y: 0 } },
  });
  n(436317);
  let o = {},
    d = {},
    c = !0,
    u = {},
    _ = !1;
  function E() {
    if (((u = {}), !c))
      for (let [e, t] of Object.entries(l)) {
        let n = !1 !== o[e];
        if (((u[e] = n), n && null != t.prerequisites))
          for (let n of t.prerequisites) !1 !== o[n] && (u[e] = !1);
      }
  }
  class A extends r.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
      (E(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A));
    }
    shouldShow(e) {
      return (
        !(!_ || c || (i.Fr && ["writing-messages", "organize-by-topic"].includes(e))) &&
        (u[e] || !1)
      );
    }
    shouldShowAnyIndicators() {
      return !c;
    }
    getIndicators() {
      return d;
    }
    getData() {
      return l;
    }
    getDefinition(e) {
      let t = this.getData();
      return null != t ? t[e] : null;
    }
  }
  let h = new A(a.h, {
    CONNECTION_OPEN: function (e) {
      let { tutorial: t } = e;
      ((_ = !0),
        (c = !0),
        (o = {}),
        null != t &&
          ((c = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (o[e] = !1))),
        E());
    },
    CONNECTION_CLOSED: function () {
      _ = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
      ((o = { ...o, [e.tutorialId]: !1 }), (d = { ...d }), delete d[e.tutorialId], E());
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
      d = { ...d, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
      ((d = { ...d }), delete d[e.tutorialId]);
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
      c = !0;
    },
  });
}
