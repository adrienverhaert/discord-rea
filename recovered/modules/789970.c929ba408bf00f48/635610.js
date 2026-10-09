/* Recovered shipped factory. Module 635610.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 154476..156537
 * Raw property SHA-256: e072640a72ed48ec33d3611ef0d70bc2e740236634a98f783eb8500d338aa4f6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { b: () => s });
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
    s = (function () {
      var e;
      function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (n(this, "internalMonitor", void 0),
          n(this, "targetId", null),
          (this.internalMonitor = e.getMonitor()));
      }
      return (
        (e = [
          {
            key: "receiveHandlerId",
            value: function (e) {
              this.targetId = e;
            },
          },
          {
            key: "getHandlerId",
            value: function () {
              return this.targetId;
            },
          },
          {
            key: "subscribeToStateChange",
            value: function (e, t) {
              return this.internalMonitor.subscribeToStateChange(e, t);
            },
          },
          {
            key: "canDrop",
            value: function () {
              if (!this.targetId) return !1;
              (0, i.V)(
                !o,
                "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
              );
              try {
                return ((o = !0), this.internalMonitor.canDropOnTarget(this.targetId));
              } finally {
                o = !1;
              }
            },
          },
          {
            key: "isOver",
            value: function (e) {
              return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e);
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
