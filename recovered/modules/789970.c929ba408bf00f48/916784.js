/* Recovered shipped factory. Module 916784.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 6835..7454
 * Raw property SHA-256: 5c3b6e5b9952142445601795d636797a81ee0c467872e83e9b2d182591218c63
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { XJ: () => i, dK: () => n, td: () => s, vq: () => o });
  var i = function (e) {
      return e instanceof SVGElement && "getBBox" in e;
    },
    n = function (e) {
      if (i(e)) {
        var t = e.getBBox(),
          r = t.width,
          n = t.height;
        return !r && !n;
      }
      var o = e.offsetWidth,
        s = e.offsetHeight;
      return !(o || s || e.getClientRects().length);
    },
    o = function (e) {
      if (e instanceof Element) return !0;
      var t,
        r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
      return !!(r && e instanceof r.Element);
    },
    s = function (e) {
      switch (e.tagName) {
        case "INPUT":
          if ("image" !== e.type) break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
          return !0;
      }
      return !1;
    };
}
