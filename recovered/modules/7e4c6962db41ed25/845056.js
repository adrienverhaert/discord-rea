/* Recovered shipped factory. Module 845056.
 * Source: recovered/web/assets/7e4c6962db41ed25.js
 * UTF-16 property offsets: 941..1621
 * Raw property SHA-256: 73e21988b47156845e98998a1b0e122b2fdc4032e27db2a2a17f5eb7dcb8359e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { N: () => u, m: () => o });
  var n = i(17928),
    l = i(280450),
    s = i(290863),
    a = i(461213),
    r = i(765379),
    d = i(652215);
  function u(e) {
    return (
      ([d.$pd.PLAYING, d.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
      e.type === d.$pd.LISTENING
    );
  }
  function o(e, t) {
    return (0, n.yK)(
      [a.A, s.A, l.default],
      () => {
        let i = e.id === l.default.getId() ? a.A.getActivities() : s.A.getActivities(e.id),
          n = new Map();
        for (let e of i) {
          if (
            !u(e) ||
            (0, r.A)(e) ||
            (null != t &&
              ((null != t.application_id && e.application_id === t.application_id) ||
                (null != t.name && e.name === t.name)))
          )
            continue;
          let i = e.application_id ?? e.name;
          null == i || n.has(i) || n.set(i, e);
        }
        return Array.from(n.values());
      },
      [e.id, t],
    );
  }
}
