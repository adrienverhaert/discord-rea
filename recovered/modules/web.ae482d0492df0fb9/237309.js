/* Recovered shipped factory. Module 237309.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6560491..6561155
 * Raw property SHA-256: 94018996625be773c565ad1f245d05a3a9d7e252f6871e62465fe6bd042b87f1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => l, XG: () => s, gB: () => i.g });
  var i = n(717398),
    r = n(395422),
    a = n(660183);
  let s = 120,
    l = function (e) {
      let { discordTag: t, note: n, location: l, errorUxConfig: o = i.g.SHOW_ALWAYS } = e;
      !(t = t.trim()).includes("#") && t.startsWith("@") && (t = t.substring(1));
      let d = (0, r.Ty)(t);
      if (null != d) return Promise.reject(d);
      if (null != n) {
        if (n.length > s) return Promise.reject(a.intl.string(a.t.ckHwck));
        n = n.replace(/\n/g, " ").trim();
      }
      return i.A.sendRequest({
        discordTag: t,
        context: { location: l },
        note: "" !== n ? n : void 0,
        errorUxConfig: o,
      }).then(
        () => a.intl.format(a.t.Rtl1Ep, { discordTag: t }),
        (e) =>
          Promise.reject(
            e?.body?.note != null ? a.intl.string(a.t.ckHwck) : (0, r.vU)(e.body?.code, t),
          ),
      );
    };
}
