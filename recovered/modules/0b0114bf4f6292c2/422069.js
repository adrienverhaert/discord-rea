/* Recovered shipped factory. Module 422069.
 * Source: recovered/web/assets/0b0114bf4f6292c2.js
 * UTF-16 property offsets: 95..1589
 * Raw property SHA-256: 0227b6fbbebdc9305852191aa6dceb077f7e62939fb3f17178744980daf8ac7a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => s });
  var E = t(17928),
    _ = t(73153);
  let i = {},
    l = {},
    u = {},
    r = {},
    c = {},
    S = {},
    o = {},
    O = null;
  class R extends E.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
      return i[e];
    }
    getShopCollectionSkuIds(e) {
      return l[e];
    }
    hasShopCollectionBeenFetched(e) {
      return u[e] ?? !1;
    }
    isShopCollectionFetching(e) {
      return r[e] ?? !1;
    }
    getAnnouncements(e) {
      return c[e];
    }
    hasAnnouncementsBeenFetched(e) {
      return S[e] ?? !1;
    }
    isAnnouncementsFetching(e) {
      return o[e] ?? !1;
    }
    getPendingReturn() {
      return O;
    }
  }
  let s = new R(_.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
      let { gameId: n, games: t } = e;
      i[n] = t;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function (e) {
      let { collectionId: n } = e;
      r[n] = !0;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function (e) {
      let { collectionId: n, skuIds: t } = e;
      ((l[n] = t), (u[n] = !0), (r[n] = !1));
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function (e) {
      let { collectionId: n } = e;
      ((u[n] = !0), (r[n] = !1));
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function (e) {
      let { gameId: n } = e;
      o[n] = !0;
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function (e) {
      let { gameId: n, messages: t, channelId: E, guildId: _ } = e;
      ((c[n] = { messages: t, channelId: E, guildId: _ }), (S[n] = !0), (o[n] = !1));
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function (e) {
      let { gameId: n } = e;
      ((S[n] = !0), (o[n] = !1));
    },
    GAME_PROFILE_SET_PENDING_RETURN: function (e) {
      let { gameId: n, channelId: t, initialScrollOffset: E } = e;
      if (O?.gameId === n && O?.channelId === t && O?.initialScrollOffset === E) return !1;
      O = { gameId: n, channelId: t, initialScrollOffset: E };
    },
    GAME_PROFILE_CLEAR_PENDING_RETURN: function (e) {
      let { gameId: n } = e;
      if (null == O || O.gameId !== n) return !1;
      O = null;
    },
  });
}
