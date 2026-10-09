/* Recovered shipped factory. Module 259407.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3498227..3500239
 * Raw property SHA-256: 01c64187c3a635d6ade018718ab4f85b782f75719e3f851b335f2e770c1d8472
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E, m: () => c });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(998218),
    l = n(652215),
    o = n(411517);
  let d =
    "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
  var c = (((i = {}).YOUTUBE = "YouTube"), (i.TIKTOK = "TikTok"), (i.TWITCH = "Twitch"), i);
  let u = {
    YouTube: {
      params: { autoplay: "1", auto_play: "1", pageType: l.NzX },
      dynamicParams: (e) => {
        let { autoMute: t } = e;
        return { mute: t ? "1" : void 0 };
      },
    },
    TikTok: { params: { utm_source: "discord.gg" } },
    Twitch: {
      stripParams: ["parent"],
      appendParams: {
        parent: [
          "discord.co",
          "discord.com",
          "discordapp.com",
          "ptb.discord.com",
          "canary.discord.com",
          "localhost",
        ],
      },
      params: { autoplay: "true" },
      dynamicParams: (e) => {
        let { autoMute: t } = e;
        return { muted: t ? "true" : void 0 };
      },
    },
  };
  function _(e) {
    let { allowFullScreen: t, ref: n, ...i } = e,
      a = t ? `${d} allow-fullscreen` : d;
    return (0, r.jsx)("iframe", {
      ref: n,
      className: o.Qu,
      allow: t ? "autoplay; fullscreen" : "autoplay",
      frameBorder: 0,
      scrolling: "no",
      sandbox: a,
      allowFullScreen: t,
      ...i,
    });
  }
  function E(e) {
    var t;
    let n,
      { provider: i, src: l, autoMute: o, ...d } = e,
      c = u[i],
      E = a.useRef(null);
    ((t = "TikTok" === i),
      (n = a.useCallback(
        (e) => {
          e.data["x-tiktok-player"] &&
            "https://www.tiktok.com" === e.origin &&
            "onPlayerReady" === e.data.type &&
            (o &&
              E.current?.contentWindow?.postMessage(
                { type: "mute", "x-tiktok-player": !0 },
                e.origin,
              ),
            E.current?.contentWindow?.postMessage(
              { type: "play", "x-tiktok-player": !0 },
              e.origin,
            ));
        },
        [o, E],
      )),
      a.useEffect(() => {
        if (t)
          return (
            window.addEventListener("message", n),
            () => window.removeEventListener("message", n)
          );
      }, [t, n]));
    let A = (function (e, t, n) {
      let i = s.A.toURLSafe(e ?? "");
      if (null === i) return "";
      if (null == t) return i.toString();
      if (null != t.stripParams) for (let e of t.stripParams) i.searchParams.delete(e);
      if (null != t.params) for (let e in t.params) i.searchParams.set(e, t.params[e]);
      if (null != t.appendParams)
        for (let e in t.appendParams) for (let n of t.appendParams[e]) i.searchParams.append(e, n);
      if (null != t.dynamicParams) {
        let e = t.dynamicParams(n);
        for (let t in e) {
          let n = e[t];
          null != n && i.searchParams.set(t, n);
        }
      }
      return i.toString();
    })(l, c, { autoMute: o });
    return (0, r.jsx)(_, { ref: E, src: A, ...d });
  }
}
