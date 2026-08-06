import {
    d as h,
    aw as a,
    aT as f,
    av as B,
    S as _,
    Y as L,
    c as d,
    aU as p,
    b2 as l,
    b3 as D,
    b4 as T,
    B as v,
    G as g,
    D as w
} from "./CYJpyD6L.js";
import {
    a as P
} from "./DMws7e9H.js";
try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "be3f67bc-931a-459f-926d-c691998d1feb", t._sentryDebugIdIdentifier = "sentry-dbid-be3f67bc-931a-459f-926d-c691998d1feb")
} catch {}
const A = ["src", "alt", "fetchpriority"],
    U = h({
        name: "DynamicImage",
        __name: "DynamicImage",
        props: {
            src: {
                type: String,
                required: !0
            },
            alt: {
                type: String,
                required: !0
            },
            format: {
                type: String,
                default: f.WEBP
            },
            default: {
                type: String,
                default: a.XL
            },
            mobile: {
                type: String
            },
            tablet: {
                type: String
            },
            preload: {
                type: Boolean,
                default: !1
            },
            customBaseUrl: {
                type: String
            },
            fetchPriority: {
                type: String
            },
            isSvgProxyRequired: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const i = {
                    [a.XS]: 320,
                    [a.SM]: 640,
                    [a.MD]: 768,
                    [a.LG]: 1024,
                    [a.XL]: 1280,
                    [a.XXL]: 1536,
                    [a.ORIGINAL]: null
                },
                e = t,
                {
                    isMobile: m,
                    isTablet: y
                } = B(),
                b = _(),
                I = L(),
                c = r => {
                    const o = e.mobile ? i[e.mobile] : null,
                        s = e.tablet ? i[e.tablet] : null,
                        n = i[e.default];
                    return r === l.MOBILE ? o ? ? s ? ? n : r === l.TABLET ? s ? ? n : n
                },
                u = d(() => {
                    const r = {
                        [p.FORMAT]: e.format === f.ORIGINAL ? null : e.format,
                        [p.WIDTH]: null
                    };
                    m ? r.w = c(l.MOBILE) : y ? r.w = c(l.TABLET) : r.w = c();
                    const o = e.customBaseUrl ? e.customBaseUrl : b.imageBase,
                        s = D(o, e.src, r);
                    if (s && e.isSvgProxyRequired && s.split("?")[0].endsWith(".svg")) {
                        const n = new URLSearchParams({
                            target: s
                        });
                        return I.getBaseUrl() + "svg-proxy?" + n.toString()
                    }
                    return s
                }),
                S = d(() => {
                    if (e.fetchPriority) return e.fetchPriority;
                    if (e.preload) return T.HIGH
                });
            return P({
                link: () => e.preload ? [{
                    rel: "preload",
                    as: "image",
                    href: u.value
                }] : []
            }), (r, o) => (w(), v("img", {
                src: g(u),
                alt: e.alt,
                fetchpriority: g(S)
            }, null, 8, A))
        }
    });
export {
    U as _
};