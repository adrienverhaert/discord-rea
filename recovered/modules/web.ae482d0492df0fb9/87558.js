/* Recovered shipped factory. Module 87558.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3843911..3845454
 * Raw property SHA-256: abc6b97f05cdd9e33bfa7bac209e50c4687d7af22e66b4967168502ab2878fb0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    Ay: () => s,
    GT: () => o,
    Mz: () => d,
    XG: () => c,
    fB: () => _,
    qH: () => l,
    rs: () => u,
  }),
    n(323874),
    n(14289),
    n(35956),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
  var i,
    r = n(115943),
    a = n.n(r);
  async function s(e, t, n) {
    var i;
    return {
      src: e,
      base64: e,
      loop: !1,
      loopDelay: 0,
      duration: Math.round(
        ((i = await t.arrayBuffer()), a().decode(i)).frames.reduce((e, t) => e + t.delay, 0),
      ),
      start: 0,
      position: { x: 0, y: 0 },
      zIndex: 100 + n,
      height: 880,
      width: 450,
      name: t.name,
    };
  }
  var l =
    (((i = {}).THUMBNAIL = "Thumbnail"),
    (i.STATIC = "Static"),
    (i.REDUCED_MOTION = "Reduced Motion"),
    i);
  function o(e, t) {
    return { name: t.name, src: URL.createObjectURL(t), base64: e };
  }
  function d(e, t) {
    if (null == e) return;
    let n = new FileReader();
    ((n.onload = (e) => {
      null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
    }),
      n.readAsDataURL(e));
  }
  function c(e) {
    if (null == e) return "";
    let t = e.split("/").pop() ?? e;
    return t.endsWith(".png.png") ? t.replace(/\.png\.png$/, ".png") : t;
  }
  function u(e) {
    return (
      "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
      e
        .map((e) => {
          let t = c(e.name),
            n = e.randomizedSources?.map((e) => c(e.filename ?? e.src));
          return JSON.stringify(
            {
              path: t,
              loop: e.loop,
              start: e.start,
              duration: e.duration,
              loop_delay: e.loopDelay,
              z_index: e.zIndex,
              ...(null != n && n.length > 0
                ? { randomized_paths: n.includes(t) ? n : [t, ...n] }
                : {}),
            },
            null,
            4,
          )
            .split("\n")
            .map((e) => " ".repeat(22) + e)
            .join("\n");
        })
        .join(",\n") +
      "\n]"
    );
  }
  function _(e) {
    let t = (function (e) {
      let [t, n] = e.split(","),
        i = atob(n),
        r = t.split(";")[0],
        a = new Uint8Array(i.length);
      for (let e = 0; e < i.length; e++) a[e] = i.charCodeAt(e);
      return new Blob([a], { type: r });
    })(e);
    return URL.createObjectURL(t);
  }
}
