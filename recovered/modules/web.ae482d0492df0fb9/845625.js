/* Recovered shipped factory. Module 845625.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5031920..5032391
 * Raw property SHA-256: fd2bb1a8683d24948aceea173e3fb89a03fea444d26a2fb4bd89c77b82dec88d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => r, v: () => a });
  var i,
    r =
      (((i = {})[(i.SET_COMPLETED = 1)] = "SET_COMPLETED"),
      (i[(i.UNSET_COMPLETED = 2)] = "UNSET_COMPLETED"),
      (i[(i.DELETE_USER_MESSAGE = 3)] = "DELETE_USER_MESSAGE"),
      (i[(i.SUBMIT_FEEDBACK = 4)] = "SUBMIT_FEEDBACK"),
      i);
  function a(e) {
    if (null == e) return null;
    let t = (function (e) {
      if (null == e) return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    })(e);
    return null == t || null == t.actions
      ? null
      : (Object.keys(t.actions).forEach((e) => {
          t.actions[e].actionType = e;
        }),
        t);
  }
}
