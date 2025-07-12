import { Link } from "react-router-dom";
import { ImageIcon, Camera, Target, GitFork } from 'lucide-react';

const categories = [
  {
    id: "apod",
    title: "Astronomy Picture of the Day",
    description: "Discover daily cosmic wonders with stunning astronomical images and detailed explanations from NASA's APOD archives.",
    icon: ImageIcon,
    href: "/apod",
    color: "bg-red-600"
  },
  {
    id: "mars",
    title: "Mars Rover Data",
    description: "Access real-time images and scientific data from NASA's Mars exploration missions and rover cameras.",
    icon: Camera,
    href: "/mars",
    color: "bg-red-600"
  },
  {
    id: "neo",
    title: "Near Earth Objects",
    description: "Track and explore near-Earth asteroids and comets with comprehensive orbital data and risk assessments.",
    icon: Target,
    href: "/neo",
    color: "bg-red-600"
  },
  {
    id: "tech",
    title: "Tech Transfer",
    description: "Explore NASA innovations that have been adapted for commercial and civilian applications.",
    icon: GitFork,
    href: "/tech",
    color: "bg-red-600"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore NASA Data Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access comprehensive NASA datasets and discover the wonders of space
            exploration through our curated data collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                {/* Icon */}
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Explore Button */}
                <Link
                  to={category.href}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}