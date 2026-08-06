import {
    d as T
} from "./IVMBincF.js";
import {
    c as B,
    b5 as j,
    u as H,
    b6 as v,
    w as N,
    b7 as z,
    r as G,
    s as C,
    b8 as U,
    n as W,
    aS as q,
    G as F,
    b9 as J,
    g as L,
    af as Q,
    ba as X,
    aP as Y,
    bb as Z
} from "./CYJpyD6L.js";
try {
    let a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "00c58a2f-ae2e-4d89-a1fd-5199336b8355", a._sentryDebugIdIdentifier = "sentry-dbid-00c58a2f-ae2e-4d89-a1fd-5199336b8355")
} catch {}
const $ = a => a === "defer" || a === !1;

function aa(...a) {
    var D;
    const e = typeof a[a.length - 1] == "string" ? a.pop() : void 0;
    K(a[0], a[1]) && a.unshift(e);
    let [o, i, t = {}] = a;
    const n = B(() => j(o));
    if (typeof n.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof i != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const s = H();
    t.server ? ? (t.server = !0), t.default ? ? (t.default = p), t.getCachedData ? ? (t.getCachedData = I), t.lazy ? ? (t.lazy = !1), t.immediate ? ? (t.immediate = !0), t.deep ? ? (t.deep = v.deep), t.dedupe ? ? (t.dedupe = "cancel"), t._functionName, s._asyncData[n.value];
    const h = {
        cause: "initial",
        dedupe: t.dedupe
    };
    (D = s._asyncData[n.value]) != null && D._init || (h.cachedData = t.getCachedData(n.value, s, {
        cause: "initial"
    }), s._asyncData[n.value] = R(s, n.value, i, t, h.cachedData));
    const _ = s._asyncData[n.value];
    _._deps++;
    const m = () => s._asyncData[n.value].execute(h),
        c = t.server !== !1 && s.payload.serverRendered; {
        let r = function(d) {
            const f = s._asyncData[d];
            f != null && f._deps && (f._deps--, f._deps === 0 && (f == null || f._off()))
        };
        const u = L();
        if (u && c && t.immediate && !u.sp && (u.sp = []), u && !u._nuxtOnBeforeMountCbs) {
            u._nuxtOnBeforeMountCbs = [];
            const d = u._nuxtOnBeforeMountCbs;
            Q(() => {
                d.forEach(f => {
                    f()
                }), d.splice(0, d.length)
            }), X(() => d.splice(0, d.length))
        }
        const g = u && (u._nuxtClientOnly || Y(Z, !1));
        c && s.isHydrating && (_.error.value || _.data.value != null) ? (_.pending.value = !1, _.status.value = _.error.value ? "error" : "success") : u && (!g && s.payload.serverRendered && s.isHydrating || t.lazy) && t.immediate ? u._nuxtOnBeforeMountCbs.push(m) : t.immediate && m();
        const S = J(),
            V = N([n, ...t.watch || []], ([d], [f]) => {
                var w, O;
                if ((d || f) && d !== f) {
                    const M = ((w = s._asyncData[f]) == null ? void 0 : w.data.value) !== v.value;
                    f && r(f);
                    const P = {
                        cause: "initial",
                        dedupe: t.dedupe
                    };
                    (O = s._asyncData[d]) != null && O._init || (P.cachedData = t.getCachedData(d, s, {
                        cause: "initial"
                    }), s._asyncData[d] = R(s, d, i, t, P.cachedData)), s._asyncData[d]._deps++, (t.immediate || M) && s._asyncData[d].execute(P)
                } else _._execute({
                    cause: "watch",
                    dedupe: t.dedupe
                })
            }, {
                flush: "sync"
            });
        S && z(() => {
            V(), r(n.value)
        })
    }
    const y = {
            data: b(() => {
                var r;
                return (r = s._asyncData[n.value]) == null ? void 0 : r.data
            }),
            pending: b(() => {
                var r;
                return (r = s._asyncData[n.value]) == null ? void 0 : r.pending
            }),
            status: b(() => {
                var r;
                return (r = s._asyncData[n.value]) == null ? void 0 : r.status
            }),
            error: b(() => {
                var r;
                return (r = s._asyncData[n.value]) == null ? void 0 : r.error
            }),
            refresh: (...r) => s._asyncData[n.value].execute(...r),
            execute: (...r) => s._asyncData[n.value].execute(...r),
            clear: () => E(s, n.value)
        },
        l = Promise.resolve(s._asyncDataPromises[n.value]).then(() => y);
    return Object.assign(l, y), l
}

function b(a) {
    return B({
        get() {
            var e;
            return (e = a()) == null ? void 0 : e.value
        },
        set(e) {
            const o = a();
            o && (o.value = e)
        }
    })
}

function K(a, e) {
    return !(typeof a == "string" || typeof a == "object" && a !== null || typeof a == "function" && typeof e == "function")
}

function E(a, e) {
    e in a.payload.data && (a.payload.data[e] = void 0), e in a.payload._errors && (a.payload._errors[e] = v.errorValue), a._asyncData[e] && (a._asyncData[e].data.value = void 0, a._asyncData[e].error.value = v.errorValue, a._asyncData[e].pending.value = !1, a._asyncData[e].status.value = "idle"), e in a._asyncDataPromises && (a._asyncDataPromises[e] && (a._asyncDataPromises[e].cancelled = !0), a._asyncDataPromises[e] = void 0)
}

function x(a, e) {
    const o = {};
    for (const i of e) o[i] = a[i];
    return o
}

function R(a, e, o, i, t) {
    var y;
    (y = a.payload._errors)[e] ? ? (y[e] = v.errorValue);
    const n = i.getCachedData !== I,
        s = o,
        h = i.deep ? G : C,
        _ = t != null,
        m = a.hook("app:data:refresh", async l => {
            (!l || l.includes(e)) && await c.execute({
                cause: "refresh:hook"
            })
        }),
        c = {
            data: h(_ ? t : i.default()),
            pending: C(!_),
            error: U(a.payload._errors, e),
            status: C("idle"),
            execute: (l = {}) => {
                if (a._asyncDataPromises[e]) {
                    if ($(l.dedupe ? ? i.dedupe)) return a._asyncDataPromises[e];
                    a._asyncDataPromises[e].cancelled = !0
                }
                if (l.cause === "initial" || a.isHydrating) {
                    const r = "cachedData" in l ? l.cachedData : i.getCachedData(e, a, {
                        cause: l.cause ? ? "refresh:manual"
                    });
                    if (r != null) return a.payload.data[e] = c.data.value = r, c.error.value = v.errorValue, c.status.value = "success", Promise.resolve(r)
                }
                c.pending.value = !0, c.status.value = "pending";
                const D = new Promise((r, u) => {
                    try {
                        r(s(a))
                    } catch (g) {
                        u(g)
                    }
                }).then(async r => {
                    if (D.cancelled) return a._asyncDataPromises[e];
                    let u = r;
                    i.transform && (u = await i.transform(r)), i.pick && (u = x(u, i.pick)), a.payload.data[e] = u, c.data.value = u, c.error.value = v.errorValue, c.status.value = "success"
                }).catch(r => {
                    if (D.cancelled) return a._asyncDataPromises[e];
                    c.error.value = q(r), c.data.value = F(i.default()), c.status.value = "error"
                }).finally(() => {
                    D.cancelled || (c.pending.value = !1, delete a._asyncDataPromises[e])
                });
                return a._asyncDataPromises[e] = D, a._asyncDataPromises[e]
            },
            _execute: T((...l) => c.execute(...l), 0, {
                leading: !0
            }),
            _default: i.default,
            _deps: 0,
            _init: !0,
            _hash: void 0,
            _off: () => {
                var l;
                m(), (l = a._asyncData[e]) != null && l._init && (a._asyncData[e]._init = !1), n || W(() => {
                    var D;
                    (D = a._asyncData[e]) != null && D._init || (E(a, e), c.execute = () => Promise.resolve(), c.data.value = v.value)
                })
            }
        };
    return c
}
const p = () => v.value,
    I = (a, e, o) => {
        if (e.isHydrating) return e.payload.data[a];
        if (o.cause !== "refresh:manual" && o.cause !== "refresh:hook") return e.static.data[a]
    };
export {
    aa as u
};