/* Recovered shipped factory. Module 645243.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9476138..9476554
 * Raw property SHA-256: 0b72931e72a790c42952137b0229243389a64ab691b0107085fedbacb40d7bb7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => a });
  var i = n(723702),
    r = n(652215);
  function a() {
    switch ((0, i.getPlatform)()) {
      case i.PlatformTypes.WINDOWS:
        let e = "x86";
        if (
          (null != window.DiscordNative && (e = window.DiscordNative.os.arch),
          "x86" === e || "ia32" === e)
        )
          return r.lM6.WIN32;
        return r.lM6.WIN64;
      case i.PlatformTypes.OSX:
        return r.lM6.MACOS;
      case i.PlatformTypes.LINUX:
        return r.lM6.LINUX;
      default:
        throw Error("Unsupported build type");
    }
  }
}
