const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Cuz77mvl.js", "./BJcaMEbZ.js", "./CYJpyD6L.js", "./entry.CRGQGBqk.css", "./yInyPfYM.js", "./B1hnYIsi.js", "./TitleTextItem.BgfIqJ8y.css", "./B61Dk4PF.js", "./CaptionTextItem.B98ug7T9.css", "./Y4P1xorr.js", "./CUUpt13o.js", "./DMws7e9H.js", "./DbbSiTML.js", "./LocationSearch.ioU0w2Z7.css", "./Welcome.DZ7-D62n.css", "./DkHzv_OA.js", "./CpVdFlqQ.js", "./SectionTitle.VdBQ9ygq.css", "./BlogCategoriesSection.CCCwimJe.css", "./WuhH62Ko.js", "./C-UoQ3eb.js", "./CuPgRsfS.js", "./D9dMSeZy.js", "./B4F4J1Kf.js", "./h-blOwf3.js", "./BookingTouchPoint.CFWuSDxM.css", "./BvcK7Jgf.js", "./BFGxFR8e.js", "./C9fKX6AR.js", "./ServiceCardSlider.Sfk2Tyns.css", "./Cv6db0jL.js", "./BOn9yV9S.js", "./BkiVazbO.js", "./InstantChip.M-YAx5e9.css", "./ServiceShortcuts.CLuICiLZ.css", "./CcCASOHH.js", "./CjvwglVw.js", "./DI6jxWII.js", "./ServiceCard.BsTykHs0.css", "./sSynvupK.js", "./ActiveServices.wgjq6HWE.css", "./CZwEPBUL.js", "./TestimonialsSection.Y07083qY.css"]))) => i.map(i => d[i]);
import {
    u as U,
    aR as ne,
    g as j,
    aS as se,
    c as y,
    O as K,
    d as z,
    aj as ae,
    B as I,
    D as d,
    E as p,
    f as c,
    G as v,
    F as ie,
    N as re,
    aw as q,
    aT as P,
    H as F,
    r as M,
    o as Q,
    b as ce,
    S as $,
    aU as ue,
    aV as X,
    aW as Y,
    _ as le,
    Q as S,
    X as w,
    as as de,
    ai as pe,
    al as me,
    at as f,
    ax as _e,
    ar as fe,
    aA as g,
    R as ge,
    p as V,
    aX as he,
    aY as ve,
    aZ as Se,
    a8 as ye,
    a_ as Ie,
    a$ as Ae,
    ao as l,
    L as k,
    b0 as Ee
} from "./CYJpyD6L.js";
import {
    s as G,
    C as H,
    a as Le
} from "./DaZxRZCd.js";
import {
    _ as Z
} from "./CUUpt13o.js";
import {
    S as J
} from "./CpVdFlqQ.js";
import {
    M as Te
} from "./mshO33w7.js";
import {
    g as we
} from "./WypnWTun.js";
import {
    h as ke
} from "./BmRwNjWB.js";
import {
    a as ee,
    u as Ce
} from "./DMws7e9H.js";
import {
    u as be
} from "./DxRtg0CZ.js";
import "./IVMBincF.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b1c14fa-8034-47cf-995f-30ec68343f37", e._sentryDebugIdIdentifier = "sentry-dbid-4b1c14fa-8034-47cf-995f-30ec68343f37")
} catch {}
const W = "__nuxt_component";

