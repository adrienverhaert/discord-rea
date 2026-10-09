/* Recovered shipped factory. Module 408018.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3280068..3280978
 * Raw property SHA-256: 4b55011821c345f3c9d16bed10f8e0dcf3cbe4378dac676d9956f2aac5bd1b33
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i() {
    return { textValue: "", richValue: [{ type: "line", children: [{ text: "" }] }] };
  }
  function r(e) {
    return { textValue: e, richValue: a(e) };
  }
  function a(e) {
    return e.split("\n").map((e) => ({ type: "line", children: [{ text: e }] }));
  }
  function s(e) {
    switch (e.type) {
      case "userMention":
        return { type: "userMention", userId: e.userId };
      case "channelMention":
        return { type: "channelMention", channelId: e.channelId };
      case "soundboard":
        return { type: "soundboard", guildId: e.guildId, soundId: e.soundId };
      case "roleMention":
        return { type: "roleMention", roleId: e.roleId };
      case "textMention":
        return { type: "textMention", text: e.name };
      case "emoji":
        return { type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate };
      case "customEmoji":
        return {
          type: "customEmoji",
          emojiId: e.emoji.emojiId,
          name: e.emoji.name,
          animated: e.emoji.animated,
        };
      case "testInlineVoid":
        throw Error("Unable to convert test types");
    }
    return null;
  }
  n.d(t, { N3: () => i, QR: () => s, ur: () => r, x7: () => a });
}
