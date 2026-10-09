/* Recovered shipped factory. Module 972995.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3021683..3022712
 * Raw property SHA-256: 8cda7dfca045fba5e48230846023c3a742557f25bcbfdee6e39ce8bd9ebc6845
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => u });
  var i = n(485845),
    r = n(666860),
    a = n(887909),
    s = n(395671),
    l = n(627363),
    o = n(587895),
    d = n(204776),
    c = n(652215);
  async function u(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: u, appLauncherContext: _ } = e;
    if (!(0, d.Rx)({ applicationId: t, channel: n, commandIntegrationTypes: u }))
      return Promise.resolve({ isAuthorized: !0 });
    let E = o.A.getApplication(t);
    if (null == E) {
      let e = await (0, l.TA)(t);
      E = s.Ay.createFromServer(e);
    }
    let A = i.b.USER_INSTALL,
      h = E?.integrationTypesConfig?.[A]?.oauth2InstallParams?.scopes;
    return (
      null != _ &&
        (0, r.zV)(c.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          application_id: t,
          location: _.location,
          section_name: _.sectionName,
          source: _.entrypoint,
        }),
      new Promise((e) => {
        (0, a.openOAuth2Modal)(
          {
            clientId: t,
            integrationType: A,
            scopes: h,
            callback: (n) => {
              let { location: i } = n;
              null != i
                ? (null != _ &&
                    (0, r.zV)(c.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      application_id: t,
                      location: _.location,
                      section_name: _.sectionName,
                      source: _.entrypoint,
                    }),
                  e({ isAuthorized: !0 }))
                : e({ isAuthorized: !1 });
            },
          },
          () => {
            e({ isAuthorized: !1 });
          },
        );
      })
    );
  }
}
