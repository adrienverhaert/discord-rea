/* Recovered shipped factory. Module 321073.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 5653..6097
 * Raw property SHA-256: a00ca26d38b8d8bfbe42e197e6d3cb945adc006aef48f2852a3b60dd70c26a5b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(557939),
    o = e(250594),
    a = e(503199),
    i = e(496538),
    p = e(732376);
  n(
    {
      target: "Array",
      proto: !0,
      arity: 1,
      forced:
        e(503628)(function () {
          return 0x100000001 !== [].push.call({ length: 0x100000000 }, 1);
        }) ||
        !(function () {
          try {
            Object.defineProperty([], "length", { writable: !1 }).push();
          } catch (r) {
            return r instanceof TypeError;
          }
        })(),
    },
    {
      push: function (r) {
        var t = o(this),
          e = a(t),
          n = arguments.length;
        p(e + n);
        for (var f = 0; f < n; f++) ((t[e] = arguments[f]), e++);
        return (i(t, e), e);
      },
    },
  );
}
