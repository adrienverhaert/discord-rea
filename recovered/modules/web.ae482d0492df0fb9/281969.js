/* Recovered shipped factory. Module 281969.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4612262..4612717
 * Raw property SHA-256: 6b43d0f6ed018845a8c4c6cd77baa704b2289b9745f4a87c1229c9fd439470e7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  class i {
    visibility = new Map();
    listeners = new Set();
    isFramePooled(e) {
      return this.visibility.has(e);
    }
    isFrameVisible(e) {
      return !1 !== this.visibility.get(e);
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    setFrameVisible(e, t) {
      this.visibility.get(e) !== t && (this.visibility.set(e, t), this.emit());
    }
    removeFrame(e) {
      this.visibility.delete(e) && this.emit();
    }
    emit() {
      for (let e of this.listeners) e();
    }
  }
  let r = new i();
}
