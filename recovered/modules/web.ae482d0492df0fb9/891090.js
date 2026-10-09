/* Recovered shipped factory. Module 891090.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7670437..7672665
 * Raw property SHA-256: 2b3e52bd3131ec9c35d622cd373bfb25e6a34999e08dfd2a421b5fcabc858be8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Dt: () => c,
    Fg: () => u,
    HA: () => _,
    Qz: () => h,
    nQ: () => E,
    p4: () => d,
    ry: () => A,
  });
  var i = n(666860),
    r = n(174459),
    a = n(194004),
    s = n(652215),
    l = n(698279),
    o = n(202541);
  function d(e) {
    let {
      containerWidth: t,
      favoriteStickers: n,
      frequentlyUsedStickers: r,
      guildStickers: o,
      stickersTotal: d,
    } = e;
    i.Ay.trackWithMetadata(s.HAw.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: l.kx.STICKER,
      badged: !1,
      num_expressions_favorites: n.length,
      num_animated_expressions_favorites: n.filter((e) => (0, a.Tw)(e.format_type)).length,
      num_custom_expressions_favorites: n.filter((e) => (0, a.zN)(e.type)).length,
      num_standard_expressions_favorites: n.filter((e) => !(0, a.zN)(e.type)).length,
      num_expressions_frecent: r.length,
      num_custom_expressions_frecent: r.filter((e) => (0, a.zN)(e.type)).length,
      num_animated_expressions_frecent: r.filter((e) => (0, a.Tw)(e.format_type)).length,
      num_standard_expressions_frecent: r.filter((e) => !(0, a.zN)(e.type)).length,
      num_current_guild_expressions: o.length,
      num_custom_expressions_total: d,
    });
  }
  function c(e) {
    let t,
      { sticker: n, location: r } = e;
    (n.type === a.NL.GUILD && (t = n.guild_id),
      i.Ay.trackWithMetadata(s.HAw.EXPRESSION_FAVORITED, {
        location: r,
        expression_type: l.kx.STICKER,
        expression_id: n.id,
        expression_name: n.name,
        expression_guild_id: t,
        is_animated: (0, a.Tw)(n.format_type),
        is_custom: (0, a.zN)(n.type),
      }));
  }
  function u() {
    r.default.track(s.HAw.SEARCH_STARTED, { search_type: s.I4_.STICKER });
  }
  function _(e, t, n) {
    i.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_VIEWED, {
      search_type: s.I4_.STICKER,
      total_results: t,
      query: e,
      is_suggestion: n,
    });
  }
  function E(e, t, n) {
    let r,
      { sticker: l } = e;
    (l.type === a.NL.GUILD && (r = l.guild_id),
      i.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_SELECTED, {
        load_id: l.id,
        search_type: s.I4_.STICKER,
        source_object: "Sticker Picker",
        total_results: n,
        expression_guild_id: r,
        sticker_id: l.id,
        query: t,
      }));
  }
  function A(e) {
    let t,
      { sticker: n, category: r } = e;
    (n.type === a.NL.GUILD && (t = n.guild_id),
      i.Ay.trackWithMetadata(s.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
        type: o.e.EMOJI_PICKER_STICKER_CLICKED,
        expression_id: n.id,
        expression_name: n.name,
        expression_picker_section: r,
        expression_guild_id: t,
        is_animated: (0, a.Tw)(n.format_type),
        is_custom: (0, a.zN)(n.type),
      }));
  }
  function h(e) {
    null != e &&
      "" !== e &&
      i.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_EMPTY, {
        query: e,
        search_type: s.I4_.STICKER,
        source_object: "Sticker Picker",
      });
  }
}
