import {
    a2 as X,
    p as ge,
    a8 as J,
    O as he,
    R as me,
    Z as pe,
    c as E,
    u as ve,
    S as _e,
    aV as ye,
    aW as Te,
    r as Z,
    bv as be,
    a1 as G,
    bX as Q,
    bY as Ie,
    y as Ee,
    bZ as We,
    b_ as we,
    b$ as Ce
} from "./CYJpyD6L.js";
try {
    let r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        s = new r.Error().stack;
    s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "91650d0d-36e1-421a-87d2-795f5dfb222c", r._sentryDebugIdIdentifier = "sentry-dbid-91650d0d-36e1-421a-87d2-795f5dfb222c")
} catch {}

function Se({
    channels: r,
    locale: s,
    topicKey: c
}) {
    if (c) {
        const u = r.find(y => y.topicKey === c);
        if (u) return u
    }
    return r.find(u => u.lang === s)
}

function Re(r) {
    const s = `${r.key}-start`,
        c = `${r.key}-end`,
        u = `${r.key}-duration`;

    function y() {
        performance.mark(s)
    }

    function R() {
        performance.mark(c)
    }

    function x() {
        const W = performance.getEntriesByName(s, "mark").length > 0,
            w = performance.getEntriesByName(c, "mark").length > 0;
        if (!W || !w) {
            console.error(`Cannot measure ${r.key}: start or end mark is missing.`), X().captureError(`Cannot measure ${r.key}: start or end mark is missing.`, {
                description: `HasStartEntries: ${W}, HasEndEntries: ${w}`
            });
            return
        }
        performance.measure(u, s, c);
        const [M] = performance.getEntriesByName(u), A = M.duration;
        return g(), A
    }

    function g() {
        performance.clearMarks(s), performance.clearMarks(c), performance.clearMeasures(u)
    }
    return {
        startMeasuring: y,
        endMeasuring: R,
        clearMeasurement: g,
        measure: x
    }
}

function Me() {
    const r = ge();
    return {
        getTestSubdomain: () => {
            const c = r.public.environment;
            if (!(c === J.TEST || c === J.DEVELOPMENT)) return null;
            const [y] = globalThis.location.hostname.split(".");
            return y || null
        }
    }
}
const Ae = "//fw-cdn.com/12433347/4851708.js";

