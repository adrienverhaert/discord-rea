/* Recovered shipped factory. Module 266645.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5914407..5917869
 * Raw property SHA-256: c5da456177a5bb0b3088b2072042d32681c41655d8e320fb7f0df826445ed740
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => N });
  var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(866665),
    l = n(442433),
    o = n(442247),
    d = n(60465),
    c = n(409626),
    u = n(106191),
    _ = n(332173),
    E = n(936755),
    A = n(827669);
  let h = 0,
    f = "data-mention-game-id",
    I = new Set([
      "DIV",
      "P",
      "LI",
      "BLOCKQUOTE",
      "PRE",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "OL",
      "UL",
      "TABLE",
      "TR",
      "ARTICLE",
      "SECTION",
    ]);
  function p(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
  }
  function T(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${f}]`) ?? null;
  }
  function m(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
      t = n.getRangeAt(0);
    } catch {
      return;
    }
    if (t.collapsed || p(t.startContainer) || p(t.endContainer)) return;
    let i = t.cloneContents(),
      r = null != i.querySelector(`[${f}]`),
      a = T(t.startContainer),
      s = T(t.endContainer),
      l = !r && null != a && a === s;
    if (r || l) {
      let t, n;
      if (l) {
        let t = a.getAttribute(f);
        if (null == t || "" === t) return;
        (e.preventDefault(), e.clipboardData.setData("text/plain", (0, A.KW)(t)));
        return;
      }
      (e.preventDefault(),
        e.clipboardData.setData(
          "text/plain",
          (function (e) {
            let t = "";
            for (let n = 0; n < e.childNodes.length; n++)
              t += (function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (n > 200) return "";
                if (t.nodeType === Node.TEXT_NODE) return t.textContent ?? "";
                if (t.nodeType !== Node.ELEMENT_NODE) return "";
                let i = t.getAttribute(f);
                if (null != i) return (0, A.KW)(i);
                let r = t.tagName.toUpperCase();
                if ("IMG" === r) {
                  let e = t.getAttribute("alt");
                  return null != e && "" !== e ? e : "";
                }
                if (("string" == typeof t.className ? t.className : "").includes("hiddenVisually"))
                  return "";
                if ("BR" === r) return "\n";
                let a = "";
                for (let i = 0; i < t.childNodes.length; i++) a += e(t.childNodes[i], n + 1);
                return (I.has(r) && "" !== a && !a.endsWith("\n") && (a += "\n"), a);
              })(e.childNodes[n]);
            return t.endsWith("\n") ? t.slice(0, -1) : t;
          })(i),
        ),
        e.clipboardData.setData(
          "text/html",
          ((t = i.cloneNode(!0)).querySelectorAll(`[${f}]`).forEach((e) => {
            let t = e.getAttribute(f);
            if (null == t || "" === t) return;
            let n = e.ownerDocument ?? document;
            e.parentNode?.replaceChild(n.createTextNode((0, A.KW)(t)), e);
          }),
          (n = document.createElement("div")).appendChild(t),
          n.innerHTML),
        ));
    }
  }
  var g = n(660183),
    S = n(379961);
  let N = function (e) {
    let { gameId: t, authorId: A } = e,
      f = (0, o.K)(t),
      I = null != f,
      p = f?.gameName ?? g.intl.string(g.t["11pdXZ"]),
      T = f?.gameIcon;
    r.useEffect(
      () => (
        1 === (h += 1) && document.addEventListener("copy", m),
        () => {
          0 == (h -= 1) && document.removeEventListener("copy", m);
        }
      ),
      [],
    );
    let N = r.useCallback(
        (e) => {
          I &&
            (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("926132"),
                n.e("146652"),
                n.e("638221"),
                n.e("482861"),
                n.e("466322"),
                n.e("951811"),
                n.e("738392"),
              ]).then(n.bind(n, 55947));
              return (n) => (0, i.jsx)(e, { ...n, gameId: t, gameName: p, authorId: A });
            });
        },
        [I, t, p, A],
      ),
      C = r.useCallback(() => {
        (0, a.openModalLazy)(async () => {
          let { default: e } = await n.e("256466").then(n.bind(n, 188841));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }, []),
      O = r.useCallback(
        (e) => {
          (e.stopPropagation(), e.preventDefault(), I)
            ? d.default.openGameProfileModal({
                gameId: t,
                gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                source: c.GameProfileSources.GameMention,
                sourceUserId: A,
              })
            : C();
        },
        [t, I, C, A],
      ),
      R = I ? `@game ${p}` : void 0;
    return (0, i.jsx)(s.m, {
      asContainer: !0,
      tag: "span",
      text: R,
      "aria-label": R,
      delay: 750,
      children: (0, i.jsxs)(_.A, {
        "data-mention-game-id": t,
        onContextMenu: N,
        onClick: O,
        children: [
          (0, i.jsx)(E.A, {
            children: (0, i.jsx)("span", {
              "aria-hidden": "true",
              className: S.P0,
              children: (0, i.jsx)(u.A, {
                game: { id: t, icon: T },
                iconClassName: S.Kk,
                allowFetch: !1,
              }),
            }),
          }),
          (0, i.jsx)("span", { className: S.UU, children: p }),
        ],
      }),
    });
  };
}
