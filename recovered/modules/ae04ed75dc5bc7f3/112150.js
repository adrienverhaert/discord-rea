/* Recovered shipped factory. Module 112150.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 33006..33648
 * Raw property SHA-256: 3173d3f33c1567d76474e494c53d8a11dd8e3d207fb24f0698f8e5347419e6f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { f: () => d });
  var i = n(582128),
    l = n(435582),
    s = n(283488),
    r = n(735991),
    a = n(486020),
    o = n(572211);
  function d(e) {
    let { bot: t } = e,
      n = (0, r.Z$)(e),
      { url: d } = (0, s.A)({
        applicationId: n ? e.id : void 0,
        size: 600,
        names: ["embedded_cover"],
      });
    return i.useMemo(() => {
      let i,
        s,
        c = o.u.BOT;
      if (null != t) {
        let { banner: e } = t;
        ((i = (0, a.z)({ id: t.id, banner: e, size: 512, canAnimate: !1 })),
          (0, a.VI)(e) &&
            null == d &&
            (s = (0, a.z)({ id: t.id, banner: e, size: 512, canAnimate: !0 })));
      }
      if (n) {
        let t = (0, r.Cx)(e);
        null != d && ((i = d), (c = o.u.ACTIVITY));
        let n = t?.activity_preview_video_asset_id;
        null != n && ((s = (0, l.A)(e.id, n)), (c = o.u.ACTIVITY));
      }
      return { staticBannerSrc: i, videoBannerSrc: s, bannerAspectRatio: c };
    }, [d, t, n, e]);
  }
}
