/* Recovered shipped factory. Module 139384.
 * Source: recovered/web/assets/11d8dacc17e67962.js
 * UTF-16 property offsets: 4233..4556
 * Raw property SHA-256: 4bd575d37a96369f4cb0ba9b44ad9e7497d10ae87d7af4fa639a0e1924a49b0e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, s) {
  s.d(t, { A: () => a });
  var r = s(582128),
    n = s(621466),
    i = s(17928),
    l = s(531685);
  let a = function (e) {
    let t = r.useRef(!1),
      s = (0, i.bG)([l.A], () => l.A.isVisible());
    r.useEffect(() => {
      if (s) {
        if (t.current && e?.current != null && (0, n.vq)(e.current, HTMLVideoElement))
          try {
            (e.current.load(), (t.current = !1));
          } catch (e) {}
      } else t.current = !0;
    }, [s, e, t]);
  };
}
