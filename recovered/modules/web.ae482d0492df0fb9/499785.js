/* Recovered shipped factory. Module 499785.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9709086..9709878
 * Raw property SHA-256: 2f146025d1c78496114eb1a7a3fc204e0b4979aef99bc225eb5aa95584675673
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(636537),
    r = n(174459);
  function a(e, t, n) {
    let { trackedActionData: i, ...a } = t,
      s = { url: a.url, request_method: n };
    return new Promise((t, n) => {
      e(a)
        .then((e) => {
          let n = i.properties;
          ("function" == typeof i.properties && (n = i.properties(e)),
            (0, r.trackNetworkAction)(i.event, { status_code: e.status, ...s, ...n }),
            t(e));
        })
        .catch((e) => {
          let t = i.properties;
          ("function" == typeof i.properties && (t = i.properties(e)),
            (0, r.trackNetworkAction)(i.event, {
              status_code: e.status,
              error_code: e.body?.code,
              error_message: e.body?.message,
              ...s,
              ...t,
            }),
            n(e));
        });
    });
  }
  let s = {
    get: function (e) {
      return a(i.Bo.get, e, "get");
    },
    post: function (e) {
      return a(i.Bo.post, e, "post");
    },
    put: function (e) {
      return a(i.Bo.put, e, "put");
    },
    patch: function (e) {
      return a(i.Bo.patch, e, "patch");
    },
    delete: function (e) {
      return a(i.Bo.del, e, "del");
    },
  };
}
