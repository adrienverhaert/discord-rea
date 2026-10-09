/* Recovered shipped factory. Module 482779.
 * Source: recovered/web/assets/324644.9fe0c100e808e762.js
 * UTF-16 property offsets: 340..1121
 * Raw property SHA-256: 66348d9a9469bf0511041070f369906b4b7bb95ef6e50664543147eaa9724f4f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, n) {
  var e,
    o = n(101968),
    c = n(252268),
    u = n(143320),
    a = n(239586),
    i = n(469520),
    p = n(447280),
    f = n(583178),
    l = "prototype",
    s = "script",
    d = f("IE_PROTO"),
    v = function () {},
    h = function (t) {
      return "<" + s + ">" + t + "</" + s + ">";
    },
    b = function (t) {
      (t.write(h("")), t.close());
      var r = t.parentWindow.Object;
      return ((t = null), r);
    },
    m = function () {
      var t,
        r = p("iframe");
      return (
        (r.style.display = "none"),
        i.appendChild(r),
        (r.src = String("java" + s + ":")),
        (t = r.contentWindow.document).open(),
        t.write(h("document.F=Object")),
        t.close(),
        t.F
      );
    },
    y = function () {
      try {
        e = new ActiveXObject("htmlfile");
      } catch (t) {}
      y = "u" > typeof document ? (document.domain && e ? b(e) : m()) : b(e);
      for (var t = u.length; t--;) delete y[l][u[t]];
      return y();
    };
  ((a[d] = !0),
    (t.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          null !== t ? ((v[l] = o(t)), (n = new v()), (v[l] = null), (n[d] = t)) : (n = y()),
          void 0 === r ? n : c.f(n, r)
        );
      }));
}
