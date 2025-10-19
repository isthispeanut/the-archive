import React from 'react';
import { Link } from 'react-router-dom';

// Assets (must match filenames in src/assets/)
import LogoWhite from '../assets/The Archive WHITE.png';
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
        {/* Improved header: larger, clearer, grid layout */}
        <nav className="sticky top-0 z-50 bg-black/98 border-b border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 md:py-5">
            {/* 3-column grid: logo | spacer | nav/hamburger on right */}
            <div className="grid grid-cols-3 items-center">
              {/* left: logo */}
              <div className="flex items-center">
                <Link to="/" className="inline-flex items-center">
                  <img
                    src={LogoWhite}
                    alt="The Archive"
                    className="h-12 md:h-14 w-auto"
                  />
                </Link>
              </div>

              {/* middle: spacer (keeps layout balanced) */}
              <div className="hidden md:block" />

              {/* right: nav (desktop) + hamburger (mobile) */}
              <div className="flex justify-end items-center space-x-4">
                {/* desktop nav moved to right */}
                <ul className="hidden md:inline-flex items-center gap-8 text-base tracking-wider">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-red-500 font-semibold transition-colors">
                      NEWS
                    </Link>
                  </li>
                  <li>
                    <Link to="/matches" className="text-gray-300 hover:text-white transition-colors">
                      MATCHES
                    </Link>
                  </li>
                  <li>
                    <Link to="/patch-digest" className="text-gray-300 hover:text-white transition-colors">
                      PATCH DIGEST
                    </Link>
                  </li>
                  <li>
                    <Link to="/secret-files" className="text-gray-300 hover:text-white transition-colors">
                      SECRET FILES
                    </Link>
                  </li>
                </ul>

                {/* hamburger for mobile */}
                <button
                  aria-label="Open menu"
                  className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/10"
                >
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
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

      {/* Enhanced Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brand / logo */}
            <div className="flex flex-col items-start md:items-start gap-4">
              <Link to="/" className="inline-block">
                <img src={LogoWhite} alt="The Archive" className="h-10 mx-auto md:mx-0" />
              </Link>
              <p className="text-sm text-gray-400 max-w-xs">
                The Archive — esports articles, match coverage and patch notes from competitive League of Legends.
              </p>
            </div>

            {/* nav links — horizontal layout and wrapping for small screens */}
            <div className="flex justify-center md:justify-center items-center">
              <nav className="flex flex-row flex-wrap gap-6 text-sm">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link>
                <Link to="/matches" className="text-gray-400 hover:text-white transition-colors">Matches</Link>
                <Link to="/patch-digest" className="text-gray-400 hover:text-white transition-colors">Patch Digest</Link>
                <Link to="/secret-files" className="text-gray-400 hover:text-white transition-colors">Secret Files</Link>
              </nav>
            </div>

            {/* author + social */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="text-sm text-gray-400">CREATED BY</div>
              <div className="font-semibold">Rolan Brixx S. Semilla</div>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.12 1.53-1.94-.67.4-1.42.7-2.21.86A3.49 3.49 0 0016.1 4c-1.93 0-3.5 1.59-3.5 3.55 0 .28.03.55.09.81C9.7 8.26 6.14 6.28 3.8 3.36c-.31.55-.49 1.18-.49 1.86 0 1.28.64 2.41 1.62 3.08-.6-.02-1.17-.18-1.66-.46v.05c0 1.8 1.27 3.3 2.95 3.64-.31.09-.64.14-.98.14-.24 0-.47-.02-.7-.06.47 1.46 1.81 2.53 3.41 2.56A7.02 7.02 0 012 19.54 9.9 9.9 0 007.29 21c6.88 0 10.64-5.83 10.64-10.88v-.5c.73-.52 1.36-1.17 1.86-1.92-.66.29-1.36.48-2.09.57.75-.47 1.33-1.2 1.6-2.08z" />
                  </svg>
                </a>

                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M12 .5C5.65.5.5 5.67.5 12.03c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.02 1.77 2.68 1.26 3.33.96.1-.74.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.2 1.19a11.06 11.06 0 015.82 0c2.22-1.51 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55C20.2 21.44 23.5 17.1 23.5 12.03 23.5 5.67 18.35.5 12 .5z" />
                  </svg>
                </a>

                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* bottom row */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <div>
              &copy; {currentYear} The Archive — All rights reserved.
            </div>
            <div className="mt-2">Created by: <span className="font-medium text-gray-300">Rolan Brixx S. Semilla</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;