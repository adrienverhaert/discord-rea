/* Recovered shipped factory. Module 852015.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 79354..79987
 * Raw property SHA-256: f27878482a652e4a582e3add689f91964baccd83554d7e5e5b6f4e31e878e8ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n, i, o, a;
  let s;
  (r.d(t, { O0: () => i, f$: () => n }),
    ((o = n || (n = {})).symbol = Symbol.for("protobuf-ts/unknown")),
    (o.onRead = (e, t, r, n, i) => {
      (s(t) ? t[o.symbol] : (t[o.symbol] = [])).push({ no: r, wireType: n, data: i });
    }),
    (o.onWrite = (e, t, r) => {
      for (let { no: e, wireType: n, data: i } of o.list(t)) r.tag(e, n).raw(i);
    }),
    (o.list = (e, t) => {
      if (s(e)) {
        let r = e[o.symbol];
        return t ? r.filter((e) => e.no == t) : r;
      }
      return [];
    }),
    (o.last = (e, t) => o.list(e, t).slice(-1)[0]),
    (s = (e) => e && Array.isArray(e[o.symbol])),
    ((a = i || (i = {}))[(a.Varint = 0)] = "Varint"),
    (a[(a.Bit64 = 1)] = "Bit64"),
    (a[(a.LengthDelimited = 2)] = "LengthDelimited"),
    (a[(a.StartGroup = 3)] = "StartGroup"),
    (a[(a.EndGroup = 4)] = "EndGroup"),
    (a[(a.Bit32 = 5)] = "Bit32"));
}
