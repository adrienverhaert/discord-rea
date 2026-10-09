/* Recovered shipped factory. Module 537174.
 * Source: recovered/web/assets/5307ba8e8947afd6.js
 * UTF-16 property offsets: 95..1035
 * Raw property SHA-256: 41d92f1206f3a75ccff390c1eee4da30d369f0761a931c1d23168a9972c3d677
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => f, o: () => n });
  var s = i(582128),
    a = i(317097),
    o = i(17928),
    l = i(602853),
    u = i(661531),
    c = i(775602),
    r = i(521427),
    d = i(381941);
  function f(e) {
    let { ignoreAccessibilityPreference: t = !1 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = (0, l.r)(u.A.colors.BACKGROUND_BASE_LOWER).hex(),
      f = (0, o.bG)([c.Ay], () => (c.Ay.desaturateUserColors ? c.Ay.saturation : 1)),
      n = (0, o.bG)([c.Ay], () => c.Ay.officialMessageStyle);
    return s.useMemo(() => {
      if (null == e) return;
      let s = t ? "default" : n;
      if ("hidden" === s) return;
      let o = "no_gradient" !== s;
      return {
        "--custom-guild-official-message": (0, a.$k)(e, !0),
        "--custom-guild-official-message-hsl": (0, a.BK)(e, !0),
        "--custom-guild-official-message-alpha": o ? d.cZ : 0,
        "--custom-guild-official-message-dither-opacity": +!!o,
        "--custom-guild-official-message-text":
          "no_text_color" !== s ? (0, r.Fy)(e, i, f, o ? d.cZ : 0).hex() : "var(--text-default)",
      };
    }, [e, i, f, n, t]);
  }
  function n() {
    return (0, o.bG)([c.Ay], () => "hidden" === c.Ay.officialMessageStyle);
  }
}
