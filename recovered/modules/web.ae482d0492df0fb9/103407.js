/* Recovered shipped factory. Module 103407.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6719814..6729742
 * Raw property SHA-256: 9e22e6150fb3442a43eacd52cd8ebe951ea778e57848d900b4e3da553ba60ac0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { default: () => Q, H: () => q });
  var i = n(477900),
    r = n(582128),
    a = n(554146),
    s = n(384939),
    l = n(366010),
    o = n(212245),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    _ = n(826673),
    E = n(38405),
    A = n(308588),
    h = n(821609),
    f = n(28863),
    I = n(501419),
    p = n(174459),
    T = n(637706),
    m = n(498470),
    g = n(652215),
    S = n(49999),
    N = n(660183),
    C = n(696918);
  (n(323874), n(14289), n(35956));
  var O = n(503698),
    R = n.n(O),
    L = n(562708),
    y = n(877624),
    D = n(17928),
    v = n(815021),
    b = n(935462),
    M = n(812993),
    P = n(297264),
    U = n(834730),
    w = n(315629),
    G = n(73153),
    x = n(775602),
    k = n(139286),
    F = n(175671),
    B = n(259407),
    V = n(915089),
    H = n(607470),
    j = n(684519),
    W = n(186111),
    Y = n(774774),
    K = n(209012);
  let $ = [];
  function z(e) {
    let { tagText: t, className: n } = e;
    return (0, i.jsx)(M.Lp, { className: R()(K.Tc, n), text: t });
  }
  function X(e) {
    let { header: t, subHeader: n, subHeaderExtra: r, imageSrc: a, tagText: s, wideStyle: l } = e;
    return (0, i.jsxs)("div", {
      className: R()(K.Vr, { [K.tF]: l }),
      children: [
        null != s ? (0, i.jsx)(z, { tagText: s, className: K.bX }) : null,
        (0, i.jsx)("img", { alt: "", className: R()(K._n, { [K.tF]: l }), src: a }),
        (0, i.jsxs)("div", {
          className: R()(K.Zz, { [K.tF]: l }),
          children: [
            (0, i.jsx)(P.D, { variant: "heading-md/bold", className: K.Hf, children: t }),
            (0, i.jsxs)(U.E, {
              variant: "text-md/medium",
              color: "text-subtle",
              children: [n, r?.()],
            }),
          ],
        }),
      ],
    });
  }
  function Z(e) {
    let {
        componentId: t,
        promotionId: n,
        promotion: s,
        className: l,
        renderModalProps: o,
        heroArt: d,
        heroArtClassName: c,
        header: u,
        headerClassName: _,
        modalTopPill: A,
        subHeader: h,
        subHeaderExtra: f,
        featureCards: T,
        changeLogId: m,
        button: C,
        body: O,
        disclaimer: M,
        disclaimerExtra: z,
      } = e,
      { onClose: Z, transitionState: q } = o,
      Q = (0, V.GV)(),
      J = T.length % 2 == 0,
      ee = (0, D.bG)([x.Ay], () => x.Ay.useReducedMotion),
      [et, en] = r.useState(Date.now()),
      [ei, er] = r.useState(0),
      [ea, es] = r.useState(0),
      [el, eo] = r.useState(!1),
      [ed, ec] = r.useState(!0),
      eu = r.useRef(et),
      e_ = r.useRef(ei),
      eE = r.useRef(ea),
      eA = r.useRef(el),
      eh = r.useRef(ed),
      [ef, eI] = r.useState($),
      ep = r.useRef(!1),
      { promotionKey: eT } = null != s ? s : {};
    (0, k.A)({
      type: L.ImpressionTypes.MODAL,
      name: L.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
      properties: { component_id: t, component_type: y.C.ANNOUNCEMENT_MODAL, promotion_id: n },
    });
    let em = r.useRef(null),
      eg = r.useRef(!1);
    function eS() {
      let e = Date.now(),
        t = e - eu.current,
        n = e_.current,
        i = eE.current;
      return (eA.current && (er((n += t)), eh.current || es((i += t))), en(e), [n, i]);
    }
    return (
      r.useEffect(() => {
        let e = em.current?.getScrollerNode();
        if (null == e) return;
        function i() {
          eg.current ||
            em.current?.isScrolledToBottom() !== !0 ||
            ((eg.current = !0),
            p.default.track(g.HAw.PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED, {
              component_id: t,
              component_type: y.C.ANNOUNCEMENT_MODAL,
              visible_on_mount: em.current?.isScrolledToTop() ?? !1,
              promotion_id: n,
            }));
        }
        let r = new ResizeObserver(i);
        return (
          e.addEventListener("scroll", i, { passive: !0 }),
          r.observe(e),
          i(),
          () => {
            (e.removeEventListener("scroll", i), r.disconnect());
          }
        );
      }, [t, n]),
      r.useEffect(() => {
        async function e() {
          try {
            if ("video" !== d.type || null == d.subtitles) return;
            let e = d.subtitles?.map(async (e) => {
              let t = await fetch(e.src);
              if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
              let n = await t.text(),
                i = new Blob([n], { type: "text/vtt" }),
                r = URL.createObjectURL(i);
              return { ...e, src: r };
            });
            eI(await Promise.all(e));
          } catch (e) {
            (E.A.captureException(e), eI($));
          }
        }
        (!0 !== ep.current && e(), (ep.current = !0));
      }, [d, ef]),
      r.useEffect(
        () => () => {
          null != ef &&
            ef.forEach((e) => {
              URL.revokeObjectURL(e.src);
            });
        },
        [ef],
      ),
      r.useEffect(() => {
        ((eu.current = et),
          (e_.current = ei),
          (eE.current = ea),
          (eA.current = el),
          (eh.current = ed));
      }, [et, ei, ea, el, ed]),
      r.useEffect(
        () => () => {
          if ("video" === d.type || "embed" === d.type) {
            let [e, t] = eS();
            (p.default.track(g.HAw.CHANGE_LOG_VIDEO_PLAYED, {
              change_log_id: m,
              seconds_played: Math.round(e / 1e3),
            }),
              p.default.track(g.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                change_log_id: m,
                seconds_unmuted: Math.round(t / 1e3),
              }));
          }
        },
        [m, d.type],
      ),
      r.useEffect(() => {
        if (W.A.getLayers().includes(g.zgK.COMPONENT_PLAYGROUND)) return;
        (0, I.Vh)(a.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: n });
        let e = Date.now();
        return (
          p.default.track(g.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
          () => {
            (p.default.track(g.HAw.CHANGE_LOG_CLOSED, {
              change_log_id: m,
              seconds_open: Math.round((Date.now() - e) / 1e3),
            }),
              (0, I.qr)(a.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                dismissAction: S.i.DISMISS,
              }),
              G.h.dispatch({
                type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                promotionId: n,
                promotionKey: eT,
              }));
          }
        );
      }, [m, n, eT]),
      (0, i.jsx)(b.EO, {
        "data-migration-pending": !0,
        className: R()(K.zr, K.kv, l),
        transitionState: q,
        "aria-labelledby": Q,
        parentComponent: "PremiumAnnouncementModalVariant1",
        children: (0, i.jsxs)(w.h, {
          color: "nitro-pink",
          className: K.YV,
          children: [
            (0, i.jsx)("div", {
              className: K.cG,
              children: (0, i.jsx)(v.J, {
                "data-migration-pending": !0,
                onClick: async () => await Z(),
              }),
            }),
            (0, i.jsxs)(b.$m, {
              "data-migration-pending": !0,
              className: K.Qs,
              scrollbarType: "auto",
              overflow: "auto",
              scrollerRef: em,
              children: [
                (function () {
                  switch (d.type) {
                    case "video":
                      return (0, i.jsx)(H.A, {
                        className: R()(K.Ki, c),
                        autoPlay: !ee,
                        loop: !0,
                        muted: !0,
                        controls: !0,
                        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                        src: d.src,
                        poster: d.poster,
                        onPlay: (e) => {
                          (p.default.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
                            en(Date.now()),
                            eo(!0),
                            ec(e.currentTarget.muted));
                        },
                        onEnded: (e) => {
                          (eS(), ec(e.currentTarget.muted), eo(!1));
                        },
                        onVolumeChange: (e) => {
                          (eS(), ec(e.currentTarget.muted));
                        },
                        onPause: (e) => {
                          (eS(), ec(e.currentTarget.muted), eo(!1));
                        },
                        disablePictureInPicture: !0,
                        children: ef?.map((e) => {
                          let t = (0, N.getLanguages)().find((t) => t.code === e.locale);
                          return null == t
                            ? null
                            : (0, i.jsx)(
                                "track",
                                {
                                  label: t.englishName,
                                  kind: "captions",
                                  srcLang: t.code,
                                  src: e.src,
                                  default: e.isDefault,
                                },
                                e.locale,
                              );
                        }),
                      });
                    case "embed":
                      return (0, i.jsx)(F.rr, {
                        className: R()(K.Ki, c),
                        allowFullScreen: !1,
                        href: d.href,
                        thumbnail: d.thumbnail,
                        video: d.embed,
                        provider: B.m.YOUTUBE,
                        maxWidth: d.embed.width,
                        maxHeight: d.embed.height,
                        renderVideoComponent: j.$o,
                        renderImageComponent: j.LL,
                        renderLinkComponent: j.bU,
                        onPlay: () => {
                          p.default.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                        },
                      });
                    case "image":
                      return (0, i.jsx)("img", { alt: "", className: R()(K.Ki, c), src: d.src });
                    default:
                      return null;
                  }
                })(),
                null != A && "" !== A
                  ? (0, i.jsx)(Y.e4, {
                      text: A,
                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                      className: K.ON,
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: K.Z,
                  children: [
                    (0, i.jsx)(P.D, { variant: "nitro-md", className: R()(K.TK, _), children: u }),
                    (0, i.jsxs)(U.E, {
                      variant: "text-md/medium",
                      color: "text-subtle",
                      className: K.uI,
                      children: [h, f?.()],
                    }),
                  ],
                }),
                null != O &&
                  "" !== O &&
                  (0, i.jsx)(P.D, { variant: "heading-lg/semibold", className: K.G3, children: O }),
                T.length > 0 &&
                  (0, i.jsx)("div", {
                    className: K.IS,
                    children: T.map((e, t) =>
                      (0, i.jsx)(X, { ...e, wideStyle: J }, `${e.header}_${t}`),
                    ),
                  }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: K.xQ,
              children: [
                C(),
                null != M &&
                  "" !== M &&
                  (0, i.jsxs)(U.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: K.ed,
                    children: [M, z?.()],
                  }),
              ],
            }),
          ],
        }),
      })
    );
  }
  function q(e) {
    let { promotionId: t, properties: n, isPreview: i } = e,
      r = s.m.clone(n);
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
      let { isDismissed: e } = (0, _.u$)(
        a.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL,
        t,
      );
      return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
  }
  function Q(e) {
    let { componentId: t, promotionId: n, promotion: r, renderModalProps: s, properties: _ } = e,
      { location: O } = (0, o.p)(),
      { analyticsLocations: R } = (0, u.Ay)(c.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
      L = (0, d.Ay)(),
      y = (0, l.q)(L);
    if ("announcementModalVariant1" === _.properties.oneofKind) {
      let e = (function (e) {
        let {
            componentId: t,
            promotionId: n,
            promotion: r,
            content: s,
            renderModalProps: l,
            analyticsLocations: o,
            analyticsLocation: d,
            isLightTheme: c,
          } = e,
          u = `AnnouncementModalVariant1_${t}`,
          { onClose: _ } = l,
          O = s.button?.copy ?? N.intl.string(N.t.YScQSF),
          R = s.button?.buttonAction,
          L =
            R === A.d.OPEN_MARKETING_PAGE
              ? "jump_to_mkt_button"
              : R === A.d.OPEN_SOCIAL_LAYER_STOREFRONT
                ? "jump_to_slayer_storefront_button"
                : "get_nitro_button",
          y = (0, m.h)({
            buttonAction: s.button?.buttonAction,
            deeplinkSection: s.button?.deeplinkSection,
            applicationId: s.button?.navigableStorefrontApplicationId?.value,
            analyticsLocations: o,
            analyticsLocation: d,
            onClose: _,
          }),
          D = (0, T.C)(s.helpArticle, s.helpArticleId),
          v =
            null != D
              ? () =>
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      "\xa0",
                      (0, i.jsx)(f.Anchor, { className: C.$T, href: D.url, children: D.linkText }),
                    ],
                  })
              : void 0,
          b = (0, T.C)(s.disclaimer?.disclaimerHelpArticle, ""),
          M =
            null != b
              ? () =>
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      "\xa0",
                      (0, i.jsx)(f.Anchor, { className: C.$T, href: b.url, children: b.linkText }),
                    ],
                  })
              : void 0,
          P = { type: "video", src: c ? s.heroArtVideoLinkLightTheme : s.videoLink };
        return (
          null != s.heroArtVideoSubtitles &&
            (P.subtitles = s.heroArtVideoSubtitles.map((e) => ({
              locale: e.locale,
              src: e.link,
              isDefault: !1,
            }))),
          ("" !== s.heroArtImageLinkDarkTheme || "" !== s.heroArtImageLinkLightTheme) &&
            (P = {
              type: "image",
              src: c ? s.heroArtImageLinkLightTheme : s.heroArtImageLinkDarkTheme,
            }),
          {
            componentId: t,
            promotionId: n,
            promotion: r,
            renderModalProps: l,
            header: s.header,
            modalTopPill: s.modalTopPill,
            subHeader: s.subheader,
            subHeaderExtra: v,
            body: s.body,
            heroArt: P,
            featureCards: s.featureCards.map((e) => {
              let t = (0, T.C)(e.helpArticle, ""),
                n =
                  null != t
                    ? () =>
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            "\xa0",
                            (0, i.jsx)(f.Anchor, {
                              className: C.$T,
                              href: t.url,
                              children: t.linkText,
                            }),
                          ],
                        })
                    : void 0;
              return {
                header: e.header,
                subHeader: e.body,
                subHeaderExtra: n,
                imageSrc: c ? e.imageLinkLightTheme : e.imageLink,
                tagText: "" !== e.pill ? e.pill : void 0,
              };
            }),
            changeLogId: u,
            button: function () {
              let e = Date.now();
              async function t() {
                p.default.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                  change_log_id: u,
                  cta_type: L,
                  seconds_open: Math.round((Date.now() - e) / 1e3),
                  target: u,
                });
                try {
                  (R === A.d.OPEN_MARKETING_PAGE || R === A.d.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                    (await (0, I.qr)(a.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                      dismissAction: S.i.TAKE_ACTION,
                    }));
                } catch (e) {
                  E.A.captureException(e);
                } finally {
                  y();
                }
              }
              let { icon: r, iconPosition: l } = (0, m.x)({ buttonAction: s.button?.buttonAction });
              return (0, i.jsx)(h.$, {
                variant: "expressive",
                size: "md",
                onClick: t,
                text: O,
                icon: r,
                iconPosition: l,
              });
            },
            disclaimer: s.disclaimer?.disclaimerText !== "" ? s.disclaimer?.disclaimerText : void 0,
            disclaimerExtra: M,
          }
        );
      })({
        componentId: t,
        promotionId: n,
        promotion: r,
        content: _.properties.announcementModalVariant1,
        renderModalProps: s,
        analyticsLocations: R,
        analyticsLocation: O,
        isLightTheme: y,
      });
      return (0, i.jsx)(Z, { ...e });
    }
    return (
      E.A.captureMessage(
        `Property type ${_.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
      ),
      null
    );
  }
}
