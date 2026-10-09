/* Recovered shipped factory. Module 566903.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2705726..2707124
 * Raw property SHA-256: 2a217c62dff8453996c31bb4bafe00f76d190058912e926c3911d5cc52259277
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(599026),
    r = n(440594),
    a = n(541806),
    s = n(765379),
    l = n(90644),
    o = n(189117),
    d = n(82149),
    c = n(652215),
    u = n(660183);
  function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = e?.name === "" ? null : e?.name,
      _ = e?.details === "" ? null : e?.details,
      E = e?.state === "" ? null : e?.state,
      A = e?.type === c.$pd.STREAMING ? (_ ?? n) : n;
    if (
      (e?.status_display_type === i.A.NAME && null != n
        ? (A = n)
        : e?.status_display_type === i.A.STATE && null != E
          ? (A = E)
          : e?.status_display_type === i.A.DETAILS && null != _ && (A = _),
      (0, s.A)(e) || (0, o.$_)(e))
    ) {
      let e = (0, r.A)(n);
      return { text: e, tooltip: e };
    }
    if (e?.type === c.$pd.PLAYING && null != A)
      return { text: A, tooltip: u.intl.formatToPlainString(u.t.lFApmz, { game: A }) };
    if ((0, l.A)(e) && t && null != E) {
      let e = E.split("; ")?.join(", ");
      return { text: e, tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: e }) };
    }
    return (0, d.Cy)(e) && null != n
      ? { text: n, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: n }) }
      : e?.type === c.$pd.LISTENING && null != A
        ? { text: A, tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: A }) }
        : (0, a.A)(e) && t && null != _
          ? { text: _, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: _ }) }
          : e?.type === c.$pd.WATCHING && null != A
            ? { text: A, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: A }) }
            : e?.type === c.$pd.COMPETING && null != A
              ? { text: A, tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, { name: A }) }
              : e?.type === c.$pd.STREAMING && null != A
                ? { text: A, tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], { name: A }) }
                : {};
  }
}
