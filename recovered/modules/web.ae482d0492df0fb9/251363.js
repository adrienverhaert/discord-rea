/* Recovered shipped factory. Module 251363.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3924342..3925006
 * Raw property SHA-256: 5a0bc96363627eaaf349a5951ccb8fea53f4e0eb01371100e3e618714444a3b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => s, o: () => a });
  var i = n(884868),
    r = n(192888);
  function a(e, t) {
    let n = e?.querySelector("iframe");
    return null != n
      ? n
      : null == t
        ? null
        : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
  }
  function s(e, t, n, a) {
    return (0, r.W)(
      e,
      "capture-now",
      { ...(null == n ? {} : { spec: n }), ...(null == a ? {} : { uploadToken: a }) },
      { id: t, timeoutMs: 8e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
      (e) =>
        (console.debug("[vibegrations] preview frame answered capture", {
          id: t,
          phase: e.phase,
          code: e.code,
        }),
        "accepted" === e.phase)
          ? { status: "accepted" }
          : { status: "failed", code: e.code, message: e.error },
      (e) => (e instanceof i.fq ? { status: "failed" } : { status: "unavailable" }),
    );
  }
}
