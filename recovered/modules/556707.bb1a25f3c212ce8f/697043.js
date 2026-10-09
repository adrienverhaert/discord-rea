/* Recovered shipped factory. Module 697043.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 322732..323350
 * Raw property SHA-256: 47937ce3dc331a98c041ed243deb22ae945c173be9222a8db8013d04524f7732
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { MI: () => o, TC: () => s, kM: () => a });
  var r = n(435819),
    i = n(834932);
  let o = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function a(e, t) {
    let n = (function (e) {
        let t;
        if (!e) return;
        let n = e.match(o);
        if (n)
          return (
            "1" === n[3] ? (t = !0) : "0" === n[3] && (t = !1),
            { traceId: n[1], parentSampled: t, parentSpanId: n[2] }
          );
      })(e),
      a = (0, r.yD)(t);
    if (!n || !n.traceId) return { traceId: (0, i.el)(), spanId: (0, i.ZF)() };
    let { traceId: s, parentSpanId: l, parentSampled: c } = n;
    return { traceId: s, parentSpanId: l, spanId: (0, i.ZF)(), sampled: c, dsc: a || {} };
  }
  function s(e = (0, i.el)(), t = (0, i.ZF)(), n) {
    let r = "";
    return (void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`);
  }
}
