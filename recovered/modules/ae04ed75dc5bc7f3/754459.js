/* Recovered shipped factory. Module 754459.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 251382..252097
 * Raw property SHA-256: 712fa3239fade7dd69a13f485b76f39bd34583ad5e0f438914854484171d59c5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => a });
  var i = n(582128),
    l = n(625494),
    s = n(652215);
  function r(e) {
    return Object.keys(e).some((t) => e[t]);
  }
  function a(e, t) {
    let [n, a] = i.useState(t),
      [o, d] = i.useState(r(n)),
      c = i.useRef(o),
      u = i.useRef(null),
      m = i.useCallback((e) => {
        a((t) => {
          let n = { ...t, ...e },
            i = r(n);
          return (
            i !== c.current &&
              ((c.current = i),
              null != u.current && (cancelAnimationFrame(u.current), (u.current = null)),
              i ? d(!0) : (u.current = requestAnimationFrame(() => d(!1)))),
            n
          );
        });
      }, []);
    return (
      i.useEffect(() => {
        function t(e) {
          let { emojiPicker: t, emojiBurstPicker: n } = e;
          return m({ emojiPicker: t, emojiBurstPicker: n });
        }
        return (
          l._.subscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t),
          () => {
            l._.unsubscribeKeyed(s.zOV.TOGGLE_REACTION_POPOUT, e, t);
          }
        );
      }, [e, m]),
      { popouts: n, setPopout: m, selected: o }
    );
  }
}
