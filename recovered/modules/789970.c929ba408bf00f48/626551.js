/* Recovered shipped factory. Module 626551.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 205234..208574
 * Raw property SHA-256: c97b27f7b5ad75cf8573d72c452c2267f7f45811be6a41567f6913c2b06e3ba0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { $M: () => a, W$: () => i, rQ: () => c });
  var i = [
      "black",
      "red",
      "green",
      "yellow",
      "blue",
      "magenta",
      "cyan",
      "white",
      "brightBlack",
      "brightRed",
      "brightGreen",
      "brightYellow",
      "brightBlue",
      "brightMagenta",
      "brightCyan",
      "brightWhite",
    ],
    n = {
      1: "bold",
      2: "dim",
      3: "italic",
      4: "underline",
      7: "reverse",
      8: "hidden",
      9: "strikethrough",
    },
    o = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
  function s(e) {
    let t = e.shift();
    if ("2" === t) {
      let t = e.splice(0, 3).map((e) => Number.parseInt(e));
      if (3 !== t.length || t.some((e) => Number.isNaN(e))) return;
      return { type: "rgb", rgb: t };
    }
    if ("5" === t) {
      let t = e.shift();
      if (t) return { type: "table", index: Number(t) };
    }
  }
  function a(e) {
    let t, r, a;
    return ((t = null),
    (r = null),
    (a = new Set()),
    {
      parse(e) {
        let u = [],
          c = 0;
        do {
          let d = (function (e, t) {
              o.lastIndex = t;
              let r = o.exec(e);
              if (r) {
                let [, e, t, i] = r;
                return {
                  sequence: "m" !== i || t || /^[<=>?]/.test(e) ? [] : e.split(";"),
                  startPosition: r.index,
                  position: r.index + r[0].length,
                };
              }
              return { position: e.length };
            })(e, c),
            l = d.sequence ? e.substring(c, d.startPosition) : e.substring(c);
          if (
            (l.length > 0 &&
              u.push({
                value: l,
                position: c,
                foreground: t,
                background: r,
                decorations: new Set(a),
              }),
            d.sequence)
          ) {
            let e = (function (e) {
              let t = [];
              for (; e.length > 0;) {
                let r = e.shift();
                if (!r) continue;
                let o = Number.parseInt(r);
                if (!Number.isNaN(o))
                  if (0 === o) t.push({ type: "resetAll" });
                  else if (o <= 9) n[o] && t.push({ type: "setDecoration", value: n[o] });
                  else if (o <= 29) {
                    let e = n[o - 20];
                    e &&
                      (t.push({ type: "resetDecoration", value: e }),
                      "dim" === e && t.push({ type: "resetDecoration", value: "bold" }));
                  } else if (o <= 37)
                    t.push({
                      type: "setForegroundColor",
                      value: { type: "named", name: i[o - 30] },
                    });
                  else if (38 === o) {
                    let r = s(e);
                    r && t.push({ type: "setForegroundColor", value: r });
                  } else if (39 === o) t.push({ type: "resetForegroundColor" });
                  else if (o <= 47)
                    t.push({
                      type: "setBackgroundColor",
                      value: { type: "named", name: i[o - 40] },
                    });
                  else if (48 === o) {
                    let r = s(e);
                    r && t.push({ type: "setBackgroundColor", value: r });
                  } else
                    49 === o
                      ? t.push({ type: "resetBackgroundColor" })
                      : 53 === o
                        ? t.push({ type: "setDecoration", value: "overline" })
                        : 55 === o
                          ? t.push({ type: "resetDecoration", value: "overline" })
                          : o >= 90 && o <= 97
                            ? t.push({
                                type: "setForegroundColor",
                                value: { type: "named", name: i[o - 90 + 8] },
                              })
                            : o >= 100 &&
                              o <= 107 &&
                              t.push({
                                type: "setBackgroundColor",
                                value: { type: "named", name: i[o - 100 + 8] },
                              });
              }
              return t;
            })(d.sequence);
            for (let i of e)
              "resetAll" === i.type
                ? ((t = null), (r = null), a.clear())
                : "resetForegroundColor" === i.type
                  ? (t = null)
                  : "resetBackgroundColor" === i.type
                    ? (r = null)
                    : "resetDecoration" === i.type && a.delete(i.value);
            for (let i of e)
              "setForegroundColor" === i.type
                ? (t = i.value)
                : "setBackgroundColor" === i.type
                  ? (r = i.value)
                  : "setDecoration" === i.type && a.add(i.value);
          }
          c = d.position;
        } while (c < e.length);
        return u;
      },
    }).parse(e);
  }
  var u = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff",
  };
  function c(e = u) {
    let t;
    function r(e) {
      return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    return {
      value: function (n) {
        switch (n.type) {
          case "named":
            return e[n.name];
          case "rgb":
            return r(n.rgb);
          case "table":
            var o;
            return (
              (o = n.index),
              (function () {
                if (t) return t;
                t = [];
                for (let r = 0; r < i.length; r++) t.push(e[i[r]]);
                let n = [0, 95, 135, 175, 215, 255];
                for (let e = 0; e < 6; e++)
                  for (let i = 0; i < 6; i++)
                    for (let o = 0; o < 6; o++) t.push(r([n[e], n[i], n[o]]));
                let o = 8;
                for (let e = 0; e < 24; e++, o += 10) t.push(r([o, o, o]));
                return t;
              })()[o]
            );
        }
      },
    };
  }
}
