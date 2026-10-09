/* Recovered shipped factory. Module 244912.
 * Source: recovered/web/assets/055a64c6e00c9659.js
 * UTF-16 property offsets: 7899..8401
 * Raw property SHA-256: 5cd65c8ce3edfa934c133722b4ecdde10ef5687233972490bc4e8fb3041520db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => a });
  var n = i(582128),
    l = i(500345),
    r = i(2242),
    o = i(202541),
    s = i(660183);
  function a(e) {
    return n.useMemo(() => {
      let t = r.p$.map((e) => ({
          value: e,
          label:
            e.interval === o.WT.DAY && 7 === e.interval_count
              ? s.intl.formatToPlainString(s.t.XfSsr1, { defaultLimit: (0, l.Gg)(e) })
              : (0, l.Gg)(e),
          isDefault: e.interval === o.WT.DAY && 7 === e.interval_count,
        })),
        i =
          null != e
            ? t.find(
                (t) =>
                  null != t.value &&
                  t.value.interval === e.interval &&
                  t.value.interval_count === e.interval_count,
              )?.value
            : e;
      return { options: t, selectedOption: i };
    }, [e]);
  }
}
