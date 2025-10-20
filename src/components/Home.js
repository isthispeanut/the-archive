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
import valorantLogo from '../assets/VALORANT LOGO.png';

// News/section images
import news1 from '../assets/T1 WALK.jpeg';
import news2 from '../assets/TEAM LIQUID EWC.png';
import news3 from '../assets/GEN.G CHAMPIONS.png';
import secretBg from '../assets/T1 2024 CHAMPS.jpeg';
import gowRag from '../assets/GOW RAGNAROK.jpg';

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
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Black Header Navigation with Enlarged Logo */}
      <nav className="bg-black border-b-2 border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={archiveLogo} alt="The Archive" className="h-20" />
            </Link>
            <div className="flex space-x-10 text-base font-bold uppercase tracking-wider">
              <Link to="/" className="text-red-600 font-extrabold">HOME</Link>
              <Link to="/news" className="text-white hover:text-red-600 transition-colors">NEWS</Link>
              <Link to="/matches" className="text-white hover:text-red-600 transition-colors">MATCHES</Link>
              <Link to="/patch-digest" className="text-white hover:text-red-600 transition-colors">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-white hover:text-red-600 transition-colors">SECRET FILES</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <img
          src={heroBg}
          alt="GEN.G Champions"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
              UNRAVEL THE <br />
              <span className="text-yellow-400">SECRETS,</span> MASTER <br />
              THE <span className="text-red-500">UNIVERSE</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
              Your ultimate destination for esports news, match coverage, game updates, and hidden secrets.
            </p>
            <Link
              to="/patch-digest"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold transition-all rounded-lg shadow-xl hover:shadow-red-500/50 hover:scale-105"
            >
              EXPLORE THE ARCHIVE
            </Link>
          </div>
        </div>
      </section>

      {/* Organizations strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black text-center mb-8">FEATURED ORGANIZATIONS</h2>
          <div className="flex items-center justify-center flex-wrap gap-12 py-4">
            {orgLogos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className="h-14 md:h-16 opacity-80 hover:opacity-100 transition-all hover:scale-110 shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold text-white">LATEST NEWS</h2>
            <Link to="/news" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/news" className="group">
              <div className="bg-gray-900 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={news1} alt="T1 Walk" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold">CHAMPIONSHIP</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">T1 DYNASTY CONTINUES!</h3>
                  <p className="text-gray-400 leading-relaxed">T1 wins back-to-back World Championship, solidifying their legendary status.</p>
                </div>
              </div>
            </Link>

            <Link to="/news" className="group">
              <div className="bg-gray-900 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={news2} alt="Team Liquid EWC" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold">VIEWERSHIP</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">THE CAVALRY GOES WILD</h3>
                  <p className="text-gray-400 leading-relaxed">Worlds 2024 breaks all-time viewership records worldwide.</p>
                </div>
              </div>
            </Link>

            <Link to="/news" className="group">
              <div className="bg-gray-900 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={news3} alt="Gen.G Champs" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold">REGIONAL</span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">GENG CROWNED AGAIN</h3>
                  <p className="text-gray-400 leading-relaxed">GenG dominates regional competition with flawless performance.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-10 shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <img src={valorantLogo} alt="Valorant" className="h-12 w-12 object-contain" />
                <div>
                  <h2 className="text-3xl font-bold text-red-500 mb-1">NEXT MATCH</h2>
                  <p className="text-gray-400 font-semibold">VALORANT CHAMPIONS 2024 • Dec 15 - 7:00 AM</p>
                </div>
              </div>
              <Link to="/matches" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all hover:scale-105">
                View Details
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-16 mb-10">
              <div className="text-center group">
                <div className="w-32 h-32 bg-white rounded-xl mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <img src={logoG2} alt="G2 Esports" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-white font-bold text-lg">G2 ESPORTS</p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-extrabold text-red-500 mb-2">VS</div>
                <p className="text-gray-400 font-semibold text-lg">Best of 3</p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-white rounded-xl mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <img src={logoC9} alt="Cloud9" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-white font-bold text-lg">CLOUD 9</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">PREVIOUS MATCHES</h3>
              <div className="space-y-3">
                {[
                  { team1: 'Fnatic', team2: 'T1', score: '2-3', date: 'Oct 27, 2024' },
                  { team1: 'Team Liquid', team2: 'Gen.G', score: '1-3', date: 'Oct 26, 2024' },
                  { team1: 'Cloud9', team2: 'NAVI', score: '3-0', date: 'Oct 25, 2024' },
                ].map((match, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <span className="text-white font-semibold">{match.team1} vs {match.team2}</span>
                    <span className="text-red-500 font-bold">{match.score}</span>
                    <span className="text-gray-400">{match.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patch Digest Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold text-white">PATCH DIGEST</h2>
            <Link to="/patch-digest" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/patch-digest" className="group">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all hover:-translate-y-2">
                <img
                  src={gagUpdate}
                  alt="GAG Update - Beanstalk Event"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold w-fit">GAME UPDATE</span>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">BEANSTALK EVENT</h3>
                  <p className="text-white/90 font-semibold">What is Jandel up to again?</p>
                </div>
              </div>
            </Link>

            <Link to="/patch-digest" className="group">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-2">
                <img
                  src={nights99}
                  alt="99 Nights"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold w-fit">NEW FEATURE</span>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">FISHING MECHANICS</h3>
                  <p className="text-white/90 font-semibold">Fishing is now a thing in 99 Nights!</p>
                </div>
              </div>
            </Link>

            <Link to="/patch-digest" className="group">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all hover:-translate-y-2">
                <img
                  src={fischHome}
                  alt="Fisch Home - Summer Update"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <span className="inline-block bg-yellow-600 text-white text-xs px-3 py-1 rounded-full mb-3 font-bold w-fit">SEASONAL</span>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">SUMMER IS NEVER OVER</h3>
                  <p className="text-white/90 font-semibold">Fisch gets new summer update!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Secret Files Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={secretBg}
              alt="Secret Files Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-white mb-6">SECRET FILES</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Unlock hidden lore, walkthroughs, and easter eggs from your favorite games. God of War Ragnarok guide now available.
                </p>
                <Link
                  to="/secret-files"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold transition-all rounded-lg shadow-xl hover:shadow-red-500/50 hover:scale-105"
                >
                  ACCESS FILES
                </Link>
              </div>

              <div className="w-full">
                <img
                  src={gowRag}
                  alt="God of War Ragnarok"
                  className="w-full h-72 md:h-96 object-cover rounded-xl shadow-2xl ring-2 ring-white/20 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black Footer */}
      <footer className="bg-black border-t-4 border-red-600 py-12">
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

export default Home;