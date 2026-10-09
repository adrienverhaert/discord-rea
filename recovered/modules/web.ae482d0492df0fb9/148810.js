/* Recovered shipped factory. Module 148810.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3136684..3137774
 * Raw property SHA-256: 5ccd0f28a98cdc22b04ece27dc3118c7848e5cdd989794dbf49972dc232dcbec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { SB: () => _, Zk: () => d, iD: () => u, oA: () => c });
  var r = n(636537),
    a = n(280450),
    s = n(353835),
    l = n(380610);
  let o = "/__development/build_overrides";
  async function d(e) {
    try {
      let t = await r.Bo.put({
        url: (0, l.i_)(o),
        body: { overrides: e, version: l.hl },
        headers: { Authorization: a.default.getToken() ?? "" },
        oldFormErrors: !0,
        rejectWithError: !1,
      });
      return (await i(t), t);
    } catch (e) {
      return e;
    }
  }
  async function c(e) {
    try {
      let t = await r.Bo.put({
        url: (0, l.i_)("/__development/link"),
        body: { payload: e, token: a.default.getToken(), version: l.hl },
        oldFormErrors: !0,
        rejectWithError: !1,
      });
      return (await i(t), t);
    } catch (e) {
      return e;
    }
  }
  async function u() {
    let e = await r.Bo.del({ url: (0, l.i_)(o), oldFormErrors: !0, rejectWithError: !1 });
    return (await i(e), e);
  }
  function _(e) {
    return r.Bo.post({
      url: (0, l.i_)("/__development/create_build_override_link"),
      body: e,
      headers: { Authorization: a.default.getToken() ?? "" },
      oldFormErrors: !0,
      rejectWithError: !1,
    }).then(
      (e) => ({ url: e.body.url, error: !1 }),
      (e) =>
        400 === e.status
          ? { url: !1, error: e.body }
          : { url: !1, error: `Error making API request (${e.status})` },
    );
  }
  i = async (e) => {
    try {
      await s.A.flushCookies();
    } catch (e) {}
  };
}
