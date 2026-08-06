import {
    d as s,
    B as o,
    H as r,
    J as i,
    D as a,
    _ as d
} from "./CYJpyD6L.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0fdf7494-e8b4-4ab7-965d-f76f2f704aec", e._sentryDebugIdIdentifier = "sentry-dbid-0fdf7494-e8b4-4ab7-965d-f76f2f704aec")
} catch {}
const l = ["textContent"],
    f = s({
        name: "TitleTextItem",
        __name: "TitleTextItem",
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
            return (n, p) => (a(), o("p", {
                class: i(["title-text-item", [t.options, n.$app.locale]]),
                textContent: r(t.title)
            }, null, 10, l))
        }
    }),
    u = d(f, [
        ["__scopeId", "data-v-dbf9b1f9"]
    ]);
export {
    u as T
};