/* Recovered shipped factory. Module 202462.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 160799..163233
 * Raw property SHA-256: 57e51a28728c8696f87073827b48d120175e574e33389a87e8a075835f402a85
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { P: () => a });
  var i = r(816885),
    n = r(370725),
    o = r(723651);
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
        (0, n.i)({
          dropTarget: function (e, t) {
            (r.clearDropTarget(),
              (r.dropTargetOptions = t),
              (0, o.i)(e) ? (r.dropTargetRef = e) : (r.dropTargetNode = e),
              r.reconnect());
          },
        }),
      ),
        s(this, "handlerId", null),
        s(this, "dropTargetRef", null),
        s(this, "dropTargetNode", void 0),
        s(this, "dropTargetOptionsInternal", null),
        s(this, "unsubscribeDropTarget", void 0),
        s(this, "lastConnectedHandlerId", null),
        s(this, "lastConnectedDropTarget", null),
        s(this, "lastConnectedDropTargetOptions", null),
        s(this, "backend", void 0),
        (this.backend = e));
    }
    return (
      (e = [
        {
          key: "connectTarget",
          get: function () {
            return this.dropTarget;
          },
        },
        {
          key: "reconnect",
          value: function () {
            var e =
              this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
            e && this.disconnectDropTarget();
            var t = this.dropTarget;
            if (this.handlerId) {
              if (!t) {
                this.lastConnectedDropTarget = t;
                return;
              }
              e &&
                ((this.lastConnectedHandlerId = this.handlerId),
                (this.lastConnectedDropTarget = t),
                (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                  this.handlerId,
                  t,
                  this.dropTargetOptions,
                )));
            }
          },
        },
        {
          key: "receiveHandlerId",
          value: function (e) {
            e !== this.handlerId && ((this.handlerId = e), this.reconnect());
          },
        },
        {
          key: "dropTargetOptions",
          get: function () {
            return this.dropTargetOptionsInternal;
          },
          set: function (e) {
            this.dropTargetOptionsInternal = e;
          },
        },
        {
          key: "didHandlerIdChange",
          value: function () {
            return this.lastConnectedHandlerId !== this.handlerId;
          },
        },
        {
          key: "didDropTargetChange",
          value: function () {
            return this.lastConnectedDropTarget !== this.dropTarget;
          },
        },
        {
          key: "didOptionsChange",
          value: function () {
            return !(0, i.b)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
          },
        },
        {
          key: "disconnectDropTarget",
          value: function () {
            this.unsubscribeDropTarget &&
              (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
          },
        },
        {
          key: "dropTarget",
          get: function () {
            return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current);
          },
        },
        {
          key: "clearDropTarget",
          value: function () {
            ((this.dropTargetRef = null), (this.dropTargetNode = null));
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
