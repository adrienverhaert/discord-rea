/* Recovered shipped factory. Module 366781.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 320024..320839
 * Raw property SHA-256: b37fe5ad4df916aa29d2bca56aa1b60ec5c3d06a8f0f167a025472295eca9093
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { a3: () => s, m7: () => l, vQ: () => c, vm: () => a });
  var r = n(780755),
    i = n(272469);
  let o = n(978862).O;
  function a() {
    if (!("fetch" in o)) return !1;
    try {
      return (new Headers(), new Request("http://www.example.com"), new Response(), !0);
    } catch (e) {
      return !1;
    }
  }
  function s(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
  }
  function l() {
    if ("string" == typeof EdgeRuntime) return !0;
    if (!a()) return !1;
    if (s(o.fetch)) return !0;
    let e = !1,
      t = o.document;
    if (t && "function" == typeof t.createElement)
      try {
        let n = t.createElement("iframe");
        ((n.hidden = !0),
          t.head.appendChild(n),
          n.contentWindow && n.contentWindow.fetch && (e = s(n.contentWindow.fetch)),
          t.head.removeChild(n));
      } catch (e) {
        r.T &&
          i.vF.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            e,
          );
      }
    return e;
  }
  function c() {
    return "ReportingObserver" in o;
  }
}
