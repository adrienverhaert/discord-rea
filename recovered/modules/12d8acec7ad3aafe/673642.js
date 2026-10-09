/* Recovered shipped factory. Module 673642.
 * Source: recovered/web/assets/12d8acec7ad3aafe.js
 * UTF-16 property offsets: 95..1371
 * Raw property SHA-256: e883f232b3f0399958c2e8874ed37f0b71720e6d63ccaaadf99224428e8fa25b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, E, e) {
  e.d(E, { GC: () => d, HN: () => T, Jt: () => n, WV: () => l, t$: () => I, tA: () => o });
  var r = e(636537),
    _ = e(73153),
    i = e(759532),
    h = e(679787),
    a = e(652215),
    p = e(660183);
  let s = /^#?[0-9a-fA-F]{6}$/;
  function c(t) {
    if (!s.test(t)) throw Error("Invalid guild theme preview color.");
    let E = t.toUpperCase();
    return E.startsWith("#") ? E : `#${E}`;
  }
  function o(t) {
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_START", ...t });
  }
  function n(t) {
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP", owner: t });
  }
  function d(t) {
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SELECT_PRESET", presetId: t });
  }
  function I(t) {
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_UPDATE_CUSTOM", ...t, colors: t.colors.map(c) });
  }
  function l() {
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
  }
  async function T() {
    let t = i.Ay.guildId,
      E = i.Ay.draft;
    if (null == t) return;
    let e = i.Ay.draftEnabled;
    _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_START" });
    try {
      let i = await r.Bo.patch({
          url: a.Rsh.GUILD_THEME(t),
          body: { ...(0, h.QK)(E), enabled: e },
          rejectWithError: !0,
        }),
        p = { ...(0, h.QK)(E), enabled: e },
        s = i.body,
        c = s?.theme !== void 0 ? s.theme : p,
        o = (0, h.UW)(c);
      _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_SUCCESS", guildId: t, guildTheme: o });
    } catch (e) {
      let E = e?.body?.message ?? e?.message ?? p.intl.string(p.t.fEptJP);
      throw (_.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_FAILURE", guildId: t, error: E }), e);
    }
  }
}