function Re() {
    const e = j(),
        t = K(),
        {
            _fetchKeyBase: o
        } = e.proxy.$options;
    return ke([o, t.path, t.query, t.matched.findIndex(n => Object.values(n.components || {}).includes(e.type))])
}
async function De(e, t) {
    const o = U(),
        {
            fetchKey: n
        } = j().proxy.$options,
        a = (typeof n == "function" ? n(() => "") : n) || Re(),
        {
            data: s,
            error: u
        } = await be(`options:asyncdata:${a}`, () => t(o));
    if (u.value) throw se(u.value);
    if (s.value && typeof s.value == "object") {
        const m = await e;
        for (const i in s.value) m[i] = y({
            get: () => {
                var r;
                return (r = s.value) == null ? void 0 : r[i]
            },
            set(r) {
                s.value || (s.value = {}), s.value[i] = r
            }
        })
    }
}
const Pe = function(...t) {
        const [o, n] = t, {
            setup: a
        } = o;
        return !a && !o.asyncData && !o.head ? {
            [W]: !0,
            ...o
        } : {
            [W]: !0,
            _fetchKeyBase: n,
            ...o,
            setup(s, u) {
                const m = U();
                let i = {};
                if (a) {
                    const _ = () => Promise.resolve(a(s, u)).then(h => h || {});
                    ne(m._id).set(m), i = _()
                }
                const r = [];
                return o.asyncData && r.push(De(i, o.asyncData)), o.head && ee(typeof o.head == "function" ? () => o.head(m) : o.head), Promise.resolve(i).then(() => Promise.all(r)).then(() => i).finally(() => {
                    r.length = 0
                })
            }
        }
    },
    $e = {
        id: "features-section",
        class: "wrapper features-section"
    },
    xe = {
        class: "container"
    },
    Oe = {
        class: "features-section-content"
    },
    Be = {
        class: "feature-image"
    },
    Ne = z({
        name: "FeaturesSection",
        __name: "FeaturesSection",
        setup(e) {
            const t = ae().t,
                o = [{
                    svg: "star",
                    title: t("index.section_features.feature_1_title"),
                    description: t("index.section_features.feature_1_description"),
                    url: "star-lg.svg",
                    alt: "star-lg-icon"
                }, {
                    svg: "schedule",
                    title: t("index.section_features.feature_2_title"),
                    description: t("index.section_features.feature_2_description"),
                    url: "schdle_lg.svg",
                    alt: "schedule-icon"
                }, {
                    svg: "graphic",
                    title: t("index.section_features.feature_3_title"),
                    description: t("index.section_features.feature_3_description"),
                    url: "gph-lg.svg",
                    alt: "graphic-icon"
                }, {
                    svg: "frame",
                    title: t("index.section_features.feature_4_title"),
                    description: t("index.section_features.feature_4_description"),
                    url: "frame.svg",
                    alt: "frame-icon"
                }];
            return (n, a) => (d(), I("div", $e, [p("div", xe, [c(J, {
                title: v(t)("index.section_features.main_title"),
                subtitle: v(t)("index.section_features.main_description")
            }, null, 8, ["title", "subtitle"]), p("div", Oe, [(d(), I(ie, null, re(o, (s, u) => p("div", {
                key: "feature-" + u,
                class: "feature-card"
            }, [p("div", Be, [c(Z, {
                loading: "lazy",
                format: v(P).ORIGINAL,
                src: `svgs/${s.url}`,
                default: v(q).ORIGINAL,
                alt: s.alt
            }, null, 8, ["format", "src", "default", "alt"])]), p("p", null, F(s.title), 1), p("span", null, F(s.description), 1)])), 64))])])]))
        }
    }),
    Fe = {
        class: "container"
    },
    Me = {
        class: "insurance-section-inside"
    },
    Ve = {
        class: "insurance-logo"
    },
    Ge = z({
        name: "InsuranceSection",
        __name: "InsuranceSection",
        setup(e) {
            const t = M(null),
                o = M(!1),
                n = () => {
                    if (!o.value && t.value) {
                        o.value = !0;
                        const a = `#00C3FF url(${$().imageBase}home/pattern.png?${ue.FORMAT}=${P.WEBP}) repeat`;
                        t.value.style.background = a
                    }
                };
            return Q(() => {
                window.addEventListener("scroll", n, {
                    once: !0
                })
            }), ce(() => {
                window.removeEventListener("scroll", n)
            }), (a, s) => (d(), I("div", {
                ref_key: "insuranceRef",
                ref: t,
                class: "wrapper insurance-section"
            }, [p("div", Fe, [p("div", Me, [p("div", Ve, [c(Z, {
                loading: "lazy",
                format: v(P).ORIGINAL,
                src: "svgs/jl-insurance-logo.svg",
                default: v(q).ORIGINAL,
                width: "108",
                height: "108",
                alt: "insurance-icon"
            }, null, 8, ["format", "default"])]), c(J, {
                title: a.$t("index.section_insurance.main_title"),
                subtitle: a.$t("index.section_insurance.main_description"),
                color: "white",
                position: "left"
            }, null, 8, ["title", "subtitle"])])])], 512))
        }
    });

