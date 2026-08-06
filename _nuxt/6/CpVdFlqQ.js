import {
    d as r,
    B as n,
    L as i,
    H as o,
    J as l,
    D as s,
    _ as a
} from "./CYJpyD6L.js";
try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3ae5882f-e4fd-4544-a1fc-2b6ee229c112", t._sentryDebugIdIdentifier = "sentry-dbid-3ae5882f-e4fd-4544-a1fc-2b6ee229c112")
} catch {}
const d = ["textContent"],
    c = ["textContent"],
    p = ["textContent"],
    u = ["textContent"],
    f = r({
        name: "SectionTitle",
        __name: "SectionTitle",
        props: {
            title: {
                type: String,
                required: !0
            },
            badgeText: {
                type: String,
                required: !1
            },
            subtitle: {
                type: String,
                required: !1
            },
            taggedAs: {
                type: String,
                default: "h2"
            },
            position: {
                type: String,
                default: "center"
            },
            color: {
                type: String,
                default: "dark"
            },
            section: {
                type: String,
                required: !1
            },
            smaller: {
                type: Boolean,
                required: !1
            }
        },
        setup(t) {
            const e = t;
            return (g, y) => (s(), n("div", {
                class: l(["section-title-wrapper", [e.color, e.position, e.section]])
            }, [e.badgeText ? (s(), n("span", {
                key: 0,
                class: "section-badge-text",
                textContent: o(e.badgeText)
            }, null, 8, d)) : i("", !0), e.title && e.taggedAs === "h2" ? (s(), n("h2", {
                key: 1,
                class: l(["section-title", [e.color, {
                    smaller: e.smaller
                }]]),
                textContent: o(e.title)
            }, null, 10, c)) : e.title && e.taggedAs === "p" ? (s(), n("p", {
                key: 2,
                class: l(["section-title", [e.color]]),
                textContent: o(e.title)
            }, null, 10, p)) : i("", !0), e.subtitle ? (s(), n("p", {
                key: 3,
                class: "section-subtitle",
                textContent: o(e.subtitle)
            }, null, 8, u)) : i("", !0)], 2))
        }
    }),
    b = a(f, [
        ["__scopeId", "data-v-dc96736d"]
    ]);
export {
    b as S
};