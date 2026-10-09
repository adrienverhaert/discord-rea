/* Recovered shipped factory. Module 214958.
 * Source: recovered/web/assets/40715.ce9980776791e583.js
 * UTF-16 property offsets: 25711..40223
 * Raw property SHA-256: 4c0fbeae7ceb40c52c0f6752afa70d12ee3ef07ae5d640c711c10677b488b2b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  ((e = r.nmd(e)),
    function () {
      "use strict";
      var n = { function: !0, object: !0 },
        o = (n[typeof window] && window) || this,
        i = n[typeof t] && t,
        a = n.object && e && !e.nodeType && e,
        s = i && a && "object" == typeof r.g && r.g;
      s && (s.global === s || s.window === s || s.self === s) && (o = s);
      var u = /\bOpera/,
        p = Object.prototype,
        l = p.hasOwnProperty,
        f = p.toString;
      function c(e) {
        return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
      }
      function h(e) {
        return ((e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e));
      }
      function v(e, t) {
        for (var r in e) l.call(e, r) && t(e[r], r, e);
      }
      function d(e) {
        return null == e ? c(e) : f.call(e).slice(8, -1);
      }
      function y(e) {
        return String(e).replace(/([ -])(?!$)/g, "$1?");
      }
      function b(e, t) {
        var r = null,
          n = function (n, o) {
            r = t(r, n, o, e);
          },
          o = -1,
          i = e ? e.length : 0;
        if ("number" == typeof i && i > -1 && i <= 0x1fffffffffffff) for (; ++o < i;) n(e[o], o, e);
        else v(e, n);
        return r;
      }
      function g(e) {
        return String(e).replace(/^ +| +$/g, "");
      }
      function m(e) {
        var t,
          r,
          n,
          i,
          a,
          s = o,
          p = e && "object" == typeof e && "String" != d(e);
        p && ((s = e), (e = null));
        var l = s.navigator || {},
          c = l.userAgent || "";
        e || (e = c);
        var S = p ? !!l.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
          x = "Object",
          w = p && s.java ? "JavaPackage" : d(s.java),
          O = /\bJava/.test(w) && s.java,
          E = O && d(s.environment) == (p ? x : "Environment"),
          M = O ? "a" : "\u03B1",
          A = O ? "b" : "\u03B2",
          P = s.document || {},
          C = s.operamini || s.opera,
          B = u.test((B = p && C ? C["[[Class]]"] : d(C))) ? B : (C = null),
          I = e,
          N = [],
          k = null,
          q = e == c,
          T = q && C && "function" == typeof C.version && C.version(),
          R = b(
            [
              { label: "EdgeHTML", pattern: "Edge" },
              "Trident",
              { label: "WebKit", pattern: "AppleWebKit" },
              "iCab",
              "Presto",
              "NetFront",
              "Tasman",
              "KHTML",
              "Gecko",
            ],
            function (t, r) {
              return (
                t || (RegExp("\\b" + (r.pattern || y(r)) + "\\b", "i").exec(e) && (r.label || r))
              );
            },
          ),
          W = b(
            [
              "Adobe AIR",
              "Arora",
              "Avant Browser",
              "Breach",
              "Camino",
              "Electron",
              "Epiphany",
              "Fennec",
              "Flock",
              "Galeon",
              "GreenBrowser",
              "iCab",
              "Iceweasel",
              "K-Meleon",
              "Konqueror",
              "Lunascape",
              "Maxthon",
              { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
              "Midori",
              "Nook Browser",
              "PaleMoon",
              "PhantomJS",
              "Raven",
              "Rekonq",
              "RockMelt",
              { label: "Samsung Internet", pattern: "SamsungBrowser" },
              "SeaMonkey",
              { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
              "Sleipnir",
              "SlimBrowser",
              { label: "SRWare Iron", pattern: "Iron" },
              "Sunrise",
              "Swiftfox",
              "Vivaldi",
              "Waterfox",
              "WebPositive",
              { label: "Yandex Browser", pattern: "YaBrowser" },
              { label: "UC Browser", pattern: "UCBrowser" },
              "Opera Mini",
              { label: "Opera Mini", pattern: "OPiOS" },
              "Opera",
              { label: "Opera", pattern: "OPR" },
              "Chromium",
              "Chrome",
              { label: "Chrome", pattern: "(?:HeadlessChrome)" },
              { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
              { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
              { label: "Firefox for iOS", pattern: "FxiOS" },
              { label: "IE", pattern: "IEMobile" },
              { label: "IE", pattern: "MSIE" },
              "Safari",
            ],
            function (t, r) {
              return (
                t || (RegExp("\\b" + (r.pattern || y(r)) + "\\b", "i").exec(e) && (r.label || r))
              );
            },
          ),
          F = U([
            { label: "BlackBerry", pattern: "BB10" },
            "BlackBerry",
            { label: "Galaxy S", pattern: "GT-I9000" },
            { label: "Galaxy S2", pattern: "GT-I9100" },
            { label: "Galaxy S3", pattern: "GT-I9300" },
            { label: "Galaxy S4", pattern: "GT-I9500" },
            { label: "Galaxy S5", pattern: "SM-G900" },
            { label: "Galaxy S6", pattern: "SM-G920" },
            { label: "Galaxy S6 Edge", pattern: "SM-G925" },
            { label: "Galaxy S7", pattern: "SM-G930" },
            { label: "Galaxy S7 Edge", pattern: "SM-G935" },
            "Google TV",
            "Lumia",
            "iPad",
            "iPod",
            "iPhone",
            "Kindle",
            { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
            "Nexus",
            "Nook",
            "PlayBook",
            "PlayStation Vita",
            "PlayStation",
            "TouchPad",
            "Transformer",
            { label: "Wii U", pattern: "WiiU" },
            "Wii",
            "Xbox One",
            { label: "Xbox 360", pattern: "Xbox" },
            "Xoom",
          ]),
          G = b(
            {
              Apple: { iPad: 1, iPhone: 1, iPod: 1 },
              Alcatel: {},
              Archos: {},
              Amazon: { Kindle: 1, "Kindle Fire": 1 },
              Asus: { Transformer: 1 },
              "Barnes & Noble": { Nook: 1 },
              BlackBerry: { PlayBook: 1 },
              Google: { "Google TV": 1, Nexus: 1 },
              HP: { TouchPad: 1 },
              HTC: {},
              Huawei: {},
              Lenovo: {},
              LG: {},
              Microsoft: { Xbox: 1, "Xbox One": 1 },
              Motorola: { Xoom: 1 },
              Nintendo: { "Wii U": 1, Wii: 1 },
              Nokia: { Lumia: 1 },
              Oppo: {},
              Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
              Sony: { PlayStation: 1, "PlayStation Vita": 1 },
              Xiaomi: { Mi: 1, Redmi: 1 },
            },
            function (t, r, n) {
              return (
                t ||
                ((r[F] ||
                  r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] ||
                  RegExp("\\b" + y(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                  n)
              );
            },
          ),
          L = b(
            [
              "Windows Phone",
              "KaiOS",
              "Android",
              "CentOS",
              { label: "Chrome OS", pattern: "CrOS" },
              "Debian",
              { label: "DragonFly BSD", pattern: "DragonFly" },
              "Fedora",
              "FreeBSD",
              "Gentoo",
              "Haiku",
              "Kubuntu",
              "Linux Mint",
              "OpenBSD",
              "Red Hat",
              "SuSE",
              "Ubuntu",
              "Xubuntu",
              "Cygwin",
              "Symbian OS",
              "hpwOS",
              "webOS ",
              "webOS",
              "Tablet OS",
              "Tizen",
              "Linux",
              "Mac OS X",
              "Macintosh",
              "Mac",
              "Windows 98;",
              "Windows ",
            ],
            function (t, r) {
              var n,
                o,
                i,
                a = r.pattern || y(r);
              return (
                !t &&
                  (t = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                  ((n = t),
                  (o = r.label || r),
                  (i = {
                    "10.0": "10",
                    6.4: "10 Technical Preview",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    5.2: "Server 2003 / XP 64-bit",
                    5.1: "XP",
                    5.01: "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME",
                  }),
                  a &&
                    o &&
                    /^Win/i.test(n) &&
                    !/^Windows Phone /i.test(n) &&
                    (i = i[/[\d.]+$/.exec(n)]) &&
                    (n = "Windows " + i),
                  (n = String(n)),
                  a && o && (n = n.replace(RegExp(a, "i"), o)),
                  (t = n =
                    h(
                      n
                        .replace(/ ce$/i, " CE")
                        .replace(/\bhpw/i, "web")
                        .replace(/\bMacintosh\b/, "Mac OS")
                        .replace(/_PowerPC\b/i, " OS")
                        .replace(/\b(OS X) [^ \d]+/i, "$1")
                        .replace(/\bMac (OS X)\b/, "$1")
                        .replace(/\/(\d)/, " $1")
                        .replace(/_/g, ".")
                        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                        .replace(/\bx86\.64\b/gi, "x86_64")
                        .replace(/\b(Windows Phone) OS\b/, "$1")
                        .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                        .split(" on ")[0],
                    ))),
                t
              );
            },
          );
        function U(t) {
          return b(t, function (t, r) {
            var n = r.pattern || y(r);
            return (
              !t &&
                (t =
                  RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(e) ||
                  RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(e) ||
                  RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) &&
                ((t = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : t).split(
                  "/",
                ))[1] &&
                  !/[\d.]+/.test(t[0]) &&
                  (t[0] += " " + t[1]),
                (r = r.label || r),
                (t = h(
                  t[0]
                    .replace(RegExp(n, "i"), r)
                    .replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ")
                    .replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"),
                ))),
              t
            );
          });
        }
        function _(t) {
          return b(t, function (t, r) {
            return (
              t ||
              (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(
                e,
              ) || 0)[1] ||
              null
            );
          });
        }
        if (
          (R && (R = [R]),
          /\bAndroid\b/.test(L) &&
            !F &&
            (i = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
            (F = g(i[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
          G && !F
            ? (F = U([G]))
            : G &&
              F &&
              (F = F.replace(RegExp("^(" + y(G) + ")[-_.\\s]", "i"), G + " ").replace(
                RegExp("^(" + y(G) + ")[-_.]?(\\w)", "i"),
                G + " $2",
              )),
          (i = /\bGoogle TV\b/.exec(F)) && (F = i[0]),
          /\bSimulator\b/i.test(e) && (F = (F ? F + " " : "") + "Simulator"),
          "Opera Mini" == W && /\bOPiOS\b/.test(e) && N.push("running in Turbo/Uncompressed mode"),
          "IE" == W && /\blike iPhone OS\b/.test(e)
            ? ((G = (i = m(e.replace(/like iPhone OS/, ""))).manufacturer), (F = i.product))
            : /^iP/.test(F)
              ? (W || (W = "Safari"),
                (L = "iOS" + ((i = / OS ([\d_]+)/i.exec(e)) ? " " + i[1].replace(/_/g, ".") : "")))
              : "Konqueror" == W && /^Linux\b/i.test(L)
                ? (L = "Kubuntu")
                : (G &&
                      "Google" != G &&
                      ((/Chrome/.test(W) && !/\bMobile Safari\b/i.test(e)) ||
                        /\bVita\b/.test(F))) ||
                    (/\bAndroid\b/.test(L) && /^Chrome/.test(W) && /\bVersion\//i.test(e))
                  ? ((W = "Android Browser"), (L = /\bAndroid\b/.test(L) ? L : "Android"))
                  : "Silk" == W
                    ? (/\bMobi/i.test(e) || ((L = "Android"), N.unshift("desktop mode")),
                      /Accelerated *= *true/i.test(e) && N.unshift("accelerated"))
                    : "UC Browser" == W && /\bUCWEB\b/.test(e)
                      ? N.push("speed mode")
                      : "PaleMoon" == W && (i = /\bFirefox\/([\d.]+)\b/.exec(e))
                        ? N.push("identifying as Firefox " + i[1])
                        : "Firefox" == W && (i = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                          ? (L || (L = "Firefox OS"), F || (F = i[1]))
                          : !W ||
                              (i = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(W))
                            ? (W &&
                                !F &&
                                /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(i + "/") + 8)) &&
                                (W = null),
                              (i = F || G || L) &&
                                (F || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L)) &&
                                (W =
                                  /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(L) ? L : i) +
                                  " Browser"))
                            : "Electron" == W &&
                              (i = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                              N.push("Chromium " + i),
          T ||
            (T = _([
              "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
              "Version",
              y(W),
              "(?:Firefox|Minefield|NetFront)",
            ])),
          (i =
            ("iCab" == R && parseFloat(T) > 3 && "WebKit") ||
            (/\bOpera\b/.test(W) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
            (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
              !/^(?:Trident|EdgeHTML)$/.test(R) &&
              "WebKit") ||
            (!R && /\bMSIE\b/i.test(e) && ("Mac OS" == L ? "Tasman" : "Trident")) ||
            ("WebKit" == R && /\bPlayStation\b(?! Vita\b)/i.test(W) && "NetFront")) && (R = [i]),
          "IE" == W && (i = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
            ? ((W += " Mobile"),
              (L = "Windows Phone " + (/\+$/.test(i) ? i : i + ".x")),
              N.unshift("desktop mode"))
            : /\bWPDesktop\b/i.test(e)
              ? ((W = "IE Mobile"),
                (L = "Windows Phone 8.x"),
                N.unshift("desktop mode"),
                T || (T = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
              : "IE" != W &&
                "Trident" == R &&
                (i = /\brv:([\d.]+)/.exec(e)) &&
                (W && N.push("identifying as " + W + (T ? " " + T : "")), (W = "IE"), (T = i[1])),
          q)
        ) {
          if (
            ((r = "global"),
            (n = null != (t = s) ? typeof t[r] : "number"),
            /^(?:boolean|number|string|undefined)$/.test(n) || ("object" == n && !t[r]))
          )
            d((i = s.runtime)) == (p ? x : "ScriptBridgingProxyObject")
              ? ((W = "Adobe AIR"), (L = i.flash.system.Capabilities.os))
              : d((i = s.phantom)) == (p ? x : "RuntimeObject")
                ? ((W = "PhantomJS"),
                  (T = (i = i.version || null) && i.major + "." + i.minor + "." + i.patch))
                : "number" == typeof P.documentMode && (i = /\bTrident\/(\d+)/i.exec(e))
                  ? ((T = [T, P.documentMode]),
                    (i = +i[1] + 4) != T[1] &&
                      (N.push("IE " + T[1] + " mode"), R && (R[1] = ""), (T[1] = i)),
                    (T = "IE" == W ? String(T[1].toFixed(1)) : T[0]))
                  : "number" == typeof P.documentMode &&
                    /^(?:Chrome|Firefox)\b/.test(W) &&
                    (N.push("masking as " + W + " " + T),
                    (W = "IE"),
                    (T = "11.0"),
                    (R = ["Trident"]),
                    (L = "Windows"));
          else if (
            (O &&
              ((I = (i = O.lang.System).getProperty("os.arch")),
              (L = L || i.getProperty("os.name") + " " + i.getProperty("os.version"))),
            E)
          ) {
            try {
              ((T = s.require("ringo/engine").version.join(".")), (W = "RingoJS"));
            } catch (e) {
              (i = s.system) &&
                i.global.system == s.system &&
                ((W = "Narwhal"), L || (L = i[0].os || null));
            }
            W || (W = "Rhino");
          } else
            "object" == typeof s.process &&
              !s.process.browser &&
              (i = s.process) &&
              ("object" == typeof i.versions &&
                ("string" == typeof i.versions.electron
                  ? (N.push("Node " + i.versions.node), (W = "Electron"), (T = i.versions.electron))
                  : "string" == typeof i.versions.nw &&
                    (N.push("Chromium " + T, "Node " + i.versions.node),
                    (W = "NW.js"),
                    (T = i.versions.nw))),
              W ||
                ((W = "Node.js"),
                (I = i.arch),
                (L = i.platform),
                (T = (T = /[\d.]+/.exec(i.version)) ? T[0] : null)));
          L = L && h(L);
        }
        if (
          (T &&
            (i =
              /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(T) ||
              /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (q && l.appMinorVersion)) ||
              (/\bMinefield\b/i.test(e) && "a")) &&
            ((k = /b/i.test(i) ? "beta" : "alpha"),
            (T =
              T.replace(RegExp(i + "\\+?$"), "") +
              ("beta" == k ? A : M) +
              (/\d+\+?/.exec(i) || ""))),
          "Fennec" == W || ("Firefox" == W && /\b(?:Android|Firefox OS|KaiOS)\b/.test(L)))
        )
          W = "Firefox Mobile";
        else if ("Maxthon" == W && T) T = T.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(F))
          ("Xbox 360" == F && (L = null),
            "Xbox 360" == F && /\bIEMobile\b/.test(e) && N.unshift("mobile mode"));
        else if (
          (/^(?:Chrome|IE|Opera)$/.test(W) || (W && !F && !/Browser|Mobi/.test(W))) &&
          ("Windows CE" == L || /Mobi/i.test(e))
        )
          W += " Mobile";
        else if ("IE" == W && q)
          try {
            null === s.external && N.unshift("platform preview");
          } catch (e) {
            N.unshift("embedded");
          }
        else
          (/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(e)) &&
          (i = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || T)
            ? ((L =
                ((i = [i, /BB10/.test(e)])[1]
                  ? ((F = null), (G = "BlackBerry"))
                  : "Device Software") +
                " " +
                i[0]),
              (T = null))
            : this != v &&
              "Wii" != F &&
              ((q && C) ||
                (/Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                ("Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(L)) ||
                ("IE" == W &&
                  ((L && !/^Win/.test(L) && T > 5.5) ||
                    (/\bWindows XP\b/.test(L) && T > 8) ||
                    (8 == T && !/\bTrident\b/.test(e))))) &&
              !u.test((i = m.call(v, e.replace(u, "") + ";"))) &&
              i.name &&
              ((i = "ing as " + i.name + ((i = i.version) ? " " + i : "")),
              u.test(W)
                ? (/\bIE\b/.test(i) && "Mac OS" == L && (L = null), (i = "identify" + i))
                : ((i = "mask" + i),
                  (W = B ? h(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                  /\bIE\b/.test(i) && (L = null),
                  q || (T = null)),
              (R = ["Presto"]),
              N.push(i));
        ((i = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
          ((i = [parseFloat(i.replace(/\.(\d)$/, ".0$1")), i]),
          "Safari" == W && "+" == i[1].slice(-1)
            ? ((W = "WebKit Nightly"), (k = "alpha"), (T = i[1].slice(0, -1)))
            : (T == i[1] || T == (i[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (T = null),
          (i[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
          537.36 == i[0] &&
            537.36 == i[2] &&
            parseFloat(i[1]) >= 28 &&
            "WebKit" == R &&
            (R = ["Blink"]),
          q && (S || i[1])
            ? (R && (R[1] = "like Chrome"),
              (i =
                i[1] ||
                ((i = i[0]) < 530
                  ? 1
                  : i < 532
                    ? 2
                    : i < 532.05
                      ? 3
                      : i < 533
                        ? 4
                        : i < 534.03
                          ? 5
                          : i < 534.07
                            ? 6
                            : i < 534.1
                              ? 7
                              : i < 534.13
                                ? 8
                                : i < 534.16
                                  ? 9
                                  : i < 534.24
                                    ? 10
                                    : i < 534.3
                                      ? 11
                                      : i < 535.01
                                        ? 12
                                        : i < 535.02
                                          ? "13+"
                                          : i < 535.07
                                            ? 15
                                            : i < 535.11
                                              ? 16
                                              : i < 535.19
                                                ? 17
                                                : i < 536.05
                                                  ? 18
                                                  : i < 536.1
                                                    ? 19
                                                    : i < 537.01
                                                      ? 20
                                                      : i < 537.11
                                                        ? "21+"
                                                        : i < 537.13
                                                          ? 23
                                                          : i < 537.18
                                                            ? 24
                                                            : i < 537.24
                                                              ? 25
                                                              : i < 537.36
                                                                ? 26
                                                                : "Blink" != R
                                                                  ? "27"
                                                                  : "28")))
            : (R && (R[1] = "like Safari"),
              (i =
                (i = i[0]) < 400
                  ? 1
                  : i < 500
                    ? 2
                    : i < 526
                      ? 3
                      : i < 533
                        ? 4
                        : i < 534
                          ? "4+"
                          : i < 535
                            ? 5
                            : i < 537
                              ? 6
                              : i < 538
                                ? 7
                                : i < 601
                                  ? 8
                                  : i < 602
                                    ? 9
                                    : i < 604
                                      ? 10
                                      : i < 606
                                        ? 11
                                        : i < 608
                                          ? 12
                                          : "12")),
          R && (R[1] += " " + (i += "number" == typeof i ? ".x" : /[.+]/.test(i) ? "" : "+")),
          "Safari" == W && (!T || parseInt(T) > 45)
            ? (T = i)
            : "Chrome" == W && /\bHeadlessChrome/i.test(e) && N.unshift("headless")),
          "Opera" == W && (i = /\bzbov|zvav$/.exec(L))
            ? ((W += " "),
              N.unshift("desktop mode"),
              "zvav" == i ? ((W += "Mini"), (T = null)) : (W += "Mobile"),
              (L = L.replace(RegExp(" *" + i + "$"), "")))
            : "Safari" == W && /\bChrome\b/.exec(R && R[1])
              ? (N.unshift("desktop mode"),
                (W = "Chrome Mobile"),
                (T = null),
                /\bOS X\b/.test(L) ? ((G = "Apple"), (L = "iOS 4.3+")) : (L = null))
              : /\bSRWare Iron\b/.test(W) && !T && (T = _("Chrome")),
          T &&
            0 == T.indexOf((i = /[\d.]+$/.exec(L))) &&
            e.indexOf("/" + i + "-") > -1 &&
            (L = g(L.replace(i, ""))),
          L &&
            -1 != L.indexOf(W) &&
            !RegExp(W + " OS").test(L) &&
            (L = L.replace(RegExp(" *" + y(W) + " *"), "")),
          R &&
            !/\b(?:Avant|Nook)\b/.test(W) &&
            (/Browser|Lunascape|Maxthon/.test(W) ||
              ("Safari" != W && /^iOS/.test(L) && /\bSafari\b/.test(R[1])) ||
              (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                W,
              ) &&
                R[1])) &&
            (i = R[R.length - 1]) &&
            N.push(i),
          N.length && (N = ["(" + N.join("; ") + ")"]),
          G && F && 0 > F.indexOf(G) && N.push("on " + G),
          F && N.push((/^on /.test(N[N.length - 1]) ? "" : "on ") + F),
          L &&
            ((a = (i = / ([\d.+]+)$/.exec(L)) && "/" == L.charAt(L.length - i[0].length - 1)),
            (L = {
              architecture: 32,
              family: i && !a ? L.replace(i[0], "") : L,
              version: i ? i[1] : null,
              toString: function () {
                var e = this.version;
                return (
                  this.family +
                  (e && !a ? " " + e : "") +
                  (64 == this.architecture ? " 64-bit" : "")
                );
              },
            })),
          (i = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I)
            ? (L && ((L.architecture = 64), (L.family = L.family.replace(RegExp(" *" + i), ""))),
              W &&
                (/\bWOW64\b/i.test(e) ||
                  (q &&
                    /\w(?:86|32)$/.test(l.cpuClass || l.platform) &&
                    !/\bWin64; x64\b/i.test(e))) &&
                N.unshift("32-bit"))
            : L &&
              /^OS X/.test(L.family) &&
              "Chrome" == W &&
              parseFloat(T) >= 39 &&
              (L.architecture = 64),
          e || (e = null));
        var j = {};
        return (
          (j.description = e),
          (j.layout = R && R[0]),
          (j.manufacturer = G),
          (j.name = W),
          (j.prerelease = k),
          (j.product = F),
          (j.ua = e),
          (j.version = W && T),
          (j.os = L || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
              return "null";
            },
          }),
          (j.parse = m),
          (j.toString = function () {
            return this.description || "";
          }),
          j.version && N.unshift(T),
          j.name && N.unshift(W),
          L &&
            W &&
            !(L == String(L).split(" ")[0] && (L == W.split(" ")[0] || F)) &&
            N.push(F ? "(" + L + ")" : "on " + L),
          N.length && (j.description = N.join(" ")),
          j
        );
      }
      var S = m();
      "function" == typeof define && "object" == typeof define.amd && define.amd
        ? ((o.platform = S),
          define(function () {
            return S;
          }))
        : i && a
          ? v(S, function (e, t) {
              i[t] = e;
            })
          : (o.platform = S);
    }.call(this));
}
