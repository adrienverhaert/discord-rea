/* Recovered shipped factory. Module 773669.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8176923..8177735
 * Raw property SHA-256: c68ecfd892f27f5fa1dcdb54b91b2bfde3a0710b8f9fe21ef769ba3a4ae653ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => A }));
  var i = n(17928),
    r = n(73153),
    a = n(724066),
    s = n(77729),
    l = n(617617),
    o = n(660183);
  async function d() {
    if (s.A?.app?.getPreferredSystemLanguages != null) {
      let e = await s.A.app.getPreferredSystemLanguages().then((e) => e[0]);
      if (null != e && "" !== e) return e;
    }
    return o.systemLocale;
  }
  let c = o.intl.currentLocale,
    u = o.systemLocale;
  function _() {
    let e = l.A.settings.localization?.locale?.value;
    return null != e && "" !== e && e !== c && ((c = e), (0, a.Av)(c), !0);
  }
  d().then((e) => {
    u = e;
  });
  class E extends i.Ay.Store {
    static displayName = "LocaleStore";
    initialize() {
      (this.waitFor(l.A), _(), (0, a.Av)(c));
    }
    get locale() {
      return c;
    }
    get systemLocale() {
      return u;
    }
  }
  let A = new E(r.h, {
    OVERLAY_INITIALIZE: _,
    CACHE_LOADED: _,
    CONNECTION_OPEN: _,
    USER_SETTINGS_PROTO_UPDATE: _,
    USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
      ((c = e.locale), (0, a.Av)(c));
    },
  });
}
