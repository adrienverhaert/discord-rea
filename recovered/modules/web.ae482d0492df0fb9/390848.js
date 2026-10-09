/* Recovered shipped factory. Module 390848.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6559202..6559695
 * Raw property SHA-256: 73597fc213b7e80a3f92d22bac3938a0a79b7ca8d172b29977d41e82ede7c98f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => a });
  var i = n(582128),
    r = n(725663);
  function a(e) {
    let {
        userId: t,
        applicationId: n,
        isGameRelationship: a,
        location: s,
        onConfirm: l,
        onCancel: o,
        onFinally: d,
      } = e,
      c = i.useCallback(() => {
        r.A.cancelFriendRequest({ userId: t, applicationId: a ? n : null, location: s });
      }, [n, a, s, t]);
    return {
      acceptFriendRequest: i.useCallback(() => {
        r.A.maybeConfirmFriendRequestAccept({
          userId: t,
          applicationId: a ? n : null,
          location: s,
          onConfirm: l,
          onCancel: o,
          onFinally: d,
        });
      }, [n, a, s, o, l, d, t]),
      cancelFriendRequest: c,
    };
  }
}
