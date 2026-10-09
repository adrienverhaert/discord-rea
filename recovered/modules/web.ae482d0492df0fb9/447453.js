/* Recovered shipped factory. Module 447453.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 817417..818412
 * Raw property SHA-256: 1c2c805a2b6dfa996a98082c3bdafe2a0b272888beead450026c23ac71858bed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(866323),
    d = n(834730),
    c = n(475358),
    u = n(17928),
    _ = n(775602),
    E = n(425763),
    A = n(660183),
    h = n(707615);
  function f(e) {
    let { className: t } = e,
      n = [
        { keybinds: ["Spacebar", "Enter"], name: A.intl.string(A.t["cs/HVH"]) },
        { keybinds: ["up", "down"], name: A.intl.string(A.t.dmMqay) },
        { keybinds: ["ESC"], name: A.intl.string(A.t["1ioMJQ"]) },
      ],
      a = (0, u.bG)([_.Ay], () => _.Ay.useReducedMotion),
      f = (0, E.VU)();
    return (0, o.p)(
      f,
      {
        enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
        leave: { opacity: 0, y: 80 * !a },
        config: l.config.stiff,
      },
      "animate-always",
    )((e, a) =>
      a
        ? (0, i.jsx)("div", {
            className: s()(h.lY, t),
            children: (0, i.jsx)(l.animated.div, {
              className: h.kL,
              style: e,
              children: n.map((e, t) => {
                let { keybinds: a, name: s } = e;
                return (0, i.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      (0, i.jsx)(d.E, {
                        variant: "text-md/semibold",
                        className: h.nx,
                        children: s,
                      }),
                      a.map((e) => (0, i.jsx)(c.e, { shortcut: e, className: h.LE }, e)),
                      t < n.length - 1 ? (0, i.jsx)("span", { className: h.me }) : null,
                    ],
                  },
                  s,
                );
              }),
            }),
          })
        : null,
    );
  }
}
