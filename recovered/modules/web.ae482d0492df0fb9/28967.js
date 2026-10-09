/* Recovered shipped factory. Module 28967.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11310250..11310688
 * Raw property SHA-256: a64f914603f71f0668773589ac8a180902e3bfe16e8efb5d63fb250807812875
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { n: () => a });
  var r = n(973117);
  try {
    i = window.sessionStorage;
  } catch (e) {}
  try {
    delete window.sessionStorage;
  } catch (e) {}
  let a = !(function () {
    let e = "test";
    try {
      return (i.setItem(e, e), i.removeItem(e), !0);
    } catch (e) {
      return !1;
    }
  })()
    ? new r.J()
    : new (class {
        get(e, t) {
          let n = i.getItem(e);
          if (null != n)
            try {
              n = JSON.parse(n);
            } catch (e) {
              n = t;
            }
          else n = t;
          return n;
        }
        set(e, t) {
          i.setItem(e, JSON.stringify(t));
        }
        remove(e) {
          i.removeItem(e);
        }
        clear() {
          i.clear();
        }
      })();
}
