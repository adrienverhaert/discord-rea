/* Recovered shipped factory. Module 971649.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7051503..7052643
 * Raw property SHA-256: 94d416901f32b16d31f9873b8076754511ef1ae42f9574b43c727c04469c71ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { QK: () => f, RC: () => c, go: () => A, iY: () => u, vU: () => E, wW: () => h });
  var i = n(582128),
    r = n(323889),
    a = n(17928),
    s = n(475743),
    l = n(859703),
    o = n(590202),
    d = n(653819);
  function c(e) {
    var t, n;
    let a =
        ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
        (n = "adContentId" in e ? e.adContentId : void 0),
        i.useMemo(
          () =>
            null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : [],
          [t, n],
        )),
      s = "questOrQuests" in e ? r.p.QUEST : e.adCreativeType;
    return i.useMemo(() => {
      let t = (function (e) {
        let { adContentIds: t, questContent: n } = e;
        return `${[...t].sort().join("_")}_${n}`;
      })({ adContentIds: a, questContent: e.questContent });
      return (r.p.QUEST, { adContentIds: a, adCreativeType: s, key: t });
    }, [a, e.questContent, s]);
  }
  function u(e) {
    let { adContentIds: t, adCreativeType: n } = e,
      d = (0, a.bG)([l.A], () => (n !== r.p.QUEST || 1 !== t.length ? null : l.A.getQuest(t[0])), [
        t,
        n,
      ]),
      c = i.useMemo(() => (null == d ? null : (0, o.NI)(d)), [d]),
      u = (0, s.Ay)(c);
    return c !== u;
  }
  function _() {
    return i.useContext(d.n);
  }
  function E() {
    return _()?.current;
  }
  function A() {
    return E()?.getId();
  }
  function h() {
    let e = _();
    return i.useCallback(() => e?.current?.getId(), [e]);
  }
  function f() {
    let e = i.useContext(d.n);
    return i.useCallback(() => e?.current?.getId(), [e]);
  }
}
