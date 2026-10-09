/* Recovered shipped factory. Module 909735.
 * Source: recovered/web/assets/ac7ca48b1bb86952.js
 * UTF-16 property offsets: 2473..2773
 * Raw property SHA-256: f58a543922b93e7facc8874e4e4f7ffde13fc7adbc3024ec95e5f1184fe4460b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { UN: () => i, f4: () => a });
  let r = (0, t(945810).mj)({
    name: "2026-09-connected-thread-sidebar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function a(e) {
    return r.useConfig({ location: e }).enabled;
  }
  function i(e) {
    return r.getConfig({ location: e }).enabled;
  }
}
