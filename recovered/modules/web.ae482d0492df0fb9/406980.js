/* Recovered shipped factory. Module 406980.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3761261..3764627
 * Raw property SHA-256: 047f5e6e1aa5acd618d69b06810f7f7b0fc81bf487297982612db1c31d68d801
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { K: () => A }), n(321073));
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(294454),
    s = n(118517),
    l = n(734057),
    o = n(31717),
    d = n(232835),
    c = n(518960),
    u = n(614584),
    _ = n(589553),
    E = n(696016);
  async function A(e, t) {
    let { channelId: A, analyticsLocations: h, messageReference: f, povTargetInformation: I } = t,
      p = l.A.getChannel(A);
    if (null != p) {
      if (null != f) {
        let e = d.A.getMessage(f.channel_id, f.message_id);
        null != e &&
          (0, s.Yf)({ message: e, channel: p, shouldMention: !1, showMentionToggle: !1 });
      }
      try {
        let t = [],
          n = [];
        for (let i of e) {
          let e = (function (e, t) {
              if (null == t || null == e.syncTimestamp) return e;
              let { duration: n, syncTimestamp: i } = t,
                r = e.syncTimestamp - e.length,
                a = e.syncTimestamp,
                s = Math.max(r, i - 1e3 * n),
                l = Math.min(a, i);
              return s < l
                ? {
                    ...e,
                    editMetadata: {
                      applicationAudio: !0,
                      voiceAudio: !0,
                      soundboardAudio: !0,
                      ...e.editMetadata,
                      start: (s - r) / 1e3,
                      end: (l - r) / 1e3,
                    },
                  }
                : e;
            })(i, I),
            r = await (0, u.VO)(e, { analyticsLocations: h, isTemporaryEdit: e !== i }),
            a = (0, _.A)(e, e.type === E.nQ.SCREENSHOT ? "jpeg" : "mp4");
          switch (i.type) {
            case E.nQ.CLIP:
            case E.nQ.VOICE_CLIP:
              (t.push(new File([r], a, { type: "video/mp4" })), n.push({ clip: e }));
              break;
            case E.nQ.SCREENSHOT:
              (t.push(new File([r], a, { type: "image/jpeg" })), n.push({}));
              break;
            default:
              i.type;
          }
        }
        ((0, c.R)(t, p, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }),
          r.closeAllModals());
      } catch (e) {
        throw (E.nx.error(e), e);
      }
    } else
      (0, r.openModalLazy)(
        async () => {
          let { default: t } = await Promise.all([
            n.e("325522"),
            n.e("790340"),
            n.e("147119"),
            n.e("425292"),
            n.e("209994"),
            n.e("116815"),
            n.e("582012"),
            n.e("272915"),
            n.e("162182"),
            n.e("860640"),
            n.e("681801"),
            n.e("179652"),
            n.e("916885"),
            n.e("826139"),
            n.e("405714"),
            n.e("360732"),
            n.e("352456"),
            n.e("638781"),
            n.e("678906"),
            n.e("358931"),
            n.e("168248"),
            n.e("533240"),
            n.e("962953"),
            n.e("216870"),
            n.e("841136"),
            n.e("560338"),
            n.e("340363"),
            n.e("459086"),
            n.e("720210"),
            n.e("61531"),
            n.e("177086"),
            n.e("319714"),
            n.e("189281"),
            n.e("896995"),
            n.e("267732"),
            n.e("686889"),
            n.e("560570"),
            n.e("896691"),
            n.e("779367"),
            n.e("992956"),
            n.e("7452"),
            n.e("60002"),
            n.e("189423"),
            n.e("225307"),
            n.e("332165"),
            n.e("618416"),
            n.e("501546"),
            n.e("20409"),
            n.e("224155"),
            n.e("888326"),
            n.e("695765"),
            n.e("777489"),
            n.e("188941"),
            n.e("481647"),
            n.e("776602"),
            n.e("140402"),
            n.e("695445"),
            n.e("161379"),
            n.e("890027"),
            n.e("592028"),
            n.e("425906"),
            n.e("123216"),
            n.e("401518"),
            n.e("776750"),
            n.e("147786"),
            n.e("854461"),
            n.e("958428"),
            n.e("124060"),
            n.e("146566"),
            n.e("317225"),
            n.e("444376"),
            n.e("346102"),
            n.e("463095"),
            n.e("696123"),
            n.e("843719"),
            n.e("390098"),
            n.e("577084"),
            n.e("334127"),
            n.e("193158"),
            n.e("318546"),
            n.e("41991"),
            n.e("8563"),
            n.e("499941"),
            n.e("693832"),
            n.e("710638"),
            n.e("959669"),
            n.e("73500"),
            n.e("418943"),
            n.e("959134"),
            n.e("377766"),
            n.e("565065"),
            n.e("834386"),
            n.e("4780"),
            n.e("130674"),
            n.e("371482"),
            n.e("126780"),
            n.e("455924"),
            n.e("844780"),
            n.e("360781"),
            n.e("872648"),
            n.e("631825"),
            n.e("851243"),
            n.e("220518"),
            n.e("398082"),
            n.e("237834"),
            n.e("807771"),
            n.e("478476"),
            n.e("496715"),
            n.e("681541"),
            n.e("406357"),
            n.e("115754"),
            n.e("680986"),
            n.e("243100"),
            n.e("982699"),
            n.e("250478"),
            n.e("90373"),
            n.e("462276"),
            n.e("293697"),
            n.e("568980"),
            n.e("979630"),
            n.e("168177"),
            n.e("260218"),
            n.e("236946"),
            n.e("935948"),
            n.e("692639"),
            n.e("565617"),
            n.e("890480"),
            n.e("440963"),
            n.e("766031"),
            n.e("394317"),
            n.e("744385"),
            n.e("304329"),
            n.e("84755"),
            n.e("895008"),
            n.e("92871"),
          ]).then(n.bind(n, 243258));
          return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: h });
        },
        { stackingBehavior: "stack", modalKey: a.aU },
      );
  }
}
