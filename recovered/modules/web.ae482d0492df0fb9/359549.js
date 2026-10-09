/* Recovered shipped factory. Module 359549.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2666912..2669049
 * Raw property SHA-256: d427fbf03d209ed15313d79d77ced96bc8d4a5fa4ba8d33c45f076b1b65f5276
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => C, JC: () => N, rC: () => O });
  var i = n(582128),
    r = n(991690),
    a = n(554146),
    s = n(522305),
    l = n(735991),
    o = n(627363),
    d = n(20015),
    c = n(826673),
    u = n(438652),
    _ = n(174459),
    E = n(881698),
    A = n(652215),
    h = n(49999);
  let f = new Set();
  function I(e) {
    return (0, d.n)(e, A.gfo.CLOUD_GAMING_DEMO) && e.supportsEmbeddedSurface(r.U.MAIN);
  }
  function p() {
    ((0, c.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: h.i.TAKE_ACTION }),
      (0, c.Dr)(a.M.CLOUD_PLAY_POPOVER, { dismissAction: h.i.TAKE_ACTION }));
  }
  function T(e) {
    let { countryCode: t, activity: n } = e;
    return (
      null == t ||
      (!n.blocked_locales.includes(t) &&
        (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
  }
  function m(e, t) {
    return (
      e?.bot != null &&
      !!(0, l.Z$)(e) &&
      (null == e.embeddedActivityConfig ||
        T({ countryCode: t, activity: e.embeddedActivityConfig }))
    );
  }
  function g(e) {
    let { data: t, refetch: n } = (0, o.YY)(e);
    return (
      i.useEffect(() => {
        null == e || null == t || null != t.bot || f.has(e) || (n(), f.add(e));
      }, [e, t, n]),
      t
    );
  }
  function S(e) {
    return g((0, E.A)(e?.linkedGames)?.id);
  }
  function N(e) {
    let { data: t } = (0, u.Q)(),
      n = S(e);
    return (
      null != e &&
      (e?.embeddedActivityConfig == null ||
        !!T({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
      (!!I(e) || m(n, t?.alpha2))
    );
  }
  function C(e) {
    let { application: t, analyticsLocations: n } = e,
      r = N(t),
      { bot: a } = t ?? { bot: null },
      l = S(t),
      { bot: o } = l ?? { bot: null },
      d = l?.id,
      c = o?.id;
    return i.useMemo(
      () =>
        r && null != t
          ? I(t) && null != a
            ? () => {
                (p(),
                  _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: t.id,
                    launching_application_id: t.id,
                    location_stack: n,
                  }),
                  (0, s.Q)({ appId: t.id, botId: a.id, analyticsLocations: n ?? [] }));
              }
            : null != d && null != c
              ? () => {
                  (p(),
                    _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                      source_application_id: t.id,
                      launching_application_id: d,
                      location_stack: n,
                    }),
                    (0, s.Q)({ appId: d, botId: c, analyticsLocations: n ?? [] }));
                }
              : void 0
          : null,
      [r, t, a, d, c, n],
    );
  }
  function O(e) {
    let { applicationId: t, sourceApplicationId: n, analyticsLocations: r } = e,
      { data: a } = (0, u.Q)(),
      l = g(t);
    return i.useMemo(() => {
      if (l?.bot == null || !m(l, a?.alpha2)) return null;
      let e = l.bot;
      return () => {
        (p(),
          _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
            source_application_id: n ?? l.id,
            launching_application_id: l.id,
            location_stack: r,
          }),
          (0, s.Q)({ appId: l.id, botId: e.id, analyticsLocations: r ?? [] }));
      };
    }, [l, a, n, r]);
  }
}
