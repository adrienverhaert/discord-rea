/* Recovered shipped factory. Module 89505.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3936015..3948231
 * Raw property SHA-256: 452c9f0a816a1fba6a074eb3542deefa0d863bd32b020db55f032446a6d083e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => K });
  var i = n(264686),
    r = n(625180),
    a = n(91242),
    s = n(976860),
    l = n(803224),
    o = n(531685),
    d = n(479975);
  n(884868);
  var c = n(573083);
  function u(e, t) {
    try {
      t();
    } catch (t) {
      console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
  }
  (n(323874), n(14289), n(35956));
  var _ = n(141931),
    E = n(941426),
    A = n(475735),
    h = n(192820),
    f = n(731854);
  let I = new E.Vy("VibegrationsNativeCapture");
  function p(e, t) {
    return (I.verbose(`native capture not used: ${e}`, t ?? {}), null);
  }
  function T(e) {
    let t = e.getBoundingClientRect();
    return t.width < 40 ||
      t.height < 40 ||
      t.left < -1 ||
      t.top < -1 ||
      t.right > window.innerWidth + 1 ||
      t.bottom > window.innerHeight + 1
      ? null
      : t;
  }
  async function m(e) {
    let t = window.DiscordNative,
      n = await t?.window?.getMediaSourceId?.();
    if (null == n) return p("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return p("unrecognized media source id", { sourceId: n });
    let r = Math.min(
        window.devicePixelRatio,
        1,
        1568 / Math.max(e.width, e.height),
        Math.sqrt(115e4 / (e.width * e.height)),
      ),
      a = Math.ceil(window.outerWidth * r),
      s = Math.ceil(window.outerHeight * r),
      l = h.Ay.getMediaEngine();
    if (l.supports(f.O5.WINDOW_PREVIEWS))
      try {
        let e = A.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
          t = await l.getSingleWindowPreview(i, a, s, e);
        if (null != t && "" !== t.url) return t.url;
      } catch {}
    let o = await t?.desktopCapture?.getDesktopCaptureSources({
        types: [_.fS.WINDOW],
        thumbnailSize: { width: a, height: s },
      }),
      d = o?.find((e) => e.id.split(":")[1] === i);
    return null == d || "" === d.url ? p("own window missing from capture sources") : d.url;
  }
  async function g() {
    let e = document.createElement("div");
    return (
      (e.style.cssText =
        "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
      document.body.appendChild(e),
      await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
      () => e.remove()
    );
  }
  async function S(e, t, n, i) {
    let r = new Image();
    if (
      ((r.decoding = "async"),
      (r.src = e),
      await r.decode(),
      0 === r.naturalWidth || 0 === r.naturalHeight)
    )
      return p("window still decoded empty");
    let a = r.naturalWidth / window.outerWidth,
      s = r.naturalHeight / window.outerHeight;
    if (a <= 0 || s <= 0 || Math.abs(a - s) > 0.03 * a)
      return p("window still does not match the window geometry", {
        image: { width: r.naturalWidth, height: r.naturalHeight },
        window: { width: window.outerWidth, height: window.outerHeight },
      });
    let l = (function (e, t, n, i) {
      let r = t.x > 2 ? [0, t.x] : [0],
        a = t.y > 2 ? [0, t.y] : [0];
      if (1 === r.length && 1 === a.length) return { x: 0, y: 0 };
      for (let t of r)
        for (let r of a)
          if (
            (function (e, t, n) {
              let i = document.createElement("canvas");
              ((i.width = 1), (i.height = 1));
              let r = i.getContext("2d");
              if (null == r) return !1;
              r.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
              let [a, s, l] = r.getImageData(0, 0, 1, 1).data;
              return a > 150 && l > 150 && s < Math.min(a, l) - 80;
            })(e, Math.round((t + 43) * n), Math.round((r + 43) * i))
          )
            return { x: t, y: r };
      return null;
    })(r, n, a, s);
    if (null == l) return p("document not found inside the window still", { inset: n });
    let o = Math.max(0, Math.floor((l.x + t.left) * a)),
      d = Math.max(0, Math.floor((l.y + t.top) * s)),
      c = Math.min(r.naturalWidth - o, Math.round(t.width * a)),
      u = Math.min(r.naturalHeight - d, Math.round(t.height * s));
    if (c < 1 || u < 1) return p("crop resolved empty");
    let _ = Math.min(1, 1568 / Math.max(c, u), Math.sqrt(115e4 / (c * u))),
      E = Math.max(1, Math.round(c * _)),
      A = Math.max(1, Math.round(u * _)),
      h = document.createElement("canvas");
    ((h.width = E), (h.height = A));
    let f = h.getContext("2d");
    if (null == f) return p("no 2d context");
    f.drawImage(r, o, d, c, u, 0, 0, E, A);
    let I = `image/${i?.format ?? "webp"}`,
      T = i?.quality == null ? 0.92 : Math.min(1, Math.max(0, i.quality / 100)),
      m = await new Promise((e) => h.toBlob(e, I, T));
    return null == m || m.type !== I
      ? p("encode failed", { type: I })
      : m.size > 5242880
        ? p("encoded capture too large", { bytes: m.size })
        : { blob: m, scale: (E / t.width + A / t.height) / 2 };
  }
  async function N(e, t) {
    try {
      var n, i, r;
      let a;
      if (null == window.DiscordNative) return p("not the desktop app");
      if (
        ((n = t.spec),
        null != n &&
          "viewport" !==
            (n.mode ??
              (null != (i = n.target) &&
              ((null != i.ref && "" !== i.ref) || (null != i.selector && "" !== i.selector))
                ? "element"
                : null != (r = n.rect) && r.width > 0 && r.height > 0
                  ? "rect"
                  : "viewport")))
      )
        return p("targeted capture needs the frame DOM", { spec: t.spec });
      if ("visible" !== document.visibilityState) return p("window not visible");
      let s = T(e);
      if (null == s) return p("frame not fully on screen");
      if (
        !(function (e, t) {
          for (let [n, i] of [
            [t.left + t.width / 2, t.top + t.height / 2],
            [t.left + 8, t.top + 8],
            [t.right - 8, t.top + 8],
            [t.left + 8, t.bottom - 8],
            [t.right - 8, t.bottom - 8],
          ]) {
            let r = document.elementFromPoint(n, i);
            if (r === e) continue;
            if (null == r) return !1;
            let a = r.getBoundingClientRect();
            if (!(
              2 >= Math.abs(a.left - t.left) &&
              2 >= Math.abs(a.top - t.top) &&
              4 >= Math.abs(a.width - t.width) &&
              4 >= Math.abs(a.height - t.height)
            ))
              return !1;
          }
          return !0;
        })(e, s)
      )
        return p("frame is covered");
      let l = {
          x: Math.max(0, window.outerWidth - window.innerWidth),
          y: Math.max(0, window.outerHeight - window.innerHeight),
        },
        o = l.x > 2 || l.y > 2 ? await g() : null;
      try {
        a = await m(s);
      } finally {
        o?.();
      }
      if (null == a) return null;
      let d = T(e);
      if (
        null == d ||
        Math.abs(d.left - s.left) > 1 ||
        Math.abs(d.top - s.top) > 1 ||
        Math.abs(d.width - s.width) > 1 ||
        Math.abs(d.height - s.height) > 1
      )
        return p("frame moved or resized during capture");
      let c = await S(a, s, l, t.spec);
      if (null == c) return null;
      let u = (function (e) {
        try {
          let t = new URL(e.src, window.location.href);
          return (
            (t.search = ""),
            (t.hash = ""),
            (t.pathname = t.pathname.replace(/[^/]*$/, "")),
            new URL("discord-cgi/screenshot", t).toString()
          );
        } catch {
          return null;
        }
      })(e);
      if (null == u) return p("frame has no resolvable upload url");
      let _ = {
          mode: "viewport",
          bounds: { x: 0, y: 0, width: Math.round(s.width), height: Math.round(s.height) },
          viewport: { width: Math.round(s.width), height: Math.round(s.height) },
          scale: Math.round(1e3 * c.scale) / 1e3,
          devicePixelRatio: window.devicePixelRatio,
          formFactor: s.width <= 768 ? "narrow" : "wide",
          ...(null == t.build ? {} : { build: t.build }),
          source: "native",
        },
        E = {
          "content-type": c.blob.type,
          "x-vibegrations-capture-id": t.captureId,
          "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(_)),
        };
      (null != t.build && (E["x-vibegrations-build"] = t.build),
        null != t.uploadToken && (E["x-vibegrations-capture-token"] = t.uploadToken));
      let A = await fetch(u, { method: "POST", headers: E, body: c.blob });
      if (!A.ok) return p("upload refused", { status: A.status });
      return (
        I.verbose("native capture uploaded", {
          id: t.captureId,
          bytes: c.blob.size,
          scale: _.scale,
        }),
        { status: "accepted" }
      );
    } catch (e) {
      return p("threw", { err: e });
    }
  }
  var C = n(251363),
    O = n(192888),
    R = n(853555),
    L = n(809685),
    y = n(777977),
    D = n(484697);
  (n(321073), n(667532));
  var v = n(112420),
    b = n(652215);
  function M(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
  }
  let P = {
    [b.e$_.OPEN_CONTEXT_MENU]: (e) =>
      "custom" !== e.args.type
        ? { result: { opened: !0 }, answered: "opened, no selection to make" }
        : {
            result: { opened: !0, selected_id: null },
            answered: "dismissed",
            options: (function e(t) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              if (!Array.isArray(t)) return n;
              for (let i of t) {
                if (n.length >= 40) break;
                if (null == i || "object" != typeof i) continue;
                let t = M(i.id);
                (null != t && n.push(t), e(i.items, n));
              }
              return n;
            })(e.args.items),
          },
    [b.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
      result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
      answered: "dismissed",
      subject: M(e.args.title),
    }),
    [b.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
      result: { opened: !1 },
      answered: "cancelled \u2014 an agent may not open external links",
      subject: M(e.args.url),
    }),
    [b.e$_.SHARE_CONTENT]: (e) => ({
      result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
      answered: "closed without sharing \u2014 an agent may not send a message for the user",
      subject: M(e.args.preview_title) ?? M(e.args.content),
    }),
    [b.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [b.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [b.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [b.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [b.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [b.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [b.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [b.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
  };
  Object.keys(P);
  let U = { drain: () => [], end: () => {}, iframeId: null },
    w = [];
  function G(e) {
    let t = w.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = P[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: a, subject: s } = n(e);
    return (
      t.recorded.length < 20 &&
        t.recorded.push({
          command: e.cmd,
          answered: r,
          ...(null != a && a.length > 0 ? { options: a } : {}),
          ...(null != s ? { subject: s } : {}),
        }),
      { result: i }
    );
  }
  function x(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, D.lw)(t) ?? null);
  }
  function k(e, t) {
    var n = x(e);
    if (null == n) return U;
    let i = { iframeId: n, recorded: [] };
    return (
      t?.beneathBatches === !0 ? w.push(i) : w.unshift(i),
      1 === w.length && (0, v.C)(G),
      {
        iframeId: n,
        drain: () => i.recorded.splice(0, i.recorded.length),
        end: () => {
          let e = w.indexOf(i);
          -1 !== e && (w.splice(e, 1), 0 === w.length && (0, v.C)(null));
        },
      }
    );
  }
  var F = n(873715),
    B = n(226178),
    V = n(165610);
  async function H(e) {
    let { onClose: t, ...i } = e,
      { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, B.i)(i), t);
  }
  async function j(e, t, i) {
    let { probe: r, spec: a, build: s, onAccepted: l, resolveUploadUrl: o } = i;
    if (!0 === r) return { status: (0, R.rQ)(e) ? "accepted" : "unavailable" };
    if (a?.mode === "widget") {
      let { captureConjureProfileWidget: i } = await Promise.all([
        n.e("253781"),
        n.e("686889"),
        n.e("471043"),
        n.e("584996"),
        n.e("258759"),
        n.e("912597"),
        n.e("70594"),
        n.e("993103"),
        n.e("193158"),
        n.e("252229"),
        n.e("250478"),
        n.e("28561"),
        n.e("324622"),
        n.e("795093"),
        n.e("446800"),
        n.e("306306"),
        n.e("518954"),
        n.e("201050"),
        n.e("908081"),
        n.e("829260"),
        n.e("25212"),
        n.e("504098"),
        n.e("245691"),
        n.e("845928"),
        n.e("192847"),
        n.e("81766"),
        n.e("815341"),
        n.e("916519"),
        n.e("794624"),
      ]).then(n.bind(n, 399503));
      return await i(e, { captureId: t, build: s, onAccepted: l, resolveUploadUrl: o });
    }
    let d = await (0, R.o$)(e, 6e3);
    if (null == d) return { status: "unavailable" };
    let c = null == l ? { uploadToken: void 0 } : await l();
    if (null == c) return { status: "unavailable" };
    let u = N(d, { captureId: t, spec: a, build: s, uploadToken: c.uploadToken });
    function _(e) {
      return Promise.race([u, new Promise((t) => setTimeout(() => t(null), e))]);
    }
    let E = await _(3e3);
    if (null != E) return E;
    let A = await (0, C.i)(d, t, a, c.uploadToken);
    return "accepted" === A.status ? A : ((await _(3e3)) ?? A);
  }
  async function W(e, t, n, i) {
    if (!(0, R.rQ)(e)) return { status: "unavailable" };
    let r = (0, c.Wg)(e);
    try {
      let r = await (0, R.o$)(e, 6e3);
      if (null == r) return { status: "unavailable" };
      let a = await i?.();
      if (!1 === a) return { status: "unavailable" };
      let s = k(r);
      try {
        let i = await (0, F.J)(r, t, n);
        if ("completed" !== i.status) return i;
        let a = [...Y.drain(e), ...s.drain()];
        if (0 === a.length) return i;
        return { ...i, response: { ...i.response, native: a } };
      } finally {
        s.end();
      }
    } finally {
      r();
    }
  }
  let Y = (function (e) {
    let t = new Map();
    function n(e) {
      let n = t.get(e);
      (null != n && (t.delete(e), u("closing the operation session", () => n.end())), (0, c.YN)(e));
    }
    return {
      begin: function (i) {
        (0, c.oJ)(i);
        let r = e(i);
        if (null == r) return;
        let a = t.get(i);
        if (null != a) {
          if (null != a.iframeId && a.iframeId === r.identity) return;
          (t.delete(i), u("replacing a stale operation session", () => a.end()));
        }
        (u("dismissing what was left standing", () => r.dismiss()),
          u("opening the operation session", () => {
            let e = r.open(),
              a = (0, c.W3)(() => {
                (0, c.wK)(i) || n(i);
              });
            t.set(i, {
              iframeId: e.iframeId,
              drain: () => e.drain(),
              end: () => {
                (a(), e.end());
              },
            });
          }));
      },
      end: n,
      drain: (e) => t.get(e)?.drain() ?? [],
    };
  })((e) => {
    let t = (0, R.UJ)(e);
    return null == t
      ? null
      : {
          identity: x(t),
          dismiss: () =>
            (function (e) {
              let t = e.contentWindow;
              if (null == t) return;
              let n = (0, D.lw)(t);
              null != n && ((0, L.ir)(n), (0, y.OR)(n));
            })(t),
          open: () => k(t, { beneathBatches: !0 }),
        };
  });
  (0, c.h2)((e) => {
    let t = (0, R.UJ)(e);
    null != t &&
      (0, O.W)(
        t,
        "control-end",
        {},
        { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
      ).catch(() => {});
  });
  let K = {
    openConjureAppInstallModal: H,
    isWindowFocused: function () {
      return o.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
      return l.A.getDesktopType() === b.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
      let { title: t, body: r, route: a, sound: l, volume: o } = e;
      i.default.showNotification(
        n(608598),
        t,
        r,
        { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
        {
          sound: l,
          volume: o,
          fallbackDeepLink: null == a ? void 0 : (0, d.Id)(a),
          onClick: null == a ? void 0 : () => (0, s.pX)(a),
          isUserAvatar: !1,
        },
      );
    },
    relayPreviewCapture: j,
    relayPreviewControl: W,
    abortPreviewControl: function (e) {
      let t = (0, R.UJ)(e);
      null != t &&
        (0, O.W)(
          t,
          "control-abort",
          {},
          { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
        ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
      Y.begin(e);
    },
    endPreviewOperation: function (e) {
      Y.end(e);
    },
    releasePreviewControl: function (e) {
      (0, c.GU)(e);
    },
    reloadAppFrames: function (e) {
      if (null != e)
        for (let t of a.A.getAllFrames())
          (0, V.x1)(t) &&
            t.applicationId === e &&
            !t.data.proxyTicketRefreshing &&
            r.A.refreshProxyTicket(t.id);
    },
  };
}
