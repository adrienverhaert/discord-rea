/* Recovered shipped factory. Module 97587.
 * Source: recovered/web/assets/8bfa01cdff57d2e3.js
 * UTF-16 property offsets: 4416..4744
 * Raw property SHA-256: 34d8f1307571b4565972d887ff7d1c7c11b1c3d330c9eabe13d2f473050249d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, l) {
  l.d(e, { Ay: () => d, Fd: () => u, JL: () => a });
  var t = l(734057),
    r = l(576705),
    i = l(652215);
  function u(n) {
    if (null == n.parent_id) return null;
    let e = t.A.getChannel(n.parent_id);
    return null != e && e.isCategory() ? e : null;
  }
  function a(n) {
    return null == n || r.A.can(i.xBc.VIEW_CHANNEL, n);
  }
  function d(n, e) {
    return r.A.can(i.xBc.MANAGE_CHANNELS, n ?? e);
  }
}
