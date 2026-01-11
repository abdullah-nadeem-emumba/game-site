import { videoThumbnail } from '../../assets';

export const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Navigation */}
      <nav className="flex items-center justify-center gap-2 pt-8 mb-16">
        <span className="text-gray-400">Home</span>
        <span className="text-gray-600">&gt;</span>
        <span className="text-orange-500">Services</span>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-6">Professional Game Development and Interactive Entertainment Solutions</h1>
        <p className="text-center text-gray-400 text-lg">
          Cutting-edge game development services featuring immersive gameplay mechanics, stunning visual design, and optimized performance across all
          platforms.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Thumbnail */}
          <div className="relative">
            <img src={videoThumbnail} alt="Video Thumbnail" className="cursor-pointer w-167.25 h-88.75 object-cover rounded-2xl" />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-3xl font-bold mb-6">Next-Generation Game Engine Technology</h2>
            {/* <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Experience next-level gameplay with our advanced game engine featuring real-time ray tracing, AI-powered NPCs, and physics-based
              interactions.
            </p> */}

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300">Advanced Graphics Rendering with Real-Time Ray Tracing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300">Cross-Platform Optimization for Console and Mobile</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300">Intelligent AI Systems and Responsive NPC Behavior</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-gray-300">Multiplayer Networking and Server Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
