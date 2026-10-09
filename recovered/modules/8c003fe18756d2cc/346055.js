/* Recovered shipped factory. Module 346055.
 * Source: recovered/web/assets/8c003fe18756d2cc.js
 * UTF-16 property offsets: 94..1143
 * Raw property SHA-256: 919f212441dc61882657b618ba6296c9f344ab1ed952a7960759498a592231e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { M: () => a, f: () => d });
  var l = r(477900),
    n = r(582128);
  let u = 0;
  function d(e, t) {
    let [r] = n.useState(() => u++),
      l = `data-focus-blocked-${r}`,
      d = n.useCallback(
        (e) => {
          let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: (e) =>
                e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
            }),
            r = t.currentNode;
          for (; null != r;) {
            let e = r;
            (e.setAttribute(l, String(e.tabIndex)), (e.tabIndex = -1), (r = t.nextNode()));
          }
        },
        [l],
      ),
      a = n.useCallback(
        (e) => {
          e.querySelectorAll(`[${l}]`).forEach((e) => {
            let t = e.getAttribute(l);
            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(l));
          });
        },
        [l],
      );
    (n.useLayoutEffect(() => {
      if (t) {
        let t = e.current;
        if (null != t) return (d(t), () => a(t));
      }
    }, [t, e, d, a]),
      n.useEffect(() => {
        if (!t) return;
        let r = e.current;
        if (null == r) return;
        let l = new MutationObserver((e) => {
          e.some((e) => e.addedNodes.length > 0) && d(r);
        });
        return (l.observe(r, { childList: !0, subtree: !0 }), () => l.disconnect());
      }, [t, e, d]));
  }
  function a(e) {
    let { children: t, className: r, enabled: u = !0, "aria-hidden": a } = e,
      i = n.useRef(null);
    return (d(i, u), (0, l.jsx)("div", { ref: i, className: r, "aria-hidden": a, children: t }));
  }
}
