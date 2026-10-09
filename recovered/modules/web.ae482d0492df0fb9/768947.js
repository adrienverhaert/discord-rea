/* Recovered shipped factory. Module 768947.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7731983..7735798
 * Raw property SHA-256: 7d586d9e6a1779f46ab66446e04bdf18cdd6b5f3643e993b02757591d72f5cba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { No: () => p, OT: () => N, OY: () => m, py: () => T }), n(321073));
  var i = n(582128),
    r = n(915639),
    a = n(626551),
    s = n(635377),
    l = n.n(s),
    o = n(181370),
    d = n.n(o),
    c = n(52133),
    u = n(38405),
    _ = n(938855);
  let E = /^[a-z0-9_+\-.#]+$/,
    A = new (l())({ max: 256 }),
    h = new (l())({ max: 256 }),
    f = {
      h: "cpp",
      hpp: "cpp",
      cc: "cpp",
      cxx: "cpp",
      "c++": "cpp",
      hxx: "cpp",
      "h++": "cpp",
      hh: "cpp",
      arduino: "cpp",
      js: "javascript",
      node: "javascript",
      mjs: "javascript",
      cjs: "javascript",
      jsx: "javascript",
      ts: "typescript",
      mts: "typescript",
      cts: "typescript",
      rs: "rust",
      cs: "c-sharp",
      csharp: "c-sharp",
      "c#": "c-sharp",
      yml: "yaml",
      docker: "dockerfile",
      gql: "graphql",
      hbs: "html",
      htm: "html",
      xhtml: "html",
      handlebars: "html",
      "html.hbs": "html",
      "html.handlebars": "html",
      htmlbars: "html",
      erb: "html",
      twig: "html",
      craftcms: "html",
      xsl: "xml",
      rss: "xml",
      atom: "xml",
      xsd: "xml",
      plist: "xml",
      svg: "xml",
      mathml: "xml",
      xjb: "xml",
      wsf: "xml",
      less: "css",
      kt: "kotlin",
      kts: "kotlin",
      pl: "perl",
      pm: "perl",
      ps: "powershell",
      ps1: "powershell",
      psm1: "powershell",
      psd1: "powershell",
      pwsh: "powershell",
      tf: "hcl",
      tfvars: "hcl",
      sh: "bash",
      shell: "bash",
      console: "bash",
      shellsession: "bash",
      ex: "elixir",
      exs: "elixir",
      erl: "erlang",
      hs: "haskell",
      fs: "fsharp",
      "f#": "fsharp",
      ml: "ocaml",
      mli: "ocaml",
      sml: "ocaml",
      re: "rescript",
      reasonml: "rescript",
      scm: "scheme",
      rkt: "scheme",
      clj: "clojure",
      edn: "clojure",
      rb: "ruby",
      cr: "ruby",
      crystal: "ruby",
      gemspec: "ruby",
      podspec: "ruby",
      irb: "ruby",
      thor: "ruby",
      v: "verilog",
      sv: "verilog",
      svh: "verilog",
      objectivec: "objc",
      mm: "objc",
      "obj-c": "objc",
      "obj-c++": "objc",
      "objective-c++": "objc",
      dos: "batch",
      bat: "batch",
      cmd: "batch",
      lisp: "commonlisp",
      capnproto: "capnp",
      dts: "devicetree",
      adoc: "asciidoc",
      patch: "diff",
      golang: "go",
      jinja: "jinja2",
      django: "jinja2",
      jsp: "java",
      nixos: "nix",
      arm: "asm",
      mips: "asm",
      armasm: "asm",
      mipsasm: "asm",
      avrasm: "asm",
      pgsql: "sql",
      postgres: "sql",
      postgresql: "sql",
      n1ql: "sql",
      gradle: "groovy",
      "php-template": "php",
      "cmake.in": "cmake",
      md: "markdown",
      mkdown: "markdown",
      mkd: "markdown",
      py: "python",
      gyp: "python",
      ipython: "python",
      jsonc: "json",
      "python-repl": "python",
      pycon: "python",
      "node-repl": "javascript",
      "clojure-repl": "clojure",
      "erlang-repl": "erlang",
      "julia-repl": "julia",
      jldoctest: "julia",
    },
    I = new Set([...Object.keys(r.pb), "ansi"]),
    p = new Set([...I, ...Object.keys(f)]);
  function T(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    if (!E.test(t)) return;
    if (I.has(t)) return t;
    let n = f[t];
    if (null != n && I.has(n)) return n;
  }
  function m(e, t) {
    let n = i.use((0, _.W9)(e ?? "")),
      r = i.useMemo(() => d()(`${e}\0${t}`), [e, t]),
      a = i.useCallback(
        function () {
          let i,
            a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!a) {
            let e = A.get(r);
            if (null != e) return e;
          }
          if (
            !(function (e) {
              for (let t of e.split("\n")) if (t.length > 1e3) return !1;
              return !0;
            })(t) ||
            null == n ||
            h.has(r)
          )
            return;
          let s = t.endsWith("\n")
            ? t
            : `${t}
`;
          try {
            i = n.highlightToHtml(s);
          } catch (t) {
            (h.set(r, !0),
              u.A.captureException(t instanceof Error ? t : Error(String(t)), {
                tags: { app_context: "syntax_highlighting" },
                extra: { lang: e },
              }));
            return;
          }
          return (A.set(r, i), i);
        },
        [r, t, n, e],
      ),
      [s, l] = i.useState(a);
    return (
      i.useEffect(() => {
        l(a());
      }, [a]),
      i.useEffect(() => {
        let e = s?.missingInjections;
        if (null == e || 0 === e.length) return;
        let t = !1;
        for (let n of e)
          (0, _.W9)(n).then(() => {
            t ||
              l((e) => {
                let t = a(!0);
                return null == t ||
                  (null != e &&
                    e.html === t.html &&
                    (0, c.v)(e.missingInjections, t.missingInjections))
                  ? e
                  : t;
              });
          });
        return () => {
          t = !0;
        };
      }, [r, a, s?.missingInjections]),
      s?.html ?? null
    );
  }
  let g = Object.fromEntries(a.W$.map((e, t) => [e, `var(--custom-ansi-color-${t})`])),
    S = (0, a.rQ)(g);
  function N(e) {
    let t = {};
    (null != e.foreground && (t.color = S.value(e.foreground)),
      null != e.background && (t.backgroundColor = S.value(e.background)),
      e.decorations.has("bold") && (t.fontWeight = "bold"),
      e.decorations.has("italic") && (t.fontStyle = "italic"));
    let n = [];
    return (
      e.decorations.has("underline") && n.push("underline"),
      e.decorations.has("strikethrough") && n.push("line-through"),
      e.decorations.has("overline") && n.push("overline"),
      n.length > 0 && (t.textDecorationLine = n.join(" ")),
      Object.keys(t).length > 0 ? t : void 0
    );
  }
}
