/* Recovered shipped factory. Module 631670.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 714037..717171
 * Raw property SHA-256: 4a964994837373f92b0784a118bc713f47fb8afc54a0510de86ca2478663fd11
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    $I: () => p,
    Cw: () => E,
    F7: () => S,
    IM: () => g,
    KD: () => f,
    U_: () => h,
    Uo: () => A,
    _L: () => I,
    _e: () => N,
    fw: () => C,
    pZ: () => m,
    x8: () => T,
  });
  var i = n(636537),
    r = n(506774),
    a = n(73153),
    s = n(268429),
    l = n(61310),
    o = n(870600),
    d = n(976860);
  n(624826);
  var c = n(830215);
  n(252452);
  var u = n(652215),
    _ = n(516780);
  function E() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
  }
  function A() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
  }
  function h(e, t) {
    let n = t ? u.Rsh.DELETE_ACCOUNT : u.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({
      url: n,
      body: { password: e },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    }).then(() => {
      (c.A.logoutInternal(), (0, d.pX)(u.BVt.DEFAULT_LOGGED_OUT));
    });
  }
  async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = await i.Bo.patch({
        url: u.Rsh.ME,
        oldFormErrors: !0,
        body: e,
        headers: t.headers,
        rejectWithError: (0, i.fT)(),
      }),
      r = n.body;
    if (r.token) {
      let t = r.token;
      (delete r.token,
        a.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: r.id }),
        e?.password != null &&
          e?.new_password != null &&
          a.h.dispatch({ type: "PASSWORD_UPDATED", userId: r.id }));
    }
    return (a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: r }), n);
  }
  function I(e) {
    let {
      username: t,
      discriminator: n,
      email: i,
      emailToken: d,
      password: c,
      avatar: E,
      avatarDescription: A,
      avatarId: h,
      avatarDecoration: I,
      newPassword: p,
      globalName: T,
      legacyUsername: m,
      nameplate: g,
      primaryGuildId: S,
      displayNameStyles: N,
      vadColors: C,
      typingIndicatorStyle: O,
      avatarOriginalMd5: R,
    } = e;
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let L = {
      username: t,
      email: i,
      email_token: d,
      password: c,
      avatar: E,
      avatar_description: A,
      avatar_id: h,
      discriminator: n,
      global_name: T,
      legacy_username: m,
      new_password: p,
    };
    (void 0 !== I && (L.avatar_decoration_sku_id = I?.skuId ?? null),
      void 0 !== g && (L.nameplate_sku_id = g?.skuId ?? null),
      void 0 !== S && (L.primary_guild_id = S),
      null != N
        ? ((L.display_name_font_id = N.fontId),
          (L.display_name_effect_id = N.effectId),
          (L.display_name_colors = N.colors))
        : null === N &&
          ((L.display_name_font_id = null),
          (L.display_name_effect_id = null),
          (L.display_name_colors = null)),
      void 0 !== C && (L.vad_colors = C),
      void 0 !== O && (L.typing_indicator_style = null != O ? (0, o.El)(O) : null));
    let y = r.w.get(u.Xlh),
      D = (0, _.oH)();
    null != D && null != y && ((L.push_provider = D), (L.push_token = y));
    let v = r.w.get(u.Ahp);
    return (
      null != _.vz && null != v && ((L.push_voip_provider = _.vz), (L.push_voip_token = v)),
      f(L, { headers: s.A.buildHeadersForMd5({ [l.f.USER_DEFAULT_PROFILE_AVATAR]: R }) }).then(
        (e) => (
          a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
          (null != E || null != h) && a.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
          e
        ),
        (e) => (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
      )
    );
  }
  function p(e) {
    return i.Bo.post({
      url: u.Rsh.USER_HARVEST,
      body: { backends: e },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    });
  }
  function T() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
  }
  function m() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
  }
  function g() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
  }
  function S() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
  }
  function N() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
  }
  function C() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
  }
}
