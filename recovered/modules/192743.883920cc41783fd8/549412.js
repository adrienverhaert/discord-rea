/* Recovered shipped factory. Module 549412.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 318107..319154
 * Raw property SHA-256: 3dc5e05408e8765bf85d9ff18fb927d2f689fe01597c0bf9362bae858f16ace6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  var n = "u" > typeof Uint8Array && "u" > typeof Uint16Array && "u" > typeof Int32Array;
  ((t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
      var n = t.shift();
      if (n) {
        if ("object" != typeof n) throw TypeError(n + "must be non-object");
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }
    return e;
  }),
    (t.shrinkBuf = function (e, t) {
      return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
    }));
  var r = {
      arraySet: function (e, t, n, r, o) {
        if (t.subarray && e.subarray) return void e.set(t.subarray(n, n + r), o);
        for (var a = 0; a < r; a++) e[o + a] = t[n + a];
      },
      flattenChunks: function (e) {
        var t, n, r, o, a, i;
        for (t = 0, r = 0, n = e.length; t < n; t++) r += e[t].length;
        for (t = 0, i = new Uint8Array(r), o = 0, n = e.length; t < n; t++)
          ((a = e[t]), i.set(a, o), (o += a.length));
        return i;
      },
    },
    o = {
      arraySet: function (e, t, n, r, o) {
        for (var a = 0; a < r; a++) e[o + a] = t[n + a];
      },
      flattenChunks: function (e) {
        return [].concat.apply([], e);
      },
    };
  ((t.setTyped = function (e) {
    e
      ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, r))
      : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, o));
  }),
    t.setTyped(n));
}
