/* Recovered shipped factory. Module 518960.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9800183..9803021
 * Raw property SHA-256: d626113d97d8a2c09c4cd6fd85f24bf4763cbf7207b0c77745f92e4eddec3c61
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => y, V: () => L });
  var i = n(367513),
    r = n(148494),
    a = n(608299),
    s = n(494921),
    l = n(280889),
    o = n(111542),
    d = n(666860),
    c = n(198052),
    u = n(795129),
    _ = n(409481),
    E = n(274652),
    A = n(346293),
    h = n(823099),
    f = n(522602),
    I = n(287809),
    p = n(174459),
    T = n(453771),
    m = n(158045),
    g = n(292348),
    S = n(382287),
    N = n(652215),
    C = n(381941),
    O = n(202541),
    R = n(660183);
  function L(e, t, n) {
    let i = I.default.getCurrentUser(),
      r = e.guild_id,
      a = T.o2(r),
      l = (0, _.C)(a),
      o = Array.from(t).map((e) => e.size),
      c = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
      u = o.reduce((e, t) => e + t, 0),
      E = o.length > 0 ? Math.max(...o) : 0,
      h = o.length;
    if (E > l) {
      let t = n?.reduce((e, t) => e + t, 0);
      ((0, d.zV)(
        N.HAw.FILE_SIZE_LIMIT_EXCEEDED,
        (0, A.s)({
          channelId: e.id,
          guildId: r,
          userIndividualFileSizeLimit: a,
          numAttachments: h,
          preCompressionFileSizes: o,
          preCompressionAggregateSize: u,
          postCompressionFileSizes: n,
          postCompressionAggregateSize: t,
          attachmentMimeTypes: c,
          errorType: C.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
        }),
      ),
        (0, s.openUploadError)({
          title: R.intl.string(R.t["/tGlcj"]),
          help: (0, S.WQ)(i, r, l),
          showPremiumUpsell: !(0, m.YE)(i, O.PremiumTypes.TIER_2),
          fileSize: E,
          effectiveMaxSize: l,
        }));
      return;
    }
    (0, s.openUploadError)({
      title: R.intl.string(R.t["/tGlcj"]),
      help: R.intl.formatToPlainString(R.t.tUOJdH, {
        maxSize: T.Hb((0, g.jS)({ location: "showUploadFileSizeExceededError" })),
      }),
    });
  }
  async function y(e, t, n) {
    let {
      filesMetadata: d,
      requireConfirm: _ = !0,
      isThumbnail: A = !1,
      origin: I,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length)
      throw Error("Unexpected mismatch between files and file metadata");
    let T = t.getGuildId(),
      m = Array.from(e),
      g = m.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
      (await Promise.resolve(),
      (await Promise.all(m.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(
        Boolean,
      ))
    )
      return void (0, s.openUploadError)({
        title: R.intl.string(R.t.B3vFdU),
        help: R.intl.string(R.t["9ZpT2C"]),
      });
    let O = m.map((e, t) => ({
        file: e,
        platform: E.x.WEB,
        isThumbnail: A,
        origin: I,
        compressionMetadata: g[t],
        ...d?.[t],
      })),
      y = await Promise.all(O.map(o.N)),
      D = y.map((e) => e.file);
    if ((0, S.fJ)({ files: D, guildId: T })) return void L(t, D);
    if (f.A.getUploadCount(t.id, n) + y.length > N.XgB) {
      ((0, s.openUploadError)({
        title: R.intl.string(R.t.wOr6hB),
        help: R.intl.formatToPlainString(R.t["qqyp/e"], { limit: N.XgB }),
      }),
        p.default.track(N.HAw.UPLOAD_FILE_LIMIT_ERROR, {
          existing_count: f.A.getUploadCount(t.id, n),
          new_count: y.length,
        }));
      return;
    }
    if (
      ((t.type !== N.rbe.GUILD_VOICE && t.type !== N.rbe.GUILD_STAGE_VOICE) ||
        c.A.getChatOpen(t.id) ||
        i.A.updateChatOpen(t.id, !0),
      _)
    )
      a.A.addFiles({ files: y, channelId: t.id, draftType: n });
    else {
      let e = y.map((e) => new l.bK(e, t.id));
      r.A.sendMessage(
        t.id,
        { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
        void 0,
        {
          eagerDispatch: !1,
          attachmentsToUpload: e,
          location: C.Hx.INSTANT_UPLOAD,
          onAttachmentUploadError: (e, n, i) => {
            (0, h.k)({
              file: e,
              guildId: t.getGuildId(),
              analyticsLocations: [],
              code: n,
              reason: i,
            });
          },
        },
      );
    }
  }
}
