import { project1, project2, project3, project4, project5, project6 } from '../../assets';

export const Portfolio = () => {
  const projectImages = [project1, project2, project3, project4, project5, project6];

  return (
    <section id="portfolio" className="w-full min-h-screen bg-[url(bg-vector-2.png)] bg-no-repeat bg-cover">
      <div className="min-h-screen bg-black text-white py-20">
        {/* Navigation */}
        <nav className="flex items-center justify-center gap-2 mb-8 md:mb-12">
          <span className="text-gray-400 text-sm md:text-base">Home</span>
          <span className="text-gray-600">&gt;</span>
          <span className="text-orange-500 text-sm md:text-base">Projects</span>
        </nav>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(100,200,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,100,200,0.1),transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Our Recent Projects</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of cutting-edge gaming environments, high-performance hardware setups, and immersive entertainment experiences
              that showcase our expertise in the gaming industry.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-8">
            {projectImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Second Row with Custom Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[246px_1fr_1fr] gap-8 mt-8 lg:justify-center">
            {projectImages.slice(3, 6).map((image, index) => (
              <div
                key={index + 3}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  index === 0 ? 'mx-auto lg:mx-0' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
