/* Recovered shipped factory. Module 294106.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 23261..25051
 * Raw property SHA-256: f8ddab48c7f4f15349d414fecd82cd512a69dfedede18daac9b96ee127999bc8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  for (
    var r = "u" > typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
      i = { alt: "altKey", control: "ctrlKey", meta: "metaKey", shift: "shiftKey" },
      n = {
        add: "+",
        break: "pause",
        cmd: "meta",
        command: "meta",
        ctl: "control",
        ctrl: "control",
        del: "delete",
        down: "arrowdown",
        esc: "escape",
        ins: "insert",
        left: "arrowleft",
        mod: r ? "meta" : "control",
        opt: "alt",
        option: "alt",
        return: "enter",
        right: "arrowright",
        space: " ",
        spacebar: " ",
        up: "arrowup",
        win: "meta",
        windows: "meta",
      },
      o = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        control: 17,
        alt: 18,
        pause: 19,
        capslock: 20,
        escape: 27,
        " ": 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        arrowleft: 37,
        arrowup: 38,
        arrowright: 39,
        arrowdown: 40,
        insert: 45,
        delete: 46,
        meta: 91,
        numlock: 144,
        scrolllock: 145,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222,
      },
      s = 1;
    s < 20;
    s++
  )
    o["f" + s] = 111 + s;
  function a(e) {
    return n[(e = e.toLowerCase())] || e;
  }
  t.isKeyHotkey = function (e, t) {
    var r, n, s, u, c;
    return (
      (r = e),
      (n = { byKey: !0 }),
      (s = t),
      !n || "byKey" in n || ((s = n), (n = null)),
      Array.isArray(r) || (r = [r]),
      (u = r.map(function (e) {
        return (function (e, t) {
          var r = t && t.byKey,
            n = {},
            s = (e = e.replace("++", "+add")).split("+"),
            u = s.length;
          for (var c in i) n[i[c]] = !1;
          var d = !0,
            l = !1,
            h = void 0;
          try {
            for (var f, p = s[Symbol.iterator](); !(d = (f = p.next()).done); d = !0) {
              var m = f.value,
                g = m.endsWith("?") && m.length > 1;
              g && (m = m.slice(0, -1));
              var _ = a(m),
                b = i[_];
              ((1 !== u && b) ||
                (r
                  ? (n.key = _)
                  : (n.which = (function (e) {
                      return o[(e = a(e))] || e.toUpperCase().charCodeAt(0);
                    })(m))),
                b && (n[b] = !g || null));
            }
          } catch (e) {
            ((l = !0), (h = e));
          } finally {
            try {
              !d && p.return && p.return();
            } finally {
              if (l) throw h;
            }
          }
          return n;
        })(e, n);
      })),
      (c = function (e) {
        return u.some(function (t) {
          return (function (e, t) {
            for (var r in e) {
              var i = e[r],
                n = void 0;
              if (
                null != i &&
                (null !=
                  (n =
                    "key" === r && null != t.key
                      ? t.key.toLowerCase()
                      : "which" === r
                        ? 91 === i && 93 === t.which
                          ? 91
                          : t.which
                        : t[r]) ||
                  !1 !== i) &&
                n !== i
              )
                return !1;
            }
            return !0;
          })(t, e);
        });
      }),
      null == s ? c : c(s)
    );
  };
}
