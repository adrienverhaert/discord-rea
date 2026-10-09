/* Recovered shipped factory. Module 713125.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5214652..5215818
 * Raw property SHA-256: 6677b5842273e63bbbc102c14c801c078b8550d7c74fd424581ab515a54a2178
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $o: () => o, Ay: () => E, eg: () => d });
  var i,
    r = n(17928),
    a = n(73153),
    s = n(5180),
    l = n(652215),
    o =
      (((i = {}).STARTED = "started"),
      (i.READY = "ready"),
      (i.COMPLETED = "completed"),
      (i.NOT_APPLICABLE = "not_applicable"),
      i);
  function d(e) {
    return null != e && ["started", "ready"].includes(e);
  }
  let c = {},
    u = {};
  class _ extends r.Ay.Store {
    static displayName = "GuildOnboardingStore";
    shouldShowOnboarding(e) {
      return !(e === l.ME || (0, s.ai)(e)) && !!d(c[e]);
    }
    getOnboardingStatus(e) {
      return c[e];
    }
    resetOnboardingStatus(e) {
      ((c[e] = "started"), (u[e] = "cover"));
    }
    getCurrentOnboardingStep(e) {
      return u[e] ?? "cover";
    }
  }
  let E = new _(a.h, {
    LOGOUT: function () {
      ((c = {}), (u = {}));
    },
    GUILD_DELETE: function (e) {
      let { guild: t } = e;
      (delete c[t.id], delete u[t.id]);
    },
    GUILD_ONBOARDING_START: function (e) {
      let { guildId: t } = e;
      c[t] = "started";
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
      let { guildId: t, enabled: n } = e;
      if ("started" !== c[t]) return !1;
      n ? (c[t] = "ready") : (c[t] = "not_applicable");
    },
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function (e) {
      let { guildId: t } = e;
      c[t] = "not_applicable";
    },
    GUILD_ONBOARDING_COMPLETE: function (e) {
      let { guildId: t } = e;
      c[t] = "completed";
    },
    GUILD_ONBOARDING_SET_STEP: function (e) {
      let { guildId: t, step: n } = e;
      u[t] = n;
    },
    CONNECTION_OPEN: function () {
      u = {};
    },
  });
}
