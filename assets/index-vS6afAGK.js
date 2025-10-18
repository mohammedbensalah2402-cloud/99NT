import {
    r as e,
    a as s
} from "./vendor-liIMdADX.js";
import {
    X as a,
    L as t,
    P as l,
    M as i,
    C as c,
    S as n,
    V as r,
    a as o,
    b as d,
    c as m,
    U as x,
    H as h,
    d as u
} from "./icons-D6U1c6qq.js";
! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
        new MutationObserver((e => {
            for (const a of e)
                if ("childList" === a.type)
                    for (const e of a.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && s(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function s(e) {
        if (e.ep) return;
        e.ep = !0;
        const s = function(e) {
            const s = {};
            return e.integrity && (s.integrity = e.integrity), e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? s.credentials = "include" : "anonymous" === e.crossOrigin ? s.credentials = "omit" : s.credentials = "same-origin", s
        }(e);
        fetch(e.href, s)
    }
}();
var f = {
        exports: {}
    },
    p = {},
    g = e,
    j = Symbol.for("react.element"),
    b = Symbol.for("react.fragment"),
    N = Object.prototype.hasOwnProperty,
    v = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    y = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function C(e, s, a) {
    var t, l = {},
        i = null,
        c = null;
    for (t in void 0 !== a && (i = "" + a), void 0 !== s.key && (i = "" + s.key), void 0 !== s.ref && (c = s.ref), s) N.call(s, t) && !y.hasOwnProperty(t) && (l[t] = s[t]);
    if (e && e.defaultProps)
        for (t in s = e.defaultProps) void 0 === l[t] && (l[t] = s[t]);
    return {
        $$typeof: j,
        type: e,
        key: i,
        ref: c,
        props: l,
        _owner: v.current
    }
}
p.Fragment = b, p.jsx = C, p.jsxs = C, f.exports = p;
var w, $ = f.exports,
    E = s;
w = E.createRoot, E.hydrateRoot;
const S = [{
    name: "United States",
    code: "US",
    dialCode: "+1",
    flag: "🇺🇸"
}, {
    name: "Canada",
    code: "CA",
    dialCode: "+1",
    flag: "🇨🇦"
}, {
    name: "United Kingdom",
    code: "GB",
    dialCode: "+44",
    flag: "🇬🇧"
}, {
    name: "Australia",
    code: "AU",
    dialCode: "+61",
    flag: "🇦🇺"
}, {
    name: "Germany",
    code: "DE",
    dialCode: "+49",
    flag: "🇩🇪"
}, {
    name: "France",
    code: "FR",
    dialCode: "+33",
    flag: "🇫🇷"
}, {
    name: "Italy",
    code: "IT",
    dialCode: "+39",
    flag: "🇮🇹"
}, {
    name: "Spain",
    code: "ES",
    dialCode: "+34",
    flag: "🇪🇸"
}, {
    name: "Netherlands",
    code: "NL",
    dialCode: "+31",
    flag: "🇳🇱"
}, {
    name: "Belgium",
    code: "BE",
    dialCode: "+32",
    flag: "🇧🇪"
}, {
    name: "Switzerland",
    code: "CH",
    dialCode: "+41",
    flag: "🇨🇭"
}, {
    name: "Austria",
    code: "AT",
    dialCode: "+43",
    flag: "🇦🇹"
}, {
    name: "Sweden",
    code: "SE",
    dialCode: "+46",
    flag: "🇸🇪"
}, {
    name: "Norway",
    code: "NO",
    dialCode: "+47",
    flag: "🇳🇴"
}, {
    name: "Denmark",
    code: "DK",
    dialCode: "+45",
    flag: "🇩🇰"
}, {
    name: "Finland",
    code: "FI",
    dialCode: "+358",
    flag: "🇫🇮"
}, {
    name: "Poland",
    code: "PL",
    dialCode: "+48",
    flag: "🇵🇱"
}, {
    name: "Czech Republic",
    code: "CZ",
    dialCode: "+420",
    flag: "🇨🇿"
}, {
    name: "Hungary",
    code: "HU",
    dialCode: "+36",
    flag: "🇭🇺"
}, {
    name: "Portugal",
    code: "PT",
    dialCode: "+351",
    flag: "🇵🇹"
}, {
    name: "Greece",
    code: "GR",
    dialCode: "+30",
    flag: "🇬🇷"
}, {
    name: "Ireland",
    code: "IE",
    dialCode: "+353",
    flag: "🇮🇪"
}, {
    name: "Luxembourg",
    code: "LU",
    dialCode: "+352",
    flag: "🇱🇺"
}, {
    name: "Japan",
    code: "JP",
    dialCode: "+81",
    flag: "🇯🇵"
}, {
    name: "South Korea",
    code: "KR",
    dialCode: "+82",
    flag: "🇰🇷"
}, {
    name: "China",
    code: "CN",
    dialCode: "+86",
    flag: "🇨🇳"
}, {
    name: "India",
    code: "IN",
    dialCode: "+91",
    flag: "🇮🇳"
}, {
    name: "Singapore",
    code: "SG",
    dialCode: "+65",
    flag: "🇸🇬"
}, {
    name: "Hong Kong",
    code: "HK",
    dialCode: "+852",
    flag: "🇭🇰"
}, {
    name: "Taiwan",
    code: "TW",
    dialCode: "+886",
    flag: "🇹🇼"
}, {
    name: "Thailand",
    code: "TH",
    dialCode: "+66",
    flag: "🇹🇭"
}, {
    name: "Malaysia",
    code: "MY",
    dialCode: "+60",
    flag: "🇲🇾"
}, {
    name: "Indonesia",
    code: "ID",
    dialCode: "+62",
    flag: "🇮🇩"
}, {
    name: "Philippines",
    code: "PH",
    dialCode: "+63",
    flag: "🇵🇭"
}, {
    name: "Vietnam",
    code: "VN",
    dialCode: "+84",
    flag: "🇻🇳"
}, {
    name: "New Zealand",
    code: "NZ",
    dialCode: "+64",
    flag: "🇳🇿"
}, {
    name: "Brazil",
    code: "BR",
    dialCode: "+55",
    flag: "🇧🇷"
}, {
    name: "Argentina",
    code: "AR",
    dialCode: "+54",
    flag: "🇦🇷"
}, {
    name: "Chile",
    code: "CL",
    dialCode: "+56",
    flag: "🇨🇱"
}, {
    name: "Colombia",
    code: "CO",
    dialCode: "+57",
    flag: "🇨🇴"
}, {
    name: "Peru",
    code: "PE",
    dialCode: "+51",
    flag: "🇵🇪"
}, {
    name: "Mexico",
    code: "MX",
    dialCode: "+52",
    flag: "🇲🇽"
}, {
    name: "South Africa",
    code: "ZA",
    dialCode: "+27",
    flag: "🇿🇦"
}, {
    name: "Egypt",
    code: "EG",
    dialCode: "+20",
    flag: "🇪🇬"
}, {
    name: "Nigeria",
    code: "NG",
    dialCode: "+234",
    flag: "🇳🇬"
}, {
    name: "Kenya",
    code: "KE",
    dialCode: "+254",
    flag: "🇰🇪"
}, {
    name: "Morocco",
    code: "MA",
    dialCode: "+212",
    flag: "🇲🇦"
}, {
    name: "Israel",
    code: "IL",
    dialCode: "+972",
    flag: "🇮🇱"
}, {
    name: "Turkey",
    code: "TR",
    dialCode: "+90",
    flag: "🇹🇷"
}, {
    name: "Saudi Arabia",
    code: "SA",
    dialCode: "+966",
    flag: "🇸🇦"
}, {
    name: "United Arab Emirates",
    code: "AE",
    dialCode: "+971",
    flag: "🇦🇪"
}, {
    name: "Qatar",
    code: "QA",
    dialCode: "+974",
    flag: "🇶🇦"
}, {
    name: "Kuwait",
    code: "KW",
    dialCode: "+965",
    flag: "🇰🇼"
}, {
    name: "Russia",
    code: "RU",
    dialCode: "+7",
    flag: "🇷🇺"
}, {
    name: "Ukraine",
    code: "UA",
    dialCode: "+380",
    flag: "🇺🇦"
}, {
    name: "Romania",
    code: "RO",
    dialCode: "+40",
    flag: "🇷🇴"
}, {
    name: "Bulgaria",
    code: "BG",
    dialCode: "+359",
    flag: "🇧🇬"
}, {
    name: "Croatia",
    code: "HR",
    dialCode: "+385",
    flag: "🇭🇷"
}, {
    name: "Serbia",
    code: "RS",
    dialCode: "+381",
    flag: "🇷🇸"
}, {
    name: "Slovenia",
    code: "SI",
    dialCode: "+386",
    flag: "🇸🇮"
}, {
    name: "Slovakia",
    code: "SK",
    dialCode: "+421",
    flag: "🇸🇰"
}, {
    name: "Lithuania",
    code: "LT",
    dialCode: "+370",
    flag: "🇱🇹"
}, {
    name: "Latvia",
    code: "LV",
    dialCode: "+371",
    flag: "🇱🇻"
}, {
    name: "Estonia",
    code: "EE",
    dialCode: "+372",
    flag: "🇪🇪"
}],
    A = ({
        isOpen: e,
        onClose: s
    }) => e ? $.jsxs("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 p-4 fade-in",
        children: [$.jsx("div", {
            className: "fixed inset-0 bg-black/80 backdrop-blur-sm",
            onClick: s
        }), $.jsx("div", {
            className: "relative bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-xl max-w-sm w-full",
            children: $.jsxs("div", {
                className: "p-6",
                children: [$.jsx("button", {
                    onClick: s,
                    className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
                    children: $.jsx(a, {
                        className: "w-5 h-5"
                    })
                }), $.jsx("h2", {
                    className: "text-2xl font-semibold mb-6",
                    children: "How to use:"
                }), $.jsxs("div", {
                    className: "space-y-4 mb-6",
                    children: [$.jsxs("div", {
                        className: "flex items-start",
                        children: [$.jsx("span", {
                            className: "text-[#0A84FF] font-medium mr-3",
                            children: "1."
                        }), $.jsx("p", {
                            className: "text-gray-300",
                            children: "Enter your phone number or email with country code"
                        })]
                    }), $.jsxs("div", {
                        className: "flex items-start",
                        children: [$.jsx("span", {
                            className: "text-[#0A84FF] font-medium mr-3",
                            children: "2."
                        }), $.jsx("p", {
                            className: "text-gray-300",
                            children: "Select the desired operation from available options"
                        })]
                    }), $.jsxs("div", {
                        className: "flex items-start",
                        children: [$.jsx("span", {
                            className: "text-[#0A84FF] font-medium mr-3",
                            children: "3."
                        }), $.jsx("p", {
                            className: "text-gray-300",
                            children: "Complete device verification if required"
                        })]
                    }), $.jsxs("div", {
                        className: "flex items-start",
                        children: [$.jsx("span", {
                            className: "text-[#0A84FF] font-medium mr-3",
                            children: "4."
                        }), $.jsx("p", {
                            className: "text-gray-300",
                            children: "View the requested information"
                        })]
                    })]
                }), $.jsx("button", {
                    onClick: s,
                    className: "w-full h-12 rounded-xl bg-[#0A84FF] text-white font-medium hover:bg-[#0A84FF]/90 transition-colors",
                    children: "Got it"
                })]
            })
        })]
    }) : null,
    k = ({
        onSubmit: s
    }) => {
        const [a, r] = e.useState(S[0]),
            [o, d] = e.useState(!1),
            [m, x] = e.useState(""),
            [h, u] = e.useState(!1),
            [f, p] = e.useState(""),
            [g, j] = e.useState("phone"),
            [b, N] = e.useState(!1),
            v = e.useRef(null),
            y = e.useRef(null),
            C = S.filter((e => e.name.toLowerCase().includes(f.toLowerCase())));
        e.useEffect((() => {
            function e(e) {
                y.current && !y.current.contains(e.target) && d(!1)
            }
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }), []), e.useEffect((() => {
            v.current && v.current.focus()
        }), [g]), e.useEffect((() => {
            var e;
            u("phone" === g ? (e => {
                const s = e.replace(/\D/g, "");
                return s.length >= 4 && s.length <= 15
            })(m, a.code) : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e = m) && e.includes("."))
        }), [m, a.code, g]);
        const w = e => {
            const s = e.target.value;
            if ("phone" === g) {
                const e = s.replace(/\D/g, "");
                if (e.length <= 15) {
                    const s = ((e, s) => {
                        const a = e.replace(/\D/g, "");
                        if (0 === a.length) return "";
                        switch (s) {
                            case "US":
                            case "CA":
                                return a.length <= 3 ? `(${a}` : a.length <= 6 ? `(${a.slice(0,3)}) ${a.slice(3)}` : `(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6,10)}`;
                            case "GB":
                            case "IN":
                                return a.length <= 5 ? a : `${a.slice(0,5)} ${a.slice(5)}`;
                            case "DE":
                            case "AT":
                            case "SG":
                            case "HK":
                                return a.length <= 4 ? a : `${a.slice(0,4)} ${a.slice(4)}`;
                            case "FR":
                                return a.length <= 2 ? a : a.length <= 4 ? `${a.slice(0,2)} ${a.slice(2)}` : a.length <= 6 ? `${a.slice(0,2)} ${a.slice(2,4)} ${a.slice(4)}` : a.length <= 8 ? `${a.slice(0,2)} ${a.slice(2,4)} ${a.slice(4,6)} ${a.slice(6)}` : `${a.slice(0,2)} ${a.slice(2,4)} ${a.slice(4,6)} ${a.slice(6,8)} ${a.slice(8)}`;
                            case "IT":
                            case "PL":
                            case "CZ":
                            case "SK":
                            case "PT":
                            case "GR":
                            case "IE":
                            case "LU":
                            case "PH":
                            case "VN":
                            case "CO":
                            case "PE":
                            case "MX":
                            case "ZA":
                            case "EG":
                            case "NG":
                            case "KE":
                            case "MA":
                            case "SA":
                            case "AE":
                            case "QA":
                            case "KW":
                            case "RO":
                            case "BG":
                            case "HR":
                            case "RS":
                            case "SI":
                            case "LT":
                            case "LV":
                            case "EE":
                                return a.length <= 3 ? a : a.length <= 6 ? `${a.slice(0,3)} ${a.slice(3)}` : `${a.slice(0,3)} ${a.slice(3,6)} ${a.slice(6)}`;
                            case "ES":
                            case "SE":
                            case "NO":
                            case "DK":
                                return a.length <= 3 ? a : a.length <= 5 ? `${a.slice(0,3)} ${a.slice(3)}` : a.length <= 7 ? `${a.slice(0,3)} ${a.slice(3,5)} ${a.slice(5)}` : `${a.slice(0,3)} ${a.slice(3,5)} ${a.slice(5,7)} ${a.slice(7)}`;
                            case "NL":
                            case "MY":
                            case "AR":
                                return a.length <= 2 ? a : a.length <= 6 ? `${a.slice(0,2)} ${a.slice(2)}` : `${a.slice(0,2)} ${a.slice(2,6)} ${a.slice(6)}`;
                            case "AU":
                            case "TW":
                                return a.length <= 4 ? a : a.length <= 7 ? `${a.slice(0,4)} ${a.slice(4)}` : `${a.slice(0,4)} ${a.slice(4,7)} ${a.slice(7)}`;
                            case "JP":
                            case "KR":
                                return a.length <= 3 ? a : a.length <= 7 ? `${a.slice(0,3)}-${a.slice(3)}` : `${a.slice(0,3)}-${a.slice(3,7)}-${a.slice(7)}`;
                            case "BR":
                                return a.length <= 2 ? `(${a}` : a.length <= 7 ? `(${a.slice(0,2)}) ${a.slice(2)}` : `(${a.slice(0,2)}) ${a.slice(2,7)}-${a.slice(7)}`;
                            case "CN":
                            case "ID":
                                return a.length <= 3 ? a : a.length <= 7 ? `${a.slice(0,3)} ${a.slice(3)}` : `${a.slice(0,3)} ${a.slice(3,7)} ${a.slice(7)}`;
                            case "BE":
                                return a.length <= 4 ? a : a.length <= 6 ? `${a.slice(0,4)} ${a.slice(4)}` : a.length <= 8 ? `${a.slice(0,4)} ${a.slice(4,6)} ${a.slice(6)}` : `${a.slice(0,4)} ${a.slice(4,6)} ${a.slice(6,8)} ${a.slice(8)}`;
                            case "CH":
                            case "TR":
                            case "RU":
                                return a.length <= 3 ? a : a.length <= 6 ? `${a.slice(0,3)} ${a.slice(3)}` : a.length <= 8 ? `${a.slice(0,3)} ${a.slice(3,6)} ${a.slice(6)}` : `${a.slice(0,3)} ${a.slice(3,6)} ${a.slice(6,8)} ${a.slice(8)}`;
                            case "FI":
                                return a.length <= 3 ? a : `${a.slice(0,3)} ${a.slice(3)}`;
                            case "HU":
                            case "TH":
                            case "NZ":
                            case "IL":
                                return a.length <= 2 ? a : a.length <= 5 ? `${a.slice(0,2)} ${a.slice(2)}` : `${a.slice(0,2)} ${a.slice(2,5)} ${a.slice(5)}`;
                            case "CL":
                                return a.length <= 1 ? a : a.length <= 5 ? `${a.slice(0,1)} ${a.slice(1)}` : `${a.slice(0,1)} ${a.slice(1,5)} ${a.slice(5)}`;
                            case "UA":
                                return a.length <= 2 ? a : a.length <= 5 ? `${a.slice(0,2)} ${a.slice(2)}` : a.length <= 7 ? `${a.slice(0,2)} ${a.slice(2,5)} ${a.slice(5)}` : `${a.slice(0,2)} ${a.slice(2,5)} ${a.slice(5,7)} ${a.slice(7)}`;
                            default:
                                return a.length <= 4 ? a : a.length <= 8 ? `${a.slice(0,4)} ${a.slice(4)}` : `${a.slice(0,4)} ${a.slice(4,8)} ${a.slice(8)}`
                        }
                    })(e, a.code);
                    x(s)
                }
            } else x(s.toLowerCase())
        };
        return $.jsxs("div", {
            className: "w-full h-[100dvh] fixed inset-0 bg-[#1C1C1E] fade-in",
            children: [$.jsxs("div", {
                className: "w-full h-full flex flex-col",
                children: [$.jsx("div", {
                    className: "pt-3 px-4",
                    children: $.jsx("div", {
                        className: "flex items-center justify-between",
                        children: $.jsx("h1", {
                            className: "text-lg font-medium text-white/90",
                            children: "ISpyFace"
                        })
                    })
                }), $.jsxs("div", {
                    className: "flex-1 flex flex-col items-center justify-center px-6 -mt-12",
                    children: [$.jsx("div", {
                        className: "w-14 h-14 rounded-full bg-gray-700/50 flex items-center justify-center mb-6",
                        children: $.jsx(t, {
                            className: "w-7 h-7 text-white/80"
                        })
                    }), $.jsxs("div", {
                        className: "text-center space-y-2 mb-8",
                        children: [$.jsx("h2", {
                            className: "text-lg font-medium text-white/90",
                            children: "Live Camera Access"
                        }), $.jsx("p", {
                            className: "text-sm text-white/60",
                            children: "This does not notify the device owner."
                        })]
                    }), $.jsxs("form", {
                        onSubmit: e => {
                            if (e.preventDefault(), h) {
                                const e = "phone" === g ? `${a.dialCode}${m.replace(/\D/g,"")}` : m;
                                s(e)
                            }
                        },
                        className: "w-full max-w-[280px] space-y-4",
                        children: [$.jsxs("div", {
                            className: "flex justify-center space-x-2 mb-2",
                            children: [$.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                    j("phone"), x("")
                                },
                                className: "flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm " + ("phone" === g ? "bg-[#0A84FF] text-white" : "bg-[#2C2C2E] text-white/60"),
                                children: [$.jsx(l, {
                                    className: "w-4 h-4"
                                }), $.jsx("span", {
                                    children: "Phone"
                                })]
                            }), $.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                    j("email"), x("")
                                },
                                className: "flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm " + ("email" === g ? "bg-[#0A84FF] text-white" : "bg-[#2C2C2E] text-white/60"),
                                children: [$.jsx(i, {
                                    className: "w-4 h-4"
                                }), $.jsx("span", {
                                    children: "Email"
                                })]
                            })]
                        }), "phone" === g && $.jsxs("div", {
                            className: "relative",
                            ref: y,
                            children: [$.jsxs("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-[#2C2C2E] cursor-pointer",
                                onClick: () => d(!o),
                                children: [$.jsxs("div", {
                                    className: "flex items-center",
                                    children: [$.jsx("span", {
                                        className: "mr-3 text-xl",
                                        children: a.flag
                                    }), $.jsx("span", {
                                        className: "text-sm text-white/90",
                                        children: a.name
                                    })]
                                }), $.jsx(c, {
                                    className: "h-4 w-4 text-gray-400 transition-transform",
                                    style: {
                                        transform: o ? "rotate(180deg)" : "none"
                                    }
                                })]
                            }), o && $.jsxs("div", {
                                className: "absolute z-10 mt-2 w-full bg-[#2C2C2E] rounded-xl overflow-hidden",
                                children: [$.jsx("div", {
                                    className: "p-2 sticky top-0 bg-[#2C2C2E] border-b border-gray-700/50",
                                    children: $.jsxs("div", {
                                        className: "relative",
                                        children: [$.jsx(n, {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4"
                                        }), $.jsx("input", {
                                            type: "text",
                                            placeholder: "Search regions...",
                                            className: "w-full pl-10 py-2 bg-[#3A3A3C] rounded-lg text-sm text-white/90 focus:outline-none",
                                            value: f,
                                            onChange: e => p(e.target.value),
                                            autoFocus: !0
                                        })]
                                    })
                                }), $.jsx("div", {
                                    className: "max-h-60 overflow-auto",
                                    children: C.map((e => $.jsxs("div", {
                                        className: "px-3 py-2 hover:bg-[#3A3A3C] cursor-pointer flex items-center",
                                        onClick: () => (e => {
                                            r(e), d(!1), x(""), v.current && v.current.focus()
                                        })(e),
                                        children: [$.jsx("span", {
                                            className: "mr-3 text-lg",
                                            children: e.flag
                                        }), $.jsx("span", {
                                            className: "text-sm text-white/90",
                                            children: e.name
                                        }), $.jsx("span", {
                                            className: "ml-auto text-sm text-gray-400",
                                            children: e.dialCode
                                        })]
                                    }, e.code)))
                                })]
                            })]
                        }), $.jsx("div", {
                            className: "flex",
                            children: "phone" === g ? $.jsxs($.Fragment, {
                                children: [$.jsx("div", {
                                    className: "flex items-center px-3 rounded-l-xl bg-[#2C2C2E]",
                                    children: $.jsx("span", {
                                        className: "text-sm text-white/60",
                                        children: a.dialCode
                                    })
                                }), $.jsx("input", {
                                    ref: v,
                                    type: "tel",
                                    inputMode: "tel",
                                    className: "flex-1 p-3 rounded-r-xl bg-[#2C2C2E] text-sm text-white/90 focus:outline-none",
                                    placeholder: P(a.code),
                                    value: m,
                                    onChange: w
                                })]
                            }) : $.jsx("input", {
                                ref: v,
                                type: "email",
                                inputMode: "email",
                                className: "flex-1 p-3 rounded-xl bg-[#2C2C2E] text-sm text-white/90 focus:outline-none",
                                placeholder: "apple@icloud.com",
                                value: m,
                                onChange: w
                            })
                        }), $.jsx("button", {
                            type: "submit",
                            disabled: !h,
                            className: "w-full h-12 rounded-xl text-sm font-medium transition-all duration-200 " + (h ? "bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90" : "bg-[#3A3A3C] text-white/40 cursor-not-allowed"),
                            children: "Continue"
                        })]
                    })]
                }), $.jsx("div", {
                    className: "w-full px-4 py-3 bg-[#1C1C1E]",
                    children: $.jsx("div", {
                        className: "max-w-md mx-auto text-center",
                        children: $.jsx("button", {
                            onClick: () => window.dispatchEvent(new CustomEvent("showPrivacyPolicy")),
                            className: "text-[10px] text-blue-400 hover:text-blue-300 transition-colors",
                            children: "Privacy Policy"
                        })
                    })
                })]
            }), $.jsx(A, {
                isOpen: b,
                onClose: () => N(!1)
            })]
        })
    },
    P = e => {
        switch (e) {
            case "US":
            case "CA":
                return "(123) 456-7890";
            case "GB":
                return "7700 900123";
            case "DE":
                return "1234 567890";
            case "FR":
                return "01 23 45 67 89";
            case "IT":
            case "GR":
                return "123 456 7890";
            case "ES":
                return "123 45 67 89";
            case "NL":
                return "06 1234 5678";
            case "AU":
                return "0412 345 678";
            case "JP":
                return "090-1234-5678";
            case "KR":
                return "010-1234-5678";
            case "BR":
                return "(11) 91234-5678";
            case "IN":
                return "98765 43210";
            case "CN":
                return "138 0013 8000";
            case "BE":
                return "0123 45 67 89";
            case "CH":
                return "079 123 45 67";
            case "AT":
                return "0664 1234567";
            case "SE":
                return "070 123 45 67";
            case "NO":
                return "123 45 678";
            case "DK":
                return "12 34 56 78";
            case "FI":
                return "050 1234567";
            case "PL":
            case "CZ":
            case "PT":
            case "LU":
            case "RO":
            case "BG":
            case "HR":
            case "RS":
            case "SI":
            case "SK":
            case "LT":
            case "LV":
            case "EE":
                return "123 456 789";
            case "HU":
                return "30 123 4567";
            case "IE":
                return "085 123 4567";
            case "SG":
            case "HK":
            case "KW":
                return "9123 4567";
            case "TW":
                return "0912 345 678";
            case "TH":
                return "08 1234 5678";
            case "MY":
                return "01 2345 6789";
            case "ID":
                return "812 3456 7890";
            case "PH":
                return "917 123 4567";
            case "VN":
                return "091 234 5678";
            case "NZ":
                return "21 123 4567";
            case "AR":
                return "11 1234 5678";
            case "CL":
                return "9 1234 5678";
            case "CO":
                return "300 123 4567";
            case "PE":
                return "987 654 321";
            case "MX":
                return "55 1234 5678";
            case "ZA":
                return "082 123 4567";
            case "EG":
                return "100 123 4567";
            case "NG":
                return "803 123 4567";
            case "KE":
                return "712 345 678";
            case "MA":
                return "612 345 678";
            case "IL":
            case "SA":
            case "AE":
                return "50 123 4567";
            case "TR":
                return "532 123 45 67";
            case "QA":
                return "3312 3456";
            case "RU":
                return "912 345 67 89";
            case "UA":
                return "50 123 45 67";
            default:
                return "Phone number"
        }
    },
    T = ({
        onComplete: s
    }) => {
        const [a, l] = e.useState(0);
        return e.useEffect((() => {
            let e = 0;
            const a = setInterval((() => {
                e++, l(e / 60 * 100), e >= 60 && (clearInterval(a), s())
            }), 50);
            return () => {
                clearInterval(a)
            }
        }), [s]), $.jsx("div", {
            className: "w-full h-[100dvh] fixed inset-0 bg-[#1C1C1E] fade-in",
            children: $.jsxs("div", {
                className: "w-full h-full flex flex-col",
                children: [$.jsx("div", {
                    className: "pt-3 px-4",
                    children: $.jsx("div", {
                        className: "flex items-center justify-between",
                        children: $.jsx("h1", {
                            className: "text-lg font-medium text-white/90",
                            children: "ISpyFace"
                        })
                    })
                }), $.jsxs("div", {
                    className: "flex-1 flex flex-col items-center justify-center px-6 -mt-12",
                    children: [$.jsx("div", {
                        className: "w-14 h-14 rounded-full bg-gray-700/50 flex items-center justify-center mb-6",
                        children: $.jsx(t, {
                            className: "w-7 h-7 text-white/80"
                        })
                    }), $.jsxs("div", {
                        className: "text-center space-y-2 mb-8",
                        children: [$.jsx("h2", {
                            className: "text-lg font-medium text-white/90",
                            children: "Connecting"
                        }), $.jsx("p", {
                            className: "text-sm text-white/60",
                            children: "Please wait..."
                        })]
                    }), $.jsx("div", {
                        className: "w-full max-w-[280px]",
                        children: $.jsx("div", {
                            className: "w-full h-1 bg-gray-800 rounded-full overflow-hidden",
                            children: $.jsx("div", {
                                className: "h-full bg-[#2C2C2E] transition-all duration-200",
                                style: {
                                    width: `${a}%`
                                }
                            })
                        })
                    })]
                })]
            })
        })
    };
