/* Recovered shipped factory. Module 121623.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5441163..5441746
 * Raw property SHA-256: cee07b2b0e9ff8d44d577bea63111c1d8be2c796659c935976d83d528d8c62f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(400253),
    r = n(742821),
    a = n(80703),
    s = n(197111),
    l = n(174459),
    o = n(877062),
    d = n(292572),
    c = n(652215);
  let u = "template",
    _ = {
      ...d.A,
      openNativeAppModal(e) {
        s.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER);
      },
      openMobileApp(e, t) {
        if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
        let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
          s = (0, r.I_)(),
          d = (0, r.Ay)(n, { utmSource: u, fingerprint: t, attemptId: s });
        (l.default.track(c.HAw.DEEP_LINK_CLICKED, {
          fingerprint: (0, a.v)(t),
          attempt_id: s,
          source: u,
          guild_template_code: e,
        }),
          o.A.launch(d, () => {}));
      },
    };
}
