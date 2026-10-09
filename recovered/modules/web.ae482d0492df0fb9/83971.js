/* Recovered shipped factory. Module 83971.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3995758..3996670
 * Raw property SHA-256: 2ffe6faf7b7c4db2c6cc2928590101b8b4a6c81a9fa08b7757d5fe0879d96d83
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CU: () => u, F3: () => c, SU: () => A, fp: () => _, nU: () => h, qb: () => E });
  var i = n(205327),
    r = n(541806),
    a = n(20805),
    s = n(583846),
    l = n(652215),
    o = n(539170),
    d = n(272984);
  function c(e) {
    return (0, a.Tq)(e)
      ? e.extra.entries[0]?.media?.provider === i.X.SPOTIFY
      : !!(0, a.p6)(e) && e.extra.media.provider === i.X.SPOTIFY;
  }
  function u(e) {
    return !!(0, a.Lf)(e) && e.extra.application_id === o.ex;
  }
  function _(e, t) {
    let n = e.extra;
    return (
      null != n &&
      (("application_id" in t && t.application_id === n.application_id) ||
        ("game_name" in n
          ? t.name === n.game_name
          : "activity_name" in n && t.name === n.activity_name))
    );
  }
  function E(e, t) {
    return !!c(e) && (0, d.pH)(t.party?.id);
  }
  function A(e, t) {
    return !!((0, r.A)(t) && u(e)) && e.extra.media_title === t.details;
  }
  function h(e, t) {
    let n = e.filter(s.JM);
    return t.type === l.$pd.PLAYING
      ? n.filter(a.zD).find((e) => _(e, t))
      : t.type === l.$pd.LISTENING
        ? n.filter(a.Tq).find((e) => E(e, t))
        : t.type === l.$pd.WATCHING
          ? e.filter(a.Lf).find((e) => A(e, t))
          : void 0;
  }
}
