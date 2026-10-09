/* Recovered shipped factory. Module 108110.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 25052..142876
 * Raw property SHA-256: f17aaa4c975e7d23a245b517873da0647fe2de2d859485353367e832a904e5cf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = (function () {
    var e = {
        506: (e) => {
          ((e.exports = function (e) {
            if (void 0 === e)
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        575: (e) => {
          ((e.exports = function (e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        913: (e) => {
          function t(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              ((i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i));
            }
          }
          ((e.exports = function (e, r, i) {
            return (
              r && t(e.prototype, r),
              i && t(e, i),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        525: (e, t, r) => {
          var i = r(331);
          function n() {
            return (
              "u" > typeof Reflect && Reflect.get
                ? (e.exports = n = Reflect.get)
                : (e.exports = n =
                    function (e, t, r) {
                      var n = i(e, t);
                      if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
                      }
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              n.apply(this, arguments)
            );
          }
          ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
        },
        754: (e) => {
          function t(r) {
            return (
              (e.exports = t =
                Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(r)
            );
          }
          ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
        },
        205: (e, t, r) => {
          var i = r(489);
          ((e.exports = function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Super expression must either be null or a function");
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && i(e, t));
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        318: (e) => {
          ((e.exports = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        585: (e, t, r) => {
          var i = r(8).default,
            n = r(506);
          ((e.exports = function (e, t) {
            if (t && ("object" === i(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw TypeError("Derived constructors may only return object or undefined");
            return n(e);
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        489: (e) => {
          function t(r, i) {
            return (
              (e.exports = t =
                Object.setPrototypeOf ||
                function (e, t) {
                  return ((e.__proto__ = t), e);
                }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(r, i)
            );
          }
          ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
        },
        331: (e, t, r) => {
          var i = r(754);
          ((e.exports = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)););
            return e;
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports));
        },
        8: (e) => {
          function t(r) {
            return (
              (e.exports = t =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(r)
            );
          }
          ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
        },
        848: (e) => {
          (window,
            (e.exports = (function (e) {
              var t = {};
              function r(i) {
                if (t[i]) return t[i].exports;
                var n = (t[i] = { i: i, l: !1, exports: {} });
                return (e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports);
              }
              return (
                (r.m = e),
                (r.c = t),
                (r.d = function (e, t, i) {
                  r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
                }),
                (r.r = function (e) {
                  ("u" > typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(e, "__esModule", { value: !0 }));
                }),
                (r.t = function (e, t) {
                  if (
                    (1 & t && (e = r(e)),
                    8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
                  )
                    return e;
                  var i = Object.create(null);
                  if (
                    (r.r(i),
                    Object.defineProperty(i, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
                  )
                    for (var n in e)
                      r.d(
                        i,
                        n,
                        function (t) {
                          return e[t];
                        }.bind(null, n),
                      );
                  return i;
                }),
                (r.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return (r.d(t, "a", t), t);
                }),
                (r.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (r.p = ""),
                r((r.s = 1))
              );
            })([
              function (e, t) {
                function r(e, t) {
                  if (e < 1 || e !== Math.round(e)) throw "Invalid channel count for BufferQueue";
                  ((this.channels = e), (this.bufferSize = t), this.flush());
                }
                ((r.prototype.flush = function () {
                  ((this._buffers = []),
                    (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                    (this._pendingPos = 0));
                }),
                  (r.prototype.sampleCount = function () {
                    var e = 0;
                    return (
                      this._buffers.forEach(function (t) {
                        e += t[0].length;
                      }),
                      e
                    );
                  }),
                  (r.prototype.createBuffer = function (e) {
                    for (var t = [], r = 0; r < this.channels; r++) t[r] = new Float32Array(e);
                    return t;
                  }),
                  (r.prototype.validate = function (e) {
                    if (e.length !== this.channels) return !1;
                    for (var t, r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (!(i instanceof Float32Array)) return !1;
                      if (0 == r) t = i.length;
                      else if (i.length !== t) return !1;
                    }
                    return !0;
                  }),
                  (r.prototype.appendBuffer = function (e) {
                    if (!this.validate(e))
                      throw "Invalid audio buffer passed to BufferQueue.appendBuffer";
                    for (
                      var t = e[0].length,
                        r = this.channels,
                        i = this._pendingPos,
                        n = this._pendingBuffer,
                        o = this.bufferSize,
                        s = 0;
                      s < t;
                      s++
                    ) {
                      for (var a = 0; a < r; a++) n[a][i] = e[a][s];
                      ++i == o &&
                        (this._buffers.push(n),
                        (i = this._pendingPos = 0),
                        (n = this._pendingBuffer = this.createBuffer(o)));
                    }
                    this._pendingPos = i;
                  }),
                  (r.prototype.prependBuffer = function (e) {
                    if (!this.validate(e))
                      throw "Invalid audio buffer passed to BufferQueue.prependBuffer";
                    var t = this._buffers.slice(0);
                    (t.push(this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)),
                      this.flush(),
                      this.appendBuffer(e));
                    for (var r = 0; r < t.length; r++) this.appendBuffer(t[r]);
                  }),
                  (r.prototype.nextBuffer = function () {
                    if (this._buffers.length) return this._buffers.shift();
                    var e = this.trimBuffer(this._pendingBuffer, 0, this._pendingPos);
                    return (
                      (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                      (this._pendingPos = 0),
                      e
                    );
                  }),
                  (r.prototype.trimBuffer = function (e, t, r) {
                    var i = e[0].length,
                      n = t + Math.min(r, i);
                    if (0 == t && n >= i) return e;
                    for (var o = [], s = 0; s < this.channels; s++) o[s] = e[s].subarray(t, n);
                    return o;
                  }),
                  (e.exports = r));
              },
              function (e, t, r) {
                r(0);
                var i = r(2),
                  n = r(4);
                function o(e) {
                  ((this._options = e || {}),
                    (this._backend = null),
                    (this._resampleFractional = 0),
                    (this._resampleLastSampleData = void 0),
                    (this._tempoChanger = null));
                }
                ((o.prototype.rate = 0),
                  (o.prototype.targetRate = 0),
                  (o.prototype.channels = 0),
                  (o.prototype.bufferSize = 0),
                  Object.defineProperty(o.prototype, "bufferDuration", {
                    get: function () {
                      return this.targetRate ? this.bufferSize / this.targetRate : 0;
                    },
                  }),
                  Object.defineProperty(o.prototype, "bufferThreshold", {
                    get: function () {
                      return this._backend ? this._backend.bufferThreshold / this.targetRate : 0;
                    },
                    set: function (e) {
                      if (!this._backend)
                        throw "Invalid state: AudioFeeder cannot set bufferThreshold before init";
                      this._backend.bufferThreshold = Math.round(e * this.targetRate);
                    },
                  }),
                  Object.defineProperty(o.prototype, "playbackPosition", {
                    get: function () {
                      return this._backend ? this.getPlaybackState().playbackPosition : 0;
                    },
                  }),
                  Object.defineProperty(o.prototype, "outputPlaybackPosition", {
                    get: function () {
                      return this._backend ? this.getPlaybackState().outputPlaybackPosition : 0;
                    },
                  }),
                  Object.defineProperty(o.prototype, "durationBuffered", {
                    get: function () {
                      return this._backend
                        ? this.getPlaybackState().samplesQueued / this.targetRate
                        : 0;
                    },
                  }),
                  Object.defineProperty(o.prototype, "muted", {
                    get: function () {
                      if (this._backend) return this._backend.muted;
                      throw "Invalid state: cannot get mute before init";
                    },
                    set: function (e) {
                      if (!this._backend) throw "Invalid state: cannot set mute before init";
                      this._backend.muted = e;
                    },
                  }),
                  (o.prototype.mute = function () {
                    this.muted = !0;
                  }),
                  (o.prototype.unmute = function () {
                    this.muted = !1;
                  }),
                  Object.defineProperty(o.prototype, "volume", {
                    get: function () {
                      if (this._backend) return this._backend.volume;
                      throw "Invalid state: cannot get volume before init";
                    },
                    set: function (e) {
                      if (!this._backend) throw "Invalid state: cannot set volume before init";
                      this._backend.volume = e;
                    },
                  }),
                  Object.defineProperty(o.prototype, "tempo", {
                    get: function () {
                      if (this._tempoChanger) return this._tempoChanger.getTempo();
                      throw "Invalid state: cannot get tempo before init";
                    },
                    set: function (e) {
                      if (!this._tempoChanger) throw "Invalid state: cannot set tempo before init";
                      this._tempoChanger.setTempo(e);
                    },
                  }),
                  (o.prototype.init = function (e, t) {
                    if (((this.channels = e), (this.rate = t), this._options.backendFactory))
                      this._backend = this._options.backendFactory(e, t, this._options);
                    else {
                      if (!i.isSupported()) throw "No supported backend";
                      this._backend = new i(e, t, this._options);
                    }
                    ((this.targetRate = this._backend.rate),
                      (this.bufferSize = this._backend.bufferSize),
                      (this._tempoChanger = n({
                        sampleRate: this.targetRate,
                        numChannels: e,
                        tempo: 1,
                      })),
                      (this._backend.onstarved = function () {
                        this.onstarved && this.onstarved();
                      }.bind(this)),
                      (this._backend.onbufferlow = function () {
                        this.onbufferlow && this.onbufferlow();
                      }.bind(this)));
                  }),
                  (o.prototype._resample = function (e) {
                    var t = this.rate,
                      r = this.channels,
                      i = this._backend.rate,
                      n = this._backend.channels;
                    if (t == i && r == n) return e;
                    var o,
                      s = [],
                      a = e[0].length,
                      u = this._resampleFractional,
                      c = (a * i) / t + u,
                      d = Math.floor(c),
                      l = c - d;
                    o =
                      t < i
                        ? function (e, r, n, o) {
                            for (
                              var s = function (t) {
                                  return t < 0
                                    ? n && n.length + t > 0
                                      ? n[n.length + t]
                                      : e[0]
                                    : e[t];
                                },
                                a = 0;
                              a < r.length;
                              a++
                            ) {
                              var c,
                                d = ((a + 1 - u) * t) / i - 1,
                                l = Math.floor(d),
                                h = Math.ceil(d);
                              ((c = l == h ? s(l) : s(l) * (h - d) + s(h) * (d - l)),
                                (r[a] = o * c));
                            }
                          }
                        : function (e, t, r, i) {
                            for (var n = 0; n < t.length; n++)
                              t[n] = i * e[((n * e.length) / t.length) | 0];
                          };
                    var h = 1;
                    n > r && (h = Math.SQRT1_2);
                    for (var f = 0; f < n; f++) {
                      var p = f;
                      f >= r && (p = 0);
                      var m = e[p],
                        g = new Float32Array(d);
                      (o(
                        m,
                        g,
                        this._resampleLastSampleData ? this._resampleLastSampleData[p] : void 0,
                        h,
                      ),
                        s.push(g));
                    }
                    return ((this._resampleFractional = l), (this._resampleLastSampleData = e), s);
                  }),
                  (o.prototype.bufferData = function (e) {
                    if (!this._backend)
                      throw "Invalid state: AudioFeeder cannot bufferData before init";
                    var t = this._resample(e);
                    ((t = this._tempoChanger.process(t)), this._backend.appendBuffer(t));
                  }),
                  (o.prototype.getPlaybackState = function () {
                    if (this._backend) {
                      var e = this._backend.getPlaybackState();
                      return (
                        (e.outputPlaybackPosition = e.playbackPosition),
                        (e.playbackPosition = this._tempoChanger.mapOutputToInputTime(
                          e.outputPlaybackPosition,
                        )),
                        e
                      );
                    }
                    throw "Invalid state: AudioFeeder cannot getPlaybackState before init";
                  }),
                  (o.prototype.waitUntilReady = function (e) {
                    if (!this._backend)
                      throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                    this._backend.waitUntilReady(e);
                  }),
                  (o.prototype.start = function () {
                    if (!this._backend) throw "Invalid state: AudioFeeder cannot start before init";
                    this._backend.start();
                  }),
                  (o.prototype.stop = function () {
                    if (!this._backend) throw "Invalid state: AudioFeeder cannot stop before init";
                    this._backend.stop();
                  }),
                  (o.prototype.flush = function () {
                    if (
                      ((this._resampleFractional = 0),
                      (this._resampleLastSampleData = void 0),
                      !this._backend)
                    )
                      throw "Invalid state: AudioFeeder cannot flush before init";
                    (this._tempoChanger.flush(this.durationBuffered), this._backend.flush());
                  }),
                  (o.prototype.close = function () {
                    this._backend && (this._backend.close(), (this._backend = null));
                  }),
                  (o.prototype.onstarved = null),
                  (o.prototype.onbufferlow = null),
                  (o.isSupported = function () {
                    return !!Float32Array && i.isSupported();
                  }),
                  (o.initSharedAudioContext = function () {
                    return i.isSupported() ? i.initSharedAudioContext() : null;
                  }),
                  (e.exports = o));
              },
              function (e, t, r) {
                var i = window.AudioContext || window.webkitAudioContext,
                  n = r(0),
                  o = r(3);
                function s(e, t, r) {
                  var i = r.audioContext || s.initSharedAudioContext();
                  if (
                    ((this._context = i),
                    (this.output = r.output || i.destination),
                    (this.rate = i.sampleRate),
                    (this.channels = 2),
                    r.bufferSize && (this.bufferSize = 0 | r.bufferSize),
                    (this.bufferThreshold = 2 * this.bufferSize),
                    (this._bufferQueue = new n(this.channels, this.bufferSize)),
                    (this._playbackTimeAtBufferTail = i.currentTime),
                    (this._queuedTime = 0),
                    (this._delayedTime = 0),
                    (this._dropped = 0),
                    (this._liveBuffer = this._bufferQueue.createBuffer(this.bufferSize)),
                    i.createScriptProcessor)
                  )
                    this._node = i.createScriptProcessor(this.bufferSize, 0, this.channels);
                  else {
                    if (!i.createJavaScriptNode) throw Error("Bad version of web audio API?");
                    this._node = i.createJavaScriptNode(this.bufferSize, 0, this.channels);
                  }
                }
                ((s.prototype.bufferSize = 4096),
                  (s.prototype.bufferThreshold = 8192),
                  (s.prototype._volume = 1),
                  Object.defineProperty(s.prototype, "volume", {
                    get: function () {
                      return this._volume;
                    },
                    set: function (e) {
                      this._volume = +e;
                    },
                  }),
                  (s.prototype._muted = !1),
                  Object.defineProperty(s.prototype, "muted", {
                    get: function () {
                      return this._muted;
                    },
                    set: function (e) {
                      this._muted = !!e;
                    },
                  }),
                  (s.prototype._audioProcess = function (e) {
                    var t,
                      r,
                      i,
                      n,
                      s =
                        "number" == typeof e.playbackTime
                          ? e.playbackTime
                          : this._context.currentTime + this.bufferSize / this.rate,
                      a = this._playbackTimeAtBufferTail;
                    if (
                      (a < s && (this._delayedTime += s - a),
                      this._bufferQueue.sampleCount() < this.bufferSize &&
                        this.onstarved &&
                        this.onstarved(),
                      this._bufferQueue.sampleCount() < this.bufferSize)
                    ) {
                      for (t = 0; t < this.channels; t++)
                        for (i = e.outputBuffer.getChannelData(t), n = 0; n < this.bufferSize; n++)
                          i[n] = 0;
                      this._dropped++;
                    } else {
                      var u = this.muted ? 0 : this.volume,
                        c = this._bufferQueue.nextBuffer();
                      if (c[0].length < this.bufferSize) throw "Audio buffer not expected length.";
                      for (t = 0; t < this.channels; t++)
                        for (
                          r = c[t],
                            this._liveBuffer[t].set(c[t]),
                            i = e.outputBuffer.getChannelData(t),
                            n = 0;
                          n < r.length;
                          n++
                        )
                          i[n] = r[n] * u;
                      ((this._queuedTime += this.bufferSize / this.rate),
                        (this._playbackTimeAtBufferTail = s + this.bufferSize / this.rate),
                        this._bufferQueue.sampleCount() <
                          Math.max(this.bufferSize, this.bufferThreshold) &&
                          this.onbufferlow &&
                          o(this.onbufferlow.bind(this)));
                    }
                  }),
                  (s.prototype._samplesQueued = function () {
                    return (
                      this._bufferQueue.sampleCount() +
                      Math.floor(this._timeAwaitingPlayback() * this.rate)
                    );
                  }),
                  (s.prototype._timeAwaitingPlayback = function () {
                    return Math.max(0, this._playbackTimeAtBufferTail - this._context.currentTime);
                  }),
                  (s.prototype.getPlaybackState = function () {
                    return {
                      playbackPosition: this._queuedTime - this._timeAwaitingPlayback(),
                      samplesQueued: this._samplesQueued(),
                      dropped: this._dropped,
                      delayed: this._delayedTime,
                    };
                  }),
                  (s.prototype.waitUntilReady = function (e) {
                    e();
                  }),
                  (s.prototype.appendBuffer = function (e) {
                    this._bufferQueue.appendBuffer(e);
                  }),
                  (s.prototype.start = function () {
                    ((this._node.onaudioprocess = this._audioProcess.bind(this)),
                      this._node.connect(this.output),
                      (this._playbackTimeAtBufferTail = this._context.currentTime));
                  }),
                  (s.prototype.stop = function () {
                    if (this._node) {
                      var e = this._timeAwaitingPlayback();
                      if (e > 0) {
                        var t = Math.round(e * this.rate),
                          r = this._liveBuffer ? this._liveBuffer[0].length : 0;
                        (t > r
                          ? (this._bufferQueue.prependBuffer(this._liveBuffer),
                            this._bufferQueue.prependBuffer(this._bufferQueue.createBuffer(t - r)))
                          : this._bufferQueue.prependBuffer(
                              this._bufferQueue.trimBuffer(this._liveBuffer, r - t, t),
                            ),
                          (this._playbackTimeAtBufferTail -= e));
                      }
                      ((this._node.onaudioprocess = null), this._node.disconnect());
                    }
                  }),
                  (s.prototype.flush = function () {
                    this._bufferQueue.flush();
                  }),
                  (s.prototype.close = function () {
                    (this.stop(), (this._context = null));
                  }),
                  (s.prototype.onstarved = null),
                  (s.prototype.onbufferlow = null),
                  (s.isSupported = function () {
                    return !!i;
                  }),
                  (s.sharedAudioContext = null),
                  (s.initSharedAudioContext = function () {
                    if (!s.sharedAudioContext && s.isSupported()) {
                      var e,
                        t = new i();
                      if (t.createScriptProcessor) e = t.createScriptProcessor(1024, 0, 2);
                      else {
                        if (!t.createJavaScriptNode) throw Error("Bad version of web audio API?");
                        e = t.createJavaScriptNode(1024, 0, 2);
                      }
                      (e.connect(t.destination), e.disconnect(), (s.sharedAudioContext = t));
                    }
                    return s.sharedAudioContext;
                  }),
                  (e.exports = s));
              },
              function (e, t) {
                e.exports = (function () {
                  if (void 0 !== window.setImmediate) return window.setImmediate;
                  if (window && window.postMessage) {
                    var e = [];
                    return (
                      window.addEventListener("message", function (t) {
                        if (t.source === window) {
                          var r = t.data;
                          if ("object" == typeof r && r.nextTickBrowserPingMessage) {
                            var i = e.pop();
                            i && i();
                          }
                        }
                      }),
                      function (t) {
                        (e.push(t),
                          window.postMessage(
                            { nextTickBrowserPingMessage: !0 },
                            document.location.toString(),
                          ));
                      }
                    );
                  }
                  return function (e) {
                    setTimeout(e, 0);
                  };
                })();
              },
              function (e, t, r) {
                (window,
                  (e.exports = (function () {
                    var e = [
                        function (e, t) {
                          e.exports = {
                            float_array: function (e) {
                              return new Float32Array(e);
                            },
                            blit: function (e, t, r, i, n) {
                              r.set(e.subarray(t, t + n), i);
                            },
                          };
                        },
                        function (e, t, r) {
                          var i, n;
                          ((i = r(0)),
                            (n = r(2)),
                            (e.exports = function (e) {
                              var t = (e = e || {}).sampleRate || 44100,
                                r = e.wsizeLog || 11,
                                o = e.tempo || 1,
                                s = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                a = 1 << r,
                                u = n(r),
                                c = 1 << (r - 2);
                              c -= c % 100;
                              for (
                                var d = i.float_array(a + c + 5),
                                  l = i.float_array(a + c + 5),
                                  h = c,
                                  f = c,
                                  p = i.float_array(a),
                                  m = 0;
                                m < a;
                                m++
                              )
                                p[m] = 0.5 * (1 - Math.cos((2 * Math.PI * m) / a));
                              var g = 1 + (a >> 1),
                                _ = i.float_array(g),
                                b = i.float_array(g),
                                v = i.float_array(g),
                                y = i.float_array(g),
                                w = i.float_array(g),
                                V = i.float_array(g),
                                x = 1 + (g >> 1),
                                T = [0, 0],
                                k = [],
                                E = [],
                                A = [],
                                R = [];
                              for (m = 0; m < 2; m++)
                                (k.push(i.float_array(x)),
                                  E.push(i.float_array(x)),
                                  A.push(i.float_array(x)),
                                  R.push(i.float_array(g)));
                              var P = i.float_array(x),
                                O = i.float_array(x),
                                I = 0,
                                S = 0,
                                L = [{ in_time: 0, out_time: 0, tempo: o }],
                                U = 0,
                                C = 0,
                                D = 1,
                                F = 0,
                                M = 0,
                                j = 0,
                                B = 0,
                                N = {
                                  mapOutputToInputTime: function (e) {
                                    for (var t = L.length - 1; e < L[t].out_time && t > 0;) t--;
                                    var r = L[t];
                                    return r.in_time + r.tempo * (e - r.out_time);
                                  },
                                  flush: function (e) {
                                    ((F = 0), (T = [0, 0]), (C = 0), (B = 0), (j = 0));
                                    for (var t = 0; t < 2; t++)
                                      for (var r = 0; r < g; r++) R[t][r] = 0;
                                    for (t = 0; t < d.length; t++) d[t] = 0;
                                    for (t = 0; t < l.length; t++) l[t] = 0;
                                    if (e) {
                                      ((S = Math.max(0, S - e)), (I = N.mapOutputToInputTime(S)));
                                      for (var i = L.length - 1; S <= L[i].out_time && i >= 0;)
                                        (L.pop(), i--);
                                      L.push({ in_time: I, out_time: S, tempo: o });
                                    }
                                  },
                                  getTempo: function () {
                                    return o;
                                  },
                                  setTempo: function (e) {
                                    ((h = f = c),
                                      e >= 1 ? (f = Math.round(h / e)) : (h = Math.round(f * e)),
                                      (M = (1 / e - f / h) * h),
                                      (D = (function (e, t) {
                                        for (var r = (e.length / t) | 0, i = 0, n = 0; n < r; n++)
                                          i += e[n * t];
                                        return 0.9 / i;
                                      })(p, f)),
                                      (o = e));
                                    var t = L[L.length - 1];
                                    t.out_time == S
                                      ? (t.tempo = e)
                                      : L.push({ in_time: I, out_time: S, tempo: e });
                                  },
                                };
                              (N.flush(0), N.setTempo(o));
                              var W = function (e, t, r) {
                                  var i = Math.floor(r),
                                    n = i % 2 == 1 ? -1 : 1;
                                  return Math.atan2(n * (t[i] - t[i + 1]), n * (e[i] - e[i + 1]));
                                },
                                H = function (e, t, r, i, n) {
                                  var o,
                                    s = ((2 * Math.PI) / a) * 0.5 * (i + t) * h;
                                  return (
                                    ((o = e - r - s) -
                                      2 * Math.PI * Math.round(o / (2 * Math.PI)) +
                                      s) *
                                    n
                                  );
                                },
                                G = function (e, t, r, i, n, o) {
                                  for (
                                    var u = e % 2,
                                      c = 1 - u,
                                      d = R[c],
                                      l = T[c],
                                      h = k[c],
                                      f = E[c],
                                      p = A[c],
                                      m = R[u],
                                      g = 1;
                                    g < m.length;
                                    g++
                                  )
                                    m[g] = t[g] * t[g] + r[g] * r[g];
                                  var _ = k[u],
                                    b = (T[u] = (function (e, t) {
                                      for (var r = 0, i = 0; i < e.length; i++)
                                        e[i] > r && (r = e[i]);
                                      var n = 1e-8 * r,
                                        o = 1,
                                        a = 1;
                                      for (t[0] = 1, i = 2; i < e.length; i++) {
                                        var u = i * s;
                                        if (e[i] > n && e[i] > e[i - 1] && e[i] >= e[i + 1]) {
                                          var c =
                                            i +
                                            (e[i - 1] - e[i + 1]) /
                                              (2 * (e[i - 1] - 2 * e[i] + e[i + 1]));
                                          c - t[o - 1] > u
                                            ? ((t[o++] = c), (a = i))
                                            : e[i] > e[a] && ((t[o - 1] = c), (a = i));
                                        }
                                      }
                                      return o;
                                    })(m, _)),
                                    v = E[u],
                                    y = A[u];
                                  if (0 != e && 0 != b) {
                                    var w = 0;
                                    for (j = 0; j < b; j++) {
                                      for (B = _[j]; _[j] > h[w] && w != l;) ++w;
                                      var V = w;
                                      w > 0 && B - h[w - 1] < h[w] - B && (V = w - 1);
                                      var x = B * s;
                                      if (
                                        Math.abs(h[V] - B) < x &&
                                        d[Math.round(h[V])] > 0.1 * m[Math.round(B)]
                                      ) {
                                        var I = W(t, r, B),
                                          S = f[V] + p[V] + H(I, B, f[V], h[V], o) - I;
                                        ((v[j] = I),
                                          (y[j] = S),
                                          (P[j] = Math.cos(S)),
                                          (O[j] = Math.sin(S)));
                                      } else
                                        ((v[j] = W(t, r, B)), (y[j] = 0), (P[j] = 1), (O[j] = 0));
                                    }
                                    _[b] = 2 * a;
                                    var L = _[(V = 0)],
                                      U = _[V + 1],
                                      C = P[V],
                                      D = O[V];
                                    for (g = 1; g < t.length - 1; g++) {
                                      g >= L &&
                                        g - L > U - g &&
                                        ((L = _[++V]), (U = _[V + 1]), (C = P[V]), (D = O[V]));
                                      var F = t[g] * C - r[g] * D,
                                        M = t[g] * D + r[g] * C;
                                      ((t[g] = F), (r[g] = M));
                                    }
                                  } else
                                    for (var j = 0; j < b; j++) {
                                      var B = _[j];
                                      f[j] = p[j] = W(t, r, B);
                                    }
                                },
                                X = function () {
                                  var e = 0 | (F += 2 * M);
                                  F -= e;
                                  for (var t = 0; t < a; t++)
                                    ((u.m_re[t] = p[t] * d[t]), (u.m_im[t] = p[t] * d[h + t]));
                                  (i.blit(d, 2 * h, d, 0, a - h),
                                    u.inplace(!1),
                                    u.unpack(_, b, v, y),
                                    G(U, _, b, 0, 0, f / h),
                                    G(U + 1, v, y, 0, 0, (f + e) / h),
                                    i.blit(v, 0, w, 0, g),
                                    i.blit(y, 0, V, 0, g),
                                    u.repack(_, b, v, y),
                                    u.inplace(!0));
                                  var r = l.length;
                                  for (i.blit(l, C, l, 0, r - C), t = r - C; t < r; t++) l[t] = 0;
                                  var n = 0,
                                    o = D;
                                  for (t = 0; t < f; t++)
                                    Math.abs(2 * u.m_re[t]) > n && (n = Math.abs(2 * u.m_re[t]));
                                  for (t = 0; t < a - f; t++)
                                    Math.abs(u.m_re[t + f + e] + u.m_im[t]) > n &&
                                      (n = Math.abs(u.m_re[t + f + e] + u.m_im[t]));
                                  for (t = a - f; t < a; t++)
                                    Math.abs(2 * u.m_im[t]) > n && (n = Math.abs(2 * u.m_im[t]));
                                  var s = 1 / Math.floor(a / (2 * f));
                                  for (o * n > s && (o = s / n), t = 0; t < a; t++)
                                    ((l[t] += o * u.m_re[t]), (l[t + f + e] += o * u.m_im[t]));
                                  return ((U += 2), (C = 2 * f + e));
                                };
                              return (
                                (N.process = function (e) {
                                  var r = e[0].length,
                                    n = e[0];
                                  if (e.length > 1) {
                                    n = i.float_array(e[0].length);
                                    for (var s = 1 / e.length, u = 0; u < e.length; u++)
                                      for (var c = 0; c < r; c++) n[c] += s * e[u][c];
                                  }
                                  if (1 == o) {
                                    if (B + j > 0) {
                                      var p = B + j + r,
                                        m = [];
                                      for (u = 0; u < e.length; u++) {
                                        var g = i.float_array(p);
                                        (i.blit(l, 0, g, 0, B),
                                          i.blit(d, 0, g, B, j),
                                          i.blit(e[u], 0, g, B + j, r),
                                          m.push(g));
                                      }
                                      (N.flush(0), (r = p), (e = m));
                                    }
                                    return ((I += r / t), (S += r / t), e);
                                  }
                                  var _ = 2 * Math.floor(Math.max(0, j + r - (a - h)) / (2 * h)),
                                    b = B + f * _ + Math.floor(F + M * _);
                                  B > b && (b = B);
                                  var v = i.float_array(b);
                                  i.blit(l, 0, v, 0, B);
                                  for (var y = 0, w = B, V = 0, x = 0; ;) {
                                    var T = a + h - j;
                                    if (y + T > r) {
                                      (i.blit(n, y, d, j, r - y), (j += r - y), (y = r));
                                      break;
                                    }
                                    (T <= 0
                                      ? (j -= 2 * h)
                                      : (i.blit(n, y, d, j, T), (y += T), (j = a - h)),
                                      (x = X()),
                                      (I += (2 * h) / t),
                                      (S += x / t),
                                      (V = w + x - b) < 0 && (V = 0),
                                      i.blit(l, 0, v, w, x - V),
                                      (w += x));
                                  }
                                  (i.blit(l, x - V, l, 0, V), (B = V));
                                  var k = [];
                                  for (u = 0; u < e.length; u++) k.push(v);
                                  return k;
                                }),
                                N
                              );
                            }));
                        },
                        function (e, t, r) {
                          "use strict";
                          var i = r(0);
                          e.exports = function (e) {
                            for (
                              var t = 1 << e,
                                r = {
                                  m_logN: e,
                                  m_N: t,
                                  m_invN: 1 / t,
                                  m_re: i.float_array(t),
                                  m_im: i.float_array(t),
                                  m_revTgt: Array(t),
                                },
                                n = 0;
                              n < t;
                              n++
                            ) {
                              for (var o = n, s = 0, a = 0; a < e; a++)
                                ((s <<= 1), (s |= 1 & o), (o >>= 1));
                              r.m_revTgt[n] = s;
                            }
                            ((r.twiddleRe = i.float_array(r.m_logN)),
                              (r.twiddleIm = i.float_array(r.m_logN)));
                            for (var u = 1, c = 0; c < r.m_logN; c++) {
                              var d = 2 * u * Math.PI * r.m_invN;
                              ((r.twiddleRe[c] = Math.cos(d)),
                                (r.twiddleIm[c] = Math.sin(d)),
                                (u <<= 1));
                            }
                            r.inplace = function (e) {
                              var t = r.m_re,
                                i = r.m_im,
                                n = r.m_N,
                                o = r.m_logN,
                                s = n >> 1,
                                a = n >> 1,
                                u = n;
                              if (e)
                                for (var c = 1 / n, d = 0; d < n; d++) ((t[d] *= c), (i[d] *= c));
                              for (var l = 0; l < o; l++) {
                                var h = r.twiddleRe[l],
                                  f = r.twiddleIm[l];
                                e || (f *= -1);
                                for (var p = 0; p < n;) {
                                  for (var m = p, g = p + a, _ = 1, b = 0, v = 0; v < s; v++) {
                                    var y = t[m],
                                      w = i[m],
                                      V = t[g],
                                      x = i[g];
                                    ((t[m] = y + V),
                                      (i[m] = w + x),
                                      (V = y - V),
                                      (x = w - x),
                                      (t[g] = V * _ - x * b),
                                      (i[g] = V * b + x * _),
                                      m++,
                                      g++);
                                    var T = _;
                                    ((_ = _ * h - b * f), (b = T * f + b * h));
                                  }
                                  p += u;
                                }
                                ((s >>= 1), (a >>= 1), (u >>= 1));
                              }
                              for (var k, E, A = r.m_revTgt, R = 0; R < n; R++)
                                A[R] > R &&
                                  ((E = t[(k = A[R])]),
                                  (t[k] = t[R]),
                                  (t[R] = E),
                                  (E = i[k]),
                                  (i[k] = i[R]),
                                  (i[R] = E));
                            };
                            var l = t >> 1;
                            return (
                              (r.unpack = function (e, i, n, o) {
                                ((e[0] = r.m_re[0]),
                                  (n[0] = r.m_im[0]),
                                  (i[0] = o[0] = 0),
                                  (e[l] = r.m_re[l]),
                                  (n[l] = r.m_im[l]),
                                  (i[l] = o[l] = 0));
                                for (var s = 1; s < l; s++)
                                  ((e[s] = (r.m_re[s] + r.m_re[t - s]) / 2),
                                    (i[s] = (r.m_im[s] - r.m_im[t - s]) / 2),
                                    (n[s] = (r.m_im[s] + r.m_im[t - s]) / 2),
                                    (o[s] = (-r.m_re[s] + r.m_re[t - s]) / 2));
                              }),
                              (r.repack = function (e, i, n, o) {
                                ((r.m_re[0] = e[0]),
                                  (r.m_im[0] = n[0]),
                                  (r.m_re[l] = e[l]),
                                  (r.m_im[l] = n[l]));
                                for (var s = 1; s < l; s++)
                                  ((r.m_re[s] = e[s] - o[s]),
                                    (r.m_im[s] = i[s] + n[s]),
                                    (r.m_re[t - s] = e[s] + o[s]),
                                    (r.m_im[t - s] = -i[s] + n[s]));
                              }),
                              r
                            );
                          };
                        },
                      ],
                      t = {};
                    function r(i) {
                      if (t[i]) return t[i].exports;
                      var n = (t[i] = { i: i, l: !1, exports: {} });
                      return (e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports);
                    }
                    return (
                      (r.m = e),
                      (r.c = t),
                      (r.d = function (e, t, i) {
                        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
                      }),
                      (r.r = function (e) {
                        ("u" > typeof Symbol &&
                          Symbol.toStringTag &&
                          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                          Object.defineProperty(e, "__esModule", { value: !0 }));
                      }),
                      (r.t = function (e, t) {
                        if (
                          (1 & t && (e = r(e)),
                          8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
                        )
                          return e;
                        var i = Object.create(null);
                        if (
                          (r.r(i),
                          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
                          2 & t && "string" != typeof e)
                        )
                          for (var n in e)
                            r.d(
                              i,
                              n,
                              function (t) {
                                return e[t];
                              }.bind(null, n),
                            );
                        return i;
                      }),
                      (r.n = function (e) {
                        var t =
                          e && e.__esModule
                            ? function () {
                                return e.default;
                              }
                            : function () {
                                return e;
                              };
                        return (r.d(t, "a", t), t);
                      }),
                      (r.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                      }),
                      (r.p = ""),
                      r((r.s = 1))
                    );
                  })()));
              },
            ])));
        },
        893: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913));
          t.default = (function () {
            function e(t) {
              ((0, n.default)(this, e),
                (this.lower = t.start),
                (this.upper = t.end),
                (this.onprocess = t.process),
                (this.position = 0),
                (this.n = 0));
            }
            return (
              (0, o.default)(e, [
                {
                  key: "iterate",
                  value: function () {
                    return (
                      this.n++,
                      (this.position = Math.floor((this.lower + this.upper) / 2)),
                      this.onprocess(this.lower, this.upper, this.position)
                    );
                  },
                },
                {
                  key: "start",
                  value: function () {
                    return (this.iterate(), this);
                  },
                },
                {
                  key: "left",
                  value: function () {
                    return ((this.upper = this.position), this.iterate());
                  },
                },
                {
                  key: "right",
                  value: function () {
                    return ((this.lower = this.position), this.iterate());
                  },
                },
              ]),
              e
            );
          })();
        },
        523: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913));
          t.default = new ((function () {
            function e() {
              (0, n.default)(this, e);
            }
            return (
              (0, o.default)(e, [
                {
                  key: "hasTypedArrays",
                  value: function () {
                    return !!window.Uint32Array;
                  },
                },
                {
                  key: "hasWebAssembly",
                  value: function () {
                    return !!window.WebAssembly;
                  },
                },
                {
                  key: "hasWebAudio",
                  value: function () {
                    return !(!window.AudioContext && !window.webkitAudioContext);
                  },
                },
                {
                  key: "hasFlash",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "hasAudio",
                  value: function () {
                    return this.hasWebAudio();
                  },
                },
                {
                  key: "isBlacklisted",
                  value: function (e) {
                    return !1;
                  },
                },
                {
                  key: "isSlow",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "isTooSlow",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "supported",
                  value: function (e) {
                    return "OGVDecoder" === e
                      ? this.hasWebAssembly()
                      : "OGVPlayer" === e && this.supported("OGVDecoder") && this.hasAudio();
                  },
                },
              ]),
              e
            );
          })())();
        },
        408: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913)),
            s = i(r(205)),
            a = i(r(585)),
            u = i(r(754));
          t.default = (function (e) {
            (0, s.default)(i, e);
            var t,
              r =
                ((t = (function () {
                  if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    r = (0, u.default)(i);
                  return (
                    (e = t
                      ? Reflect.construct(r, arguments, (0, u.default)(this).constructor)
                      : r.apply(this, arguments)),
                    (0, a.default)(this, e)
                  );
                });
            function i() {
              return ((0, n.default)(this, i), r.apply(this, arguments));
            }
            return (
              (0, o.default)(i, [
                {
                  key: "init",
                  value: function (e) {
                    this.proxy("init", [], e);
                  },
                },
                {
                  key: "processHeader",
                  value: function (e, t) {
                    this.proxy("processHeader", [e], t, [e]);
                  },
                },
                {
                  key: "processAudio",
                  value: function (e, t) {
                    this.proxy("processAudio", [e], t, [e]);
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this.terminate();
                  },
                },
              ]),
              i
            );
          })(
            (0, i(r(580)).default)({
              loadedMetadata: !1,
              audioFormat: null,
              audioBuffer: null,
              cpuTime: 0,
            }),
          );
        },
        319: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913)),
            s = i(r(205)),
            a = i(r(585)),
            u = i(r(754));
          t.default = (function (e) {
            (0, s.default)(i, e);
            var t,
              r =
                ((t = (function () {
                  if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    r = (0, u.default)(i);
                  return (
                    (e = t
                      ? Reflect.construct(r, arguments, (0, u.default)(this).constructor)
                      : r.apply(this, arguments)),
                    (0, a.default)(this, e)
                  );
                });
            function i() {
              return ((0, n.default)(this, i), r.apply(this, arguments));
            }
            return (
              (0, o.default)(i, [
                {
                  key: "init",
                  value: function (e) {
                    this.proxy("init", [], e);
                  },
                },
                {
                  key: "processHeader",
                  value: function (e, t) {
                    this.proxy("processHeader", [e], t, [e]);
                  },
                },
                {
                  key: "processFrame",
                  value: function (e, t) {
                    this.proxy("processFrame", [e], t, [e]);
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this.terminate();
                  },
                },
                {
                  key: "sync",
                  value: function () {
                    this.proxy("sync", [], function () {});
                  },
                },
                {
                  key: "recycleFrame",
                  value: function (e) {
                    this.proxy("recycleFrame", [e], function () {}, [
                      e.y.bytes.buffer,
                      e.u.bytes.buffer,
                      e.v.bytes.buffer,
                    ]);
                  },
                },
              ]),
              i
            );
          })(
            (0, i(r(580)).default)({
              loadedMetadata: !1,
              videoFormat: null,
              frameBuffer: null,
              cpuTime: 0,
            }),
          );
        },
        445: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913)),
            s = i(r(539)),
            a = "1.8.9-20220406232920-cb5f7ff",
            u = {
              OGVDemuxerOggW: "ogv-demuxer-ogg-wasm.js",
              OGVDemuxerWebMW: "ogv-demuxer-webm-wasm.js",
              OGVDecoderAudioOpusW: "ogv-decoder-audio-opus-wasm.js",
              OGVDecoderAudioVorbisW: "ogv-decoder-audio-vorbis-wasm.js",
              OGVDecoderVideoTheoraW: "ogv-decoder-video-theora-wasm.js",
              OGVDecoderVideoVP8W: "ogv-decoder-video-vp8-wasm.js",
              OGVDecoderVideoVP8MTW: "ogv-decoder-video-vp8-mt-wasm.js",
              OGVDecoderVideoVP9W: "ogv-decoder-video-vp9-wasm.js",
              OGVDecoderVideoVP9SIMDW: "ogv-decoder-video-vp9-simd-wasm.js",
              OGVDecoderVideoVP9MTW: "ogv-decoder-video-vp9-mt-wasm.js",
              OGVDecoderVideoVP9SIMDMTW: "ogv-decoder-video-vp9-simd-mt-wasm.js",
              OGVDecoderVideoAV1W: "ogv-decoder-video-av1-wasm.js",
              OGVDecoderVideoAV1SIMDW: "ogv-decoder-video-av1-simd-wasm.js",
              OGVDecoderVideoAV1MTW: "ogv-decoder-video-av1-mt-wasm.js",
              OGVDecoderVideoAV1SIMDMTW: "ogv-decoder-video-av1-simd-mt-wasm.js",
            };
          t.default = (function () {
            function e() {
              ((0, n.default)(this, e), (this.base = this.defaultBase()));
            }
            return (
              (0, o.default)(e, [
                { key: "defaultBase", value: function () {} },
                {
                  key: "wasmSupported",
                  value: function () {
                    return s.default.wasmSupported();
                  },
                },
                {
                  key: "scriptForClass",
                  value: function (e) {
                    return u[e];
                  },
                },
                {
                  key: "urlForClass",
                  value: function (e) {
                    var t = this.scriptForClass(e);
                    if (t) return this.urlForScript(t);
                    throw Error("asked for URL for unknown class " + e);
                  },
                },
                {
                  key: "urlForScript",
                  value: function (e) {
                    if (e) {
                      var t = this.base;
                      return (
                        void 0 === t ? (t = "") : (t += "/"),
                        t + e + "?version=" + encodeURIComponent(a)
                      );
                    }
                    throw Error("asked for URL for unknown script " + e);
                  },
                },
                {
                  key: "loadClass",
                  value: function (e, t, r) {
                    var i = this;
                    r = r || {};
                    var n = this.getGlobal(),
                      o = this.urlForClass(e),
                      s = function (t) {
                        return (
                          ((t = t || {}).locateFile = function (e) {
                            return "data:" === e.slice(0, 5) ? e : i.urlForScript(e);
                          }),
                          (t.mainScriptUrlOrBlob =
                            i.scriptForClass(e) + "?version=" + encodeURIComponent(a)),
                          n[e](t)
                        );
                      };
                    "function" == typeof n[e]
                      ? t(s)
                      : this.loadScript(o, function () {
                          t(s);
                        });
                  },
                },
              ]),
              e
            );
          })();
        },
        964: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913)),
            s = i(r(525)),
            a = i(r(205)),
            u = i(r(585)),
            c = i(r(754)),
            d = i(r(408)),
            l = i(r(319)),
            h = i(r(445)),
            f = {
              audio: { proxy: d.default, worker: "ogv-worker-audio.js" },
              video: { proxy: l.default, worker: "ogv-worker-video.js" },
            },
            p = {
              OGVDecoderAudioOpusW: "audio",
              OGVDecoderAudioVorbisW: "audio",
              OGVDecoderVideoTheoraW: "video",
              OGVDecoderVideoVP8W: "video",
              OGVDecoderVideoVP9W: "video",
              OGVDecoderVideoVP9SIMDW: "video",
              OGVDecoderVideoAV1W: "video",
              OGVDecoderVideoAV1SIMDW: "video",
            },
            m = new ((function (e) {
              (0, a.default)(i, e);
              var t,
                r =
                  ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                      return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {}),
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      r = (0, c.default)(i);
                    return (
                      (e = t
                        ? Reflect.construct(r, arguments, (0, c.default)(this).constructor)
                        : r.apply(this, arguments)),
                      (0, u.default)(this, e)
                    );
                  });
              function i() {
                var e;
                return (
                  (0, n.default)(this, i),
                  ((e = r.call(this)).scriptStatus = {}),
                  (e.scriptCallbacks = {}),
                  e
                );
              }
              return (
                (0, o.default)(i, [
                  {
                    key: "getGlobal",
                    value: function () {
                      return window;
                    },
                  },
                  {
                    key: "defaultBase",
                    value: function () {
                      for (
                        var e,
                          t,
                          r = document.querySelectorAll("script"),
                          i = /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                          n = 0;
                        n < r.length;
                        n++
                      )
                        if ((e = r[n].getAttribute("src")) && (t = e.match(i))) return t[1];
                    },
                  },
                  {
                    key: "loadClass",
                    value: function (e, t, r) {
                      (r = r || {}).worker
                        ? this.workerProxy(e, t)
                        : (0, s.default)((0, c.default)(i.prototype), "loadClass", this).call(
                            this,
                            e,
                            t,
                            r,
                          );
                    },
                  },
                  {
                    key: "loadScript",
                    value: function (e, t) {
                      var r = this;
                      if ("done" == this.scriptStatus[e]) t();
                      else if ("loading" == this.scriptStatus[e]) this.scriptCallbacks[e].push(t);
                      else {
                        ((this.scriptStatus[e] = "loading"), (this.scriptCallbacks[e] = [t]));
                        var i = document.createElement("script"),
                          n = function (t) {
                            var i = r.scriptCallbacks[e];
                            (delete r.scriptCallbacks[e],
                              (r.scriptStatus[e] = "done"),
                              i.forEach(function (e) {
                                e();
                              }));
                          };
                        (i.addEventListener("load", n),
                          i.addEventListener("error", n),
                          (i.src = e),
                          document.querySelector("head").appendChild(i));
                      }
                    },
                  },
                  {
                    key: "workerProxy",
                    value: function (e, t) {
                      var r = f[p[e]];
                      if (!r) throw Error("Requested worker for class with no proxy: " + e);
                      var i,
                        n = r.proxy,
                        o = r.worker,
                        s = this.urlForScript(this.scriptForClass(e)),
                        a = this.urlForScript(o),
                        u = function (t) {
                          return new n(i, e, t);
                        };
                      if (a.match(/^https?:|\/\//i)) {
                        var c,
                          d,
                          l,
                          h,
                          g,
                          _ = function () {
                            if (1 == b && 1 == v) {
                              var e = l + " " + h + "\nOGVLoader.base = " + JSON.stringify(m.base);
                              try {
                                g = new Blob([e], { type: "application/javascript" });
                              } catch (t) {
                                ((window.BlobBuilder =
                                  window.BlobBuilder ||
                                  window.WebKitBlobBuilder ||
                                  window.MozBlobBuilder),
                                  (g = new BlobBuilder()).append(e),
                                  (g = g.getBlob()));
                              }
                              ((i = new Worker(URL.createObjectURL(g))),
                                t(function (e) {
                                  return Promise.resolve(new u(e));
                                }));
                            }
                          },
                          b = !1,
                          v = !1;
                        ((c = new XMLHttpRequest()).open("GET", s, !0),
                          (c.onreadystatechange = function () {
                            4 == c.readyState &&
                              200 == c.status &&
                              ((l = c.responseText), (b = !0), _());
                          }),
                          c.send(),
                          (d = new XMLHttpRequest()).open("GET", a, !0),
                          (d.onreadystatechange = function () {
                            4 == d.readyState &&
                              200 == d.status &&
                              ((h = d.responseText), (v = !0), _());
                          }),
                          d.send());
                      } else
                        ((i = new Worker(a)),
                          t(function (e) {
                            return Promise.resolve(new u(e));
                          }));
                    },
                  },
                ]),
                i
              );
            })(h.default))();
          t.default = m;
        },
        759: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(913)),
            o = i(r(575)),
            s = i(r(309)),
            a = {
              MEDIA_ERR_ABORTED: 1,
              MEDIA_ERR_NETWORK: 2,
              MEDIA_ERR_DECODE: 3,
              MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
            },
            u = (0, n.default)(function e(t, r) {
              ((0, o.default)(this, e), (this.code = t), (this.message = r));
            });
          ((0, s.default)(u, a), (0, s.default)(u.prototype, a), (t.default = u));
        },
        278: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(913)),
            o = i(r(575));
          function s(e, t, r) {
            var i = e.split(t, r).map(function (e) {
              return e.replace(/^\s+/, "").replace(/\s+$/, "");
            });
            if ("number" == typeof r) for (; i.length < r;) i.push(null);
            return i;
          }
          t.default = (0, n.default)(function e(t) {
            ((0, o.default)(this, e),
              (t = String(t)),
              (this.major = null),
              (this.minor = null),
              (this.codecs = null));
            var r = s(t, ";");
            if (r.length) {
              var i = r.shift();
              if (i) {
                var n = s(i, "/", 2);
                ((this.major = n[0]), (this.minor = n[1]));
              }
              for (var a in r) {
                var u = r[a].match(/^codecs\s*=\s*"(.*?)"$/);
                if (u) {
                  this.codecs = s(u[1], ",");
                  break;
                }
              }
            }
          });
        },
        869: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n,
            o = i(r(575)),
            s = i(r(913)),
            a = i(r(506)),
            u = i(r(205)),
            c = i(r(585)),
            d = i(r(754)),
            l = i(r(8)),
            h = i(r(731)),
            f = i(r(936)),
            p = i(r(848)),
            m = i(r(964)),
            g = i(r(893)),
            _ = i(r(309)),
            b = i(r(759)),
            v = i(r(278)),
            y = i(r(168)),
            w = i(r(625)),
            V = i(r(302)),
            x = (function () {
              if ("function" == typeof setImmediate) return setImmediate;
              var e = new MessageChannel(),
                t = [];
              return (
                (e.port1.onmessage = function (e) {
                  t.shift()();
                }),
                function (r) {
                  (t.push(r), e.port2.postMessage({}));
                }
              );
            })(),
            T = {
              NETWORK_EMPTY: 0,
              NETWORK_IDLE: 1,
              NETWORK_LOADING: 2,
              NETWORK_NO_SOURCE: 3,
              HAVE_NOTHING: 0,
              HAVE_METADATA: 1,
              HAVE_CURRENT_DATA: 2,
              HAVE_FUTURE_DATA: 3,
              HAVE_ENOUGH_DATA: 4,
            },
            k = "INITIAL",
            E = "SEEKING_END",
            A = "LOADED",
            R = "PRELOAD",
            P = "READY",
            O = "PLAYING",
            I = "SEEKING",
            S = "ERROR",
            L = "NOT_SEEKING",
            U = "BISECT_TO_TARGET",
            C = "BISECT_TO_KEYPOINT",
            D = "LINEAR_TO_TARGET",
            F = "fast";
          function M() {
            var e = document.createElement("ogvjs");
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                : (e.__proto__ = this.__proto__),
              e
            );
          }
          ((n =
            "u" < typeof performance || void 0 === (0, l.default)(performance.now)
              ? Date.now
              : performance.now.bind(performance)),
            (M.prototype = Object.create(HTMLElement.prototype, {})));
          var j = (function (e) {
            (0, u.default)(i, e);
            var t,
              r =
                ((t = (function () {
                  if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    r = (0, d.default)(i);
                  return (
                    (e = t
                      ? Reflect.construct(r, arguments, (0, d.default)(this).constructor)
                      : r.apply(this, arguments)),
                    (0, c.default)(this, e)
                  );
                });
            function i(e) {
              var t;
              if (
                ((0, o.default)(this, i),
                (t = r.call(this)),
                ((e = e || {}).base = e.base || m.default.base),
                (t._options = e),
                (t._instanceId = "ogvjs" + ++i.instanceCount),
                void 0 !== e.worker
                  ? (t._enableWorker = !!e.worker)
                  : (t._enableWorker = !!window.Worker),
                !m.default.wasmSupported())
              )
                throw Error("WebAssembly not supported");
              return (
                (t._enableThreading = !!e.threading),
                (t._enableSIMD = !!e.simd),
                (t._state = k),
                (t._seekState = L),
                (t._detectedType = null),
                (t._canvas = document.createElement("canvas")),
                (t._frameSink = null),
                (t.className = t._instanceId),
                (0, _.default)((0, a.default)(t), T),
                (t._view = t._canvas),
                (t._view.style.position = "absolute"),
                (t._view.style.top = "0"),
                (t._view.style.left = "0"),
                (t._view.style.width = "100%"),
                (t._view.style.height = "100%"),
                (t._view.style.objectFit = "contain"),
                t.appendChild(t._view),
                (t._startTime = n()),
                (t._codec = null),
                (t._audioInfo = null),
                (t._videoInfo = null),
                (t._actionQueue = []),
                (t._audioFeeder = null),
                (t._muted = !1),
                (t._initialPlaybackPosition = 0),
                (t._initialPlaybackOffset = 0),
                (t._prebufferingAudio = !1),
                (t._initialSeekTime = 0),
                (t._currentSrc = ""),
                (t._crossOrigin = null),
                (t._streamEnded = !1),
                (t._mediaError = null),
                (t._dataEnded = !1),
                (t._byteLength = 0),
                (t._duration = null),
                (t._lastSeenTimestamp = null),
                t._nextProcessingTimer,
                (t._nextFrameTimer = null),
                (t._loading = !1),
                (t._started = !1),
                (t._paused = !0),
                (t._ended = !1),
                (t._startedPlaybackInDocument = !1),
                (t._stream = void 0),
                (t._framesProcessed = 0),
                (t._targetPerFrameTime = 1e3 / 60),
                (t._actualPerFrameTime = 0),
                (t._totalFrameTime = 0),
                (t._totalFrameCount = 0),
                (t._playTime = 0),
                (t._bufferTime = 0),
                (t._drawingTime = 0),
                (t._proxyTime = 0),
                (t._totalJitter = 0),
                (t._droppedAudio = 0),
                (t._delayedAudio = 0),
                (t._lateFrames = 0),
                (t._poster = ""),
                (t._thumbnail = null),
                (t._frameEndTimestamp = 0),
                (t._audioEndTimestamp = 0),
                (t._decodedFrames = []),
                (t._pendingFrames = []),
                (t._lastFrameDecodeTime = 0),
                (t._lastFrameVideoCpuTime = 0),
                (t._lastFrameAudioCpuTime = 0),
                (t._lastFrameDemuxerCpuTime = 0),
                (t._lastFrameDrawingTime = 0),
                (t._lastFrameBufferTime = 0),
                (t._lastFrameProxyTime = 0),
                (t._lastVideoCpuTime = 0),
                (t._lastAudioCpuTime = 0),
                (t._lastDemuxerCpuTime = 0),
                (t._lastBufferTime = 0),
                (t._lastProxyTime = 0),
                (t._lastDrawingTime = 0),
                (t._lastFrameTimestamp = 0),
                (t._currentVideoCpuTime = 0),
                (t._lastTimeUpdate = 0),
                (t._timeUpdateInterval = 250),
                (t._seekTargetTime = 0),
                (t._bisectTargetTime = 0),
                (t._seekMode = null),
                (t._lastSeekPosition = null),
                (t._seekBisector = null),
                (t._didSeek = null),
                (t._depth = 0),
                (t._needProcessing = !1),
                (t._pendingFrame = 0),
                (t._pendingAudio = 0),
                (t._framePipelineDepth = 8),
                (t._frameParallelism = t._enableThreading
                  ? Math.min(16, navigator.hardwareConcurrency) || 1
                  : 0),
                (t._audioPipelineDepth = 12),
                (t._videoInfo = null),
                (t._audioInfo = null),
                (t._width = 0),
                (t._height = 0),
                (t._volume = 1),
                (t._playbackRate = 1),
                Object.defineProperties((0, a.default)(t), {
                  src: {
                    get: function () {
                      return this.getAttribute("src") || "";
                    },
                    set: function (e) {
                      (this.setAttribute("src", e),
                        (this._loading = !1),
                        this._prepForLoad("interactive"));
                    },
                  },
                  buffered: {
                    get: function () {
                      var e,
                        t = this;
                      return (
                        (e =
                          this._stream && this._byteLength && this._duration
                            ? this._stream.getBufferedRanges().map(function (e) {
                                return e.map(function (e) {
                                  return (e / t._stream.length) * t._duration;
                                });
                              })
                            : [[0, 0]]),
                        new y.default(e)
                      );
                    },
                  },
                  seekable: {
                    get: function () {
                      return new y.default(
                        this.duration < 1 / 0 &&
                          this._stream &&
                          this._stream.seekable &&
                          this._codec &&
                          this._codec.seekable
                          ? [[0, this._duration]]
                          : [],
                      );
                    },
                  },
                  currentTime: {
                    get: function () {
                      return this._state == I
                        ? this._seekTargetTime
                        : this._codec
                          ? this._state != O || this._paused
                            ? this._initialPlaybackOffset
                            : this._getPlaybackTime()
                          : this._initialSeekTime;
                    },
                    set: function (e) {
                      this._seek(e, "exact");
                    },
                  },
                  duration: {
                    get: function () {
                      return this._codec && this._codec.loadedMetadata
                        ? null !== this._duration
                          ? this._duration
                          : 1 / 0
                        : NaN;
                    },
                  },
                  paused: {
                    get: function () {
                      return this._paused;
                    },
                  },
                  ended: {
                    get: function () {
                      return this._ended;
                    },
                  },
                  seeking: {
                    get: function () {
                      return this._state == I;
                    },
                  },
                  muted: {
                    get: function () {
                      return this._muted;
                    },
                    set: function (e) {
                      ((this._muted = e),
                        this._audioFeeder
                          ? (this._audioFeeder.muted = this._muted)
                          : this._started &&
                            !this._muted &&
                            this._codec &&
                            this._codec.hasAudio &&
                            (this._log("unmuting: switching from timer to audio clock"),
                            this._initAudioFeeder(),
                            this._startPlayback(this._audioEndTimestamp)),
                        this._fireEventAsync("volumechange"));
                    },
                  },
                  poster: {
                    get: function () {
                      return this._poster;
                    },
                    set: function (e) {
                      var t = this;
                      if (((this._poster = e), !this._started)) {
                        this._thumbnail && this.removeChild(this._thumbnail);
                        var r = new Image();
                        ((r.crossOrigin = this.crossOrigin),
                          (r.src = this._poster),
                          (r.className = "ogvjs-poster"),
                          (r.style.position = "absolute"),
                          (r.style.top = "0"),
                          (r.style.left = "0"),
                          (r.style.width = "100%"),
                          (r.style.height = "100%"),
                          (r.style.objectFit = "contain"),
                          (r.style.visibility = "hidden"),
                          r.addEventListener("load", function () {
                            t._thumbnail === r &&
                              (i.styleManager.appendRule("." + t._instanceId, {
                                width: r.naturalWidth + "px",
                                height: r.naturalHeight + "px",
                              }),
                              (r.style.visibility = "visible"));
                          }),
                          (this._thumbnail = r),
                          this.appendChild(r));
                      }
                    },
                  },
                  videoWidth: {
                    get: function () {
                      return this._videoInfo ? this._videoInfo.displayWidth : 0;
                    },
                  },
                  videoHeight: {
                    get: function () {
                      return this._videoInfo ? this._videoInfo.displayHeight : 0;
                    },
                  },
                  ogvjsVideoFrameRate: {
                    get: function () {
                      return this._videoInfo
                        ? 0 == this._videoInfo.fps
                          ? this._totalFrameCount / (this._totalFrameTime / 1e3)
                          : this._videoInfo.fps
                        : 0;
                    },
                  },
                  ogvjsAudioChannels: {
                    get: function () {
                      return this._audioInfo ? this._audioInfo.channels : 0;
                    },
                  },
                  ogvjsAudioSampleRate: {
                    get: function () {
                      return this._audioInfo ? this._audioInfo.rate : 0;
                    },
                  },
                  width: {
                    get: function () {
                      return this._width;
                    },
                    set: function (e) {
                      ((this._width = parseInt(e, 10)), (this.style.width = this._width + "px"));
                    },
                  },
                  height: {
                    get: function () {
                      return this._height;
                    },
                    set: function (e) {
                      ((this._height = parseInt(e, 10)), (this.style.height = this._height + "px"));
                    },
                  },
                  autoplay: {
                    get: function () {
                      return !1;
                    },
                    set: function (e) {},
                  },
                  controls: {
                    get: function () {
                      return !1;
                    },
                    set: function (e) {},
                  },
                  loop: {
                    get: function () {
                      return !1;
                    },
                    set: function (e) {},
                  },
                  crossOrigin: {
                    get: function () {
                      return this._crossOrigin;
                    },
                    set: function (e) {
                      switch (e) {
                        case null:
                          ((this._crossOrigin = e), this.removeAttribute("crossorigin"));
                          break;
                        default:
                          e = "anonymous";
                        case "":
                        case "anonymous":
                        case "use-credentials":
                          ((this._crossOrigin = e), this.setAttribute("crossorigin", e));
                      }
                      this._thumbnail && (this._thumbnail.crossOrigin = e);
                    },
                  },
                  currentSrc: {
                    get: function () {
                      return this._currentSrc;
                    },
                  },
                  defaultMuted: {
                    get: function () {
                      return !1;
                    },
                  },
                  defaultPlaybackRate: {
                    get: function () {
                      return 1;
                    },
                  },
                  error: {
                    get: function () {
                      return this._state === S
                        ? this._mediaError
                          ? this._mediaError
                          : new b.default("unknown error occurred in media procesing")
                        : null;
                    },
                  },
                  preload: {
                    get: function () {
                      return this.getAttribute("preload") || "";
                    },
                    set: function (e) {
                      this.setAttribute("preload", e);
                    },
                  },
                  readyState: {
                    get: function () {
                      return this._stream && this._codec && this._codec.loadedMetadata
                        ? i.HAVE_ENOUGH_DATA
                        : i.HAVE_NOTHING;
                    },
                  },
                  networkState: {
                    get: function () {
                      return this._stream
                        ? this._stream.waiting
                          ? i.NETWORK_LOADING
                          : i.NETWORK_IDLE
                        : this.readyState == i.HAVE_NOTHING
                          ? i.NETWORK_EMPTY
                          : i.NETWORK_NO_SOURCE;
                    },
                  },
                  playbackRate: {
                    get: function () {
                      return this._playbackRate;
                    },
                    set: function (e) {
                      var t = Number(e) || 1;
                      (this._audioFeeder
                        ? (this._audioFeeder.tempo = t)
                        : this._paused ||
                          ((this._initialPlaybackOffset = this._getPlaybackTime()),
                          (this._initialPlaybackPosition = (t * n()) / 1e3)),
                        (this._playbackRate = t),
                        this._fireEventAsync("ratechange"));
                    },
                  },
                  played: {
                    get: function () {
                      return new y.default([[0, this.currentTime]]);
                    },
                  },
                  volume: {
                    get: function () {
                      return this._volume;
                    },
                    set: function (e) {
                      ((this._volume = +e),
                        this._audioFeeder && (this._audioFeeder.volume = this._volume),
                        this._fireEventAsync("volumechange"));
                    },
                  },
                }),
                (t.onframecallback = null),
                (t.onloadstate = null),
                (t.onprogress = null),
                (t.onsuspend = null),
                (t.onabort = null),
                (t.onemptied = null),
                (t.onstalled = null),
                (t.onloadedmetadata = null),
                (t.onloadeddata = null),
                (t.oncanplay = null),
                (t.oncanplaythrough = null),
                (t.onplaying = null),
                (t.onwaiting = null),
                (t.onseeking = null),
                (t.onseeked = null),
                (t.onended = null),
                (t.ondurationchange = null),
                (t.ontimeupdate = null),
                (t.onplay = null),
                (t.onpause = null),
                (t.onratechange = null),
                (t.onresize = null),
                (t.onvolumechange = null),
                (t.onaudiofeedercreated = null),
                t
              );
            }
            return (
              (0, s.default)(
                i,
                [
                  {
                    key: "_time",
                    value: function (e) {
                      var t = n();
                      e();
                      var r = n() - t;
                      return ((this._lastFrameDecodeTime += r), r);
                    },
                  },
                  {
                    key: "_log",
                    value: function (e) {
                      var t = this._options;
                      if (t.debug) {
                        var r = n() - this._startTime;
                        (t.debugFilter && !e.match(t.debugFilter)) ||
                          console.log("[" + Math.round(10 * r) / 10 + "ms] " + e);
                      }
                    },
                  },
                  {
                    key: "_fireEvent",
                    value: function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      this._log("fireEvent " + e);
                      var r,
                        i = "function" == typeof Event;
                      for (var n in (i
                        ? (r = new CustomEvent(e))
                        : (r = document.createEvent("Event")).initEvent(e, !1, !1),
                      t))
                        t.hasOwnProperty(n) && (r[n] = t[n]);
                      var o = this.dispatchEvent(r);
                      !i && "resize" === e && this.onresize && o && this.onresize.call(this, r);
                    },
                  },
                  {
                    key: "_fireEventAsync",
                    value: function (e) {
                      var t = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      (this._log("fireEventAsync " + e),
                        x(function () {
                          t._fireEvent(e, r);
                        }));
                    },
                  },
                  {
                    key: "_initAudioFeeder",
                    value: function () {
                      var e = this,
                        t = this._options,
                        r = { bufferSize: 8192 };
                      (t.audioContext && (r.audioContext = t.audioContext),
                        t.audioDestination && (r.output = t.audioDestination),
                        t.audioBackendFactory && (r.backendFactory = t.audioBackendFactory));
                      var i = (this._audioFeeder = new p.default(r));
                      (i.init(this._audioInfo.channels, this._audioInfo.rate),
                        this.onaudiofeedercreated && this.onaudiofeedercreated(this._audioFeeder),
                        (i.bufferThreshold = 1),
                        (i.volume = this.volume),
                        (i.muted = this.muted),
                        (i.tempo = this.playbackRate),
                        (i.onbufferlow = function () {
                          (e._log("onbufferlow"),
                            (e._stream && (e._stream.buffering || e._stream.seeking)) ||
                              e._pendingAudio ||
                              e._pingProcessing());
                        }),
                        (i.onstarved = function () {
                          (e._dataEnded
                            ? e._log("onstarved: appear to have reached end of audio")
                            : (e._log("onstarved: halting audio due to starvation"),
                              e._stopPlayback(),
                              (e._prebufferingAudio = !0)),
                            e._isProcessing() || e._pingProcessing(0));
                        }));
                    },
                  },
                  {
                    key: "_startPlayback",
                    value: function (e) {
                      if (this._audioFeeder) {
                        this._audioFeeder.start();
                        var t = this._audioFeeder.getPlaybackState();
                        this._initialPlaybackPosition = t.playbackPosition;
                      } else this._initialPlaybackPosition = (this._playbackRate * n()) / 1e3;
                      (void 0 !== e && (this._initialPlaybackOffset = e),
                        (this._prebufferingAudio = !1),
                        this._log(
                          "continuing at " +
                            this._initialPlaybackPosition +
                            ", " +
                            this._initialPlaybackOffset,
                        ));
                    },
                  },
                  {
                    key: "_stopPlayback",
                    value: function () {
                      ((this._initialPlaybackOffset = this._getPlaybackTime()),
                        this._log("pausing at " + this._initialPlaybackOffset),
                        this._audioFeeder && this._audioFeeder.stop());
                    },
                  },
                  {
                    key: "_getPlaybackTime",
                    value: function (e) {
                      return this._prebufferingAudio || this._paused
                        ? this._initialPlaybackOffset
                        : (this._audioFeeder
                            ? (e = e || this._audioFeeder.getPlaybackState()).playbackPosition
                            : (this._playbackRate * n()) / 1e3) -
                            this._initialPlaybackPosition +
                            this._initialPlaybackOffset;
                    },
                  },
                  {
                    key: "_stopVideo",
                    value: function () {
                      (this._log("STOPPING"),
                        (this._state = k),
                        (this._seekState = L),
                        (this._started = !1),
                        (this._ended = !1),
                        (this._frameEndTimestamp = 0),
                        (this._audioEndTimestamp = 0),
                        (this._lastFrameDecodeTime = 0),
                        (this._prebufferingAudio = !1),
                        this._actionQueue.splice(0, this._actionQueue.length),
                        this._stream &&
                          (this._stream.abort(), (this._stream = null), (this._streamEnded = !1)),
                        this._codec &&
                          (this._codec.close(),
                          (this._codec = null),
                          (this._pendingFrame = 0),
                          (this._pendingAudio = 0),
                          (this._dataEnded = !1)),
                        (this._videoInfo = null),
                        (this._audioInfo = null),
                        this._audioFeeder &&
                          (this._audioFeeder.close(), (this._audioFeeder = null)),
                        this._nextProcessingTimer &&
                          (clearTimeout(this._nextProcessingTimer),
                          (this._nextProcessingTimer = null)),
                        this._nextFrameTimer &&
                          (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)),
                        this._frameSink && (this._frameSink.clear(), (this._frameSink = null)),
                        this._decodedFrames && (this._decodedFrames = []),
                        this._pendingFrames && (this._pendingFrames = []),
                        (this._initialSeekTime = 0),
                        (this._initialPlaybackPosition = 0),
                        (this._initialPlaybackOffset = 0),
                        (this._duration = null));
                    },
                  },
                  {
                    key: "_doFrameComplete",
                    value: function () {
                      var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      this._startedPlaybackInDocument &&
                        !document.body.contains(this) &&
                        x(function () {
                          e.stop();
                        });
                      var r = n(),
                        i = r - this._lastFrameTimestamp,
                        o = this._actualPerFrameTime - this._targetPerFrameTime;
                      ((this._totalJitter += Math.abs(o)), (this._playTime += i));
                      var s = {
                        cpuTime: this._lastFrameDecodeTime,
                        drawingTime: this._drawingTime - this._lastFrameDrawingTime,
                        bufferTime: this._bufferTime - this._lastFrameBufferTime,
                        proxyTime: this._proxyTime - this._lastFrameProxyTime,
                        demuxerTime: 0,
                        videoTime: 0,
                        audioTime: 0,
                        clockTime: this._actualPerFrameTime,
                        late: t.dropped,
                        dropped: t.dropped,
                      };
                      function a(e) {
                        return Math.round(10 * e) / 10;
                      }
                      (this._codec &&
                        ((s.demuxerTime =
                          this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime),
                        (s.videoTime += this._currentVideoCpuTime - this._lastFrameVideoCpuTime),
                        (s.audioTime += this._codec.audioCpuTime - this._lastFrameAudioCpuTime)),
                        (s.cpuTime += s.demuxerTime),
                        (this._lastFrameDecodeTime = 0),
                        (this._lastFrameTimestamp = r),
                        this._codec
                          ? ((this._lastFrameVideoCpuTime = this._currentVideoCpuTime),
                            (this._lastFrameAudioCpuTime = this._codec.audioCpuTime),
                            (this._lastFrameDemuxerCpuTime = this._codec.demuxerCpuTime))
                          : ((this._lastFrameVideoCpuTime = 0),
                            (this._lastFrameAudioCpuTime = 0),
                            (this._lastFrameDemuxerCpuTime = 0)),
                        (this._lastFrameDrawingTime = this._drawingTime),
                        (this._lastFrameBufferTime = this._bufferTime),
                        (this._lastFrameProxyTime = this._proxyTime),
                        this._log(
                          "drew frame " +
                            t.frameEndTimestamp +
                            ": clock time " +
                            a(i) +
                            " (jitter " +
                            a(o) +
                            ") cpu: " +
                            a(s.cpuTime) +
                            " (mux: " +
                            a(s.demuxerTime) +
                            " buf: " +
                            a(s.bufferTime) +
                            " draw: " +
                            a(s.drawingTime) +
                            " proxy: " +
                            a(s.proxyTime) +
                            ") vid: " +
                            a(s.videoTime) +
                            " aud: " +
                            a(s.audioTime),
                        ),
                        this._fireEventAsync("framecallback", s),
                        (!this._lastTimeUpdate ||
                          r - this._lastTimeUpdate >= this._timeUpdateInterval) &&
                          ((this._lastTimeUpdate = r), this._fireEventAsync("timeupdate")),
                        this._codec && t.yCbCrBuffer && this._codec.recycleFrame(t.yCbCrBuffer));
                    },
                  },
                  {
                    key: "_seekStream",
                    value: function (e) {
                      var t = this;
                      (this._stream.seeking && this._stream.abort(),
                        this._stream.buffering && this._stream.abort(),
                        (this._streamEnded = !1),
                        (this._dataEnded = !1),
                        (this._ended = !1),
                        this._stream
                          .seek(e)
                          .then(function () {
                            t._readBytesAndWait();
                          })
                          .catch(function (e) {
                            t._onStreamError(e);
                          }));
                    },
                  },
                  {
                    key: "_onStreamError",
                    value: function (e) {
                      "AbortError" === e.name
                        ? this._log("i/o promise canceled; ignoring")
                        : (this._log("i/o error: " + e),
                          (this._mediaError = new b.default(
                            b.default.MEDIA_ERR_NETWORK,
                            String(e),
                          )),
                          (this._state = S),
                          this._stopPlayback());
                    },
                  },
                  {
                    key: "_seek",
                    value: function (e, t) {
                      var r = this;
                      if (
                        (this._log("requested seek to " + e + ", mode " + t),
                        this.readyState == this.HAVE_NOTHING)
                      )
                        return (
                          this._log("not yet loaded; saving seek position for later"),
                          void (this._initialSeekTime = e)
                        );
                      if (this._stream && !this._stream.seekable)
                        throw Error("Cannot seek a non-seekable stream");
                      if (this._codec && !this._codec.seekable)
                        throw Error("Cannot seek in a non-seekable file");
                      var i = function (i) {
                        (r._stream && r._stream.buffering && r._stream.abort(),
                          r._stream && r._stream.seeking && r._stream.abort(),
                          r._actionQueue.splice(0, r._actionQueue.length),
                          r._stopPlayback(),
                          (r._prebufferingAudio = !1),
                          r._audioFeeder && r._audioFeeder.flush(),
                          (r._state = I),
                          (r._seekTargetTime = e),
                          (r._seekMode = t),
                          r._codec ? r._codec.flush(i) : i());
                      };
                      (i(function () {
                        r._isProcessing() || r._pingProcessing(0);
                      }),
                        this._actionQueue.push(function () {
                          i(function () {
                            r._doSeek(e);
                          });
                        }));
                    },
                  },
                  {
                    key: "_doSeek",
                    value: function (e) {
                      var t = this;
                      ((this._streamEnded = !1),
                        (this._dataEnded = !1),
                        (this._ended = !1),
                        (this._state = I),
                        (this._seekTargetTime = e),
                        (this._lastSeekPosition = -1),
                        (this._decodedFrames = []),
                        (this._pendingFrames = []),
                        (this._pendingFrame = 0),
                        (this._pendingAudio = 0),
                        (this._didSeek = !1),
                        this._codec.seekToKeypoint(e, function (r) {
                          r
                            ? ((t._seekState = D),
                              t._fireEventAsync("seeking"),
                              t._didSeek || t._pingProcessing())
                            : t._codec.getKeypointOffset(e, function (e) {
                                (e > 0
                                  ? ((t._seekState = D), t._seekStream(e))
                                  : ((t._seekState = U), t._startBisection(t._seekTargetTime)),
                                  t._fireEventAsync("seeking"));
                              });
                        }));
                    },
                  },
                  {
                    key: "_startBisection",
                    value: function (e) {
                      var t = this,
                        r = Math.max(0, this._stream.length - 65536);
                      ((this._bisectTargetTime = e),
                        (this._seekBisector = new g.default({
                          start: 0,
                          end: r,
                          process: function (e, r, i) {
                            return (
                              i != t._lastSeekPosition &&
                              ((t._lastSeekPosition = i),
                              t._codec.flush(function () {
                                t._seekStream(i);
                              }),
                              !0)
                            );
                          },
                        })),
                        this._seekBisector.start());
                    },
                  },
                  {
                    key: "_continueSeekedPlayback",
                    value: function () {
                      var e = this;
                      ((this._seekState = L),
                        (this._state = P),
                        (this._frameEndTimestamp = this._codec.frameTimestamp),
                        (this._audioEndTimestamp = this._codec.audioTimestamp),
                        this._codec.hasAudio
                          ? (this._seekTargetTime = this._codec.audioTimestamp)
                          : (this._seekTargetTime = this._codec.frameTimestamp),
                        (this._initialPlaybackOffset = this._seekTargetTime));
                      var t = function () {
                        ((e._lastTimeUpdate = e._seekTargetTime),
                          e._fireEventAsync("timeupdate"),
                          e._fireEventAsync("seeked"),
                          e._isProcessing() || e._pingProcessing());
                      };
                      if (this._codec.hasVideo && this._decodedFrames.length) {
                        var r = this._decodedFrames.shift();
                        (this._drawFrame(r.yCbCrBuffer), t());
                      } else {
                        if (this._codec.hasVideo && this._codec.frameReady)
                          return (
                            this._codec.decodeFrame(function (r) {
                              (r && e._drawFrame(e._codec.frameBuffer), t());
                            }),
                            void this._codec.sync()
                          );
                        t();
                      }
                    },
                  },
                  {
                    key: "_drawFrame",
                    value: function (e) {
                      (this._thumbnail &&
                        (this.removeChild(this._thumbnail), (this._thumbnail = null)),
                        this._frameSink.drawFrame(e));
                    },
                  },
                  {
                    key: "_doProcessLinearSeeking",
                    value: function () {
                      var e,
                        t = this;
                      if (
                        ((e = this._codec.hasVideo ? this._targetPerFrameTime / 1e3 : 1 / 256),
                        this._codec.hasVideo)
                      ) {
                        if (this._pendingFrame) return;
                        if (!this._codec.frameReady)
                          return void this._codec.process(function (e) {
                            e
                              ? t._pingProcessing()
                              : t._streamEnded
                                ? (t._log("stream ended during linear seeking on video"),
                                  (t._dataEnded = !0),
                                  t._continueSeekedPlayback())
                                : t._readBytesAndWait();
                          });
                        if (
                          this._seekMode === F &&
                          this._codec.keyframeTimestamp == this._codec.frameTimestamp
                        )
                          return void this._continueSeekedPlayback();
                        if (this._codec.frameTimestamp <= this._seekTargetTime) {
                          var r = this._codec.frameTimestamp;
                          return (
                            this._pendingFrame++,
                            this._pendingFrames.push({ frameEndTimestamp: r }),
                            this._decodedFrames.splice(0, this._decodedFrames.length),
                            this._codec.decodeFrame(function (e) {
                              (t._pendingFrame--,
                                t._pendingFrames.shift(),
                                t._decodedFrames.push({
                                  yCbCrBuffer: t._codec.frameBuffer,
                                  videoCpuTime: t._codec.videoCpuTime,
                                  frameEndTimestamp: r,
                                }),
                                t._pingProcessing());
                            }),
                            void this._codec.sync()
                          );
                        }
                        if (!this._codec.hasAudio) return void this._continueSeekedPlayback();
                      }
                      if (this._codec.hasAudio) {
                        if (this._pendingAudio) return;
                        return this._codec.audioReady
                          ? this._codec.audioTimestamp + e < this._seekTargetTime
                            ? void this._codec.decodeAudio(function () {
                                t._pingProcessing();
                              })
                            : void this._continueSeekedPlayback()
                          : void this._codec.process(function (e) {
                              e
                                ? t._pingProcessing()
                                : t._streamEnded
                                  ? (t._log("stream ended during linear seeking on audio"),
                                    (t._dataEnded = !0),
                                    t._continueSeekedPlayback())
                                  : t._readBytesAndWait();
                            });
                      }
                    },
                  },
                  {
                    key: "_doProcessBisectionSeek",
                    value: function () {
                      var e,
                        t,
                        r = this;
                      if (this._codec.hasVideo)
                        ((t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1e3));
                      else {
                        if (!this._codec.hasAudio)
                          throw Error("Invalid seek state; no audio or video track available");
                        ((t = this._codec.audioTimestamp), (e = 1 / 256));
                      }
                      t < 0
                        ? this._codec.process(function (e) {
                            if (e) r._pingProcessing();
                            else if (r._streamEnded) {
                              if (
                                (r._log("stream ended during bisection seek"),
                                !r._seekBisector.right())
                              )
                                throw (r._log("failed going back"), Error("not sure what to do"));
                            } else r._readBytesAndWait();
                          })
                        : t - e / 2 > this._bisectTargetTime
                          ? this._seekBisector.left() ||
                            (this._log("close enough (left)"),
                            (this._seekTargetTime = t),
                            this._continueSeekedPlayback())
                          : t + e / 2 < this._bisectTargetTime
                            ? this._seekBisector.right() ||
                              (this._log("close enough (right)"),
                              (this._seekState = D),
                              this._pingProcessing())
                            : this._seekState == U &&
                                this._codec.hasVideo &&
                                this._codec.keyframeTimestamp < this._codec.frameTimestamp
                              ? (this._log("finding the keypoint now"),
                                (this._seekState = C),
                                this._startBisection(this._codec.keyframeTimestamp))
                              : (this._log("straight seeking now"),
                                (this._seekState = D),
                                this._pingProcessing());
                    },
                  },
                  {
                    key: "_setupVideo",
                    value: function () {
                      (this._videoInfo.fps > 0
                        ? (this._targetPerFrameTime = 1e3 / this._videoInfo.fps)
                        : (this._targetPerFrameTime = 16.667),
                        (this._canvas.width = this._videoInfo.displayWidth),
                        (this._canvas.height = this._videoInfo.displayHeight),
                        i.styleManager.appendRule("." + this._instanceId, {
                          width: this._videoInfo.displayWidth + "px",
                          height: this._videoInfo.displayHeight + "px",
                        }));
                      var e = {};
                      (void 0 !== this._options.webGL && (e.webGL = this._options.webGL),
                        this._options.forceWebGL && (e.webGL = "required"),
                        (this._frameSink = h.default.attach(this._canvas, e)));
                    },
                  },
                  {
                    key: "_doProcessing",
                    value: function () {
                      if (
                        (this._didSeek && (this._didSeek = !1),
                        (this._nextProcessingTimer = null),
                        this._isProcessing(),
                        this._depth > 0)
                      )
                        throw Error("REENTRANCY FAIL: doProcessing recursing unexpectedly");
                      var e = 0;
                      do {
                        if (
                          ((this._needProcessing = !1),
                          this._depth++,
                          this._doProcessingLoop(),
                          this._depth--,
                          this._needProcessing && this._isProcessing())
                        )
                          throw Error(
                            "REENTRANCY FAIL: waiting on input or codec but asked to keep processing",
                          );
                        ++e > 500 &&
                          (this._log("stuck in processing loop; breaking with timer"),
                          (this._needProcessing = 0),
                          this._pingProcessing(0));
                      } while (this._needProcessing);
                    },
                  },
                  {
                    key: "_doProcessingLoop",
                    value: function () {
                      if (this._actionQueue.length) this._actionQueue.shift()();
                      else if (this._state == k) this._doProcessInitial();
                      else if (this._state == E) this._doProcessSeekingEnd();
                      else if (this._state == A) this._doProcessLoaded();
                      else if (this._state == R) this._doProcessPreload();
                      else if (this._state == P) this._doProcessReady();
                      else if (this._state == I) this._doProcessSeeking();
                      else if (this._state == O) this._doProcessPlay();
                      else {
                        if (this._state != S)
                          throw Error("Unexpected OGVPlayer state " + this._state);
                        this._doProcessError();
                      }
                    },
                  },
                  {
                    key: "_doProcessInitial",
                    value: function () {
                      var e = this;
                      if (this._codec.loadedMetadata) {
                        if (!this._codec.hasVideo && !this._codec.hasAudio)
                          throw Error("No audio or video found, something is wrong");
                        (this._codec.hasAudio && (this._audioInfo = this._codec.audioFormat),
                          this._codec.hasVideo &&
                            ((this._videoInfo = this._codec.videoFormat), this._setupVideo()),
                          isNaN(this._codec.duration) || (this._duration = this._codec.duration),
                          null === this._duration &&
                          this._stream.seekable &&
                          "video/ogg" == this._detectedType
                            ? ((this._state = E),
                              (this._lastSeenTimestamp = -1),
                              this._codec.flush(function () {
                                e._seekStream(Math.max(0, e._stream.length - 131072));
                              }))
                            : ((this._state = A), this._pingProcessing()));
                      } else
                        this._codec.process(function (t) {
                          if (t) e._pingProcessing();
                          else {
                            if (e._streamEnded) throw Error("end of file before headers found");
                            (e._log("reading more cause we are out of data"),
                              e._readBytesAndWait());
                          }
                        });
                    },
                  },
                  {
                    key: "_doProcessSeekingEnd",
                    value: function () {
                      var e = this;
                      this._codec.frameReady
                        ? (this._log("saw frame with " + this._codec.frameTimestamp),
                          (this._lastSeenTimestamp = Math.max(
                            this._lastSeenTimestamp,
                            this._codec.frameTimestamp,
                          )),
                          this._codec.discardFrame(function () {
                            e._pingProcessing();
                          }))
                        : this._codec.audioReady
                          ? (this._log("saw audio with " + this._codec.audioTimestamp),
                            (this._lastSeenTimestamp = Math.max(
                              this._lastSeenTimestamp,
                              this._codec.audioTimestamp,
                            )),
                            this._codec.discardAudio(function () {
                              e._pingProcessing();
                            }))
                          : this._codec.process(function (t) {
                              t
                                ? e._pingProcessing()
                                : e._stream.eof
                                  ? (e._log(
                                      "seek-duration: we are at the end: " + e._lastSeenTimestamp,
                                    ),
                                    e._lastSeenTimestamp > 0 &&
                                      (e._duration = e._lastSeenTimestamp),
                                    (e._state = A),
                                    e._codec.flush(function () {
                                      ((e._streamEnded = !1),
                                        (e._dataEnded = !1),
                                        e._seekStream(0));
                                    }))
                                  : e._readBytesAndWait();
                            });
                    },
                  },
                  {
                    key: "_doProcessLoaded",
                    value: function () {
                      ((this._state = R),
                        this._fireEventAsync("loadedmetadata"),
                        this._fireEventAsync("durationchange"),
                        this._codec.hasVideo && this._fireEventAsync("resize"),
                        this._pingProcessing(0));
                    },
                  },
                  {
                    key: "_doProcessPreload",
                    value: function () {
                      var e = this;
                      (!this._codec.frameReady && this._codec.hasVideo) ||
                      (!this._codec.audioReady && this._codec.hasAudio)
                        ? this._codec.process(function (t) {
                            t
                              ? e._pingProcessing()
                              : e._streamEnded
                                ? (e._ended = !0)
                                : e._readBytesAndWait();
                          })
                        : ((this._state = P),
                          this._fireEventAsync("loadeddata"),
                          this._pingProcessing());
                    },
                  },
                  {
                    key: "_doProcessReady",
                    value: function () {
                      var e = this;
                      if (
                        (this._log("initial seek to " + this._initialSeekTime),
                        this._initialSeekTime > 0)
                      ) {
                        var t = this._initialSeekTime;
                        ((this._initialSeekTime = 0),
                          this._log("initial seek to " + t),
                          this._doSeek(t));
                      } else if (this._paused) this._log("paused while in ready");
                      else {
                        var r = function () {
                          (e._log("finishStartPlaying"),
                            (e._state = O),
                            (e._lastFrameTimestamp = n()),
                            e._codec.hasAudio && e._audioFeeder
                              ? (e._prebufferingAudio = !0)
                              : e._startPlayback(),
                            e._pingProcessing(0),
                            e._fireEventAsync("play"),
                            e._fireEventAsync("playing"));
                        };
                        !this._codec.hasAudio || this._audioFeeder || this._muted
                          ? r()
                          : (this._initAudioFeeder(), this._audioFeeder.waitUntilReady(r));
                      }
                    },
                  },
                  {
                    key: "_doProcessSeeking",
                    value: function () {
                      if (this._seekState == L)
                        throw Error("seeking in invalid state (not seeking?)");
                      if (this._seekState == U) this._doProcessBisectionSeek();
                      else if (this._seekState == C) this._doProcessBisectionSeek();
                      else {
                        if (this._seekState != D)
                          throw Error("Invalid seek state " + this._seekState);
                        this._doProcessLinearSeeking();
                      }
                    },
                  },
                  {
                    key: "_doProcessPlay",
                    value: function () {
                      var e = this,
                        t = this._codec;
                      if (this._paused) this._log("paused during playback; stopping loop");
                      else if (
                        (!t.hasAudio || t.audioReady || this._pendingAudio || this._dataEnded) &&
                        (!t.hasVideo ||
                          t.frameReady ||
                          this._pendingFrame ||
                          this._decodedFrames.length ||
                          this._dataEnded)
                      ) {
                        var r,
                          i,
                          n,
                          o = null,
                          s = 0,
                          a = !1,
                          u = 0;
                        if (
                          (t.hasAudio && this._audioFeeder
                            ? ((o = this._audioFeeder.getPlaybackState()),
                              (s = this._getPlaybackTime(o)),
                              (a = this._dataEnded && 0 == this._audioFeeder.durationBuffered),
                              this._prebufferingAudio &&
                                ((this._audioFeeder.durationBuffered >=
                                  2 * this._audioFeeder.bufferThreshold &&
                                  (!t.hasVideo ||
                                    this._decodedFrames.length >= this._framePipelineDepth)) ||
                                  this._dataEnded) &&
                                (this._log(
                                  "prebuffering audio done; buffered to " +
                                    this._audioFeeder.durationBuffered,
                                ),
                                this._startPlayback(s),
                                (this._prebufferingAudio = !1)),
                              o.dropped != this._droppedAudio &&
                                this._log("dropped " + (o.dropped - this._droppedAudio)),
                              o.delayed != this._delayedAudio &&
                                this._log("delayed " + (o.delayed - this._delayedAudio)),
                              (this._droppedAudio = o.dropped),
                              (this._delayedAudio = o.delayed),
                              (r =
                                this._audioFeeder.durationBuffered <=
                                2 * this._audioFeeder.bufferThreshold) &&
                                (this._codec.audioReady
                                  ? this._pendingAudio >= this._audioPipelineDepth &&
                                    (this._log(
                                      "audio decode disabled: " +
                                        this._pendingAudio +
                                        " packets in flight",
                                    ),
                                    (r = !1))
                                  : (r = !1)))
                            : ((s = this._getPlaybackTime()),
                              (r = this._codec.audioReady && this._audioEndTimestamp < s)),
                          this._codec.hasVideo)
                        ) {
                          ((i = this._decodedFrames.length > 0),
                            (n =
                              this._pendingFrame + this._decodedFrames.length <
                                this._framePipelineDepth + this._frameParallelism &&
                              this._codec.frameReady),
                            i &&
                              ((u = 1e3 * (this._decodedFrames[0].frameEndTimestamp - s)),
                              (this._actualPerFrameTime = this._targetPerFrameTime - u)));
                          var c = this._targetPerFrameTime;
                          if (this._prebufferingAudio)
                            (n && this._log("decoding a frame during prebuffering"), (i = !1));
                          else if (i && this._dataEnded && a)
                            this._log("audio timeline ended? ready to draw frame");
                          else if (i && -u >= c) {
                            for (var d = -1, l = 0; l < this._decodedFrames.length - 1; l++)
                              this._decodedFrames[l].frameEndTimestamp < s && (d = l - 1);
                            if (d >= 0)
                              for (; d-- >= 0;) {
                                this._lateFrames++;
                                var h = this._decodedFrames.shift();
                                (this._log(
                                  "skipping already-decoded late frame at " + h.frameEndTimestamp,
                                ),
                                  (u = 1e3 * (h.frameEndTimestamp - s)),
                                  (this._frameEndTimestamp = h.frameEndTimestamp),
                                  (this._actualPerFrameTime = this._targetPerFrameTime - u),
                                  this._framesProcessed++,
                                  (h.dropped = !0),
                                  this._doFrameComplete(h));
                              }
                            var f = this._codec.nextKeyframeTimestamp,
                              p =
                                f -
                                (this._targetPerFrameTime / 1e3) *
                                  (this._framePipelineDepth + this._pendingFrame);
                            if (f >= 0 && f != this._codec.frameTimestamp && s >= p) {
                              this._log(
                                "skipping late frame at " +
                                  this._decodedFrames[0].frameEndTimestamp +
                                  " vs " +
                                  s +
                                  ", expect to see keyframe at " +
                                  f,
                              );
                              for (var m = 0; m < this._decodedFrames.length; m++) {
                                var g = this._decodedFrames[m];
                                (this._lateFrames++,
                                  this._framesProcessed++,
                                  (this._frameEndTimestamp = g.frameEndTimestamp),
                                  (u = 1e3 * (g.frameEndTimestamp - s)),
                                  (this._actualPerFrameTime = this._targetPerFrameTime - u),
                                  (g.dropped = !0),
                                  this._doFrameComplete(g));
                              }
                              this._decodedFrames = [];
                              for (var _ = 0; _ < this._pendingFrames.length; _++) {
                                var b = this._pendingFrames[_];
                                (this._lateFrames++,
                                  this._framesProcessed++,
                                  (this._frameEndTimestamp = b.frameEndTimestamp),
                                  (u = 1e3 * (b.frameEndTimestamp - s)),
                                  (this._actualPerFrameTime = this._targetPerFrameTime - u),
                                  (b.dropped = !0),
                                  this._doFrameComplete(b));
                              }
                              for (
                                this._pendingFrames = [], this._pendingFrame = 0;
                                this._codec.frameReady && this._codec.frameTimestamp < f;
                              ) {
                                var v = {
                                  frameEndTimestamp: this._codec.frameTimestamp,
                                  dropped: !0,
                                };
                                ((u = 1e3 * (v.frameEndTimestamp - s)),
                                  (this._actualPerFrameTime = this._targetPerFrameTime - u),
                                  this._lateFrames++,
                                  this._codec.discardFrame(function () {}),
                                  this._framesProcessed++,
                                  this._doFrameComplete(v));
                              }
                              return void (this._isProcessing() || this._pingProcessing());
                            }
                          } else (i && u <= 4) || (i = !1);
                        }
                        if (n) {
                          (this._log(
                            "play loop: ready to decode frame; thread depth: " +
                              this._pendingFrame +
                              ", have buffered: " +
                              this._decodedFrames.length,
                          ),
                            0 == this._videoInfo.fps &&
                              this._codec.frameTimestamp - this._frameEndTimestamp > 0 &&
                              (this._targetPerFrameTime =
                                1e3 * (this._codec.frameTimestamp - this._frameEndTimestamp)),
                            (this._totalFrameTime += this._targetPerFrameTime),
                            this._totalFrameCount++);
                          var y = (this._frameEndTimestamp = this._codec.frameTimestamp);
                          (this._pendingFrame++,
                            this._pendingFrames.push({ frameEndTimestamp: y }));
                          var w = this._pendingFrames,
                            V = !1,
                            x = this._time(function () {
                              e._codec.decodeFrame(function (t) {
                                w === e._pendingFrames
                                  ? (e._log("play loop callback: decoded frame"),
                                    e._pendingFrame--,
                                    e._pendingFrames.shift(),
                                    t
                                      ? e._decodedFrames.push({
                                          yCbCrBuffer: e._codec.frameBuffer,
                                          videoCpuTime: e._codec.videoCpuTime,
                                          frameEndTimestamp: y,
                                        })
                                      : e._log("Bad video packet or something"),
                                    e._codec.process(function () {
                                      e._isProcessing() || e._pingProcessing(V ? void 0 : 0);
                                    }))
                                  : e._log("play loop callback after flush, discarding");
                              });
                            });
                          this._pendingFrame &&
                            ((V = !0),
                            (this._proxyTime += x),
                            this._pingProcessing(),
                            this._dataEnded && this._codec.sync());
                        } else if (r) {
                          (this._log("play loop: ready for audio; depth: " + this._pendingAudio),
                            this._pendingAudio++);
                          var T = this._codec.audioTimestamp,
                            k = this._time(function () {
                              e._codec.decodeAudio(function (t) {
                                if (
                                  (e._pendingAudio--,
                                  e._log("play loop callback: decoded audio"),
                                  (e._audioEndTimestamp = T),
                                  t)
                                ) {
                                  var r = e._codec.audioBuffer;
                                  if (
                                    r &&
                                    ((e._bufferTime += e._time(function () {
                                      e._audioFeeder && e._audioFeeder.bufferData(r);
                                    })),
                                    !e._codec.hasVideo)
                                  ) {
                                    e._framesProcessed++;
                                    var i = { frameEndTimestamp: e._audioEndTimestamp };
                                    e._doFrameComplete(i);
                                  }
                                }
                                e._isProcessing() || e._pingProcessing();
                              });
                            });
                          this._pendingAudio &&
                            ((this._proxyTime += k),
                            this._codec.audioReady
                              ? this._pingProcessing()
                              : this._doProcessPlayDemux());
                        } else if (i) {
                          (this._log("play loop: ready to draw frame"),
                            this._nextFrameTimer &&
                              (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)),
                            this._thumbnail &&
                              (this.removeChild(this._thumbnail), (this._thumbnail = null)));
                          var E = this._decodedFrames.shift();
                          ((this._currentVideoCpuTime = E.videoCpuTime),
                            (this._drawingTime += this._time(function () {
                              e._drawFrame(E.yCbCrBuffer);
                            })),
                            this._framesProcessed++,
                            this._doFrameComplete(E),
                            this._pingProcessing());
                        } else if (
                          !this._decodedFrames.length ||
                          this._nextFrameTimer ||
                          this._prebufferingAudio
                        )
                          if (
                            this._dataEnded &&
                            !(
                              this._pendingAudio ||
                              this._pendingFrame ||
                              this._decodedFrames.length
                            )
                          ) {
                            this._log(
                              "play loop: playback reached end of data " +
                                [
                                  this._pendingAudio,
                                  this._pendingFrame,
                                  this._decodedFrames.length,
                                ],
                            );
                            var A = 0;
                            (this._codec.hasAudio &&
                              this._audioFeeder &&
                              (A = 1e3 * this._audioFeeder.durationBuffered),
                              A > 0
                                ? (this._log("play loop: ending pending " + A + " ms"),
                                  this._pingProcessing(Math.max(0, A)))
                                : (this._log(
                                    "play loop: ENDING NOW: playback time " +
                                      this._getPlaybackTime() +
                                      "; frameEndTimestamp: " +
                                      this._frameEndTimestamp,
                                  ),
                                  this._stopPlayback(),
                                  (this._prebufferingAudio = !1),
                                  (this._initialPlaybackOffset = Math.max(
                                    this._audioEndTimestamp,
                                    this._frameEndTimestamp,
                                  )),
                                  (this._ended = !0),
                                  (this._paused = !0),
                                  this._fireEventAsync("pause"),
                                  this._fireEventAsync("ended")));
                          } else
                            this._prebufferingAudio &&
                            ((t.hasVideo && !t.frameReady) || (t.hasAudio && !t.audioReady))
                              ? (this._log("play loop: prebuffering demuxing"),
                                this._doProcessPlayDemux())
                              : this._log("play loop: waiting on async/timers");
                        else {
                          var R = u;
                          (this._log("play loop: setting a timer for drawing " + R),
                            (this._nextFrameTimer = setTimeout(function () {
                              ((e._nextFrameTimer = null), e._pingProcessing());
                            }, R)));
                        }
                      } else (this._log("play loop: demuxing"), this._doProcessPlayDemux());
                    },
                  },
                  {
                    key: "_doProcessPlayDemux",
                    value: function () {
                      var e = this,
                        t = this._codec.frameReady,
                        r = this._codec.audioReady;
                      this._codec.process(function (i) {
                        (e._codec.frameReady && !t) || (e._codec.audioReady && !r)
                          ? (e._log("demuxer has packets"), e._pingProcessing())
                          : i
                            ? (e._log("demuxer processing to find more packets"),
                              e._pingProcessing())
                            : (e._log("demuxer ran out of data"),
                              e._streamEnded
                                ? (e._log("demuxer reached end of data stream"),
                                  (e._dataEnded = !0),
                                  e._pingProcessing())
                                : (e._log("demuxer loading more data"), e._readBytesAndWait()));
                      });
                    },
                  },
                  { key: "_doProcessError", value: function () {} },
                  {
                    key: "_isProcessing",
                    value: function () {
                      return (
                        (this._stream && (this._stream.buffering || this._stream.seeking)) ||
                        (this._codec && this._codec.processing)
                      );
                    },
                  },
                  {
                    key: "_readBytesAndWait",
                    value: function () {
                      var e = this;
                      this._stream.buffering || this._stream.seeking
                        ? this._log("readBytesAndWait during i/o")
                        : this._stream
                            .read(32768)
                            .then(function (t) {
                              (e._log("got input " + [t.byteLength]),
                                t.byteLength &&
                                  e._actionQueue.push(function () {
                                    e._codec.receiveInput(t, function () {
                                      e._pingProcessing();
                                    });
                                  }),
                                e._stream.eof &&
                                  (e._log("stream is at end!"), (e._streamEnded = !0)),
                                e._isProcessing() || e._pingProcessing());
                            })
                            .catch(function (t) {
                              e._onStreamError(t);
                            });
                    },
                  },
                  {
                    key: "_pingProcessing",
                    value: function () {
                      var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                      this._stream && this._stream.waiting
                        ? this._log("waiting on input")
                        : (this._nextProcessingTimer &&
                            (this._log("canceling old processing timer"),
                            clearTimeout(this._nextProcessingTimer),
                            (this._nextProcessingTimer = null)),
                          t > -1 / 256
                            ? (this._nextProcessingTimer = setTimeout(function () {
                                e._pingProcessing();
                              }, t))
                            : this._depth
                              ? (this._needProcessing = !0)
                              : this._doProcessing());
                    },
                  },
                  {
                    key: "_startProcessingVideo",
                    value: function (e) {
                      var t = this;
                      if (!this._started && !this._codec) {
                        ((this._framesProcessed = 0),
                          (this._bufferTime = 0),
                          (this._drawingTime = 0),
                          (this._proxyTime = 0),
                          (this._started = !0),
                          (this._ended = !1));
                        var r = {
                          base: this._options.base,
                          worker: this._enableWorker,
                          threading: this._enableThreading,
                          simd: this._enableSIMD,
                        };
                        (this._detectedType && (r.type = this._detectedType),
                          (this._codec = new w.default(r)),
                          (this._lastVideoCpuTime = 0),
                          (this._lastAudioCpuTime = 0),
                          (this._lastDemuxerCpuTime = 0),
                          (this._lastBufferTime = 0),
                          (this._lastDrawingTime = 0),
                          (this._lastProxyTime = 0),
                          (this._lastFrameVideoCpuTime = 0),
                          (this._lastFrameAudioCpuTime = 0),
                          (this._lastFrameDemuxerCpuTime = 0),
                          (this._lastFrameBufferTime = 0),
                          (this._lastFrameProxyTime = 0),
                          (this._lastFrameDrawingTime = 0),
                          (this._currentVideoCpuTime = 0),
                          (this._codec.onseek = function (e) {
                            ((t._didSeek = !0), t._stream && t._seekStream(e));
                          }),
                          this._codec.init(function () {
                            t._codec.receiveInput(e, function () {
                              t._readBytesAndWait();
                            });
                          }));
                      }
                    },
                  },
                  {
                    key: "_loadCodec",
                    value: function (e) {
                      var t = this;
                      this._stream.read(1024).then(function (r) {
                        var i = new Uint8Array(r);
                        (i.length > 4 && 79 == i[0] && 103 == i[1] && 103 == i[2] && 83 == i[3]
                          ? (t._detectedType = "video/ogg")
                          : i.length > 4 && 26 == i[0] && 69 == i[1] && 223 == i[2] && 163 == i[3]
                            ? (t._detectedType = "video/webm")
                            : (t._detectedType = "video/ogg"),
                          e(r));
                      });
                    },
                  },
                  {
                    key: "_prepForLoad",
                    value: function (e) {
                      var t = this;
                      (this._stopVideo(),
                        (this._currentSrc = ""),
                        (this._loading = !0),
                        this._actionQueue.push(function () {
                          e && "none" === t.preload
                            ? (t._loading = !1)
                            : (t._options.stream
                                ? (t._stream = t._options.stream)
                                : (t._stream = new f.default({
                                    url: t.src,
                                    cacheSize: 0x1000000,
                                    progressive: !1,
                                  })),
                              t._stream
                                .load()
                                .then(function () {
                                  ((t._loading = !1),
                                    (t._currentSrc = t.src),
                                    (t._byteLength = t._stream.seekable ? t._stream.length : 0));
                                  var e = t._stream.headers["x-content-duration"];
                                  ("string" == typeof e && (t._duration = parseFloat(e)),
                                    t._loadCodec(function (e) {
                                      t._startProcessingVideo(e);
                                    }));
                                })
                                .catch(function (e) {
                                  t._onStreamError(e);
                                }));
                        }),
                        this._pingProcessing(0));
                    },
                  },
                  {
                    key: "load",
                    value: function () {
                      this._prepForLoad();
                    },
                  },
                  {
                    key: "canPlayType",
                    value: function (e) {
                      var t = new v.default(e);
                      function r(e) {
                        if (t.codecs) {
                          var r = 0,
                            i = 0;
                          return (
                            t.codecs.forEach(function (t) {
                              e.indexOf(t) >= 0 ? r++ : i++;
                            }),
                            0 === r || i > 0 ? "" : "probably"
                          );
                        }
                        return "maybe";
                      }
                      return "ogg" !== t.minor ||
                        ("audio" !== t.major && "video" !== t.major && "application" !== t.major)
                        ? "webm" !== t.minor || ("audio" !== t.major && "video" !== t.major)
                          ? ""
                          : r(["vorbis", "opus", "vp8", "vp9"])
                        : r(["vorbis", "opus", "theora"]);
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      (this._muted || this._options.audioContext || i.initSharedAudioContext(),
                        this._paused &&
                          ((this._startedPlaybackInDocument = document.body.contains(this)),
                          (this._paused = !1),
                          this._state == I ||
                            (this._started && this._codec && this._codec.loadedMetadata
                              ? (this._ended && this._stream && this._byteLength
                                  ? (this._log(".play() starting over after end"), this._seek(0))
                                  : this._log(".play() while already started"),
                                (this._state = P),
                                this._isProcessing() || this._pingProcessing())
                              : this._loading
                                ? this._log(".play() while loading")
                                : (this._log(".play() before started"),
                                  this._stream || this.load()))));
                    },
                  },
                  {
                    key: "getPlaybackStats",
                    value: function () {
                      return {
                        targetPerFrameTime: this._targetPerFrameTime,
                        framesProcessed: this._framesProcessed,
                        videoBytes: this._codec ? this._codec.videoBytes : 0,
                        audioBytes: this._codec ? this._codec.audioBytes : 0,
                        playTime: this._playTime,
                        demuxingTime: this._codec
                          ? this._codec.demuxerCpuTime - this._lastDemuxerCpuTime
                          : 0,
                        videoDecodingTime: this._codec
                          ? this._codec.videoCpuTime - this._lastVideoCpuTime
                          : 0,
                        audioDecodingTime: this._codec
                          ? this._codec.audioCpuTime - this._lastAudioCpuTime
                          : 0,
                        bufferTime: this._bufferTime - this._lastBufferTime,
                        drawingTime: this._drawingTime - this._lastDrawingTime,
                        proxyTime: this._proxyTime - this._lastProxyTime,
                        droppedAudio: this._droppedAudio,
                        delayedAudio: this._delayedAudio,
                        jitter: this._totalJitter / this._framesProcessed,
                        lateFrames: this._lateFrames,
                      };
                    },
                  },
                  {
                    key: "resetPlaybackStats",
                    value: function () {
                      ((this._framesProcessed = 0),
                        (this._playTime = 0),
                        this._codec &&
                          ((this._lastDemuxerCpuTime = this._codec.demuxerCpuTime),
                          (this._lastVideoCpuTime = this._codec.videoCpuTime),
                          (this._lastAudioCpuTime = this._codec.audioCpuTime),
                          (this._codec.videoBytes = 0),
                          (this._codec.audioBytes = 0)),
                        (this._lastBufferTime = this._bufferTime),
                        (this._lastDrawingTime = this._drawingTime),
                        (this._lastProxyTime = this._proxyTime),
                        (this._totalJitter = 0),
                        (this._totalFrameTime = 0),
                        (this._totalFrameCount = 0));
                    },
                  },
                  {
                    key: "getVideoFrameSink",
                    value: function () {
                      return this._frameSink;
                    },
                  },
                  {
                    key: "getCanvas",
                    value: function () {
                      return this._canvas;
                    },
                  },
                  {
                    key: "getVideo",
                    value: function () {
                      return null;
                    },
                  },
                  {
                    key: "pause",
                    value: function () {
                      this._paused ||
                        (this._nextProcessingTimer &&
                          (clearTimeout(this._nextProcessingTimer),
                          (this._nextProcessingTimer = null)),
                        this._stopPlayback(),
                        (this._prebufferingAudio = !1),
                        (this._paused = !0),
                        this._fireEvent("pause"));
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      (this._stopVideo(), (this._paused = !0));
                    },
                  },
                  {
                    key: "fastSeek",
                    value: function (e) {
                      this._seek(+e, F);
                    },
                  },
                ],
                [
                  {
                    key: "initSharedAudioContext",
                    value: function () {
                      var e = document.createElement("audio");
                      ((e.src = V.default), e.play(), p.default.initSharedAudioContext());
                    },
                  },
                ],
              ),
              i
            );
          })(M);
          ((0, _.default)(j, T),
            (j.instanceCount = 0),
            (j.styleManager = new (function () {
              var e = document.createElement("style");
              ((e.type = "text/css"),
                (e.textContent =
                  "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                document.head.appendChild(e));
              var t = e.sheet;
              this.appendRule = function (e, r) {
                var i = [];
                for (var n in r) r.hasOwnProperty(n) && i.push(n + ":" + r[n]);
                var o = e + "{" + i.join(";") + "}";
                t.insertRule(o, t.cssRules.length - 1);
              };
            })()),
            (t.default = j));
        },
        580: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913));
          t.default = function (e) {
            function t(r, i, o) {
              var s = this;
              for (var a in ((0, n.default)(this, t),
              (o = o || {}),
              (this.worker = r),
              (this.transferables = (function () {
                var e = new ArrayBuffer(1024),
                  t = new Uint8Array(e);
                try {
                  return (r.postMessage({ action: "transferTest", bytes: t }, [e]), !e.byteLength);
                } catch (e) {
                  return !1;
                }
              })()),
              e))
                e.hasOwnProperty(a) && (this[a] = e[a]);
              ((this.processingQueue = 0),
                Object.defineProperty(this, "processing", {
                  get: function () {
                    return this.processingQueue > 0;
                  },
                }),
                (this.messageCount = 0),
                (this.pendingCallbacks = {}),
                this.worker.addEventListener("message", function (e) {
                  s.handleMessage(e);
                }),
                this.proxy("construct", [i, o], function () {}));
            }
            return (
              (0, o.default)(t, [
                {
                  key: "proxy",
                  value: function (e, t, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    if (!this.worker)
                      throw 'Tried to call "' + e + '" method on closed proxy object';
                    var n = "callback-" + ++this.messageCount + "-" + e;
                    r && (this.pendingCallbacks[n] = r);
                    var o = { action: e, callbackId: n, args: t || [] };
                    (this.processingQueue++,
                      this.transferables
                        ? this.worker.postMessage(o, i)
                        : this.worker.postMessage(o));
                  },
                },
                {
                  key: "terminate",
                  value: function () {
                    this.worker &&
                      (this.worker.terminate(),
                      (this.worker = null),
                      (this.processingQueue = 0),
                      (this.pendingCallbacks = {}));
                  },
                },
                {
                  key: "handleMessage",
                  value: function (e) {
                    if ((this.processingQueue--, "callback" === e.data.action)) {
                      var t = e.data,
                        r = t.callbackId,
                        i = t.args,
                        n = this.pendingCallbacks[r];
                      if (t.props)
                        for (var o in t.props) t.props.hasOwnProperty(o) && (this[o] = t.props[o]);
                      n && (delete this.pendingCallbacks[r], n.apply(this, i));
                    }
                  },
                },
              ]),
              t
            );
          };
        },
        168: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913));
          t.default = (function () {
            function e(t) {
              ((0, n.default)(this, e), (this._ranges = t), (this.length = t.length));
            }
            return (
              (0, o.default)(e, [
                {
                  key: "start",
                  value: function (e) {
                    if (e < 0 || e > this.length || e !== (0 | e))
                      throw RangeError("Invalid index");
                    return this._ranges[e][0];
                  },
                },
                {
                  key: "end",
                  value: function (e) {
                    if (e < 0 || e > this.length || e !== (0 | e))
                      throw RangeError("Invalid index");
                    return this._ranges[e][1];
                  },
                },
              ]),
              e
            );
          })();
        },
        625: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(575)),
            o = i(r(913)),
            s = i(r(964));
          function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
            return i;
          }
          t.default = (function () {
            function e(t) {
              return (
                (0, n.default)(this, e),
                (this.options = t || {}),
                (this.demuxer = null),
                (this.videoDecoder = null),
                (this.audioDecoder = null),
                (this.flushIter = 0),
                (this.loadedMetadata = !1),
                (this.processing = !1),
                Object.defineProperties(this, {
                  duration: {
                    get: function () {
                      return this.loadedMetadata ? this.demuxer.duration : NaN;
                    },
                  },
                  hasAudio: {
                    get: function () {
                      return this.loadedMetadata && !!this.audioDecoder;
                    },
                  },
                  audioReady: {
                    get: function () {
                      return this.hasAudio && this.demuxer.audioReady;
                    },
                  },
                  audioTimestamp: {
                    get: function () {
                      return this.demuxer.audioTimestamp;
                    },
                  },
                  audioFormat: {
                    get: function () {
                      return this.hasAudio ? this.audioDecoder.audioFormat : null;
                    },
                  },
                  audioBuffer: {
                    get: function () {
                      return this.hasAudio ? this.audioDecoder.audioBuffer : null;
                    },
                  },
                  hasVideo: {
                    get: function () {
                      return this.loadedMetadata && !!this.videoDecoder;
                    },
                  },
                  frameReady: {
                    get: function () {
                      return this.hasVideo && this.demuxer.frameReady;
                    },
                  },
                  frameTimestamp: {
                    get: function () {
                      return this.demuxer.frameTimestamp;
                    },
                  },
                  keyframeTimestamp: {
                    get: function () {
                      return this.demuxer.keyframeTimestamp;
                    },
                  },
                  nextKeyframeTimestamp: {
                    get: function () {
                      return this.demuxer.nextKeyframeTimestamp;
                    },
                  },
                  videoFormat: {
                    get: function () {
                      return this.hasVideo ? this.videoDecoder.videoFormat : null;
                    },
                  },
                  frameBuffer: {
                    get: function () {
                      return this.hasVideo ? this.videoDecoder.frameBuffer : null;
                    },
                  },
                  seekable: {
                    get: function () {
                      return this.demuxer.seekable;
                    },
                  },
                  demuxerCpuTime: {
                    get: function () {
                      return this.demuxer ? this.demuxer.cpuTime : 0;
                    },
                  },
                  audioCpuTime: {
                    get: function () {
                      return this.audioDecoder ? this.audioDecoder.cpuTime : 0;
                    },
                  },
                  videoCpuTime: {
                    get: function () {
                      return this.videoDecoder ? this.videoDecoder.cpuTime : 0;
                    },
                  },
                }),
                (this.loadedDemuxerMetadata = !1),
                (this.loadedAudioMetadata = !1),
                (this.loadedVideoMetadata = !1),
                (this.loadedAllMetadata = !1),
                (this.onseek = null),
                (this.videoBytes = 0),
                (this.audioBytes = 0),
                this
              );
            }
            return (
              (0, o.default)(e, [
                {
                  key: "flushSafe",
                  value: function (e) {
                    var t = this,
                      r = this.flushIter;
                    return function (i) {
                      t.flushIter <= r && e(i);
                    };
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t,
                      r = this;
                    ((this.processing = !0),
                      (t =
                        "video/webm" === this.options.type || "audio/webm" === this.options.type
                          ? "OGVDemuxerWebMW"
                          : "OGVDemuxerOggW"),
                      s.default.loadClass(t, function (t) {
                        t().then(function (t) {
                          ((r.demuxer = t),
                            (t.onseek = function (e) {
                              r.onseek && r.onseek(e);
                            }),
                            t.init(function () {
                              ((r.processing = !1), e());
                            }));
                        });
                      }));
                  },
                },
                {
                  key: "close",
                  value: function () {
                    (this.demuxer && (this.demuxer.close(), (this.demuxer = null)),
                      this.videoDecoder && (this.videoDecoder.close(), (this.videoDecoder = null)),
                      this.audioDecoder && (this.audioDecoder.close(), (this.audioDecoder = null)));
                  },
                },
                {
                  key: "receiveInput",
                  value: function (e, t) {
                    this.demuxer.receiveInput(e, t);
                  },
                },
                {
                  key: "process",
                  value: function (e) {
                    var t = this;
                    if (this.processing) throw Error("reentrancy fail on OGVWrapperCodec.process");
                    this.processing = !0;
                    var r = function (r) {
                        ((t.processing = !1), e(r));
                      },
                      i = function () {
                        t.demuxer.process(r);
                      };
                    this.demuxer.loadedMetadata && !this.loadedDemuxerMetadata
                      ? this.loadAudioCodec(function () {
                          t.loadVideoCodec(function () {
                            ((t.loadedDemuxerMetadata = !0),
                              (t.loadedAudioMetadata = !t.audioDecoder),
                              (t.loadedVideoMetadata = !t.videoDecoder),
                              (t.loadedAllMetadata =
                                t.loadedAudioMetadata && t.loadedVideoMetadata),
                              r(!0));
                          });
                        })
                      : this.loadedDemuxerMetadata && !this.loadedAudioMetadata
                        ? this.audioDecoder.loadedMetadata
                          ? ((this.loadedAudioMetadata = !0),
                            (this.loadedAllMetadata =
                              this.loadedAudioMetadata && this.loadedVideoMetadata),
                            r(!0))
                          : this.demuxer.audioReady
                            ? this.demuxer.dequeueAudioPacket(function (e, i) {
                                ((t.audioBytes += e.byteLength),
                                  t.audioDecoder.processHeader(e, function (e) {
                                    r(!0);
                                  }));
                              })
                            : i()
                        : this.loadedAudioMetadata && !this.loadedVideoMetadata
                          ? this.videoDecoder.loadedMetadata
                            ? ((this.loadedVideoMetadata = !0),
                              (this.loadedAllMetadata =
                                this.loadedAudioMetadata && this.loadedVideoMetadata),
                              r(!0))
                            : this.demuxer.frameReady
                              ? ((this.processing = !0),
                                this.demuxer.dequeueVideoPacket(function (e) {
                                  ((t.videoBytes += e.byteLength),
                                    t.videoDecoder.processHeader(e, function () {
                                      r(!0);
                                    }));
                                }))
                              : i()
                          : this.loadedVideoMetadata &&
                              !this.loadedMetadata &&
                              this.loadedAllMetadata
                            ? ((this.loadedMetadata = !0), r(!0))
                            : this.loadedMetadata &&
                                (!this.hasAudio || this.demuxer.audioReady) &&
                                (!this.hasVideo || this.demuxer.frameReady)
                              ? r(!0)
                              : i();
                  },
                },
                {
                  key: "decodeFrame",
                  value: function (e) {
                    var t = this,
                      r = this.flushSafe(e),
                      i = this.frameTimestamp,
                      n = this.keyframeTimestamp;
                    this.demuxer.dequeueVideoPacket(function (e) {
                      ((t.videoBytes += e.byteLength),
                        t.videoDecoder.processFrame(e, function (e) {
                          var o = t.videoDecoder.frameBuffer;
                          (o && ((o.timestamp = i), (o.keyframeTimestamp = n)), r(e));
                        }));
                    });
                  },
                },
                {
                  key: "decodeAudio",
                  value: function (e) {
                    var t = this,
                      r = this.flushSafe(e);
                    this.demuxer.dequeueAudioPacket(function (e, i) {
                      ((t.audioBytes += e.byteLength),
                        t.audioDecoder.processAudio(e, function (e) {
                          if (i) {
                            var n,
                              o = [],
                              s = (function (e) {
                                var t =
                                  ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (!t) {
                                  if (
                                    Array.isArray(e) ||
                                    (t = (function (e) {
                                      if (e) {
                                        if ("string" == typeof e) return a(e, void 0);
                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                        if (
                                          ("Object" === t &&
                                            e.constructor &&
                                            (t = e.constructor.name),
                                          "Map" === t || "Set" === t)
                                        )
                                          return Array.from(e);
                                        if (
                                          "Arguments" === t ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                        )
                                          return a(e, void 0);
                                      }
                                    })(e))
                                  ) {
                                    t && (e = t);
                                    var r = 0,
                                      i = function () {};
                                    return {
                                      s: i,
                                      n: function () {
                                        return r >= e.length
                                          ? { done: !0 }
                                          : { done: !1, value: e[r++] };
                                      },
                                      e: function (e) {
                                        throw e;
                                      },
                                      f: i,
                                    };
                                  }
                                  throw TypeError(
                                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                  );
                                }
                                var n,
                                  o = !0,
                                  s = !1;
                                return {
                                  s: function () {
                                    t = t.call(e);
                                  },
                                  n: function () {
                                    var e = t.next();
                                    return ((o = e.done), e);
                                  },
                                  e: function (e) {
                                    ((s = !0), (n = e));
                                  },
                                  f: function () {
                                    try {
                                      o || null == t.return || t.return();
                                    } finally {
                                      if (s) throw n;
                                    }
                                  },
                                };
                              })(t.audioDecoder.audioBuffer);
                            try {
                              for (s.s(); !(n = s.n()).done;) {
                                var u = n.value,
                                  c = Math.round((i * t.audioFormat.rate) / 1e9);
                                c > 0
                                  ? o.push(u.subarray(0, u.length - Math.min(c, u.length)))
                                  : o.push(u.subarray(Math.min(Math.abs(c), u.length), u.length));
                              }
                            } catch (e) {
                              s.e(e);
                            } finally {
                              s.f();
                            }
                            t.audioDecoder.audioBuffer = o;
                          }
                          return r(e);
                        }));
                    });
                  },
                },
                {
                  key: "discardFrame",
                  value: function (e) {
                    var t = this;
                    this.demuxer.dequeueVideoPacket(function (r) {
                      ((t.videoBytes += r.byteLength), e());
                    });
                  },
                },
                {
                  key: "discardAudio",
                  value: function (e) {
                    var t = this;
                    this.demuxer.dequeueAudioPacket(function (r, i) {
                      ((t.audioBytes += r.byteLength), e());
                    });
                  },
                },
                {
                  key: "flush",
                  value: function (e) {
                    (this.flushIter++, this.demuxer.flush(e));
                  },
                },
                {
                  key: "sync",
                  value: function () {
                    this.videoDecoder && this.videoDecoder.sync();
                  },
                },
                {
                  key: "recycleFrame",
                  value: function (e) {
                    this.videoDecoder && this.videoDecoder.recycleFrame(e);
                  },
                },
                {
                  key: "getKeypointOffset",
                  value: function (e, t) {
                    this.demuxer.getKeypointOffset(e, t);
                  },
                },
                {
                  key: "seekToKeypoint",
                  value: function (e, t) {
                    this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                  },
                },
                {
                  key: "loadAudioCodec",
                  value: function (e) {
                    var t = this;
                    if (this.demuxer.audioCodec) {
                      var r = { vorbis: "OGVDecoderAudioVorbisW", opus: "OGVDecoderAudioOpusW" }[
                        this.demuxer.audioCodec
                      ];
                      ((this.processing = !0),
                        s.default.loadClass(
                          r,
                          function (r) {
                            var i = {};
                            (t.demuxer.audioFormat && (i.audioFormat = t.demuxer.audioFormat),
                              r(i).then(function (r) {
                                ((t.audioDecoder = r),
                                  r.init(function () {
                                    ((t.loadedAudioMetadata = r.loadedMetadata),
                                      (t.processing = !1),
                                      e());
                                  }));
                              }));
                          },
                          { worker: this.options.worker },
                        ));
                    } else e();
                  },
                },
                {
                  key: "loadVideoCodec",
                  value: function (e) {
                    var t = this;
                    if (this.demuxer.videoCodec) {
                      var r = !!this.options.simd,
                        i = !!this.options.threading,
                        n = {
                          theora: "OGVDecoderVideoTheoraW",
                          vp8: i ? "OGVDecoderVideoVP8MTW" : "OGVDecoderVideoVP8W",
                          vp9: i
                            ? r
                              ? "OGVDecoderVideoVP9SIMDMTW"
                              : "OGVDecoderVideoVP9MTW"
                            : r
                              ? "OGVDecoderVideoVP9SIMDW"
                              : "OGVDecoderVideoVP9W",
                          av1: i
                            ? r
                              ? "OGVDecoderVideoAV1SIMDMTW"
                              : "OGVDecoderVideoAV1MTW"
                            : r
                              ? "OGVDecoderVideoAV1SIMDW"
                              : "OGVDecoderVideoAV1W",
                        }[this.demuxer.videoCodec];
                      ((this.processing = !0),
                        s.default.loadClass(
                          n,
                          function (r) {
                            var n = {};
                            (t.demuxer.videoFormat && (n.videoFormat = t.demuxer.videoFormat),
                              i && delete window.ENVIRONMENT_IS_PTHREAD,
                              r(n).then(function (r) {
                                ((t.videoDecoder = r),
                                  r.init(function () {
                                    ((t.loadedVideoMetadata = r.loadedMetadata),
                                      (t.processing = !1),
                                      e());
                                  }));
                              }));
                          },
                          { worker: this.options.worker && !this.options.threading },
                        ));
                    } else e();
                  },
                },
              ]),
              e
            );
          })();
        },
        539: (e, t, r) => {
          "use strict";
          var i = r(318);
          (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
          var n = i(r(8)),
            o = i(r(575)),
            s = i(r(913));
          t.default = new ((function () {
            function e() {
              ((0, o.default)(this, e), (this.tested = !1), (this.testResult = void 0));
            }
            return (
              (0, s.default)(e, [
                {
                  key: "wasmSupported",
                  value: function () {
                    if (!this.tested) {
                      try {
                        var e, t;
                        "object" ===
                        ("u" < typeof WebAssembly ? "undefined" : (0, n.default)(WebAssembly))
                          ? (this.testResult =
                              ((e = new Uint8Array([
                                0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1,
                                0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1,
                                14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11,
                              ])),
                              (t = new WebAssembly.Module(e)),
                              0 !== new WebAssembly.Instance(t, {}).exports.test(4)))
                          : (this.testResult = !1);
                      } catch (e) {
                        (console.log("Exception while testing WebAssembly", e),
                          (this.testResult = !1));
                      }
                      this.tested = !0;
                    }
                    return this.testResult;
                  },
                },
              ]),
              e
            );
          })())();
        },
        309: (e, t) => {
          "use strict";
          (Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0),
            (t.default = function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }));
        },
        431: (e, t, r) => {
          "use strict";
          var i = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  ((i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i));
                }
              }
              return function (t, r, i) {
                return (r && e(t.prototype, r), i && e(t, i), t);
              };
            })(),
            n = function e(t, r, i) {
              null === t && (t = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i);
              }
              if ("value" in n) return n.value;
              var s = n.get;
              return void 0 !== s ? s.call(i) : void 0;
            },
            o = r(828),
            s = "arraybuffer",
            a = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                  })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function, not " + typeof t,
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                })(t, e),
                i(t, [
                  {
                    key: "initXHR",
                    value: function () {
                      (n(
                        t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                        "initXHR",
                        this,
                      ).call(this),
                        (this.xhr.responseType = s));
                    },
                  },
                  { key: "onXHRProgress", value: function () {} },
                  {
                    key: "onXHRLoad",
                    value: function () {
                      var e = this.xhr.response;
                      ((this.bytesRead += e.byteLength),
                        this.emit("buffer", e),
                        n(
                          t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                          "onXHRLoad",
                          this,
                        ).call(this));
                    },
                  },
                ]),
                t
              );
            })(o);
          ((a.supported = function () {
            try {
              var e = new XMLHttpRequest();
              return ((e.responseType = s), e.responseType === s);
            } catch (e) {
              return !1;
            }
          }),
            (e.exports = a));
        },
        306: (e, t, r) => {
          "use strict";
          var i = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                ((i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i));
              }
            }
            return function (t, r, i) {
              return (r && e(t.prototype, r), i && e(t, i), t);
            };
          })();
          function n(e) {
            var t = e.getResponseHeader("Content-Range");
            return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
          }
          e.exports = (function (e) {
            function t(e) {
              var r = e.url,
                i = e.offset,
                n = e.length,
                o = e.cachever;
              if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
              var s = (function (e, t) {
                if (!e)
                  throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
              return (
                (s.url = r),
                (s.offset = i),
                (s.length = n),
                (s.cachever = void 0 === o ? 0 : o),
                (s.loaded = !1),
                (s.seekable = !1),
                (s.headers = {}),
                (s.eof = !1),
                (s.bytesRead = 0),
                (s.xhr = new XMLHttpRequest()),
                s
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " + typeof t,
                  );
                ((e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                })),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
              })(t, e),
              i(t, [
                {
                  key: "load",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      var i = null;
                      e._onAbort = function (e) {
                        (i(), r(e));
                      };
                      var o = function () {
                          if (2 == e.xhr.readyState) {
                            if (206 == e.xhr.status) {
                              var o,
                                s,
                                a,
                                u = (a = n(e.xhr)) ? parseInt(a[1], 10) : 0;
                              if (e.offset != u)
                                return (
                                  console.log(
                                    "Expected start at " +
                                      e.offset +
                                      " but got " +
                                      u +
                                      "; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672",
                                  ),
                                  e.cachever++,
                                  e.emit("cachever"),
                                  e.abort(),
                                  i(),
                                  void e.load().then(t).catch(r)
                                );
                              e.seekable = !0;
                            }
                            e.xhr.status >= 200 && e.xhr.status < 300
                              ? ((e.length = (function (e) {
                                  if (206 == e.status) {
                                    var t;
                                    return (t = n(e)) ? parseInt(t[3], 10) : -1;
                                  }
                                  var r = e.getResponseHeader("Content-Length");
                                  return null === r || "" === r ? -1 : parseInt(r, 10);
                                })(e.xhr)),
                                (o = e.xhr),
                                (s = {}),
                                o
                                  .getAllResponseHeaders()
                                  .split(/\r?\n/)
                                  .forEach(function (e) {
                                    var t = e.split(/:\s*/, 2);
                                    t.length > 1 && (s[t[0].toLowerCase()] = t[1]);
                                  }),
                                (e.headers = s),
                                e.onXHRStart())
                              : (i(), r(Error("HTTP error " + e.xhr.status)));
                          }
                        },
                        s = function () {
                          (i(), r(Error("network error")));
                        },
                        a = function () {
                          (i(), t());
                        };
                      ((i = function () {
                        (e.xhr.removeEventListener("readystatechange", o),
                          e.xhr.removeEventListener("error", s),
                          e.off("open", a),
                          (e._onAbort = null));
                      }),
                        e.initXHR(),
                        e.xhr.addEventListener("readystatechange", o),
                        e.xhr.addEventListener("error", s),
                        e.on("open", a),
                        e.xhr.send());
                    });
                  },
                },
                {
                  key: "bufferToOffset",
                  value: function (e) {
                    return Promise.reject(Error("abstract"));
                  },
                },
                {
                  key: "abort",
                  value: function () {
                    if ((this.xhr.abort(), this._onAbort)) {
                      var e = this._onAbort;
                      this._onAbort = null;
                      var t = Error("Aborted");
                      ((t.name = "AbortError"), e(t));
                    }
                  },
                },
                {
                  key: "initXHR",
                  value: function () {
                    var e = this.url;
                    (this.cachever && (e += "?buggy_cachever=" + this.cachever),
                      this.xhr.open("GET", e));
                    var t = null;
                    ((this.offset || this.length) && (t = "bytes=" + this.offset + "-"),
                      this.length && (t += this.offset + this.length - 1),
                      null !== t && this.xhr.setRequestHeader("Range", t));
                  },
                },
                {
                  key: "onXHRStart",
                  value: function () {
                    throw Error("abstract");
                  },
                },
              ]),
              t
            );
          })(r(566));
        },
        810: (e, t, r) => {
          "use strict";
          var i = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  ((i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i));
                }
              }
              return function (t, r, i) {
                return (r && e(t.prototype, r), i && e(t, i), t);
              };
            })(),
            n = function e(t, r, i) {
              null === t && (t = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i);
              }
              if ("value" in n) return n.value;
              var s = n.get;
              return void 0 !== s ? s.call(i) : void 0;
            },
            o = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                  })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function, not " + typeof t,
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                })(t, e),
                i(t, [
                  {
                    key: "initXHR",
                    value: function () {
                      (n(
                        t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                        "initXHR",
                        this,
                      ).call(this),
                        (this.xhr.responseType = "text"),
                        this.xhr.overrideMimeType("text/plain; charset=x-user-defined"));
                    },
                  },
                  {
                    key: "onXHRProgress",
                    value: function () {
                      var e = this.xhr.responseText.slice(this.bytesRead);
                      e.length > 0 && ((this.bytesRead += e.length), this.emit("buffer", e));
                    },
                  },
                  {
                    key: "onXHRLoad",
                    value: function () {
                      (this.onXHRProgress(),
                        n(
                          t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                          "onXHRLoad",
                          this,
                        ).call(this));
                    },
                  },
                ]),
                t
              );
            })(r(828));
          ((o.supported = function () {
            try {
              return !!new XMLHttpRequest().overrideMimeType;
            } catch (e) {
              return !1;
            }
          }),
            (e.exports = o));
        },
        828: (e, t, r) => {
          "use strict";
          var i = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  ((i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i));
                }
              }
              return function (t, r, i) {
                return (r && e(t.prototype, r), i && e(t, i), t);
              };
            })(),
            n = function e(t, r, i) {
              null === t && (t = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i);
              }
              if ("value" in n) return n.value;
              var s = n.get;
              return void 0 !== s ? s.call(i) : void 0;
            };
          e.exports = (function (e) {
            function t() {
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                })(this, t),
                (function (e, t) {
                  if (!e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " + typeof t,
                  );
                ((e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                })),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
              })(t, e),
              i(t, [
                {
                  key: "bufferToOffset",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, i) {
                      if (t.eof || t.offset >= e) r();
                      else {
                        var n = null;
                        t._onAbort = function (e) {
                          (n(), i(e));
                        };
                        var o = function () {
                            t.offset >= e && !t.eof && (n(), r());
                          },
                          s = function () {
                            (n(), r());
                          },
                          a = function () {
                            (n(), i(Error("error streaming")));
                          };
                        ((n = function () {
                          ((t.buffering = !1),
                            t.off("buffer", o),
                            t.off("done", s),
                            t.off("error", a),
                            (t._onAbort = null));
                        }),
                          (t.buffering = !0),
                          t.on("buffer", o),
                          t.on("done", s),
                          t.on("error", a));
                      }
                    });
                  },
                },
                {
                  key: "initXHR",
                  value: function () {
                    n(
                      t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                      "initXHR",
                      this,
                    ).call(this);
                  },
                },
                {
                  key: "onXHRStart",
                  value: function () {
                    var e = this;
                    (this.xhr.addEventListener("progress", function () {
                      return e.onXHRProgress();
                    }),
                      this.xhr.addEventListener("error", function () {
                        return e.onXHRError();
                      }),
                      this.xhr.addEventListener("load", function () {
                        return e.onXHRLoad();
                      }),
                      this.emit("open"));
                  },
                },
                {
                  key: "onXHRProgress",
                  value: function () {
                    throw Error("abstract");
                  },
                },
                {
                  key: "onXHRError",
                  value: function () {
                    this.emit("error");
                  },
                },
                {
                  key: "onXHRLoad",
                  value: function () {
                    ((this.eof = !0), this.emit("done"));
                  },
                },
              ]),
              t
            );
          })(r(306));
        },
        761: (e, t, r) => {
          "use strict";
          var i = r(855),
            n = r(810),
            o = r(431),
            s = null;
          e.exports = function (e) {
            if (!1 === e.progressive) return new o(e);
            if ((s || (s = i.supported() ? i : n.supported() ? n : null), !s))
              throw Error("No supported backend class");
            return new s(e);
          };
        },
        855: (e, t, r) => {
          "use strict";
          var i = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  ((i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i));
                }
              }
              return function (t, r, i) {
                return (r && e(t.prototype, r), i && e(t, i), t);
              };
            })(),
            n = function e(t, r, i) {
              null === t && (t = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i);
              }
              if ("value" in n) return n.value;
              var s = n.get;
              return void 0 !== s ? s.call(i) : void 0;
            },
            o = r(828),
            s = "moz-chunked-arraybuffer",
            a = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                  })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function, not " + typeof t,
                    );
                  ((e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                })(t, e),
                i(t, [
                  {
                    key: "initXHR",
                    value: function () {
                      (n(
                        t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                        "initXHR",
                        this,
                      ).call(this),
                        (this.xhr.responseType = s));
                    },
                  },
                  {
                    key: "onXHRProgress",
                    value: function () {
                      var e = this.xhr.response;
                      ((this.bytesRead += e.byteLength), this.emit("buffer", e));
                    },
                  },
                ]),
                t
              );
            })(o);
          ((a.supported = function () {
            try {
              var e = new XMLHttpRequest();
              return ((e.responseType = s), e.responseType === s);
            } catch (e) {
              return !1;
            }
          }),
            (e.exports = a));
        },
        503: (e) => {
          "use strict";
          var t = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                ((i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i));
              }
            }
            return function (t, r, i) {
              return (r && e(t.prototype, r), i && e(t, i), t);
            };
          })();
          e.exports = (function () {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = t.buffer,
                i = void 0 === r ? void 0 : r,
                n = t.string,
                o = void 0 === n ? void 0 : n,
                s = t.start,
                a = void 0 === s ? 0 : s,
                u = t.end,
                c = void 0 === u ? a + (i ? i.byteLength : o ? o.length : 0) : u,
                d = t.prev,
                l = t.next,
                h = t.eof,
                f = t.empty,
                p = void 0 === f ? !(i || o) : f,
                m = t.timestamp,
                g = void 0 === m ? Date.now() : m;
              ((function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
              })(this, e),
                (this.start = a),
                (this.end = c),
                (this.prev = void 0 === d ? null : d),
                (this.next = void 0 === l ? null : l),
                (this.eof = void 0 !== h && h),
                (this.empty = p),
                (this.timestamp = g),
                (this.buffer = i),
                (this.string = o),
                Object.defineProperty(this, "length", {
                  get: function () {
                    return this.end - this.start;
                  },
                }));
            }
            return (
              t(e, [
                {
                  key: "contains",
                  value: function (e) {
                    return e >= this.start && (e < this.end || this.eof);
                  },
                },
                {
                  key: "readBytes",
                  value: function (e, t, r) {
                    var i = t - this.start,
                      n = r - t;
                    if (this.buffer) {
                      var o = new Uint8Array(this.buffer, i, n);
                      e.set(o);
                    } else {
                      if (!this.string) throw Error("invalid state");
                      for (var s = this.string, a = 0; a < n; a++) e[a] = s.charCodeAt(i + a);
                    }
                    this.timestamp = Date.now();
                  },
                },
                {
                  key: "split",
                  value: function (t) {
                    if (!this.empty || !this.contains(t)) throw Error("invalid split");
                    var r = new e({ start: this.start, end: t }),
                      i = new e({ start: t, end: this.eof ? t : this.end, eof: this.eof });
                    return ((r.next = i), (i.prev = r), [r, i]);
                  },
                },
                {
                  key: "first",
                  value: function (e) {
                    for (var t = this; t; t = t.next) if (e(t)) return t;
                    return null;
                  },
                },
                {
                  key: "last",
                  value: function (e) {
                    for (var t = null, r = this; r && e(r); r = r.next) t = r;
                    return t;
                  },
                },
              ]),
              e
            );
          })();
        },
        91: (e, t, r) => {
          "use strict";
          var i = (function () {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  ((i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i));
                }
              }
              return function (t, r, i) {
                return (r && e(t.prototype, r), i && e(t, i), t);
              };
            })(),
            n = r(503);
          e.exports = (function () {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = t.cacheSize;
              if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
              var i = new n({ eof: !0 });
              ((this.head = i),
                (this.tail = i),
                (this.readOffset = 0),
                (this.readCursor = i),
                (this.writeOffset = 0),
                (this.writeCursor = i),
                (this.cacheSize = void 0 === r ? 0 : r));
            }
            return (
              i(e, [
                {
                  key: "bytesReadable",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                      t = this.readOffset,
                      r = this.readCursor.last(function (r) {
                        return !r.empty && r.start <= t + e;
                      });
                    return r ? Math.min(e, r.end - t) : 0;
                  },
                },
                {
                  key: "bytesWritable",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                      t = this.writeOffset,
                      r = this.writeCursor;
                    if (r.eof) return e;
                    var i = r.last(function (r) {
                      return r.empty && r.start <= t + e;
                    });
                    return i ? Math.min(e, i.end - t) : 0;
                  },
                },
                {
                  key: "seekRead",
                  value: function (e) {
                    var t = this.head.first(function (t) {
                      return t.contains(e);
                    });
                    if (!t) throw Error("read seek out of range");
                    ((this.readOffset = e), (this.readCursor = t));
                  },
                },
                {
                  key: "seekWrite",
                  value: function (e) {
                    var t = this.head.first(function (t) {
                      return t.contains(e);
                    });
                    if (!t) throw Error("write seek out of range");
                    ((this.writeOffset = e), (this.writeCursor = t));
                  },
                },
                {
                  key: "readBytes",
                  value: function (e) {
                    for (
                      var t = e.byteLength,
                        r = this.bytesReadable(t),
                        i = this.readOffset,
                        n = i + r,
                        o = i,
                        s = this.readCursor;
                      s && !s.empty && !(s.start >= n);
                      s = s.next
                    ) {
                      var a = Math.min(n, s.end),
                        u = e.subarray(o - i, a - i);
                      (s.readBytes(u, o, a), (o = a));
                    }
                    return (
                      (this.readOffset = o),
                      (this.readCursor = this.readCursor.first(function (e) {
                        return e.contains(o);
                      })),
                      r
                    );
                  },
                },
                {
                  key: "write",
                  value: function (e) {
                    var t = this.bufferItem(e),
                      r = this.writeCursor;
                    if (!r.empty) throw Error("write cursor not empty");
                    if (!r.contains(t.end) && r.end !== t.end)
                      throw Error("write cursor too small");
                    (r.start < t.start && (this.split(r, t.start), (r = this.writeCursor)),
                      (t.end < r.end || r.eof) && (this.split(r, t.end), (r = this.writeCursor)),
                      this.splice(r, r, t, t),
                      (this.writeOffset = t.end),
                      (this.writeCursor = t.next),
                      this.gc());
                  },
                },
                {
                  key: "bufferItem",
                  value: function (e) {
                    if (e instanceof ArrayBuffer)
                      return new n({
                        start: this.writeOffset,
                        end: this.writeOffset + e.byteLength,
                        buffer: e,
                      });
                    if ("string" == typeof e)
                      return new n({
                        start: this.writeOffset,
                        end: this.writeOffset + e.length,
                        string: e,
                      });
                    throw Error("invalid input to write");
                  },
                },
                {
                  key: "split",
                  value: function (e, t) {
                    var r = e.split(t);
                    this.splice(e, e, r[0], r[1]);
                  },
                },
                {
                  key: "ranges",
                  value: function () {
                    for (var e = [], t = this.head; t; t = t.next)
                      if (!t.empty) {
                        var r = t;
                        ((t = t.last(function (e) {
                          return !e.empty;
                        })),
                          e.push([r.start, t.end]));
                      }
                    return e;
                  },
                },
                {
                  key: "gc",
                  value: function () {
                    for (var e = 0, t = [], r = this.head; r; r = r.next)
                      r.empty ||
                        ((e += r.length),
                        (r.end < this.readOffset || r.start > this.readOffset + this.chunkSize) &&
                          t.push(r));
                    if (e > this.cacheSize) {
                      t.sort(function (e, t) {
                        return e.timestamp - t.timestamp;
                      });
                      for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (e <= this.cacheSize) break;
                        (this.remove(n), (e -= n.length));
                      }
                    }
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = new n({ start: e.start, end: e.end });
                    (this.splice(e, e, t, t),
                      (e = t).prev && e.prev.empty && (e = this.consolidate(e.prev)),
                      e.next && e.next.empty && !e.next.eof && (e = this.consolidate(e)),
                      0 === e.start && (this.head = e));
                  },
                },
                {
                  key: "consolidate",
                  value: function (e) {
                    var t = e.last(function (e) {
                        return e.empty && !e.eof;
                      }),
                      r = new n({ start: e.start, end: t.end });
                    return (this.splice(e, t, r, r), r);
                  },
                },
                {
                  key: "splice",
                  value: function (e, t, r, i) {
                    var n = this;
                    if (e.start !== r.start) throw Error("invalid splice head");
                    if (!(t.end === i.end || (t.eof && i.eof))) throw Error("invalid splice tail");
                    var o = e.prev,
                      s = t.next;
                    ((e.prev = null),
                      (t.next = null),
                      o && ((o.next = r), (r.prev = o)),
                      s && ((s.prev = i), (i.next = s)),
                      e === this.head && (this.head = r),
                      t === this.tail && (this.tail = i),
                      (this.readCursor = this.head.first(function (e) {
                        return e.contains(n.readOffset);
                      })),
                      (this.writeCursor = this.head.first(function (e) {
                        return e.contains(n.writeOffset);
                      })));
                  },
                },
                {
                  key: "eof",
                  get: function () {
                    return this.readCursor.eof;
                  },
                },
              ]),
              e
            );
          })();
        },
        814: (e, t, r) => {
          "use strict";
          e.exports = r(91);
        },
        566: (e) => {
          "use strict";
          var t = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                ((i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i));
              }
            }
            return function (t, r, i) {
              return (r && e(t.prototype, r), i && e(t, i), t);
            };
          })();
          e.exports = (function () {
            function e() {
              (!(function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
              })(this, e),
                (this._e = {}));
            }
            return (
              t(e, [
                {
                  key: "on",
                  value: function (e, t) {
                    (this._e[e] || (this._e[e] = [])).push(t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    var r = this._e[e] || [],
                      i = r.indexOf(t);
                    t >= 0 && r.splice(i, 1);
                  },
                },
                {
                  key: "emit",
                  value: function (e, t) {
                    (this._e[e] || []).slice().forEach(function (e) {
                      return e(t);
                    });
                  },
                },
              ]),
              e
            );
          })();
        },
        936: (e, t, r) => {
          "use strict";
          var i = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                ((i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i));
              }
            }
            return function (t, r, i) {
              return (r && e(t.prototype, r), i && e(t, i), t);
            };
          })();
          r(566);
          var n = r(814),
            o = r(761);
          e.exports = (function () {
            function e(t) {
              var r = t.url,
                i = t.chunkSize,
                o = t.cacheSize,
                s = t.progressive;
              (!(function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
              })(this, e),
                (this.length = -1),
                (this.loaded = !1),
                (this.loading = !1),
                (this.seekable = !1),
                (this.buffering = !1),
                (this.seeking = !1),
                (this.progressive = void 0 === s || s),
                Object.defineProperties(this, {
                  offset: {
                    get: function () {
                      return this._cache.readOffset;
                    },
                  },
                  eof: {
                    get: function () {
                      return this.length === this._cache.readOffset;
                    },
                  },
                }),
                (this.url = void 0 === r ? "" : r),
                (this.headers = {}),
                (this._cache = new n({ cacheSize: void 0 === o ? 0 : o })),
                (this._backend = null),
                (this._cachever = 0),
                (this._chunkSize = void 0 === i ? 1048576 : i));
            }
            return (
              i(e, [
                {
                  key: "load",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      if (e.loading) throw Error("cannot load when loading");
                      if (e.loaded) throw Error("cannot load when loaded");
                      ((e.loading = !0),
                        e
                          ._openBackend()
                          .then(function (r) {
                            ((e.seekable = r.seekable),
                              (e.headers = r.headers),
                              (e.length = r.length),
                              (e.loaded = !0),
                              (e.loading = !1),
                              t());
                          })
                          .catch(function (t) {
                            ("AbortError" !== t.name && (e.loading = !1), r(t));
                          }));
                    });
                  },
                },
                {
                  key: "_openBackend",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      if (e._backend) t(e._backend);
                      else if (e.eof) r(Error("cannot open at end of file"));
                      else {
                        var i = e._cache,
                          n = e._chunkSize,
                          s = i.bytesReadable(n),
                          a = i.readOffset + s;
                        if ((i.seekWrite(a), e.length >= 0 && a >= e.length)) return void t(null);
                        var u =
                          e._clampToLength(i.writeOffset + i.bytesWritable(n)) - i.writeOffset;
                        if (0 === u) t(null);
                        else {
                          var c = (e._backend = new o({
                              url: e.url,
                              offset: e._cache.writeOffset,
                              length: u,
                              cachever: e._cachever,
                              progressive: e.progressive,
                            })),
                            d = null,
                            l = function () {
                              c !== e._backend
                                ? (d(), r(Error("invalid state")))
                                : (c.on("buffer", function (t) {
                                    c === e._backend && e._cache.write(t);
                                  }),
                                  c.on("done", function () {
                                    c === e._backend &&
                                      (-1 === e.length &&
                                        (e.length = e._backend.offset + e._backend.bytesRead),
                                      (e._backend = null));
                                  }),
                                  t(c));
                            },
                            h = function (t) {
                              c !== e._backend
                                ? r(Error("invalid state"))
                                : ((e._backend = null), r(t));
                            };
                          ((d = function () {
                            (c.off("open", l), c.off("error", h));
                          }),
                            c.on("open", l),
                            c.on("error", h),
                            c.on("cachever", function () {
                              e._cachever++;
                            }),
                            c.load());
                        }
                      }
                    });
                  },
                },
                {
                  key: "_readAhead",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      e._backend || e.eof
                        ? t()
                        : e
                            ._openBackend()
                            .then(function () {
                              t();
                            })
                            .catch(function (e) {
                              r(e);
                            });
                    });
                  },
                },
                {
                  key: "seek",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, i) {
                      if (!t.loaded || t.buffering || t.seeking) throw Error("invalid state");
                      if (e !== (0 | e) || e < 0) throw Error("invalid input");
                      if (t.length >= 0 && e > t.length) throw Error("seek past end of file");
                      if (!t.seekable) throw Error("seek on non-seekable stream");
                      (t._backend && t.abort(),
                        t._cache.seekRead(e),
                        t._cache.seekWrite(e),
                        t._readAhead().then(r).catch(i));
                    });
                  },
                },
                {
                  key: "read",
                  value: function (e) {
                    var t = this;
                    return this.buffer(e).then(function (e) {
                      return t.readSync(e);
                    });
                  },
                },
                {
                  key: "readSync",
                  value: function (e) {
                    var t = this.bytesAvailable(e),
                      r = new Uint8Array(t);
                    if (this.readBytes(r) !== t) throw Error("failed to read expected data");
                    return r.buffer;
                  },
                },
                {
                  key: "readBytes",
                  value: function (e) {
                    if (!this.loaded || this.buffering || this.seeking)
                      throw Error("invalid state");
                    if (!(e instanceof Uint8Array)) throw Error("invalid input");
                    var t = this._cache.readBytes(e);
                    return (this._readAhead(), t);
                  },
                },
                {
                  key: "buffer",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, i) {
                      if (!t.loaded || t.buffering || t.seeking) throw Error("invalid state");
                      if (e !== (0 | e) || e < 0) throw Error("invalid input");
                      var n = t._clampToLength(t.offset + e),
                        o = n - t.offset,
                        s = t.bytesAvailable(o);
                      s >= o
                        ? r(s)
                        : ((t.buffering = !0),
                          t
                            ._openBackend()
                            .then(function (r) {
                              return r
                                ? r.bufferToOffset(n).then(function () {
                                    return ((t.buffering = !1), t.buffer(e));
                                  })
                                : Promise.resolve(s);
                            })
                            .then(function (e) {
                              ((t.buffering = !1), r(e));
                            })
                            .catch(function (e) {
                              ("AbortError" !== e.name && (t.buffering = !1), i(e));
                            }));
                    });
                  },
                },
                {
                  key: "bytesAvailable",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                    return this._cache.bytesReadable(e);
                  },
                },
                {
                  key: "abort",
                  value: function () {
                    (this.loading && (this.loading = !1),
                      this.buffering && (this.buffering = !1),
                      this.seeking && (this.seeking = !1),
                      this._backend && (this._backend.abort(), (this._backend = null)));
                  },
                },
                {
                  key: "getBufferedRanges",
                  value: function () {
                    return this._cache.ranges();
                  },
                },
                {
                  key: "_clampToLength",
                  value: function (e) {
                    return this.length < 0 ? e : Math.min(this.length, e);
                  },
                },
              ]),
              e
            );
          })();
        },
        302: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { default: () => i }));
          let i =
            "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
        },
        826: (e) => {
          e.exports = {
            vertex:
              "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",
            fragment:
              "// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",
            vertexStripe:
              "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",
            fragmentStripe:
              "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
          };
        },
        487: (e) => {
          !(function () {
            "use strict";
            function t(e, t) {
              throw Error("abstract");
            }
            ((t.prototype.drawFrame = function (e) {
              throw Error("abstract");
            }),
              (t.prototype.clear = function () {
                throw Error("abstract");
              }),
              (e.exports = t));
          })();
        },
        926: (e, t, r) => {
          !(function () {
            "use strict";
            var t = r(487),
              i = r(627);
            function n(e) {
              var t = e.getContext("2d"),
                r = null,
                n = null,
                o = null;
              return (
                (this.drawFrame = function (s) {
                  var a,
                    u,
                    c = s.format;
                  ((e.width === c.displayWidth && e.height === c.displayHeight) ||
                    ((e.width = c.displayWidth), (e.height = c.displayHeight)),
                    (null !== r && r.width == c.width && r.height == c.height) ||
                      (function (e, i) {
                        for (
                          var n = (r = t.createImageData(e, i)).data, o = e * i * 4, s = 0;
                          s < o;
                          s += 4
                        )
                          n[s + 3] = 255;
                      })(c.width, c.height),
                    i.convertYCbCr(s, r.data));
                  var d,
                    l = c.cropWidth != c.displayWidth || c.cropHeight != c.displayHeight;
                  (l
                    ? (n ||
                        ((a = c.cropWidth),
                        (u = c.cropHeight),
                        ((n = document.createElement("canvas")).width = a),
                        (n.height = u),
                        (o = n.getContext("2d"))),
                      (d = o))
                    : (d = t),
                    d.putImageData(
                      r,
                      -c.cropLeft,
                      -c.cropTop,
                      c.cropLeft,
                      c.cropTop,
                      c.cropWidth,
                      c.cropHeight,
                    ),
                    l && t.drawImage(n, 0, 0, c.displayWidth, c.displayHeight));
                }),
                (this.clear = function () {
                  t.clearRect(0, 0, e.width, e.height);
                }),
                this
              );
            }
            ((n.prototype = Object.create(t.prototype)), (e.exports = n));
          })();
        },
        895: (e, t, r) => {
          !(function () {
            "use strict";
            var t = r(487),
              i = r(826);
            function n(e) {
              var t,
                r,
                o = this,
                s = n.contextForCanvas(e);
              if (null === s) throw Error("WebGL unavailable");
              function a(e, t) {
                var r = s.createShader(e);
                if (
                  (s.shaderSource(r, t),
                  s.compileShader(r),
                  !s.getShaderParameter(r, s.COMPILE_STATUS))
                ) {
                  var i = s.getShaderInfoLog(r);
                  throw (
                    s.deleteShader(r),
                    Error("GL shader compilation for " + e + " failed: " + i)
                  );
                }
                return r;
              }
              var u,
                c,
                d,
                l,
                h,
                f,
                p,
                m,
                g,
                _,
                b = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                v = {},
                y = {},
                w = {};
              function V(e, t) {
                return ((v[e] && !t) || (v[e] = s.createTexture()), v[e]);
              }
              function x(e, t, r, i, o) {
                var a = !v[e] || t,
                  u = V(e, t);
                if ((s.activeTexture(s.TEXTURE0), n.stripe)) {
                  var c = !v[e + "_temp"] || t,
                    d = V(e + "_temp", t);
                  (s.bindTexture(s.TEXTURE_2D, d),
                    c
                      ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                        s.texImage2D(
                          s.TEXTURE_2D,
                          0,
                          s.RGBA,
                          r / 4,
                          i,
                          0,
                          s.RGBA,
                          s.UNSIGNED_BYTE,
                          o,
                        ))
                      : s.texSubImage2D(
                          s.TEXTURE_2D,
                          0,
                          0,
                          0,
                          r / 4,
                          i,
                          s.RGBA,
                          s.UNSIGNED_BYTE,
                          o,
                        ));
                  var l = v[e + "_stripe"],
                    h = !l || t;
                  (h && (l = V(e + "_stripe", t)),
                    s.bindTexture(s.TEXTURE_2D, l),
                    h &&
                      (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                      s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                      s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
                      s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                      s.texImage2D(
                        s.TEXTURE_2D,
                        0,
                        s.RGBA,
                        r,
                        1,
                        0,
                        s.RGBA,
                        s.UNSIGNED_BYTE,
                        (function (e) {
                          if (w[e]) return w[e];
                          for (var t = new Uint32Array(e), r = 0; r < e; r += 4)
                            ((t[r] = 255),
                              (t[r + 1] = 65280),
                              (t[r + 2] = 0xff0000),
                              (t[r + 3] = 0xff000000));
                          return (w[e] = new Uint8Array(t.buffer));
                        })(r),
                      )));
                } else
                  (s.bindTexture(s.TEXTURE_2D, u),
                    a
                      ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                        s.texImage2D(
                          s.TEXTURE_2D,
                          0,
                          s.ALPHA,
                          r,
                          i,
                          0,
                          s.ALPHA,
                          s.UNSIGNED_BYTE,
                          o,
                        ))
                      : s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, r, i, s.ALPHA, s.UNSIGNED_BYTE, o));
              }
              function T(e, t, i, n) {
                var o = v[e];
                s.useProgram(r);
                var a = y[e];
                ((a && !t) ||
                  (s.activeTexture(s.TEXTURE0),
                  s.bindTexture(s.TEXTURE_2D, o),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                  s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, i, n, 0, s.RGBA, s.UNSIGNED_BYTE, null),
                  (a = y[e] = s.createFramebuffer())),
                  s.bindFramebuffer(s.FRAMEBUFFER, a),
                  s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, o, 0));
                var p = v[e + "_temp"];
                (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, p), s.uniform1i(f, 1));
                var m = v[e + "_stripe"];
                (s.activeTexture(s.TEXTURE2),
                  s.bindTexture(s.TEXTURE_2D, m),
                  s.uniform1i(h, 2),
                  s.bindBuffer(s.ARRAY_BUFFER, u),
                  s.enableVertexAttribArray(c),
                  s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                  s.bindBuffer(s.ARRAY_BUFFER, d),
                  s.enableVertexAttribArray(l),
                  s.vertexAttribPointer(l, 2, s.FLOAT, !1, 0, 0),
                  s.viewport(0, 0, i, n),
                  s.drawArrays(s.TRIANGLES, 0, b.length / 2),
                  s.bindFramebuffer(s.FRAMEBUFFER, null));
              }
              function k(e, r, i) {
                (s.activeTexture(r),
                  s.bindTexture(s.TEXTURE_2D, v[e]),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                  s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                  s.uniform1i(s.getUniformLocation(t, e), i));
              }
              function E(e, t) {
                var r = a(s.VERTEX_SHADER, e),
                  i = a(s.FRAGMENT_SHADER, t),
                  n = s.createProgram();
                if (
                  (s.attachShader(n, r),
                  s.attachShader(n, i),
                  s.linkProgram(n),
                  !s.getProgramParameter(n, s.LINK_STATUS))
                ) {
                  var o = s.getProgramInfoLog(n);
                  throw (s.deleteProgram(n), Error("GL program linking failed: " + o));
                }
                return n;
              }
              return (
                (o.drawFrame = function (a) {
                  var v = a.format,
                    y = !t || e.width !== v.displayWidth || e.height !== v.displayHeight;
                  if (
                    (y && ((e.width = v.displayWidth), (e.height = v.displayHeight), o.clear()),
                    t ||
                      (function () {
                        if (n.stripe) {
                          ((r = E(i.vertexStripe, i.fragmentStripe)),
                            s.getAttribLocation(r, "aPosition"),
                            (d = s.createBuffer()));
                          var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                          (s.bindBuffer(s.ARRAY_BUFFER, d),
                            s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW),
                            (l = s.getAttribLocation(r, "aTexturePosition")),
                            (h = s.getUniformLocation(r, "uStripe")),
                            (f = s.getUniformLocation(r, "uTexture")));
                        }
                        ((t = E(i.vertex, i.fragment)),
                          (u = s.createBuffer()),
                          s.bindBuffer(s.ARRAY_BUFFER, u),
                          s.bufferData(s.ARRAY_BUFFER, b, s.STATIC_DRAW),
                          (c = s.getAttribLocation(t, "aPosition")),
                          (p = s.createBuffer()),
                          (m = s.getAttribLocation(t, "aLumaPosition")),
                          (g = s.createBuffer()),
                          (_ = s.getAttribLocation(t, "aChromaPosition")));
                      })(),
                    y)
                  ) {
                    var w = function (e, t, r) {
                      var i = v.cropLeft / r,
                        n = (v.cropLeft + v.cropWidth) / r,
                        o = (v.cropTop + v.cropHeight) / v.height,
                        a = v.cropTop / v.height,
                        u = new Float32Array([i, o, n, o, i, a, i, a, n, o, n, a]);
                      (s.bindBuffer(s.ARRAY_BUFFER, e),
                        s.bufferData(s.ARRAY_BUFFER, u, s.STATIC_DRAW));
                    };
                    (w(p, 0, a.y.stride), w(g, 0, (a.u.stride * v.width) / v.chromaWidth));
                  }
                  (x("uTextureY", y, a.y.stride, v.height, a.y.bytes),
                    x("uTextureCb", y, a.u.stride, v.chromaHeight, a.u.bytes),
                    x("uTextureCr", y, a.v.stride, v.chromaHeight, a.v.bytes),
                    n.stripe &&
                      (T("uTextureY", y, a.y.stride, v.height),
                      T("uTextureCb", y, a.u.stride, v.chromaHeight),
                      T("uTextureCr", y, a.v.stride, v.chromaHeight)),
                    s.useProgram(t),
                    s.viewport(0, 0, e.width, e.height),
                    k("uTextureY", s.TEXTURE0, 0),
                    k("uTextureCb", s.TEXTURE1, 1),
                    k("uTextureCr", s.TEXTURE2, 2),
                    s.bindBuffer(s.ARRAY_BUFFER, u),
                    s.enableVertexAttribArray(c),
                    s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                    s.bindBuffer(s.ARRAY_BUFFER, p),
                    s.enableVertexAttribArray(m),
                    s.vertexAttribPointer(m, 2, s.FLOAT, !1, 0, 0),
                    s.bindBuffer(s.ARRAY_BUFFER, g),
                    s.enableVertexAttribArray(_),
                    s.vertexAttribPointer(_, 2, s.FLOAT, !1, 0, 0),
                    s.drawArrays(s.TRIANGLES, 0, b.length / 2));
                }),
                (o.clear = function () {
                  (s.viewport(0, 0, e.width, e.height),
                    s.clearColor(0, 0, 0, 0),
                    s.clear(s.COLOR_BUFFER_BIT));
                }),
                o.clear(),
                o
              );
            }
            ((n.stripe = !1),
              (n.contextForCanvas = function (e) {
                var t = {
                  preferLowPowerToHighPerformance: !0,
                  powerPreference: "low-power",
                  failIfMajorPerformanceCaveat: !0,
                  preserveDrawingBuffer: !0,
                };
                return e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
              }),
              (n.isAvailable = function () {
                var e,
                  t = document.createElement("canvas");
                ((t.width = 1), (t.height = 1));
                try {
                  e = n.contextForCanvas(t);
                } catch (e) {
                  return !1;
                }
                if (e) {
                  var r = e.TEXTURE0,
                    i = e.createTexture(),
                    o = new Uint8Array(16),
                    s = n.stripe ? 1 : 4,
                    a = n.stripe ? e.RGBA : e.ALPHA,
                    u = n.stripe ? e.NEAREST : e.LINEAR;
                  return (
                    e.activeTexture(r),
                    e.bindTexture(e.TEXTURE_2D, i),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, u),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, u),
                    e.texImage2D(e.TEXTURE_2D, 0, a, s, 4, 0, a, e.UNSIGNED_BYTE, o),
                    !e.getError()
                  );
                }
                return !1;
              }),
              (n.prototype = Object.create(t.prototype)),
              (e.exports = n));
          })();
        },
        627: (e, t, r) => {
          !(function () {
            "use strict";
            var t = r(877);
            e.exports = {
              convertYCbCr: function (e, r) {
                var i = 0 | e.format.width,
                  n = 0 | e.format.height,
                  o = 0 | t(e.format.width / e.format.chromaWidth),
                  s = 0 | t(e.format.height / e.format.chromaHeight),
                  a = e.y.bytes,
                  u = e.u.bytes,
                  c = e.v.bytes,
                  d = 0 | e.y.stride,
                  l = 0 | e.u.stride,
                  h = 0 | e.v.stride,
                  f = i << 2,
                  p = 0,
                  m = 0,
                  g = 0,
                  _ = 0,
                  b = 0,
                  v = 0,
                  y = 0,
                  w = 0,
                  V = 0,
                  x = 0,
                  T = 0,
                  k = 0,
                  E = 0,
                  A = 0,
                  R = 0,
                  P = 0,
                  O = 0,
                  I = 0;
                if (1 == o && 1 == s)
                  for (y = 0, w = f, I = 0, P = 0; P < n; P += 2) {
                    for (
                      g = ((m = (P * d) | 0) + d) | 0, _ = (I * l) | 0, b = (I * h) | 0, R = 0;
                      R < i;
                      R += 2
                    )
                      ((V = 0 | u[_++]),
                        (k = (((409 * (x = 0 | c[b++])) | 0) - 57088) | 0),
                        (E = (((100 * V) | 0) + ((208 * x) | 0) - 34816) | 0),
                        (A = (((516 * V) | 0) - 70912) | 0),
                        (T = (298 * a[m++]) | 0),
                        (r[y] = (T + k) >> 8),
                        (r[y + 1] = (T - E) >> 8),
                        (r[y + 2] = (T + A) >> 8),
                        (y += 4),
                        (T = (298 * a[m++]) | 0),
                        (r[y] = (T + k) >> 8),
                        (r[y + 1] = (T - E) >> 8),
                        (r[y + 2] = (T + A) >> 8),
                        (y += 4),
                        (T = (298 * a[g++]) | 0),
                        (r[w] = (T + k) >> 8),
                        (r[w + 1] = (T - E) >> 8),
                        (r[w + 2] = (T + A) >> 8),
                        (w += 4),
                        (T = (298 * a[g++]) | 0),
                        (r[w] = (T + k) >> 8),
                        (r[w + 1] = (T - E) >> 8),
                        (r[w + 2] = (T + A) >> 8),
                        (w += 4));
                    ((y += f), (w += f), I++);
                  }
                else
                  for (v = 0, P = 0; P < n; P++)
                    for (
                      O = 0, p = (P * d) | 0, _ = ((I = P >> s) * l) | 0, b = (I * h) | 0, R = 0;
                      R < i;
                      R++
                    )
                      ((V = 0 | u[_ + (O = R >> o)]),
                        (k = (((409 * (x = 0 | c[b + O])) | 0) - 57088) | 0),
                        (E = (((100 * V) | 0) + ((208 * x) | 0) - 34816) | 0),
                        (A = (((516 * V) | 0) - 70912) | 0),
                        (T = (298 * a[p++]) | 0),
                        (r[v] = (T + k) >> 8),
                        (r[v + 1] = (T - E) >> 8),
                        (r[v + 2] = (T + A) >> 8),
                        (v += 4));
              },
            };
          })();
        },
        877: (e) => {
          !(function () {
            "use strict";
            e.exports = function (e) {
              for (var t = 0, r = e >> 1; 0 != r;) ((r >>= 1), t++);
              if (e !== 1 << t)
                throw (
                  "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                  e
                );
              return t;
            };
          })();
        },
        731: (e, t, r) => {
          !(function () {
            "use strict";
            var t = r(487),
              i = r(926),
              n = r(895);
            e.exports = {
              FrameSink: t,
              SoftwareFrameSink: i,
              WebGLFrameSink: n,
              attach: function (e, t) {
                return ("webGL" in (t = t || {}) ? t.webGL : n.isAvailable())
                  ? new n(e, t)
                  : new i(e, t);
              },
            };
          })();
        },
      },
      t = {};
    function r(i) {
      var n = t[i];
      if (void 0 !== n) return n.exports;
      var o = (t[i] = { exports: {} });
      return (e[i](o, o.exports, r), o.exports);
    }
    ((r.d = (e, t) => {
      for (var i in t)
        r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        ("u" > typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }));
    var i = {};
    return (
      (() => {
        "use strict";
        var e = r(318);
        (Object.defineProperty(i, "__esModule", { value: !0 }),
          Object.defineProperty(i, "OGVCompat", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(i, "OGVLoader", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(i, "OGVMediaError", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(i, "OGVMediaType", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(i, "OGVPlayer", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(i, "OGVTimeRanges", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          (i.OGVVersion = void 0));
        var t = e(r(8)),
          n = e(r(523)),
          o = e(r(964)),
          s = e(r(759)),
          a = e(r(278)),
          u = e(r(869)),
          c = e(r(168)),
          d = "1.8.9-20220406232920-cb5f7ff";
        ((i.OGVVersion = d),
          "object" === ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
            ((window.OGVCompat = n.default),
            (window.OGVLoader = o.default),
            (window.OGVMediaError = s.default),
            (window.OGVMediaType = a.default),
            (window.OGVTimeRanges = c.default),
            (window.OGVPlayer = u.default),
            (window.OGVVersion = d)));
      })(),
      i
    );
  })();
}
