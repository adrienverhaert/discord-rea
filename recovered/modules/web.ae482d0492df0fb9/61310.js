/* Recovered shipped factory. Module 61310.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2560074..2561009
 * Raw property SHA-256: dc1081e9259be6939e6dc4a12a4cabb9a4bfb59df3962d429d84245cf7c298d8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => s, f: () => a });
  var i,
    r = n(339984),
    a =
      (((i = {}).USER_DEFAULT_PROFILE_AVATAR = "USER_DEFAULT_PROFILE_AVATAR"),
      (i.USER_DEFAULT_PROFILE_BANNER = "USER_DEFAULT_PROFILE_BANNER"),
      (i.USER_GUILD_PROFILE_AVATAR = "USER_GUILD_PROFILE_AVATAR"),
      (i.USER_GUILD_PROFILE_BANNER = "USER_GUILD_PROFILE_BANNER"),
      (i.GUILD_ICON = "GUILD_ICON"),
      (i.GUILD_BANNER = "GUILD_BANNER"),
      (i.GUILD_DISCOVERY_SPLASH = "GUILD_DISCOVERY_SPLASH"),
      (i.GUILD_INVITE_SPLASH = "GUILD_INVITE_SPLASH"),
      (i.EMOJI = "EMOJI"),
      (i.STICKER = "STICKER"),
      i);
  function s(e, t) {
    switch (e) {
      case r.HL.AVATAR:
        return null != t ? "USER_GUILD_PROFILE_AVATAR" : "USER_DEFAULT_PROFILE_AVATAR";
      case r.HL.BANNER:
        return null != t ? "USER_GUILD_PROFILE_BANNER" : "USER_DEFAULT_PROFILE_BANNER";
      case r.HL.GUILD_BANNER:
      case r.HL.VIDEO_BACKGROUND:
      case r.HL.SCHEDULED_EVENT_IMAGE:
      case r.HL.HOME_HEADER:
      case r.HL.AVATAR_DECORATION:
      case r.HL.GUILD_ICON:
      case r.HL.PERSONAL_WIDGET_COVER:
      case r.HL.PERSONAL_WIDGET_FIELD:
        return null;
    }
  }
}
