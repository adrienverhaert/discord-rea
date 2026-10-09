/* Recovered shipped factory. Module 286617.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7626777..7627347
 * Raw property SHA-256: 916a8f73576bd281b1fee1600117fd0b9ea0d87d2d8821b29907ea74d81a14bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(981616);
  function r(e, t, n, r) {
    let a = e.hasConnectedAccount(),
      s = (0, i.d3)(e),
      l = e.getTrack(),
      o = e.getSyncingWith(),
      d = e.getActivity(),
      c = l?.id ?? d?.sync_id ?? e.getLastPlayedTrackId(),
      u = n.id === t.getId(),
      _ = a && !s,
      E = null != c && c === r?.sync_id,
      A = d?.party != null && r?.party?.id === d.party.id,
      h = o?.userId != null && o?.userId === n.id;
    return {
      user: n,
      activity: r,
      hasSpotifyAccount: a,
      canPlaySpotify: s,
      notPlayable: _,
      syncingWithParty: A,
      syncingWithUser: h,
      isCurrentUser: u,
      currentUserTrackId: c,
      playingSameTrack: E,
      playDisabled: u || _ || E,
      syncDisabled: u || h || A,
    };
  }
}
