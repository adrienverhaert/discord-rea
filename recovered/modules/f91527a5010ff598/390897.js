/* Recovered shipped factory. Module 390897.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 242228..242849
 * Raw property SHA-256: 468c8ffdc08eba35f7d1920a074d87e4395bb982fc497a18a42d77dbad5f7ca2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { default: () => u, f: () => d });
  var l = n(477900),
    i = n(582128),
    s = n(506774),
    a = n(189213),
    r = n(150934),
    o = n(256416),
    c = n(660183);
  let d = "report_to_mod_dont_show_resolve_confirm";
  function u(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: u } = e,
      [h, m] = i.useState(!1);
    return (0, l.jsx)(a.a, {
      transitionState: t,
      onClose: n,
      title: c.intl.string(o.default["8R4euh"]),
      subtitle: c.intl.string(o.default.xgOraS),
      actions: [
        {
          text: c.intl.string(o.default.ctefO2),
          onClick: function () {
            (h && s.w.set(d, !0), n(), u());
          },
        },
      ],
      actionBarInput: (0, l.jsx)(r.S, {
        checked: h,
        onChange: (e) => m(e),
        label: c.intl.string(o.default["3puq5c"]),
        labelType: "secondary",
      }),
    });
  }
}
