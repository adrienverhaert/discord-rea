/* Recovered shipped factory. Module 206835.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6941692..6942387
 * Raw property SHA-256: f687616eef820953c490726d01dc237c933b9077f31d854ff1121ef9837bd19e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(159001),
    a = n(591179),
    s = n(780964),
    l = n(287809),
    o = n(507553);
  n(652215);
  var d = n(355097);
  function c() {
    let {
        guild: e,
        scrollPosition: t,
        analyticsLocations: c,
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      u = (0, a.X)("useOpenProfileSettings");
    return (0, i.useCallback)(() => {
      if (u) {
        let t = l.default.getCurrentUser();
        if (null != t) {
          let { openUserProfileModal: i } = n(402860);
          i({ userId: t.id, guildId: e?.id, sourceAnalyticsLocations: c });
          return;
        }
      }
      (null != e && (0, r.V2)(e.id),
        o.A.setState({
          subsection: null != e ? d.Eq.GUILD : d.Eq.USER_PROFILE,
          scrollPosition: t,
        }));
      {
        let { openUserSettings: e } = n(766075);
        e(s.X.PROFILE_PANEL, { analyticsLocations: c });
      }
    }, [e, t, c, u]);
  }
  n(836602);
}
