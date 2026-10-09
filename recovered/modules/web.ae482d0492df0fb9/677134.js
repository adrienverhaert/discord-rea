/* Recovered shipped factory. Module 677134.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9729187..9731154
 * Raw property SHA-256: 94acc77f1b4ae03157a58052b519a410072956656249a58e3c79ce376f6ce92f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { contextMenuCallbackNative: () => s, contextMenuCallbackWeb: () => l, u: () => a });
  var i = n(477900);
  n(582128);
  var r = n(442433);
  function a() {
    let e;
    return (
      null != window.getSelection
        ? (e = window.getSelection()?.toString())
        : null != document.selection &&
          "Control" !== document.selection.type &&
          (e = document.selection.createRange().text),
      e ?? ""
    );
  }
  function s(e) {
    let t = a(),
      s = e.target;
    if (s?.tagName === "TEXTAREA" || s?.tagName === "INPUT") {
      if (s?.type !== "checkbox")
        return (0, r.L3)(
          e,
          async () => {
            let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(
              n.bind(n, 216603),
            );
            return (n) => (0, i.jsx)(e, { ...n, text: t });
          },
          { enableSpellCheck: !0 },
        );
    } else {
      if ("none" === window.getComputedStyle(s).getPropertyValue("-webkit-user-select"))
        return void e.preventDefault();
      let a,
        l,
        o,
        d = e.target;
      for (; null != d;)
        ("src" in d && null != d.src && (l = d.src),
          "href" in d && null != d.href && ((a = d.href), (o = d.textContent)),
          (d = d?.parentNode));
      if (null != l)
        return (0, r.L3)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("948804"),
            n.e("344265"),
            n.e("136149"),
            n.e("538887"),
            n.e("720590"),
            n.e("295998"),
            n.e("78601"),
            n.e("944801"),
            n.e("947260"),
          ]).then(n.bind(n, 177079));
          return (t) => (0, i.jsx)(e, { ...t, src: l ?? "" });
        });
      if (null != a)
        return (0, r.L3)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("344265"),
            n.e("136149"),
            n.e("538887"),
            n.e("720590"),
            n.e("295998"),
            n.e("944801"),
            n.e("605905"),
          ]).then(n.bind(n, 945896));
          return (t) => (0, i.jsx)(e, { ...t, href: a, textContent: o });
        });
      if (null != t && "" !== t)
        return (0, r.L3)(e, async () => {
          let { default: e } = await Promise.all([n.e("81189"), n.e("184264")]).then(
            n.bind(n, 898811),
          );
          return (n) => (0, i.jsx)(e, { ...n, text: t });
        });
    }
    return (e.preventDefault(), null);
  }
  function l(e) {
    let t = !1,
      n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != a() && "" !== a()) t = !0;
    else {
      let n,
        i,
        r = e.target;
      for (; null != r;)
        ("src" in r && null != r.src && (i = r.src),
          "href" in r && null != r.href && (n = r.href),
          (r = r?.parentNode));
      (null != n || null != i) && (t = !0);
    }
    t || e.preventDefault();
  }
}
