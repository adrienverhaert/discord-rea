/* Recovered shipped factory. Module 684519.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6003027..6044372
 * Raw property SHA-256: 8f186e7283e0562521eecae9e2240d1b41b2756792d0f100fd61329d34c2ad45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    ks: () => tV,
    UK: () => t$,
    Ez: () => tj,
    _z: () => tM,
    OZ: () => tY,
    $o: () => tU,
    yR: () => tz,
    LL: () => tx,
    bU: () => tk,
    P$: () => tG,
    GN: () => tW,
    _d: () => tF,
    gL: () => tw,
    Dk: () => tB,
    Ab: () => tH,
  });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(435558),
    d = n.n(o),
    c = n(621466),
    u = n(17928),
    _ = n(834730),
    E = n(922016),
    A = n(559106),
    h = n(821609),
    f = n(289873),
    I = n(939249),
    p = n(582394),
    T = n(306788),
    m = n(297264),
    g = n(789645),
    S = n(364522),
    N = n(148494),
    C = n(334738),
    O = n(192308),
    R = n(267102),
    L = n(619517),
    y = n(256905),
    D = n(536763),
    v = n(218394);
  class b extends a.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
      let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: a } = this.props;
      (r?.(e), null != a) ? a() : (0, D.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, O.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
      (0, O.closeModal)(y.K, this.modalContext);
    };
    onZoom = (e, t) => {
      let { zoomThumbnailPlaceholder: n, trigger: i } = t;
      e.preventDefault();
      let {
        alt: r,
        src: a,
        original: s,
        width: l,
        height: o,
        animated: d,
        srcIsAnimated: u,
        children: _,
        shouldHideMediaOptions: E = !1,
        sourceMetadata: A,
        analyticsSource: h,
        contentType: f,
        originalContentType: I,
      } = this.props;
      ((0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
        (0, y.R)({
          onClose: this.onCloseImage,
          items: [
            {
              url: a,
              width: l,
              height: o,
              type: "IMAGE",
              alt: r,
              contentType: f,
              originalContentType: I,
              zoomThumbnailPlaceholder: n,
              animated: d,
              srcIsAnimated: u,
              children: _,
              trigger: i,
              sourceMetadata: A,
              original: s ?? a,
            },
          ],
          shouldHideMediaOptions: E,
          location: h ?? "LazyImageZoomable",
          contextKey: this.modalContext,
        }));
    };
    render() {
      let { appContext: e, isWindowFocused: t, ...n } = this.props;
      return (0, r.jsx)(L.Ay, {
        ...n,
        onZoom: this.onZoom,
        onMouseEnter: this.onMouseEnter,
        shouldAnimate: t,
      });
    }
  }
  function M(e) {
    let t = (0, R.Us)(),
      n = (0, v.j)();
    return (0, r.jsx)(b, { ...e, isWindowFocused: n, appContext: t });
  }
  var P = n(9578),
    U = n(56562),
    w = n(475743),
    G = n(564771),
    x = n(692051),
    k = n(915089),
    F = n(611371),
    B = n(453771),
    V = n(440014);
  class H extends a.PureComponent {
    render() {
      let {
        src: e,
        fileSize: t,
        fileName: n,
        className: i,
        playable: a,
        volume: s,
        renderLinkComponent: l,
        onVolumeChange: o,
        onVolumeShow: d,
        onVolumeHide: c,
        autoMute: u,
        onMute: _,
        mimeType: E,
        onPlay: A,
      } = this.props;
      return (0, r.jsx)(V.Ay, {
        src: e,
        fileName: n,
        fileSize: (0, B.Hb)(t),
        fileSizeBytes: t,
        type: V.Ay.Types.AUDIO,
        className: i,
        playable: a,
        volume: s,
        onMute: _,
        autoMute: u,
        onVolumeChange: o,
        onVolumeShow: d,
        onVolumeHide: c,
        renderLinkComponent: l,
        mimeType: E,
        onPlay: A,
      });
    }
  }
  var j = n(248643),
    W = n(866665),
    Y = n(408278),
    K = n(900797),
    $ = n(847374),
    z = n(305866),
    X = n(230937),
    Z = n(387758),
    q = n(980707),
    Q = n(477782),
    J = n(32880),
    ee = n(365199),
    et = n(28863),
    en = n(26430),
    ei = n(224640),
    er = n(268218),
    ea = n(639169),
    es = n(586172),
    el = n(768947),
    eo = n(255438),
    ed = n(417964),
    ec = n(660183);
  let eu = "utf-8";
  var e_ = n(540168),
    eE = n(810917);
  let eA = new Set(["markdown", "md", "mkd", "mkdown"]),
    eh = (0, er.Fe)({
      createPromise: () =>
        Promise.all([n.e("759743"), n.e("207596"), n.e("636550")]).then(n.bind(n, 456262)),
      webpackId: 456262,
      name: "PlaintextFileMarkdownPreview",
      renderLoader: () => (0, r.jsx)(f.y, { className: eE.u1 }),
    });
  function ef(e) {
    let { text: t, language: n, wordWrap: i } = e;
    return (0, r.jsx)(e_.d, { text: t, language: n, className: l()(eE.Xb, { [eE.Zw]: i }) });
  }
  function eI(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
      s = ec.intl.formatToPlainString(a ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: i }),
      l = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${s})`;
    return (0, r.jsx)("div", {
      className: eE.py,
      children: (0, r.jsx)(W.m, {
        text: l,
        children: (0, r.jsx)(Y.K, {
          icon: t ? K.t : $.a,
          size: "md",
          variant: "secondary",
          onClick: () => n?.(!t),
          "aria-label": l,
        }),
      }),
    });
  }
  function ep(e) {
    let { fileName: t, fileSize: n } = e,
      i = `${t} (${(0, eo.up)(n)})`;
    return (0, r.jsxs)("div", {
      className: eE.VI,
      children: [
        (0, r.jsx)("div", {
          className: eE.VW,
          children: (0, r.jsx)(W.m, {
            text: i,
            children: (0, r.jsx)(_.E, {
              variant: "text-sm/normal",
              color: "text-default",
              className: eE.Md,
              children: t,
            }),
          }),
        }),
        (0, r.jsx)(_.E, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: (0, eo.up)(n),
        }),
      ],
    });
  }
  function eT(e) {
    let { language: t, setLanguage: n, align: i } = e,
      s = a.useRef(null),
      l = es.L.useConfig({ location: "LanguageSelect" }).enabled ? el.No : ea.Q;
    return (0, r.jsx)(E.Y, {
      targetElementRef: s,
      position: "left",
      align: i,
      renderPopout: (e) => {
        let { closePopout: i } = e;
        return (0, r.jsx)(z.l, {
          "aria-label": ec.intl.string(ec.t.utm4qs),
          children: (0, r.jsx)("div", {
            className: eE.md,
            children: (0, r.jsxs)(X.iS, {
              selectionMode: "single",
              onSelectionChange: (e) => {
                (n(e), i());
              },
              options: Array.from(l).map((e) => ({ value: e, label: e, id: e })),
              value: t,
              children: [
                (0, r.jsx)(X.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                (0, r.jsx)(X.X2, {}),
              ],
            }),
          }),
        });
      },
      children: (e) =>
        (0, r.jsx)(W.m, {
          ariaHidden: !0,
          text: ec.intl.string(ec.t.utm4qs),
          children: (0, r.jsx)(I.D, {
            ...e,
            className: eE.Qw,
            "aria-label": ec.intl.string(ec.t.utm4qs),
            children: (0, r.jsx)(Z.G, { size: "sm", color: "currentColor", ref: s }),
          }),
        }),
    });
  }
  function em(e) {
    let {
        wordWrap: t,
        setWordWrap: n,
        language: i,
        renderMarkdown: s,
        setRenderMarkdown: l,
        url: o,
        fileName: d,
      } = e,
      c = a.useRef(null),
      u = a.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(E.Y, {
          targetElementRef: c,
          position: "top",
          align: "left",
          renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(q.W, {
              "data-menu-migrated": !0,
              navId: "plaintext-preview-overflow-menu",
              onClose: a,
              onSelect: () => {},
              "aria-label": ec.intl.string(ec.t.PdRCRg),
              children: (0, r.jsxs)(Q.rX, {
                children: [
                  (0, r.jsx)(Q.Dr, {
                    id: "download",
                    label: ec.intl.string(ec.t["1WjMbC"]),
                    icon: J.DownloadIcon,
                    action: () => {
                      (u.current?.click(), a());
                    },
                  }),
                  (0, r.jsx)(Q.sL, {
                    id: "word-wrap",
                    label: ec.intl.string(ec.t.AMKNT1),
                    checked: t,
                    action: () => n(!t),
                  }),
                  eA.has(i)
                    ? (0, r.jsx)(Q.sL, {
                        id: "render-markdown",
                        label: ec.intl.string(ec.t.zstmkn),
                        checked: s,
                        action: () => l(!s),
                      })
                    : null,
                ],
              }),
            });
          },
          children: (e) =>
            (0, r.jsx)(W.m, {
              ariaHidden: !0,
              text: ec.intl.string(ec.t["UKOtz+"]),
              children: (0, r.jsx)(I.D, {
                ...e,
                className: eE.IQ,
                "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                children: (0, r.jsx)(ee.MoreHorizontalIcon, {
                  ref: c,
                  size: "sm",
                  color: "currentColor",
                }),
              }),
            }),
        }),
        (0, r.jsx)(et.Anchor, {
          ref: u,
          href: o,
          download: d,
          className: eE.op,
          children: (0, r.jsx)(J.DownloadIcon, { size: "sm", color: "currentColor" }),
        }),
      ],
    });
  }
  function eg(e) {
    return (0, r.jsx)(W.m, {
      ariaHidden: !0,
      text: ec.intl.string(ec.t["0PQYk3"]),
      children: (0, r.jsx)(I.D, {
        className: eE.R1,
        "aria-label": ec.intl.string(ec.t["0PQYk3"]),
        onClick: () => {
          (0, O.openModal)((t) => (0, r.jsx)(eN, { ...e, ...t }));
        },
        children: (0, r.jsx)(en._, { size: "sm", color: "currentColor" }),
      }),
    });
  }
  function eS(e) {
    let {
        url: t,
        fileName: n,
        fileSize: i,
        fileContents: a,
        expanded: s,
        setExpanded: o,
        language: d,
        setLanguage: c,
        wordWrap: u,
        setWordWrap: _,
        renderMarkdown: E,
        setRenderMarkdown: A,
        bytesLeft: h,
        className: I,
      } = e,
      p = a?.split("\n"),
      T = p?.length ?? 0,
      m = s ? 100 : 6,
      g = 0 === h,
      N = E && eA.has(d),
      C = "";
    (g && s && T > m ? (C = "\n...") : g || (C = "..."),
      "" !== C &&
        (g
          ? (C += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: T - m }))
          : (C +=
              " " +
              ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(h) }))));
    let O = p?.slice(0, m).join("\n") ?? "",
      R = s || m < T;
    return (0, r.jsxs)("div", {
      className: l()(I, eE.kL),
      children: [
        (0, r.jsx)(S.Ip, {
          className: l()(eE.FS, { [eE.KQ]: !s && !N }),
          style: { "--custom-plaintext-preview-collapsed-lines": 6 },
          children:
            null == a
              ? (0, r.jsx)(f.y, { className: eE.u1 })
              : N
                ? (0, r.jsx)(eh, { text: O, notice: C.trim() })
                : (0, r.jsx)(ef, { text: O + C, language: d, wordWrap: u }),
        }),
        (0, r.jsxs)("div", {
          className: eE.qr,
          role: "group",
          "aria-label": ec.intl.string(ec.t.TlXA8e),
          children: [
            R ? (0, r.jsx)(eI, { expanded: s, setExpanded: o, numLines: T, isWholeFile: g }) : null,
            (0, r.jsx)(ep, { fileName: n, fileSize: i }),
            (0, r.jsx)("div", { className: eE.Kb }),
            (0, r.jsx)(eT, { language: d, setLanguage: c, align: "top" }),
            null != a
              ? (0, r.jsx)(eg, {
                  url: t,
                  fileName: n,
                  fileSize: i,
                  language: d,
                  wordWrap: u,
                  renderMarkdown: E,
                  fileContents: a,
                  bytesLeft: h,
                })
              : null,
            (0, r.jsx)(em, {
              wordWrap: u,
              setWordWrap: _,
              language: d,
              renderMarkdown: E,
              setRenderMarkdown: A,
              url: t,
              fileName: n,
            }),
          ],
        }),
      ],
    });
  }
  function eN(e) {
    let {
        url: t,
        fileName: n,
        fileSize: i,
        transitionState: s,
        language: l,
        wordWrap: o,
        renderMarkdown: d,
        fileContents: u,
        bytesLeft: E,
        onClose: A,
      } = e,
      [h, I] = a.useState(l),
      [p, T] = a.useState(o),
      [m, g] = a.useState(d),
      N = a.useRef(null),
      C = m && eA.has(h),
      O =
        E > 0
          ? `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(E) })}`
          : "";
    return (
      a.useEffect(() => {
        function e(e) {
          if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != N.current) {
            let t = document.activeElement;
            if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
            e.preventDefault();
            let n = window.getSelection();
            if (null != n) {
              let e = document.createRange();
              (e.selectNodeContents(N.current), n.removeAllRanges(), n.addRange(e));
            }
          }
        }
        return (
          document.addEventListener("keydown", e),
          () => document.removeEventListener("keydown", e)
        );
      }, []),
      (0, r.jsx)(ei.d, {
        transitionState: s,
        "aria-label": ec.intl.string(ec.t["qxQjc+"]),
        size: "xxl",
        onClose: A,
        children: (0, r.jsxs)("div", {
          className: eE.jE,
          children: [
            (0, r.jsx)(S.Ip, {
              className: eE.ot,
              children:
                null == u
                  ? (0, r.jsx)(f.y, { className: eE.u1 })
                  : (0, r.jsx)("div", {
                      ref: N,
                      children: C
                        ? (0, r.jsx)(eh, { text: u, notice: O })
                        : (0, r.jsx)(ef, { text: u + O, language: h, wordWrap: p }),
                    }),
            }),
            (0, r.jsx)("div", {
              role: "group",
              "aria-label": ec.intl.string(ec.t.TlXA8e),
              children: (0, r.jsxs)(_.E, {
                color: "text-default",
                className: eE.Hx,
                variant: "text-sm/normal",
                children: [
                  (0, r.jsx)(ep, { fileName: n, fileSize: i }),
                  (0, r.jsx)("div", { className: eE.Kb }),
                  (0, r.jsx)(eT, { language: h, setLanguage: I, align: "bottom" }),
                  (0, r.jsx)(em, {
                    wordWrap: p,
                    setWordWrap: T,
                    language: h,
                    renderMarkdown: m,
                    setRenderMarkdown: g,
                    url: t,
                    fileName: n,
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  }
  let eC = a.memo(
    function (e) {
      let {
          url: t,
          fileName: n,
          fileSize: i,
          contentType: s,
          className: o,
          onClick: d,
          onContextMenu: c,
        } = e,
        [u, _] = a.useState(!1),
        [E, A] = a.useState(n.split(".").slice(-1)[0]),
        [h, f] = a.useState(!0),
        [I, p] = a.useState(!0),
        {
          fileContents: T,
          bytesLeft: m,
          hadError: g,
        } = (function (e, t) {
          let [n, i] = a.useState(!1),
            [r, s] = a.useState(null),
            [l, o] = a.useState(1);
          return (
            a.useEffect(() => {
              !(async function () {
                try {
                  let n = await fetch(e, {
                      headers: { Range: "bytes=0-50000", Accept: "text/plain" },
                    }),
                    r = (function (e) {
                      let t = e?.split("charset=").slice(-1)[0] ?? eu;
                      try {
                        return new TextDecoder(t);
                      } catch (n) {
                        if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                          return new TextDecoder(eu);
                        throw n;
                      }
                    })(t).decode(await n.arrayBuffer()),
                    a = n.headers.get("content-range") ?? "0",
                    l = n.headers.get("content-length") ?? "1",
                    d = parseInt(a.split("/")[1]),
                    c = Number.isNaN(d) ? 0 : d - parseInt(l),
                    u = 0 === c ? r : r.slice(0, -1);
                  (s((0, ed.sJ)(u)), o(c), i(!1));
                } catch (e) {
                  (o(0), i(!0));
                }
              })();
            }, [e, t]),
            { fileContents: r, bytesLeft: l, hadError: n }
          );
        })(t, s);
      return g
        ? (0, r.jsx)(G.A, {
            url: t,
            fileName: n,
            fileSize: i,
            onClick: d,
            onContextMenu: c,
            className: o,
          })
        : (0, r.jsx)(eS, {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: T,
            bytesLeft: m,
            expanded: u,
            setExpanded: _,
            language: E,
            setLanguage: A,
            wordWrap: h,
            setWordWrap: f,
            renderMarkdown: I,
            setRenderMarkdown: p,
            className: l()(eE.mr, o),
          });
    },
    (e, t) => e.url === t.url && e.className === t.className,
  );
  var eO = n(863922),
    eR = n(822074),
    eL = n(534890),
    ey = n(442433),
    eD = n(640708),
    ev = n(941971),
    eb = n(707539),
    eM = n(576705),
    eP = n(573163),
    eU = n(340833),
    ew = n(913642),
    eG = n(935208),
    ex = n(453302);
  n(321073);
  var ek = n(97808),
    eF = n(778712),
    eB = n(707606),
    eV = n(403362),
    eH = n(439511);
  let ej = (0, eB.A)(function (e) {
      let { member: t, empty: n, guildId: i } = e;
      return n || null == t
        ? (0, r.jsx)("div", { className: eH.pO })
        : (0, r.jsx)("div", {
            className: eH.pO,
            children: (0, r.jsx)(ek.eu, {
              src: t.getAvatarURL(i, 16),
              "aria-label": t.username,
              size: eF._3.SIZE_16,
              className: eH.pO,
            }),
          });
    }),
    eW = function (e) {
      let {
          partySize: t,
          members: n,
          minAvatarsShown: i = 1,
          maxAvatarsShown: a = 2,
          guildId: s,
        } = e,
        { totalSize: l, knownSize: o } = t;
      if (l < i) return null;
      let c = d()(n)
          .filter(eV.Vq)
          .take(a)
          .map((e) => (0, r.jsx)(ej, { member: e, guildId: s }, e.id))
          .value(),
        u = l - o;
      for (let e = 0; e < u && c.length < a; e++)
        c.push((0, r.jsx)(ej, { empty: !0, guildId: s }, `empty-member-${e}`));
      let _ = Math.max(Math.min(l - c.length, 99), 0);
      if (1 === _) {
        let e = n[a];
        c.push((0, r.jsx)(ej, { member: e, guildId: s }, e.id));
      }
      return (0, r.jsx)("div", {
        className: eH.iE,
        children: (0, r.jsxs)("div", {
          className: eH.S3,
          children: [
            c,
            _ > 1 ? (0, r.jsxs)("div", { className: eH.Hi, children: ["+", _] }) : null,
          ],
        }),
      });
    };
  var eY = n(303727),
    eK = n(681939);
  function e$() {
    return (0, r.jsxs)("div", {
      className: eK.kL,
      children: [
        (0, r.jsxs)("div", {
          className: eK.zc,
          children: [
            (0, r.jsx)("div", {
              className: eK.Kk,
              children: (0, r.jsx)(T.K, {
                size: "custom",
                color: "currentColor",
                className: eK.l1,
                width: 28,
                height: 28,
              }),
            }),
            (0, r.jsx)(eY.A, { className: eK.uf }),
          ],
        }),
        (0, r.jsx)(m.D, {
          className: eK.wx,
          variant: "heading-xl/semibold",
          children: ec.intl.string(ec.t.yJHJei),
        }),
        (0, r.jsx)(_.E, {
          className: eK.Qq,
          color: "text-default",
          variant: "text-md/normal",
          children: ec.intl.string(ec.t.p2dIh6),
        }),
      ],
    });
  }
  var ez = n(652215),
    eX = n(670455),
    eZ = n(750557);
  function eq(e) {
    let { summary: t, channel: i, members: s, guildId: l, unread: o, onClick: d } = e,
      [c, E] = a.useState(!1),
      A = (0, eb.aK)(eG.default.extractTimestamp(t.startId)),
      h = (0, u.bG)([eR.A], () => eR.A.summaryFeedback(t));
    function f(e, n) {
      (e.stopPropagation(), (0, ex.A)({ summary: t, channel: i, rating: n }));
    }
    let p = eM.A.can(ez.xBc.MANAGE_MESSAGES, i);
    return (0, r.jsxs)(I.D, {
      className: eZ.kL,
      onClick: d,
      onContextMenu: function (e) {
        p &&
          (0, ey.L3)(e, async () => {
            let { default: e } = await n.e("443921").then(n.bind(n, 304232));
            return (n) => (0, r.jsx)(e, { ...n, summary: t });
          });
      },
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      children: [
        (0, r.jsx)(ev.A, { hovered: c, unread: o, className: eZ.dM }),
        (0, r.jsx)("div", {
          className: eZ.uV,
          children: (0, r.jsxs)("div", {
            className: eZ.Hw,
            children: [
              (0, r.jsx)(_.E, {
                className: eZ.vE,
                color: "interactive-text-default",
                variant: "text-xs/normal",
                children: A,
              }),
              (0, r.jsx)(eD.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
              (0, r.jsx)(eL.ChatIcon, { size: "xxs", color: "currentColor", className: eZ.Kk }),
              (0, r.jsx)(_.E, {
                className: eZ.U9,
                color: "interactive-text-default",
                variant: "text-xs/normal",
                children: t.count,
              }),
              s.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(eD.A, {
                      height: 4,
                      width: 4,
                      "aria-hidden": "true",
                      className: eZ.Om,
                    }),
                    (0, r.jsx)(eW, {
                      partySize: { knownSize: s.length, totalSize: s.length },
                      maxAvatarsShown: 3,
                      members: s,
                      guildId: l,
                    }),
                  ],
                }),
            ],
          }),
        }),
        c &&
          null == h &&
          (0, r.jsxs)("div", {
            className: eZ.p_,
            children: [
              (0, r.jsx)(I.D, {
                onClick: (e) => f(e, eX.P0.GOOD),
                children: (0, r.jsx)(ew.A, { className: eZ.O1, width: 12, height: 12 }),
              }),
              (0, r.jsx)(I.D, {
                onClick: (e) => f(e, eX.P0.BAD),
                children: (0, r.jsx)(eU.A, { className: eZ.O1, width: 12, height: 12 }),
              }),
            ],
          }),
        (0, r.jsx)(_.E, {
          color: "text-strong",
          variant: "text-sm/semibold",
          className: eZ.DD,
          children: t.topic,
        }),
        (0, r.jsx)(_.E, {
          color: "text-default",
          variant: "text-sm/normal",
          className: eZ.VA,
          children: t.summShort,
        }),
      ],
    });
  }
  function eQ(e) {
    let { summaries: t, summariesMembers: n, channel: i, selectTopic: s, setOpen: l } = e,
      o = (0, u.bG)([eP.Ay], () => eP.Ay.getOldestUnreadMessageId(i.id)),
      d = a.useCallback(
        (e) => {
          (s(e), l(!1));
        },
        [s, l],
      );
    return t.length < 1
      ? (0, r.jsx)(e$, {})
      : (0, r.jsx)(r.Fragment, {
          children: t.map((e, t) => {
            let a = n[t] ?? [];
            return (0, r.jsx)(
              eq,
              {
                summary: e,
                channel: i,
                members: a,
                guildId: i.guild_id,
                unread: null != o && eG.default.compare(e.endId, o) > 0,
                onClick: () => d(t),
              },
              t,
            );
          }),
        });
  }
  var eJ = n(885386),
    e0 = n(113494),
    e1 = n(782134),
    e2 = n(775602),
    e3 = n(73153),
    e6 = n(713021);
  function e5(e) {
    let t,
      n,
      { muted: i, volume: s, playing: l, playbackRate: o, ref: d, ...c } = e,
      [u, _] =
        ((t = a.useRef(null)),
        (n = a.useCallback(
          (e) => {
            null != d && ("function" == typeof d ? d(e) : (d.current = e), (t.current = e));
          },
          [d],
        )),
        [t, n]);
    return (
      a.useEffect(() => {
        let e = u.current;
        null == e || (void 0 !== i && (e.muted = i));
      }, [u, i]),
      a.useEffect(() => {
        let e = u.current;
        null == e || (void 0 !== s && (e.volume = s));
      }, [u, s]),
      a.useEffect(() => {
        let e = u.current;
        null == e || (null != o && (e.playbackRate = o));
      }, [u, o]),
      a.useEffect(() => {
        let e = u.current;
        null == e || (void 0 !== l && (l ? e.play() : e.pause()));
      }, [u, l]),
      (0, r.jsx)("audio", { ref: _, ...c })
    );
  }
  var e4 = n(20504),
    e7 = n(625494),
    e8 = n(927813),
    e9 = n(824744);
  n(508300);
  var te = n(661531),
    tt = n(602853),
    tn = n(765671);
  function ti(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
  }
  var tr = n(998304),
    ta = n(284009),
    ts = n.n(ta),
    tl = n(722872);
  class to {
    value;
    animationDetails;
    isReset;
    constructor(e) {
      ((this.value = e), (this.animationDetails = null), (this.isReset = !1));
    }
    getCurrentValue() {
      if (null == this.animationDetails) return this.value;
      let e = performance.now() - this.animationDetails.animationStart,
        t = this.value < this.animationDetails.lastValue ? 150 : 500;
      return e > t
        ? ((this.animationDetails = null), this.value)
        : this.value < this.animationDetails.lastValue
          ? tl.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
          : tl.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
    }
    animateTo(e) {
      ((this.isReset = !1),
        this.value !== e &&
          ((this.animationDetails = { lastValue: this.value, animationStart: performance.now() }),
          (this.value = e)));
    }
    isAnimating() {
      return null != this.animationDetails;
    }
    reset() {
      (this.animateTo(0), (this.isReset = !0));
    }
  }
  let td = [0.75, 1, 1.5, 2];
  var tc = n(587159);
  let tu = [0, 0, 0, 0, 0];
  function t_(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
  }
  function tE(e) {
    var t, n, i, r;
    let {
        context: a,
        devicePixelRatio: s,
        canvasHeight: l,
        segmentValue: o,
        segmentIndex: d,
        constrainMin: c,
      } = e,
      u = c ? 22 * o + 2 : 24 * o;
    0 !== u &&
      ((t = 6 * d * s),
      (n = (l / 2 - u / 2) * s),
      (i = u * s),
      (r = +s),
      a.moveTo(t, n + r),
      a.lineTo(t, n + i - r),
      a.arc(t + r, n + i - r, r, Math.PI, 0, !0),
      a.lineTo(t + 2 * r, n + r),
      a.arc(t + r, n + r, r, 0, Math.PI, !0),
      a.closePath());
  }
  function tA(e, t, n) {
    let [i, r] = a.useState(e),
      [s, l] = a.useState(e),
      o = a.useRef(s);
    return (
      a.useLayoutEffect(() => {
        o.current = s;
      }),
      a.useLayoutEffect(() => {
        (r(o.current), l(e));
      }, [e, t, n]),
      [i, s]
    );
  }
  function th(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / 200, 1);
    return 1 === r ? [t, !1] : [(0, tr.De)(e, t, r), !0];
  }
  function tf(e) {
    let t,
      n,
      {
        className: i,
        waveform: s,
        currentTime: o,
        duration: d,
        played: c,
        playing: u,
        onDrag: _,
        onDragStart: E,
        onDragEnd: A,
      } = e,
      { ref: h, width: f } = (0, tn.Ay)(),
      I = a.useMemo(
        () =>
          6 *
            Math.floor(
              ((d <= 0.5 ? 40 : d >= 45 ? 294 : ((Math.min(d, 45) - 0.5) / 44.5) * 254 + 40) + 4) /
                6,
            ) -
          4,
        [d],
      ),
      p = a.useRef(void 0),
      T =
        ((t = a.useMemo(
          () =>
            (function (e) {
              let t;
              if (null == e) return;
              try {
                t = window.atob(e);
              } catch (e) {
                return;
              }
              let n = [];
              for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
              return n;
            })(s),
          [s],
        )),
        (n = a.useMemo(
          () =>
            (function (e) {
              if (null != e) return Math.floor((e + 4) / 6);
            })(f),
          [f],
        )),
        a.useMemo(
          () =>
            (function (e, t) {
              if (null != e && null != t) {
                if (e.length < t) {
                  let n = t - e.length;
                  return e.concat(Array(n).fill(0));
                }
                return (function (e, t) {
                  if ((ts()(e.length >= t, "Waveform smaller than samples"), e.length === t))
                    return e;
                  let n = e.length / t,
                    i = [],
                    r = 0;
                  for (; i.length < t;) {
                    let t = Math.round((i.length + 1) * n),
                      a = 0,
                      s = 0;
                    for (let n = r; n < t && n < e.length; n++) ((a += e[n]), s++);
                    ((i[i.length] = a / s), (r = t));
                  }
                  return i;
                })(e, t);
              }
            })(t ?? [], n) ?? tu,
          [t, n],
        )),
      m = a.useRef(c),
      g = a.useRef(u),
      S = a.useRef(null),
      N = window.devicePixelRatio,
      {
        lastBackgroundFillColor: C,
        backgroundFillColor: O,
        lastActiveFillColor: R,
        activeFillColor: L,
        lastInactiveFillColor: y,
        inactiveFillColor: D,
      } = (function (e, t) {
        let n = (0, tt.r)(te.A.colors.BACKGROUND_MOD_MUTED).hex(),
          i = (0, tt.r)(te.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
          r = (0, tt.r)(te.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
          a = (0, tt.r)(te.A.unsafe_rawColors.BRAND_430).hex(),
          s = (0, tt.r)(te.A.unsafe_rawColors.WHITE).hex(),
          l = t ? a : n,
          [o, d] = tA(l, t, e),
          [c, u] = tA(t ? s : e ? r : i, t, e),
          [_, E] = tA(e ? l : i, t, e);
        return {
          lastBackgroundFillColor: o,
          backgroundFillColor: d,
          lastActiveFillColor: c,
          activeFillColor: u,
          lastInactiveFillColor: _,
          inactiveFillColor: E,
        };
      })(c, u),
      v = { currentTime: o, duration: d, played: c },
      b = a.useRef(v);
    (a.useEffect(() => {
      b.current = v;
    }),
      a.useEffect(() => {
        let { currentTime: e, duration: t, played: n } = b.current,
          i = t_({ showAll: !n, currentTime: e, duration: t, numSegments: T.length });
        p.current = T.map((e, t) => new to(t < i ? e : 0));
      }, [T]),
      a.useEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = t_({ showAll: !c, currentTime: o, duration: d, numSegments: T.length });
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (n < t) {
            i.animateTo(T[n]);
            continue;
          }
          i.reset();
        }
      }, [T, o, d, c]),
      a.useEffect(() => {
        let e = null;
        return (
          (e = requestAnimationFrame(function t(n) {
            let i = h.current,
              r = i?.getContext("2d"),
              a = p.current;
            if (null == i || null == r || null == a) return;
            let s = !1;
            ((m.current !== c || g.current !== u) &&
              ((m.current = c), (g.current = u), (S.current = n)),
              null != S.current && n > S.current + 200 && (S.current = null));
            let l = i.height / N;
            (r.clearRect(0, 0, i.width, i.height), r.beginPath());
            let [o, d] = th(C, O, n, S.current);
            ((s = s || d), (r.fillStyle = o));
            for (let e = 0; e < T.length; e++)
              tE({
                context: r,
                devicePixelRatio: N,
                canvasHeight: l,
                segmentValue: T[e],
                segmentIndex: e,
                constrainMin: !0,
              });
            r.fill();
            let [_, E] = th(y, D, n, S.current);
            s = s || E;
            let [A, f] = th(R, L, n, S.current);
            s = s || f;
            for (let e = 0; e < a.length; e++) {
              let t = a[e],
                n = Math.max(t.getCurrentValue(), T[e] - 0.1);
              (r.beginPath(),
                (r.fillStyle = t.isReset ? _ : A),
                tE({
                  context: r,
                  devicePixelRatio: N,
                  canvasHeight: l,
                  segmentValue: n,
                  segmentIndex: e,
                  constrainMin: !t.isReset,
                }),
                (s = s || t.isAnimating()),
                r.fill());
            }
            s && (e = requestAnimationFrame(t));
          })),
          () => {
            null != e && cancelAnimationFrame(e);
          }
        );
      }, [h, N, T, f, o, d, c, u, C, O, R, L, y, D]));
    let [, M] = (function (e) {
      let { ref: t, onDrag: n, onDragStart: i, onDragEnd: r } = e,
        [s, l] = a.useState(!1);
      return (
        a.useEffect(() => {
          if (s)
            return (
              window.addEventListener("mouseup", e),
              window.addEventListener("mousemove", i),
              () => {
                (window.removeEventListener("mouseup", e),
                  window.removeEventListener("mousemove", i));
              }
            );
          function e() {
            (r?.(), l(!1));
          }
          function i(e) {
            let i = t.current;
            null != i && n?.(ti(i, e));
          }
        }, [t, s, r, n]),
        [
          s,
          a.useCallback(
            (e) => {
              e.preventDefault();
              let r = t.current;
              null != r && (l(!0), i?.(), n?.(ti(r, e)));
            },
            [t, i, n],
          ),
        ]
      );
    })({ ref: h, onDrag: _, onDragStart: E, onDragEnd: A });
    return (0, r.jsx)("canvas", {
      onMouseDown: M,
      className: l()(tc.J, i),
      style: { width: I },
      ref: h,
      height: 32 * window.devicePixelRatio,
      width: (f ?? 0) * window.devicePixelRatio,
    });
  }
  var tI = n(672245);
  let tp = a.lazy(() => n.e("594436").then(n.bind(n, 660207)));
  function tT(e) {
    let { played: t, duration: n, currentTime: i } = e,
      a = null == n ? "--:--" : t ? (0, V.rB)(Math.ceil(n - i)) : (0, V.rB)(Math.ceil(n));
    return (0, r.jsx)(_.E, {
      variant: "text-sm/normal",
      className: tI.p0,
      tabularNumbers: !0,
      children: a,
    });
  }
  let tm = a.memo(function (e) {
    let t,
      {
        src: n,
        volume: i = 1,
        onVolumeChange: s,
        onMute: o,
        waveform: d,
        durationSecs: c,
        onVolumeShow: E,
        onVolumeHide: A,
        onPlay: h,
        onPause: f,
        onError: p,
        playbackCacheKey: T,
      } = e,
      m = a.useRef(null),
      g = a.useMemo(() => (null != T ? e6.Ay.getPlaybackPosition(T) : 0), [T]),
      S = (0, u.bG)([e6.Ay], () => e6.Ay.getPlaybackRate(e6.k0.VOICE_MESSAGE)),
      [N, C] = a.useState(g > 0),
      [O, R] = a.useState(g),
      [L, y] = a.useState(c),
      [D, v] = a.useState(!1),
      [b, M] = a.useState(!1),
      [P, U] = a.useState(!1),
      [w, G] = a.useState(!1),
      [x, k] = a.useState("none"),
      [F, B] = a.useState(() => ("function" == typeof i ? i() : i)),
      V = a.useRef(void 0),
      H = a.useCallback(() => {
        (M((e) => !e), G(!0));
      }, []),
      j = a.useCallback(() => {
        k("metadata");
      }, []),
      W = a.useCallback((e) => {
        let t = e.currentTarget.duration;
        isNaN(t) || y(t);
      }, []),
      Y = a.useCallback(
        (e) => {
          null != c &&
            null != T &&
            e3.h.dispatch({
              type: "MEDIA_PLAYBACK_POSITION_UPDATE",
              cacheKey: T,
              position: e,
              duration: c,
            });
        },
        [T, c],
      ),
      K = a.useCallback(() => {
        (M(!1),
          null == V.current &&
            (V.current = setTimeout(() => {
              (C(!1), G(!1), (V.current = void 0));
            }, 500)));
      }, []),
      $ = a.useCallback(() => {
        P || (Y(0), K());
      }, [K, P, Y]),
      z = a.useCallback((e) => {
        let t = m.current;
        null != t && (R(e), (t.currentTime = e), C(!0));
      }, []),
      X = a.useCallback(() => {
        let e = m.current;
        if (null == e) return;
        let t = e.error;
        p?.(t);
      }, [p]),
      Z = a.useCallback(
        (e) => {
          let t = (0, e9.w)(e, 1);
          (v(0 === t), B(t), s?.(t));
        },
        [s],
      ),
      q = a.useCallback(() => {
        (v(!D), o?.(!D));
      }, [D, o]),
      Q = a.useCallback(() => {
        U(!0);
      }, []),
      J = a.useCallback(() => {
        (U(!1), O === L && K(), Y(O));
      }, [O, L, K, Y]),
      ee = a.useCallback(
        (e) => {
          let t = m.current;
          null == L || null == t || (z(e * L), clearTimeout(V.current), (V.current = void 0));
        },
        [L, z],
      );
    a.useEffect(() => {
      !N && b && C(!0);
    }, [b, N]);
    let et = a.useRef(null),
      en = { played: w, currentTime: O, onPause: f, onPlay: h },
      ei = a.useRef(en);
    (a.useEffect(() => {
      ei.current = en;
    }),
      a.useEffect(() => {
        g > 0 && z(g);
      }, [g, z]),
      a.useEffect(() => {
        let e;
        return (
          b &&
            !P &&
            (e = setInterval(() => {
              Y(m.current?.currentTime ?? 0);
            }, e8.A.Millis.SECOND)),
          () => {
            null != e && clearInterval(e);
          }
        );
      }, [b, P, Y]),
      a.useEffect(() => {
        let { played: e, currentTime: t, onPause: n, onPlay: i } = ei.current;
        if (e || b)
          if (b)
            ((et.current = performance.now()),
              i?.(!1, t, (m.current?.duration ?? 0) * e8.A.Millis.SECOND));
          else {
            let e = performance.now(),
              i = et.current;
            (n?.(t, null != i ? (e - i) / 1e3 : 0), Y(t), (et.current = null));
          }
      }, [b, n, L, Y]),
      a.useEffect(() => {
        let e;
        return (
          !(function t() {
            let n = m.current;
            null == n || (R(n.currentTime), b && (e = requestAnimationFrame(t)));
          })(),
          () => {
            null != e && cancelAnimationFrame(e);
          }
        );
      }, [m, b, R]),
      a.useEffect(() => {
        if (b)
          return (
            e7._.dispatch(ez.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
            e7._.subscribe(ez.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
            () => {
              e7._.unsubscribe(ez.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
            }
          );
        function e(e) {
          let { src: t } = e;
          n !== t && M(!1);
        }
      }, [n, b, M]));
    let er = b ? e0.PauseIcon : e1.PlayIcon,
      ea = b ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
      es = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: S }),
      el = `${S.toString().replace(/^0/, "")}X`;
    t =
      "Safari" === platform.name
        ? (0, r.jsx)(a.Suspense, {
            children: (0, r.jsx)(tp, {
              ref: m,
              className: tI.Zn,
              src: n,
              preload: x,
              playing: b && !P,
              onEnded: $,
              onLoadedMetadata: W,
              onError: X,
              muted: D,
              volume: F,
              playbackRate: S,
            }),
          })
        : (0, r.jsx)(e5, {
            ref: m,
            className: tI.Zn,
            controls: !1,
            preload: x,
            onEnded: $,
            onLoadedMetadata: W,
            onError: X,
            muted: D,
            volume: F,
            playbackRate: S,
            playing: b && !P,
            children: (0, r.jsx)("source", { src: n }),
          });
    let eo = (0, u.bG)([e2.Ay], () => e2.Ay.useReducedMotion);
    return (0, r.jsxs)("div", {
      className: l()(tI.kL, { [tI.he]: b }),
      onMouseEnter: j,
      role: "region",
      "aria-label": ec.intl.string(ec.t.c8U6xd),
      children: [
        (0, r.jsx)("div", {
          className: tI.Kl,
          children: (0, r.jsx)("div", { className: l()(tI.fq, { [tI.VN]: eo }) }),
        }),
        (0, r.jsx)(I.D, {
          className: tI.k0,
          onClick: H,
          "aria-label": ea,
          children: (0, r.jsx)(er, { className: tI.uZ, color: "currentColor", size: "sm" }),
        }),
        (0, r.jsx)(tf, {
          className: tI.ou,
          waveform: d,
          currentTime: O,
          duration: L ?? 1,
          playing: b,
          played: N,
          onDrag: ee,
          onDragStart: Q,
          onDragEnd: J,
        }),
        (0, r.jsx)(tT, { played: N, currentTime: O, duration: L }),
        (0, r.jsx)(I.D, {
          className: tI.LJ,
          onClick: () => {
            var e, t;
            let n;
            return (
              (n = (td.indexOf(S) + 1) % td.length),
              void ((e = td[n]),
              (t = e6.k0.VOICE_MESSAGE),
              e3.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
            );
          },
          "aria-label": es,
          children: (0, r.jsx)(_.E, {
            variant: "text-xs/semibold",
            className: tI.Sn,
            children: el,
          }),
        }),
        (0, r.jsx)(e4.A, {
          className: tI.bk,
          iconClassName: tI._j,
          iconColor: "currentColor",
          sliderWrapperClassName: tI.MQ,
          muted: D,
          value: (0, e9.M)(F, 1),
          minValue: 0,
          maxValue: 1,
          currentWindow: window,
          onValueChange: Z,
          onToggleMute: q,
          onVolumeShow: E,
          onVolumeHide: A,
        }),
        t,
      ],
    });
  });
  var tg = n(287809),
    tS = n(147925),
    tN = n(174459),
    tC = n(587481),
    tO = n(838541),
    tR = n(521732),
    tL = n(650583),
    ty = n(959760);
  function tD(e) {
    return (t) => {
      (e?.(t), (0, tC.ls)(t));
    };
  }
  function tv(e) {
    return (t) => {
      (e?.(t), (0, tC.y5)(t));
    };
  }
  function tb(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, r.jsxs)("div", {
      role: "dialog",
      "aria-label": ec.intl.string(ec.t.fSiQ3A),
      className: ty.obt,
      tabIndex: -1,
      onKeyDown: (e) => {
        e.key === tL.N$.Escape && setTimeout(() => n.current?.focus(), 0);
      },
      children: [
        (0, r.jsx)(_.E, {
          variant: "text-xs/bold",
          color: "none",
          tag: "span",
          className: ty.k_Z,
          children: ec.intl.string(ec.t.fSiQ3A),
        }),
        (0, r.jsx)(_.E, {
          variant: "text-md/normal",
          color: "none",
          tag: "span",
          className: ty.a7V,
          children: t,
        }),
      ],
    });
  }
  function tM(e) {
    let {
        alt: t,
        controlsVisible: n = !0,
        disableAltTextDisplay: i = !1,
        hiddenSpoilers: s = !1,
        reducedSizeAltTextButton: o = !1,
      } = e,
      [d, c] = a.useState(!1),
      u = a.useRef(null);
    return (n || d) && !i && eJ._z.getSetting() && null != t && "" !== t && !0 !== s
      ? (0, r.jsx)("div", {
          className: ty.NOQ,
          children: (0, r.jsx)(E.Y, {
            targetElementRef: u,
            animation: E.Y.Animation.FADE,
            renderPopout: () => (0, r.jsx)(tb, { altText: t, altButtonRef: u }),
            children: (e) =>
              (0, r.jsx)(A.vN, {
                offset: 4,
                children: (0, r.jsx)("button", {
                  ...e,
                  type: "button",
                  ref: u,
                  "aria-label": ec.intl.string(ec.t.fSiQ3A),
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  className: l()(ty.DV5, { [ty.yZ5]: !0, [ty.I54]: o }),
                  children: ec.intl.string(ec.t.jCV1Tz),
                }),
              }),
          }),
        })
      : null;
  }
  function tP(e) {
    let {
        onVolumeChange: t,
        onMute: n,
        volume: i,
        autoMute: s,
        alt: l,
        renderAdjacentContent: o,
        renderOverlayContent: d,
        disableAltTextDisplay: c = !1,
        hiddenSpoilers: u,
        mosaicStyleAlt: E,
        mediaLayoutType: A,
        reducedSizeAltTextButton: h,
        ...f
      } = e,
      I = tD(t),
      p = tv(n);
    ((i = null == i ? tC.v1 : i), (s = null == s ? tC.uj : s));
    let [T, m] = a.useState(!0),
      g = A === tO.dG.MOSAIC || !0 === E,
      S = T && !c && eJ._z.getSetting() && null != l && "" !== l && !0 !== u;
    return (0, r.jsxs)(a.Fragment, {
      children: [
        (0, r.jsx)(j.A, {
          ...f,
          alt: l,
          autoMute: s,
          mediaLayoutType: A,
          onControlsHide: () => m(!1),
          onControlsShow: () => m(!0),
          onMute: p,
          onVolumeChange: I,
          renderLinkComponent: tk,
          renderOverlayContent: d,
          volume: i,
        }),
        null != o && o(),
        g &&
          (0, r.jsx)(tM, {
            alt: l,
            controlsVisible: T,
            disableAltTextDisplay: c,
            hiddenSpoilers: u,
            reducedSizeAltTextButton: h,
          }),
        !g &&
          S &&
          (0, r.jsx)(_.E, {
            variant: "text-xs/medium",
            color: "text-muted",
            tag: "span",
            className: ty.R5R,
            children: l,
          }),
      ],
    });
  }
  function tU(e) {
    return (0, r.jsx)(tP, { ...e });
  }
  function tw(e) {
    let {
        onVolumeChange: t,
        volume: n,
        onMute: i,
        onVolumeShow: s,
        onVolumeHide: l,
        renderAdjacentContent: o,
        ...d
      } = e,
      c = tD(t),
      u = tv(i);
    return (
      (n = null == n ? tC.v1 : n),
      (0, r.jsxs)(a.Fragment, {
        children: [
          (0, r.jsx)(H, {
            ...d,
            onVolumeChange: c,
            onMute: u,
            onVolumeShow: s,
            onVolumeHide: l,
            volume: n,
            autoMute: function () {
              return !1;
            },
            renderLinkComponent: tk,
          }),
          null != o && o(),
        ],
      })
    );
  }
  function tG(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...a } = e,
      s = tD(t),
      l = tv(i);
    return (
      (n = null == n ? tC.v1 : n),
      (0, r.jsx)(tm, { ...a, onVolumeChange: s, onMute: l, volume: n })
    );
  }
  function tx(e) {
    let {
        alt: t,
        hiddenSpoilers: n,
        renderAdjacentContent: i,
        containerClassName: s,
        imageContainerClassName: o,
        disableAltTextDisplay: d = !1,
        reducedSizeAltTextButton: c = !1,
        mediaLayoutType: u,
        imageContainerStyle: h,
        mosaicStyleAlt: f,
      } = e,
      I = u === tO.dG.MOSAIC || !0 === f,
      p = !d && eJ._z.getSetting() && null != t && "" !== t && !0 !== n,
      T = a.createRef();
    return (0, r.jsxs)("div", {
      className: l()(ty.foG, s),
      children: [
        (0, r.jsxs)("div", {
          className: l()(ty.ZSk, o),
          style: h,
          children: [(0, r.jsx)(M, { ...e }), null != i && i()],
        }),
        I &&
          p &&
          (0, r.jsx)("div", {
            className: ty.Y1Z,
            children: (0, r.jsx)(E.Y, {
              targetElementRef: T,
              animation: E.Y.Animation.FADE,
              renderPopout: () => (0, r.jsx)(tb, { altText: t, altButtonRef: T }),
              children: (e) =>
                (0, r.jsx)(A.vN, {
                  offset: 4,
                  children: (0, r.jsx)("button", {
                    ...e,
                    type: "button",
                    ref: T,
                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                    className: l()(ty.DV5, { [ty.I54]: c }),
                    children: ec.intl.string(ec.t.jCV1Tz),
                  }),
                }),
            }),
          }),
        !I &&
          p &&
          (0, r.jsx)(_.E, {
            variant: "text-xs/medium",
            color: "text-muted",
            tag: "span",
            className: ty.R5R,
            children: t,
          }),
      ],
    });
  }
  function tk(e) {
    return (0, r.jsx)(P.A, { ...e });
  }
  function tF(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(a.Fragment, { children: [(0, r.jsx)(eC, { ...n }), null != t && t()] });
  }
  function tB(e) {
    return (0, r.jsx)(G.A, { ...e });
  }
  var tV = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
  let tH = (e) => {
    let { type: t = 0, onClick: n, className: i } = e;
    function a(e) {
      (e.stopPropagation(), n?.());
    }
    return (0, r.jsx)(x.Y.Consumer, {
      children: (e) =>
        e.disableInteractions
          ? null
          : (0, r.jsxs)("div", {
              onClick: a,
              className: l()(ty.Sg2, i),
              children: [
                (0, r.jsx)("div", {
                  className: ty.$IB,
                  children: (function (e) {
                    switch (e) {
                      case 0:
                        return ec.intl.string(ec.t["4EvBbw"]);
                      case 1:
                        return ec.intl.string(ec.t["1J6Xq7"]);
                      default:
                        return (0, eV.xb)(e);
                    }
                  })(t),
                }),
                null != n
                  ? (0, r.jsx)(A.vN, {
                      offset: -2,
                      children: (0, r.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: (function (e) {
                          switch (e) {
                            case 0:
                              return ec.intl.string(ec.t.gpoQsB);
                            case 1:
                              return ec.intl.string(ec.t.k3RM8z);
                            default:
                              return (0, eV.xb)(e);
                          }
                        })(t),
                        onClick: a,
                      }),
                    })
                  : (0, r.jsx)(f.y, {
                      type: f.y.Type.PULSING_ELLIPSIS,
                      className: ty.u1E,
                      itemClassName: ty.$N2,
                    }),
              ],
            }),
    });
  };
  function tj(e) {
    let { onClick: t, loading: n, className: i } = e;
    return (0, r.jsx)(x.Y.Consumer, {
      children: (e) =>
        e.disableInteractions
          ? null
          : (0, r.jsxs)(I.D, {
              className: l()(ty._5m, i),
              onClick: t,
              focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
              children: [
                (0, r.jsx)("div", { className: ty.$IB, children: ec.intl.string(ec.t["1zUvlw"]) }),
                n
                  ? (0, r.jsx)(f.y, {
                      type: f.y.Type.PULSING_ELLIPSIS,
                      className: ty.u1E,
                      itemClassName: ty.$N2,
                    })
                  : (0, r.jsx)("div", {
                      className: l()(ty.hQH, ty.d3o),
                      children: ec.intl.string(ec.t.TdQXA8),
                    }),
              ],
            }),
    });
  }
  function tW(e) {
    let { content: t, channelId: n } = e,
      [i] = a.useState(() => (0, k.Ld)("NewMessagesBarJumpToNewMessages_")),
      s = a.useCallback(() => {
        let e = eP.Ay.ackMessageId(n);
        null != e
          ? N.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
          : N.A.jumpToMessage({
              channelId: n,
              messageId: eG.default.castChannelIdAsMessageId(n),
              offset: 1,
              context: "Mark As Read",
            });
      }, [n]),
      o = a.useCallback(() => {
        (0, C.ack)(n, {
          section: ez.JJy.NEW_MESSAGES_BANNER,
          object: ez.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: ez.AnalyticsObjectTypes.ACK_MANUAL,
        });
      }, [n]),
      { disableInteractions: d } = a.useContext(x.Y);
    return d
      ? null
      : (0, r.jsxs)("div", {
          className: l()(ty.ebV, { [ty.y71]: d }),
          children: [
            (0, r.jsx)(A.vN, {
              offset: 4,
              children: (0, r.jsx)("button", {
                type: "button",
                className: ty.$IB,
                onClick: s,
                "aria-label": ec.intl.string(ec.t.z0Mkp3),
                "aria-describedby": i,
                children: (0, r.jsx)("span", { id: i, className: ty.Lnh, children: t }),
              }),
            }),
            (0, r.jsx)("div", {
              className: ty._ov,
              children: (0, r.jsx)(A.vN, {
                offset: 4,
                children: (0, r.jsxs)("button", {
                  type: "button",
                  onClick: o,
                  className: ty.hQH,
                  children: [
                    (0, r.jsx)("span", {
                      className: ty.vE$,
                      children: ec.intl.string(ec.t.e6RscS),
                    }),
                    (0, r.jsx)(p.M, { size: "md", color: "currentColor", className: ty.t3N }),
                  ],
                }),
              }),
            }),
          ],
        });
  }
  function tY(e) {
    let { channel: t, content: n, scrollManager: i } = e,
      { disableInteractions: s } = a.useContext(x.Y),
      [o, E] = a.useState(null),
      A = a.useRef(null),
      [h, f] = a.useState(null),
      O = a.useRef(null),
      R = (0, u.yK)([eR.A], () => eR.A.summaries(t.id) ?? [], [t]),
      L = (0, w.Ay)(R);
    a.useEffect(() => {
      d().isEqual(L, R) ||
        tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
          num_summaries: R.length,
          message_counts: R.map((e) => e.count),
          start_message_ids: R.map((e) => e.startId),
          end_message_ids: R.map((e) => e.endId),
          num_participants: R.map((e) => e.people.length),
          guild_id: t.guild_id,
          channel_id: t.id,
          channel_type: t.type,
        });
    }, [R, L, t.guild_id, t.id, t.type]);
    let y = (0, u.bG)(
        [tg.default],
        () =>
          R?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(eV.Vq)) ?? [],
        [R],
        tK,
      ),
      D = (0, u.bG)([eR.A], () => eR.A.visibleSummaryIndex()) ?? -1,
      v = R?.[D]?.topic;
    null == v && null == o && R?.length >= 1 && (v = R[0]?.topic);
    let b = a.useMemo(
        () =>
          d().debounce((e) => {
            E(e?.id ?? null);
          }, 64),
        [E],
      ),
      M = a.useMemo(
        () =>
          d().throttle(
            () => {
              (0, eO.C6)(null);
            },
            1200,
            { trailing: !1 },
          ),
        [],
      ),
      P = a.useCallback(
        (e) => {
          (M(), b(e));
        },
        [b, M],
      ),
      [G, k] = a.useState(!1),
      B = a.useCallback(() => {
        (tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
          topics_dropdown_open: !G,
          num_summaries: R.length,
          message_counts: R.map((e) => e.count),
          start_message_ids: R.map((e) => e.startId),
          end_message_ids: R.map((e) => e.endId),
          num_participants: R.map((e) => e.people.length),
          guild_id: t.guild_id,
          channel_id: t.id,
          channel_type: t.type,
        }),
          k(!G));
      }, [G, R, k, t]),
      V = a.useCallback(
        function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.eh.PILL_DROPDOWN,
            r = R[e];
          null != r &&
            ((0, eO.sK)(t.id, r.id),
            (0, eO.C6)(t.id, r.id),
            i.removeAutomaticAnchorCallback(P),
            i.addScrollCompleteCallback(function e() {
              (i.removeScrollCompleteCallback(e),
                setTimeout(() => {
                  i.addAutomaticAnchorCallback(P, !1);
                }, 100));
            }),
            tN.default.track(ez.HAw.SUMMARIES_TOPIC_CLICKED, {
              source: n,
              message_id: r.startId,
              guild_id: t.guild_id,
              channel_id: t.id,
              channel_type: t.type,
            }),
            N.A.jumpToMessage({
              channelId: t.id,
              messageId: r.startId,
              flash: !0,
              offset: 0,
              jumpType: U.vx.ANIMATED,
              context: "Summary Jump",
            }));
        },
        [R, t, P, i],
      ),
      H = a.useCallback((e) => {
        k(e);
        let t = O.current?.scrollTop;
        null != t && f(t);
      }, []);
    a.useEffect(() => {
      null != h && G && O.current?.scrollTo({ top: h });
    }, [h, G]);
    let j = a.useCallback(
      (e) => {
        ((0, c.vq)(e.target) && A.current?.contains(e.target)) ||
          (G &&
            tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
              topics_dropdown_open: !1,
              num_summaries: R.length,
              message_counts: R.map((e) => e.count),
              start_message_ids: R.map((e) => e.startId),
              end_message_ids: R.map((e) => e.endId),
              num_participants: R.map((e) => e.people.length),
              guild_id: t.guild_id,
              channel_id: t.id,
              channel_type: t.type,
            }),
          H(!1));
      },
      [G, R, t, H],
    );
    (a.useEffect(
      () => (
        i.addAutomaticAnchorCallback(P),
        () => {
          i.removeAutomaticAnchorCallback(P);
        }
      ),
      [i, P],
    ),
      a.useEffect(() => {
        (0, eO.$T)(t.id);
      }, [t.id]),
      a.useEffect(
        () => (
          document.addEventListener("mousedown", j),
          () => {
            document.removeEventListener("mousedown", j);
          }
        ),
        [j],
      ));
    let W = a.useMemo(
        () =>
          (0, r.jsx)(eQ, {
            channel: t,
            summaries: R,
            summariesMembers: y,
            selectTopic: V,
            setOpen: H,
          }),
        [R, y, V, H, t],
      ),
      Y = a.useCallback(() => {
        let e = eP.Ay.ackMessageId(t.id);
        null != e
          ? N.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
          : N.A.jumpToMessage({
              channelId: t.id,
              messageId: eG.default.castChannelIdAsMessageId(t.id),
              offset: 1,
              context: "Mark As Read",
            });
      }, [t.id]),
      K = a.useCallback(() => {
        (0, C.ack)(t.id, {
          section: ez.JJy.NEW_TOPICS_BAR,
          object: ez.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: ez.AnalyticsObjectTypes.ACK_MANUAL,
        });
      }, [t.id]),
      $ = ec.intl.string(ec.t["38qwgO"]);
    return (
      R.length > 0 && ($ = "" === v || null == v ? ec.intl.string(ec.t.DwnFuG) : v),
      s
        ? null
        : (0, r.jsxs)("div", {
            ref: A,
            className: l()(ty.dw5, ty.jht),
            children: [
              (0, r.jsx)("div", {
                className: ty.qmJ,
                children: (0, r.jsx)(I.D, {
                  className: ty.TQl,
                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                  onClick: B,
                  children: (0, r.jsxs)("div", {
                    className: l()({ [ty.hNz]: !G, [ty.Apq]: G }),
                    children: [
                      (0, r.jsx)(T.K, { size: "xs", color: "currentColor", className: ty.VdQ }),
                      (0, r.jsx)(_.E, {
                        variant: "text-sm/medium",
                        className: l()(ty.$Uj, ty.lc3),
                        children: $,
                      }),
                      (0, r.jsx)(tS.A, {
                        width: 16,
                        height: 16,
                        direction: tS.A.Directions.DOWN,
                        className: ty.HBW,
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(I.D, { onClick: Y, className: ty.ijE, children: n }),
              (0, r.jsxs)(I.D, {
                onClick: K,
                className: l()(ty.hQH, ty.NXP),
                children: [
                  (0, r.jsx)("div", { className: ty.$Uj, children: ec.intl.string(ec.t.e6RscS) }),
                  (0, r.jsx)(p.M, { size: "md", color: "currentColor", className: ty.t3N }),
                ],
              }),
              G &&
                (0, r.jsxs)("div", {
                  className: ty.A1T,
                  children: [
                    (0, r.jsxs)("div", {
                      className: ty.kee,
                      children: [
                        (0, r.jsxs)("div", {
                          className: ty.Ney,
                          children: [
                            (0, r.jsx)(T.K, {
                              size: "custom",
                              color: "currentColor",
                              className: ty.vlb,
                              width: 18,
                              height: 20,
                            }),
                            (0, r.jsx)(m.D, {
                              variant: "heading-md/bold",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ec.intl.string(ec.t.q21fUr),
                            }),
                            (0, r.jsx)(F.A, { className: ty.Zxm }),
                          ],
                        }),
                        (0, r.jsx)(I.D, {
                          "aria-label": ec.intl.string(ec.t.cpT0Cq),
                          onClick: B,
                          className: ty.oX1,
                          children: (0, r.jsx)(g.P, { size: "md", color: "currentColor" }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(S.Ip, { ref: O, className: ty.Pei, fade: !0, children: W }),
                  ],
                }),
            ],
          })
    );
  }
  function tK(e, t) {
    return (
      null != t &&
      e.length === t.length &&
      !e.some((e, n) => {
        var i;
        return null == (i = t[n]) || e.length !== i.length || !!e.some((e, t) => i[t] !== e);
      })
    );
  }
  function t$(e) {
    let { channel: t, scrollManager: n } = e,
      { disableInteractions: i } = a.useContext(x.Y),
      [s, o] = a.useState(null),
      E = a.useRef(null),
      [A, h] = a.useState(null),
      f = a.useRef(null),
      p = (0, u.yK)([eR.A], () => eR.A.summaries(t.id) ?? [], [t]),
      C = (0, w.Ay)(p);
    a.useEffect(() => {
      d().isEqual(C, p) ||
        tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
          num_summaries: p.length,
          message_counts: p.map((e) => e.count),
          start_message_ids: p.map((e) => e.startId),
          end_message_ids: p.map((e) => e.endId),
          num_participants: p.map((e) => e.people.length),
          guild_id: t.guild_id,
          channel_id: t.id,
          channel_type: t.type,
        });
    }, [p, C, t.guild_id, t.id, t.type]);
    let O = (0, u.bG)(
        [tg.default],
        () =>
          p?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(eV.Vq)) ?? [],
        [p],
        tK,
      ),
      R = (0, u.bG)([eR.A], () => eR.A.visibleSummaryIndex()) ?? -1,
      L = p?.[R]?.topic;
    null == L && null == s && p?.length >= 1 && (L = p[0]?.topic);
    let y = a.useMemo(() => d().get(p, R - 1), [R, p]),
      D = a.useMemo(() => d().get(p, R + 1), [R, p]),
      v = a.useMemo(
        () =>
          d().debounce((e) => {
            o(e?.id ?? null);
          }, 64),
        [o],
      ),
      b = a.useMemo(
        () =>
          d().throttle(
            () => {
              (0, eO.C6)(null);
            },
            1200,
            { trailing: !1 },
          ),
        [],
      ),
      M = a.useCallback(
        (e) => {
          (b(), v(e));
        },
        [v, b],
      ),
      [P, G] = a.useState(!1),
      k = a.useCallback(() => {
        (tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
          topics_dropdown_open: !P,
          num_summaries: p.length,
          message_counts: p.map((e) => e.count),
          start_message_ids: p.map((e) => e.startId),
          end_message_ids: p.map((e) => e.endId),
          num_participants: p.map((e) => e.people.length),
          guild_id: t.guild_id,
          channel_id: t.id,
          channel_type: t.type,
        }),
          G(!P));
      }, [P, p, G, t]),
      B = a.useCallback(
        function (e) {
          let i =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.eh.PILL_DROPDOWN,
            r = p[e];
          null != r &&
            ((0, eO.sK)(t.id, r.id),
            (0, eO.C6)(t.id, r.id),
            n.removeAutomaticAnchorCallback(M),
            n.addScrollCompleteCallback(function e() {
              (n.removeScrollCompleteCallback(e),
                setTimeout(() => {
                  n.addAutomaticAnchorCallback(M, !1);
                }, 100));
            }),
            tN.default.track(ez.HAw.SUMMARIES_TOPIC_CLICKED, {
              source: i,
              message_id: r.startId,
              guild_id: t.guild_id,
              channel_id: t.id,
              channel_type: t.type,
            }),
            N.A.jumpToMessage({
              channelId: t.id,
              messageId: r.startId,
              flash: !0,
              offset: 0,
              jumpType: U.vx.ANIMATED,
              context: "Summary Jump",
            }));
        },
        [p, t, M, n],
      ),
      V = a.useCallback(() => {
        B(R - 1, tR.eh.PILL_NEXT_ARROW);
      }, [B, R]),
      H = a.useCallback(() => {
        B(R + 1, tR.eh.PILL_PREVIOUS_ARROW);
      }, [R, B]),
      j = a.useCallback((e) => {
        G(e);
        let t = f.current?.scrollTop;
        null != t && h(t);
      }, []);
    a.useEffect(() => {
      null != A && P && f.current?.scrollTo({ top: A });
    }, [A, P]);
    let W = a.useCallback(
      (e) => {
        ((0, c.vq)(e.target) && E.current?.contains(e.target)) ||
          (P &&
            tN.default.track(ez.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
              topics_dropdown_open: !1,
              num_summaries: p.length,
              message_counts: p.map((e) => e.count),
              start_message_ids: p.map((e) => e.startId),
              end_message_ids: p.map((e) => e.endId),
              num_participants: p.map((e) => e.people.length),
              guild_id: t.guild_id,
              channel_id: t.id,
              channel_type: t.type,
            }),
          j(!1));
      },
      [P, p, t, j],
    );
    (a.useEffect(
      () => (
        n.addAutomaticAnchorCallback(M),
        () => {
          n.removeAutomaticAnchorCallback(M);
        }
      ),
      [n, M],
    ),
      a.useEffect(() => {
        (0, eO.$T)(t.id);
      }, [t.id]),
      a.useEffect(
        () => (
          document.addEventListener("mousedown", W),
          () => {
            document.removeEventListener("mousedown", W);
          }
        ),
        [W],
      ));
    let Y = a.useMemo(
      () =>
        (0, r.jsx)(eQ, {
          channel: t,
          summaries: p,
          summariesMembers: O,
          selectTopic: B,
          setOpen: j,
        }),
      [p, O, B, j, t],
    );
    if (!(0, u.bG)([eR.A], () => eR.A.shouldShowTopicsBar())) return null;
    let K = ec.intl.string(ec.t["38qwgO"]);
    return (
      p.length > 0 && (K = "" === L || null == L ? ec.intl.string(ec.t.DwnFuG) : L),
      i
        ? null
        : (0, r.jsxs)("div", {
            ref: E,
            className: l()(ty.$T$, ty.jht),
            children: [
              (0, r.jsxs)("div", {
                className: ty.sEF,
                children: [
                  (0, r.jsx)(I.D, {
                    className: ty.LPV,
                    "aria-label": ec.intl.string(ec.t.RT3MPz),
                    onClick: k,
                    children: (0, r.jsxs)("div", {
                      className: l()({ [ty.Nv2]: !P, [ty.Ann]: P }),
                      children: [
                        (0, r.jsx)(T.K, { size: "xs", color: "currentColor", className: ty.Npc }),
                        (0, r.jsx)(_.E, {
                          className: ty.r1V,
                          variant: "text-sm/medium",
                          children: K,
                        }),
                        (0, r.jsx)(tS.A, {
                          width: 16,
                          height: 16,
                          direction: tS.A.Directions.DOWN,
                          className: ty._lP,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: ty.Ykg,
                    children: [
                      (0, r.jsx)(I.D, {
                        "aria-label": ec.intl.string(ec.t["4huCnC"]),
                        onClick: H,
                        className: l()(ty.ZMY, ty.vzA, { [ty.jfO]: null == D }),
                        children: (0, r.jsx)(tS.A, {
                          width: 16,
                          height: 16,
                          direction: tS.A.Directions.UP,
                        }),
                      }),
                      (0, r.jsx)(I.D, {
                        "aria-label": ec.intl.string(ec.t["58KOoF"]),
                        onClick: V,
                        className: l()(ty.ZMY, ty.mtW, { [ty.jfO]: null == y }),
                        children: (0, r.jsx)(tS.A, {
                          width: 16,
                          height: 16,
                          direction: tS.A.Directions.DOWN,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              P &&
                (0, r.jsxs)("div", {
                  className: ty.A1T,
                  children: [
                    (0, r.jsxs)("div", {
                      className: ty.kee,
                      children: [
                        (0, r.jsxs)("div", {
                          className: ty.Ney,
                          children: [
                            (0, r.jsx)(T.K, {
                              size: "custom",
                              color: "currentColor",
                              className: ty.vlb,
                              width: 18,
                              height: 20,
                            }),
                            (0, r.jsx)(m.D, {
                              variant: "heading-md/bold",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ec.intl.string(ec.t.q21fUr),
                            }),
                            (0, r.jsx)(F.A, { className: ty.Zxm }),
                          ],
                        }),
                        (0, r.jsx)(I.D, {
                          "aria-label": ec.intl.string(ec.t.cpT0Cq),
                          onClick: k,
                          className: ty.oX1,
                          children: (0, r.jsx)(g.P, { size: "md", color: "currentColor" }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(S.Ip, { ref: f, className: ty.Pei, fade: !0, children: Y }),
                  ],
                }),
            ],
          })
    );
  }
  function tz(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
      className: ty.YLv,
      children: [
        (0, r.jsx)(_.E, {
          color: "none",
          variant: "text-sm/semibold",
          lineClamp: 1,
          className: ty.LdH,
          children: e,
        }),
        t &&
          (0, r.jsx)(_.E, {
            className: ty.$oi,
            color: "text-muted",
            variant: "text-sm/normal",
            children: ec.intl.string(ec.t["515vjG"]),
          }),
      ],
    });
  }
}
