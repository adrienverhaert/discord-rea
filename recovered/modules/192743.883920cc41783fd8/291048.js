/* Recovered shipped factory. Module 291048.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 19246..20007
 * Raw property SHA-256: ba4672d684f26ed0cd1234dc08ea52882e72cf85ad58fffea2da61f9dcc1495b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = function (e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        default:
          return t.date({ width: "full" });
      }
    },
    o = function (e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        default:
          return t.time({ width: "full" });
      }
    };
  let a = {
    p: o,
    P: function (e, t) {
      var n,
        a = e.match(/(P+)(p+)?/) || [],
        i = a[1],
        u = a[2];
      if (!u) return r(e, t);
      switch (i) {
        case "P":
          n = t.dateTime({ width: "short" });
          break;
        case "PP":
          n = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          n = t.dateTime({ width: "long" });
          break;
        default:
          n = t.dateTime({ width: "full" });
      }
      return n.replace("{{date}}", r(i, t)).replace("{{time}}", o(u, t));
    },
  };
}