function Pe() {
    const r = he(),
        s = me(),
        {
            startMeasuring: c,
            endMeasuring: u,
            measure: y
        } = Re({
            key: "freshchat-load-and-open"
        }),
        {
            sendInfoLogEvent: R
        } = pe(),
        {
            getTestSubdomain: x
        } = Me(),
        g = E(() => s.state.user),
        W = E(() => {
            var e;
            return (e = s.state.helpCenterQuestion) == null ? void 0 : e.question
        }),
        w = E(() => s.state.freshchatUserData),
        M = ve(),
        A = M.$isCareem,
        T = _e(),
        $ = M.$i18n.t,
        L = X(),
        D = ye(Te.CHAT_HANDLER_COMPOSABLE, () => ({
            isScriptLoaded: !1,
            loadPromise: null
        })),
        Y = E(() => D.value.isScriptLoaded),
        F = E(() => D.value.loadPromise);

    function P(e) {
        D.value.isScriptLoaded = e
    }

    function k(e) {
        D.value.loadPromise = e
    }
    const i = Z(null),
        O = Z(null),
        b = E(() => {
            var e;
            return ((e = i.value) == null ? void 0 : e.freshchatRestoreId) || null
        }),
        d = E(() => {
            var t, a;
            const e = (a = (t = g.value) == null ? void 0 : t.info) == null ? void 0 : a.user;
            if (e) return e.id ? String(e.id) : null
        });
    async function C() {
        if (!g.value.logged_in) return;
        const e = d.value ? ? null;
        i.value && O.value === e || (i.value = await s.dispatch("getAccountProperties"), O.value = e)
    }

    function ee() {
        return { ...d.value ? {
                externalId: d.value
            } : {},
            ...b.value ? {
                restoreId: b.value
            } : {},
            config: {
                content: {
                    headers: {
                        csat_question: $("freshchat_csat_question")
                    }
                }
            }
        }
    }

    function te(e) {
        return c(), new Promise((t, a) => {
            we(), globalThis.fcWidgetMessengerConfig = ee();
            const n = document.createElement("script");
            n.id = Ce, n.src = e, n.setAttribute("chat", "true"), n.async = !0, n.onload = () => {
                t()
            }, n.onerror = o => {
                R({
                    type: G.FRESHCHAT_ERROR,
                    messages: [`Failed to load script: ${e}`, `Error: ${o.toString()}`]
                }), a(new Error(`Failed to load script: ${e}`))
            }, document.head.appendChild(n)
        })
    }
    async function ae(e) {
        try {
            if (await C(), await te(Ae), await We({
                    timeout: 5e3,
                    checkInterval: 100,
                    checkCondition: () => !!globalThis.fcWidget
                }), !globalThis.fcWidget) throw new Error("Freshchat widget not available after script loading.");
            P(!0), await V(), e()
        } catch (t) {
            throw P(!1), k(null), L.captureError(t), t
        }
    }
    async function H(e = () => {}) {
        if (globalThis.fcWidget && Y.value) return e(), F.value;
        if (F.value) return F.value;
        const t = ae(e);
        return k(t), t
    }

    function N() {
        return A ? Q.CAREEM : Q.DEFAULT
    }

    function ne() {
        var n, o, m, f, p, l, h, v, _, I;
        const e = g.value.info,
            t = ((n = i.value) == null ? void 0 : n.name) || ((m = (o = e.user) == null ? void 0 : o.name) == null ? void 0 : m.split(" ")[0]) || "",
            a = ((f = i.value) == null ? void 0 : f.surname) || ((l = (p = e.user) == null ? void 0 : p.name) == null ? void 0 : l.split(" ")[1]) || "";
        return { ...d.value ? {
                externalId: d.value
            } : {},
            firstName: t,
            lastName: a,
            email: ((h = i.value) == null ? void 0 : h.email_address) || ((v = e.user) == null ? void 0 : v.email) || "",
            phone: ((_ = i.value) == null ? void 0 : _.phone) || ((I = e.user) == null ? void 0 : I.phone) || ""
        }
    }

    function ie() {
        return { ...d.value ? {
                externalId: d.value
            } : {},
            ...b.value ? {
                restoreId: b.value
            } : {}
        }
    }

    function se() {
        var e;
        d.value && typeof((e = globalThis.fcWidget) == null ? void 0 : e.setExternalId) == "function" && globalThis.fcWidget.setExternalId(d.value)
    }
    async function re() {
        var e, t, a;
        if (!((t = (e = globalThis.fcWidget) == null ? void 0 : e.user) != null && t.get)) return null;
        try {
            const n = await globalThis.fcWidget.user.get();
            return (a = n == null ? void 0 : n.data) != null && a.externalId ? String(n.data.externalId) : null
        } catch {
            return null
        }
    }
    async function oe() {
        var t, a;
        if (!(!d.value || !((a = (t = globalThis.fcWidget) == null ? void 0 : t.isInitialized) != null && a.call(t)) || await re() === d.value)) {
            try {
                await Ie()
            } catch (n) {
                L.captureError(n)
            }
            P(!1), k(null), await H()
        }
    }
    async function le(e) {
        try {
            await s.dispatch("save_freshchat_restore_id", e), i.value ? i.value.freshchatRestoreId = e : i.value = {
                freshchatRestoreId: e,
                topic_key: null
            }
        } catch (t) {
            L.captureError(t)
        }
    }

    function ce() {
        !globalThis.fcWidget || globalThis.fcWidget.__restoreIdHandlerRegistered || (globalThis.fcWidget.__restoreIdHandlerRegistered = !0, globalThis.fcWidget.on("user:created", async e => {
            var a;
            const t = ((a = e == null ? void 0 : e.data) == null ? void 0 : a.restoreId) || null;
            t && t !== b.value && await le(t)
        }))
    }

    function q() {
        var t;
        const e = (t = i.value) == null ? void 0 : t.topic_key;
        return e ? [e] : g.value.logged_in ? [T.locale] : [T.locale, "not_login_visitor"]
    }

    function ue(e) {
        return {
            tags: e ? ? q(),
            locale: T.locale,
            ...ne(),
            ...b.value ? {
                restoreId: b.value
            } : {}
        }
    }
    async function de(e) {
        var t;
        return await C(), Se({
            channels: s.state.freshchatChannels,
            locale: e,
            topicKey: (t = i.value) == null ? void 0 : t.topic_key
        })
    }

    function K() {
        return {
            content: {
                headers: {
                    csat_question: $("freshchat_csat_question")
                }
            }
        }
    }
    async function B({
        config: e = K(),
        freshchatTags: t
    }) {
        globalThis.fcWidget && (await C(), se(), globalThis.fcWidget.init({ ...ue(t),
            config: e
        }), ce())
    }
    async function U(e = {}) {
        var m, f, p, l, h, v, _, I, S, j;
        if (!globalThis.fcWidget) return;
        const t = Ee(),
            a = ie();
        let n;
        const o = t.newCareemUserData;
        o && (n = {
            firstName: o.name,
            lastName: o.surname,
            first_name: o.name,
            last_name: o.surname,
            email: o.email,
            phone: o.phone,
            cf_platform: N()
        }), g.value.logged_in && (await C(), n = {
            firstName: (m = i.value) == null ? void 0 : m.name,
            lastName: (f = i.value) == null ? void 0 : f.surname,
            first_name: (p = i.value) == null ? void 0 : p.name,
            last_name: (l = i.value) == null ? void 0 : l.surname,
            email: (h = i.value) == null ? void 0 : h.email_address,
            phone: (v = i.value) == null ? void 0 : v.phone,
            cf_RFM: (_ = i.value) == null ? void 0 : _.RFM,
            cf_cx_segment: (I = i.value) == null ? void 0 : I.cx_segment,
            cf_language: T.locale ? ? ((S = i.value) == null ? void 0 : S.language),
            cf_platform: N()
        }, globalThis.fcWidget.setFaqTags({
            tags: JSON.parse(JSON.stringify((j = i.value) == null ? void 0 : j.customer_help_status_tag)),
            filterType: "article"
        })), (n || Object.keys(a).length) && globalThis.fcWidget.user.setProperties({ ...a,
            ...n,
            ...W.value ? {
                cf_question: W.value
            } : {},
            ...e.additionalUserProperties
        }), z()
    }

    function z() {
        var t, a;
        const e = x();
        e && typeof((a = (t = globalThis.fcWidget) == null ? void 0 : t.conversation) == null ? void 0 : a.setConversationProperties) == "function" && globalThis.fcWidget.conversation.setConversationProperties({
            cf_testDomain: e
        })
    }
    async function V() {
        var t;
        if (!globalThis.fcWidget) return;
        !T.isFunnelPage && !((t = r.name) != null && t.toString().includes("my-account")) && !A && g.value.logged_in && await B({});
        let e = !1;
        globalThis.fcWidget.on("widget:opened", async () => {
            e || (e = !0, await U())
        })
    }
    async function fe(e = {}) {
        var f, p;
        if (!T.isLoggedIn) {
            s.commit("open_modal", be.START_CHAT_MODAL);
            return
        }
        if (await C(), !!((p = (f = globalThis.fcWidget) == null ? void 0 : f.isInitialized) != null && p.call(f)) || (P(!1), k(null), await H()), await oe(), !globalThis.fcWidget) return;
        const a = q(),
            n = { ...K(),
                cssNames: {
                    widget: e.className || ""
                }
            };
        await B({
            config: n,
            freshchatTags: a
        });

        function o(l, h) {
            var _;
            const v = (...I) => {
                var S;
                typeof((S = globalThis.fcWidget) == null ? void 0 : S.off) == "function" && globalThis.fcWidget.off(l, v), h(...I)
            };
            (_ = globalThis.fcWidget) == null || _.on(l, v)
        }
        o("widget:opened", () => {
            U(e)
        }), o("user:created", () => {
            U(e)
        });

        function m() {
            typeof globalThis.fcWidget.setTags == "function" && globalThis.fcWidget.setTags(a), e.defaultChannel ? globalThis.fcWidget.open({
                name: e.defaultChannel.name[T.locale]
            }) : globalThis.fcWidget.open()
        }
        globalThis.fcWidget.isLoaded() ? m() : globalThis.fcWidget.on("widget:loaded", () => {
            u();
            const l = y();
            l && R({
                type: G.FRESHCHAT_LOAD_TIME,
                messages: [l.toFixed(1)]
            }), m()
        }), o("widget:opened", async () => {
            if (e.initialUserMessage && !globalThis.fcWidget.__initialMessageSent) {
                globalThis.fcWidget.__initialMessageSent = !0, w.value.appId || await s.dispatch("save_freshchat_user_data");
                const l = w.value;
                if (e.defaultChannel && l) {
                    const h = {
                        message: e.initialUserMessage ? ? "",
                        user_id: l.alias,
                        channel_id: e.defaultChannel.id,
                        app_id: l.appId
                    };
                    await s.dispatch("send_freshchat_message", h)
                }
            }
        })
    }
    return {
        getChatPlatformName: N,
        loadChatWidget: H,
        initializeChat: V,
        openChatDialog: fe,
        resolveFreshchatChannel: de,
        setTestDomainConversationProperty: z
    }
}
export {
    Pe as u
};