/* Recovered shipped factory. Module 560936.
 * Source: recovered/web/assets/dd38ed32c5f42ccc.js
 * UTF-16 property offsets: 1041..1440
 * Raw property SHA-256: 3c7b493df4f8d16d326d962a1ce191a5b8417030fc0d49533a6bf75c8f198a6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => l });
  var s = n(582128),
    u = n(473193),
    r = n(625494),
    i = n(652215);
  function l(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: l } = e,
      A = s.useContext(u.C);
    s.useEffect(() => {
      if (!t || null == A || null == n || null == l) return;
      let { setAnimate: e } = A;
      return (
        r._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e),
        () => {
          r._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e);
        }
      );
    }, [t, l, n, A]);
  }
}
