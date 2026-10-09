/* Recovered shipped factory. Module 839656.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 40547..41346
 * Raw property SHA-256: fc446ed8eb7b935f89814af3fee4d6717cbdfa459954cf5583e5da1e96b00f24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => E });
  var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(707554),
    o = n(834730),
    d = n(435558),
    c = n.n(d),
    u = n(223637),
    m = n(999915),
    h = n(46054);
  let g = c().omit(m.Ay.RULES, ["codeBlock", "heading"]),
    p = {
      ...u.A,
      parse: function (e, t, n) {
        let i = u.A.parse(e, t, n),
          l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
        return { ...i, level: l };
      },
    },
    A = h.A.combineAndInjectMentionRule(g, [
      h.A.createReactRules(h.A.defaultReactRuleOptions),
      { header: p },
    ]),
    x = h.A.reactParserFor(A);
  var f = n(199014),
    I = n(165648);
  function E(e) {
    let { color: t, className: n, variant: s, text: d, lineClamp: c } = e,
      u = (0, a.$)(),
      m = l.useMemo(
        () =>
          null == d
            ? null
            : x(d, !0, { allowHeading: null == c, allowList: null == c, initialHeaderLevel: u }),
        [d, c, u],
      );
    return (0, i.jsx)(o.E, {
      className: r()(n, I.PT, { [f.E]: null != c && c > 1, [f.D]: 1 === c }),
      color: t,
      variant: s,
      lineClamp: c,
      children: m,
    });
  }
}
