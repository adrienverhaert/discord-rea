/* Recovered shipped factory. Module 471107.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3996671..3997212
 * Raw property SHA-256: 9e60a74964d8d4fa3bd83083478a20c2d75ad08e0896af5419b7314c6e507757
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(451988),
    s = n(775602),
    l = n(927813);
  function o(e) {
    return Math.floor(e / l.A.Millis.SECOND) * l.A.Millis.SECOND;
  }
  function d() {
    let { hovered: e, isAppFocused: t = !0 } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      [n, d] = i.useState(() => o(Date.now())),
      c = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
      u = !t || (c && !e),
      _ = u ? 15 * l.A.Millis.SECOND : l.A.Millis.SECOND;
    return (
      i.useEffect(() => {
        let e = new a.IX();
        return (
          e.start(_, () => {
            d(o(Date.now()));
          }),
          () => e.stop()
        );
      }, [_]),
      { now: n, slowTickMode: u }
    );
  }
}
