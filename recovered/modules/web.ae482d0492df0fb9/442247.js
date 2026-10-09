/* Recovered shipped factory. Module 442247.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4722938..4723446
 * Raw property SHA-256: 52f54357d21c68c920d8e9e312539b92cabb749a51d095ab8d75a37517a149a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => d });
  var i = n(17928),
    r = n(52133),
    a = n(49491),
    s = n(311043),
    l = n(243264),
    o = n(287809);
  function d(e) {
    return (0, i.bG)(
      [s.A, l.A, o.default],
      () =>
        (function (e) {
          let { gameId: t, user: n, game: i, autocompleteGame: r } = e;
          if (null != i) {
            if ((0, a.b)(i, n?.nsfwAllowed)) return;
            return { gameId: t, gameName: i.name, gameIcon: i.media?.icon };
          }
          if (null != r) return { gameId: t, gameName: r.name, gameIcon: r.icon };
        })({
          gameId: e,
          user: o.default.getCurrentUser(),
          game: s.A.getGame(e),
          autocompleteGame: l.A.getGameById(e),
        }),
      [e],
      r.A,
    );
  }
}
