/* Recovered shipped factory. Module 657375.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2727841..2730184
 * Raw property SHA-256: bc1ea2bce381119d4ef3cbbd5ce6f83de647d0972238b38e74f63cbb61600bbf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { FW: () => g, bg: () => S, RH: () => p }), n(134528), n(947204));
  var i,
    r = (((i = {}).AD_ATTRIBUTION_KIT = "aak"), i),
    a = n(626584),
    s = n(692184),
    l = n(929482),
    o = n(636537),
    d = n(38405),
    c = n(652215);
  async function u(e) {
    let { metadataSealed: t, impressionId: n, specs: i, signal: r } = e;
    try {
      return (
        (
          await o.Bo.post({
            url: c.Rsh.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD,
            body: { metadata_sealed: t, impression_id: n, specs: i },
            failImmediatelyWhenRateLimited: !0,
            rejectWithError: !0,
            timeout: 5e3,
            signal: r,
          })
        ).body.payloads ?? null
      );
    } catch (e) {
      return (d.A.captureException(e, { tags: { app_context: "ios_attribution" } }), null);
    }
  }
  let _ = { [r.AD_ATTRIBUTION_KIT]: { viewThroughSpec: { kind: r.AD_ATTRIBUTION_KIT } } },
    E = new a.A("IosAttribution"),
    A = new Map();
  function h(e, t) {
    return A.get(e) === t;
  }
  function f(e, t) {
    h(e, t) && A.delete(e);
  }
  function I(e) {
    null != e && (0, l.bg)(e).catch(() => {});
  }
  function p(e) {
    let { impressionId: t, metadataSealed: n, framework: i } = e,
      r = {
        framework: i,
        token: null,
        signAbort: new AbortController(),
        registration: Promise.resolve(),
      };
    (A.set(t, r),
      (r.registration = T({
        impressionId: t,
        metadataSealed: n,
        framework: i,
        impression: r,
      }).catch(() => {
        f(t, r);
      })));
  }
  async function T(e) {
    let { impressionId: t, metadataSealed: n, framework: i, impression: r } = e,
      a = _[i]?.viewThroughSpec;
    if (null == a) {
      (E.warn(`No strategy for ${i}; impression ${t} is unattributed`),
        (0, s.$8)(s.vI.NO_FRAMEWORK, i),
        f(t, r));
      return;
    }
    let o = await u({ metadataSealed: n, impressionId: t, specs: [a], signal: r.signAbort.signal });
    if (!h(t, r)) return;
    let d = null != o ? (o.at(0)?.payload ?? null) : null;
    if (null == d) {
      ((0, s.$8)(s.vI.SIGN_FAILED, i, t), A.delete(t));
      return;
    }
    let c = await (0, l.EO)(t, i, JSON.stringify(d));
    if (!h(t, r)) return void I(c);
    if (null == c) {
      ((0, s.$8)(s.vI.NO_TOKEN, i, t), A.delete(t));
      return;
    }
    ((0, s.$8)(s.vI.REGISTERED, i, t), (r.token = c));
  }
  async function m(e) {
    let t = A.get(e);
    return null == t
      ? (E.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
        (0, s.y9)(s.s5.NO_IMPRESSION, (0, l.BU)(), e),
        null)
      : (null == t.token && (await t.registration), h(e, t) && null != t.token)
        ? ((0, s.y9)(s.s5.ATTRIBUTED, t.framework, e), t.token)
        : (E.warn(
            `Impression ${e} not registered natively in time; store sheet will be unattributed`,
          ),
          (0, s.y9)(s.s5.NOT_READY, t.framework, e),
          null);
  }
  async function g(e) {
    let { impressionId: t } = e,
      n = (0, l.BU)();
    if (null == n || null == _[n]) return;
    let i = await m(t);
    return null != i ? { impressionToken: i } : void 0;
  }
  function S(e) {
    let t = A.get(e);
    null != t && (A.delete(e), t.signAbort.abort(), I(t.token));
  }
}
