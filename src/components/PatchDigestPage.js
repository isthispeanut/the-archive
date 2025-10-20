import React from 'react';
import { Link } from 'react-router-dom';

// Import assets
import archiveLogo from '../assets/The_Archive_WHITE-removebg-preview.png';
import growLogo from '../assets/Grow A Garden Logo.png';
import growBg from '../assets/GAG UPDATE.jpg';
import topBean from '../assets/The_Top_Of_Beanstalk.png';
import giantNpc from '../assets/GiantNpc.png';
import beanstalkUpd from '../assets/BEANSTALK UPD.jpg';

const PatchDigestPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0d3d1f] text-white">
      {/* White Themed Header Navigation */}
      <nav className="bg-white border-b-2 border-gray-300 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={archiveLogo} alt="The Archive" className="h-20" />
            </Link>
            <div className="flex space-x-10 text-base font-bold uppercase tracking-wider">
              <Link to="/" className="text-gray-800 hover:text-green-600 transition-colors">HOME</Link>
              <Link to="/news" className="text-gray-800 hover:text-green-600 transition-colors">NEWS</Link>
              <Link to="/matches" className="text-gray-800 hover:text-green-600 transition-colors">MATCHES</Link>
              <Link to="/patch-digest" className="text-green-600 font-extrabold">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-gray-800 hover:text-green-600 transition-colors">SECRET FILES</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Logo */}
      <div className="bg-[#0a2817] py-16 border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <img src={growLogo} alt="Grow A Garden" className="h-28 w-auto mb-4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Event Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#1e5030] rounded-lg overflow-hidden shadow-xl sticky top-4 border-2 border-green-600">
              <div className="bg-[#0f3820] p-6 border-b-2 border-green-600">
                <h2 className="text-2xl font-bold text-white">BEANSTALK EVENT</h2>
              </div>
              <div className="p-6">
                <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
                  <img
                    src={beanstalkUpd}
                    alt="Beanstalk Event"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold mb-4">The Beanstalk Event is an event in Update 13.9.0 of Grow a Garden.</p>
                  <div className="bg-[#0a2817] rounded px-4 py-3 inline-block border border-green-500">
                    <p className="text-sm text-green-300">Date</p>
                    <p className="text-white font-bold">August 19, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mechanics Section */}
            <div className="bg-[#0f3820] rounded-lg p-8 border-2 border-green-700 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">MECHANICS</h2>
              <div className="space-y-4 text-gray-200 leading-relaxed">
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

            {/* Beanstalk Event Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-green-600">
              <img
                src={growBg}
                alt="Beanstalk Event"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-4xl font-bold text-white drop-shadow-lg">BEANSTALK EVENT</h3>
                </div>
              </div>
            </div>

            {/* Plant Types Section */}
            <div className="bg-[#0f3820] rounded-lg p-8 border-2 border-green-700 shadow-xl">
              <p className="text-white font-bold text-xl mb-6">Listed below are the types of plants:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Berry */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-green-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-green-300 font-bold mb-2">Berry</h4>
                  <p className="text-gray-200 text-sm">
                    Strawberry, Blueberry, Grape, Raspberry, Cranberry, White Mulberry, Lingonberry, Gooseberry, Red Raspberry, Boysenberry
                  </p>
                </div>

                {/* Root */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-orange-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-orange-300 font-bold mb-2">Root</h4>
                  <p className="text-gray-200 text-sm">
                    Carrot, Rhubarb, Onion, Horseradish, Mandrake, Wild Carrot, Mutant Carrot, Taro Flower, Potato, Sweet Potato
                  </p>
                </div>

                {/* Candy */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-yellow-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-yellow-300 font-bold mb-2">Candy</h4>
                  <p className="text-gray-200 text-sm">
                    Chocolate Carrot, Blue Lollipop, Red Lollipop, Candy Sunflower, Easter Egg, Sugarplum, Gingerbread, Peppermint, Candy Cane
                  </p>
                </div>

                {/* Flower */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-pink-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-pink-300 font-bold mb-2">Flower</h4>
                  <p className="text-gray-200 text-sm">
                    Orange Tulip, Daffodil, Foxglove, Artichoke, Crocus, Blue Bells, Lavender, Marigold, Dahlia, Iris, Snapdragon
                  </p>
                </div>

                {/* Fruit */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-red-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-red-300 font-bold mb-2">Fruit</h4>
                  <p className="text-gray-200 text-sm">
                    Apple, Avocado, Banana, Coconut, Dragon Fruit, Durian, Lemon, Lime, Mango, Papaya, Passion Fruit, Pineapple, Starfruit, Watermelon
                  </p>
                </div>

                {/* Tree Fruit */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-blue-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-blue-300 font-bold mb-2">Tree Fruit</h4>
                  <p className="text-gray-200 text-sm">
                    Tree Apple, Apple, Mango, Olive, Plum, Succulent, Traveler's Fruit, Maple, Mandarin
                  </p>
                </div>

                {/* Soul */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-purple-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-purple-300 font-bold mb-2">Soul</h4>
                  <p className="text-gray-200 text-sm">
                    Cranberry, Lemon, Lime, Starfruit, Peppermint, Mangosteen
                  </p>
                </div>

                {/* Shake */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-teal-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-teal-300 font-bold mb-2">Shake</h4>
                  <p className="text-gray-200 text-sm">
                    Banana, Grape, Strawberry, Blueberry, Sugarplum, Crown Melon, Mangosteen
                  </p>
                </div>

                {/* Tropical */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-green-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-green-300 font-bold mb-2">Tropical</h4>
                  <p className="text-gray-200 text-sm">
                    Banana, Coconut, Dragon Fruit, Durian, Mango, Papaya, Passionfruit, Pineapple, Watermelon, Starfruit
                  </p>
                </div>

                {/* Vegetable */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-orange-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-orange-300 font-bold mb-2">Vegetable</h4>
                  <p className="text-gray-200 text-sm">
                    Carrot, Eggplant, Tomato, Pepper, Cauliflower, Artichoke, Jalapeno, Ivy
                  </p>
                </div>

                {/* Prickly */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-red-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-red-300 font-bold mb-2">Prickly</h4>
                  <p className="text-gray-200 text-sm">
                    Cactus, Dragon Fruit, Durian, Pineapple, Venus Fly Trap, Spined Mango
                  </p>
                </div>

                {/* Woolly */}
                <div className="bg-[#1a4d2e] p-4 rounded-lg border-l-4 border-purple-400 hover:bg-[#1e5030] transition-colors">
                  <h4 className="text-purple-300 font-bold mb-2">Woolly</h4>
                  <p className="text-gray-200 text-sm">
                    Apple, Avocado, Cactus, Coconut, Mango, Peach, Pear, Kiwi, Guava, Persimmon
                  </p>
                </div>
              </div>
            </div>

            {/* Goliath's Goods Section */}
            <div className="bg-[#0f3820] rounded-lg p-8 border-2 border-green-700 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">GOLIATH'S GOODS</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p>
                    Goliath's Goods can be accessed by climbing to the top of the fully grown
                    Beanstalk Tree and speaking with the NPC, Goliath.
                  </p>
                  <p>
                    For using the portal it is required that the player must contribute to growing the
                    beanstalk 5 times, but they can also climb up the beanstalk, collecting rewards
                    along the way.
                  </p>
                  <p className="font-semibold text-yellow-300">
                    Growing the Beanstalk 5 times will reward the player with Bean Fence
                  </p>
                  <p>
                    This shop will restock every hour. Alternatively, it can be manually restocked by
                    purchasing at a start price of 500,000, which triples in price after each restock.
                    Manual restock price resets every day at 12:00 AM EST.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a4d2e] rounded-lg p-4 flex items-center justify-center border border-green-600 hover:scale-105 transition-transform">
                    <img src={giantNpc} alt="Giant NPC" className="w-full h-40 object-contain" />
                  </div>
                  <div className="bg-[#1a4d2e] rounded-lg p-4 flex items-center justify-center border border-green-600 hover:scale-105 transition-transform">
                    <img src={topBean} alt="Top of Beanstalk" className="w-full h-40 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Footer */}
      <footer className="bg-black border-t-4 border-green-600 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={archiveLogo} alt="The Archive" className="h-12" />
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md">
                The Archive - Your source for esports news, match coverage, game updates, and hidden secrets.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-400 hover:text-green-600 transition-colors">Home</Link>
                <Link to="/news" className="text-gray-400 hover:text-green-600 transition-colors">News</Link>
                <Link to="/matches" className="text-gray-400 hover:text-green-600 transition-colors">Matches</Link>
                <Link to="/patch-digest" className="text-gray-400 hover:text-green-600 transition-colors">Patch Digest</Link>
                <Link to="/secret-files" className="text-gray-400 hover:text-green-600 transition-colors">Secret Files</Link>
              </nav>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">CREDITS</h3>
              <div className="text-gray-400 space-y-2">
                <p className="font-semibold text-white">Created by:</p>
                <p>Rolan Brixx S. Semilla</p>
                <p className="text-sm pt-2">INF222 - Web Development</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} The Archive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PatchDigestPage;
