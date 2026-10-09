/* Recovered shipped factory. Module 956549.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2640693..2641680
 * Raw property SHA-256: 1dd8b4924182df8d3867d675562910ab7a717a5866d4c7c93fc73cc197e05789
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(734057),
    r = n(287809),
    a = n(646865),
    s = n(909206),
    l = n(795816),
    o = n(817636),
    d = n(574152);
  async function c(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
      ((t = await (0, o.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)()));
    } catch {
      return !1;
    }
    return (0, a.w)(n, () => u({ ...e, targetApplication: t }));
  }
  async function u(e) {
    let {
        targetApplication: t,
        locationObject: n,
        channelId: a,
        analyticsLocations: o,
        componentId: c,
        commandOrigin: u,
        sectionName: _,
        source: E,
        onExecutedCallback: A,
        referrerId: h,
        customId: f,
        inviterUserId: I,
        onConfirmActivityLaunchChecksAlertOpen: p,
      } = e,
      T = (0, d.A)(),
      m = r.default.getCurrentUser();
    return (
      null != a &&
      null != i.A.getChannel(a) &&
      null != m &&
      null != t &&
      (s.MJ(t.id),
      await (0, l.su)({
        channelId: a,
        applicationId: t.id,
        isStart: !0,
        embeddedActivitiesManager: T,
        componentId: c,
        commandOrigin: u,
        sectionName: _,
        locationObject: n,
        analyticsLocations: o,
        source: E,
        onExecutedCallback: A,
        referrerId: h,
        customId: f,
        inviterUserId: I,
        onConfirmActivityLaunchChecksAlertOpen: p,
      }))
    );
  }
}
