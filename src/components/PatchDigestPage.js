import React from 'react';
import { Link } from 'react-router-dom';

// Import assets from src so the bundler includes them
import archiveLogo from '../assets/The_Archive_WHITE-removebg-preview.png';
import growLogo from '../assets/Grow A Garden Logo.png';
import growBg from '../assets/Grow A Garden BG.jpg';
import topBean from '../assets/The_Top_Of_Beanstalk.png';
import giantNpc from '../assets/GiantNpc.png';

const PatchDigestPage = () => {
  return (
    <div className="min-h-screen bg-[#116E3A] text-white">
      {/* Header: white background, black text */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Invert the white logo to show as dark on white header */}
            <img src={archiveLogo} alt="The Archive" className="h-7 filter invert" />
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-black hover:text-green-700 transition-colors">HOME</Link>
            <Link to="/news" className="text-black hover:text-green-700 transition-colors">NEWS</Link>
            <Link to="/matches" className="text-black hover:text-green-700 transition-colors">MATCHES</Link>
            <Link to="/patch-digest" className="text-green-700 font-bold">PATCH DIGEST</Link>
            <Link to="/secret-files" className="text-black hover:text-green-700 transition-colors">SECRET FILES</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Grow A Garden logo (replaces the text chip) */}
        <div className="mb-6">
          <img src={growLogo} alt="Grow A Garden" className="h-10 md:h-12 w-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
              BEANSTALK EVENT
            </h1>

            {/* Intro + mechanics with green frame */}
            <div className="mb-8 rounded-lg border border-green-500/60 bg-green-900/30 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Beanstalk Event is an event in Update 13.9.0 of Grow a Garden.
              </h2>

              <h3 className="text-xl font-bold text-white mb-4">MECHANICS</h3>
              <div className="space-y-4 text-gray-100/90 leading-relaxed">
                <p>
                  The Beanstalk Tree can be grown by submitting various plants to the NPC, Jack.
                </p>
                <p>
                  Jack asks for different types of plants and beside him is a leaderboard which shows
                  how much each player has contributed. The person who gave the most points will get an extra reward.
                </p>
                <p>
                  When the Beanstalk Tree is fully grown, there will be 20 minutes until the Beanstalk will decompose.
                </p>
              </div>
            </div>

            {/* Long image after the header: Grow A Garden BG */}
            <div className="mb-10">
              <div
                className="h-64 w-full bg-cover bg-center rounded-lg border border-green-500/60"
                style={{ backgroundImage: `url(${growBg})` }}
              >
                <div className="h-full bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white drop-shadow">BEANSTALK EVENT</h2>
                </div>
              </div>
            </div>

            {/* Plant types with green frame */}
            <div className="mb-8 rounded-lg border border-green-500/50 bg-green-900/20 p-6">
              <p className="text-white font-bold mb-4">Listed below are the types of plants:</p>

              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="text-green-300 font-bold">Berry</span>
                  <span className="text-gray-100/90">
                    {' '}- Strawberry, Blueberry, Grape, Raspberry, Cranberry, White Mulberry, Lingonberry,
                    Gooseberry, Red Raspberry, Boysenberry
                  </span>
                </div>

                <div>
                  <span className="text-orange-300 font-bold">Root</span>
                  <span className="text-gray-100/90">
                    {' '}- Carrot, Rhubarb, Onion, Horseradish, Mandrake, Wild Carrot, Mutant Carrot, Taro Flower,
                    Potato, Sweet Potato, etc
                  </span>
                </div>

                <div>
                  <span className="text-yellow-300 font-bold">Candy</span>
                  <span className="text-gray-100/90">
                    {' '}- Chocolate Carrot, Blue Lollipop, Red Lollipop, Candy Sunflower, Easter Egg, Sugarplum,
                    Gingerbread, Peppermint, Candy Cane, etc
                  </span>
                </div>

                <div>
                  <span className="text-pink-300 font-bold">Flower</span>
                  <span className="text-gray-100/90">
                    {' '}- Orange Tulip, Daffodil, Foxglove, Artichoke, Crocus, Blue Bells, Daffodils, Lavender,
                    Marigold, Dahlia, Iris, Snapdragon, etc
                  </span>
                </div>

                <div>
                  <span className="text-red-300 font-bold">Fruit</span>
                  <span className="text-gray-100/90">
                    {' '}- Apple, Avocado, Banana, Coconut, Dragon Fruit, Durian, Lemon, Lime, Mango, Papaya,
                    Passion Fruit, Pineapple, Starfruit, Watermelon, etc
                  </span>
                </div>

                <div>
                  <span className="text-blue-300 font-bold">Tree Fruit</span>
                  <span className="text-gray-100/90">
                    {' '}- Tree Apple, Apple, Mango, Olive, Plum, Succulent, Traveler&apos;s Fruit, Maple, Apple,
                    Mandarin, etc
                  </span>
                </div>

                <div>
                  <span className="text-purple-300 font-bold">Soul</span>
                  <span className="text-gray-100/90">
                    {' '}- Cranberry, Lemon, Lime, Starfruit, Peppermint, Mangosteen
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full">
            {/* Beanstalk Event card with Top of the Beanstalk image */}
            <div className="bg-green-700 rounded-lg p-6 mb-8 shadow-lg shadow-green-900/30">
              <h3 className="text-white font-bold text-xl mb-4">BEANSTALK EVENT</h3>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 mb-4 inline-flex items-center justify-center">
                  <img
                    src={topBean}
                    alt="Top of the Beanstalk"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <p className="text-white text-sm">August 19, 2024</p>
              </div>
            </div>

            {/* Right-column lists */}
            <div className="space-y-4 leading-relaxed mb-10">
              <div>
                <span className="text-teal-300 font-bold">Shake</span>
                <span className="text-gray-100/90">
                  {' '}- Banana, Grape, Strawberry, Blueberry, Sugarplum, Crown Melon, Mangosteen, etc
                </span>
              </div>

              <div>
                <span className="text-green-300 font-bold">Tropical</span>
                <span className="text-gray-100/90">
                  {' '}- Banana, Coconut, Dragon Fruit, Durian, Mango, Papaya, Passionfruit, Pineapple,
                  Watermelon, Starfruit
                </span>
              </div>

              <div>
                <span className="text-orange-300 font-bold">Vegetable</span>
                <span className="text-gray-100/90">
                  {' '}- Carrot, Eggplant, Tomato, Pepper, Cauliflower, Artichoke, Jalapeno, Beeswax,
                  Ivy, It&apos;s a plant!, etc
                </span>
              </div>

              <div>
                <span className="text-red-300 font-bold">Prickly</span>
                <span className="text-gray-100/90">
                  {' '}- Cactus, Dragon Fruit, Durian, Pineapple, Venus Fly Trap, Pricklyfruit,
                  Spined Mango, etc
                </span>
              </div>

              <div>
                <span className="text-purple-300 font-bold">Woolly</span>
                <span className="text-gray-100/90">
                  {' '}- Apple, Avocado, Cactus, Coconut, Mango, Peach, Pear, Kiwi, Fejoa, Guava,
                  Jackfruit, Persimmon, Tamarind, Dragon Tapioca, Rhubarb, Night
                </span>
              </div>
            </div>

            {/* Goliath's Goods */}
            <div className="rounded-lg border border-green-600 bg-green-900/40 p-6">
              <h3 className="text-white font-bold text-xl mb-4">GOLIATH&apos;S GOODS</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Copy */}
                <div className="space-y-4 text-gray-100/90 leading-relaxed">
                  <p>
                    Goliath&apos;s Goods can be accessed by climbing the top of the full grown
                    Beanstalk Tree and speaking with the NPC, Goliath.
                  </p>
                  <p>
                    For using the portal it is required that the player must contribute to growing the
                    beanstalk 5 times, but they can also climb up the beanstalk, collecting rewards
                    along the way.
                  </p>
                  <p>Growing the Beanstalk 5 times will reward the player with Bean Fence</p>
                  <p>
                    This shop will restock every hour. Alternatively, it can be manually restocked by
                    purchasing a start price of 500,000, which triples in price after each restock.
                    Manual restock price resets every day, at 12:00 AM EST; the restock price resets
                    back to 500,000. There is a limit to the number of restocks a player could
                    purchase, but they quickly become unaffordable.
                  </p>
                </div>

                {/* Images */}
                <div className="space-y-6">
                  <div className="rounded-lg border border-green-500/60 bg-green-700/20 p-4 flex items-center justify-center">
                    <img src={giantNpc} alt="Giant NPC" className="w-full h-40 object-contain" />
                  </div>
                  <div className="rounded-lg border border-green-500/60 bg-green-700/20 p-4 flex items-center justify-center">
                    <img src={topBean} alt="Top of the Beanstalk" className="w-full h-40 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: white background, black text */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center space-y-6">
            <img src={archiveLogo} alt="The Archive" className="h-7 filter invert" />
            <div className="flex space-x-8">
              <Link to="/" className="text-black hover:text-green-700 transition-colors">HOME</Link>
              <Link to="/news" className="text-black hover:text-green-700 transition-colors">NEWS</Link>
              <Link to="/matches" className="text-black hover:text-green-700 transition-colors">MATCHES</Link>
              <Link to="/patch-digest" className="text-black hover:text-green-700 transition-colors">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-black hover:text-green-700 transition-colors">SECRET FILES</Link>
            </div>
            <p className="text-black/70 text-center">CREDITS BY: ROLAN G. SEMILLA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PatchDigestPage;
