/* Recovered shipped factory. Module 770666.
 * Source: recovered/web/assets/410e0b55730f6400.js
 * UTF-16 property offsets: 95..481
 * Raw property SHA-256: 7eff66b5b327abe7eb4855155f9577bf9f72757501880912cebcecd18588e943
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => p });
  var r = n(17928),
    A = n(931991),
    c = n(808728),
    u = n(71393),
    i = n(576705),
    a = n(652215);
  function p(t, e) {
    return (0, r.bG)(
      [u.A, c.Ay, i.A],
      () => {
        let n = u.A.getGuild(t);
        if (i.A.can(a.xBc.ADMINISTRATOR, n) || i.A.can(a.xBc.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of c.Ay.getChannels(t)[c.vM])
          if (null == e || n.type === e) {
            let [t] = (0, A.p_)(n);
            if (i.A.can(t, n)) return !0;
          }
        return !1;
      },
      [t, e],
    );
  }
}
