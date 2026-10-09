/* Recovered shipped factory. Module 399263.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9231057..9232712
 * Raw property SHA-256: e67d8baf607cc74b0483db45630525c6cc8a52d64dc664d5f7b250f0deb745c9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => h }), n(142703));
  var i = n(17928),
    r = n(73153),
    a = n(232835);
  let s = Object.freeze([]),
    l = {},
    o = {},
    d = {},
    c = {},
    u = {};
  function _(e, t) {
    let n = l[e];
    return (
      null != n &&
      ((l[e] = n.filter((e) => e.id !== t)), delete o[t], delete d[t], n.length !== l[e].length)
    );
  }
  function E(e, t) {
    let n = l[e];
    if (null == n) return !1;
    l[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let i = d[t.id];
    null != i && null != c[i.id] && (c[i.id] = { ...c[i.id], ...t });
  }
  class A extends i.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
      this.waitFor(a.A);
    }
    getFiles(e) {
      return l[e] ?? s;
    }
    getMessageForFile(e) {
      return d[e];
    }
    getUploaderFileForMessageId(e) {
      return c[e];
    }
    getUploadAttachments(e) {
      if (null != e) return u[e];
    }
  }
  let h = new A(r.h, {
    CONNECTION_OPEN: function () {
      u = {};
    },
    LOGOUT: function () {
      u = {};
    },
    UPLOAD_START: function (e) {
      let { channelId: t, file: n, uploader: i, message: r } = e;
      if (i._aborted || i._errored) return;
      let a = l[t] ?? s;
      if (((o[n.id] = i), (l[t] = [...a, n]), null == r)) return;
      d[n.id] = r;
      let { items: u } = n;
      (null != u && (c[r.id] = { ...n, items: u }), r.nonce ?? r.id);
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
      let { channelId: t, file: n } = e;
      E(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
      let { channelId: t, file: n } = e;
      E(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
      let { channelId: t, file: n } = e;
      return _(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
      let { channelId: t, file: n } = e;
      return _(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
      let { file: t } = e,
        n = o[t.id];
      if (null == n) return !1;
      setImmediate(() => n.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
      let { file: t, itemId: n } = e,
        i = o[t.id];
      if (null == i) return !1;
      setImmediate(() => i.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
      let { channelId: t, file: n } = e,
        i = d[n.id];
      (null != i && (i.nonce ?? i.id), E(t, n));
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
      let { file: t, messageId: n } = e;
      c[n] = t;
    },
  });
}
