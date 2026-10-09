/* Recovered shipped factory. Module 20805.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3991139..3992057
 * Raw property SHA-256: 01cc780ae2ca1abf166b5548022b5a9f6a4aeb313ee686fc6fa17d4c4fad1495
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    $R: () => h,
    Lf: () => _,
    P: () => o,
    Tq: () => d,
    UQ: () => s,
    aj: () => E,
    fe: () => u,
    p6: () => c,
    qQ: () => a,
    yl: () => A,
    zD: () => l,
  });
  var i = n(681154),
    r = n(808380);
  function a(e) {
    return e?.content_type === i.ContentInventoryEntryType.PLAYED_GAME;
  }
  function s(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_GAME;
  }
  function l(e) {
    return a(e) || s(e);
  }
  function o(e) {
    return e?.extra != null && "application_id" in e?.extra;
  }
  function d(e) {
    return e?.content_type === i.ContentInventoryEntryType.LISTENED_SESSION;
  }
  function c(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_ARTIST;
  }
  function u(e) {
    return d(e) || c(e);
  }
  function _(e) {
    return e?.content_type === i.ContentInventoryEntryType.WATCHED_MEDIA;
  }
  function E(e) {
    return (
      (!!l(e) && e.extra.platform === r.Y.XBOX) || (!!l(e) && e.extra.platform === r.Y.PLAYSTATION)
    );
  }
  function A(e) {
    return e?.content_type === i.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
  }
  function h(e) {
    return l(e) || d(e) || _(e) || o(e);
  }
}
