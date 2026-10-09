/* Recovered shipped factory. Module 630986.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4468875..4469338
 * Raw property SHA-256: 12968f6fcd741b881980dd0f001db3deea99b80980e10d864ee3f744e1a45f31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    A: () =>
      function e(t) {
        return (Array.isArray(t) ? t : [t])
          .flatMap((t) => {
            switch (t.type) {
              case i.I5.MEDIA_GALLERY:
                return t.items.map((e) => e.media);
              case i.I5.THUMBNAIL:
                return t.media;
              case i.I5.FILE:
                return t.file;
              case i.I5.SECTION:
                return [...t.components.flatMap(e), ...e(t.accessory)];
              case i.I5.ACTION_ROW:
              case i.I5.CONTAINER:
                return t.components.flatMap(e);
              default:
                return [];
            }
          })
          .map((e) => ("proxy_url" in e ? (0, r.Uv)(e) : e));
      },
  });
  var i = n(155718),
    r = n(731068);
}
