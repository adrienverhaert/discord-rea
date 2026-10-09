/* Recovered shipped factory. Module 159001.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5130783..5132648
 * Raw property SHA-256: 3825589d979a6a32b50701074f58e44a9c605b942da606aa76d4f97cf803b690
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    GL: () => o,
    IM: () => E,
    JJ: () => d,
    RE: () => _,
    V2: () => c,
    go: () => u,
    x8: () => A,
  });
  var i = n(636537),
    r = n(73153),
    a = n(268429),
    s = n(61310),
    l = n(652215);
  async function o(e, t) {
    let {
      nick: n,
      avatar: o,
      avatarDescription: d,
      avatarId: c,
      avatarDecoration: u,
      nameplate: _,
      displayNameStyles: E,
      vadColors: A,
      avatarOriginalMd5: h,
    } = t;
    if (null == e) throw Error("Need guildId");
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let f = {
      nick: n,
      avatar: o,
      avatar_description: d,
      avatar_id: c,
      avatar_decoration_sku_id: void 0 !== u ? (u?.skuId ?? null) : void 0,
      collectibles: void 0 !== _ ? { nameplate: null === _ ? null : { sku_id: _.skuId } } : void 0,
      display_name_font_id: void 0 !== E ? (null !== E ? E.fontId : null) : void 0,
      display_name_effect_id: void 0 !== E ? (null !== E ? E.effectId : null) : void 0,
      display_name_colors: void 0 !== E ? (null !== E ? E.colors : null) : void 0,
      vad_colors: A,
    };
    try {
      let t = await i.Bo.patch({
          url: l.Rsh.SET_GUILD_MEMBER(e),
          body: f,
          headers: a.A.buildHeadersForMd5({ [s.f.USER_GUILD_PROFILE_AVATAR]: h }),
          oldFormErrors: !0,
          rejectWithError: !1,
        }),
        n = t.body;
      return (
        r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
        r.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
        (null != o || null != c) && r.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
        t
      );
    } catch (n) {
      let t = n.body;
      return (
        t?.username != null && ((t.nick = t.username), delete t.username),
        r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: e, errors: n.body }),
        n
      );
    }
  }
  function d(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
  }
  function c(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
  }
  function u() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
  }
  function _() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
  }
  function E() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
  }
  function A() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
  }
}
