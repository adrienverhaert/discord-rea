/* Recovered shipped factory. Module 2110.
 * Source: recovered/web/assets/29daad9edb7c553a.js
 * UTF-16 property offsets: 12670..13088
 * Raw property SHA-256: 1dfdf9e5c0d7a3ebe1340c716482b5d2ebdab1d78db04c4e1e41c939b6f3b491
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { x: () => i });
  let i = {
    IN_APP: new Set([
      "application",
      "first_dm",
      "guild",
      "guild_directory_entry",
      "guild_discovery",
      "guild_scheduled_event",
      "message",
      "report_to_mod_message",
      "stage_channel",
      "user",
      "widget",
    ]),
    REPORT_TO_MOD: new Set(["report_to_mod_message"]),
    UNAUTHENTICATED: new Set(["guild_urf", "media_takedown", "message_urf", "user_urf"]),
    CONSOLE: new Set(["playstation_console_voice", "xbox_console_voice"]),
  };
}
