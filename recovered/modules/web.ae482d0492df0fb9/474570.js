/* Recovered shipped factory. Module 474570.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6059055..6059999
 * Raw property SHA-256: bd0e9bec10106d9627873f10b74e2398dc69d5d808064de5fe77a38d7d42e5ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { collectNonHeapMetrics: () => s, initWasmTracking: () => a }), n(321073));
  let i = [],
    r = !1;
  function a() {
    if (r) return;
    function e(e) {
      for (let t in e) e[t] instanceof WebAssembly.Memory && i.push(new WeakRef(e[t]));
    }
    r = !0;
    let t = WebAssembly.instantiate;
    if (
      ((WebAssembly.instantiate = async function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        let a = await t(...i);
        try {
          "instance" in a && null != a.instance
            ? e(a.instance.exports)
            : "exports" in a && e(a.exports);
        } catch {}
        return a;
      }),
      "function" == typeof WebAssembly.instantiateStreaming)
    ) {
      let t = WebAssembly.instantiateStreaming;
      WebAssembly.instantiateStreaming = async function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        let a = await t(...i);
        try {
          e(a.instance.exports);
        } catch {}
        return a;
      };
    }
  }
  function s() {
    return {
      wasm_memory_bytes: (function () {
        let e = 0;
        for (let t = i.length - 1; t >= 0; t--) {
          let n = i[t].deref();
          null == n ? i.splice(t, 1) : (e += n.buffer.byteLength);
        }
        return e;
      })(),
    };
  }
}
