/* Recovered shipped factory. Module 839214.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2510318..2510977
 * Raw property SHA-256: 65a493475289ea8e0936eb02b7b9f1ad49aebf4d8fbde23963535a08af7f261b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => l });
  var i = n(537812),
    r = n(882035),
    a = n(121894);
  function s(e, t) {
    return e === t;
  }
  function l(e) {
    let t = (0, r.h)((0, i.eh)((t, n, i) => e((e) => (0, a.r)(() => t(e)), n, i)));
    function n(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
      return t(e, n);
    }
    function l(e) {
      let n = t.getState();
      return null != e ? e(n) : n;
    }
    let o = (e) => {
      (0, a.r)(() => t.setState(e));
    };
    return {
      useState: n,
      getState: l,
      useField: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        return n((t) => t[e], t);
      },
      getField: function (e) {
        return l((t) => t[e]);
      },
      subscribe: function (e, n, i) {
        return t.subscribe(e, n, i);
      },
      setState: o,
      resetState: function () {
        o(t.getInitialState());
      },
    };
  }
}
