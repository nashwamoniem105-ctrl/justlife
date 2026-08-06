import {
    u as f,
    ex as d
} from "./CYJpyD6L.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "6d3e1ce0-d6b0-4c32-a5cc-d9341c041354", e._sentryDebugIdIdentifier = "sentry-dbid-6d3e1ce0-d6b0-4c32-a5cc-d9341c041354")
} catch {}
const h = () => {
    const e = f().$i18n.t,
        {
            $isCareem: s
        } = f(),
        n = r => {
            const {
                unit: t,
                building: o,
                street: i,
                address: c,
                directions: l,
                neighborhood: g,
                city_name: p,
                saved_as: a,
                name: u,
                formatted_address: b
            } = r;
            return s ? {
                title: a || u || e("forms.address.tags.home"),
                description1: d([o, t, i, c]),
                description2: b || ""
            } : {
                title: u || a || e("forms.address.tags.home"),
                description1: d([t, o, i, c, l]),
                description2: d([g, p])
            }
        };
    return {
        format: n,
        getFullAddressText: r => {
            const t = n(r);
            return d([t.description1, t.description2])
        }
    }
};
export {
    h as u
};