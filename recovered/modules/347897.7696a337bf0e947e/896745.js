/* Recovered shipped factory. Module 896745.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 3001..3890
 * Raw property SHA-256: c51f003a2edffff74cd69805b9b27878808e45a357c10fdb13010297b58d80ca
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.DEFAULT_FORMAT_CONFIG = void 0),
    (t.resolveFormatConfigOptions = function (e, t) {
      return "string" == typeof (null == t ? void 0 : t.format)
        ? Object.assign(Object.assign({}, e[t.format]), t)
        : t;
    }),
    (t.DEFAULT_FORMAT_CONFIG = {
      duration: {},
      list: {},
      relativeTime: {},
      number: {
        integer: { maximumFractionDigits: 0 },
        currency: { style: "currency" },
        percent: { style: "percent" },
      },
      date: {
        short: { month: "numeric", day: "numeric", year: "2-digit" },
        medium: { month: "short", day: "numeric", year: "numeric" },
        long: { month: "long", day: "numeric", year: "numeric" },
        full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
      },
      time: {
        short: { hour: "numeric", minute: "numeric" },
        medium: { hour: "numeric", minute: "numeric", second: "numeric" },
        long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
        full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
      },
    }));
}
