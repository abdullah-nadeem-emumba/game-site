import { trending1, trending2, trending3, trending4, fire, ghost } from '../../assets';

export const Trending = () => {
  const trendingGames = [
    { image: trending1, title: '40 Followers' },
    { image: trending2, title: '50 Followers' },
    { image: trending3, title: '20 Followers' },
    { image: trending4, title: '60 Followers' },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 pt-25 pb-12">
      <div className="flex justify-between items-center w-full max-w-7xl mb-12">
        <h2 className="text-white text-[32px] font-bold">Currently Trending Games</h2>
        <button className="px-5 py-2 uppercase bg-primary text-white text-xl font-medium rounded-md cursor-pointer">See All</button>
      </div>
      <div className="flex justify-between gap-6 mt-8 w-full max-w-7xl pb-50">
        {trendingGames.map((game, index) => (
          <div key={index} className="flex flex-col flex-1">
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

      <div className="flex justify-between max-w-7xl gap-29">
        <img src={ghost} alt="ghost" className="rounded-md w-124 h-122.25" />
        <div className="space-y-10.75">
          <h2 className="text-[30px] font-medium max-w-118">Discover What's Hot in Gaming Right Now</h2>
          <p className="text-[17px]">
            Stay ahead of the curve with our trending games section. We track the most popular and talked-about games across all platforms, bringing
            you real-time insights into what the gaming community is playing. From indie gems to AAA blockbusters, discover titles that are capturing
            players' attention worldwide.
          </p>
          <p className="text-[17px]">
            Our trending algorithm considers player engagement, social media buzz, and community ratings to ensure you never miss out on the next big
            gaming phenomenon. Join thousands of gamers and explore the titles everyone's talking about.
          </p>
          <button className="bg-primary px-10 py-3 cursor-pointer text-white">Read more</button>
        </div>
      </div>
    </section>
  );
};
