/* Recovered shipped factory. Module 822074.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7720036..7726114
 * Raw property SHA-256: 294af4aebcc3f3b39561805bbe839e92463cc82860e3d4863299c02a112814b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r, a, s;
  (n.d(t, { A: () => w }), n(321073));
  var l = n(435558),
    o = n.n(l),
    d = n(17928),
    c = n(73153),
    u = n(432371),
    _ = n(115718),
    E = n(736056),
    A = n(174768),
    h = n(734057),
    f = n(71393),
    I = n(573163),
    p = n(309010),
    T = n(543465),
    m = n(287809),
    g = n(927813),
    S = n(935208);
  function N(e, t) {
    return {
      id: e.id,
      topic: e.topic,
      summShort: e.summ_short,
      people: Array.from(new Set(e.people)),
      startId: e.start_id,
      endId: e.end_id,
      count: e.count,
      channelId: t,
      source: e.source,
      type: e.type,
    };
  }
  var C = n(521732);
  let O = {},
    R = {},
    L = {},
    y = [],
    D = {},
    v = { status: "ok", lastRequest: null, lastResponse: null },
    b = [],
    M = [];
  function P() {
    b = A.A.getProps()
      .results.filter((e) => e.type === _.rD.TEXT_CHANNEL && 0 === e.record.type)
      .map((e) => e.record.id);
  }
  class U extends d.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
      return { shouldShowTopicsBar: i };
    }
    initialize(e) {
      ((i = e?.shouldShowTopicsBar ?? !0),
        this.waitFor(h.A, E.A, f.A, A.A, I.Ay, p.Ay, T.Ay, m.default),
        this.syncWith([A.A], P));
    }
    allSummaries() {
      return O;
    }
    topSummaries() {
      return Object.values(O)
        .flat()
        .filter(
          (e) =>
            e.people.length > 1 &&
            S.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * g.A.Millis.HOUR,
        )
        .sort((e, t) => S.default.extractTimestamp(t.endId) - S.default.extractTimestamp(e.endId));
    }
    summaries(e) {
      return O[e] ?? M;
    }
    shouldShowTopicsBar() {
      return i;
    }
    findSummary(e, t) {
      return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
      return null != s && s.channelId === e && null != s.summaryId
        ? this.findSummary(e, s?.summaryId)
        : null;
    }
    summaryFeedback(e) {
      return null == e ? null : L[e.id];
    }
    isFetching(e, t) {
      return null != t ? R[e]?.summaryId === t : R[e]?.fetching === !0;
    }
    status(e) {
      return R[e];
    }
    shouldFetch(e, t) {
      let n = R[e],
        i = h.A.getChannel(e);
      if (!(0, u.pk)(i)) return !1;
      if (null != t) {
        let e = n?.summaryIdLastRequestedAt ?? 0,
          i = Date.now() - e;
        return t !== n?.summaryId || i > C.hf;
      }
      let r = n?.lastReceivedAt ?? 0;
      return !n?.fetching && 0 === r;
    }
    channelAffinities() {
      return y;
    }
    channelAffinitiesById() {
      return D;
    }
    channelAffinitiesStatus() {
      return v;
    }
    shouldFetchChannelAffinities() {
      return !(
        "fetching" === v.status ||
        (null != v.lastResponse && Date.now() - v.lastResponse < 30 * g.A.Millis.SECOND)
      );
    }
    defaultChannelIds(e) {
      let {
          withQuickSwitcher: t,
          withChannelAffinities: n,
          withUnreads: i,
          numChannels: r = 25,
        } = e,
        a = [];
      return (
        t && (a = a.concat(b)),
        n && (a = a.concat(y.map((e) => e.channel_id))),
        i &&
          (a = a.filter((e) => {
            let t = h.A.getChannel(e);
            return null != t && !T.Ay.isChannelMuted(t.guild_id, e) && I.Ay.hasUnread(e);
          })),
        (a = a.filter((e) => {
          let t = h.A.getChannel(e);
          return (0, u.pk)(t, !1, !1);
        })).slice(0, r)
      );
    }
    visibleSummaryIndex() {
      return a;
    }
  }
  let w = new U(c.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
      let { channelId: t } = e;
      s?.channelId !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
      i = !i;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
      let { summary: t, channelId: n, error: i, receivedAt: r } = e;
      if (null != t && Object.keys(t).length > 0) {
        let e = N(t, n),
          i = [...(O[n] ?? [])],
          r = i.findIndex((t) => t.id === e?.id);
        (r > -1 ? (i[r] = e) : i.push(e), (O[n] = i));
      }
      let a = {
        ...(R[n] ?? { fetching: !1 }),
        summaryId: void 0,
        summaryIdLastReceivedAt: r,
        summaryIdError: i,
      };
      R[n] = a;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
      let { channelId: t, summaryId: n, requestedAt: i } = e;
      R[t] = { ...(R[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: i };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
      let { summaries: t, channelId: n, error: i, receivedAt: r } = e,
        a = t.filter((e) => Object.keys(e).length > 0).map((e) => N(e, n));
      if (null != s && s.channelId === n && !a.some((e) => e.id === s?.summaryId)) {
        let e = (O[n] ?? []).find((e) => e.id === s?.summaryId);
        null != e && a.push(e);
      }
      O[n] = (0, l.sortBy)(a, (e) => S.default.extractTimestamp(e.startId)).reverse();
      let o = { ...R[n], fetching: !1, error: void 0, lastReceivedAt: r };
      (null != i && (o.error = i), (R[n] = o));
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
      R[e.channelId] = { ...(R[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
      if (
        (null == r && null == e.channelId) ||
        (e.channelId === r?.channelId && e.summaryId === r?.summaryId)
      )
        return !1;
      if (
        null !=
          (r =
            null != e.channelId
              ? { channelId: e.channelId, summaryId: e.summaryId ?? null }
              : null) &&
        r.channelId === e.channelId &&
        null != r.summaryId
      ) {
        let e = O[r.channelId];
        a = e?.findIndex((e) => e.id === r?.summaryId);
      }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
      let t = p.Ay.getChannelId();
      if (null != t)
        if (null != r && r.channelId === t && null != r.summaryId) {
          let e = O[r.channelId];
          a = e?.findIndex((e) => e.id === r?.summaryId);
        } else
          a = O[t]?.findIndex((t) => {
            var n, i, r, a;
            return (
              (n = e.topVisibleMessage),
              (i = e.bottomVisibleMessage),
              (r = t.startId),
              (a = t.endId),
              !(null == n || n > a) && !(null == i || i < r)
            );
          });
    },
    SET_SELECTED_SUMMARY(e) {
      let t = e.channelId;
      return null == t
        ? null
        : (t !== s?.channelId || e.summaryId !== s?.summaryId) &&
            void (s = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
      let { summary: t, rating: n } = e;
      null != n ? (L[t.id] = n) : delete L[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
      v = { ...v, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
      let { affinities: t, error: n } = e;
      if (null != n) {
        ((y = []), (D = {}), (v = { ...v, status: "error", lastResponse: Date.now() }));
        return;
      }
      ((y = t ?? []),
        (D = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
        (v = { ...v, status: "ok", lastResponse: Date.now() }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
      let { channelIds: t, requestedAt: n } = e,
        i = t.reduce((e, t) => {
          let i = R[t] ?? {};
          return ((e[t] = { ...i, fetching: !0, lastRequestedAt: n, error: void 0 }), e);
        }, {});
      R = { ...R, ...i };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
      let {
          summaries: t,
          receivedAt: n,
          error: i,
          requestArgs: { channelIds: r },
        } = e,
        a = o()
          .toPairs(t)
          .reduce((e, t) => {
            let [n, i] = t,
              r = o()
                .chain(i.map((e) => N(e, n)))
                .sortBy((e) => S.default.extractTimestamp(e.startId))
                .takeRight(75)
                .reverse()
                .filter((e) => Object.keys(e).length > 0)
                .value();
            return ((e[n] = r), e);
          }, {}),
        s = r.reduce(
          (e, t) => {
            let r = R[t] ?? {},
              s = a[t];
            return (
              null != s && (e.summariesByChannel[t] = s),
              (e.summaryFetchStatusByChannel[t] = {
                ...r,
                fetching: !1,
                error: i,
                lastReceivedAt: n,
              }),
              e
            );
          },
          { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
        );
      ((O = { ...O, ...s.summariesByChannel }), (R = { ...R, ...s.summaryFetchStatusByChannel }));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
      let { channel_id: t, summaries: n, guild_id: i } = e,
        r = Date.now(),
        a = o()
          .chain(n)
          .sortBy((e) => S.default.extractTimestamp(e.start_id))
          .filter((e) => Object.keys(e).length > 0)
          .map((e) => N(e, t))
          .reverse()
          .value(),
        s = O[t] ?? [],
        l = o()
          .chain(a)
          .concat(s)
          .sortBy((e) => S.default.extractTimestamp(e.startId))
          .takeRight(75)
          .uniqBy("id")
          .reverse()
          .value();
      ((O[t] = l),
        (R[t] = { ...R[t], error: void 0, fetching: R[t]?.fetching ?? !1, lastReceivedAt: r }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
      ((O = {}), (R = {}));
    },
    DELETE_SUMMARY(e) {
      let t = e.summary.channelId,
        n = (O[t] ?? []).indexOf(e.summary);
      -1 !== n && O[t].splice(n, 1);
    },
  });
}
