/* Recovered shipped factory. Module 619744.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3696972..3697792
 * Raw property SHA-256: 909ec302e69dfb6ba39c5b2f93dbec674a837266502498a2a0afca71e47d51f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(241326),
    s = n(866665),
    l = n(408278),
    o = n(609174),
    d = n(192308),
    c = n(660183);
  function u(e) {
    let { onBeforeDelete: t, onAfterDelete: u, variant: _ = "overlay-secondary" } = e,
      E = (0, o.Y_)(),
      A = r.useCallback(
        (e) => {
          (e.stopPropagation(),
            e.preventDefault(),
            (function (e) {
              let { clips: t, onBeforeDelete: r, onAfterDelete: a } = e;
              (0, d.openModalLazy)(
                async () => {
                  let { default: e } = await n.e("913367").then(n.bind(n, 223818));
                  return (n) =>
                    (0, i.jsx)(e, {
                      clips: t,
                      ...n,
                      onBeforeDelete: r,
                      onAfterDelete: async () => {
                        (await n.onClose(), a?.());
                      },
                    });
                },
                { stackingBehavior: "stack" },
              );
            })({ clips: [E], onAfterDelete: u, onBeforeDelete: t }));
        },
        [E, u, t],
      );
    return (0, i.jsx)(s.m, {
      text: c.intl.string(c.t.oyYWHE),
      position: "top",
      children: (0, i.jsx)(l.K, {
        onClick: A,
        icon: a.TrashIcon,
        "aria-label": c.intl.string(c.t.oyYWHE),
        variant: _,
        size: "sm",
      }),
    });
  }
}
