/* Recovered shipped factory. Module 1659.
 * Source: recovered/web/assets/6c4512d02de5cdf3.js
 * UTF-16 property offsets: 95..271
 * Raw property SHA-256: 947543f1da14ba25f15f7fe19e2c01a032517ff2d76b468eed4202a38b94844e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (i, n, s) {
  s.d(n, { m: () => c });
  var t = s(7864);
  function c(i, n) {
    let s = i.tags?.guild_connections !== void 0,
      c = n.tags?.guild_connections !== void 0;
    return s && !c ? 1 : !s && c ? -1 : (0, t.AT)(i, n);
  }
}
