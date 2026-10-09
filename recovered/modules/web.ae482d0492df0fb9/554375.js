/* Recovered shipped factory. Module 554375.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 586374..588818
 * Raw property SHA-256: f6b2eb3f22ae4ebd428fe7cfc85b4d4f46e96d4052fa69b027a3196e0d4795b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    Cp: () => R,
    Gf: () => C,
    Sw: () => v,
    V4: () => D,
    ak: () => O,
    dK: () => S,
    dZ: () => N,
  }),
    n(321073));
  var i = n(435558),
    r = n.n(i),
    a = n(636537),
    s = n(406935),
    l = n(765178),
    o = n(73153),
    d = n(181658),
    c = n(268429),
    u = n(236285),
    _ = n(7584),
    E = n(635222),
    A = n(595528),
    h = n(594061),
    f = n(919638),
    I = n(403362),
    p = n(157559),
    T = n(652215),
    m = n(355097),
    g = n(660183);
  function S(e) {
    h.wc.updateAsync(
      "textAndImages",
      (t) => {
        ((t.diversitySurrogate = s.hU.create()), (t.diversitySurrogate.value = e));
      },
      m.Sb.FREQUENT_USER_ACTION,
    );
  }
  function N(e) {
    (o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
      a.Bo.get({ url: T.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
        (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
        () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
      ));
  }
  function C(e) {
    let { guildId: t, image: n, name: i, roles: r, analyticsLocation: s, originalMd5: l } = e;
    return (
      o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
      a.Bo.post({
        url: T.Rsh.GUILD_EMOJIS(t),
        body: { image: n, name: i, roles: r },
        headers: c.A.buildHeadersForMd5(l),
        context: { client_event_source: s?.page },
        oldFormErrors: !0,
        rejectWithError: (0, a.fT)(),
      }).then(
        (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
        (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
      )
    );
  }
  function O(e, t, n) {
    return (
      o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
      a.Bo.del({
        url: T.Rsh.GUILD_EMOJI(e, t),
        body: null != n ? { replaced_by: n } : void 0,
        oldFormErrors: !0,
        rejectWithError: (0, a.fT)(),
      }).then(() => {
        l.O.announce(g.intl.string(g.t.L3UUha));
      })
    );
  }
  async function R(e) {
    let { guildId: t, emojiId: n, name: i, roles: r } = e;
    try {
      return await a.Bo.patch({
        url: T.Rsh.GUILD_EMOJI(t, n),
        body: { name: i, roles: r },
        oldFormErrors: !0,
        rejectWithError: !0,
      });
    } catch (e) {
      throw new d.A(e);
    }
  }
  function L(e) {
    if (f.A.totalUnavailableGuilds > 0 || !A.A.isConnected()) return e;
    let t = e.map((e) => u.Ay.getCustomEmojiById(e) ?? _.Ay.getByName(e)).filter(I.Vq);
    return [...(0, E.A)(t).keys()];
  }
  function y(e) {
    return null == e ? null : (e.id ?? _.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
  }
  function D(e) {
    let t = y(e);
    null != t &&
      h.bW.updateAsync(
        "favoriteEmojis",
        (e) =>
          ((e.emojis = L(e.emojis)), r().size(e.emojis) >= 250)
            ? (p.A.show({
                title: g.intl.string(g.t["+XYXtZ"]),
                body: g.intl.formatToPlainString(g.t.JaIyFi, { count: 250 }),
              }),
              !1)
            : !e.emojis.includes(t) && void e.emojis.push(t),
        m.Sb.INFREQUENT_USER_ACTION,
      );
  }
  function v(e) {
    let t = y(e);
    null != t &&
      h.bW.updateAsync(
        "favoriteEmojis",
        (e) => {
          if (((e.emojis = L(e.emojis)), !e.emojis.includes(t))) return !1;
          e.emojis = e.emojis.filter((e) => t !== e);
        },
        m.Sb.INFREQUENT_USER_ACTION,
      );
  }
}
