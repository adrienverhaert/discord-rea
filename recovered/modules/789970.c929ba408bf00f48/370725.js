/* Recovered shipped factory. Module 370725.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 163871..165007
 * Raw property SHA-256: 284c80a21a9ec6c5af0a15561ebde49b141d9c6e6a87e74cf0185f209bbd078e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { i: () => o });
  var i = r(321733),
    n = r(582128);
  function o(e) {
    var t = {};
    return (
      Object.keys(e).forEach(function (r) {
        var o = e[r];
        if (r.endsWith("Ref")) t[r] = e[r];
        else {
          var a = function () {
            var e,
              t,
              r,
              a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!(0, n.isValidElement)(a)) return (o(a, u), a);
            if ("string" != typeof a.type) {
              var c = a.type.displayName || a.type.name || "the component";
              throw Error(
                "Only native element nodes can now be passed to React DnD connectors." +
                  "You can either wrap ".concat(c, " into a <div>, or turn it into a ") +
                  "drag source or a drop target itself.",
              );
            }
            return (
              (e = a),
              (t = u
                ? function (e) {
                    return o(e, u);
                  }
                : o),
              (r = e.ref),
              ((0, i.V)(
                "string" != typeof r,
                "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
              ),
              r)
                ? (0, n.cloneElement)(e, {
                    ref: function (e) {
                      (s(r, e), s(t, e));
                    },
                  })
                : (0, n.cloneElement)(e, { ref: t })
            );
          };
          t[r] = function () {
            return a;
          };
        }
      }),
      t
    );
  }
  function s(e, t) {
    "function" == typeof e ? e(t) : (e.current = t);
  }
}
