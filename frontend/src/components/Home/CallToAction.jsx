import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Explore
            <br />
            the Cosmos?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Join thousands of space enthusiasts, researchers, and educators who
            use our platform to access NASA's incredible data repositories. Start
            your journey into space today.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/apod"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 text-lg"
            >
              Begin Your Space Journey
            </Link>
            <Link
              to="/mars"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 text-lg"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}