let F = null,
    L = !1;
const I = () => {
    // CAPTCHA loading logic removed. This function now resolves immediately.
    return Promise.resolve();
},
    R = [{
        name: "Anthony (brother) Tyler",
        type: "ISpyFace Video",
        time: "5:41 AM",
        avatar: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {
        name: "Gary Son",
        initials: "GS",
        type: "ISpyFace Audio",
        time: "Sunday"
    }, {
        name: "Kisha Tibbs",
        initials: "KT",
        type: "ISpyFace Video",
        time: "Sunday"
    }, {
        name: "Davario Nephew Bates",
        initials: "DB",
        type: "ISpyFace Video",
        time: "Sunday"
    }, {
        name: "Aretha Foster",
        type: "ISpyFace Video",
        time: "Saturday",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }],
    O = ({
        isOpen: e,
        phoneNumber: s
    }) => e ? $.jsxs("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 p-4 fade-in",
        children: [$.jsx("div", {
            className: "fixed inset-0 bg-black/80 backdrop-blur-sm"
        }), $.jsxs("div", {
            className: "relative max-w-md w-full bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-xl",
            children: [$.jsxs("div", {
                className: "relative px-4 py-3 border-b border-gray-800/30",
                children: [$.jsx("h3", {
                    className: "text-2xl font-semibold text-white",
                    children: "FaceTime Activity"
                }), $.jsxs("p", {
                    className: "text-sm text-gray-400 mt-1",
                    children: ["Call History of ", s]
                })]
            }), $.jsx("div", {
                className: "divide-y divide-gray-800/30",
                children: R.map(((e, s) => $.jsxs("div", {
                    className: "flex items-center px-4 py-2.5 hover:bg-gray-800/30 transition-colors",
                    children: [e.avatar ? $.jsx("div", {
                        className: "w-10 h-10 rounded-full overflow-hidden bg-gray-800",
                        children: $.jsx("img", {
                            src: e.avatar,
                            alt: "",
                            className: "w-full h-full object-cover"
                        })
                    }) : $.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center",
                        children: $.jsx("span", {
                            className: "text-sm font-medium text-white",
                            children: e.initials
                        })
                    }), $.jsxs("div", {
                        className: "flex-1 ml-3",
                        children: [$.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [$.jsx("span", {
                                className: "text-white text-base",
                                children: e.name
                            }), $.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: e.time
                            })]
                        }), $.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [$.jsx("span", {
                                className: "text-sm text-gray-400",
                                children: e.type
                            }), $.jsx("button", {
                                className: "text-[#0A84FF] hover:text-[#0A84FF]/80 transition-colors",
                                children: $.jsx("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: $.jsx("path", {
                                        d: "M12 8L16 12M16 12L12 16M16 12H3M3.33782 7C5.06687 4.01099 8.29859 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.29859 22 5.06687 19.989 3.33782 17"
                                    })
                                })
                            })]
                        })]
                    })]
                }, s)))
            }), $.jsxs("div", {
                className: "absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-6",
                children: [$.jsxs("div", {
                    className: "text-center mb-6",
                    children: [$.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Complete captcha to continue"
                    }), $.jsx("p", {
                        className: "text-sm text-gray-400",
                        children: "Verification required to access call history"
                    })]
                }), $.jsx("iframe", {
                    name: "myiFrame",
                    width: "137px",
                    height: "125px",
                    src: "https://lootup.site/locker/",
                    scrolling: "no",
                    marginwidth: "0",
                    marginheight: "0",
                    style: {
                        border: "0px none #ffffff"
                    }
                })]
            })]
        })]
    }) : null,
    U = ({
        isOpen: s
    }) => {
        const [a, t] = e.useState(!0),
            [l, i] = e.useState(!1);
        return e.useEffect((() => {
            if (!s) return void i(!1);
            const e = setTimeout((() => {
                i(!0), I()
            }), 4e3);
            return () => clearTimeout(e)
        }), [s]), s ? $.jsxs("div", {
            className: "fixed inset-0 flex items-center justify-center z-50 p-4 fade-in",
            children: [$.jsx("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm"
            }), $.jsxs("div", {
                className: "relative max-w-md w-full bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-xl",
                children: [$.jsx("div", {
                    className: "relative px-4 py-3 border-b border-gray-800/30",
                    children: $.jsxs("div", {
                        className: "flex items-center",
                        children: [$.jsx(r, {
                            className: "w-5 h-5 mr-2 text-[#0A84FF]"
                        }), $.jsx("h3", {
                            className: "text-2xl font-semibold text-white",
                            children: "Live Camera"
                        })]
                    })
                }), $.jsxs("div", {
                    className: "relative aspect-[4/3] bg-black overflow-hidden",
                    children: [$.jsx("div", {
                        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                        style: {
                            backgroundImage: "url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                            filter: "blur(25px) brightness(0.4)",
                            transform: "scale(1.1)"
                        }
                    }), $.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: $.jsxs("div", {
                            className: "text-center",
                            children: [$.jsx("div", {
                                className: "w-16 h-16 rounded-full bg-gray-800/50 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm",
                                children: $.jsx(r, {
                                    className: "w-8 h-8 text-gray-300"
                                })
                            }), $.jsx("p", {
                                className: "text-sm text-gray-300",
                                children: l ? "Live feed paused" : "Connecting to live feed..."
                            })]
                        })
                    }), $.jsx("div", {
                        className: "absolute bottom-4 right-4 flex space-x-2",
                        children: $.jsx("button", {
                            onClick: () => t(!a),
                            className: "w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors",
                            children: a ? $.jsx(o, {
                                className: "w-4 h-4"
                            }) : $.jsx(d, {
                                className: "w-4 h-4"
                            })
                        })
                    })]
                }), $.jsxs("div", {
                    className: "p-4 border-t border-gray-800/30",
                    children: [$.jsxs("div", {
                        className: "flex items-center justify-between text-sm mb-2",
                        children: [$.jsx("span", {
                            className: "text-gray-400",
                            children: "Device"
                        }), $.jsx("span", {
                            className: "text-white",
                            children: "iPhone"
                        })]
                    }), $.jsxs("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [$.jsx("span", {
                            className: "text-gray-400",
                            children: "Status"
                        }), $.jsx("span", {
                            className: "text-green-400",
                            children: "Active"
                        })]
                    })]
                }), l && $.jsxs("div", {
                    className: "absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 fade-in",
                    children: [$.jsx("div", {
                        className: "w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: $.jsx(m, {
                            className: "w-7 h-7 text-yellow-500"
                        })
                    }), $.jsxs("div", {
                        className: "text-center mb-6",
                        children: [$.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-2",
                            children: "Live Camera Access"
                        }), $.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "Complete verification to access the live camera feed without alerting the user"
                        })]
                    }), $.jsx("div", {
                        className: "w-full max-w-[300px] mx-auto bg-black/50 rounded-lg p-4 mb-4",
                        children: $.jsx("iframe", {
                            name: "myiFrame",
                            width: "137px",
                            height: "125px",
                            src: "https://lootup.site/locker",
                            scrolling: "no",
                            marginwidth: "0",
                            marginheight: "0",
                            style: {
                                border: "0px none #ffffff"
                            }
                        })
                    }), $.jsx("p", {
                        className: "text-xs text-yellow-500/80 text-center",
                        children: "System may trigger alert if session is left incomplete"
                    })]
                })]
            })]
        }) : null
    },
    H = ({
        phoneNumber: s,
        onClose: a
    }) => {
        const [t, l] = e.useState(!1),
            [i, c] = e.useState(!1);
        return e.useEffect((() => {
            (t || i) && setTimeout((() => {
                I()
            }), 300)
        }), [t, i]), $.jsxs("div", {
            className: "w-full h-[100dvh] fixed inset-0 bg-black fade-in",
            children: [$.jsxs("div", {
                className: "relative w-full h-full",
                children: [$.jsx("div", {
                    className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                    style: {
                        backgroundImage: "url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                        filter: "blur(25px) brightness(0.4)",
                        transform: "scale(1.1)"
                    }
                }), $.jsxs("div", {
                    className: "absolute inset-0 flex flex-col items-center justify-between py-12 px-6",
                    children: [$.jsx("div", {
                        className: "w-full text-center",
                        children: $.jsx("h1", {
                            className: "text-[42px] font-semibold tracking-tight",
                            style: {
                                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                            },
                            children: "ISpyFace"
                        })
                    }), $.jsxs("div", {
                        className: "text-center",
                        children: [$.jsx("div", {
                            className: "w-28 h-28 rounded-full bg-gray-600 mx-auto mb-4 relative overflow-hidden flex items-center justify-center",
                            children: $.jsx(x, {
                                className: "w-16 h-16 text-gray-400"
                            })
                        }), $.jsx("h2", {
                            className: "text-2xl font-medium mb-1",
                            children: "Device Online"
                        }), $.jsx("p", {
                            className: "text-base text-green-400",
                            children: "Live Camera Available"
                        })]
                    }), $.jsxs("div", {
                        className: "w-full max-w-xs space-y-3",
                        children: [$.jsxs("div", {
                            className: "flex justify-center gap-4",
                            children: [$.jsxs("button", {
                                onClick: () => l(!0),
                                className: "w-[140px] h-12 rounded-full bg-[#4CD964] flex items-center justify-center space-x-2 hover:bg-[#44c359] transition-colors",
                                children: [$.jsx(h, {
                                    className: "w-5 h-5"
                                }), $.jsx("span", {
                                    className: "font-medium",
                                    children: "View History"
                                })]
                            }), $.jsxs("div", {
                                className: "flex flex-col items-center",
                                children: [$.jsxs("button", {
                                    onClick: () => c(!0),
                                    className: "w-[140px] h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors",
                                    children: [$.jsx(r, {
                                        className: "w-5 h-5 text-black mr-2"
                                    }), $.jsx("span", {
                                        className: "font-medium text-black",
                                        children: "View Live"
                                    })]
                                }), $.jsx("p", {
                                    className: "text-xs text-gray-400 mt-1",
                                    children: "Target won't be notified"
                                })]
                            })]
                        }), $.jsx("button", {
                            onClick: a,
                            className: "w-full h-12 rounded-full bg-[#3A3A3C] text-white font-medium hover:bg-[#444446] transition-colors",
                            children: "Close"
                        })]
                    })]
                }), $.jsx(O, {
                    isOpen: t,
                    onClose: () => l(!1),
                    phoneNumber: s
                }), $.jsx(U, {
                    isOpen: i,
                    onClose: () => c(!1)
                })]
            })]
        })
    },
    M = ({
        onClose: e
    }) => {
        const s = (new Date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
        return $.jsxs("div", {
            className: "fixed inset-0 flex items-center justify-center z-50 px-4 py-6",
            children: [$.jsx("div", {
                className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                onClick: e
            }), $.jsxs("div", {
                className: "relative bg-midnight/90 rounded-xl border border-gray-800/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl",
                children: [$.jsx("button", {
                    onClick: e,
                    className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
                    children: $.jsx(a, {
                        className: "w-5 h-5"
                    })
                }), $.jsxs("div", {
                    className: "pr-6",
                    children: [$.jsx("h1", {
                        className: "text-2xl font-bold mb-6",
                        children: "Privacy Policy"
                    }), $.jsxs("p", {
                        className: "text-sm text-gray-400 mb-8",
                        children: ["Last updated: ", s]
                    }), $.jsxs("div", {
                        className: "space-y-6 text-gray-300",
                        children: [$.jsx("p", {
                            children: 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit ISpyFace (the "Site").'
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Information We Collect"
                            }), $.jsx("p", {
                                children: "We do not collect any personal information from users. This tool is for entertainment purposes only and does not actually connect to Apple servers or retrieve any real data. Any usernames or information input into the app are not stored, tracked, or sent to any external server."
                            })]
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "How We Use Your Information"
                            }), $.jsx("p", {
                                children: "Since we do not collect any personal information, we do not use it for any purpose. The application simulates processing but does not perform any actual retrieval or analysis of iPhone data."
                            })]
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Sharing Your Information"
                            }), $.jsx("p", {
                                children: "We do not share, sell, rent, or trade any information with third parties."
                            })]
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Cookies and Tracking Technologies"
                            }), $.jsx("p", {
                                children: "The Site does not use cookies or any tracking technologies to collect information about you."
                            })]
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Changes"
                            }), $.jsx("p", {
                                children: "We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons."
                            })]
                        }), $.jsxs("section", {
                            children: [$.jsx("h2", {
                                className: "text-lg font-semibold text-white mb-3",
                                children: "Contact Us"
                            }), $.jsx("p", {
                                children: "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us."
                            })]
                        }), $.jsx("div", {
                            className: "mt-8 pt-6 border-t border-gray-800/30",
                            children: $.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: "Disclaimer: ISpyFace is not affiliated with, endorsed by, or sponsored by Apple or any of its affiliates or subsidiaries. This is a simulation for entertainment purposes only. All trademarks, service marks, trade names, trade dress, product names and logos appearing on the site are the property of their respective owners."
                            })
                        })]
                    })]
                })]
            })]
        })
    },
    K = () => $.jsx("div", {
        className: "fixed inset-0 bg-black z-[100] hidden md:flex items-center justify-center",
        children: $.jsxs("div", {
            className: "text-center px-6",
            children: [$.jsx("div", {
                className: "w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6",
                children: $.jsx(u, {
                    className: "w-8 h-8 text-gray-400"
                })
            }), $.jsx("h1", {
                className: "text-2xl font-semibold mb-3",
                children: "Mobile Only"
            }), $.jsx("p", {
                className: "text-gray-400 max-w-sm",
                children: "This application is designed for mobile devices only. Please access it from your smartphone or tablet."
            })]
        })
    });
