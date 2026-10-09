/* Recovered shipped factory. Module 816709.
 * Source: recovered/web/assets/87ae5c990642b23f.js
 * UTF-16 property offsets: 394..843
 * Raw property SHA-256: daecbb2c651fdd83702a2a64ef4e109aedcb3150f4712ec562d18fc3c5886402
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (l, e, n) {
  n.d(e, { A: () => u });
  var s = n(477900);
  n(582128);
  var r = n(9578),
    a = n(660183),
    t = n(195719);
  function u(l) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: n } = l;
    return null == e && null == n
      ? null
      : (0, s.jsxs)("span", {
          className: t.Q,
          children: [
            null != e && (0, s.jsx)(r.A, { href: e, children: a.intl.string(a.t["8S0kcM"]) }),
            null != e &&
              null != n &&
              (0, s.jsx)("span", { "aria-disabled": "true", children: "\u2022" }),
            null != n && (0, s.jsx)(r.A, { href: n, children: a.intl.string(a.t.ZpyeCm) }),
          ],
        });
  }
}
