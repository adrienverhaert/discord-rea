/* Recovered shipped factory. Module 776096.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8911174..8912366
 * Raw property SHA-256: 2b397061d473b5ecf21023da66854c3469c91f539fc2a13309e28cd30894b60c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => u }), n(321073));
  var i = n(17928),
    r = n(73153),
    a = n(636537),
    s = n(652215),
    l = n(71393);
  let o = {};
  function d() {
    o = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
  }
  d();
  class c extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
      (null != e && (o = e), this.waitFor(l.A));
    }
    getState() {
      return o;
    }
    getGuildAffinity(e) {
      return o.guildAffinitiesByGuildId[e];
    }
    get affinities() {
      return o.guildAffinities;
    }
    get hasRequestResolved() {
      return 0 !== o.lastFetched;
    }
  }
  let u = new c(r.h, {
    CONNECTION_OPEN: function () {
      return (
        Date.now() - o.lastFetched > 864e5 &&
          a.Bo.get({
            url: s.Rsh.GUILD_AFFINITIES,
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
          }).then(
            (e) => {
              let {
                body: { guild_affinities: t },
              } = e;
              r.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
            },
            () => {
              r.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
            },
          ),
        !1
      );
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
      let { guildAffinities: t } = e;
      ((o.guildAffinities = []),
        (o.guildAffinitiesByGuildId = {}),
        (o.lastFetched = Date.now()),
        t.forEach((e, t) => {
          let { affinity: n, guild_id: i } = e,
            r = { score: n, guildId: i, index: t };
          ((o.guildAffinitiesByGuildId[i] = r), o.guildAffinities.push(r));
        }));
    },
    LOGOUT: function () {
      d();
    },
  });
}
