/* Recovered shipped factory. Module 978495.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9915541..9916344
 * Raw property SHA-256: 10996bbe467855db8592eb04ac5cc7bee7a6120af67453c1c7a209e8fffa3057
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    $P: () => c,
    Kh: () => u,
    Oy: () => _,
    RJ: () => s,
    al: () => d,
    cZ: () => o,
    gA: () => l,
    wu: () => a,
  }),
    n(582128));
  let i = ["gif", "webp", "png", "apng"],
    r = ["png", "jpg", "jpeg", "webp", "svg"];
  function a(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src;
  }
  function s(e) {
    let t = e.toLowerCase().split(".").pop();
    return null != t && i.includes(t);
  }
  function l(e) {
    let t = e.toLowerCase().split(".").pop();
    return null != t && r.includes(t);
  }
  function o(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src;
  }
  function d(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie;
  }
  function c(e) {
    return "type" in e && "rive" === e.type && "function" == typeof e.rive;
  }
  function u(e) {
    return "type" in e && "dynamic" === e.type && "component" in e;
  }
  function _(e) {
    return null != e && ((!!a(e) && null != e.src && s(e.src)) || o(e) || d(e) || c(e));
  }
}
