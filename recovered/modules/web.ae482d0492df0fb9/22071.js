/* Recovered shipped factory. Module 22071.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6527008..6529004
 * Raw property SHA-256: e9e498abda0631abd5a77e6b713b1e458bb2b4e07960087dad3a5560e2ac92af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => C });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(834730),
    l = n(496431),
    o = n(765548),
    d = n(414121),
    c = n(287809),
    u = n(451988),
    _ = n(765178),
    E = n(866665),
    A = n(408278),
    h = n(933832),
    f = n(624479),
    I = n(957565),
    p = n(660183),
    T = n(604487);
  function m(e) {
    let { url: t } = e,
      [n, a] = r.useState(!1),
      [s] = r.useState(() => new u.Ep());
    r.useEffect(() => () => s.stop(), [s]);
    let [l, o] = r.useState(t);
    t !== l && (o(t), a(!1));
    let d = r.useCallback(() => {
        (0, I.C)(t, () => {
          (a(!0), _.O.announce(p.intl.string(p.t["+5kSoW"])), s.start(1e3, () => a(!1)));
        });
      }, [t, s]),
      c = p.intl.string(n ? p.t["+5kSoW"] : p.t.WqhZss);
    return (0, i.jsxs)("div", {
      className: T.nM,
      children: [
        (0, i.jsx)("input", {
          className: T.nf,
          type: "text",
          value: t,
          readOnly: !0,
          "aria-label": p.intl.string(p.t.WqhZss),
          onFocus: (e) => e.currentTarget.select(),
        }),
        I.p5 &&
          (0, i.jsx)(E.m, {
            text: c,
            children: (0, i.jsx)(A.K, {
              size: "md",
              variant: "secondary",
              "aria-label": c,
              icon: n ? h.CheckmarkLargeIcon : f.CopyIcon,
              onClick: d,
            }),
          }),
      ],
    });
  }
  var g = n(191627),
    S = n(273665),
    N = n(232442);
  function C(e) {
    let t,
      n,
      { linkCode: u, expiresAt: _, onRefresh: E } = e,
      A = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id),
      h = (0, o.A)(E),
      { days: f, hours: I, minutes: T, seconds: C } = (0, l.A)(_);
    if (
      (r.useEffect(() => {
        let e = _ - Date.now();
        if (e <= 0) return void h();
        let t = setTimeout(h, e);
        return () => clearTimeout(t);
      }, [_, h]),
      null == A)
    )
      return null;
    let O = (0, g.jZ)(A, u),
      R = p.intl.string(S.default.RfkLDs);
    return (0, i.jsxs)("div", {
      className: N.kL,
      children: [
        (0, i.jsxs)("div", {
          className: N.Nr,
          children: [
            (0, i.jsxs)("div", {
              className: N.wx,
              children: [
                (0, i.jsx)(s.E, {
                  variant: "text-md/medium",
                  color: "text-default",
                  children: p.intl.string(S.default.pojgfk),
                }),
                (0, i.jsx)(s.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: `${R} ${((n = Math.floor((t = Math.max(0, 86400 * f + 3600 * I + 60 * T + C)) / 60)), `${n}:${String(t % 60).padStart(2, "0")}`)}`,
                }),
              ],
            }),
            (0, i.jsx)(d.Lx, { size: 200, text: O, ariaLabel: p.intl.string(S.default.Mi60fm) }),
          ],
        }),
        (0, i.jsx)("div", {
          className: N.yF,
          children: (0, i.jsx)(s.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: p.intl.string(S.default.TGr8Ws),
          }),
        }),
        (0, i.jsx)(m, { url: O }),
      ],
    });
  }
}
