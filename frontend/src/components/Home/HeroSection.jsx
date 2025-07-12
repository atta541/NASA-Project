import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ——— Layer 1: Slow zoom + spin background ——— */}
      <div
        className="
    absolute inset-0 bg-cover bg-center bg-no-repeat
    [animation:spin_60s_linear_infinite_reverse,kenBurns_30s_linear_infinite_alternate]
  "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>


      {/* ——— Layer 2: SVG star field that twinkles ——— */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full animate-twinkle-slow"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="star" r="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {Array.from({ length: 140 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r={Math.random() * 0.6 + 0.2}
              fill="url(#star)"
              opacity={Math.random() * 0.7 + 0.3}
              style={{ filter: "blur(0.5px)" }}
            />
          ))}
        </svg>
      </div>

      {/* ——— Content ——— */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <p className="text-sm md:text-base mb-4 text-gray-300">
          Exploring the cosmos through data and imagery. Discover more →
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          NASA Space
          <br />
          Data Explorer
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
          Discover the wonders of space through official NASA data and imagery.
          Explore astronomy photos, Mars rover missions, near‑Earth objects, and
          cutting‑edge technology transfers.
        </p>

        {/* CTA with pulsing halo */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/apod"
            className="
              relative inline-flex items-center justify-center
              bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md
              font-medium text-lg transition-colors duration-200
            "
          >
            <span>Start Exploring</span>
            {/* Psuedo‑ring via before element */}
            <span
              className="
                pointer-events-none absolute -inset-0 rounded-[inherit] 
                before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                before:bg-red-600/40 before:animate-pulse-ring
              "
            />
          </Link>

          <Link
            to="/mars"
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-200 text-lg"
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* ——— Scroll indicator ——— */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
