/* Recovered shipped factory. Module 624826.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8002737..8003129
 * Raw property SHA-256: f626c9c4490b3b6697738cdd3355f43cc124710714fb26e6c11e0b8a000b65ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => l });
  var i = n(469054),
    r = n(174459),
    a = n(486020),
    s = n(652215);
  function l(e) {
    let {
      avatarHash: t,
      avatarId: n,
      isGuildProfile: l = !1,
      avatarAssetOrigin: o = i.E.NEW_ASSET,
    } = e;
    r.default.track(s.HAw.USER_AVATAR_UPDATED, {
      animated: (0, a.VI)(t),
      is_guild_profile: l,
      recent_avatar_id: o === i.E.ARCHIVED_ASSET ? Number(n) : void 0,
      is_edited_recent_avatar: o === i.E.EDITED_ARCHIVED_ASSET,
    });
  }
}
