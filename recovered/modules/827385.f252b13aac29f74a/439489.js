/* Recovered shipped factory. Module 439489.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 20115..20826
 * Raw property SHA-256: 0b02f0873c8e595d407ce9b79ed4380026fe96cff5decd3488646e01c05d5f33
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { $: () => r });
  var a = t(518375);
  function r(e, n, t, r, u, s) {
    let i = (0, a.W)(n, e, "string", r, void 0),
      d = "always";
    void 0 === i &&
      ("digital" === t
        ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (d = "auto"), (i = u))
        : ((d = "auto"), (i = "numeric" === s || "2-digit" === s ? "numeric" : t)));
    let l = `${e}Display`,
      o = (0, a.W)(n, l, "string", ["always", "auto"], d);
    if ("numeric" === s || "2-digit" === s) {
      if ("numeric" !== i && "2-digit" !== i)
        throw RangeError("Can't mix numeric and non-numeric styles");
      if (
        (("minutes" === e || "seconds" === e) && (i = "2-digit"),
        "numeric" === i &&
          "always" === o &&
          ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
      )
        throw RangeError(
          "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
        );
    }
    return { style: i, display: o };
  }
}
