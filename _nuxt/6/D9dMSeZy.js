import {
    d as n,
    B as o,
    E as i,
    D as l
} from "./CYJpyD6L.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9cc19e7-0b33-4cf3-9795-b7fa502be8fc", e._sentryDebugIdIdentifier = "sentry-dbid-a9cc19e7-0b33-4cf3-9795-b7fa502be8fc")
} catch {}
const s = ["width", "height"],
    d = ["fill", "fill-opacity"],
    f = n({
        name: "ChevronRight",
        __name: "ChevronRight",
        props: {
            color: {
                type: String,
                default: "black"
            },
            opacity: {
                type: [Number, String],
                default: .87
            },
            size: {
                type: String,
                default: "20"
            }
        },
        setup(e) {
            const t = e;
            return (r, a) => (l(), o("svg", {
                width: t.size,
                height: t.size,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [i("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.93869 4.16699L7.58984 5.5281L12.0218 10.0003L7.58984 14.4725L8.93869 15.8337L14.7195 10.0003L8.93869 4.16699Z",
                fill: t.color,
                "fill-opacity": t.opacity
            }, null, 8, d)], 8, s))
        }
    });
export {
    f as _
};