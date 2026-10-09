/* Recovered shipped factory. Module 342384.
 * Source: recovered/web/assets/91cedfe51ab4557f.js
 * UTF-16 property offsets: 95..911
 * Raw property SHA-256: 70be858c51332cdcb00c7e34ccb2f52a734792f4b60a72643520e14ea95bcf30
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, l, n) {
  (n.d(l, { V: () => s, W: () => o }), n(323874), n(14289), n(35956));
  var e = n(652215);
  function o(t) {
    let { applicationId: l, customId: n, referrerId: o, linkId: s } = t,
      i = new URL(e.BVt.ACTIVITY_DETAILS(l), `${location.protocol}//${location.host}`),
      r = i.searchParams;
    return (
      null != s && r.set("link_id", s),
      null != o && r.set("referrer_id", o),
      null != n && r.set("custom_id", n),
      i.toString()
    );
  }
  function s(t) {
    let { id: l, customInstallUrl: n, installParams: o, integrationTypesConfig: s } = t;
    if (null != n) return n;
    let i = new URLSearchParams();
    i.set("client_id", l);
    let r =
      null != s &&
      Object.values(s).some(
        (t) => t?.oauth2_install_params != null || t?.oauth2InstallParams != null,
      );
    if (null != o && !r) {
      let { permissions: t, scopes: l } = o;
      (null != t && i.set("permissions", t), null != l && i.set("scope", l.join(" ")));
    }
    return `${location.protocol}//${location.host}${e.BVt.OAUTH2_AUTHORIZE}?${i.toString()}`;
  }
}
