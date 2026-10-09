/* Recovered shipped factory. Module 506775.
 * Source: recovered/web/assets/f19cfc39053ba88e.js
 * UTF-16 property offsets: 95..716
 * Raw property SHA-256: 82f755c5414a221010c4d6f4270d7ab0d32ce28b1ade80f99579d0472cb38a5d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { M$: () => u, M0: () => E, ZP: () => d, aP: () => m, hD: () => f });
  var i,
    r = n(975571),
    s = n(379257),
    a = n(306537),
    l = n(36149),
    o = n(652215),
    c = n(660183),
    u = (((i = {}).ADULT = "adult"), (i.TEEN = "teen"), (i.UNVERIFIED = "unverified"), i);
  function d() {
    let t = (0, l.b8)();
    return (0, l.yM)() ? "teen" : t ? "adult" : "unverified";
  }
  function E() {
    s.A.openUrl(r.A.getArticleURL(o.MVz.TIGGER_PAWTECT_LEARN_MORE));
  }
  function m() {
    s.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.ACCOUNT_AGE_GROUP });
  }
  function f() {
    switch (d()) {
      case "adult":
        return c.intl.string(c.t.XxRj7f);
      case "teen":
        return c.intl.string(c.t.sK0dmH);
      case "unverified":
        return c.intl.string(c.t.lKDPGA);
    }
  }
}
