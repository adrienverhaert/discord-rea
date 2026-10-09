/* Recovered shipped factory. Module 37948.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4754772..4755684
 * Raw property SHA-256: 7ab1b1412fbe1c4241617fdaba3e2f943290c9e6d99df6fd42379078d835a233
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => u }), n(323874), n(14289), n(35956));
  var i = n(582128),
    r = n(975807),
    a = n(853022),
    s = n(738533);
  let l = "steam",
    o = /^\/app\/(\d+)(?:\/)?/,
    d = /^\/games\/store\/title\/([^/]+)/;
  async function c(e) {
    if ("store.steampowered.com" === e.hostname && (await s.A.isProtocolRegistered(l))) {
      let t = e.pathname.match(o)?.[1];
      if (null != t) return `${l}://store/${t}`;
    }
    if (e.hostname === a.bH && (await s.A.isProtocolRegistered("msxbox"))) {
      let t = e.pathname.match(d)?.[1];
      if (null != t) return (0, a.b9)(decodeURIComponent(t));
    }
    return null;
  }
  function u(e) {
    let [t, n] = i.useState(!1);
    return i.useCallback(
      async (i) => {
        let a;
        if (null == i) return;
        try {
          a = new URL(i);
        } catch {
          return;
        }
        let s = await c(a);
        if (
          (null != s && t && (s = null),
          a.searchParams.set("utm_source", "discord"),
          (i = a.toString()),
          null != e)
        )
          e(i);
        else if (null != s) {
          var l;
          let e;
          ((l = s),
            (e = setTimeout(() => n(!0), 5e3)),
            window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
            (0, r.A)(l));
        } else (0, r.A)(i);
      },
      [e, t],
    );
  }
}
