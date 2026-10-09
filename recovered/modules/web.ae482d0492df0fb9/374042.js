/* Recovered shipped factory. Module 374042.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 723966..724526
 * Raw property SHA-256: ac929b45fa6a1c574b2c75675f721881428761538f5268b63fb669bc31da4eba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => d });
  var i = n(562708),
    r = n(636537),
    a = n(933681),
    s = n(73153),
    l = n(499785),
    o = n(652215);
  function d(e, t) {
    var n = {};
    return (
      null != e && (n.survey_override = e),
      null != t && (n.disable_auto_seen = t),
      l.A.get({
        url: o.Rsh.USER_SURVEY,
        query: n,
        trackedActionData: {
          event: i.NetworkActionNames.USER_SURVEY_FETCH,
          properties: (e) => {
            let t = e?.body?.survey;
            return (0, a.e0)({ key: t?.key });
          },
        },
        rejectWithError: (0, r.fT)(),
      }).then(
        (e) => (s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
        () => {
          s.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
        },
      )
    );
  }
}
