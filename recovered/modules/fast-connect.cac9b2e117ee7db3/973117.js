/* Recovered shipped factory. Module 973117.
 * Source: recovered/web/assets/fast-connect.cac9b2e117ee7db3.js
 * UTF-16 property offsets: 30567..31761
 * Raw property SHA-256: d82a5f504c2e9ed13109a847ca4a7f78189ef4f4e3d721a66966998f8c68cfd2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, E) {
  let n;
  E.d(t, { J: () => i, n: () => _ });
  let r = "__d6gp33cibjs";
  try {
    ((n = window.localStorage), null == n && ((n = window[r]), delete window[r]));
  } catch (e) {}
  try {
    (null != window.localStorage && (window[r] = window.localStorage), delete window.localStorage);
  } catch (e) {}
  class i {
    storage;
    constructor() {
      this.storage = {};
    }
    get(e, t) {
      return this.storage.hasOwnProperty(e) ? this.storage[e] : t;
    }
    set(e, t) {
      this.storage[e] = t;
    }
    remove(e) {
      delete this.storage[e];
    }
    clear() {
      this.storage = {};
    }
    stringify() {
      return JSON.stringify(this.storage);
    }
    asyncGetRaw(e, t) {
      return Promise.resolve(this.getRaw(e));
    }
    getRaw(e) {
      return this.storage.hasOwnProperty(e) ? this.storage[e] : null;
    }
    setRaw(e, t) {
      this.storage[e] = t;
    }
    getAfterRefresh(e) {
      return Promise.resolve(this.get(e));
    }
  }
  let _ = !(function () {
    let e = "test";
    try {
      return (n.setItem(e, e), n.removeItem(e), !0);
    } catch (e) {
      return !1;
    }
  })()
    ? new i()
    : new (class {
        get(e, t) {
          let E = n.getItem(e);
          if (null != E)
            try {
              E = JSON.parse(E);
            } catch (e) {
              E = t;
            }
          else E = t;
          return E;
        }
        set(e, t) {
          n.setItem(e, JSON.stringify(t));
        }
        remove(e) {
          n.removeItem(e);
        }
        clear() {
          n.clear();
        }
        stringify() {
          return JSON.stringify(n || {});
        }
        asyncGetRaw(e, t) {
          return Promise.resolve(n.getItem(e));
        }
        getRaw(e) {
          return n.getItem(e);
        }
        setRaw(e, t) {
          n.setItem(e, t);
        }
        getAfterRefresh(e) {
          return Promise.resolve(this.get(e));
        }
      })();
}
