// import { Link } from "react-router-dom";

// const footerLinks = {
//   "Explore Data": [
//     { name: "APOD", href: "/apod" },
//     { name: "Mars Rovers", href: "/mars" },
//     { name: "NEOs", href: "/neo" },
//     { name: "Tech Transfer", href: "/tech" }
//   ],
//   "Resources": [
//     { name: "API Documentation", href: "/docs" },
//     { name: "About NASA", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Help Center", href: "/help" }
//   ],
//   "Connect": [
//     { name: "NASA Official Site", href: "https://nasa.gov", external: true },
//     { name: "NASA Social Media", href: "https://nasa.gov/social", external: true },
//     { name: "Space News", href: "/news" },
//     { name: "Educational Resources", href: "/education" }
//   ],
//   "Legal": [
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Terms of Service", href: "/terms" },
//     { name: "NASA Guidelines", href: "/guidelines" },
//     { name: "Disclaimers", href: "/disclaimers" }
//   ]
// };

// export default function Footer() {
//   return (
//     <footer className="bg-white relative overflow-hidden border-t border-gray-200">
//       {/* Large NASA background text */}


//       <div className="relative z-10 container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* Logo and description */}
//           <div className="md:col-span-1">
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">N</span>
//               </div>
//               <span className="font-bold text-lg text-gray-900">NASA Space Data Explorer</span>
//             </Link>
//             <p className="text-gray-600 text-sm mb-4">
//               Bringing space closer to Earth through data.
//             </p>
//             <p className="text-gray-500 text-xs">
//               © NASA Space Data Explorer 2024. All rights reserved.
//             </p>
//           </div>

//           {/* Footer links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category} className="md:col-span-1">
//               <h3 className="font-semibold text-red-600 mb-4">{category}</h3>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     {link.external ? (
//                       <a
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-red-600 hover:text-red-700 transition-colors duration-200 text-sm"
//                       >
//                         {link.name}
//                       </a>
//                     ) : (
//                       <Link
//                         to={link.href}
//                         className="text-red-600 hover:text-red-700 transition-colors duration-200 text-sm"
//                       >
//                         {link.name}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />

//       {/* Large NASA watermark in background - positioned below the content */}
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-5">
//         <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-400 select-none leading-none">NASA</span>
//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";

const footerLinks = {
  "Explore Data": [
    { name: "APOD", href: "/apod" },
    { name: "Mars Rovers", href: "/mars" },
    { name: "NEOs", href: "/neo" },
    { name: "Tech Transfer", href: "/tech" }
  ],
  Resources: [
    { name: "API Documentation", href: "/docs" },
    { name: "About NASA", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Help Center", href: "/help" }
  ],
  Connect: [
    { name: "NASA Official Site", href: "https://nasa.gov", external: true },
    { name: "NASA Social Media", href: "https://nasa.gov/social", external: true },
    { name: "Space News", href: "/news" },
    { name: "Educational Resources", href: "/education" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "NASA Guidelines", href: "/guidelines" },
    { name: "Disclaimers", href: "/disclaimers" }
  ]
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      {/* ▸ CONTENT  ─────────────────────────────────────────────── */}
      {/* Add generous bottom‑padding so the watermark has room */}
      <div className="relative z-10 container mx-auto px-4 py-12 pb-50 md:pb-80">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo + blurb */}
          <div>
            <Link to="/" className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                NASA Space Data Explorer
              </span>
            </Link>

            <p className="mb-4 text-sm text-gray-600">
              Bringing space closer to Earth through data.
            </p>
            <p className="text-xs text-gray-500">
              © NASA Space Data Explorer 2024. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold text-red-600">{category}</h3>
              <ul className="space-y-2">
                {links.map(link =>
                  link.external ? (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200 text-red-600 hover:text-red-700"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200 text-red-600 hover:text-red-700"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ▸ WATERMARK  ───────────────────────────────────────────── */}
      {/* Absolutely positioned under the padded area above */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-5 pointer-events-none">
        <span className="select-none leading-none font-black text-[12rem] md:text-[16rem] lg:text-[20rem] text-gray-400">
          NASA
        </span>
      </div>
    </footer>
  );
}
