/* Recovered shipped factory. Module 310527.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5379701..5380514
 * Raw property SHA-256: 7c601742a74a6d01f2d2a61119748d1b33c708dd9ef192c661408f745a8bffd1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Je: () => s, OH: () => o, fx: () => l, zf: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s(e) {
    return i.Bo.get({
      url: a.Rsh.GUILD_VANITY_URL(e),
      oldFormErrors: !0,
      rejectWithError: !0,
    }).then((e) => {
      let {
        body: { code: t, uses: n, error: i },
      } = e;
      r.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n, error: i });
    });
  }
  function l() {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
  }
  function o(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
  }
  function d(e, t, n) {
    return i.Bo.patch({
      url: a.Rsh.GUILD_VANITY_URL(e),
      body: { code: t },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    }).then(
      (e) => {
        let {
          body: { code: t, uses: n },
        } = e;
        r.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n });
      },
      (e) => {
        if ((r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), n?.throwErr))
          throw e;
        return e;
      },
    );
  }
}
