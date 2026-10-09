/* Recovered shipped factory. Module 933138.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 307060..307424
 * Raw property SHA-256: 1fe5904d80f0cf5b62920fb10d5572a7877c1845c775d32628eb47f79fda9a47
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { P: () => s });
  var r = n(272469),
    i = n(690094),
    o = n(978862),
    a = n(873326);
  function s(e) {
    let t = "console";
    ((0, a.s5)(t, e), (0, a.AS)(t, l));
  }
  function l() {
    "console" in o.O &&
      r.Ow.forEach(function (e) {
        e in o.O.console &&
          (0, i.GS)(o.O.console, e, function (t) {
            return (
              (r.Z9[e] = t),
              function (...t) {
                (0, a.aj)("console", { args: t, level: e });
                let n = r.Z9[e];
                n && n.apply(o.O.console, t);
              }
            );
          });
      });
  }
}
