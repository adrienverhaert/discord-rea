/* Recovered shipped factory. Module 262828.
 * Source: recovered/web/assets/8a7cd7b26f652a21.js
 * UTF-16 property offsets: 95..575
 * Raw property SHA-256: 176a4be492b5c5e785c336b9dc5ac459602fc6c1bfc4fc1c5a6692bede33b0f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, a) {
  a.d(e, { A: () => s });
  var u = a(582128),
    i = a(17928),
    l = a(913122),
    c = a(627363),
    n = a(587895);
  function s(t, e) {
    let a = (0, i.bG)([n.A], () => n.A.getGuildApplication(t, e)),
      [s, p] = u.useState(null == a),
      [d, r] = u.useState(),
      [h, o] = u.useState(!1),
      A = u.useCallback(async () => {
        if (null == a && null != t) {
          (o(!0), p(!0));
          try {
            await c.Ay.getApplicationsForGuild(t, { type: e, includeTeam: !0 });
          } catch (t) {
            r(new l.LG(t));
          } finally {
            p(!1);
          }
        }
      }, [a, e, t]);
    return (
      u.useEffect(() => {
        h || A();
      }, [h, A]),
      { application: a, error: d, loading: s }
    );
  }
}
