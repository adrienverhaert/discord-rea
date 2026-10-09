/* Recovered shipped factory. Module 690094.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 315518..317409
 * Raw property SHA-256: 8e3e0c09a6cec7d62e1878dcd7f6f3bd7075c43e840584fcbefffd441bde5972
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, {
    Ce: () => g,
    GS: () => l,
    HF: () => m,
    W4: () => p,
    my: () => c,
    pO: () => u,
    sp: () => d,
  });
  var r = n(693037),
    i = n(780755),
    o = n(875565),
    a = n(272469),
    s = n(826476);
  function l(e, t, n) {
    if (!(t in e)) return;
    let r = e[t],
      o = n(r);
    "function" == typeof o && u(o, r);
    try {
      e[t] = o;
    } catch (n) {
      i.T && a.vF.log(`Failed to replace method "${t}" in object`, e);
    }
  }
  function c(e, t, n) {
    try {
      Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
      i.T && a.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
  }
  function u(e, t) {
    try {
      let n = t.prototype || {};
      ((e.prototype = t.prototype = n), c(e, "__sentry_original__", t));
    } catch (e) {}
  }
  function d(e) {
    return e.__sentry_original__;
  }
  function p(e) {
    if ((0, o.bJ)(e)) return { message: e.message, name: e.name, stack: e.stack, ...f(e) };
    if (!(0, o.xH)(e)) return e;
    {
      let t = { type: e.type, target: h(e.target), currentTarget: h(e.currentTarget), ...f(e) };
      return ("u" > typeof CustomEvent && (0, o.tH)(e, CustomEvent) && (t.detail = e.detail), t);
    }
  }
  function h(e) {
    try {
      return (0, o.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e);
    } catch (e) {
      return "<unknown>";
    }
  }
  function f(e) {
    if ("object" != typeof e || null === e) return {};
    {
      let t = {};
      for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    }
  }
  function m(e, t = 40) {
    let n = Object.keys(p(e));
    n.sort();
    let r = n[0];
    if (!r) return "[object has no keys]";
    if (r.length >= t) return (0, s.xv)(r, t);
    for (let e = n.length; e > 0; e--) {
      let r = n.slice(0, e).join(", ");
      if (!(r.length > t)) {
        if (e === n.length) return r;
        return (0, s.xv)(r, t);
      }
    }
    return "";
  }
  function g(e) {
    return (function e(t, n) {
      if (
        (function (e) {
          if (!(0, o.Qd)(e)) return !1;
          try {
            let t = Object.getPrototypeOf(e).constructor.name;
            return !t || "Object" === t;
          } catch (e) {
            return !0;
          }
        })(t)
      ) {
        let r = n.get(t);
        if (void 0 !== r) return r;
        let i = {};
        for (let r of (n.set(t, i), Object.getOwnPropertyNames(t)))
          void 0 !== t[r] && (i[r] = e(t[r], n));
        return i;
      }
      if (Array.isArray(t)) {
        let r = n.get(t);
        if (void 0 !== r) return r;
        let i = [];
        return (
          n.set(t, i),
          t.forEach((t) => {
            i.push(e(t, n));
          }),
          i
        );
      }
      return t;
    })(e, new Map());
  }
}
