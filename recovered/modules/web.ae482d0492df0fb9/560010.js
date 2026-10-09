/* Recovered shipped factory. Module 560010.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8839294..8840212
 * Raw property SHA-256: 5fce3843d3447efb3f166e0d602c19c754b6c4bd8464d5eedb7be514bc560064
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = {};
  class s extends i.Ay.Store {
    static displayName = "ChannelFollowerStatsStore";
    getFollowerStatsForChannel(e) {
      return a[e];
    }
  }
  let l = new s(r.h, {
    CONNECTION_OPEN: function () {
      a = {};
    },
    CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
      let { channelId: t, stats: n } = e;
      ((n = null != n ? n : {}),
        (a[t] = {
          loadingStatus: "succeeded",
          lastFetched: Date.now(),
          channelsFollowing: n.channels_following,
          guildMembers: n.guild_members,
          guildsFollowing: n.guilds_following,
          usersSeenEver: n.users_seen_ever,
          subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
          subscribersLostSinceLastPost: n.subscribers_lost_since_last_post,
        }));
    },
    CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
      let { channelId: t } = e;
      a[t] = {
        loadingStatus: "failed",
        lastFetched: Date.now(),
        channelsFollowing: 0,
        guildMembers: 0,
        guildsFollowing: 0,
        usersSeenEver: 0,
        subscribersGainedSinceLastPost: 0,
        subscribersLostSinceLastPost: 0,
      };
    },
  });
}
