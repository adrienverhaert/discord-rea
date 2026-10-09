/* Recovered shipped factory. Module 304052.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 2532..2819
 * Raw property SHA-256: 92507c66b92a444b1ace6013dff2b3407a5891fa191e6283e10506d00bb45027
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(221015),
    o = e(93714),
    a = e(250594),
    i = e(503199),
    p = function (r) {
      var t = 1 === r;
      return function (e, p, f) {
        for (var u, y = a(e), c = o(y), s = i(c), d = n(p, f); s-- > 0;)
          if (d((u = c[s]), s, y))
            switch (r) {
              case 0:
                return u;
              case 1:
                return s;
            }
        return t ? -1 : void 0;
      };
    };
  r.exports = { findLast: p(0), findLastIndex: p(1) };
}
