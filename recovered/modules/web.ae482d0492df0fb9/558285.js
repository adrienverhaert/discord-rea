/* Recovered shipped factory. Module 558285.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8165354..8166383
 * Raw property SHA-256: b90f95213d7ce546e3244d2073f5faff03aee59f4bbc0ffcd12ae4826ffdda24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(256905),
    r = n(625494),
    a = n(652215);
  let s = { width: 1920, height: 1080 };
  async function l(e) {
    if (null == e) return s;
    try {
      let { width: t, height: n } = await new Promise((t, n) => {
        let i = new Image();
        ((i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
          (i.onerror = () => n(Error("measureImage: the image failed to load"))),
          (i.src = e));
      });
      return t > 0 && n > 0 ? { width: t, height: n } : s;
    } catch {
      return s;
    }
  }
  async function o(e, t) {
    let {
        key: n,
        gameId: i,
        videoURL: s,
        thumbnailURL: o,
        title: d,
        spritesheetImageURL: c,
        spritesheetVttURL: u,
      } = e,
      { width: _, height: E } = await l(o);
    return {
      type: "VIDEO",
      url: s,
      proxyUrl: s,
      poster: o,
      width: _,
      height: E,
      alt: d,
      clip: {
        id: n,
        url: s,
        width: _,
        height: E,
        title: d,
        application: { id: i },
        spritesheet_image_url: c,
        spritesheet_vtt_url: u,
      },
      onEnded: t ? () => r._.dispatch(a.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
  }
  async function d(e) {
    let { clips: t, startingIndex: n } = e;
    if (0 === t.length) return;
    let r = t.length > 1,
      a = await Promise.all(t.map((e) => o(e, r)));
    (0, i.R)({
      location: "user_profile_widget_clip",
      items: a,
      startingIndex: n,
      shouldHideMediaOptions: !0,
    });
  }
}
