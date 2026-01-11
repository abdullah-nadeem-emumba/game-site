import { trending1, trending2, trending3, trending4, fire, ghost } from '../../assets';

export const Trending = () => {
  const trendingGames = [
    { image: trending1, title: '40 Followers' },
    { image: trending2, title: '50 Followers' },
    { image: trending3, title: '20 Followers' },
    { image: trending4, title: '60 Followers' },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 pt-12 md:pt-20 lg:pt-25 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-7xl mb-8 md:mb-12 gap-4 sm:gap-0">
        <h2 className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold">Currently Trending Games</h2>
        <button className="px-4 md:px-5 py-2 uppercase bg-primary text-white text-base md:text-lg lg:text-xl font-medium rounded-md cursor-pointer whitespace-nowrap">
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-8 w-full max-w-7xl pb-12 md:pb-50 place-items-center sm:place-items-stretch">
        {trendingGames.map((game, index) => (
          <div key={index} className="flex flex-col w-full max-w-sm sm:max-w-none">
            <div className="overflow-hidden rounded-lg">
              <img
                src={game.image}
                alt={game.title}
                className="w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <img src={fire} alt="fire" className="w-5 h-5" />
              <p className="text-primary font-medium">{game.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ghost-section flex flex-col lg:flex-row lg:justify-between max-w-7xl gap-8 lg:gap-29 w-full px-4">
        <div className="space-y-6 md:space-y-10.75 order-1 lg:order-1">
          <h2 className="text-2xl md:text-[30px] font-medium max-w-full md:max-w-118">Discover What's Hot in Gaming Right Now</h2>
          <p className="text-base md:text-[17px]">
            Stay ahead of the curve with our trending games section. We track the most popular and talked-about games across all platforms, bringing
            you real-time insights into what the gaming community is playing. From indie gems to AAA blockbusters, discover titles that are capturing
            players' attention worldwide.
          </p>
          <p className="text-base md:text-[17px]">
            Our trending algorithm considers player engagement, social media buzz, and community ratings to ensure you never miss out on the next big
            gaming phenomenon. Join thousands of gamers and explore the titles everyone's talking about.
          </p>
          <button className="bg-primary px-8 md:px-10 py-3 cursor-pointer text-white rounded-md">Read more</button>
        </div>
        <img src={ghost} alt="ghost" className="rounded-md w-full lg:w-124 h-auto lg:h-122.25 object-cover order-2 lg:order-2" />
      </div>
    </section>
  );
};
