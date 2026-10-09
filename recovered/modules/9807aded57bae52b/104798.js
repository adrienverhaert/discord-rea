/* Recovered shipped factory. Module 104798.
 * Source: recovered/web/assets/9807aded57bae52b.js
 * UTF-16 property offsets: 95..436
 * Raw property SHA-256: c517a6830d304c6c2d190d5ec93e1772be37fbb7331837e7fc631dbe47cdb0c0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, e, o) {
  o.d(e, { A: () => a });
  var t = o(132500),
    n = o(636537),
    s = o(652215);
  let a = {
    generateNonce: function () {
      return (0, t.A)();
    },
    createHandoffToken: async function (r) {
      let {
        body: { handoff_token: e },
      } = await n.Bo.post({
        url: s.Rsh.HANDOFF,
        body: { key: r },
        oldFormErrors: !0,
        retries: 1,
        rejectWithError: !1,
      });
      if (null != e) return e;
      throw Error("Missing handoff token!");
    },
  };
}
