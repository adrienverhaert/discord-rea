/* Recovered shipped factory. Module 973913.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 274611..275043
 * Raw property SHA-256: 9ce8e5030c90b2e1a36ac1ee582d943aaab7b778f90593059f84039956c08c98
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { p: () => c });
  var r = n(35086),
    i = n(688331),
    o = n(272469),
    a = n(871186),
    s = n(607423),
    l = n(804524);
  let c = (0, i._C)(() => ({
    name: "BrowserSession",
    setupOnce() {
      if (void 0 === l.jf.document) {
        s.T &&
          o.vF.warn(
            "Using the `browserSessionIntegration` in non-browser environments is not supported.",
          );
        return;
      }
      ((0, a.J0)({ ignoreDuration: !0 }),
        (0, a.J5)(),
        (0, r._)(({ from: e, to: t }) => {
          void 0 !== e && e !== t && ((0, a.J0)({ ignoreDuration: !0 }), (0, a.J5)());
        }));
    },
  }));
}
