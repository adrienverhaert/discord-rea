/* Recovered shipped factory. Module 687658.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2319276..2320286
 * Raw property SHA-256: bca933ae714f3633ea19e105e375c180e95610653dffdb7f27d0e45cfb6a5f46
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { d: () => r }), n(321073));
  var i = n(509973);
  class r {
    digest = new i.Digest();
    total = 0;
    samples = 0;
    totalWeight = 0;
    getSamples() {
      return this.samples;
    }
    addSample(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      ((this.total += e * t),
        (this.totalWeight += t),
        this.samples++,
        i.TDigest.prototype.push.call(this.digest, e, t),
        this.digest.check_continuous());
    }
    addSamples(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      ((this.total += e.reduce((e, n) => e + n * t, 0)),
        (this.totalWeight += t * e.length),
        (this.samples += e.length),
        i.TDigest.prototype.push.call(this.digest, e, t),
        this.digest.check_continuous());
    }
    getReport() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
        t = {};
      for (let n of e) t[n] = this.digest.percentile(n / 100) ?? 0;
      return {
        min: this.digest.percentile(0) ?? 0,
        max: this.digest.percentile(1) ?? 0,
        count: this.digest.size() ?? 0,
        percentiles: t,
        mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
        samples: this.samples,
      };
    }
    getPercentile(e) {
      return this.digest.percentile(e / 100) ?? 0;
    }
  }
}
