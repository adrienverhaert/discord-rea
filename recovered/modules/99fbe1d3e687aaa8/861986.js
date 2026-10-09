/* Recovered shipped factory. Module 861986.
 * Source: recovered/web/assets/99fbe1d3e687aaa8.js
 * UTF-16 property offsets: 3047..3603
 * Raw property SHA-256: 76b81aa96c6e81e29dab66b9534650e9066878cf6f58630ac007b0786488becb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => m, O: () => c });
  var s,
    i = n(477900);
  n(582128);
  var a = n(606049),
    r = n(660183),
    l = n(318626),
    c =
      (((s = {})[(s.WITH_CONTENT = 0)] = "WITH_CONTENT"),
      (s[(s.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"),
      s);
  function m(t) {
    let { message: e, compact: n, location: s } = t;
    return e.isEdited() && null != e.editedTimestamp
      ? s !== (n || (null != e.content && 0 !== e.content.length) ? 0 : 1)
        ? null
        : (0, i.jsxs)(i.Fragment, {
            children: [
              " ",
              (0, i.jsx)(a.A, {
                timestamp: e.editedTimestamp,
                isEdited: !0,
                isInline: !1,
                children: (0, i.jsxs)("span", {
                  className: l.oh,
                  children: ["(", r.intl.string(r.t.C8sXIM), ")"],
                }),
              }),
            ],
          })
      : null;
  }
}
