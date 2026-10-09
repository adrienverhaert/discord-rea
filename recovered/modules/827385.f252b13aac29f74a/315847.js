/* Recovered shipped factory. Module 315847.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 19165..20114
 * Raw property SHA-256: 801543be0d9b220017ac2fe346c5eb4e6ac0b58c091d5efc8c10689df1d5f858
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  function a(e, n) {
    let t = n && n.cache ? n.cache : d,
      a = n && n.serializer ? n.serializer : s;
    return (
      n && n.strategy
        ? n.strategy
        : function (e, n) {
            var t, a;
            let s = 1 === e.length ? r : u;
            return ((t = n.cache.create()), (a = n.serializer), s.bind(this, e, t, a));
          }
    )(e, { cache: t, serializer: a });
  }
  function r(e, n, t, a) {
    let r = null == a || "number" == typeof a || "boolean" == typeof a ? a : t(a),
      u = n.get(r);
    return (void 0 === u && ((u = e.call(this, a)), n.set(r, u)), u);
  }
  function u(e, n, t) {
    let a = Array.prototype.slice.call(arguments, 3),
      r = t(a),
      u = n.get(r);
    return (void 0 === u && ((u = e.apply(this, a)), n.set(r, u)), u);
  }
  t.d(n, { B: () => a, W: () => l });
  let s = function () {
    return JSON.stringify(arguments);
  };
  class i {
    cache;
    constructor() {
      this.cache = Object.create(null);
    }
    get(e) {
      return this.cache[e];
    }
    set(e, n) {
      this.cache[e] = n;
    }
  }
  let d = {
      create: function () {
        return new i();
      },
    },
    l = {
      variadic: function (e, n) {
        var t, a;
        return ((t = n.cache.create()), (a = n.serializer), u.bind(this, e, t, a));
      },
      monadic: function (e, n) {
        var t, a;
        return ((t = n.cache.create()), (a = n.serializer), r.bind(this, e, t, a));
      },
    };
}
