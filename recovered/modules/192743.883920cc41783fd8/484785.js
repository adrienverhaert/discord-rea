/* Recovered shipped factory. Module 484785.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 164387..165227
 * Raw property SHA-256: d7bfd909c303b4f41effecec80feb3394b76f37d164d7bf8d7ec28f61d287373
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(491238),
    o = n(879995),
    a = n(86177),
    i = n(850666),
    u = n(886154),
    l = n(18352),
    s = r ? r.prototype : void 0,
    c = s ? s.valueOf : void 0;
  e.exports = function (e, t, n, r, s, f, d) {
    switch (n) {
      case "[object DataView]":
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
        ((e = e.buffer), (t = t.buffer));
      case "[object ArrayBuffer]":
        if (e.byteLength != t.byteLength || !f(new o(e), new o(t))) break;
        return !0;
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return a(+e, +t);
      case "[object Error]":
        return e.name == t.name && e.message == t.message;
      case "[object RegExp]":
      case "[object String]":
        return e == t + "";
      case "[object Map]":
        var h = u;
      case "[object Set]":
        var p = 1 & r;
        if ((h || (h = l), e.size != t.size && !p)) break;
        var y = d.get(e);
        if (y) return y == t;
        ((r |= 2), d.set(e, t));
        var m = i(h(e), h(t), r, s, f, d);
        return (d.delete(e), m);
      case "[object Symbol]":
        if (c) return c.call(e) == c.call(t);
    }
    return !1;
  };
}
