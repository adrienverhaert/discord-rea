/* Recovered shipped factory. Module 871109.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5242896..5244573
 * Raw property SHA-256: 6efa0e4469a3faa92130ed8089c0c3c372a1b82a299a7eabe05c56b61ed803c3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => T, e: () => d }), n(321073));
  var i,
    r = n(17928),
    a = n(713402),
    s = n(73153),
    l = n(927813),
    o = n(935208),
    d =
      (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
      (i[(i.FETCHING = 1)] = "FETCHING"),
      (i[(i.FETCHED = 2)] = "FETCHED"),
      i);
  let c = {},
    u = {},
    _ = {},
    E = 10 * l.A.Millis.MINUTE;
  function A(e) {
    return `guild:${e}`;
  }
  function h(e) {
    return `guild:${e}:published`;
  }
  let f = new a.J(
      (e) => {
        let t = [A(e.guild_id)];
        return (e.published && t.push(h(e.guild_id)), t);
      },
      (e) => {
        let t;
        return ((t = o.default.extractTimestamp(e.id)), e.published ? -t : -t + 1e12);
      },
    ),
    I = [];
  class p extends r.Ay.Store {
    static displayName = "GuildProductsStore";
    getGuildProductsForGuildFetchState(e) {
      return c[e] ?? 0;
    }
    getGuildProduct(e) {
      return f.get(e);
    }
    getGuildProductsForGuild(e, t) {
      let { publishedOnly: n } = t;
      return null == e ? I : f.values(n ? h(e) : A(e));
    }
    getGuildProductFetchState(e) {
      return u[e] ?? 0;
    }
    isGuildProductsCacheExpired(e) {
      return Date.now() - (_[e] ?? 0) > E;
    }
  }
  let T = new p(s.h, {
    CONNECTION_OPEN: function () {
      (f.clear(), (c = {}), (u = {}), (_ = {}));
    },
    GUILD_PRODUCTS_FETCH: function (e) {
      let { guildId: t } = e;
      ((c[t] = 1),
        [...f.values(A(t))].forEach((e) => {
          f.delete(e.id);
        }));
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
      let { guildId: t, products: n } = e;
      ((c[t] = 2),
        (_[t] = Date.now()),
        n.forEach((e) => {
          (f.set(e.id, e), (u[e.id] = 2));
        }));
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
      let { guildId: t } = e;
      c[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
      let { product: t } = e;
      f.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
      let { product: t } = e;
      f.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
      let { productId: t } = e;
      f.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
      let { productId: t } = e;
      u[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
      let { product: t } = e;
      ((u[t.id] = 2), f.set(t.id, t));
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
      let { productId: t, error: n } = e;
      ((u[t] = 2), 404 === n.status && f.delete(t));
    },
  });
}
