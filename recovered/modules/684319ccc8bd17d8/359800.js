/* Recovered shipped factory. Module 359800.
 * Source: recovered/web/assets/684319ccc8bd17d8.js
 * UTF-16 property offsets: 95..1109
 * Raw property SHA-256: 3807f966344280d55c67247e004ad5b91d48bf35ad4199b06e0071d5030f0cb8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { z: () => m });
  var i = n(477900),
    r = n(582128),
    l = n(192308),
    s = n(739187),
    o = n(97483),
    u = n(475743),
    a = n(942370),
    c = n(538524),
    d = n(660183);
  let f = "in-game-auth-check-modal";
  function m(e, t) {
    let { showInGameModal: m = !0, showToastOnSuccess: g = !0 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      [E, A] = r.useState(!1),
      C = r.useCallback(
        function () {
          for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
          A(!0);
          let o = e(...r);
          return (
            o === a._.RPC &&
              m &&
              (0, l.openModalLazy)(
                async () => {
                  let { default: e } = await n.e("630724").then(n.bind(n, 272047));
                  return (t) => (0, i.jsx)(e, { ...t });
                },
                { modalKey: f },
              ),
            o
          );
        },
        [e, A, m],
      ),
      _ = (0, u.Ay)(t);
    return (
      r.useEffect(() => {
        if (E && !1 === _ && !0 === t) {
          function e() {
            (0, s.P)({
              id: "account-linked-toast",
              message: d.intl.string(c.default.uG6teD),
              type: o.Ck.SUCCESS,
            });
          }
          ((0, l.closeModal)(f),
            A(!1),
            g &&
              ("visible" === document.visibilityState
                ? e()
                : document.addEventListener("visibilitychange", function t() {
                    "visible" === document.visibilityState &&
                      (e(), document.removeEventListener("visibilitychange", t));
                  })));
        }
      }, [E, t, _, g]),
      C
    );
  }
}
