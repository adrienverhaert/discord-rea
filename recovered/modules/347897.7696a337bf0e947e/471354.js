/* Recovered shipped factory. Module 471354.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1202687..1203368
 * Raw property SHA-256: 74fd50e4764c00c3645c32ca9467dc6ed0b172e8a86542bd006ea943d6697352
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(e, t) {
    return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
  }
  function i(e) {
    return o(e, 0);
  }
  function o(e, t) {
    if (t < 0) return;
    let r = 0;
    for (let n of e) {
      if (r === t) return n;
      r++;
    }
  }
  function a(e) {
    let t;
    for (let r of e) t = r;
    return t;
  }
  function s(e, t, r) {
    if (t.parentKey === r.parentKey) return t.index - r.index;
    let n = [...l(e, t), t],
      i = [...l(e, r), r],
      o = n.slice(0, i.length).findIndex((e, t) => e !== i[t]);
    return -1 !== o
      ? ((t = n[o]), (r = i[o]), t.index - r.index)
      : n.findIndex((e) => e === r) >= 0
        ? 1
        : (i.findIndex((e) => e === t), -1);
  }
  function l(e, t) {
    let r = [],
      n = t;
    for (; n?.parentKey != null;) (n = e.getItem(n.parentKey)) && r.unshift(n);
    return r;
  }
  r.d(t, { W: () => a, cj: () => o, iQ: () => n, o3: () => s, ue: () => i });
}
