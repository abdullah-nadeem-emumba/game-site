import { videoThumbnail } from '../../assets';

export const Services = () => {
  return (
    <div id="services" className="min-h-screen bg-black text-white flex flex-col items-center px-4">
      {/* Navigation */}
      <nav className="flex items-center justify-center gap-2 pt-8 mb-12 md:mb-16">
        <span className="text-gray-400 text-sm md:text-base">Home</span>
        <span className="text-gray-600">&gt;</span>
        <span className="text-orange-500 text-sm md:text-base">Services</span>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 px-4">
          Professional Game Development and Interactive Entertainment Solutions
        </h1>
        <p className="text-center text-gray-400 text-base md:text-lg px-4">
          Cutting-edge game development services featuring immersive gameplay mechanics, stunning visual design, and optimized performance across all
          platforms.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Content Section - First on mobile */}
          <div className="order-1 lg:order-2 w-full flex flex-col items-center lg:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              Next-Generation Game Engine Technology
            </h2>

            {/* Feature List */}
            <div className="space-y-3 md:space-y-4 max-w-xl lg:max-w-none">
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base">Advanced Graphics Rendering with Real-Time Ray Tracing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base">Cross-Platform Optimization for Console and Mobile</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base">Intelligent AI Systems and Responsive NPC Behavior</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base">Multiplayer Networking and Server Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Video Thumbnail - Second on mobile */}
          <div className="relative order-2 lg:order-1 w-full">
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="cursor-pointer w-full lg:w-167.25 h-auto lg:h-88.75 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
