try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73ea1e3f-e6cf-4af6-b6e8-8f9b841bf352", e._sentryDebugIdIdentifier = "sentry-dbid-73ea1e3f-e6cf-4af6-b6e8-8f9b841bf352")
} catch {}
const y = {
    trailing: !0
};

function p(e, t = 25, n = {}) {
    if (n = { ...y,
            ...n
        }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let o, l, s = [],
        r, f;
    const a = (i, u) => (r = g(e, i, u), r.finally(() => {
        if (r = null, n.trailing && f && !l) {
            const d = a(i, f);
            return f = null, d
        }
    }), r);
    return function(...i) {
        return r ? (n.trailing && (f = i), r) : new Promise(u => {
            const d = !l && n.leading;
            clearTimeout(l), l = setTimeout(() => {
                l = null;
                const b = n.leading ? o : a(this, i);
                for (const c of s) c(b);
                s = []
            }, t), d ? (o = a(this, i), u(o)) : s.push(u)
        })
    }
}
async function g(e, t, n) {
    return await e.apply(t, n)
}
export {
    p as d
};