/* Recovered shipped factory. Module 492841.
 * Source: recovered/web/assets/290017bbf455a3c5.js
 * UTF-16 property offsets: 95..434
 * Raw property SHA-256: fbd1e4f4682f6925297b377928512072e90f1022c31a730473d869d1ce11e628
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, i, e) {
  e.d(i, { A: () => a });
  var t = e(406704),
    c = e(576705),
    r = e(143413),
    o = e(652215);
  function a(n, i) {
    let e = !i.isSystemDM() && !(0, r.A)(n),
      a = c.A.can(o.xBc.PIN_MESSAGES, i) && c.A.can(o.xBc.READ_MESSAGE_HISTORY, i);
    return (
      e &&
      (a || i.isPrivate()) &&
      (0, t.jr)(i) &&
      i.type !== o.rbe.GUILD_VOICE &&
      i.type !== o.rbe.GUILD_STAGE_VOICE &&
      i.type !== o.rbe.MEDIA_THREAD
    );
  }
}
