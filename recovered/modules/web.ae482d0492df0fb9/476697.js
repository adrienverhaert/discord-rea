/* Recovered shipped factory. Module 476697.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4996643..4997808
 * Raw property SHA-256: 32b6f41feb110a148af7831c57d68de72da3c20ddb9a40c26f17ab17bd2892e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => l });
  var i = n(723702),
    r = n(327649),
    a = n(248174),
    s = n(753070);
  function l(e, t, n, l) {
    let o = {
      [s.jQ.PRESET_DOCUMENTS]: [
        { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_15 },
        { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_5 },
      ],
      [s.jQ.PRESET_VIDEO]: [
        { resolution: s.on.RESOLUTION_1440, fps: s.kn.FPS_60 },
        { resolution: s.on.RESOLUTION_1080, fps: s.kn.FPS_60 },
        { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_60 },
        { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_30 },
      ],
      [s.jQ.PRESET_AUTO]: [],
      [s.jQ.PRESET_CUSTOM]: [],
      [s.jQ.PRESET_MOBILE_DEFAULT]: [{ resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_30 }],
      [s.jQ.PRESET_MOBILE_PERFORMANCE]: [{ resolution: s.on.RESOLUTION_480, fps: s.kn.FPS_30 }],
      [s.jQ.PRESET_MOBILE_HIGH_QUALITY]: [{ resolution: s.on.RESOLUTION_1080, fps: s.kn.FPS_60 }],
    }[e];
    if (null == o) return null;
    for (let d of o)
      if ((0, r.A)(e, d.resolution, d.fps, t, n)) {
        if (e === s.jQ.PRESET_VIDEO && i.isPlatformEmbedded && (0, i.isDesktop)()) {
          let e = (0, a.A)("getStreamSettingsForPreset", t, l);
          if (
            e?.maxResolution != null &&
            null != e.maxFPS &&
            d.resolution !== s.on.RESOLUTION_SOURCE &&
            d.resolution < e.maxResolution &&
            d.fps <= e.maxFPS
          )
            return [e.maxResolution, e.maxFPS];
        }
        return [d.resolution, d.fps];
      }
    return null;
  }
}
