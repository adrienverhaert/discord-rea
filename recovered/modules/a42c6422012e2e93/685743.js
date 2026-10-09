/* Recovered shipped factory. Module 685743.
 * Source: recovered/web/assets/a42c6422012e2e93.js
 * UTF-16 property offsets: 95..603
 * Raw property SHA-256: 6d2297ef5654cfc96e701f70051ee1880d12715ef2567b40ce5362b7efa8e86e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => o });
  var r = t(582128),
    u = t(739187),
    l = t(857250),
    a = t(97483),
    i = t(957565),
    c = t(927813),
    s = t(907878),
    d = t(660183);
  function o(e, n, t, o) {
    let p = r.useRef(null),
      [C, h] = r.useState(!1);
    return {
      handleCopyServerIp: r.useCallback(
        () => (
          null != p.current && clearTimeout(p.current),
          (0, s.ed)(e, n, t),
          (0, i.C)(o ?? ""),
          (0, u.P)((0, l.o)(d.intl.string(d.t["+5kSoW"]), a.Ck.SUCCESS)),
          h(!0),
          (p.current = setTimeout(() => {
            h(!1);
          }, 2 * c.A.Millis.SECOND)),
          () => {
            null != p.current && clearTimeout(p.current);
          }
        ),
        [e, n, t, o],
      ),
      animateCopyIcon: C,
    };
  }
}
