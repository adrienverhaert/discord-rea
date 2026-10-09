/* Recovered shipped factory. Module 373963.
 * Source: recovered/web/assets/290017bbf455a3c5.js
 * UTF-16 property offsets: 2750..3121
 * Raw property SHA-256: 446b18b5d767824f713fa57aca2f2fc144999bd333c8fe7601052efda170aaf9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, i, e) {
  e.d(i, { A: () => l });
  var t = e(477900);
  e(582128);
  var c = e(477782),
    r = e(624479),
    o = e(723702),
    a = e(19575),
    s = e(660183);
  function l(n, i) {
    return o.isPlatformEmbedded && n?.length !== 0
      ? (0, t.jsx)(c.Dr, {
          id: "copy",
          label: s.intl.string(s.t.OpuAlK),
          shortcut: (0, o.isMac)() ? "\u2318C" : "Ctrl+C",
          leadingAccessory: { type: "icon", icon: r.CopyIcon },
          action: () => {
            (a.Ay.copy(n), i?.focus());
          },
        })
      : null;
  }
}
