/* Recovered shipped factory. Module 692184.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2730185..2731073
 * Raw property SHA-256: 604a092a0174404444cb7c185571d735b422f61143a288c6866ba590df556467
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $8: () => _, s5: () => c, vI: () => d, y9: () => E });
  var i,
    r,
    a = n(731738),
    s = n(807393),
    l = n(174459),
    o = n(652215),
    d =
      (((i = {}).REGISTERED = "registered"),
      (i.NO_FRAMEWORK = "no_framework"),
      (i.NO_METADATA = "no_metadata"),
      (i.NOT_SKAN_ENABLED = "not_skan_enabled"),
      (i.SIGN_FAILED = "sign_failed"),
      (i.NO_TOKEN = "no_token"),
      i),
    c =
      (((r = {}).ATTRIBUTED = "attributed"),
      (r.NO_IMPRESSION = "no_impression"),
      (r.NOT_READY = "not_ready"),
      r);
  function u(e) {
    return `framework:${e ?? "none"}`;
  }
  function _(e, t, n) {
    (s.A.increment({ name: a.K.IOS_ATTRIBUTION_IMPRESSION, tags: [`result:${e}`, u(t)] }),
      l.default.track(o.HAw.IOS_ATTRIBUTION_VIEW_RESOLVED, {
        impression_id: n,
        attribution_framework: t ?? "none",
        attribution_result: e,
      }));
  }
  function E(e, t, n) {
    (s.A.increment({ name: a.K.IOS_ATTRIBUTION_CLICK, tags: [`result:${e}`, u(t)] }),
      l.default.track(o.HAw.IOS_ATTRIBUTION_CLICK_RESOLVED, {
        impression_id: n,
        attribution_framework: t ?? "none",
        attribution_result: e,
      }));
  }
}
