/* Recovered shipped factory. Module 53774.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3743584..3755393
 * Raw property SHA-256: c3c34cb521af3b4d787c350fc801fe15221b4ebbfed8949d0f459b8c305804e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => D });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(404144),
    o = n.n(l),
    d = n(939249),
    c = n(481901),
    u = n(607470),
    _ = n(494012),
    E = n(61491),
    A = n(97808),
    h = n(778712),
    f = n(339350),
    I = n(834730);
  function p(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
  }
  function T(e, t, n) {
    return (
      !p(t, n) ||
      (null != e &&
        !(e.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) &&
        !e.seeking &&
        0.35 >= Math.abs(e.currentTime - (n - t.startSec)))
    );
  }
  function m(e, t) {
    if (t < e.startSec) return e.startSec - t;
    let n = e.startSec + e.durationSec;
    return t >= n ? n - t : 0;
  }
  var g = n(704796),
    S = n(660183),
    N = n(243189);
  let C = r.memo(function (e) {
    let t,
      {
        source: n,
        masterSec: a,
        isPlaying: l,
        playbackRate: o,
        isGridView: d,
        onMediaElement: c,
        children: T,
      } = e,
      C = r.useRef(null),
      [O, R] = r.useState(!1),
      L = p(n, a),
      y = a - n.startSec,
      D = a < n.startSec,
      v = Math.ceil(m(n, a)),
      b = (0, E.rB)(v),
      M = n.owner?.name ?? n.label ?? S.intl.string(g.default["6XuC8e"]),
      { ref: P, width: U } = (0, _.Ay)();
    (r.useEffect(() => {
      let e = C.current;
      if (null != e) {
        if (!L) return void e.pause();
        if (Math.abs(e.currentTime - y) > 0.35)
          try {
            e.currentTime = y;
          } catch {}
        ((e.playbackRate = o), l ? e.play().catch(() => {}) : e.pause());
      }
    }, [L, y, l, o, O]),
      r.useEffect(() => (c?.(n.id, C.current), () => c?.(n.id, null)), [c, n.id]));
    let w = d && !L && 0 !== v;
    return (
      d && L
        ? (t = S.intl.formatToPlainString(g.default.zc1itm, { name: M }))
        : d &&
          (t = S.intl.formatToPlainString(D ? g.default.dUPcpR : g.default.q8TlkE, {
            name: M,
            time: b,
          })),
      (0, i.jsxs)("div", {
        className: N.Vs,
        role: d ? "group" : void 0,
        "aria-label": t,
        "data-testid": "discord-web-multi-video-player-grid-tile",
        children: [
          (0, i.jsxs)("div", {
            ref: P,
            className: s()(N.iH, { [N.om]: d }),
            children: [
              T ??
                (0, i.jsx)(u.A, {
                  ref: C,
                  className: s()(N.cr, { [N.qb]: w }),
                  poster: n.poster,
                  preload: "auto",
                  playsInline: !0,
                  muted: !0,
                  crossOrigin: "anonymous",
                  disablePictureInPicture: !0,
                  src: n.url,
                  onLoadedMetadata: function () {
                    R(!0);
                  },
                }),
              d &&
                null != n.owner &&
                (0, i.jsx)("div", {
                  className: N.cL,
                  children: (0, i.jsx)(A.eu, {
                    src: n.owner.avatarUrl,
                    size: (U ?? 0) > 300 ? h._3.SIZE_32 : h._3.SIZE_20,
                    "aria-hidden": !0,
                  }),
                }),
            ],
          }),
          w &&
            (0, i.jsxs)("div", {
              className: N.rm,
              "aria-hidden": !0,
              children: [
                (0, i.jsx)(f.Q, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(I.E, { variant: "text-xs/medium", color: "none", children: b }),
              ],
            }),
        ],
      })
    );
  });
  var O = n(683063),
    R = n(599507);
  let L = r.memo(function (e) {
    let {
        source: t,
        label: n,
        isActive: r,
        isOriginal: a,
        currentMasterTimeSec: l,
        onSelect: o,
      } = e,
      c = t.owner?.name ?? n ?? S.intl.string(g.default["6XuC8e"]);
    if (!p(t, l) && !r && !a) {
      let e = (0, E.rB)(m(t, l));
      return (0, i.jsx)(O.u, {
        asset: (0, i.jsx)(f.Q, { size: "xs" }),
        assetSize: 16,
        body: e,
        position: "left",
        ariaHidden: !0,
        children: (0, i.jsx)("div", {
          className: R.RG,
          "aria-label": S.intl.formatToPlainString(g.default.JFaxs2, { name: c, time: e }),
          "data-testid": "discord-web-multi-video-player-pov-out-of-range",
          children: (0, i.jsx)(A.eu, {
            src: t.owner?.avatarUrl,
            size: h._3.SIZE_32,
            "aria-hidden": !0,
          }),
        }),
      });
    }
    return (0, i.jsxs)(d.D, {
      className: s()(R.uF, { [R._]: r }),
      "aria-label": r
        ? S.intl.formatToPlainString(g.default["RSMzC/"], { name: c })
        : S.intl.formatToPlainString(g.default["4AH1Vb"], { name: c }),
      "aria-current": r,
      onClick: function (e) {
        (e.stopPropagation(), o(t));
      },
      "data-testid": "discord-web-multi-video-player-pov",
      children: [
        (0, i.jsx)("div", {
          className: s()(R.U8, { [R.ED]: r }),
          children:
            null != t.poster &&
            (0, i.jsx)("img", { className: R.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
        }),
        null != t.owner &&
          (0, i.jsx)("div", {
            className: R.UH,
            children: (0, i.jsx)(A.eu, {
              src: t.owner.avatarUrl,
              size: h._3.SIZE_16,
              "aria-hidden": !0,
            }),
          }),
      ],
    });
  });
  var y = n(340710);
  function D(e) {
    let {
        ref: t,
        src: n,
        poster: a,
        className: l,
        onSourceError: _,
        isScrubbing: E,
        onTimeUpdate: A,
        onEnded: h,
        onLoadedMetadata: f,
        onError: I,
        onPlay: m,
        onPause: N,
        children: O,
        original: R,
        subSources: D,
        isGridView: v,
        setIsGridView: b,
        suppressSourceSelection: M = !1,
        ...P
      } = e,
      U = r.useRef(null),
      [w, G] = r.useState(R.durationSec ?? 0),
      [x, k] = r.useState(R.id),
      [F, B] = r.useState(0),
      [V, H] = r.useState(!1),
      [j, W] = r.useState(1),
      {
        freezeCanvasRef: Y,
        freezeObjectFit: K,
        isFreezeFrameHidden: $,
        captureFreezeFrame: z,
        releaseFreezeFrame: X,
      } = (function (e) {
        let [t, n] = r.useState("hidden"),
          [i, a] = r.useState("contain"),
          s = r.useRef(null),
          l = r.useCallback(() => {
            let t = e.current,
              i = s.current;
            if (null == t || null == i || 0 === t.videoWidth) return;
            let r = i.getContext("2d");
            if (null != r) {
              ((i.width = t.videoWidth), (i.height = t.videoHeight));
              try {
                r.drawImage(t, 0, 0);
              } catch {
                return;
              }
              (a(window.getComputedStyle(t).objectFit), n("holding"));
            }
          }, [e]),
          o = r.useCallback(() => {
            n((e) => ("holding" === e ? "releasing" : e));
          }, []);
        return (
          r.useEffect(() => {
            if ("releasing" !== t) return;
            let i = e.current,
              r = !1;
            function a() {
              r || ((r = !0), n("hidden"));
            }
            let s = setTimeout(a, 1500 * (null != i));
            if (null == i)
              return () => {
                ((r = !0), clearTimeout(s));
              };
            if ("function" == typeof i.requestVideoFrameCallback) {
              let e = i.requestVideoFrameCallback(a);
              return () => {
                ((r = !0), clearTimeout(s), i.cancelVideoFrameCallback(e));
              };
            }
            return (
              i.addEventListener("seeked", a),
              () => {
                ((r = !0), clearTimeout(s), i.removeEventListener("seeked", a));
              }
            );
          }, [t, e]),
          {
            freezeCanvasRef: s,
            freezeObjectFit: i,
            isFreezeFrameHidden: "hidden" === t,
            captureFreezeFrame: l,
            releaseFreezeFrame: o,
          }
        );
      })(U),
      Z = r.useMemo(() => [{ ...R, startSec: 0, durationSec: w }, ...D], [R, D, w]),
      q = Z.find((e) => e.id === x) ?? Z[0],
      {
        registerFollowerElement: Q,
        isGateRaised: J,
        raiseSyncGate: ee,
        clearSyncGate: et,
        handleDriverPlay: en,
        handleDriverPause: ei,
      } = (function (e) {
        let { elementRef: t, sources: n, activeSourceId: i, isGridView: a } = e,
          [s, l] = r.useState(null),
          o = r.useRef(null),
          d = r.useRef(new Map()),
          c = r.useRef(!1),
          u = r.useCallback((e, t) => {
            null == t ? d.current.delete(e) : d.current.set(e, t);
          }, []),
          _ = r.useCallback(
            (e) => (e.id === i ? t.current : (d.current.get(e.id) ?? null)),
            [i, t],
          ),
          E = r.useRef({ sources: n, isGridView: a, getSourceElement: _ });
        r.useLayoutEffect(() => {
          E.current = { sources: n, isGridView: a, getSourceElement: _ };
        });
        let A = r.useCallback(() => null != o.current, []),
          h = r.useCallback(
            function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : E.current.isGridView,
                i = t.current;
              if (null == i || i.paused || !n) return;
              let { sources: r, getSourceElement: a } = E.current;
              r.every((t) => T(a(t), t, e)) ||
                ((c.current = !0),
                (o.current = e),
                i.pause(),
                i.dispatchEvent(new Event("waiting")),
                l(e));
            },
            [t],
          ),
          f = r.useCallback(
            (e) => {
              ((o.current = null), l(null));
              let n = t.current;
              null == n ||
                (n.dispatchEvent(new Event("canplay")),
                e &&
                  ((c.current = !0),
                  n.play().catch(() => {
                    c.current = !1;
                  })));
            },
            [t],
          ),
          I = r.useCallback(
            (e) => {
              if (c.current) {
                c.current = !1;
                return;
              }
              h(e);
            },
            [h],
          ),
          p = r.useCallback(() => {
            if (c.current) {
              c.current = !1;
              return;
            }
            null != o.current && f(!1);
          }, [f]);
        return (
          r.useEffect(() => {
            if (null == s) return;
            let e = n.map(_).filter((e) => null != e);
            function t() {
              n.every((e) => T(_(e), e, s)) && f(!0);
            }
            let i = setTimeout(() => f(!0), 2500);
            return (
              e.forEach((e) => {
                (e.addEventListener("canplay", t),
                  e.addEventListener("canplaythrough", t),
                  e.addEventListener("seeked", t));
              }),
              t(),
              () => {
                (clearTimeout(i),
                  e.forEach((e) => {
                    (e.removeEventListener("canplay", t),
                      e.removeEventListener("canplaythrough", t),
                      e.removeEventListener("seeked", t));
                  }));
              }
            );
          }, [s, n, _, f]),
          {
            registerFollowerElement: u,
            isGateRaised: A,
            raiseSyncGate: h,
            clearSyncGate: f,
            handleDriverPlay: I,
            handleDriverPause: p,
          }
        );
      })({ elementRef: U, sources: Z, activeSourceId: q.id, isGridView: v }),
      er = r.useRef(null),
      ea = r.useRef(null),
      es = r.useRef(R.id),
      el = r.useRef(!1),
      eo = r.useRef(null),
      ed = r.useRef(null);
    function ec() {
      null != ed.current &&
        (clearTimeout(ed.current),
        (ed.current = null),
        U.current?.dispatchEvent(new Event("canplay")));
    }
    function eu() {
      let e = eo.current;
      null != e && ((eo.current = null), ec(), e_(e.sourceId, e.masterSec));
    }
    function e_(e, t) {
      let n = Z.find((t) => t.id === e);
      if (null == n) return;
      if (n.id === R.id) ((eo.current = null), ec());
      else if (!el.current) {
        let e;
        ((eo.current = { sourceId: n.id, masterSec: t }),
          null == ed.current &&
            null != (e = U.current) &&
            (e.dispatchEvent(new Event("waiting")),
            (e.preload = "metadata"),
            e.load(),
            (ed.current = setTimeout(() => {
              ((el.current = !0), eA.current.applyDeferredSwitch());
            }, 5e3))));
        return;
      }
      let i = o()(t, 0, eA.current.masterDurationSec),
        r = U.current;
      if (n.id === eA.current.activeSource.id) {
        ((ea.current = null), null != r && (r.currentTime = i - n.startSec));
        return;
      }
      (z(),
        (er.current = {
          localSeekSec: o()(i - n.startSec, 0, n.durationSec),
          resumePlayback: null != r && !r.paused,
          playbackRate: r?.playbackRate ?? 1,
        }),
        (ea.current = i),
        (eA.current = { ...eA.current, activeSource: n }),
        k(n.id),
        B(i));
    }
    function eE(e) {
      e_(R.id, e);
    }
    let eA = r.useRef({
      activeSource: q,
      masterDurationSec: w,
      isScrubbing: E,
      revertToOriginal: eE,
      applyDeferredSwitch: eu,
    });
    r.useLayoutEffect(() => {
      eA.current = {
        ...eA.current,
        activeSource: q,
        masterDurationSec: w,
        isScrubbing: E,
        revertToOriginal: eE,
        applyDeferredSwitch: eu,
      };
    });
    let eh = r.useRef(null);
    (r.useLayoutEffect(
      () => (
        (eh.current ??= (function (e) {
          let t = null;
          function n() {
            let n = e.getElement();
            return (null != n && (t = n), t);
          }
          return new Proxy(
            {},
            {
              get(t, i) {
                let r = n();
                switch (i) {
                  case "domNode":
                    return e.getElement();
                  case "currentTime":
                    return e.getCurrentTimeSec();
                  case "duration":
                    return e.getDurationSec();
                  case "buffered":
                    var a, s;
                    return (
                      (a = r?.buffered),
                      (s = e.getActiveStartSec()),
                      {
                        length: a?.length ?? 0,
                        start: (e) => (a?.start(e) ?? 0) + s,
                        end: (e) => (a?.end(e) ?? 0) + s,
                      }
                    );
                }
                if (null == r) return;
                let l = Reflect.get(r, i);
                return "function" == typeof l ? l.bind(r) : l;
              },
              set(t, i, r) {
                if ("currentTime" === i) return (e.seekTo(r), !0);
                let a = n();
                return (null != a && Reflect.set(a, i, r), !0);
              },
              has(e, t) {
                let i = n();
                return null != i && Reflect.has(i, t);
              },
            },
          );
        })({
          getElement: () => U.current,
          getDurationSec: () => eA.current.masterDurationSec,
          getActiveStartSec: () => eA.current.activeSource.startSec,
          getCurrentTimeSec: () => {
            let e = ea.current;
            return null != e
              ? e
              : Math.max(0, eA.current.activeSource.startSec + (U.current?.currentTime ?? 0));
          },
          seekTo: (e) => {
            let t = o()(e, 0, eA.current.masterDurationSec);
            if ((B(t), p(eA.current.activeSource, t))) {
              ea.current = null;
              let e = U.current;
              (null != e && (e.currentTime = t - eA.current.activeSource.startSec),
                eA.current.isScrubbing || ee(t));
              return;
            }
            ((ea.current = t), eA.current.isScrubbing || eA.current.revertToOriginal(t));
          },
        })),
        t(eh.current),
        () => {
          t(null);
        }
      ),
      [t, ee],
    ),
      r.useEffect(
        () => () => {
          null != ed.current && clearTimeout(ed.current);
        },
        [],
      ));
    let ef = r.useRef(x);
    function eI(e) {
      e.id !== q.id && e_(e.id, F);
    }
    function ep(e) {
      J() || P.onCanPlay?.(e);
    }
    (r.useEffect(() => {
      ef.current !== x && ((ef.current = x), U.current?.load());
    }, [x]),
      r.useEffect(() => {
        if (E) return;
        let e = ea.current;
        null == e ||
          null != er.current ||
          p(eA.current.activeSource, e) ||
          eA.current.revertToOriginal(e);
      }, [E]));
    let eT = !p(q, F);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)(d.D, {
          onClick: P.onClick ?? void 0,
          className: s()(y.dw, { [y.x2]: v }),
          children: [
            (0, i.jsxs)(C, {
              source: q,
              masterSec: F,
              isPlaying: V,
              playbackRate: j,
              isGridView: v,
              children: [
                (0, i.jsxs)(u.A, {
                  ...P,
                  ref: U,
                  className: s()(l, { [y._b]: eT, [y.l3]: v }),
                  poster: q.poster ?? a,
                  onCanPlay: ep,
                  onCanPlayThrough: ep,
                  onTimeUpdate: function (e) {
                    let t = U.current;
                    if (null != t && null == er.current && null == ea.current) {
                      W(t.playbackRate);
                      let e = Math.max(0, q.startSec + t.currentTime);
                      (B(e), q.id !== R.id && e >= q.startSec + q.durationSec - 0.12 && eE(e));
                    }
                    A?.(e);
                  },
                  onEnded: function (e) {
                    q.id !== R.id ? eE(q.startSec + q.durationSec) : h?.(e);
                  },
                  onLoadedMetadata: function (e) {
                    let t = U.current,
                      n = er.current;
                    if (
                      (x === R.id &&
                        null != t &&
                        ((el.current = !0),
                        Number.isFinite(t.duration) &&
                          (G(t.duration),
                          (eA.current = { ...eA.current, masterDurationSec: t.duration }))),
                      null == n)
                    ) {
                      (f?.(e), eu());
                      return;
                    }
                    if (((er.current = null), null != t)) {
                      t.playbackRate = n.playbackRate;
                      try {
                        t.currentTime = n.localSeekSec;
                      } catch {}
                      n.resumePlayback && t.play().catch(() => {});
                    }
                    ((ea.current = null), X());
                  },
                  onError: function (e) {
                    q.id !== R.id ? eE(q.startSec + (U.current?.currentTime ?? 0)) : I?.(e);
                  },
                  onPlay: function (e) {
                    (H(!0), en(F), m?.(e));
                  },
                  onPause: function (e) {
                    (H(!1), ei(), N?.(e));
                  },
                  children: [O, (0, i.jsx)("source", { onError: _, src: q.url })],
                }),
                (0, i.jsx)("canvas", {
                  ref: Y,
                  className: y.bQ,
                  style: { objectFit: K },
                  hidden: $,
                  "aria-hidden": !0,
                }),
              ],
            }),
            v &&
              D.map((e) =>
                (0, i.jsx)(
                  C,
                  {
                    source: e,
                    masterSec: F,
                    isPlaying: V,
                    playbackRate: j,
                    isGridView: !0,
                    onMediaElement: Q,
                  },
                  e.id,
                ),
              ),
          ],
        }),
        Z.length > 1 &&
          !M &&
          (0, i.jsxs)("div", {
            className: y.c2,
            "data-testid": "discord-web-multi-video-player-povs",
            children: [
              !v &&
                Z.map((e) =>
                  (0, i.jsx)(
                    L,
                    {
                      source: e,
                      label:
                        e.id === R.id ? (e.label ?? S.intl.string(g.default["9tdsDk"])) : e.label,
                      isActive: e.id === q.id,
                      isOriginal: e.id === R.id,
                      currentMasterTimeSec: F,
                      onSelect: eI,
                    },
                    e.id,
                  ),
                ),
              (0, i.jsx)(d.D, {
                className: y.LI,
                "aria-label": S.intl.string(g.default.lykjkX),
                "aria-pressed": !1,
                onClick: function (e) {
                  if ((e.stopPropagation(), v)) {
                    (J() && et(!0), b(!1));
                    let e = Z.find((e) => e.id === es.current);
                    e_(null != e && p(e, F) ? e.id : R.id, F);
                    return;
                  }
                  ((es.current = q.id), b(!0), ee(F, !0), e_(R.id, F));
                },
                "data-testid": "discord-web-multi-video-player-grid-toggle",
                children: (0, i.jsx)(c.d, { size: "xs", color: "currentColor" }),
              }),
            ],
          }),
      ],
    });
  }
}
