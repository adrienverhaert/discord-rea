/* Recovered shipped factory. Module 60175.
 * Source: recovered/web/assets/11bbfba834c60934.js
 * UTF-16 property offsets: 95..903
 * Raw property SHA-256: bc04e5fa43606107a1c1f83a661b88136381abf9670118f2ec6328bcfb4b9a77
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, t) {
  t.d(i, { A: () => f, U: () => d });
  var n = t(435558),
    r = t.n(n),
    l = t(17928),
    s = t(73153),
    o = t(513461);
  let d = { version: "", description: "", formFields: [] },
    c = {};
  class u extends l.Ay.Store {
    static displayName = "MemberVerificationFormStore";
    get(e) {
      if (null != e) return c[e];
    }
    getRulesPrompt(e) {
      return r().find(c[e]?.formFields, o.i7);
    }
  }
  let f = new u(s.h, {
    INVITE_ACCEPT_SUCCESS: function (e) {
      let { invite: i } = e,
        { member_verification_form: t } = i,
        { guild: n } = i;
      return (
        null != n &&
        null != t &&
        ((c[n.id] = {
          version: t.version,
          description: t.description ?? "",
          formFields: t.form_fields,
          guild: n,
        }),
        !0)
      );
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
      let { form: i, guildId: t } = e;
      if (null == i) c[t] = d;
      else {
        let e = c[t] ?? d;
        c[t] = { ...e, ...i };
      }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
      let { guildId: i } = e;
      c[i] = c[i] ?? d;
    },
    GUILD_DELETE: function (e) {
      let { guild: i } = e;
      delete c[i?.id];
    },
  });
}
