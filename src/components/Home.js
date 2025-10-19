import React from 'react';
import { Link } from 'react-router-dom';

// Brand
import archiveLogo from '../assets/The_Archive_WHITE-removebg-preview.png';

// Hero cover
import heroBg from '../assets/GEN.G CHAMPIONS.png';

// Org logos
import logo100T from '../assets/100T.png';
import logoG2 from '../assets/G2.png';
import logoGenG from '../assets/GEN.G.png';
import logoC9 from '../assets/CLOUD9.png';
import logoSentinels from '../assets/SENTINELS.png';
import logoEG from '../assets/EG.png';
import logoTSM from '../assets/TSM.png';
import logoFuria from '../assets/FURIA.png';
import logoKRU from '../assets/KRU.png';
import logoLEV from '../assets/LEV.png';

// News/section images
import news1 from '../assets/T1 WALK.jpeg';
import news2 from '../assets/TEAM LIQUID EWC.png';
import news3 from '../assets/GEN.G CHAMPIONS.png';
import secretBg from '../assets/T1 2024 CHAMPS.jpeg';
import gowRag from '../assets/GOW RAGNAROK.jpg'; // updated filename

// Patch Digest card images
import gagUpdate from '../assets/GAG UPDATE.jpg';
import nights99 from '../assets/99 Nights.jpg';
import fischHome from '../assets/FISCH HOME.jpg';

