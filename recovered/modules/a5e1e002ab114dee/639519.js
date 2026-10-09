/* Recovered shipped factory. Module 639519.
 * Source: recovered/web/assets/a5e1e002ab114dee.js
 * UTF-16 property offsets: 95..900
 * Raw property SHA-256: 4de0242f78395dc3c0b560fd51d6a2cadf225601094c00c07eb4063b8dca35f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { $k: () => o, DS: () => _, hj: () => u, mG: () => a });
  var i = n(652215),
    r = n(261425),
    l = n(660183);
  class _ extends Error {
    reason;
    status;
    constructor(t, e) {
      (super(`vibegrations create failed: ${t} [${e}]`),
        (this.name = "VibegrationsCreateError"),
        (this.reason = t),
        (this.status = e));
    }
  }
  function u(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: e, body: n } = t;
    if ("number" != typeof e) return "unknown";
    if (429 === e) return "rate_limited";
    let r = n?.code;
    return 409 === e && r === i.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
  }
  function o(t) {
    let e = t?.status;
    return "number" == typeof e ? e : 0;
  }
  function a(t) {
    switch (t instanceof _ ? t.reason : "unknown") {
      case "project_limit":
        return l.intl.string(r.default["lh+h/p"]);
      case "rate_limited":
        return l.intl.string(r.default.zBENJU);
      default:
        return l.intl.string(r.default["9m86fn"]);
    }
  }
}
