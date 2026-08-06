import {
    d as n,
    B as o,
    H as s,
    J as d,
    D as r,
    _ as a
} from "./CYJpyD6L.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "798f4512-d9df-4dc7-9a32-70d1c52b3e67", e._sentryDebugIdIdentifier = "sentry-dbid-798f4512-d9df-4dc7-9a32-70d1c52b3e67")
} catch {}
const i = ["textContent"],
    l = n({
        name: "ButtonTextItem",
        __name: "ButtonTextItem",
        props: {
            title: {
                required: !0,
                type: [String, Number]
            },
            options: {
                required: !0,
                type: String
            }
        },
        setup(e) {
            const t = e;
            return (c, p) => (r(), o("p", {
                class: d(["button-text-item", t.options]),
                textContent: s(t.title)
            }, null, 10, i))
        }
    }),
    f = a(l, [
        ["__scopeId", "data-v-ad46f2db"]
    ]);
export {
    f as B
};