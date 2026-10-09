/* Recovered shipped factory. Module 79726.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 156538..160798
 * Raw property SHA-256: e572cd220b76154434fd5aa6177bdb3a3b0e6f1c6edb8333dc2a5b9c7a254f4b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { b: () => a });
  var i = r(370725),
    n = r(723651),
    o = r(816885);
  function s(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = r),
      e
    );
  }
  var a = (function () {
    var e;
    function t(e) {
      var r = this;
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      (s(
        this,
        "hooks",
        (0, i.i)({
          dragSource: function (e, t) {
            (r.clearDragSource(),
              (r.dragSourceOptions = t || null),
              (0, n.i)(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
              r.reconnectDragSource());
          },
          dragPreview: function (e, t) {
            (r.clearDragPreview(),
              (r.dragPreviewOptions = t || null),
              (0, n.i)(e) ? (r.dragPreviewRef = e) : (r.dragPreviewNode = e),
              r.reconnectDragPreview());
          },
        }),
      ),
        s(this, "handlerId", null),
        s(this, "dragSourceRef", null),
        s(this, "dragSourceNode", void 0),
        s(this, "dragSourceOptionsInternal", null),
        s(this, "dragSourceUnsubscribe", void 0),
        s(this, "dragPreviewRef", null),
        s(this, "dragPreviewNode", void 0),
        s(this, "dragPreviewOptionsInternal", null),
        s(this, "dragPreviewUnsubscribe", void 0),
        s(this, "lastConnectedHandlerId", null),
        s(this, "lastConnectedDragSource", null),
        s(this, "lastConnectedDragSourceOptions", null),
        s(this, "lastConnectedDragPreview", null),
        s(this, "lastConnectedDragPreviewOptions", null),
        s(this, "backend", void 0),
        (this.backend = e));
    }
    return (
      (e = [
        {
          key: "receiveHandlerId",
          value: function (e) {
            this.handlerId !== e && ((this.handlerId = e), this.reconnect());
          },
        },
        {
          key: "connectTarget",
          get: function () {
            return this.dragSource;
          },
        },
        {
          key: "dragSourceOptions",
          get: function () {
            return this.dragSourceOptionsInternal;
          },
          set: function (e) {
            this.dragSourceOptionsInternal = e;
          },
        },
        {
          key: "dragPreviewOptions",
          get: function () {
            return this.dragPreviewOptionsInternal;
          },
          set: function (e) {
            this.dragPreviewOptionsInternal = e;
          },
        },
        {
          key: "reconnect",
          value: function () {
            (this.reconnectDragSource(), this.reconnectDragPreview());
          },
        },
        {
          key: "reconnectDragSource",
          value: function () {
            var e = this.dragSource,
              t =
                this.didHandlerIdChange() ||
                this.didConnectedDragSourceChange() ||
                this.didDragSourceOptionsChange();
            if ((t && this.disconnectDragSource(), this.handlerId)) {
              if (!e) {
                this.lastConnectedDragSource = e;
                return;
              }
              t &&
                ((this.lastConnectedHandlerId = this.handlerId),
                (this.lastConnectedDragSource = e),
                (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                  this.handlerId,
                  e,
                  this.dragSourceOptions,
                )));
            }
          },
        },
        {
          key: "reconnectDragPreview",
          value: function () {
            var e = this.dragPreview,
              t =
                this.didHandlerIdChange() ||
                this.didConnectedDragPreviewChange() ||
                this.didDragPreviewOptionsChange();
            if ((t && this.disconnectDragPreview(), this.handlerId)) {
              if (!e) {
                this.lastConnectedDragPreview = e;
                return;
              }
              t &&
                ((this.lastConnectedHandlerId = this.handlerId),
                (this.lastConnectedDragPreview = e),
                (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                  this.handlerId,
                  e,
                  this.dragPreviewOptions,
                )));
            }
          },
        },
        {
          key: "didHandlerIdChange",
          value: function () {
            return this.lastConnectedHandlerId !== this.handlerId;
          },
        },
        {
          key: "didConnectedDragSourceChange",
          value: function () {
            return this.lastConnectedDragSource !== this.dragSource;
          },
        },
        {
          key: "didConnectedDragPreviewChange",
          value: function () {
            return this.lastConnectedDragPreview !== this.dragPreview;
          },
        },
        {
          key: "didDragSourceOptionsChange",
          value: function () {
            return !(0, o.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
          },
        },
        {
          key: "didDragPreviewOptionsChange",
          value: function () {
            return !(0, o.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
          },
        },
        {
          key: "disconnectDragSource",
          value: function () {
            this.dragSourceUnsubscribe &&
              (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0));
          },
        },
        {
          key: "disconnectDragPreview",
          value: function () {
            this.dragPreviewUnsubscribe &&
              (this.dragPreviewUnsubscribe(),
              (this.dragPreviewUnsubscribe = void 0),
              (this.dragPreviewNode = null),
              (this.dragPreviewRef = null));
          },
        },
        {
          key: "dragSource",
          get: function () {
            return this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current);
          },
        },
        {
          key: "dragPreview",
          get: function () {
            return this.dragPreviewNode || (this.dragPreviewRef && this.dragPreviewRef.current);
          },
        },
        {
          key: "clearDragSource",
          value: function () {
            ((this.dragSourceNode = null), (this.dragSourceRef = null));
          },
        },
        {
          key: "clearDragPreview",
          value: function () {
            ((this.dragPreviewNode = null), (this.dragPreviewRef = null));
          },
        },
      ]),
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          ((i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i));
        }
      })(t.prototype, e),
      t
    );
  })();
}
