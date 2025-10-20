import React from 'react';
import { Link } from 'react-router-dom';

// Assets (must match filenames in src/assets/)
import LogoWhite from '../assets/The_Archive_WHITE-removebg-preview.png';
import T1Champs from '../assets/T1 2024 CHAMPS.jpeg';
import T1Walk from '../assets/T1 WALK.jpeg';
import Worlds24 from '../assets/Worlds_2024.jpg';
import KKOMA from '../assets/KKOMA.jpeg';

const NewsPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header + Hero */}
      <header>
        {/* Black Header Navigation with Enlarged Logo */}
        <nav className="bg-black border-b-2 border-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img src={LogoWhite} alt="The Archive" className="h-20" />
              </Link>
              <div className="flex space-x-10 text-base font-bold uppercase tracking-wider">
                <Link to="/" className="text-white hover:text-red-600 transition-colors">HOME</Link>
                <Link to="/news" className="text-red-600 font-extrabold">NEWS</Link>
                <Link to="/matches" className="text-white hover:text-red-600 transition-colors">MATCHES</Link>
                <Link to="/patch-digest" className="text-white hover:text-red-600 transition-colors">PATCH DIGEST</Link>
                <Link to="/secret-files" className="text-white hover:text-red-600 transition-colors">SECRET FILES</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Full-bleed hero image */}
        <div
          className="w-full h-[520px] md:h-[560px] lg:h-[640px] bg-center bg-cover relative"
          style={{ backgroundImage: `url(${KKOMA})` }}
          aria-hidden="true"
        >
          {/* subtle gradient so hero reads nicely under the nav */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>
      </header>

      {/* Main article content (centered column, slightly wider for readability) */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          T1 DYNASTY CONTINUES!
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          T1 WINS THE WORLDS 2024! Completing their back-to-back championship reign, reigniting the T1 Dynasty once again.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          South Korea's T1 secured its fifth League of Legends World Championship title on Sunday, defeating China's Bilibili Gaming 3-2 in a thrilling best-of-five
          series at the O2 Arena. The victory also marks the fifth world championship for T1's star mid laner, Lee "Faker" Sang-hyeok, further solidifying his status
          as the most decorated player in the history of competitive League of Legends.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          The finals were a back-and-forth battle. Bilibili Gaming took the first game, setting an aggressive tone. T1 responded in the second match by adjusting their
          draft strategy, only for Bilibili to seize the third game and move to match point. Refusing to concede, T1 rallied in the fourth game, with Faker's signature
          plays turning the tide. In the decisive fifth game, T1's strategic picks and coordinated team fights led them to victory.
        </p>

        {/* Added expanded content */}
        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          Beyond raw talent, this win showcased T1's exceptional team cohesion and preparation. Multiple players stepped up across the series — not just Faker — with
          strong laning phases, consistent objective control, and decisive rotations that denied Bilibili room to snowball. The team's support and jungle coordination
          in mid-to-late game fights were particularly notable, turning small advantages into match-clinching teamfights.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          Coach and staff credit was visible throughout the series: T1's draft flexibility and in-series adaptations suggested deep scouting and quick learning
          between games. Their ability to change tempo — force fights when favorable and slow the game to scale when needed — made the difference in the close
          moments of the series.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          The victory also has big-picture implications. It reinforces the LCK's competitive strength on the international stage and cements T1's position as a
          program that consistently builds championship-level rosters. For the players, this title will be remembered not only for the trophy but for how they
          handled pressure — winning a final that swung multiple times under the brightest lights.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          Fan reaction was immediate and global: social channels flooded with tributes, highlight reels, and admiration for Faker's continued brilliance. Off the
          stage, celebrations and ceremonies celebrated the team — and the win will shape storylines going into the next season, from roster discussions to offseason
          training plans.
        </p>

        {/* first inline article image (large, full width of column) */}
        <figure className="mb-10">
          <img src={T1Walk} alt="T1 celebrating" className="w-full rounded-lg shadow-lg object-cover" />
          <figcaption className="mt-3 text-sm md:text-base text-gray-500">T1 celebrating their Worlds 2024 victory</figcaption>
        </figure>

        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
          This win extends T1's unbroken record against LPL teams in best-of-five matches at the World Championship. It also serves as redemption against Bilibili
          Gaming, who had previously eliminated T1 from the Mid-Season Invitational earlier this year.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          Faker was named Finals MVP for his exceptional performance throughout the series, earning his second such honor since 2016. His leadership — both in
          -game and as a seasoned presence on the roster — continues to be an invaluable asset to T1.
        </p>

        {/* second in-article image */}
        <div className="mb-8">
          <img src={T1Champs} alt="T1 on stage with sparkles" className="w-full rounded-lg object-cover shadow-md" />
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          T1's latest triumph adds to their storied legacy. The organization previously clinched the Summoner's Cup in 2013, 2015, 2016, and 2023 — a record of
          success that underlines consistent investment, excellent talent development, and a winning culture.
        </p>

        {/* Worlds banner centered */}
        <div className="mt-8 mb-12 flex justify-center">
          <img src={Worlds24} alt="Worlds 2024" className="w-full max-w-xl object-contain" />
        </div>

        <div className="text-gray-400 mb-6 leading-relaxed text-lg md:text-xl">
          <p>
            The League of Legends World Championship, often referred to as Worlds, is the pinnacle event in the game's competitive calendar. Held annually, it
            gathers the world's best teams from major regions around the globe.
          </p>
        </div>
      </main>

      {/* Black Footer */}
      <footer className="bg-black border-t-4 border-red-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={LogoWhite} alt="The Archive" className="h-12" />
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md">
                The Archive - Your source for esports news, match coverage, game updates, and hidden secrets.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors">Home</Link>
                <Link to="/news" className="text-gray-400 hover:text-red-600 transition-colors">News</Link>
                <Link to="/matches" className="text-gray-400 hover:text-red-600 transition-colors">Matches</Link>
                <Link to="/patch-digest" className="text-gray-400 hover:text-red-600 transition-colors">Patch Digest</Link>
                <Link to="/secret-files" className="text-gray-400 hover:text-red-600 transition-colors">Secret Files</Link>
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

export default NewsPage;