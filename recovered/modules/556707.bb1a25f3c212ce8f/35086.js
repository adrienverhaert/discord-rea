/* Recovered shipped factory. Module 35086.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 334106..334793
 * Raw property SHA-256: 33a939891411f5ae57b70fd9d31a638147e6273cad51f2cdceb338b524045c19
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  let r;
  n.d(t, { _: () => l });
  var i = n(873326);
  let o = n(978862).O;
  var a = n(690094),
    s = n(296438);
  function l(e) {
    let t = "history";
    ((0, i.s5)(t, e), (0, i.AS)(t, c));
  }
  function c() {
    let e, t, n;
    if (
      ((t = (e = o.chrome) && e.app && e.app.runtime),
      (n = "history" in o && !!o.history.pushState && !!o.history.replaceState),
      t || !n)
    )
      return;
    let l = s.j.onpopstate;
    function c(e) {
      return function (...t) {
        let n = t.length > 2 ? t[2] : void 0;
        if (n) {
          let e = r,
            t = String(n);
          ((r = t), (0, i.aj)("history", { from: e, to: t }));
        }
        return e.apply(this, t);
      };
    }
    ((s.j.onpopstate = function (...e) {
      let t = s.j.location.href,
        n = r;
      if (((r = t), (0, i.aj)("history", { from: n, to: t }), l))
        try {
          return l.apply(this, e);
        } catch (e) {}
    }),
      (0, a.GS)(s.j.history, "pushState", c),
      (0, a.GS)(s.j.history, "replaceState", c));
  }
}
