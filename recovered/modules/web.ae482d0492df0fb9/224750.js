/* Recovered shipped factory. Module 224750.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3020869..3021537
 * Raw property SHA-256: 9df4b1ed828c6b96a6b81901809c67cdc1c567315d380883e951e8cdcce9abaa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Yx: () => o, vG: () => l, wI: () => d, yW: () => r.mo });
  var i = n(636537),
    r = n(257474),
    a = n(652215),
    s = n(660183);
  async function l(e) {
    let t = a.Rsh.APPLICATION_DISCLOSURES(e),
      n = await i.Bo.get({ url: t, retries: 3, rejectWithError: (0, i.fT)() }),
      r = n.body.disclosures;
    return {
      disclosures: r,
      ackedDisclosures: n.body.acked_disclosures,
      allAcked: n.body.all_acked,
    };
  }
  async function o(e, t) {
    let n = a.Rsh.APPLICATION_DISCLOSURES(e);
    await i.Bo.post({ url: n, body: { disclosures: t }, rejectWithError: (0, i.fT)() });
  }
  function d(e) {
    switch (e) {
      case r.mo.IP_LOCATION:
        return s.intl.string(s.t["6wPmjo"]);
      case r.mo.DISPLAYS_ADVERTISEMENTS:
        return s.intl.string(s.t["/uOMKZ"]);
      default:
        return null;
    }
  }
}
