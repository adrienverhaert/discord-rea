/* Recovered shipped factory. Module 158056.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 816798..817614
 * Raw property SHA-256: 00de747426333b8494fda43f42c822f3bf1a036b81ba62603b958bb969b3051a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = r(906046),
    o = r(315646),
    a = r(12161),
    s = r(741623),
    l = n("%WeakMap%", !0),
    u = i("WeakMap.prototype.get", !0),
    c = i("WeakMap.prototype.set", !0),
    f = i("WeakMap.prototype.has", !0),
    p = i("WeakMap.prototype.delete", !0);
  e.exports = l
    ? function () {
        var e,
          t,
          r = {
            assert: function (e) {
              if (!r.has(e)) throw new s("Side channel does not contain " + o(e));
            },
            delete: function (r) {
              if (l && r && ("object" == typeof r || "function" == typeof r)) {
                if (e) return p(e, r);
              } else if (a && t) return t.delete(r);
              return !1;
            },
            get: function (r) {
              return l && r && ("object" == typeof r || "function" == typeof r) && e
                ? u(e, r)
                : t && t.get(r);
            },
            has: function (r) {
              return l && r && ("object" == typeof r || "function" == typeof r) && e
                ? f(e, r)
                : !!t && t.has(r);
            },
            set: function (r, n) {
              l && r && ("object" == typeof r || "function" == typeof r)
                ? (e || (e = new l()), c(e, r, n))
                : a && (t || (t = a()), t.set(r, n));
            },
          };
        return r;
      }
    : a;
}
