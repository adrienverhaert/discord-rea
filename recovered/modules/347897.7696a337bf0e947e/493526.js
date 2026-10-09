/* Recovered shipped factory. Module 493526.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 458477..458886
 * Raw property SHA-256: a933938514b40709fed466297d2a26c95bf47f21078c21e522ca1beceec0d356
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t, r, n, i) {
    this.directMap[e + ":" + r] = t;
    var o,
      a = (e = e.replace(/\s+/g, " ")).split(" ");
    a.length > 1
      ? this.bindSequence(e, a, t, r)
      : ((o = this.getKeyInfo(e, r)),
        (this.callbacks[o.key] = this.callbacks[o.key] || []),
        this.getMatches(o.key, o.modifiers, { type: o.action }, n, e, i),
        this.callbacks[o.key][n ? "unshift" : "push"]({
          callback: t,
          modifiers: o.modifiers,
          action: o.action,
          seq: n,
          level: i,
          combo: e,
        }));
  };
}
