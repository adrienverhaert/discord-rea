/* Recovered shipped factory. Module 178368.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9268867..9269654
 * Raw property SHA-256: 9c9e4623d509feb40b9b11808502688a66b69a12ecda98ae14b0d071fbf4060f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(73153),
    a = n(166403);
  let s = !1,
    l = !1,
    o = {};
  function d(e) {
    let { guildBoostSlot: t } = e;
    o = { ...o, [t.id]: t };
  }
  function c() {
    let e = {};
    for (let t of Object.values(o))
      ((e[t.id] = t), (t.subscription = a.A.getSubscriptionById(t.subscriptionId)));
    o = e;
  }
  class u extends i.Ay.Store {
    static displayName = "GuildBoostSlotStore";
    initialize() {
      this.syncWith([a.A], c);
    }
    get hasFetched() {
      return s;
    }
    get isFetching() {
      return l;
    }
    get boostSlots() {
      return o;
    }
    getGuildBoostSlot(e) {
      return o[e];
    }
  }
  let _ = new u(r.h, {
    GUILD_BOOST_SLOTS_FETCH: function () {
      l = !0;
    },
    GUILD_BOOST_SLOTS_FETCH_SUCCESS: function (e) {
      let { guildBoostSlots: t } = e;
      ((o = {}),
        t.forEach((e) => {
          o[e.id] = e;
        }),
        (l = !1),
        (s = !0));
    },
    GUILD_BOOST_SLOT_UPDATE_SUCCESS: d,
    GUILD_BOOST_SLOT_CREATE: d,
    GUILD_BOOST_SLOT_UPDATE: d,
    LOGOUT: function () {
      ((o = {}), (s = !1), (l = !1));
    },
  });
}
