/* Recovered shipped factory. Module 719986.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3871901..3872609
 * Raw property SHA-256: b9b8697819f09d54bcf79ce82f060476532ae265ed0677dc78656a4d4a24b44f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M: () => i });
  class i {
    desktopMaxHeight;
    mobileMaxHeight;
    responsive;
    backgroundStyle;
    constructor(e) {
      ((this.desktopMaxHeight = e.desktop_max_height),
        (this.mobileMaxHeight = e.mobile_max_height),
        (this.responsive = e.responsive),
        (this.backgroundStyle = e.background_style));
    }
    static fromServer(e) {
      return new i(e);
    }
    toDesktopStyles() {
      let e = {};
      return (
        null != this.desktopMaxHeight && (e.maxHeight = this.desktopMaxHeight),
        null != this.backgroundStyle && (e.background = this.backgroundStyle),
        Object.keys(e).length > 0 ? e : void 0
      );
    }
    toMobileStyles() {
      let e = {};
      return (
        null != this.mobileMaxHeight && (e.maxHeight = this.mobileMaxHeight),
        null != this.backgroundStyle && (e.background = this.backgroundStyle),
        Object.keys(e).length > 0 ? e : void 0
      );
    }
  }
}
