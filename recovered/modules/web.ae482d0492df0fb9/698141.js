/* Recovered shipped factory. Module 698141.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2875604..2876187
 * Raw property SHA-256: a1a13c34505174f082bec109cf3c600dea68aec2ce42b01f258f0a57ded925ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(475743),
    s = n(933958),
    l = n(429913),
    o = n(91242),
    d = n(25451);
  function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: u } = e,
      _ = (0, l.h)(t),
      E = (0, r.bG)([s.Ay], () =>
        s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0),
      ),
      A = (0, r.bG)([o.A], () => {
        let e = o.A.getMainFrame();
        return e?.state === "loading" && e.applicationId === t;
      }),
      h = null != _ && (0, d.X)(_) ? A : null != E && E.isLaunching && E.componentId === c,
      f = (0, a.Ay)(h);
    return (
      i.useEffect(() => {
        !h && f && u?.();
      }, [h, f, u]),
      { submitting: h, wasSubmitting: f ?? null }
    );
  }
}
