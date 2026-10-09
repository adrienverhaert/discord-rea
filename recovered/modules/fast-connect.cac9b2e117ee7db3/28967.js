/* Recovered shipped factory. Module 28967.
 * Source: recovered/web/assets/fast-connect.cac9b2e117ee7db3.js
 * UTF-16 property offsets: 30141..30566
 * Raw property SHA-256: f5dfc5267d1edc3242f2a5e465a2a9ea054b021d8f83cac04d86167fe0e6b82a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, E) {
  let n;
  E.d(t, { n: () => i });
  var r = E(973117);
  try {
    n = window.sessionStorage;
  } catch (e) {}
  try {
    delete window.sessionStorage;
  } catch (e) {}
  let i = !(function () {
    let e = "test";
    try {
      return (n.setItem(e, e), n.removeItem(e), !0);
    } catch (e) {
      return !1;
    }
  })()
    ? new r.J()
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
      })();
}
