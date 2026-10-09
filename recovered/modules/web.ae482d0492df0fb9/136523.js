/* Recovered shipped factory. Module 136523.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3187061..3189442
 * Raw property SHA-256: 82403be108e59938119b8afe0873559216cce3ce9b57c91e9f360deb48242fba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { default: () => O, m: () => C });
  var i = n(477900),
    r = n(582128),
    a = n(702841),
    s = n(319400),
    l = n(452027),
    o = n(772707),
    d = n(435183),
    c = n(148494),
    u = n(47167),
    _ = n(882840),
    E = n(355622),
    A = n(408018),
    h = n(479909),
    f = n(451909),
    I = n(763827),
    p = n(287809),
    T = n(174459),
    m = n(652215),
    g = n(660183),
    S = n(809401),
    N = n(379649);
  let C = "VoiceChannelStatusModal";
  function O(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: O, onClose: R } = e,
      L = (0, _.l)(t),
      y = (0, a.bG)([I.A], () => I.A.getMediaSessionId()),
      [D, v] = r.useState(L ?? ""),
      [b, M] = r.useState(!1),
      [P, U] = r.useState(null),
      w = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
      G = (0, u.Ay)(t),
      x = D.length > 500;
    function k(e) {
      U(new s.LG(e, e.status).getAnyErrorMessage());
    }
    async function F(e) {
      (D === L && R(), e?.preventDefault(), U(null), M(!0));
      let n = D.length,
        i = D.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
        r = f.Ay.parse(t, D),
        { hasErrors: a } = (function (e) {
          let { invalidEmojis: n } = e;
          if (null != n && n.length > 0) {
            let { errorMessage: e } = c.A.validateMessage(n, w, t.id);
            return (U(e), M(!1), { hasErrors: !0 });
          }
          return { hasErrors: !1 };
        })(r);
      if (!a) {
        try {
          let e = await d.Ay.updateVoiceChannelStatus(t.id, r.content);
          204 === e.status
            ? (T.default.track(m.HAw.VOICE_CHANNEL_TOPIC_SET, {
                guild_id: t.guild_id,
                channel_id: t.id,
                media_session_id: y,
                raw_length: n,
                text_length: i,
                location_stack: O,
              }),
              R())
            : k(e);
        } catch (e) {
          k(e);
        }
        M(!1);
      }
    }
    r.useEffect(() => {
      T.default.track(m.HAw.OPEN_MODAL, {
        type: "Voice Channel Topic Modal",
        guild_id: t.guild_id,
        location_stack: O,
      });
    }, [t.guild_id, O]);
    let [B, V] = r.useState((0, A.x7)(D));
    async function H() {
      return (x || b || (await F()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }));
    }
    let j = (0, i.jsx)(l.D, {
      label: g.intl.string(g.t.Fq5lwN),
      errorMessage: P,
      children: (0, i.jsx)(h.Ay, {
        innerClassName: S.Tg,
        characterCountClassName: S.Dq,
        textValue: D,
        richValue: B,
        placeholder: g.intl.formatToPlainString(g.t.DUXxBh, { channelName: G }),
        focused: !0,
        channel: t,
        onChange: function (e, t, n) {
          (v(t), V(n));
        },
        onSubmit: H,
        type: E.oU.VOICE_CHANNEL_STATUS,
        canMentionRoles: !1,
        canMentionChannels: !1,
        allowNewLines: !1,
        parentModalKey: C,
        maxCharacterCount: 500,
        showRemainingCharsAfterCount: 250,
        emojiPickerCloseOnModalOuterClick: !0,
      }),
    });
    return (0, i.jsx)(o.k, {
      transitionState: n,
      onClose: R,
      graphic: { type: "image", src: N },
      title: g.intl.string(g.t["5CyJBd"]),
      subtitle: g.intl.string(g.t.NRBYju),
      actions: [
        { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: R },
        {
          variant: "primary",
          loading: b,
          disabled: x,
          text: g.intl.string(g.t.XqK2I2),
          onClick: F,
        },
      ],
      children: j,
    });
  }
}
