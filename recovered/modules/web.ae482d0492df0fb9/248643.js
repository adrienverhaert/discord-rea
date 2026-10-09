/* Recovered shipped factory. Module 248643.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5815241..5816754
 * Raw property SHA-256: c51bf73e307b985770ab37ec9c1540dd8aaff0893e409e3e0248d915cd52c2f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(453771),
    s = n(619517),
    l = n(440014);
  n(516653);
  var o = n(660183);
  class d extends r.Component {
    render() {
      let {
        src: e,
        fileSize: t,
        className: n,
        mediaPlayerClassName: r,
        poster: d,
        fileName: c,
        naturalWidth: u,
        naturalHeight: _,
        playable: E,
        downloadable: A = !0,
        volume: h,
        autoPlay: f,
        autoMute: I,
        responsive: p,
        mediaLayoutType: T,
        mimeType: m,
        renderOverlayContent: g,
        renderLinkComponent: S,
        onClick: N,
        onPlay: C,
        onPause: O,
        onEnded: R,
        onControlsShow: L,
        onControlsHide: y,
        onVolumeChange: D,
        onMute: v,
        disableArrowKeySeek: b,
        disableClickToUnmute: M,
        onFullscreenChange: P,
        allowFullScreen: U,
        videoRef: w,
        mediaPlayerRef: G,
        initialTimeSec: x,
        alt: k = o.intl.string(o.t.FlNoSV),
        ...F
      } = this.props;
      return (0, i.jsx)(s.Ay, {
        alt: k,
        className: n,
        src: d,
        ...F,
        minWidth: l.Ay.minWidth,
        minHeight: l.Ay.minHeight,
        shouldLink: !1,
        shouldAnimate: !1,
        mediaLayoutType: T,
        responsive: p,
        children: (n) => {
          let {
            src: s,
            size: { width: o, height: d },
          } = n;
          return (0, i.jsx)(l.Ay, {
            ref: G,
            alt: k,
            className: r,
            forceExternal: !((u <= 6016 && _ <= 3384) || (u <= 3384 && _ <= 6016)),
            src: e,
            poster: s,
            width: o,
            height: d,
            responsive: p,
            volume: h,
            autoPlay: f ?? !1,
            autoMute: I ?? !1,
            type: l.Ay.Types.VIDEO,
            mediaLayoutType: T,
            fileName: c,
            fileSize: null == t ? void 0 : (0, a.Hb)(t),
            fileSizeBytes: null == t ? void 0 : t,
            playable: E,
            renderLinkComponent: S,
            renderOverlayContent: g,
            onClick: N,
            onPlay: C,
            onPause: O,
            onEnded: R,
            onVolumeChange: D,
            onMute: v,
            onControlsShow: L,
            onControlsHide: y,
            mimeType: m,
            downloadable: A,
            disableArrowKeySeek: b,
            disableClickToUnmute: M,
            onFullscreenChange: P,
            allowFullScreen: U,
            videoRef: w,
            initialTimeSec: x,
          });
        },
      });
    }
  }
}
