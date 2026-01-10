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
          <h2 className="text-[30px] font-medium max-w-118">Lorem Ipsum is simply dummy text dummy text </h2>
          <p className="text-[17px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quod eum, eius repudiandae nobis fugit dolores soluta sunt vero
            aliquam aut culpa ipsa ullam a voluptas delectus aspernatur earum perferendis est obcaecati veniam dolorum consequuntur! Possimus aperiam
            accusantium illo nobis, facilis adipisci necessitatibus nam placeat at vel aliquid perferendis
          </p>
          <p className="text-[17px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam est iste nulla dolor vel modi a distinctio nobis nam amet soluta
            blanditiis ab, minima exercitationem itaque incidunt doloribus. Odit, ex?
          </p>
          <button className="bg-primary px-10 py-3 cursor-pointer text-white">Read more</button>
        </div>
      </div>
    </section>
  );
};
