/* Recovered shipped factory. Module 128377.
 * Source: recovered/web/assets/64310.f09c86493518d14b.js
 * UTF-16 property offsets: 1940..7480
 * Raw property SHA-256: dcc5188a1efea9c82ccbcb0530835cc2b1144b3b3d50653acfa90f886accb53b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, s) {
  s.d(e, { H: () => p });
  var i = s(680753),
    n = s(875565),
    r = s(272469),
    o = s(231577),
    a = s(834932),
    h = s(83220),
    c = s(487851),
    _ = s(286788);
  class u {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: (0, a.el)(), spanId: (0, a.ZF)() }));
    }
    clone() {
      let t = new u();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = { ...this._tags }),
        (t._extra = { ...this._extra }),
        (t._contexts = { ...this._contexts }),
        this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }),
        (t._user = this._user),
        (t._level = this._level),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._requestSession = this._requestSession),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (t._propagationContext = { ...this._propagationContext }),
        (t._client = this._client),
        (t._lastEventId = this._lastEventId),
        (0, _.r)(t, (0, _.f)(this)),
        t
      );
    }
    setClient(t) {
      this._client = t;
    }
    setLastEventId(t) {
      this._lastEventId = t;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(t) {
      this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
      return (this._eventProcessors.push(t), this);
    }
    setUser(t) {
      return (
        (this._user = t || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
        this._session && (0, i.qO)(this._session, { user: t }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(t) {
      return ((this._requestSession = t), this);
    }
    setTags(t) {
      return ((this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this);
    }
    setTag(t, e) {
      return ((this._tags = { ...this._tags, [t]: e }), this._notifyScopeListeners(), this);
    }
    setExtras(t) {
      return ((this._extra = { ...this._extra, ...t }), this._notifyScopeListeners(), this);
    }
    setExtra(t, e) {
      return ((this._extra = { ...this._extra, [t]: e }), this._notifyScopeListeners(), this);
    }
    setFingerprint(t) {
      return ((this._fingerprint = t), this._notifyScopeListeners(), this);
    }
    setLevel(t) {
      return ((this._level = t), this._notifyScopeListeners(), this);
    }
    setTransactionName(t) {
      return ((this._transactionName = t), this._notifyScopeListeners(), this);
    }
    setContext(t, e) {
      return (
        null === e ? delete this._contexts[t] : (this._contexts[t] = e),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(t) {
      return (t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this);
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      let e = "function" == typeof t ? t(this) : t,
        [s, i] =
          e instanceof p
            ? [e.getScopeData(), e.getRequestSession()]
            : (0, n.Qd)(e)
              ? [t, t.requestSession]
              : [],
        {
          tags: r,
          extra: o,
          user: a,
          contexts: h,
          level: c,
          fingerprint: _ = [],
          propagationContext: u,
        } = s || {};
      return (
        (this._tags = { ...this._tags, ...r }),
        (this._extra = { ...this._extra, ...o }),
        (this._contexts = { ...this._contexts, ...h }),
        a && Object.keys(a).length && (this._user = a),
        c && (this._level = c),
        _.length && (this._fingerprint = _),
        u && (this._propagationContext = u),
        i && (this._requestSession = i),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._session = void 0),
        (0, _.r)(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: (0, a.el)() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(t, e) {
      let s = "number" == typeof e ? e : 100;
      if (s <= 0) return this;
      let i = { timestamp: (0, h.lu)(), ...t };
      return (
        this._breadcrumbs.push(i),
        this._breadcrumbs.length > s &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-s)),
          this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(t) {
      return (this._attachments.push(t), this);
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: (0, _.f)(this),
      };
    }
    setSDKProcessingMetadata(t) {
      return ((this._sdkProcessingMetadata = (0, c.h)(this._sdkProcessingMetadata, t, 2)), this);
    }
    setPropagationContext(t) {
      return ((this._propagationContext = { spanId: (0, a.ZF)(), ...t }), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t, e) {
      let s = e && e.event_id ? e.event_id : (0, o.eJ)();
      if (!this._client)
        return (r.vF.warn("No client configured on scope - will not capture exception!"), s);
      let i = Error("Sentry syntheticException");
      return (
        this._client.captureException(
          t,
          { originalException: t, syntheticException: i, ...e, event_id: s },
          this,
        ),
        s
      );
    }
    captureMessage(t, e, s) {
      let i = s && s.event_id ? s.event_id : (0, o.eJ)();
      if (!this._client)
        return (r.vF.warn("No client configured on scope - will not capture message!"), i);
      let n = Error(t);
      return (
        this._client.captureMessage(
          t,
          e,
          { originalException: t, syntheticException: n, ...s, event_id: i },
          this,
        ),
        i
      );
    }
    captureEvent(t, e) {
      let s = e && e.event_id ? e.event_id : (0, o.eJ)();
      return (
        this._client
          ? this._client.captureEvent(t, { ...e, event_id: s }, this)
          : r.vF.warn("No client configured on scope - will not capture event!"),
        s
      );
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((t) => {
          t(this);
        }),
        (this._notifyingListeners = !1));
    }
  }
  let p = u;
}
