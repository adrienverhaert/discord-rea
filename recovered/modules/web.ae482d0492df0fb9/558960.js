/* Recovered shipped factory. Module 558960.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4622430..4626831
 * Raw property SHA-256: 00a0410587039f216973fdf084de5a14eabb265f36724efdb62fec8e0754de7d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(256693),
    r = n(343030);
  class a {
    config;
    entries = new Map();
    targets = new Map();
    backgrounded = new Map();
    changeListeners = new Set();
    attachSeq = 0;
    constructor(e) {
      this.config = e;
    }
    subscribe = (e) => (
      this.changeListeners.add(e),
      () => {
        this.changeListeners.delete(e);
      }
    );
    emitChange() {
      for (let e of this.changeListeners) e();
    }
    registerFrameEntry(e, t) {
      (this.entries.set(e, t), this.reconcile(e));
    }
    removeFrameEntry(e) {
      (this.unplace(e), this.entries.delete(e), this.clearTargets(e), this.emitChange());
    }
    getFrameEntry(e) {
      return this.entries.get(e) ?? null;
    }
    hasFrameEntry(e) {
      return this.entries.has(e);
    }
    registerFrameTarget(e, t, n, i) {
      let r = this.targets.get(e);
      (null == r && ((r = new Map()), this.targets.set(e, r)),
        r.set(t, { target: t, level: n, seq: this.attachSeq++, state: i }),
        this.reconcile(e));
    }
    updateFrameTargetState(e, t, n) {
      let i = this.targets.get(e)?.get(t);
      null != i && i.state !== n && ((i.state = n), this.emitChange());
    }
    removeFrameTarget(e, t) {
      let n = this.targets.get(e);
      null != n && n.delete(t) && this.reconcile(e);
    }
    getWinningTarget(e) {
      return this.hasFrameEntry(e) ? (this.pickWinner(e)?.target ?? null) : null;
    }
    getWinningTargetState(e) {
      return this.hasFrameEntry(e) ? (this.pickWinner(e)?.state ?? null) : null;
    }
    clearTargets(e) {
      (this.targets.delete(e), this.cancelBackground(e));
    }
    reconcile(e) {
      if (!this.hasFrameEntry(e)) return;
      let t = this.pickWinner(e);
      (null == t
        ? (this.unplace(e), this.background(e))
        : (this.cancelBackground(e), this.place(e, t.target, t.level)),
        this.emitChange());
    }
    pickWinner(e) {
      let t = this.targets.get(e);
      if (null == t) return null;
      let n = null;
      for (let e of t.values())
        (null == n ||
          r.p[e.level] > r.p[n.level] ||
          (r.p[e.level] === r.p[n.level] && e.seq > n.seq)) &&
          (n = e);
      return n;
    }
    background(e) {
      this.backgrounded.has(e) ||
        (this.backgrounded.set(e, {
          timer: this.armEviction(e, this.config.timeoutMs),
          condemned: !1,
        }),
        this.reconcileCondemned());
    }
    reconcileCondemned() {
      let e = this.backgrounded.size - this.config.maxBackgrounded,
        t = 0;
      for (let [n, i] of this.backgrounded) {
        let r = t < e;
        (r !== i.condemned &&
          (clearTimeout(i.timer),
          (i.timer = this.armEviction(n, r ? 3e3 : this.config.timeoutMs)),
          (i.condemned = r)),
          t++);
      }
    }
    armEviction(e, t) {
      return setTimeout(() => this.evict(e), t);
    }
    cancelBackground(e) {
      let t = this.backgrounded.get(e);
      null != t && (clearTimeout(t.timer), this.backgrounded.delete(e), this.reconcileCondemned());
    }
    evict(e) {
      (this.cancelBackground(e), this.destroyFrame(e));
    }
  }
  var s = n(281969),
    l = n(580954);
  let o = {
    [r.A.Backstage]: 0,
    [r.A.WithinAppContent]: 1,
    [r.A.WithinCallContent]: 3,
    [r.A.AboveAppContent]: 1002,
  };
  class d {
    _pool = null;
    setPool(e) {
      this._pool = e;
    }
    get pool() {
      if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
      return this._pool;
    }
  }
  class c extends d {
    placed = new Map();
    rafHandle = null;
    initialize(e) {
      ((e.style.position = "fixed"),
        (e.style.top = "0"),
        (e.style.left = "0"),
        (e.style.pointerEvents = "none"),
        (e.style.display = "none"),
        this.pool.appendChild(e));
    }
    place(e, t, n) {
      (this.placed.set(e, { target: t, level: n }), this.position(e, t, n), this.ensureTicking());
    }
    unplace(e) {
      (this.placed.delete(e), (e.style.display = "none"));
    }
    ensureTicking() {
      null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, n) {
      let i = t.getBoundingClientRect();
      ((e.style.display = "block"),
        (e.style.zIndex = String(o[n])),
        (e.style.transform = `translate(${i.left}px, ${i.top}px)`),
        (e.style.width = `${i.width}px`),
        (e.style.height = `${i.height}px`));
    }
    tick = () => {
      for (let [e, { target: t, level: n }] of this.placed) this.position(e, t, n);
      this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
  }
  class u extends d {
    initialize(e) {
      ((e.style.width = "100%"),
        (e.style.height = "100%"),
        (e.style.pointerEvents = "none"),
        (e.style.display = "none"),
        this.pool.appendChild(e));
    }
    place(e, t, n) {
      (e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block"));
    }
    unplace(e) {
      (e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none"));
    }
  }
  class _ extends a {
    strategy = "function" == typeof Element.prototype.moveBefore ? new u() : new c();
    constructor() {
      super({ maxBackgrounded: 3, timeoutMs: 3e5 });
    }
    setPool(e) {
      this.strategy.setPool(e);
    }
    registerFrameEntry(e, t) {
      (this.strategy.initialize(t.container), super.registerFrameEntry(e, t));
    }
    removeFrameEntry(e) {
      let t = this.getFrameEntry(e);
      (super.removeFrameEntry(e), t?.container.remove(), (0, i.fS)(e) || s.A.removeFrame(e));
    }
    place(e, t, n) {
      let a = this.getFrameEntry(e);
      null != a &&
        (this.strategy.place(a.container, t, n),
        (0, i.fS)(e) || s.A.setFrameVisible(e, n !== r.A.Backstage));
    }
    unplace(e) {
      let t = this.getFrameEntry(e);
      null != t && (this.strategy.unplace(t.container), (0, i.fS)(e) || s.A.setFrameVisible(e, !1));
    }
    destroyFrame(e) {
      (0, i.fS)(e) ? (0, i.aQ)(e) : (0, l.A)().leaveFrame(e);
    }
  }
  let E = new _();
}
