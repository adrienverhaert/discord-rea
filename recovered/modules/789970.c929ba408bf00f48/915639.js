/* Recovered shipped factory. Module 915639.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 185586..205233
 * Raw property SHA-256: 852e5723f606765afd9d782ddff4a0c13087c7fa4dd34f0b8dcc9da7153a6c2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  async function i(e) {
    return null;
  }
  r.d(t, { pb: () => l, A: () => h });
  class n extends Error {
    kind;
    constructor(e, t) {
      (super(t), (this.name = "ArboriumError"), (this.kind = e));
    }
  }
  function o(e, t) {
    if (0 === t.length) return [0, 0];
    let r = c.encode(t),
      i = e._malloc(r.length);
    return (e.HEAPU8.set(r, i), [i, r.length]);
  }
  async function s(e) {
    return e instanceof URL ? u(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
  }
  async function a(e) {
    if ("string" == typeof e) return e;
    let t = await u(e);
    return d.decode(t);
  }
  async function u(e) {
    let t = await i(e);
    if (t) return t;
    let r = await fetch(e);
    if (!r.ok)
      throw new n("asset-fetch-failed", `failed to fetch ${e.href}: ${r.status} ${r.statusText}`);
    return new Uint8Array(await r.arrayBuffer());
  }
  let c = new TextEncoder(),
    d = new TextDecoder(),
    l = {
      ada: {
        languageId: "ada",
        languageExport: "tree_sitter_ada",
        wasm: new URL(r(554724), r.b),
        highlights: new URL(r(185621), r.b),
        locals: new URL(r(316690), r.b),
      },
      agda: {
        languageId: "agda",
        languageExport: "tree_sitter_agda",
        wasm: new URL(r(544958), r.b),
        highlights: new URL(r(308970), r.b),
      },
      asciidoc: {
        languageId: "asciidoc",
        languageExport: "tree_sitter_asciidoc",
        wasm: new URL(r(492338), r.b),
        highlights: new URL(r(501958), r.b),
      },
      asm: {
        languageId: "asm",
        languageExport: "tree_sitter_asm",
        wasm: new URL(r(691384), r.b),
        highlights: new URL(r(796510), r.b),
        injections: new URL(r(445323), r.b),
      },
      awk: {
        languageId: "awk",
        languageExport: "tree_sitter_awk",
        wasm: new URL(r(151408), r.b),
        highlights: new URL(r(371672), r.b),
      },
      bash: {
        languageId: "bash",
        languageExport: "tree_sitter_bash",
        wasm: new URL(r(996928), r.b),
        highlights: new URL(r(253475), r.b),
      },
      batch: {
        languageId: "batch",
        languageExport: "tree_sitter_batch",
        wasm: new URL(r(901052), r.b),
        highlights: new URL(r(820825), r.b),
      },
      c: {
        languageId: "c",
        languageExport: "tree_sitter_c",
        wasm: new URL(r(623584), r.b),
        highlights: new URL(r(371524), r.b),
      },
      "c-sharp": {
        languageId: "c-sharp",
        languageExport: "tree_sitter_c_sharp",
        wasm: new URL(r(533440), r.b),
        highlights: new URL(r(501721), r.b),
      },
      caddy: {
        languageId: "caddy",
        languageExport: "tree_sitter_caddy",
        wasm: new URL(r(284020), r.b),
        highlights: new URL(r(718266), r.b),
      },
      capnp: {
        languageId: "capnp",
        languageExport: "tree_sitter_capnp",
        wasm: new URL(r(867888), r.b),
        highlights: new URL(r(253515), r.b),
        injections: new URL(r(785462), r.b),
        locals: new URL(r(427200), r.b),
      },
      cedar: {
        languageId: "cedar",
        languageExport: "tree_sitter_cedar",
        wasm: new URL(r(747060), r.b),
        highlights: new URL(r(582242), r.b),
      },
      cedarschema: {
        languageId: "cedarschema",
        languageExport: "tree_sitter_cedarschema",
        wasm: new URL(r(662604), r.b),
        highlights: new URL(r(843389), r.b),
      },
      clojure: {
        languageId: "clojure",
        languageExport: "tree_sitter_clojure",
        wasm: new URL(r(124332), r.b),
        highlights: new URL(r(632781), r.b),
      },
      cmake: {
        languageId: "cmake",
        languageExport: "tree_sitter_cmake",
        wasm: new URL(r(555808), r.b),
        highlights: new URL(r(135538), r.b),
        injections: new URL(r(547431), r.b),
      },
      commonlisp: {
        languageId: "commonlisp",
        languageExport: "tree_sitter_commonlisp",
        wasm: new URL(r(122250), r.b),
        highlights: new URL(r(713796), r.b),
      },
      cpp: {
        languageId: "cpp",
        languageExport: "tree_sitter_cpp",
        wasm: new URL(r(590264), r.b),
        highlights: new URL(r(983420), r.b),
        injections: new URL(r(489565), r.b),
      },
      css: {
        languageId: "css",
        languageExport: "tree_sitter_css",
        wasm: new URL(r(328592), r.b),
        highlights: new URL(r(681166), r.b),
      },
      d: {
        languageId: "d",
        languageExport: "tree_sitter_d",
        wasm: new URL(r(222260), r.b),
        highlights: new URL(r(687429), r.b),
      },
      dart: {
        languageId: "dart",
        languageExport: "tree_sitter_dart",
        wasm: new URL(r(712298), r.b),
        highlights: new URL(r(108572), r.b),
      },
      devicetree: {
        languageId: "devicetree",
        languageExport: "tree_sitter_devicetree",
        wasm: new URL(r(640208), r.b),
        highlights: new URL(r(502907), r.b),
      },
      diff: {
        languageId: "diff",
        languageExport: "tree_sitter_diff",
        wasm: new URL(r(445854), r.b),
        highlights: new URL(r(655582), r.b),
      },
      dockerfile: {
        languageId: "dockerfile",
        languageExport: "tree_sitter_dockerfile",
        wasm: new URL(r(571368), r.b),
        highlights: new URL(r(604623), r.b),
      },
      dot: {
        languageId: "dot",
        languageExport: "tree_sitter_dot",
        wasm: new URL(r(84912), r.b),
        highlights: new URL(r(992094), r.b),
        injections: new URL(r(404043), r.b),
      },
      elisp: {
        languageId: "elisp",
        languageExport: "tree_sitter_elisp",
        wasm: new URL(r(161064), r.b),
        highlights: new URL(r(180458), r.b),
      },
      elixir: {
        languageId: "elixir",
        languageExport: "tree_sitter_elixir",
        wasm: new URL(r(941694), r.b),
        highlights: new URL(r(817218), r.b),
        injections: new URL(r(842039), r.b),
      },
      elm: {
        languageId: "elm",
        languageExport: "tree_sitter_elm",
        wasm: new URL(r(993684), r.b),
        highlights: new URL(r(565989), r.b),
        injections: new URL(r(777084), r.b),
        locals: new URL(r(224578), r.b),
      },
      erlang: {
        languageId: "erlang",
        languageExport: "tree_sitter_erlang",
        wasm: new URL(r(934434), r.b),
        highlights: new URL(r(72382), r.b),
      },
      fish: {
        languageId: "fish",
        languageExport: "tree_sitter_fish",
        wasm: new URL(r(482784), r.b),
        highlights: new URL(r(807991), r.b),
      },
      fsharp: {
        languageId: "fsharp",
        languageExport: "tree_sitter_fsharp",
        wasm: new URL(r(584784), r.b),
        highlights: new URL(r(581583), r.b),
        injections: new URL(r(471586), r.b),
        locals: new URL(r(645372), r.b),
      },
      gleam: {
        languageId: "gleam",
        languageExport: "tree_sitter_gleam",
        wasm: new URL(r(441672), r.b),
        highlights: new URL(r(679453), r.b),
        injections: new URL(r(531860), r.b),
        locals: new URL(r(345322), r.b),
      },
      glsl: {
        languageId: "glsl",
        languageExport: "tree_sitter_glsl",
        wasm: new URL(r(115088), r.b),
        highlights: new URL(r(463989), r.b),
      },
      go: {
        languageId: "go",
        languageExport: "tree_sitter_go",
        wasm: new URL(r(847392), r.b),
        highlights: new URL(r(757283), r.b),
      },
      graphql: {
        languageId: "graphql",
        languageExport: "tree_sitter_graphql",
        wasm: new URL(r(117256), r.b),
        highlights: new URL(r(477092), r.b),
      },
      groovy: {
        languageId: "groovy",
        languageExport: "tree_sitter_groovy",
        wasm: new URL(r(867128), r.b),
        highlights: new URL(r(971567), r.b),
        injections: new URL(r(718850), r.b),
      },
      haskell: {
        languageId: "haskell",
        languageExport: "tree_sitter_haskell",
        wasm: new URL(r(56948), r.b),
        highlights: new URL(r(206965), r.b),
        injections: new URL(r(16076), r.b),
        locals: new URL(r(208626), r.b),
      },
      hcl: {
        languageId: "hcl",
        languageExport: "tree_sitter_hcl",
        wasm: new URL(r(370800), r.b),
        highlights: new URL(r(972942), r.b),
      },
      hlsl: {
        languageId: "hlsl",
        languageExport: "tree_sitter_hlsl",
        wasm: new URL(r(697922), r.b),
        highlights: new URL(r(449794), r.b),
      },
      html: {
        languageId: "html",
        languageExport: "tree_sitter_html",
        wasm: new URL(r(284030), r.b),
        highlights: new URL(r(911112), r.b),
        injections: new URL(r(495969), r.b),
      },
      idris: {
        languageId: "idris",
        languageExport: "tree_sitter_idris",
        wasm: new URL(r(561740), r.b),
        highlights: new URL(r(583152), r.b),
      },
      ini: {
        languageId: "ini",
        languageExport: "tree_sitter_ini",
        wasm: new URL(r(771944), r.b),
        highlights: new URL(r(363471), r.b),
      },
      java: {
        languageId: "java",
        languageExport: "tree_sitter_java",
        wasm: new URL(r(299080), r.b),
        highlights: new URL(r(883585), r.b),
      },
      javascript: {
        languageId: "javascript",
        languageExport: "tree_sitter_javascript",
        wasm: new URL(r(316662), r.b),
        highlights: new URL(r(646866), r.b),
        injections: new URL(r(70855), r.b),
        locals: new URL(r(66753), r.b),
      },
      jinja2: {
        languageId: "jinja2",
        languageExport: "tree_sitter_jinja2",
        wasm: new URL(r(848368), r.b),
        highlights: new URL(r(137323), r.b),
      },
      jq: {
        languageId: "jq",
        languageExport: "tree_sitter_jq",
        wasm: new URL(r(314786), r.b),
        highlights: new URL(r(20080), r.b),
      },
      json: {
        languageId: "json",
        languageExport: "tree_sitter_json",
        wasm: new URL(r(316712), r.b),
        highlights: new URL(r(187311), r.b),
      },
      julia: {
        languageId: "julia",
        languageExport: "tree_sitter_julia",
        wasm: new URL(r(285568), r.b),
        highlights: new URL(r(324828), r.b),
      },
      kotlin: {
        languageId: "kotlin",
        languageExport: "tree_sitter_kotlin",
        wasm: new URL(r(787434), r.b),
        highlights: new URL(r(823504), r.b),
      },
      lean: {
        languageId: "lean",
        languageExport: "tree_sitter_lean",
        wasm: new URL(r(655652), r.b),
        highlights: new URL(r(281161), r.b),
      },
      lua: {
        languageId: "lua",
        languageExport: "tree_sitter_lua",
        wasm: new URL(r(718992), r.b),
        highlights: new URL(r(871659), r.b),
        injections: new URL(r(273558), r.b),
        locals: new URL(r(864928), r.b),
      },
      markdown: {
        languageId: "markdown",
        languageExport: "tree_sitter_markdown",
        wasm: new URL(r(86414), r.b),
        highlights: new URL(r(9916), r.b),
        injections: new URL(r(516061), r.b),
      },
      markdown_inline: {
        languageId: "markdown_inline",
        languageExport: "tree_sitter_markdown_inline",
        wasm: new URL(r(348820), r.b),
        highlights: new URL(r(581934), r.b),
        injections: new URL(r(858376), r.b),
      },
      matlab: {
        languageId: "matlab",
        languageExport: "tree_sitter_matlab",
        wasm: new URL(r(675046), r.b),
        highlights: new URL(r(955268), r.b),
      },
      meson: {
        languageId: "meson",
        languageExport: "tree_sitter_meson",
        wasm: new URL(r(835952), r.b),
        highlights: new URL(r(448407), r.b),
      },
      ninja: {
        languageId: "ninja",
        languageExport: "tree_sitter_ninja",
        wasm: new URL(r(75464), r.b),
        highlights: new URL(r(980429), r.b),
      },
      nix: {
        languageId: "nix",
        languageExport: "tree_sitter_nix",
        wasm: new URL(r(242508), r.b),
        highlights: new URL(r(714370), r.b),
        injections: new URL(r(739191), r.b),
        locals: new URL(r(227473), r.b),
      },
      objc: {
        languageId: "objc",
        languageExport: "tree_sitter_objc",
        wasm: new URL(r(45456), r.b),
        highlights: new URL(r(974591), r.b),
        injections: new URL(r(860306), r.b),
        locals: new URL(r(373196), r.b),
      },
      ocaml: {
        languageId: "ocaml",
        languageExport: "tree_sitter_ocaml",
        wasm: new URL(r(916372), r.b),
        highlights: new URL(r(602297), r.b),
        locals: new URL(r(347294), r.b),
      },
      perl: {
        languageId: "perl",
        languageExport: "tree_sitter_perl",
        wasm: new URL(r(571834), r.b),
        highlights: new URL(r(358060), r.b),
        injections: new URL(r(486221), r.b),
      },
      php: {
        languageId: "php",
        languageExport: "tree_sitter_php",
        wasm: new URL(r(247524), r.b),
        highlights: new URL(r(910825), r.b),
        injections: new URL(r(323e3), r.b),
      },
      postscript: {
        languageId: "postscript",
        languageExport: "tree_sitter_postscript",
        wasm: new URL(r(628490), r.b),
        highlights: new URL(r(980524), r.b),
      },
      powershell: {
        languageId: "powershell",
        languageExport: "tree_sitter_powershell",
        wasm: new URL(r(177910), r.b),
        highlights: new URL(r(449048), r.b),
      },
      prolog: {
        languageId: "prolog",
        languageExport: "tree_sitter_prolog",
        wasm: new URL(r(330234), r.b),
        highlights: new URL(r(290858), r.b),
      },
      python: {
        languageId: "python",
        languageExport: "tree_sitter_python",
        wasm: new URL(r(181712), r.b),
        highlights: new URL(r(425335), r.b),
      },
      query: {
        languageId: "query",
        languageExport: "tree_sitter_query",
        wasm: new URL(r(892256), r.b),
        highlights: new URL(r(214685), r.b),
        injections: new URL(r(840660), r.b),
      },
      r: {
        languageId: "r",
        languageExport: "tree_sitter_r",
        wasm: new URL(r(157456), r.b),
        highlights: new URL(r(652715), r.b),
        locals: new URL(r(396576), r.b),
      },
      rego: {
        languageId: "rego",
        languageExport: "tree_sitter_rego",
        wasm: new URL(r(705750), r.b),
        highlights: new URL(r(968038), r.b),
        locals: new URL(r(914189), r.b),
      },
      rescript: {
        languageId: "rescript",
        languageExport: "tree_sitter_rescript",
        wasm: new URL(r(834640), r.b),
        highlights: new URL(r(855995), r.b),
        injections: new URL(r(479846), r.b),
        locals: new URL(r(539152), r.b),
      },
      ron: {
        languageId: "ron",
        languageExport: "tree_sitter_ron",
        wasm: new URL(r(762296), r.b),
        highlights: new URL(r(342870), r.b),
      },
      ruby: {
        languageId: "ruby",
        languageExport: "tree_sitter_ruby",
        wasm: new URL(r(282952), r.b),
        highlights: new URL(r(221081), r.b),
      },
      rust: {
        languageId: "rust",
        languageExport: "tree_sitter_rust_orchard",
        wasm: new URL(r(585232), r.b),
        highlights: new URL(r(544211), r.b),
        injections: new URL(r(153278), r.b),
      },
      scala: {
        languageId: "scala",
        languageExport: "tree_sitter_scala",
        wasm: new URL(r(715408), r.b),
        highlights: new URL(r(636155), r.b),
        locals: new URL(r(798928), r.b),
      },
      scheme: {
        languageId: "scheme",
        languageExport: "tree_sitter_scheme",
        wasm: new URL(r(910038), r.b),
        highlights: new URL(r(499150), r.b),
      },
      scss: {
        languageId: "scss",
        languageExport: "tree_sitter_scss",
        wasm: new URL(r(42040), r.b),
        highlights: new URL(r(581365), r.b),
      },
      solidity: {
        languageId: "solidity",
        languageExport: "tree_sitter_solidity",
        wasm: new URL(r(711194), r.b),
        highlights: new URL(r(93492), r.b),
        locals: new URL(r(307379), r.b),
      },
      sparql: {
        languageId: "sparql",
        languageExport: "tree_sitter_sparql",
        wasm: new URL(r(622914), r.b),
        highlights: new URL(r(512564), r.b),
      },
      sql: {
        languageId: "sql",
        languageExport: "tree_sitter_sql",
        wasm: new URL(r(295832), r.b),
        highlights: new URL(r(631189), r.b),
      },
      "ssh-config": {
        languageId: "ssh-config",
        languageExport: "tree_sitter_ssh_config",
        wasm: new URL(r(805938), r.b),
        highlights: new URL(r(400774), r.b),
        injections: new URL(r(557011), r.b),
      },
      starlark: {
        languageId: "starlark",
        languageExport: "tree_sitter_starlark",
        wasm: new URL(r(317952), r.b),
        highlights: new URL(r(757197), r.b),
        injections: new URL(r(362116), r.b),
        locals: new URL(r(607930), r.b),
      },
      styx: {
        languageId: "styx",
        languageExport: "tree_sitter_styx",
        wasm: new URL(r(793104), r.b),
        highlights: new URL(r(789227), r.b),
        injections: new URL(r(447638), r.b),
      },
      svelte: {
        languageId: "svelte",
        languageExport: "tree_sitter_svelte",
        wasm: new URL(r(463302), r.b),
        highlights: new URL(r(582814), r.b),
        injections: new URL(r(994763), r.b),
        locals: new URL(r(756661), r.b),
      },
      swift: {
        languageId: "swift",
        languageExport: "tree_sitter_swift",
        wasm: new URL(r(682004), r.b),
        highlights: new URL(r(259850), r.b),
        injections: new URL(r(134399), r.b),
        locals: new URL(r(917129), r.b),
      },
      textproto: {
        languageId: "textproto",
        languageExport: "tree_sitter_textproto",
        wasm: new URL(r(658400), r.b),
        highlights: new URL(r(264834), r.b),
      },
      thrift: {
        languageId: "thrift",
        languageExport: "tree_sitter_thrift",
        wasm: new URL(r(40570), r.b),
        highlights: new URL(r(584122), r.b),
        injections: new URL(r(259439), r.b),
        locals: new URL(r(720793), r.b),
      },
      tlaplus: {
        languageId: "tlaplus",
        languageExport: "tree_sitter_tlaplus",
        wasm: new URL(r(703724), r.b),
        highlights: new URL(r(58894), r.b),
        locals: new URL(r(661637), r.b),
      },
      toml: {
        languageId: "toml",
        languageExport: "tree_sitter_toml",
        wasm: new URL(r(155308), r.b),
        highlights: new URL(r(191649), r.b),
      },
      tsx: {
        languageId: "tsx",
        languageExport: "tree_sitter_tsx",
        wasm: new URL(r(21256), r.b),
        highlights: new URL(r(613110), r.b),
        locals: new URL(r(757629), r.b),
      },
      typescript: {
        languageId: "typescript",
        languageExport: "tree_sitter_typescript",
        wasm: new URL(r(733926), r.b),
        highlights: new URL(r(648506), r.b),
        locals: new URL(r(194201), r.b),
      },
      typst: {
        languageId: "typst",
        languageExport: "tree_sitter_typst",
        wasm: new URL(r(262848), r.b),
        highlights: new URL(r(13079), r.b),
        injections: new URL(r(960138), r.b),
      },
      verilog: {
        languageId: "verilog",
        languageExport: "tree_sitter_verilog",
        wasm: new URL(r(502768), r.b),
        highlights: new URL(r(486859), r.b),
      },
      vhdl: {
        languageId: "vhdl",
        languageExport: "tree_sitter_vhdl",
        wasm: new URL(r(276912), r.b),
        highlights: new URL(r(858987), r.b),
      },
      vim: {
        languageId: "vim",
        languageExport: "tree_sitter_vim",
        wasm: new URL(r(699736), r.b),
        highlights: new URL(r(330909), r.b),
        injections: new URL(r(440532), r.b),
      },
      vue: {
        languageId: "vue",
        languageExport: "tree_sitter_vue",
        wasm: new URL(r(769320), r.b),
        highlights: new URL(r(4081), r.b),
        injections: new URL(r(751968), r.b),
      },
      wit: {
        languageId: "wit",
        languageExport: "tree_sitter_wit",
        wasm: new URL(r(650024), r.b),
        highlights: new URL(r(856145), r.b),
        injections: new URL(r(413056), r.b),
      },
      x86asm: {
        languageId: "x86asm",
        languageExport: "tree_sitter_x86asm",
        wasm: new URL(r(26558), r.b),
        highlights: new URL(r(489700), r.b),
      },
      xml: {
        languageId: "xml",
        languageExport: "tree_sitter_xml",
        wasm: new URL(r(897836), r.b),
        highlights: new URL(r(730180), r.b),
      },
      yaml: {
        languageId: "yaml",
        languageExport: "tree_sitter_yaml",
        wasm: new URL(r(30290), r.b),
        highlights: new URL(r(395958), r.b),
      },
      yuri: {
        languageId: "yuri",
        languageExport: "tree_sitter_yuri",
        wasm: new URL(r(78170), r.b),
        highlights: new URL(r(686146), r.b),
      },
      zig: {
        languageId: "zig",
        languageExport: "tree_sitter_zig",
        wasm: new URL(r(256976), r.b),
        highlights: new URL(r(692027), r.b),
        injections: new URL(r(95334), r.b),
      },
      zsh: {
        languageId: "zsh",
        languageExport: "tree_sitter_zsh",
        wasm: new URL(r(727216), r.b),
        highlights: new URL(r(371952), r.b),
      },
    };
  async function h() {
    let e = await g(),
      [t, i] = await Promise.all([s(new URL(r(79445), r.b)), s(new URL(r(531031), r.b))]),
      n = await e({ wasmBinary: t }),
      o = await n.loadWebAssemblyModule(i, { loadAsync: !0 });
    return new f(n, o);
  }
  class f {
    host;
    abi;
    constructor(e, t) {
      ((this.host = e), (this.abi = t));
    }
    async loadGrammar(e) {
      if (!e.languageId)
        throw new n(
          "grammar-registration-failed",
          "loadGrammar: languageId is required (must match the name referenced by injection queries)",
        );
      let [t, r, i, u] = await Promise.all([
          s(e.wasm),
          a(e.highlights),
          void 0 === e.injections ? "" : a(e.injections),
          void 0 === e.locals ? "" : a(e.locals),
        ]),
        c = (function (e, t) {
          if (void 0 !== t) {
            let r = e[t];
            if ("function" != typeof r)
              throw new n(
                "grammar-language-export-missing",
                `grammar module has no function export named ${JSON.stringify(t)}`,
              );
            return r;
          }
          let r = Object.keys(e).filter(
            (t) => t.startsWith("tree_sitter_") && "function" == typeof e[t],
          );
          if (0 === r.length)
            throw new n(
              "grammar-language-export-missing",
              "grammar module has no function export starting with tree_sitter_",
            );
          if (r.length > 1)
            throw new n(
              "grammar-language-export-missing",
              `grammar module has multiple tree_sitter_* exports: ${r.join(", ")}. Pass options.languageExport to disambiguate.`,
            );
          return e[r[0]];
        })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
      if (!c)
        throw new n("grammar-registration-failed", "grammar tree_sitter_* export returned null");
      let [d, l] = o(this.host, e.languageId),
        [h, f] = o(this.host, r),
        [m, g] = o(this.host, i),
        [_, b] = o(this.host, u),
        v = 0;
      try {
        v = this.abi.arborium_rt_register_grammar(c, d, l, h, f, m, g, _, b);
      } finally {
        (d && this.host._free(d),
          h && this.host._free(h),
          m && this.host._free(m),
          _ && this.host._free(_));
      }
      if (0 === v)
        throw new n(
          "grammar-registration-failed",
          "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
        );
      return new p(this, v, c, e.languageId);
    }
  }
  class p {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, t, r, i) {
      ((this.runtime = e), (this.id = t), (this.languagePtr = r), (this.languageId = i));
    }
    createSession() {
      this.#t();
      let e = this.runtime.abi.arborium_rt_create_session(this.id);
      if (0 === e)
        throw new n("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
      return new m(this, e);
    }
    unregister() {
      this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #t() {
      if (this.#e)
        throw new n("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
  }
  class m {
    grammar;
    id;
    #r = !1;
    constructor(e, t) {
      ((this.grammar = e), (this.id = t));
    }
    setText(e) {
      this.#t();
      let [t, r] = o(this.grammar.runtime.host, e);
      try {
        this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, r);
      } finally {
        t && this.grammar.runtime.host._free(t);
      }
    }
    parse() {
      return (
        this.#t(),
        this.#i(
          "parse-failed",
          (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
          (e) =>
            0 === e.length
              ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 }
              : JSON.parse(e),
        )
      );
    }
    highlightToSpans(e = {}) {
      this.#t();
      let t = e.maxInjectionDepth ?? 3,
        r = this.#i(
          "highlight-failed",
          (e, r) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, r),
          (e) =>
            0 === e.length
              ? { spans: [], missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
              : JSON.parse(e),
        );
      return {
        spans: r.spans,
        missingInjections: r.missing_injections,
        outOfFuelLanguages: r.out_of_fuel_languages,
        fuelUsed: r.fuel_used,
      };
    }
    highlightToHtml(e = {}) {
      this.#t();
      let t = e.maxInjectionDepth ?? 3,
        r = e.format ?? { kind: "custom-elements" },
        { host: i } = this.grammar.runtime,
        { code: n, prefix: s } = (function (e) {
          switch (e.kind) {
            case "custom-elements":
              return { code: 0, prefix: "" };
            case "custom-elements-with-prefix":
              return { code: 1, prefix: e.prefix };
            case "class-names":
              return { code: 2, prefix: "" };
            case "class-names-with-prefix":
              return { code: 3, prefix: e.prefix };
          }
        })(r),
        [a, u] = o(i, s);
      try {
        let e = this.#i(
          "highlight-failed",
          (e, r) =>
            this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, n, a, u, e, r),
          (e) =>
            0 === e.length
              ? { html: "", missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
              : JSON.parse(e),
        );
        return {
          html: e.html,
          missingInjections: e.missing_injections,
          outOfFuelLanguages: e.out_of_fuel_languages,
          fuelUsed: e.fuel_used,
        };
      } finally {
        a && i._free(a);
      }
    }
    cancel() {
      (this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
      this.#r || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#r = !0));
    }
    #t() {
      if (this.#r) throw new n("session-creation-failed", `session ${this.id} has been freed`);
    }
    #i(e, t, r) {
      let { host: i, abi: o } = this.grammar.runtime,
        s = i._malloc(4),
        a = i._malloc(4);
      try {
        let u = t(s, a);
        if (0 !== u) throw new n(e, `arborium_rt call returned status ${u}`);
        let c = i.getValue(s, "i32"),
          l = i.getValue(a, "i32");
        if (0 === l) return r("");
        try {
          return r(0 === l ? "" : d.decode(i.HEAPU8.subarray(c, c + l)));
        } finally {
          o.arborium_rt_free(c, l);
        }
      } finally {
        (i._free(s), i._free(a));
      }
    }
  }
  async function g() {
    return (await r.e("379098").then(r.bind(r, 623777))).default;
  }
}
