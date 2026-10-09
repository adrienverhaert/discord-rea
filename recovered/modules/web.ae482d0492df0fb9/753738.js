/* Recovered shipped factory. Module 753738.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5032392..5033330
 * Raw property SHA-256: 07e8d17654b19106954117a978a43a133d68e1e26fd5798afd06ea2c6686dfd1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Nr: () => o, PD: () => u, cw: () => c, lH: () => l, yf: () => d });
  var i = n(779185),
    r = n(734057),
    a = n(652215),
    s = n(660183);
  class l extends Error {}
  class o extends Error {}
  let d = new Set([
    a.t02.AUTOMOD_MESSAGE_BLOCKED,
    a.t02.AUTOMOD_TITLE_BLOCKED,
    a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
  ]);
  function c(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!d.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let l = r.A.getChannel(t);
    return l?.isThread()
      ? s.intl.string(s.t.DVdG9E)
      : (l?.isForumPost() || l?.isForumLikeChannel()) &&
          (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED)
        ? s.intl.string(s.t.ipgKDg)
        : null;
  }
  function u(e, t) {
    let n,
      a = c(t);
    return null != a
      ? a
      : null == e
        ? s.intl.string(s.t.zQ69pv)
        : ((n = r.A.getChannel(e.message.channelId)),
          (0, i.Qn)(e)
            ? s.intl.string(s.t.bU6o0z)
            : n?.isThread()
              ? s.intl.string(s.t.DVdG9E)
              : n?.isForumPost() || n?.isForumLikeChannel()
                ? s.intl.string(s.t.ipgKDg)
                : s.intl.string(s.t.zQ69pv));
  }
}
