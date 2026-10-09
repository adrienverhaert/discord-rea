/* Recovered shipped factory. Module 272072.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 39947..40623
 * Raw property SHA-256: 5402f5348c12089410b4beb09541d58abe4feb44ef906dc48f0ee19568fd931c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => u }));
  var r = n(29583),
    o = n(464831),
    a = n(618027);
  function i(e) {
    return ((0, a.A)(1, arguments), (0, o.default)(e, { weekStartsOn: 1 }));
  }
  function u(e) {
    (0, a.A)(1, arguments);
    var t = (0, r.default)(e);
    return (
      Math.round(
        (i(t).getTime() -
          (function (e) {
            (0, a.A)(1, arguments);
            var t = (function (e) {
                (0, a.A)(1, arguments);
                var t = (0, r.default)(e),
                  n = t.getFullYear(),
                  o = new Date(0);
                (o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0));
                var u = i(o),
                  l = new Date(0);
                (l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0));
                var s = i(l);
                return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
              })(e),
              n = new Date(0);
            return (n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), i(n));
          })(t).getTime()) /
          6048e5,
      ) + 1
    );
  }
}
