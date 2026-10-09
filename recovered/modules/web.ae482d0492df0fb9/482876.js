/* Recovered shipped factory. Module 482876.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2743574..2744365
 * Raw property SHA-256: 55622d44341dc2d1841f7224fc2c1e1c682d60cae175fb87e186dc0b76d49ed0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => l, j: () => o });
  var i = n(636537),
    r = n(280450),
    a = n(652215);
  function s(e) {
    return {
      methods: e.methods.map((e) => {
        var t;
        return {
          method: e.method,
          vendor: e.vendor,
          title: e.title,
          description: e.description,
          providedBy: e.provided_by ?? null,
          icon:
            null == (t = e.icon ?? null)
              ? null
              : {
                  paths: t.paths.map((e) => ({
                    d: e.d,
                    fillRule: "evenodd" === e.fill_rule ? "evenodd" : void 0,
                  })),
                },
          externalWindow: e.external_window ?? null,
        };
      }),
      footerMessage: e.footer_message ?? null,
      outageBannerMessage: e.outage_banner_message ?? null,
    };
  }
  async function l() {
    return s(
      (await i.Bo.get({ url: a.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body,
    );
  }
  async function o() {
    let e = r.default.getSuspendedUserToken();
    return s(
      (
        await i.Bo.post({
          url: a.Rsh.AGE_VERIFICATION_SUSPENDED_METHODS_V2,
          body: { token: e },
          rejectWithError: !0,
        })
      ).body,
    );
  }
}
