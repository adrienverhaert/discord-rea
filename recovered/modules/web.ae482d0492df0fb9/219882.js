/* Recovered shipped factory. Module 219882.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6732944..6733785
 * Raw property SHA-256: 85f43347a05a5dcc5a0d2df7e18fcfcfc757de355e3a736118ac7f5aec3dd64a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J6: () => d, M6: () => c, ew: () => o, rX: () => u, tb: () => _ });
  var i = n(945810),
    r = n(202541);
  let a = "NitroFileUploadRollout",
    s = (0, i.mj)({
      name: "2026-09-nitro-file-upload-rollout",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
      name: "2026-09-non-nitro-file-upload-marketing",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
  function o() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return d({ location: e }).enabled ? r.gb : r.f3;
  }
  function d() {
    let { location: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s.getConfig({ location: e ?? a });
  }
  function c(e) {
    let { legacyCopy: t, rolloutCopy: n } = e;
    return d().enabled ? n : t;
  }
  function u(e) {
    return s.useConfig({ location: e ?? a }).enabled;
  }
  function _(e) {
    return l.useConfig({ location: e }).enabled;
  }
}
