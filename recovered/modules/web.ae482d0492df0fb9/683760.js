/* Recovered shipped factory. Module 683760.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6670827..6672383
 * Raw property SHA-256: 430174283279a67edfa7c21898bb1634118d3b3ce4ecaa3b211260d73bc266b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(73153),
    a = n(572009),
    s = n(349871),
    l = n(202541);
  let o = "OverridePremiumTypeStore",
    d = {
      premiumTypeOverride: l.$I,
      premiumTypeActual: l.$I,
      createdAtOverride: l.lk,
      perksActual: null,
    };
  function c(e) {
    let t = (function (e) {
        let { user: t, type: n } = e;
        if ("CURRENT_USER_UPDATE" === n && void 0 === t.premium_type) return !1;
        d.premiumTypeActual = (0, a.nq)(t.premium_type);
      })(e),
      n = (function (e) {
        var t;
        let { user: n, type: i } = e;
        if ("CURRENT_USER_UPDATE" === i && void 0 === n.perks) return !1;
        d.perksActual = null == (t = n.perks) ? null : "activePerksBitmask" in t ? t : (0, s.c$)(t);
      })(e);
    if (!1 === t && !1 === n) return !1;
  }
  class u extends i.Ay.PersistedStore {
    static displayName = o;
    static persistKey = o;
    static migrations = [
      (e) => {
        if (e?.createdAtOverride == null) return { ...e, createdAtOverride: l.lk };
      },
    ];
    initialize(e) {
      if (null != e) {
        ((d.premiumTypeActual = e?.premiumTypeActual),
          (d.premiumTypeOverride = e?.premiumTypeOverride),
          (d.perksActual = e?.perksActual ?? null),
          null != e.createdAtOverride
            ? (d.createdAtOverride = new Date(e.createdAtOverride))
            : (d.createdAtOverride = l.lk));
        return;
      }
      ((d.premiumTypeOverride = l.$I), (d.createdAtOverride = l.lk));
    }
    getPremiumTypeOverride() {
      return d.premiumTypeOverride;
    }
    getPremiumTypeActual() {
      return d.premiumTypeActual;
    }
    getPerksActual() {
      return d.perksActual;
    }
    getCreatedAtOverride() {
      return d.createdAtOverride;
    }
    getState() {
      return d;
    }
    get premiumType() {
      return d.premiumTypeOverride;
    }
  }
  let _ = new u(r.h, {
    SET_PREMIUM_TYPE_OVERRIDE: function (e) {
      let { premiumType: t } = e;
      d.premiumTypeOverride = t;
    },
    SET_CREATED_AT_OVERRIDE: function (e) {
      let { createdAt: t } = e;
      d.createdAtOverride = t;
    },
    CURRENT_USER_UPDATE: c,
    CONNECTION_OPEN: c,
  });
}