function He() {
    const e = X(Y.USE_TESTIMONIALS, () => ({
            testimonials: null
        })),
        t = y(() => e.value.testimonials);
    return {
        setTestimonials: n => {
            e.value.testimonials = n
        },
        testimonials: t
    }
}

function We(e, t) {
    const o = Ee();
    return o || we()[e][t]
}
const Ue = Pe({
        name: "MainPage",
        setup(e) {
            var B, N;
            const t = K(),
                o = ge(),
                n = $(),
                a = t.params.services,
                s = Le(a),
                u = s ? {} : {
                    rel: "canonical",
                    href: "https://www.justlife.com" + t.path
                },
                m = s ? "noindex, nofollow" : "index,follow",
                i = o.state.currentCountry.short_big,
                r = (B = t.params.lang) != null && B.includes(i) ? i : "default",
                _ = We(n.locale, r),
                A = V().public,
                {
                    testimonials: h
                } = He();
            ee({
                meta: [{
                    name: "facebook-domain-verification",
                    content: V().public.environment === ye.PRODUCTION ? "7u0hppjzhri0zq4bgj6jll5w8cf4bm" : ""
                }],
                link: [u, ...Se({
                    linkGenerator: oe => oe,
                    defaultLocale: ""
                })],
                script: [G(void 0, he[n.locale], H.ORGANIZATION), G(void 0, ve(n.locale, (N = h.value) == null ? void 0 : N.reviews), H.SOFTWARE_APPLICATION)]
            }), Ce({
                title: _.title,
                description: _.description,
                keywords: o.state.siteSettings.keywords,
                ogTitle: _.title,
                ogDescription: _.description,
                ogImage: `${A.imageBaseURL}rounded1.png`,
                robots: m
            });
            const E = y(() => o.state.user),
                {
                    selectedLocationExists: L,
                    checkStorageLocationExistsFromCookies: C,
                    getSelectedLocationFromStorage: b,
                    setSelectedLocation: R
                } = Ie(),
                {
                    activeReplacements: T
                } = Ae(),
                D = y(() => !!(n.isLoggedIn || t.params.services || L.value)),
                x = X(Y.HYDRATED_SHOW_SERVICE_SHORTCUTS, () => D.value),
                te = y(() => x.value || D.value);
            C(), Q(() => {
                x.value = null
            });
            const O = {
                selectedLocationExists: L,
                getSelectedLocationFromStorage: b,
                setSelectedLocation: R,
                user: E,
                showServiceShortcuts: D,
                isServicesShortcuts: te,
                activeReplacements: T,
                testimonials: h
            };
            return e.isImportedFromAnotherPage, O
        },
        props: {
            isImportedFromAnotherPage: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            Welcome: f(() => g(() =>
                import ("./Cuz77mvl.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
                import.meta.url)),
            BlogCategoriesSection: f(() => g(() =>
                import ("./DkHzv_OA.js"), __vite__mapDeps([15, 16, 2, 3, 17, 10, 11, 18]),
                import.meta.url)),
            HomeTouchpointSocketWrapper: f(() => g(() =>
                import ("./WuhH62Ko.js"), __vite__mapDeps([19, 20, 2, 3]),
                import.meta.url)),
            BookingTouchPoint: f(() => g(() =>
                import ("./CuPgRsfS.js"), __vite__mapDeps([21, 2, 3, 22, 23, 10, 11, 24, 25]),
                import.meta.url)),
            ServiceShortcuts: f(() => g(() =>
                import ("./BvcK7Jgf.js"), __vite__mapDeps([26, 2, 3, 27, 10, 11, 28, 29, 30, 31, 32, 33, 34]),
                import.meta.url)),
            ActiveServices: f(() => g(() =>
                import ("./CcCASOHH.js"), __vite__mapDeps([35, 2, 3, 16, 17, 4, 27, 10, 11, 28, 29, 36, 37, 30, 32, 33, 38, 39, 40]),
                import.meta.url)),
            FeaturesSection: Ne,
            InsuranceSection: Ge,
            TestimonialsSection: f(() => g(() =>
                import ("./CZwEPBUL.js"), __vite__mapDeps([41, 2, 3, 16, 17, 28, 22, 10, 11, 42]),
                import.meta.url)),
            MobileAppDownloader: Te
        },
        data() {
            return {
                eventsHandler: _e(this._.provides[fe] || this.$route)
            }
        },
        computed: { ...de({
                baseURL: e => e.baseURL,
                currentCountry: e => e.currentCountry,
                updatedBookingList: e => e.booking.updatedBookingList
            })
        },
        beforeCreate() {
            this.$store.commit("update_page_name", "homepage")
        },
        beforeMount() {
            $().isLoggedIn || this.setSelectedLocation(this.getSelectedLocationFromStorage())
        },
        mounted() {
            this.$watch("showServiceShortcuts", (e, t) => {
                e ? this.eventsHandler.sendPageViewEvent("HOMEPAGE", this.EVENT_PAGE_FORMAT.FULLPAGE) : this.eventsHandler.sendPageViewEvent("LANDING_PAGE", this.EVENT_PAGE_FORMAT.FULLPAGE)
            }, {
                immediate: !0
            }), this.pageView(), window.scrollTo(0, 0)
        }
    }, "$20WTqpESSd"),
    je = {
        class: "h-100 _column"
    },
    Ke = {
        key: 0,
        class: "retained-section"
    },
    ze = {
        class: "visitor-section"
    };

function qe(e, t, o, n, a, s) {
    const u = l("BookingTouchPoint"),
        m = l("HomeTouchpointSocketWrapper"),
        i = pe,
        r = l("ServiceShortcuts"),
        _ = l("ActiveServices"),
        A = l("Welcome"),
        h = l("BlogCategoriesSection"),
        E = me,
        L = l("FeaturesSection"),
        C = l("TestimonialsSection"),
        b = l("InsuranceSection"),
        R = l("MobileAppDownloader");
    return d(), I("div", je, [c(i, null, {
        default: w(() => {
            var T;
            return [e.$app.isLoggedIn && ((T = e.user.info) != null && T.user.id) ? (d(), S(m, {
                key: 0,
                "client-id": e.user.info.user.id
            }, {
                default: w(() => [e.activeReplacements && e.activeReplacements.length ? (d(), S(u, {
                    key: 0,
                    replacements: e.activeReplacements
                }, null, 8, ["replacements"])) : k("", !0)]),
                _: 1
            }, 8, ["client-id"])) : k("", !0)]
        }),
        _: 1
    }), e.isServicesShortcuts ? (d(), I("div", Ke, [c(r), c(_)])) : (d(), S(E, {
        key: 1
    }, {
        default: w(() => [p("div", ze, [c(A), e.currentCountry.short === "ae" ? (d(), S(h, {
            key: 0
        })) : k("", !0)])]),
        _: 1
    })), c(E, null, {
        default: w(() => [c(L), e.testimonials ? (d(), S(C, {
            key: 0,
            testimonials: e.testimonials
        }, null, 8, ["testimonials"])) : k("", !0), c(b), c(R)]),
        _: 1
    })])
}
const at = le(Ue, [
    ["render", qe],
    ["__scopeId", "data-v-23c89738"]
]);
export {
    at as
    default
};