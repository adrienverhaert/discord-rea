/* Recovered shipped factory. Module 752755.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5877498..5878233
 * Raw property SHA-256: 8262d8aaa643d8595b7b9d5952eb398dfdb27a40ce1feb3ebffdb797277a6f7f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c, e: () => s });
  var i,
    r = n(17928),
    a = n(73153),
    s =
      (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
      (i[(i.FETCHING = 1)] = "FETCHING"),
      (i[(i.FETCHED = 2)] = "FETCHED"),
      (i[(i.FAILED = 3)] = "FAILED"),
      i);
  let l = {},
    o = {};
  class d extends r.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
      if (null != e) return l[e];
    }
    getEmbedFetchState(e) {
      return o[e] ?? 0;
    }
    getMediaPostEmbeds() {
      return l;
    }
  }
  let c = new d(a.h, {
    CONNECTION_OPEN: function () {
      ((l = {}), (o = {}));
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
      let { threadId: t } = e;
      o[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
      let { threadId: t, mediaPostEmbed: n } = e;
      ((l = { ...l, [t]: n }), (o[t] = 2));
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
      let { threadId: t } = e;
      o[t] = 3;
    },
    LOGOUT: function (e) {
      e.isSwitchingAccount || ((l = {}), (o = {}));
    },
  });
}
