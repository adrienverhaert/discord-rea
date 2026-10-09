/* Recovered shipped factory. Module 750481.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2755063..2756900
 * Raw property SHA-256: 90f7d928cb10ebd44ce7385d77c8642eaa041780770e5d173c0fab7727021c27
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => A, n: () => E });
  var i = n(582128),
    r = n(17928),
    a = n(73153),
    s = n(381689),
    l = n(287809),
    o = n(379257),
    d = n(295972),
    c = n(652215),
    u = n(835002);
  function _(e) {
    let {
        onComplete: t,
        entryPoint: n,
        shouldShowExpressiveModal: d = !1,
        onMethodUnavailable: _,
      } = e,
      [E, A] = i.useState(!1),
      h = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
      { current: f } = i.useRef(h?.ageVerificationStatus),
      I = i.useCallback(() => {
        a.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: f });
      }, [f]);
    return {
      loading: E,
      startVerification: i.useCallback(
        async (e, i) => {
          A(!0);
          try {
            a.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
            let r = await e(),
              l = o.A.showAgeVerification({
                method: i?.method,
                externalWindow: i?.externalWindow,
                webviewUrl: r.verification_webview_url,
                verificationRequestId: r.verification_request_id,
                verificationVendorName: r.verification_vendor_name,
                incodeParameters: r.incode_parameters,
                onComplete: t,
                onClose: I,
                onCancel: I,
                entryPoint: n,
                shouldShowExpressiveModal: d,
              });
            !1 === l && (s.A.showFailedToast(u.OB.TIGGER_PAWTECT_ERROR), I());
          } catch (e) {
            (I(),
              null != _ && e?.body?.code === c.t02.AGE_VERIFICATION_METHOD_UNAVAILABLE
                ? (s.A.showFailedToast(u.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE), _())
                : s.A.showFailedToast(u.OB.TIGGER_PAWTECT_ERROR));
          } finally {
            A(!1);
          }
        },
        [t, I, d, n, _],
      ),
    };
  }
  function E(e) {
    let {
        onComplete: t,
        entryPoint: n,
        shouldShowExpressiveModal: r = !1,
        classificationId: a = null,
      } = e,
      { loading: s, startVerification: l } = _({
        onComplete: t,
        entryPoint: n,
        shouldShowExpressiveModal: r,
      });
    return {
      loading: s,
      initiateAgeVerification: i.useCallback(
        (e, t) => l(() => (0, d.uf)({ method: e, classificationId: a ?? void 0, vendor: t })),
        [l, a],
      ),
    };
  }
  function A(e) {
    let { onComplete: t, entryPoint: n, onMethodUnavailable: r } = e,
      { loading: a, startVerification: s } = _({
        onComplete: t,
        entryPoint: n,
        shouldShowExpressiveModal: !0,
        onMethodUnavailable: r,
      });
    return {
      loading: a,
      initiateAgeVerificationV2: i.useCallback(
        (e) => s(() => (0, d.en)(e.method, e.vendor), e),
        [s],
      ),
    };
  }
}
