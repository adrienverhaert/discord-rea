/* Recovered shipped factory. Module 601007.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2694884..2697566
 * Raw property SHA-256: 58efe69e1b45afdff3153d3fcb605d0252f23a22d333d628f0ed19fe10f261b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => T }), n(321073));
  var i,
    r = n(477900),
    a = n(582128),
    s = n(821609),
    l = n(477782),
    o = n(922016),
    d = n(980707),
    c = n(900797),
    u = n(847374),
    _ = n(964486),
    E = n(37948),
    A = n(174459),
    h = n(652215),
    f = (((i = {}).PRIMARY = "primary"), (i.SECONDARY = "secondary"), i);
  function I(e) {
    let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
    A.default.track(h.HAw.PLAY_CTA_IMPRESSION, {
      location_stack: t,
      distributor: n,
      game_id: i,
      level: r,
    });
  }
  var p = n(660183);
  function T(e) {
    let {
        distributorCTAConfigs: t,
        applicationId: n,
        analyticsLocations: i,
        buttonVariant: T = "secondary",
        fullWidth: m = !0,
        stopPropagation: g = !1,
        onAction: S,
        onClose: N,
      } = e,
      C = (0, E.A)(),
      O = a.useRef(null),
      [R, L] = a.useState(!1);
    if (
      ((0, _.Ay)(() => {
        0 !== t.length &&
          (!(function (e) {
            let { analyticsLocations: t, gameId: n, distributors: i } = e;
            A.default.track(h.HAw.PLAY_CTA_DISPLAYED, {
              location_stack: t,
              game_id: n,
              distributors: i,
            });
          })({
            analyticsLocations: i,
            gameId: n,
            distributors: t.map((e) => {
              let { ctaConfig: t } = e;
              return t.distributor;
            }),
          }),
          1 === t.length &&
            I({
              analyticsLocations: i,
              distributor: t[0].ctaConfig.distributor,
              gameId: n,
              level: f.PRIMARY,
            }));
      }),
      0 === t.length)
    )
      return null;
    function y(e, t, r, a) {
      (!(function (e) {
        let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
        A.default.track(h.HAw.PLAY_CTA_CLICKED, {
          location_stack: t,
          distributor: n,
          game_id: i,
          level: r,
        });
      })({ analyticsLocations: i, distributor: t, gameId: n, level: a }),
        S?.({ action: r }),
        N?.(),
        C(e));
    }
    if (1 === t.length) {
      let { ctaConfig: e, skuId: n } = t[0];
      return (0, r.jsx)(s.$, {
        variant: T,
        size: "sm",
        icon: e.icon,
        text: e.getLabel(),
        fullWidth: m,
        onClick: (t) => {
          (g && t.stopPropagation(),
            y(e.getStoreUrl(n), e.distributor, e.analyticsAction, f.PRIMARY));
        },
      });
    }
    let D = t.flatMap((e, t) => {
      let { ctaConfig: n, skuId: i } = e,
        a = [];
      return (
        t > 0 && a.push((0, r.jsx)(l.bX, {}, `sep-${n.distributor}`)),
        a.push(
          (0, r.jsx)(
            l.Dr,
            {
              id: `distributor-${n.distributor}`,
              label: n.getStoreName(),
              iconLeft: n.icon,
              leadingAccessory: { type: "icon", icon: n.icon },
              action: () => y(n.getStoreUrl(i), n.distributor, n.analyticsAction, f.SECONDARY),
            },
            n.distributor,
          ),
        ),
        a
      );
    });
    return (0, r.jsx)(o.Y, {
      targetElementRef: O,
      position: "bottom",
      onRequestOpen: function () {
        for (let { ctaConfig: e } of (L(!0), t))
          I({ analyticsLocations: i, distributor: e.distributor, gameId: n, level: f.SECONDARY });
      },
      onRequestClose: () => L(!1),
      renderPopout: (e) => {
        let { closePopout: t } = e;
        return (0, r.jsx)("div", {
          onClick: (e) => e.stopPropagation(),
          style: { width: "fit-content", minWidth: O.current?.offsetWidth },
          children: (0, r.jsx)(d.W, {
            "data-menu-migrated": !0,
            navId: "play-on-distributor-menu",
            onClose: t,
            onSelect: void 0,
            "aria-label": p.intl.string(p.t["3XhYOS"]),
            children: (0, r.jsx)(l.rX, { children: D }),
          }),
        });
      },
      children: (e) =>
        (0, r.jsx)(s.$, {
          buttonRef: O,
          variant: T,
          size: "sm",
          icon: R ? c.t : u.a,
          iconPosition: "end",
          text: p.intl.string(p.t.nSHoxC),
          fullWidth: m,
          ...e,
          onClick: (t) => {
            (g && t.stopPropagation(), e.onClick?.(t));
          },
        }),
    });
  }
}
