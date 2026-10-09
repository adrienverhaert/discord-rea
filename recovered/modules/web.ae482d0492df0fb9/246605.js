/* Recovered shipped factory. Module 246605.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 706806..707582
 * Raw property SHA-256: 07724f4d53a8db83b0af72fe04fb71ea5db0715554a872ac9f33f983539241d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { oX: () => E, pX: () => _, xr: () => u });
  var i = n(562708),
    r = n(636537),
    a = n(933681),
    s = n(73153),
    l = n(274184),
    o = n(174459),
    d = n(499785),
    c = n(652215);
  function u(e, t) {
    s.h.dispatch({ type: "SURVEY_OVERRIDE", id: e, isActionTriggered: t });
  }
  function _(e, t) {
    (s.h.dispatch({ type: "SURVEY_HIDE", key: e }),
      t
        ? o.default.track(c.HAw.APP_NOTICE_CLOSED, {
            notice_type: c.kqX.SURVEY,
            survey_id: e,
            dismissed: t,
          })
        : o.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kqX.SURVEY }));
  }
  function E(e) {
    let t = l.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= l.bh))
      return (
        s.h.dispatch({ type: "SURVEY_SEEN", key: e }),
        d.A.post({
          url: c.Rsh.USER_SURVEY_SEEN(e),
          trackedActionData: {
            event: i.NetworkActionNames.USER_SURVEY_SEEN,
            properties: (t) => (0, a.e0)({ key: e }),
          },
          rejectWithError: (0, r.fT)(),
        })
      );
  }
}
