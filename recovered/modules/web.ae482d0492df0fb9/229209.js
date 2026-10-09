/* Recovered shipped factory. Module 229209.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10615274..10615967
 * Raw property SHA-256: b60e55dc9a66051d341523434a59c832beb32c5eaf3212f30392bfe8eb72389f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { au: () => a, nz: () => d, sj: () => o });
  var i = n(823598);
  function r() {
    return window.createDiscordStream;
  }
  function a() {
    return null != r();
  }
  class s {
    stream;
    refcount = 0;
    constructor(e) {
      const t = r();
      if (null == t) throw Error("Direct video streams are unavailable outside the native client");
      this.stream = t(e);
    }
    addref() {
      this.refcount++;
    }
    release() {
      return (this.refcount--, 0 === this.refcount);
    }
  }
  let l = new Map();
  function o(e) {
    return l.get(e)?.refcount ?? 0;
  }
  function d(e) {
    let t = l.get(e);
    null == t && ((t = new s(e)), (0, i.lE)().addDirectVideoOutputSink(e), l.set(e, t));
    let n = t;
    n.addref();
    let r = !1;
    return {
      stream: n.stream,
      release() {
        r || ((r = !0), n.release() && (l.delete(e), (0, i.lE)().removeDirectVideoOutputSink(e)));
      },
    };
  }
}
