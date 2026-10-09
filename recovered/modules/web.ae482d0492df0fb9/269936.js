/* Recovered shipped factory. Module 269936.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2721634..2722458
 * Raw property SHA-256: dc832fd0e3f3e3a4cdb68a2e08b3b331f6c8fcac595c60f7fcf501eae8389aee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => s });
  var i,
    r = (((i = {}).PORTRAIT = "9:16"), (i.LANDSCAPE = "16:9"), i),
    a = n(291749);
  function s(e) {
    var t;
    return {
      id: e.id,
      advertiserName: e.advertiser_name,
      productName: e.product_name,
      productIcon: (0, a.Zf)(e.product_icon),
      videoPreview: (0, a.Zf)(e.video_preview),
      imagePreview: (0, a.Zf)(e.image_preview),
      videoHls: (0, a.dv)(e.video_hls),
      videoRenditions: (function (e) {
        if (null == e) return;
        let t = {};
        for (let [n, i] of Object.entries(e))
          Object.values(r).includes(n) && "" !== i && (t[n] = (0, a.dv)(i));
        return Object.keys(t).length > 0 ? t : void 0;
      })(e.video_renditions),
      cta: {
        url: (t = e.cta).url,
        buttonLabel: t.button_label,
        android: null != t.android ? { androidAppId: t.android.android_app_id } : void 0,
        ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
      },
      rewardTimerSeconds: e.reward_timer_seconds ?? 15,
      videoDurationSeconds: e.video_duration_seconds,
    };
  }
}
