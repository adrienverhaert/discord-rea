/* Recovered shipped factory. Module 874486.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6634339..6635131
 * Raw property SHA-256: bb5bac4dff72ed8c885d8687d5c259be9390337f918e724706f1de73dd16a643
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(73153),
    a = n(280450),
    s = n(754692),
    l = n(3137),
    o = n(559908);
  let d = { unlockedAchievements: {} },
    c = { ...d };
  class u extends i.Ay.PersistedStore {
    static displayName = "PoggermodeAchievementStore";
    static persistKey = "PoggermodeAchievementStore";
    initialize(e) {
      this.waitFor(a.default, l.A, o.Ay);
      let t = e ?? { ...d };
      for (let e in t) c[e] = t[e];
    }
    getState() {
      return c;
    }
    getAllUnlockedAchievements() {
      return c.unlockedAchievements;
    }
    getUnlocked(e) {
      return c.unlockedAchievements[e] ?? null;
    }
  }
  let _ = new u(r.h, {
    POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
      let { achievementId: t } = e;
      if (!l.A.isEnabled()) return !1;
      null != c.unlockedAchievements[t] ||
        ((c.unlockedAchievements = {
          ...c.unlockedAchievements,
          [t]: { achievementId: t, dateUnlocked: Date.now() },
        }),
        setTimeout(() => {
          (0, s.U)(t, !0);
        }, 2e3));
    },
  });
}
