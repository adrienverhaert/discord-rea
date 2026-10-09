/* Recovered shipped factory. Module 931664.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7666169..7666690
 * Raw property SHA-256: 8d42ed510b954747eff0db3e0ec7993a2348ffad96dc1557de8d6f2870bc44be
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(31717);
  let s = {},
    l = {};
  class o extends i.Ay.Store {
    static displayName = "StickerMessagePreviewStore";
    getStickerPreview(e, t) {
      return (t === a.C.FirstThreadMessage ? l : s)[e];
    }
  }
  let d = new o(r.h, {
    ADD_STICKER_PREVIEW: function (e) {
      let { channelId: t, sticker: n, draftType: i } = e;
      (i === a.C.FirstThreadMessage ? l : s)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
      let { channelId: t, draftType: n } = e,
        i = n === a.C.FirstThreadMessage ? l : s;
      null != i[t] && delete i[t];
    },
    LOGOUT: function () {
      ((s = {}), (l = {}));
    },
  });
}
