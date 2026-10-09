/* Recovered shipped factory. Module 390756.
 * Source: recovered/web/assets/f8b6fdcf37d1137d.js
 * UTF-16 property offsets: 95..741
 * Raw property SHA-256: 94b211e9f5e8eed1134a523e0b9f3ec43445de096043d3df6bbe87a4180f82d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { Mv: () => o, My: () => p, bV: () => l });
  var a = n(196765),
    c = n(537812),
    i = n(121894);
  let s = (0, a.v)((0, c.eh)(() => ({ commandAnalyticsContext: new Map() })));
  function o(t) {
    let { command: e, location: n, sectionName: a } = t,
      { commandAnalyticsContext: c } = s.getState(),
      o = c.get(e);
    if (null == o || o.location !== n || o.sectionName !== a) {
      let t = new Map(c);
      (t.set(e, { location: n, sectionName: a }),
        (0, i.r)(() => s.setState({ commandAnalyticsContext: t })));
    }
  }
  function l(t) {
    let { commandAnalyticsContext: e } = s.getState();
    return e.get(t);
  }
  function p(t) {
    let { commandAnalyticsContext: e } = s.getState();
    if (e.has(t)) {
      let n = new Map(e);
      (n.delete(t), (0, i.r)(() => s.setState({ commandAnalyticsContext: n })));
    }
  }
}
