/* Recovered shipped factory. Module 841873.
 * Source: recovered/web/assets/libdiscore-wasm-fetch.6d72434e85b0a922.js
 * UTF-16 property offsets: 1503..16633
 * Raw property SHA-256: e16dfbb9c566e645409661745a228056ec04b3e7307551d8d90a8a4ae838cb32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  let r;
  function _(e) {
    r = e;
  }
  (n.d(t, {
    BF: () => tr,
    CF: () => to,
    CI: () => tp,
    DS: () => e0,
    Dn: () => eU,
    E1: () => eV,
    EH: () => eB,
    Ed: () => tS,
    FH: () => Z,
    FP: () => eh,
    Fs: () => ev,
    GQ: () => tb,
    GZ: () => N,
    Gu: () => tC,
    HB: () => e7,
    HS: () => ep,
    Hz: () => ex,
    Jp: () => K,
    LC: () => tx,
    LM: () => tw,
    M2: () => eP,
    Mo: () => ey,
    N8: () => tq,
    ND: () => eo,
    NG: () => e1,
    NJ: () => e5,
    Ng: () => th,
    Nh: () => e6,
    O$: () => ea,
    Oy: () => Q,
    PJ: () => te,
    PR: () => tj,
    Ph: () => k,
    Py: () => tz,
    QH: () => ef,
    QR: () => tE,
    Qg: () => tm,
    Qn: () => tH,
    RG: () => eN,
    RK: () => ew,
    RR: () => ej,
    RX: () => eb,
    Rj: () => tT,
    Ry: () => eO,
    SJ: () => ek,
    Tb: () => V,
    Tp: () => tg,
    U8: () => tM,
    Ux: () => ei,
    Vr: () => eq,
    Xb: () => es,
    Xc: () => en,
    Y6: () => tl,
    YN: () => eA,
    ZA: () => D,
    ZJ: () => L,
    _U: () => X,
    _h: () => tn,
    _i: () => Y,
    _m: () => eY,
    aI: () => eC,
    bL: () => tA,
    c6: () => eE,
    cV: () => $,
    ce: () => ty,
    cy: () => et,
    dS: () => eK,
    dz: () => eg,
    eF: () => tv,
    eI: () => eT,
    eQ: () => tk,
    eT: () => M,
    eW: () => eF,
    fb: () => ta,
    gG: () => em,
    gM: () => J,
    gR: () => el,
    hI: () => eL,
    he: () => eH,
    iA: () => e4,
    ii: () => tc,
    j1: () => eQ,
    jn: () => eG,
    ju: () => e3,
    k2: () => eX,
    k4: () => eW,
    kK: () => tf,
    l0: () => t_,
    lI: () => _,
    n8: () => G,
    nx: () => C,
    o: () => ec,
    p8: () => e2,
    pD: () => e$,
    qN: () => tL,
    qv: () => tI,
    rf: () => m,
    rk: () => tt,
    rl: () => tF,
    s5: () => ed,
    sQ: () => eu,
    sW: () => tN,
    ss: () => ti,
    t7: () => x,
    tZ: () => eJ,
    uY: () => tR,
    uo: () => eS,
    uw: () => e9,
    v: () => eI,
    v2: () => H,
    vF: () => eR,
    vU: () => tP,
    vV: () => eM,
    vb: () => R,
    w2: () => e8,
    w6: () => tu,
    w9: () => e_,
    wH: () => er,
    wJ: () => eZ,
    wd: () => ez,
    x0: () => ts,
    x6: () => ee,
    xV: () => td,
    xy: () => S,
    yc: () => tB,
    yq: () => eD,
    zE: () => tO,
  }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073),
    (e = n.hmd(e)));
  let i = 0,
    o = null;
  function c() {
    return ((null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o);
  }
  let u = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)(
      "utf-8",
    ),
    a =
      "function" == typeof u.encodeInto
        ? function (e, t) {
            return u.encodeInto(e, t);
          }
        : function (e, t) {
            let n = u.encode(e);
            return (t.set(n), { read: e.length, written: n.length });
          };
  function s(e, t, n) {
    if (void 0 === n) {
      let n = u.encode(e),
        r = t(n.length, 1) >>> 0;
      return (
        c()
          .subarray(r, r + n.length)
          .set(n),
        (i = n.length),
        r
      );
    }
    let r = e.length,
      _ = t(r, 1) >>> 0,
      o = c(),
      s = 0;
    for (; s < r; s++) {
      let t = e.charCodeAt(s);
      if (t > 127) break;
      o[_ + s] = t;
    }
    if (s !== r) {
      (0 !== s && (e = e.slice(s)), (_ = n(_, r, (r = s + 3 * e.length), 1) >>> 0));
      let t = a(e, c().subarray(_ + s, _ + r));
      ((s += t.written), (_ = n(_, r, s, 1) >>> 0));
    }
    return ((i = s), _);
  }
  let f = null;
  function l() {
    return (
      (null === f ||
        !0 === f.buffer.detached ||
        (void 0 === f.buffer.detached && f.buffer !== r.memory.buffer)) &&
        (f = new DataView(r.memory.buffer)),
      f
    );
  }
  let b = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)(
    "utf-8",
    { ignoreBOM: !0, fatal: !0 },
  );
  function d(e, t) {
    return ((e >>>= 0), b.decode(c().subarray(e, e + t)));
  }
  function g(e) {
    let t = r.__externref_table_alloc();
    return (r.__wbindgen_export_4.set(t, e), t);
  }
  function w(e, t) {
    try {
      return e.apply(this, t);
    } catch (t) {
      let e = g(t);
      r.__wbindgen_exn_store(e);
    }
  }
  function h(e) {
    return null == e;
  }
  b.decode();
  let p =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => {
          r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
        });
  function y(e, t, n, _) {
    let i = { a: e, b: t, cnt: 1, dtor: n },
      o = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        i.cnt++;
        let o = i.a;
        i.a = 0;
        try {
          return _(o, i.b, ...t);
        } finally {
          0 == --i.cnt ? (r.__wbindgen_export_5.get(i.dtor)(o, i.b), p.unregister(i)) : (i.a = o);
        }
      };
    return ((o.original = i), p.register(o, i, i), o);
  }
  function m(e, t, n, _, i) {
    r.installLogCallback(e, t, n, _, i);
  }
  function v(e) {
    let t = r.__wbindgen_export_4.get(e);
    return (r.__externref_table_dealloc(e), t);
  }
  function x(e, t) {
    return r.rustMultiply(e, t);
  }
  function k() {
    return r.initLibdiscore();
  }
  function R() {
    r.crash();
  }
  function S(e) {
    let t, n;
    try {
      let _ = r.generateLaunchSignature(e);
      return ((t = _[0]), (n = _[1]), d(_[0], _[1]));
    } finally {
      r.__wbindgen_free(t, n, 1);
    }
  }
  function F(e, t) {
    r._dyn_core_f73ed7932dd6acc___ops__function__FnMut_____Output______as_wasm_bindgen_9353bb4e5bfa4c18___closure__WasmClosure___describe__invoke______(
      e,
      t,
    );
  }
  function T(e, t) {
    r._dyn_core_f73ed7932dd6acc___ops__function__FnMut_____Output______as_wasm_bindgen_9353bb4e5bfa4c18___closure__WasmClosure___describe__invoke______10(
      e,
      t,
    );
  }
  function O(e, t, n) {
    r.closure712_externref_shim(e, t, n);
  }
  let A = ["bytes"],
    j = ["omit", "same-origin", "include"],
    E = ["same-origin", "no-cors", "cors", "navigate"],
    I =
      "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
  class C {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), I.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
      let t,
        n = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        _ = i,
        o = r.blockeddomainsstore_isBlockedDomain(n, _);
      if (o[3]) throw v(o[2]);
      return (0 !== o[0] && ((t = d(o[0], o[1]).slice()), r.__wbindgen_free(o[0], +o[1], 1)), t);
    }
    static startFetchingBlockedDomains(e) {
      let t = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        n = i,
        _ = r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
      if (_[1]) throw v(_[0]);
    }
  }
  let P =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
  class M {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), P.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
      let t = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        n = i,
        _ = r.experimentcacher_getConfig(t, n);
      if (_[2]) throw v(_[1]);
      return 0 === _[0] ? void 0 : $.__wrap(_[0]);
    }
    static clearCache() {
      let e = r.experimentcacher_clearCache();
      if (e[1]) throw v(e[0]);
    }
    static flushToCache(e) {
      let t = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        n = i,
        _ = r.experimentcacher_flushToCache(t, n);
      if (_[1]) throw v(_[0]);
    }
  }
  let z =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_fluxapi_free(e >>> 0, 1));
  class N {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), z.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
      let t = r.fluxapi_connectStore(this.__wbg_ptr, e);
      if (t[2]) throw v(t[1]);
      return v(t[0]);
    }
    dispatchAction(e, t) {
      let n = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        _ = i;
      return r.fluxapi_dispatchAction(this.__wbg_ptr, n, _, t);
    }
    flushReplicationStates() {
      return r.fluxapi_flushReplicationStates(this.__wbg_ptr);
    }
    getRegisteredActionTypes() {
      return r.fluxapi_getRegisteredActionTypes(this.__wbg_ptr);
    }
    findStoresThatCanHandleActionType(e) {
      let t = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
        n = i;
      return r.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
      const e = r.fluxapi_new();
      return ((this.__wbg_ptr = e >>> 0), z.register(this, this.__wbg_ptr, this), this);
    }
  }
  let q =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
  class L {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), q.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_intounderlyingbytesource_free(e, 0);
    }
    get autoAllocateChunkSize() {
      return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
    }
    pull(e) {
      return r.intounderlyingbytesource_pull(this.__wbg_ptr, e);
    }
    start(e) {
      r.intounderlyingbytesource_start(this.__wbg_ptr, e);
    }
    get type() {
      return A[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
      let e = this.__destroy_into_raw();
      r.intounderlyingbytesource_cancel(e);
    }
  }
  let B =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
  class H {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), B.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_intounderlyingsink_free(e, 0);
    }
    abort(e) {
      let t = this.__destroy_into_raw();
      return r.intounderlyingsink_abort(t, e);
    }
    close() {
      let e = this.__destroy_into_raw();
      return r.intounderlyingsink_close(e);
    }
    write(e) {
      return r.intounderlyingsink_write(this.__wbg_ptr, e);
    }
  }
  let W =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
  class D {
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), W.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_intounderlyingsource_free(e, 0);
    }
    pull(e) {
      return r.intounderlyingsource_pull(this.__wbg_ptr, e);
    }
    cancel() {
      let e = this.__destroy_into_raw();
      r.intounderlyingsource_cancel(e);
    }
  }
  let U =
    "u" < typeof FinalizationRegistry
      ? { register: () => {}, unregister: () => {} }
      : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
  class $ {
    static __wrap(e) {
      e >>>= 0;
      let t = Object.create($.prototype);
      return ((t.__wbg_ptr = e), U.register(t, t.__wbg_ptr, t), t);
    }
    __destroy_into_raw() {
      let e = this.__wbg_ptr;
      return ((this.__wbg_ptr = 0), U.unregister(this), e);
    }
    free() {
      let e = this.__destroy_into_raw();
      r.__wbg_wasmcacheableexperimentconfig_free(e, 0);
    }
    get treatmentId() {
      return r.__wbg_get_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr);
    }
    set treatmentId(e) {
      r.__wbg_set_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr, e);
    }
  }
  function Q(e, t) {
    let n = s(String(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
      _ = i;
    (l().setInt32(e + 4, _, !0), l().setInt32(e + 0, n, !0));
  }
  function G(e, t) {
    e.abort(t);
  }
  function J(e) {
    e.abort();
  }
  function V() {
    return w(function (e, t, n, r, _) {
      e.append(d(t, n), d(r, _));
    }, arguments);
  }
  function Y() {
    return w(function (e) {
      return e.arrayBuffer();
    }, arguments);
  }
  function X(e) {
    return e.buffer;
  }
  function Z(e) {
    return e.buffer;
  }
  function K(e) {
    let t = e.byobRequest;
    return h(t) ? 0 : g(t);
  }
  function ee(e) {
    return e.byteLength;
  }
  function et(e) {
    return e.byteOffset;
  }
  function en() {
    return w(function (e) {
      return e.caches;
    }, arguments);
  }
  function er() {
    return w(function (e, t) {
      return e.call(t);
    }, arguments);
  }
  function e_() {
    return w(function (e, t, n) {
      return e.call(t, n);
    }, arguments);
  }
  function ei(e) {
    return clearTimeout(e);
  }
  function eo(e) {
    return clearTimeout(e);
  }
  function ec() {
    return w(function (e) {
      e.close();
    }, arguments);
  }
  function eu() {
    return w(function (e) {
      e.close();
    }, arguments);
  }
  function ea(e, t) {
    return e.delete(t);
  }
  function es(e) {
    return e.done;
  }
  function ef() {
    return w(function (e, t) {
      e.enqueue(t);
    }, arguments);
  }
  function el(e, t) {
    return e.fetch(t);
  }
  function eb(e) {
    return fetch(e);
  }
  function ed() {
    return w(function (e, t) {
      var n;
      globalThis.crypto.getRandomValues(((n = e >>> 0), c().subarray(n / 1, n / 1 + t)));
    }, arguments);
  }
  function eg() {
    return w(function (e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }
  function ew(e, t) {
    return e[t >>> 0];
  }
  function eh(e, t) {
    return e[t];
  }
  function ep() {
    return w(function (e, t) {
      return Reflect.has(e, t);
    }, arguments);
  }
  function ey(e) {
    return e.headers;
  }
  function em(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  function ev(e) {
    let t;
    try {
      t = e instanceof Cache;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  function ex(e) {
    let t;
    try {
      t = e instanceof Response;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  function ek(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  function eR(e) {
    let t;
    try {
      t = e instanceof Window;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  function eS(e) {
    return Array.isArray(e);
  }
  function eF() {
    return Symbol.iterator;
  }
  function eT(e) {
    return e.length;
  }
  function eO(e) {
    return e.length;
  }
  function eA(e, t) {
    return e.match(t);
  }
  function ej() {
    return w(function () {
      return new Headers();
    }, arguments);
  }
  function eE(e, t) {
    try {
      var n = { a: e, b: t };
      return new Promise((e, t) => {
        let _ = n.a;
        n.a = 0;
        try {
          var i;
          return ((i = n.b), void r.closure751_externref_shim(_, i, e, t));
        } finally {
          n.a = _;
        }
      });
    } finally {
      n.a = n.b = 0;
    }
  }
  function eI() {
    return {};
  }
  function eC() {
    return new Map();
  }
  function eP() {
    return [];
  }
  function eM(e) {
    return new Uint8Array(e);
  }
  function ez(e, t) {
    return Error(d(e, t));
  }
  function eN() {
    return w(function () {
      return new AbortController();
    }, arguments);
  }
  function eq(e, t) {
    return Function(d(e, t));
  }
  function eL(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
  }
  function eB() {
    return w(function (e, t) {
      return new Response(e, t);
    }, arguments);
  }
  function eH() {
    return w(function (e, t, n) {
      return new Request(d(e, t), n);
    }, arguments);
  }
  function eW() {
    return w(function (e) {
      return new Blob(e);
    }, arguments);
  }
  function eD(e) {
    return e.next;
  }
  function eU() {
    return w(function (e) {
      return e.next();
    }, arguments);
  }
  function e$(e) {
    return e.now();
  }
  function eQ(e, t, n) {
    return e.open(d(t, n));
  }
  function eG(e) {
    let t = e.performance;
    return h(t) ? 0 : g(t);
  }
  function eJ(e, t) {
    return e.push(t);
  }
  function eV(e, t, n) {
    return e.put(t, n);
  }
  function eY(e) {
    queueMicrotask(e);
  }
  function eX(e) {
    return e.queueMicrotask;
  }
  function eZ(e) {
    return Promise.resolve(e);
  }
  function eK() {
    return w(function (e, t) {
      e.respond(t >>> 0);
    }, arguments);
  }
  function e0(e, t) {
    return setTimeout(e, t);
  }
  function e1() {
    return w(function (e, t) {
      return setTimeout(e, t);
    }, arguments);
  }
  function e3() {
    return w(function (e, t, n, r, _) {
      e.set(d(t, n), d(r, _));
    }, arguments);
  }
  function e2(e, t, n) {
    e[t >>> 0] = n;
  }
  function e5(e, t, n) {
    e[t] = n;
  }
  function e7(e, t, n) {
    e.set(t, n >>> 0);
  }
  function e4(e, t, n) {
    return e.set(t, n);
  }
  function e8() {
    return w(function (e, t, n) {
      return Reflect.set(e, t, n);
    }, arguments);
  }
  function e6(e, t) {
    e.body = t;
  }
  function e9(e, t) {
    e.credentials = j[t];
  }
  function te(e, t) {
    e.headers = t;
  }
  function tt(e, t) {
    e.headers = t;
  }
  function tn(e, t, n) {
    e.method = d(t, n);
  }
  function tr(e, t) {
    e.mode = E[t];
  }
  function t_(e, t) {
    e.signal = t;
  }
  function ti(e, t) {
    e.status = t;
  }
  function to(e) {
    return e.signal;
  }
  function tc() {
    let e = void 0 === n.g ? null : n.g;
    return h(e) ? 0 : g(e);
  }
  function tu() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return h(e) ? 0 : g(e);
  }
  function ta() {
    let e = "u" < typeof self ? null : self;
    return h(e) ? 0 : g(e);
  }
  function ts() {
    let e = "u" < typeof window ? null : window;
    return h(e) ? 0 : g(e);
  }
  function tf(e) {
    return e.status;
  }
  function tl() {
    return w(function (e) {
      return JSON.stringify(e);
    }, arguments);
  }
  function tb(e, t) {
    return e.then(t);
  }
  function td(e, t, n) {
    return e.then(t, n);
  }
  function tg(e, t) {
    let n = s(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
      _ = i;
    (l().setInt32(e + 4, _, !0), l().setInt32(e + 0, n, !0));
  }
  function tw(e) {
    return e.value;
  }
  function th(e) {
    let t = e.view;
    return h(t) ? 0 : g(t);
  }
  function tp(e, t) {
    console.warn(d(e, t));
  }
  function ty(e) {
    return e;
  }
  function tm(e) {
    return BigInt.asUintN(64, e);
  }
  function tv(e) {
    return "boolean" == typeof e ? +!!e : 2;
  }
  function tx(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
  }
  function tk(e, t, n) {
    return y(e, t, 532, F);
  }
  function tR(e, t, n) {
    return y(e, t, 553, T);
  }
  function tS(e, t, n) {
    return y(e, t, 713, O);
  }
  function tF(e, t) {
    let n = s(
        (function e(t) {
          let n,
            r = typeof t;
          if ("number" == r || "boolean" == r || null == t) return `${t}`;
          if ("string" == r) return `"${t}"`;
          if ("symbol" == r) {
            let e = t.description;
            return null == e ? "Symbol" : `Symbol(${e})`;
          }
          if ("function" == r) {
            let e = t.name;
            return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
          }
          if (Array.isArray(t)) {
            let n = t.length,
              r = "[";
            n > 0 && (r += e(t[0]));
            for (let _ = 1; _ < n; _++) r += ", " + e(t[_]);
            return r + "]";
          }
          let _ = /\[object ([^\]]+)\]/.exec(toString.call(t));
          if (!_ || !(_.length > 1)) return toString.call(t);
          if ("Object" == (n = _[1]))
            try {
              return "Object(" + JSON.stringify(t) + ")";
            } catch (e) {
              return "Object";
            }
          return t instanceof Error
            ? `${t.name}: ${t.message}
${t.stack}`
            : n;
        })(t),
        r.__wbindgen_malloc,
        r.__wbindgen_realloc,
      ),
      _ = i;
    (l().setInt32(e + 4, _, !0), l().setInt32(e + 0, n, !0));
  }
  function tT(e, t) {
    return Error(d(e, t));
  }
  function tO(e, t) {
    return e in t;
  }
  function tA() {
    let e = r.__wbindgen_export_4,
      t = e.grow(4);
    (e.set(0, void 0),
      e.set(t + 0, void 0),
      e.set(t + 1, null),
      e.set(t + 2, !0),
      e.set(t + 3, !1));
  }
  function tj(e) {
    return "function" == typeof e;
  }
  function tE(e) {
    return null === e;
  }
  function tI(e) {
    return "object" == typeof e && null !== e;
  }
  function tC(e) {
    return "string" == typeof e;
  }
  function tP(e) {
    return void 0 === e;
  }
  function tM(e, t) {
    return e == t;
  }
  function tz() {
    return r.memory;
  }
  function tN(e, t) {
    let n = "number" == typeof t ? t : void 0;
    (l().setFloat64(e + 8, h(n) ? 0 : n, !0), l().setInt32(e + 0, !h(n), !0));
  }
  function tq(e) {
    return e;
  }
  function tL(e, t) {
    let n = "string" == typeof t ? t : void 0;
    var _ = h(n) ? 0 : s(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
      o = i;
    (l().setInt32(e + 4, o, !0), l().setInt32(e + 0, _, !0));
  }
  function tB(e, t) {
    return d(e, t);
  }
  function tH(e, t) {
    throw Error(d(e, t));
  }
}
