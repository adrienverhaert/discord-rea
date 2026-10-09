/* Recovered shipped factory. Module 235002.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 38759..44259
 * Raw property SHA-256: a41030f4ad69a8ca6d278c969663b7c17164cfc8cf34b67b402fb9ebd3b7c9b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = (function () {
    "use strict";
    function e(e, t) {
      ((this.scrollbar_ = { position_: 0, range_: 0 }),
        (this.devicePixelRatio = t || 1),
        (this.canvas_ = e),
        (e.width = parseInt(e.width, 10) * this.devicePixelRatio),
        (e.height = parseInt(e.height, 10) * this.devicePixelRatio),
        (this.gridColor = "#CCC"),
        (this.textColor = "#000"),
        (this.backgroundColor = "#FFF"),
        (this.fontWeight = "normal"),
        (this.fontSize = 10),
        (this.fontFamily = "sans-serif"),
        (this.timeLocales = []),
        (this.timeOptions = {}),
        (this.startTime_ = 0),
        (this.endTime_ = 1),
        (this.graph_ = null),
        (this.scale_ = 1e3 / this.devicePixelRatio),
        this.updateScrollbarRange_(!0));
    }
    e.prototype = {
      setScale: function (e) {
        this.scale_ = e;
      },
      getLength_: function () {
        return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
      },
      graphScrolledToRightEdge_: function () {
        return this.scrollbar_.position_ == this.scrollbar_.range_;
      },
      updateScrollbarRange_: function (e) {
        var t = this.getLength_() - this.canvas_.width;
        (t < 0 && (t = 0),
          this.scrollbar_.position_ > t && (e = !0),
          (this.scrollbar_.range_ = t),
          e && ((this.scrollbar_.position_ = t), this.repaint()));
      },
      setDateRange: function (e, t) {
        ((this.startTime_ = e.getTime()),
          (this.endTime_ = t.getTime()),
          this.endTime_ <= this.startTime_ && (this.startTime_ = this.endTime_ - 1),
          this.updateScrollbarRange_(!0));
      },
      updateEndDate: function (e) {
        ((this.endTime_ = e || new Date().getTime()),
          this.updateScrollbarRange_(this.graphScrolledToRightEdge_()));
      },
      getStartDate: function () {
        return new Date(this.startTime_);
      },
      setDataSeries: function (e) {
        this.graph_ = new t(this.devicePixelRatio);
        for (var r = 0; r < e.length; ++r) this.graph_.addDataSeries(e[r]);
        this.repaint();
      },
      addDataSeries: function (e) {
        (this.graph_ || (this.graph_ = new t(this.devicePixelRatio)),
          this.graph_.addDataSeries(e),
          this.repaint());
      },
      repaint: function () {
        if (null !== this.canvas_.offsetParent) {
          this.repaintTimerRunning_ = !1;
          var e = this.canvas_.width,
            t = this.canvas_.height,
            r = this.canvas_.getContext("2d");
          if (
            ((r.fillStyle = this.backgroundColor),
            r.fillRect(0, 0, e, t),
            !(4 * this.fontSize > t) && !(e < 50))
          ) {
            r.save();
            var n = this.scrollbar_.position_;
            0 == this.scrollbar_.range_ && (n = this.getLength_() - e);
            var a = this.startTime_ + n * this.scale_,
              o = t;
            ((t -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
              this.drawTimeLabels(r, e, t, o, a),
              (r.strokeStyle = this.gridColor),
              (r.lineWidth = this.devicePixelRatio),
              r.strokeRect(1, 1, e - 1, t - 1),
              this.graph_ &&
                (this.graph_.layout(e, t, this.fontSize * this.devicePixelRatio, a, this.scale_),
                this.graph_.drawTicks(r),
                this.graph_.drawLines(r),
                this.graph_.drawLabels(r)),
              r.restore());
          }
        }
      },
      drawTimeLabels: function (e, t, r, n, a) {
        var o = 6e4 * Math.ceil(a / 6e4);
        for (
          e.textBaseline = "bottom",
            e.textAlign = "center",
            e.fillStyle = this.textColor,
            e.strokeStyle = this.gridColor,
            e.lineWidth = this.devicePixelRatio,
            e.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
          ;
        ) {
          var i = Math.round((o - a) / this.scale_);
          if (i >= t) break;
          var s = new Date(o).toLocaleTimeString(this.timeLocales, this.timeOptions);
          (e.fillText(s, i, n),
            e.beginPath(),
            e.lineTo(i, 1),
            e.lineTo(i, r),
            e.stroke(),
            (o += 6e4));
        }
      },
      getDataSeriesCount: function () {
        return this.graph_ ? this.graph_.dataSeries_.length : 0;
      },
      hasDataSeries: function (e) {
        return !!this.graph_ && this.graph_.hasDataSeries(e);
      },
    };
    var t = (function () {
      function e(e) {
        ((this.devicePixelRatio = e || 1),
          (this.dataSeries_ = []),
          (this.width_ = 0),
          (this.height_ = 0),
          (this.fontHeight_ = 0),
          (this.startTime_ = 0),
          (this.scale_ = 0),
          (this.min_ = 0),
          (this.max_ = 0),
          (this.labels_ = []));
      }
      return (
        (e.prototype = {
          addDataSeries: function (e) {
            this.dataSeries_.push(e);
          },
          hasDataSeries: function (e) {
            for (var t = 0; t < this.dataSeries_.length; ++t)
              if (this.dataSeries_[t] == e) return !0;
            return !1;
          },
          getValues: function (e) {
            return e.isVisible() ? e.getValues(this.startTime_, this.scale_, this.width_) : null;
          },
          layout: function (e, t, r, n, a) {
            ((this.width_ = e),
              (this.height_ = t),
              (this.fontHeight_ = r),
              (this.startTime_ = n),
              (this.scale_ = a));
            for (var o = 0, i = 0, s = 0; s < this.dataSeries_.length; ++s) {
              var l = this.getValues(this.dataSeries_[s]);
              if (l)
                for (var c = 0; c < l.length; ++c) l[c] > o ? (o = l[c]) : l[c] < i && (i = l[c]);
            }
            this.layoutLabels_(i, o);
          },
          layoutLabels_: function (e, t) {
            if (t - e < 1024) return void this.layoutLabelsBasic_(e, t, 2);
            var r = ["", "k", "M", "G", "T", "P"],
              n = 1;
            for (e /= 1024, t /= 1024; r[n + 1] && t - e >= 1024;) ((e /= 1024), (t /= 1024), ++n);
            this.layoutLabelsBasic_(e, t, 2);
            for (var a = 0; a < this.labels_.length; ++a) this.labels_[a] += " " + r[n];
            ((this.min_ *= Math.pow(1024, n)), (this.max_ *= Math.pow(1024, n)));
          },
          layoutLabelsBasic_: function (e, t, r) {
            this.labels_ = [];
            var n = t - e;
            if (0 == n) {
              this.min_ = this.max_ = t;
              return;
            }
            var a = 2 * this.fontHeight_ + 4,
              o = 1 + this.height_ / a;
            o < 2 ? (o = 2) : o > 6 && (o = 6);
            for (var i = Math.pow(10, -r), s = r; !(Math.ceil(n / i) + 1 <= o);) {
              if (Math.ceil(n / (2 * i)) + 1 <= o) {
                i *= 2;
                break;
              }
              if (Math.ceil(n / (5 * i)) + 1 <= o) {
                i *= 5;
                break;
              }
              ((i *= 10), s > 0 && --s);
            }
            ((this.max_ = Math.ceil(t / i) * i), (this.min_ = Math.floor(e / i) * i));
            for (var l = this.max_; l >= this.min_; l -= i) this.labels_.push(l.toFixed(s));
          },
          drawTicks: function (e) {
            ((t = this.width_ - 1),
              (r = this.width_ - 1 - 10),
              (e.fillStyle = this.gridColor),
              (e.lineWidth = this.devicePixelRatio),
              e.beginPath());
            for (var t, r, n = 1; n < this.labels_.length - 1; ++n) {
              var a = Math.round((this.height_ * n) / (this.labels_.length - 1));
              (e.moveTo(t, a), e.lineTo(r, a));
            }
            e.stroke();
          },
          drawLines: function (e) {
            var t = 0,
              r = this.height_ - 1;
            this.max_ && (t = r / (this.max_ - this.min_));
            for (var n = this.dataSeries_.length - 1; n >= 0; --n) {
              var a = this.getValues(this.dataSeries_[n]);
              if (a) {
                ((e.strokeStyle = this.dataSeries_[n].getColor()),
                  (e.lineWidth = this.devicePixelRatio),
                  e.beginPath());
                for (var o = 0; o < a.length; ++o)
                  e.lineTo(o, r - Math.round((a[o] - this.min_) * t));
                e.stroke();
              }
            }
          },
          drawLabels: function (e) {
            if (0 != this.labels_.length) {
              var t = this.width_ - 3;
              ((e.fillStyle = this.textColor),
                (e.textAlign = "right"),
                (e.textBaseline = "top"),
                e.fillText(this.labels_[0], t, 0),
                (e.textBaseline = "bottom"));
              for (
                var r = (this.height_ - 1) / (this.labels_.length - 1), n = 1;
                n < this.labels_.length;
                ++n
              )
                e.fillText(this.labels_[n], t, r * n);
            }
          },
        }),
        e
      );
    })();
    return e;
  })();
}
