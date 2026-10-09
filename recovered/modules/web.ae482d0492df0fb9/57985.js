/* Recovered shipped factory. Module 57985.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7908054..7908392
 * Raw property SHA-256: 87b57b5a65dff3c6e3873d8b6b55b93688cb3218e76f61c09f398b80b456999a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y1: () => r });
  let i = (0, n(945810).mj)({
    kind: "user",
    name: "2025-08-voice-user-affinity",
    defaultConfig: { enabled: !1 },
    variations: {
      0: { enabled: !1, sortType: void 0 },
      1: { enabled: !0, sortType: "vc_probability" },
      2: { enabled: !0, sortType: "communication_probability" },
    },
  });
  function r(e) {
    return i.getConfig({ location: e }).sortType;
  }
}
