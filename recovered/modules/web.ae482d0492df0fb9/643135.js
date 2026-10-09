/* Recovered shipped factory. Module 643135.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10460365..10462527
 * Raw property SHA-256: 701a7ce4435b9d48c9148e6c8daebdd42dbd2c4527dce3ccfb3971975465db4d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { d: () => c });
  var r = n(477900),
    a = n(582128),
    s = n(745262),
    l = n(559106);
  let o = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
    d = [
      "letter-spacing",
      "line-height",
      "padding-top",
      "padding-bottom",
      "font-family",
      "font-weight",
      "font-size",
      "text-transform",
      "width",
      "padding-left",
      "padding-right",
      "border-width",
      "box-sizing",
    ];
  function c(e) {
    let {
        style: t,
        autoFocus: n = !1,
        disabled: i = !1,
        autoCorrect: s = "off",
        maxRows: o = 15,
        ref: d,
        ...c
      } = e,
      _ = a.useRef(null),
      [E, A] = a.useState(() => u(_.current, c.rows, o, c.value));
    return (
      a.useLayoutEffect(() => {
        A(u(_.current, c.rows, o, c.value));
      }, [c.rows, o, c.value]),
      (0, r.jsx)(l.vN, {
        children: (0, r.jsx)("textarea", {
          ...c,
          ref: function (e) {
            ((_.current = e), "function" == typeof d ? d(_.current) : null != d && (d.current = e));
          },
          style: { ...t, height: E },
          autoFocus: n,
          disabled: i,
          autoCorrect: s,
        }),
      })
    );
  }
  function u(e, t, n, r) {
    var a, l, c, u, _, E;
    let A, h, f, I, p, T;
    if (null == e) return;
    ((r = r ?? e.value),
      null == i &&
        null != document.body &&
        ((i = document.createElement("textarea")), document.body.appendChild(i)));
    let {
        paddingSize: m,
        borderSize: g,
        boxSizing: S,
        sizingStyle: N,
      } = ((a = e),
      (A = window.getComputedStyle(a)),
      (h = (0, s.G)(
        A.getPropertyValue("box-sizing"),
        A.getPropertyValue("-moz-box-sizing"),
        A.getPropertyValue("-webkit-box-sizing"),
      )),
      (f =
        parseFloat(A.getPropertyValue("padding-bottom")) +
        parseFloat(A.getPropertyValue("padding-top"))),
      (I =
        parseFloat(A.getPropertyValue("border-bottom-width")) +
        parseFloat(A.getPropertyValue("border-top-width"))),
      {
        sizingStyle: d.map((e) => `${e}:${A.getPropertyValue(e)}`).join(";"),
        paddingSize: f,
        borderSize: I,
        boxSizing: h,
      }),
      { minHeight: C, maxHeight: O } =
        ((l = N),
        (c = m),
        (u = g),
        (_ = S),
        (E = n),
        null == i &&
          null != document.body &&
          ((i = document.createElement("textarea")), document.body.appendChild(i)),
        i.setAttribute("style", l + ";" + o),
        i.setAttribute("rows", "1"),
        (i.value = ""),
        (p = i.scrollHeight),
        i.setAttribute("rows", `${E}`),
        (i.value = ""),
        (T = i.scrollHeight),
        "border-box" === _ ? ((p += u), (T += u)) : "content-box" === _ && ((p -= c), (T -= c)),
        { minHeight: p, maxHeight: T });
    (i.setAttribute("style", N + ";" + o),
      (i.value = r),
      null != t ? i.setAttribute("rows", `${t}`) : i.removeAttribute("rows"));
    let R = Math.ceil(i.scrollHeight + 1);
    return (
      "border-box" === S ? (R += g) : "content-box" === S && (R -= m),
      (R = Math.max(C, Math.min(R, O)))
    );
  }
}
