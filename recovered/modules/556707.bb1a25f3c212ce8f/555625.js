/* Recovered shipped factory. Module 555625.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 284540..285322
 * Raw property SHA-256: 5c475b7f46e4e240033ac6ea58e02e86cc16a97663610c3c5422630c67a4d451
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Z: () => o, k: () => a });
  var r = n(608768);
  function i(e) {
    let t = e.protocol ? `${e.protocol}:` : "",
      n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
  }
  function o(e, t, n) {
    let r;
    return (
      t ||
      `${i(e)}${e.projectId}/envelope/?${((r = { sentry_version: "7" }), e.publicKey && (r.sentry_key = e.publicKey), n && (r.sentry_client = `${n.name}/${n.version}`), new URLSearchParams(r).toString())}`
    );
  }
  function a(e, t) {
    let n = (0, r.AD)(e);
    if (!n) return "";
    let o = `${i(n)}embed/error-page/`,
      a = `dsn=${(0, r.SB)(n)}`;
    for (let e in t)
      if ("dsn" !== e && "onClose" !== e)
        if ("user" === e) {
          let e = t.user;
          if (!e) continue;
          (e.name && (a += `&name=${encodeURIComponent(e.name)}`),
            e.email && (a += `&email=${encodeURIComponent(e.email)}`));
        } else a += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    return `${o}?${a}`;
  }
}
