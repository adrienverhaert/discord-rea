/* Recovered shipped factory. Module 536802.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9073899..9074780
 * Raw property SHA-256: 83bf1c089d918c6926d8320358db4056872a79770d2e5acfae7747c35bfccbe0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => o }), n(321073));
  var i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(73153);
  class o extends a.Ay.Store {
    static allStores = [];
    static clearAll() {
      o.allStores.forEach((e) => e.clear());
    }
    constructor(e, t) {
      (super(
        l.h,
        { ...e, CLEAR_CACHES: () => (this.clear(), !1), WRITE_CACHES: () => (this.save(), !1) },
        t,
      ),
        r()(null != this.getClass().displayName, "Snapshot stores need a display name"),
        r()(
          !("CLEAR_CACHES" in e),
          "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action",
        ),
        r()(
          !("WRITE_CACHES" in e),
          "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action",
        ),
        o.allStores.push(this));
    }
    get persistKey() {
      return `${this.getClass().displayName}-snapshot`;
    }
    clear() {
      s.w.remove(this.persistKey);
    }
    save() {
      s.w.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
      let t = s.w.get(this.persistKey);
      return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
      return this.constructor;
    }
  }
}
