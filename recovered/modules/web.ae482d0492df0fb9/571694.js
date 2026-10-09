/* Recovered shipped factory. Module 571694.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3223923..3224397
 * Raw property SHA-256: 1d365774d41476977e0cc6c4347994f9be9b545dbfbc841d298c62c55109f239
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => l });
  var i = n(287809),
    r = n(486020),
    a = n(403362),
    s = n(652215);
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
      n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
      case s.rbe.DM:
        let [l] = e.recipients.map(i.default.getUser).filter(a.Vq);
        if (null == l) return null;
        return l.getAvatarURL(void 0, t, n);
      case s.rbe.GROUP_DM:
        return r.Ay.getChannelIconURL({
          id: e.id,
          icon: e.icon,
          applicationId: e.getApplicationId(),
          size: t,
        });
    }
  }
}
