/* Recovered shipped factory. Module 939796.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 37411..38758
 * Raw property SHA-256: 1838f291487f0f9b277eefcf04260de555e4f31ebbc37e81bce69e3b7a933d91
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = (function () {
    "use strict";
    function e() {
      ((this.dataPoints_ = []),
        (this.color_ = "red"),
        (this.isVisible_ = !0),
        (this.cacheStartTime_ = null),
        (this.cacheStepSize_ = 0),
        (this.cacheValues_ = []));
    }
    function t(e, t) {
      ((this.time = e), (this.value = t));
    }
    return (
      (e.prototype = {
        toJSON: function () {
          if (this.dataPoints_.length < 1) return {};
          for (var e = [], t = 0; t < this.dataPoints_.length; ++t)
            e.push(this.dataPoints_[t].value);
          return {
            startTime: this.dataPoints_[0].time,
            endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
            values: JSON.stringify(e),
          };
        },
        addPoint: function (e, r) {
          var n = new Date(e);
          (this.dataPoints_.push(new t(n, r)),
            this.dataPoints_.length > 1e3 && this.dataPoints_.shift());
        },
        setPoints: function (e) {
          let t = Math.max(0, e.length - 1e3);
          this.dataPoints_ = e.slice(t);
        },
        isVisible: function () {
          return this.isVisible_;
        },
        show: function (e) {
          this.isVisible_ = e;
        },
        getColor: function () {
          return this.color_;
        },
        setColor: function (e) {
          this.color_ = e;
        },
        getCount: function () {
          return this.dataPoints_.length;
        },
        getValues: function (e, t, r) {
          return (
            (this.cacheStartTime_ == e &&
              this.cacheStepSize_ == t &&
              this.cacheValues_.length == r) ||
              ((this.cacheValues_ = this.getValuesInternal_(e, t, r)),
              (this.cacheStartTime_ = e),
              (this.cacheStepSize_ = t)),
            this.cacheValues_
          );
        },
        getValuesInternal_: function (e, t, r) {
          for (var n = [], a = 0, o = 0, i = e, s = 0; s < r; ++s) {
            for (; a < this.dataPoints_.length && this.dataPoints_[a].time < i;)
              ((o = this.dataPoints_[a].value), ++a);
            ((n[s] = o), (i += t));
          }
          return n;
        },
      }),
      e
    );
  })();
}
