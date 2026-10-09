/* Recovered shipped factory. Module 873715.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3927272..3927766
 * Raw property SHA-256: ef9bf1996b57347a9dc335c217027f03aeb78ba8fd021b38ccba698354fe6690
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => a });
  var i = n(884868),
    r = n(192888);
  function a(e, t, n) {
    return (0, r.W)(e, "control", n, {
      id: t,
      timeoutMs: (0, i.d5)(n),
      retryMs: 400,
      sourceMatch: "origin",
      label: "control",
    }).then(
      (e) =>
        "boolean" == typeof e?.ok && Array.isArray(e.results)
          ? { status: "completed", response: e }
          : { status: "failed", message: "the preview frame returned a malformed control result" },
      (e) =>
        e instanceof i.fq
          ? { status: "failed", message: "the preview frame did not answer the control batch" }
          : { status: "unavailable" },
    );
  }
}
