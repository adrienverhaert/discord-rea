/* Recovered shipped factory. Module 215570.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 283899..284539
 * Raw property SHA-256: c29d140c7902f09f330ea2d0ee4ec2dbde6bcc3ba00d311f72fbfd0f281ac04f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { OW: () => a, bj: () => s });
  var r = n(630449),
    i = n(272469),
    o = n(607423);
  function a(e) {
    let t = (0, r.o5)().getScopeData().contexts.flags,
      n = t ? t.values : [];
    return (
      n.length &&
        (void 0 === e.contexts && (e.contexts = {}), (e.contexts.flags = { values: [...n] })),
      e
    );
  }
  function s(e, t, n = 100) {
    let a = (0, r.o5)().getScopeData().contexts;
    (a.flags || (a.flags = { values: [] }),
      (function (e, t, n, r) {
        if ("boolean" != typeof n) return;
        if (e.length > r) {
          o.T &&
            i.vF.error(
              `[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`,
            );
          return;
        }
        let a = e.findIndex((e) => e.flag === t);
        (-1 !== a && e.splice(a, 1), e.length === r && e.shift(), e.push({ flag: t, result: n }));
      })(a.flags.values, e, t, n));
  }
}
