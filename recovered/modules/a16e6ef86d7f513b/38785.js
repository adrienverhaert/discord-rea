/* Recovered shipped factory. Module 38785.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 11372..15123
 * Raw property SHA-256: af6d854ae6c26bf706dd2fc29898bb63252e118dbd853211d89e77e5eb3a82e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { T_: () => T, Ed: () => _ });
  var l = n(477900),
    r = n(582128),
    o = n(503698),
    i = n.n(o),
    a = n(683071),
    u = n(725836);
  n(321073);
  var s = n(901930),
    c = n(900730),
    d = n(642639),
    C = n(580133),
    h = n(169797),
    p = n(270537);
  n(652215);
  var m = n(649975),
    E = n(660183),
    f = n(66414);
  function _(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [
        n ? (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: r }) }) : null,
        (0, l.jsx)(h.DJ, { className: i()(f.g4, t) }),
      ],
    });
  }
  function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
      ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
      : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
  }
  function A(e) {
    return null == e || "" === e;
  }
  function g(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
      { errorMessage: o, richNotices: i } = (function () {
        let { errorMessage: e } = (0, s.j)({}),
          t = (function () {
            let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                paymentSourceId: e.paymentSourceId,
                checkoutPaymentSources: e.get("checkoutPaymentSources"),
              })),
              {
                relocationCountry: n,
                relocationCurrencyCode: o,
                willForfeitGiftCardBalance: i,
              } = r.useMemo(() => {
                let n = null != e ? t.find((t) => t.id === e) : null;
                return {
                  relocationCountry: n?.relocationCountry ?? null,
                  relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                  willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                };
              }, [t, e]);
            return r.useMemo(
              () =>
                null == n
                  ? null
                  : {
                      directContent: (0, l.jsx)(c.c, {
                        relocationCountry: n,
                        relocationCurrencyCode: o,
                        willForfeitGiftCardBalance: i,
                      }),
                      key: "store-relocation-notice",
                    },
              [n, o, i],
            );
          })();
        return {
          errorMessage: e,
          richNotices: r.useMemo(() => {
            let e = [];
            return (null != t && e.push(t), e);
          }, [t]),
        };
      })(),
      u = r.useRef(null);
    return (
      r.useEffect(() => {
        A(o) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
      }, [o]),
      r.useMemo(() => {
        if (!(!A(o) || i.length > 0 || null != t)) return null;
        let e = (0, l.jsxs)(l.Fragment, {
          children: [A(o) ? null : (0, l.jsx)(a.w, { type: "critical", children: o }), i.map(y)],
        });
        return (0, l.jsx)("div", {
          ref: u,
          className: f.dD,
          children: n
            ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
            : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
        });
      }, [o, i, t, n])
    );
  }
  function S(e) {
    return r.useMemo(
      () =>
        null == e
          ? null
          : Array.isArray(e)
            ? 0 === e.length
              ? null
              : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
            : null != e
              ? y(e)
              : null,
      [e],
    );
  }
  function N(e) {
    let {
        upperInlineNoticeProps: t,
        shouldShowGlobalNotices: n,
        showUpperNoticesAboveGlobalNotices: o,
      } = e,
      i = S(t);
    return r.useMemo(
      () =>
        null != i || n
          ? n
            ? null != i
              ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: o, children: i })
              : (0, l.jsx)(g, {})
            : (0, l.jsx)("div", { className: f.dD, children: i })
          : null,
      [n, i, o],
    );
  }
  function T(e) {
    let {
        upperInlineNoticeProps: t,
        planSelectContent: n,
        purchaseItemContent: r,
        subscriptionDetailsContent: o,
        isStepLoading: a,
        paymentMethodContent: s,
        invoiceSummaryContent: c,
        promotionalNoticeContent: d,
        legalContent: h,
        invoiceTotalDueLabel: y = E.intl.string(m.default.R0cZsM),
        invoiceTotalDueValue: A,
        shouldShowGlobalNotices: g,
        showUpperNoticesAboveGlobalNotices: T,
        footerInlineNoticeProps: I,
        headerBadgeConfig: k,
        className: O,
      } = e,
      x = S(I),
      { setCheckoutFooterLineItemNode: v } = (0, u.ck)();
    return a
      ? (0, l.jsx)(_, { className: O, shouldShowUnifiedHeader: !0 })
      : (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: i()(O, { [f.pg]: null == c }),
              children: [
                (0, l.jsx)(N, {
                  upperInlineNoticeProps: t,
                  shouldShowGlobalNotices: g,
                  showUpperNoticesAboveGlobalNotices: T,
                }),
                n,
                null != n && null != r && (0, l.jsx)("div", { className: f.ls }),
                r,
                null != o && (0, l.jsx)("div", { className: f.P3, children: o }),
                (0, l.jsx)("div", { className: f.Jv, children: s }),
                null != c && (0, l.jsx)("div", { className: f.ZF, children: c }),
              ],
            }),
            (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: k }) }),
            (0, l.jsxs)(u.bx, {
              children: [
                (0, l.jsx)("div", { ref: v }),
                null != y && null != A && (0, l.jsx)(p.Qf, { className: f.NR, label: y, value: A }),
                null != d ? (0, l.jsx)("div", { className: f.uh, children: d }) : null,
                h,
                null != x ? (0, l.jsx)("div", { className: f.Uu, children: x }) : null,
              ],
            }),
          ],
        });
  }
}
