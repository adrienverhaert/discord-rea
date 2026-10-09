/* Recovered shipped factory. Module 290595.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 577346..578021
 * Raw property SHA-256: 1841ce7ac71296916a50fee1c4dc76dcef83683162aa49f07e86a45d46ac8d16
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => d, U: () => c });
  var i = n(636537),
    r = n(73153),
    a = n(652215),
    s = n(660183);
  function l(e) {
    return (
      null != e &&
        null != e.body &&
        r.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }),
      e.body
    );
  }
  function o(e) {
    throw Error(
      e.status >= 500 && e.status <= 599
        ? s.intl.string(s.t.cvJdtg)
        : null != e && null != e.body && null != e.body.message
          ? e.body.message
          : s.intl.string(s.t.cvJdtg),
    );
  }
  function d() {
    return i.Bo.get({
      url: a.Rsh.SETTINGS_CONSENT,
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    }).then(l, (e) => Promise.reject(Error(e.body.message)));
  }
  function c(e, t) {
    return i.Bo.post({
      url: a.Rsh.SETTINGS_CONSENT,
      body: { grant: e, revoke: t },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    }).then(l, o);
  }
}
