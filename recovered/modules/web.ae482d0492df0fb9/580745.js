/* Recovered shipped factory. Module 580745.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8896677..8897845
 * Raw property SHA-256: be9395d35044dfcce90d76ced12c2fa2f445e9911985c6d2c09e61258ee9dc78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(73153),
    a = n(408018),
    s = n(451909),
    l = n(885386),
    o = n(232835);
  let d = {},
    c = {};
  class u extends i.Ay.Store {
    initialize() {
      this.waitFor(o.A);
    }
    static displayName = "EditMessageStore";
    isEditing(e, t) {
      return d[e]?.messageId === t;
    }
    isEditingAny(e) {
      return null != d[e];
    }
    getEditingTextValue(e) {
      return d[e]?.textValue;
    }
    getEditingRichValue(e) {
      return d[e]?.richValue;
    }
    getEditingMessageId(e) {
      return d[e]?.messageId;
    }
    getEditingMessage(e) {
      let t = d[e];
      return null != t && null != t.messageId ? o.A.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
      return c[e];
    }
  }
  let _ = new u(r.h, {
    MESSAGE_START_EDIT: function (e) {
      let { channelId: t, messageId: n, content: i, source: r } = e,
        o = l.D_.getSetting(),
        u = s.Ay.unparse(i, t);
      ((d[t] = { channelId: t, messageId: n, textValue: u, richValue: (0, a.x7)(o ? u : i) }),
        (c[t] = r));
    },
    MESSAGE_UPDATE_EDIT: function (e) {
      let { channelId: t, textValue: n, richValue: i } = e,
        r = d[t];
      if (null == r) return !1;
      d[t] = { ...r, textValue: n, richValue: i };
    },
    MESSAGE_END_EDIT: function (e) {
      let { channelId: t } = e;
      if (null == t || null == d[t]) return !1;
      (delete d[t], delete c[t]);
    },
    MESSAGE_DELETE: function (e) {
      let { channelId: t, id: n } = e;
      d[t]?.messageId === n && (delete d[t], delete c[t]);
    },
    LOGOUT: function () {
      ((d = {}), (c = {}));
    },
  });
}
