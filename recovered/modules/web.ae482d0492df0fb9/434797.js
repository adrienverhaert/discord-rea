/* Recovered shipped factory. Module 434797.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2769139..2769766
 * Raw property SHA-256: a504b79f40a3cc6cd6a77de5b9fc4edf6287ea5b0c0d7525825c9dfc3f9a93f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => a });
  var i = n(636537),
    r = n(618651);
  function a(e, t) {
    if ("function" != typeof fetch || new Blob([t]).size > 57344) return !1;
    let { default: a } = n(280450),
      { default: s } = n(174459),
      l = { "Content-Type": "application/json" },
      o = a.getToken();
    (null != o && "" !== o && (l.Authorization = o), (0, r.D)());
    let d = s.getSuperPropertiesBase64();
    null != d && (l["X-Super-Properties"] = d);
    let c = a.getFingerprint();
    null != c && "" !== c && (l["X-Fingerprint"] = c);
    let u = a.getInstallationForTracking();
    null != u && "" !== u && (l["X-Installation-ID"] = u);
    try {
      return (
        fetch((0, i.TP)() + e, { method: "POST", keepalive: !0, headers: l, body: t }).catch(
          () => {},
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
}
