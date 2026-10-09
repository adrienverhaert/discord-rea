/* Recovered shipped factory. Module 241440.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 31594..31786
 * Raw property SHA-256: c9ede95cd8f2a906294af725c2d7e05afeafcd2bb872501f2a28e3008a6f05c2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { S: () => r });
  var l = n(624210),
    i = n(26279);
  async function r(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === i.Re.DRAFT)
      try {
        await (0, l.Nl)(n.id);
      } catch (e) {}
  }
}
