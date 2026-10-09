/* Recovered shipped factory. Module 240921.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4421914..4423807
 * Raw property SHA-256: e7f5f82d0e70751c479255466ba4bad7c801cbabfeb3fd06664404c766e33203
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => c });
  var i = n(582128),
    r = n(17928);
  let a = new (n(941426).Vy)("ApexExperiment");
  var s = n(80703),
    l = n(280450),
    o = n(403362),
    d = n(710195);
  function c(e) {
    return (function (e, t, n, s) {
      let l,
        { name: o, kind: d, variations: c, defaultConfig: u } = e;
      t.registerExperiment(e);
      let _ = null;
      function E(e) {
        return null == e
          ? null
          : (e !== l &&
              ((l = e),
              (_ = (function (e) {
                let t = c[e.variantId] ?? u;
                if ("function" != typeof t) return t;
                if (null == e.config) return u;
                try {
                  return t(e.config);
                } catch (e) {
                  return (a.error(`Failed to parse dynamic config for experiment ${o}`, e), null);
                }
              })(e))),
            _);
      }
      return {
        definition: e,
        useConfig: function (e) {
          let n = s(d, e),
            a = s("user", e),
            [l, c] = (0, r.yK)([t], () => t.getEvaluationAndAssignment(d, n, o, a), [n, a]),
            _ = c?.variantId,
            A = c?.trackedVariantId ?? _,
            h = c?.revision,
            f = c?.isOverride,
            I = c?.exposureTrackingEnabled,
            p = c?.useAsEligibility,
            T = E(c),
            m = null == T;
          return ((0, i.useEffect)(() => {
            null == l ||
              null == A ||
              null == h ||
              !1 !== f ||
              !0 !== I ||
              !0 === p ||
              m ||
              t.trackExperimentExposure(l, o, e.location, d, h, A, n);
          }, [n, l, A, h, e.location, f, I, p, m]),
          null == _ || !0 === p || null == T)
            ? u
            : T;
        },
        getConfig: function (e, i) {
          let r = n(d, e),
            a = "guild" === d ? n("user", { location: e.location }) : void 0,
            [s, l] = t.getEvaluationAndAssignment(d, r, o, a),
            c = l?.variantId,
            _ = l?.trackedVariantId ?? c,
            A = l?.revision,
            h = l?.isOverride,
            f = l?.exposureTrackingEnabled,
            I = l?.useAsEligibility,
            p = E(l);
          return (i?.autoTrackExposure !== !1 &&
            null != s &&
            null != _ &&
            null != A &&
            !1 === h &&
            !0 === f &&
            !0 !== I &&
            null != p &&
            t.trackExperimentExposure(s, o, e.location, d, A, _, r),
          null == c || !0 === I || null == p)
            ? u
            : p;
        },
      };
    })(e, d.A, u, _);
  }
  function u(e, t) {
    switch (e) {
      case "guild":
        return t.guildId;
      case "user":
        return l.default.getId();
      case "installation":
        return (0, s.v)(l.default.getInstallationForTracking()) ?? "";
      default:
        (0, o.xb)(e);
    }
  }
  function _(e, t) {
    let [n, i] = (0, r.yK)([l.default], () => [
      l.default.getId(),
      l.default.getInstallationForTracking(),
    ]);
    switch (e) {
      case "guild":
        return t.guildId;
      case "user":
        return n;
      case "installation":
        return (0, s.v)(i) ?? "";
      default:
        (0, o.xb)(e);
    }
  }
}
