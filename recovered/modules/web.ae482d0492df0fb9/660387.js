/* Recovered shipped factory. Module 660387.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2834185..2834626
 * Raw property SHA-256: 7f156c7d421c3ba44b00e86d06ead7e95180bc6dcdaea2a22429291a9b9abb2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { F: () => s }), n(17928));
  var i = n(812808),
    r = n(943577),
    a = n(174459);
  function s() {
    var e, t;
    let n,
      s = (0, i.B)();
    return (
      (e = r.A.nowPlayingCards),
      (t = s),
      (n = e.reduce((e, t) => {
        let n =
          t.party.currentActivities
            .filter(
              (e) => null != e.application.name && (0, a.isGameApplicationType)(e.application.type),
            )
            .map((e) => e.application.name) ?? [];
        return e.concat(n);
      }, [])),
      { now_playing_visible: t, now_playing_num_cards: e.length, now_playing_games_detected: n }
    );
  }
}
