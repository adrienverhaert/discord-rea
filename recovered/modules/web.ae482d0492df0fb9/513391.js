/* Recovered shipped factory. Module 513391.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9674506..9676157
 * Raw property SHA-256: c8de99124934a4589d6c184badde2940736c2599123c775ce40772afafb35837
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => s }), n(321073), n(142703), n(667532));
  var i = n(677623),
    r = n.n(i);
  let a = new (n(626584).A)("Queue");
  class s {
    logger;
    defaultRetryAfter;
    queue = new (r())();
    timeout = null;
    draining = !1;
    pendingRetryItem = null;
    constructor(e = a, t = 100) {
      ((this.logger = e), (this.defaultRetryAfter = t));
    }
    enqueue(e, t, n) {
      (this.queue.push({ message: e, success: t, logId: n }), this._drainIfNecessary());
    }
    get length() {
      return this.queue.length;
    }
    _drainIfNecessary() {
      if (null !== this.timeout || 0 === this.queue.length || !0 === this.draining) return;
      this.draining = !0;
      let e = this.queue.shift(),
        { message: t, success: n, logId: i } = e,
        r = (t, r) => {
          if (
            (this.logger.log(
              `Finished draining message from queue LogId:${i} QueueLength: ${this.queue.length}`,
            ),
            (this.draining = !1),
            null == t)
          ) {
            setImmediate(() => this._drainIfNecessary());
            try {
              n(r);
            } catch (e) {
              this.logger.error("", e);
            }
          } else {
            let n = t.retryAfter ?? this.defaultRetryAfter;
            (this.logger.info(
              `Rate limited. Delaying draining of queue for ${n} ms. LogId:${i} QueueLength: ${this.queue.length}`,
            ),
              (this.pendingRetryItem = e),
              (this.timeout = setTimeout(() => {
                ((this.pendingRetryItem = null),
                  this.queue.unshift(e),
                  (this.timeout = null),
                  this._drainIfNecessary());
              }, n)));
          }
        };
      (this.logger.log(`Draining message from queue LogId:${i} QueueLength: ${this.queue.length}`),
        this.drain(t, r));
    }
    clear() {
      (this.queue.clear(),
        clearTimeout(this.timeout),
        (this.timeout = null),
        (this.draining = !1),
        (this.pendingRetryItem = null));
    }
    remove(e) {
      let t = [];
      for (; this.queue.length > 0;) {
        let n = this.queue.shift();
        e(n.message) || t.push(n);
      }
      (this.queue.push(...t),
        null !== this.timeout &&
          null !== this.pendingRetryItem &&
          e(this.pendingRetryItem.message) &&
          (clearTimeout(this.timeout),
          (this.timeout = null),
          (this.pendingRetryItem = null),
          this._drainIfNecessary()));
    }
  }
}