const orgLogos = [
  { src: logo100T, alt: '100 Thieves' },
  { src: logoG2, alt: 'G2 Esports' },
  { src: logoGenG, alt: 'Gen.G' },
  { src: logoC9, alt: 'Cloud9' },
  { src: logoSentinels, alt: 'Sentinels' },
  { src: logoEG, alt: 'Evil Geniuses' },
  { src: logoTSM, alt: 'TSM' },
  { src: logoFuria, alt: 'FURIA' },
  { src: logoKRU, alt: 'KRÜ' },
  { src: logoLEV, alt: 'Leviatán' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={archiveLogo} alt="The Archive" className="h-8" />
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-red-500 font-bold">HOME</Link>
            <Link to="/news" className="text-white hover:text-red-500 transition-colors">NEWS</Link>
            <Link to="/matches" className="text-white hover:text-red-500 transition-colors">MATCHES</Link>
            <Link to="/patch-digest" className="text-white hover:text-red-500 transition-colors">PATCH DIGEST</Link>
            <Link to="/secret-files" className="text-white hover:text-red-500 transition-colors">SECRET FILES</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center">
        <img
          src={heroBg}
          alt="GEN.G Champions"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              UNRAVEL THE <br />
              <span className="text-yellow-400">SECRETS,</span> MASTER <br />
              THE <span className="text-red-500">UNIVERSE</span>
            </h1>
            <Link
              to="/patch-digest"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-bold transition-colors rounded"
            >
              THE ARCHIVE
            </Link>
          </div>
        </div>
      </section>

      {/* Organizations strip */}
      <section className="py-10 bg-white dark:bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between overflow-x-auto gap-10 py-2">
            {orgLogos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">NEWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition">
              <img src={news1} alt="T1 Walk" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded mb-3">CHAMPIONSHIP</span>
                <h3 className="text-xl font-bold text-white mb-2">T1 DYNASTY CONTINUES!</h3>
                <p className="text-gray-400">T1 wins back-to-back World Championship</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition">
              <img src={news2} alt="Team Liquid EWC" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded mb-3">VIEWERSHIP</span>
                <h3 className="text-xl font-bold text-white mb-2">THE CAVALRY GOES WILD</h3>
                <p className="text-gray-400">Worlds 2024 breaks viewership records</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition">
              <img src={news3} alt="Gen.G Champs" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded mb-3">REGIONAL</span>
                <h3 className="text-xl font-bold text-white mb-2">GENG CROWNED AGAIN</h3>
                <p className="text-gray-400">GenG dominates regional competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="py-10 bg-white dark:bg-white-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-lg p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-2">NEXT MATCH</h2>

                {/* Event line with logo spot */}
                <div className="flex items-center gap-3">
                  {/* Replace this placeholder with the real logo once you import it */}
                  {/* <img src={valorantLogo} alt="Valorant" className="h-6 w-6 object-contain" /> */}
                  <span className="inline-block h-6 w-6 rounded-sm bg-red-600" aria-hidden="true"></span>

                  <div>
                    <p className="text-gray-400">VALORANT CHAMPIONS 2024</p>
                    <p className="text-gray-400">Dec 15 - 7:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 mb-8">
              {/* G2 tile with real logo */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-lg mb-4 flex items-center justify-center">
                  <img src={logoG2} alt="G2 Esports" className="w-14 h-14 object-contain" />
                </div>
                <p className="text-white font-bold">G2 ESPORTS</p>
              </div>

              <div className="text-4xl font-bold text-red-500">VS</div>

              {/* C9 tile with real logo */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-lg mb-4 flex items-center justify-center border border-gray-300">
                  <img src={logoC9} alt="Cloud9" className="w-14 h-14 object-contain" />
                </div>
                <p className="text-white font-bold">CLOUD 9</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">PREVIOUS 3 MATCHES</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                  <span className="text-white">Fnatic vs T1</span>
                  <span className="text-red-500">2-3</span>
                  <span className="text-gray-400">Oct 27, 2024</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                  <span className="text-white">Team Liquid vs Gen.G</span>
                  <span className="text-red-500">1-3</span>
                  <span className="text-gray-400">Oct 26, 2024</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                  <span className="text-white">Cloud9 vs NAVI</span>
                  <span className="text-red-500">3-0</span>
                  <span className="text-gray-400">Oct 25, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patch Digest Section (with requested images) */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">PATCH DIGEST</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beanstalk Event (GAG UPDATE) */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <img
                src={gagUpdate}
                alt="GAG Update - Beanstalk Event"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">BEANSTALK EVENT</h3>
                <p className="text-white/90 font-semibold">WHAT IS JANDEL UP TO AGAIN?</p>
              </div>
            </div>

            {/* 99 Nights card */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <img
                src={nights99}
                alt="99 Nights"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">FISHING?</h3>
                <p className="text-white/90 font-semibold">IS NOW A THING ON 99 NIGHTS IN THE FOREST</p>
              </div>
            </div>

            {/* Summer is never over (FISCH HOME) */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <img
                src={fischHome}
                alt="Fisch Home - Summer Update"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">SUMMER IS NEVER, OVER</h3>
                <p className="text-white/90 font-semibold">FISCHING NEW SUMMER UPDATE!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Files Section */}
      <section className="py-10 bg-white dark:bg-white-900">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${secretBg})` }}
          >
            {/* Background and overlay */}
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/60" />

            {/* Foreground content as two columns */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              {/* Left: copy */}
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-white mb-3">SECRET FILES</h2>
                <p className="text-white/80 mb-6">
                  New: God of War Ragnarok guide and collectibles index now available.
                </p>
                <Link
                  to="/secret-files"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold inline-block transition-colors rounded"
                >
                  ACCESS NOW
                </Link>
              </div>

              {/* Right: BIG Ragnarok image */}
              <div className="w-full">
                <img
                  src={gowRag}
                  alt="God of War Ragnarok"
                  className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-lg shadow-xl ring-1 ring-white/20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src={archiveLogo} alt="The Archive" className="h-8" />
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
              <Link to="/news" className="text-gray-400 hover:text-white transition-colors">NEWS</Link>
              <Link to="/matches" className="text-gray-400 hover:text-white transition-colors">MATCHES</Link>
              <Link to="/patch-digest" className="text-gray-400 hover:text-white transition-colors">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-gray-400 hover:text-white transition-colors">SECRET FILES</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;