/* Recovered shipped factory. Module 836539.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 151519..154475
 * Raw property SHA-256: a76f054be8872e088f5ae45e44d4b9344d05ecfdeb29734cd85b7d45b8c8268b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { G: () => a });
  var i = r(321733);
  function n(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = r),
      e
    );
  }
  var o = !1,
    s = !1,
    a = (function () {
      var e;
      function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (n(this, "internalMonitor", void 0),
          n(this, "sourceId", null),
          (this.internalMonitor = e.getMonitor()));
      }
      return (
        (e = [
          {
            key: "receiveHandlerId",
            value: function (e) {
              this.sourceId = e;
            },
          },
          {
            key: "getHandlerId",
            value: function () {
              return this.sourceId;
            },
          },
          {
            key: "canDrag",
            value: function () {
              (0, i.V)(
                !o,
                "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
              );
              try {
                return ((o = !0), this.internalMonitor.canDragSource(this.sourceId));
              } finally {
                o = !1;
              }
            },
          },
          {
            key: "isDragging",
            value: function () {
              if (!this.sourceId) return !1;
              (0, i.V)(
                !s,
                "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
              );
              try {
                return ((s = !0), this.internalMonitor.isDraggingSource(this.sourceId));
              } finally {
                s = !1;
              }
            },
          },
          {
            key: "subscribeToStateChange",
            value: function (e, t) {
              return this.internalMonitor.subscribeToStateChange(e, t);
            },
          },
          {
            key: "isDraggingSource",
            value: function (e) {
              return this.internalMonitor.isDraggingSource(e);
            },
          },
          {
            key: "isOverTarget",
            value: function (e, t) {
              return this.internalMonitor.isOverTarget(e, t);
            },
          },
          {
            key: "getTargetIds",
            value: function () {
              return this.internalMonitor.getTargetIds();
            },
          },
          {
            key: "isSourcePublic",
            value: function () {
              return this.internalMonitor.isSourcePublic();
            },
          },
          {
            key: "getSourceId",
            value: function () {
              return this.internalMonitor.getSourceId();
            },
          },
          {
            key: "subscribeToOffsetChange",
            value: function (e) {
              return this.internalMonitor.subscribeToOffsetChange(e);
            },
          },
          {
            key: "canDragSource",
            value: function (e) {
              return this.internalMonitor.canDragSource(e);
            },
          },
          {
            key: "canDropOnTarget",
            value: function (e) {
              return this.internalMonitor.canDropOnTarget(e);
            },
          },
          {
            key: "getItemType",
            value: function () {
              return this.internalMonitor.getItemType();
            },
          },
          {
            key: "getItem",
            value: function () {
              return this.internalMonitor.getItem();
            },
          },
          {
            key: "getDropResult",
            value: function () {
              return this.internalMonitor.getDropResult();
            },
          },
          {
            key: "didDrop",
            value: function () {
              return this.internalMonitor.didDrop();
            },
          },
          {
            key: "getInitialClientOffset",
            value: function () {
              return this.internalMonitor.getInitialClientOffset();
            },
          },
          {
            key: "getInitialSourceClientOffset",
            value: function () {
              return this.internalMonitor.getInitialSourceClientOffset();
            },
          },
          {
            key: "getSourceClientOffset",
            value: function () {
              return this.internalMonitor.getSourceClientOffset();
            },
          },
          {
            key: "getClientOffset",
            value: function () {
              return this.internalMonitor.getClientOffset();
            },
          },
          {
            key: "getDifferenceFromInitialOffset",
            value: function () {
              return this.internalMonitor.getDifferenceFromInitialOffset();
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
