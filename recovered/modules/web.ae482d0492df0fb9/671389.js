/* Recovered shipped factory. Module 671389.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3918229..3919519
 * Raw property SHA-256: 59c287066c5ac605d48b55712420b65616714f0ceb50d28a12c66769ac7c6986
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => N });
  var i = n(17928),
    r = n(73153),
    a = n(885576),
    s = n(309010),
    l = n(967198),
    o = n(260498),
    d = n(189117),
    c = n(652215),
    u = n(746080);
  let _ = null,
    E = null,
    A = null,
    h = null;
  function f() {
    null != A && (clearTimeout(A), (A = null));
  }
  function I(e) {
    let t = d.ZR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
  }
  function p() {
    null != h && (clearTimeout(h), (h = null));
  }
  function T() {
    return (f(), p(), (_ = null), null != E && ((E = null), !0));
  }
  function m(e) {
    let { withGracePeriod: t } = e;
    if (a.A.isIdle() || (null != _ && null == o.Ay.getProject(_))) return T();
    let n = (function () {
      if (s.Ay.getChannelId() !== u.VV.CONJURE) return null;
      let e = l.A.getGuildId();
      if (null == e) return null;
      let t = o.Ay.getSelectedProjectId(e);
      return null == t || null == o.Ay.getProject(t) ? null : t;
    })();
    return null == n
      ? null != E && t
        ? (null == A &&
            (A = setTimeout(() => {
              ((A = null), T() && S.emitChange());
            }, 3e4)),
          !1)
        : T()
      : (f(),
        (n !== _ || null == E) &&
          ((_ = n),
          (E = {
            type: c.$pd.PLAYING,
            name: d.Vb,
            details: I(),
            timestamps: { start: Date.now() },
          }),
          !(function e() {
            (p(),
              (h = setTimeout(() => {
                ((h = null),
                  null != E && ((E = { ...E, details: I(E.details) }), e(), S.emitChange()));
              }, 3e5)));
          })(),
          !0));
  }
  class g extends i.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
      this.syncWith([a.A, s.Ay, l.A, o.Ay], () => m({ withGracePeriod: !0 }));
    }
    getActivity() {
      return E;
    }
  }
  let S = new g(r.h, { CONNECTION_OPEN: () => m({ withGracePeriod: !1 }), LOGOUT: T }),
    N = S;
}
