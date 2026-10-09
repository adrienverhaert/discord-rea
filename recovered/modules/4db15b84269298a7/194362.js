/* Recovered shipped factory. Module 194362.
 * Source: recovered/web/assets/4db15b84269298a7.js
 * UTF-16 property offsets: 95..357
 * Raw property SHA-256: 1583c5a4837f010b342a582b1ffc24b44ada43554e4e04384c5fffc248f087c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { a: () => r });
  var n = a(104798),
    c = a(652215);
  async function r(e) {
    let t = n.A.generateNonce();
    try {
      let a = await n.A.createHandoffToken(t);
      return c.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, a, e);
    } catch {
      return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
  }
}
