/* Recovered shipped factory. Module 356645.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 531198..532242
 * Raw property SHA-256: 8b3fc4c7d5bfd3156cfb89deb70d857c4e557d2b1154dbe094d6b44d744dd376
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { n: () => f });
  var i = n(636537),
    r = n(499979),
    a = n(451988),
    s = n(73153),
    l = n(773669),
    o = n(189081),
    d = n(645243),
    c = n(927813),
    u = n(652215);
  let _ = 10 * c.A.Millis.MINUTE,
    E = 10 * c.A.Millis.MINUTE,
    A = +c.A.Millis.MINUTE,
    h = {};
  async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      c = l.default.locale;
    return (
      s.h.dispatch({
        type: "APPLICATION_BUILD_FETCH_START",
        applicationId: e,
        branchId: t,
        locale: c,
      }),
      n && (await (0, r.yy)(Math.random() * A)),
      i.Bo.get({
        url: u.Rsh.APPLICATION_LIVE_BUILD(e, t),
        query: { platform: (0, d.O)(), locale: c },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      }).then(
        (n) => {
          let i = n.body;
          0 === i.manifests.length
            ? s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t })
            : s.h.dispatch({
                type: "APPLICATION_BUILD_FETCH_SUCCESS",
                applicationId: e,
                branchId: t,
                locale: c,
                build: i,
              });
        },
        (n) => {
          let { status: i } = n;
          if (404 === i)
            s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
          else
            (null == h[t] && (h[t] = new a.Ep()),
              h[t].start(_ + Math.random() * E, () => {
                null != o.A.getLibraryApplication(e, t) && f(e, t);
              }));
        },
      )
    );
  }
}
