/* Recovered shipped factory. Module 237341.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1995..3000
 * Raw property SHA-256: 7be92d73e54bdc20ce99fb48cbd4e908af99354a15012c539ee992f772fc7f01
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.dataFormatterCache = void 0),
    (t.dataFormatterCache = new (class {
      constructor() {
        ((this.dateTime = new Map()),
          (this.duration = new Map()),
          (this.list = new Map()),
          (this.number = new Map()),
          (this.pluralRules = new Map()),
          (this.relativeTime = new Map()));
      }
      getDateTimeFormatter(...e) {
        return this._getCached(this.dateTime, e, (e) => new Intl.DateTimeFormat(...e));
      }
      getDurationFormatter(...e) {
        return this._getCached(this.duration, e, (e) => new Intl.DurationFormat(...e));
      }
      getListFormatter(...e) {
        return this._getCached(this.list, e, (e) => new Intl.ListFormat(...e));
      }
      getNumberFormatter(...e) {
        return this._getCached(this.number, e, (e) => new Intl.NumberFormat(...e));
      }
      getPluralRules(...e) {
        return this._getCached(this.pluralRules, e, (e) => new Intl.PluralRules(...e));
      }
      getRelativeTimeFormatter(...e) {
        return this._getCached(this.relativeTime, e, (e) => new Intl.RelativeTimeFormat(...e));
      }
      _getCached(e, t, r) {
        let n = this._getKey(t),
          i = e.get(n);
        if (i) return i;
        let o = r(t);
        return (e.set(n, o), o);
      }
      _getKey(...e) {
        return JSON.stringify(e);
      }
    })()));
}
