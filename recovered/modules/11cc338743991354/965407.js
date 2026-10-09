/* Recovered shipped factory. Module 965407.
 * Source: recovered/web/assets/11cc338743991354.js
 * UTF-16 property offsets: 95..478
 * Raw property SHA-256: ee92bcb72698b38c69980f9264f47e424dcca4dda287ca0ed56735ec8c9e9a3f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => o });
  var i = t(17928),
    l = t(73153),
    a = t(381941);
  let r = {};
  class s extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
      return r[e];
    }
  }
  let o = new s(l.h, {
    MESSAGE_CREATE: function (e) {
      let { message: n, sendMessageOptions: t } = e;
      (null != t && (r[n.id] = { ...t, location: t.location ?? a.Hx.OTHER }),
        null != n.nonce && n.nonce !== n.id && n.nonce in r && delete r[n.nonce]);
    },
  });
}