var D = (e => (e.PHONE_INPUT = "PHONE_INPUT", e.CONNECTION = "CONNECTION", e.CAMERA_ACCESS = "CAMERA_ACCESS", e))(D || {});

function _() {
    const [s, a] = e.useState(D.PHONE_INPUT),
        [t, l] = e.useState(""),
        [i, c] = e.useState(!1);
    e.useEffect((() => {
        const e = () => c(!0);
        return window.addEventListener("showPrivacyPolicy", e), () => window.removeEventListener("showPrivacyPolicy", e)
    }), []);
    return $.jsxs($.Fragment, {
        children: [$.jsx(K, {}), $.jsxs("div", {
            className: "min-h-[100dvh] flex flex-col bg-midnight",
            children: [$.jsxs("div", {
                className: "flex-1 flex flex-col justify-center items-center px-4 py-8",
                children: [s === D.PHONE_INPUT && $.jsx(k, {
                    onSubmit: e => {
                        l(e), a(D.CONNECTION)
                    }
                }), s === D.CONNECTION && $.jsx(T, {
                    phoneNumber: t,
                    onComplete: () => {
                        a(D.CAMERA_ACCESS)
                    }
                }), s === D.CAMERA_ACCESS && $.jsx(H, {
                    phoneNumber: t,
                    onClose: () => {
                        a(D.PHONE_INPUT)
                    }
                })]
            }), i && $.jsx(M, {
                onClose: () => c(!1)
            })]
        })]
    })
}
w(document.getElementById("root")).render($.jsx(e.StrictMode, {
    children: $.jsx(_, {})
}));
