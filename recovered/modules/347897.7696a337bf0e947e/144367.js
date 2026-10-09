/* Recovered shipped factory. Module 144367.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 109666..110429
 * Raw property SHA-256: b9dda2cf981afca23ce9200056e41c0b16d6909ece2f6f597c83e5a8b93dbd0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(e, t, r) {
    let n, i;
    for (let o of e.fields) {
      let e = o.localName;
      if (o.oneof) {
        let a = r[o.oneof];
        if ((null == a ? void 0 : a.oneofKind) == void 0) continue;
        if (((n = a[e]), ((i = t[o.oneof]).oneofKind = a.oneofKind), void 0 == n)) {
          delete i[e];
          continue;
        }
      } else if (((n = r[e]), (i = t), void 0 == n)) continue;
      switch ((o.repeat && (i[e].length = n.length), o.kind)) {
        case "scalar":
        case "enum":
          if (o.repeat) for (let t = 0; t < n.length; t++) i[e][t] = n[t];
          else i[e] = n;
          break;
        case "message":
          let a = o.T();
          if (o.repeat) for (let t = 0; t < n.length; t++) i[e][t] = a.create(n[t]);
          else void 0 === i[e] ? (i[e] = a.create(n)) : a.mergePartial(i[e], n);
          break;
        case "map":
          switch (o.V.kind) {
            case "scalar":
            case "enum":
              Object.assign(i[e], n);
              break;
            case "message":
              let s = o.V.T();
              for (let t of Object.keys(n)) i[e][t] = s.create(n[t]);
          }
      }
    }
  }
  r.d(t, { x: () => n });
}
