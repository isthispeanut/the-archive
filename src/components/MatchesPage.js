import React from 'react';
import { Link } from 'react-router-dom';

// Logo and branding
import LogoWhite from '../assets/The_Archive_WHITE-removebg-preview.png';
import ValorantLogo from '../assets/VALORANT LOGO.png';

// Team logos
import G2Logo from '../assets/G2.png';
import Cloud9Logo from '../assets/CLOUD9.png';

// Pro players
import TrentImg from '../assets/trent.png';
import OvyImg from '../assets/ovy.png';
import BabyBayImg from '../assets/BABYBAY.png';
import JawgemoImg from '../assets/JAWGEMO.png';
import ValynImg from '../assets/VALYN.png';

// Agents
import SovaAgent from '../assets/sova.png';
import ChamberAgent from '../assets/chamber.png';
import YoruAgent from '../assets/yoru.png';
import OmenAgent from '../assets/omen.png';
import VyseAgent from '../assets/vyse.png';
import DeadlockAgent from '../assets/deadlock.png';
import ViperAgent from '../assets/viper.png';
import NeonAgent from '../assets/neon.png';
import FadeAgent from '../assets/fade.png';

// Map
import AscentMap from '../assets/ASCENT.png';

const MatchesPage = () => {
  const currentYear = new Date().getFullYear();

  // Agent stats for bar graph
  const g2Stats = [
    { agent: SovaAgent, name: 'SOVA', kills: 21, deaths: 5, assists: 4, pickRate: 89 },
    { agent: ChamberAgent, name: 'CHAMBER', kills: 19, deaths: 12, assists: 6, pickRate: 76 },
    { agent: YoruAgent, name: 'YORU', kills: 16, deaths: 8, assists: 11, pickRate: 65 },
    { agent: NeonAgent, name: 'NEON', kills: 10, deaths: 13, assists: 11, pickRate: 45 },
    { agent: OmenAgent, name: 'OMEN', kills: 13, deaths: 14, assists: 10, pickRate: 76 },
  ];

  const c9Stats = [
    { agent: YoruAgent, name: 'YORU', kills: 22, deaths: 4, assists: 2, pickRate: 92 },
    { agent: OmenAgent, name: 'OMEN', kills: 24, deaths: 5, assists: 5, pickRate: 100 },
    { agent: VyseAgent, name: 'VYSE', kills: 11, deaths: 13, assists: 5, pickRate: 48 },
    { agent: DeadlockAgent, name: 'DEADLOCK', kills: 14, deaths: 16, assists: 7, pickRate: 60 },
    { agent: FadeAgent, name: 'FADE', kills: 14, deaths: 12, assists: 1, pickRate: 58 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Red Themed Header Navigation */}
      <nav className="bg-gradient-to-r from-red-900 to-red-800 border-b-2 border-red-700 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={LogoWhite} alt="The Archive" className="h-20" />
            </Link>
            <div className="flex space-x-10 text-base font-bold uppercase tracking-wider">
              <Link to="/" className="text-white hover:text-yellow-300 transition-colors">HOME</Link>
              <Link to="/news" className="text-white hover:text-yellow-300 transition-colors">NEWS</Link>
              <Link to="/matches" className="text-yellow-300 font-extrabold">MATCHES</Link>
              <Link to="/patch-digest" className="text-white hover:text-yellow-300 transition-colors">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-white hover:text-yellow-300 transition-colors">SECRET FILES</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Match Header with Valorant Logo */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-8 mb-10 shadow-2xl border-2 border-red-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img src={ValorantLogo} alt="Valorant" className="h-16 w-16 object-contain drop-shadow-lg" />
              <div>
                <h1 className="text-white font-extrabold text-3xl mb-1">VCT 2025: AMERICAS STAGE 2</h1>
                <p className="text-red-200">Premier Esports Tournament</p>
              </div>
            </div>
            <div className="text-right bg-black/30 rounded-lg px-6 py-3">
              <p className="text-white font-bold text-lg">Monday, August 19th</p>
              <p className="text-red-200">7:00 AM PST</p>
            </div>
          </div>
        </div>

        {/* Main Match Display */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 mb-10 shadow-2xl border border-gray-700">
          <div className="flex items-center justify-center space-x-16">
            <div className="text-center group">
              <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl mb-4 flex items-center justify-center overflow-hidden ring-4 ring-blue-500/50 shadow-xl group-hover:scale-110 transition-transform p-4">
                <img src={G2Logo} alt="G2 Esports" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-white font-extrabold text-2xl">G2 ESPORTS</h3>
              <p className="text-blue-400 font-semibold">Americas #1</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-3">VS</div>
              <p className="text-gray-400 font-bold text-lg bg-gray-800 px-4 py-2 rounded-full">Best of 3</p>
            </div>

            <div className="text-center group">
              <div className="w-36 h-36 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl mb-4 flex items-center justify-center overflow-hidden ring-4 ring-cyan-500/50 shadow-xl group-hover:scale-110 transition-transform p-4">
                <img src={Cloud9Logo} alt="Cloud 9" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-white font-extrabold text-2xl">CLOUD 9</h3>
              <p className="text-cyan-400 font-semibold">Americas #4</p>
            </div>
          </div>
        </div>

        {/* Match Stats Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition shadow-lg">
              OVERVIEW
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
              PERFORMANCE
            </button>
          </div>

          {/* Map Selection */}
          <div className="flex space-x-4 mb-10">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition shadow-lg">
              MAP 1: ASCENT
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
              MAP 2
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
              MAP 3
            </button>
          </div>

          {/* Team Compositions with Bar Graphs */}
          <div
            className="bg-cover bg-center rounded-xl p-8 min-h-[32rem] shadow-2xl border-2 border-gray-700"
            style={{ backgroundImage: `url(${AscentMap})` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-black/80 rounded-xl p-8 backdrop-blur-md">
              {/* G2 Esports Team with Bar Graphs */}
              <div>
                <div className="flex items-center mb-8 bg-blue-600/30 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="w-12 h-12 bg-white rounded-lg mr-4 flex items-center justify-center overflow-hidden ring-2 ring-blue-500 p-2">
                    <img src={G2Logo} alt="G2" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-extrabold text-2xl">G2 ESPORTS</h3>
                  <span className="ml-auto text-green-400 font-black text-4xl">13</span>
                </div>

                <div className="space-y-4">
                  {g2Stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800/90 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-gray-700/90 transition">
                      <div className="flex items-center space-x-3 mb-3">
                        <img src={stat.agent} alt={stat.name} className="w-12 h-12 rounded-lg ring-2 ring-blue-500/50" />
                        <div className="flex-1">
                          <div className="text-white font-bold text-lg">{stat.kills} / {stat.deaths} / {stat.assists}</div>
                          <div className="text-blue-300 text-sm font-semibold">{stat.name}</div>
                        </div>
                      </div>
                      {/* Bar Graph */}
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${stat.pickRate}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-blue-300 text-xs mt-1 font-semibold">Pick Rate: {stat.pickRate}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud 9 Team with Bar Graphs */}
              <div>
                <div className="flex items-center mb-8 bg-cyan-600/30 rounded-lg p-4 border-l-4 border-cyan-500">
                  <div className="w-12 h-12 bg-white rounded-lg mr-4 flex items-center justify-center overflow-hidden ring-2 ring-cyan-500 p-2">
                    <img src={Cloud9Logo} alt="Cloud9" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-extrabold text-2xl">CLOUD 9</h3>
                  <span className="ml-auto text-red-400 font-black text-4xl">8</span>
                </div>

                <div className="space-y-4">
                  {c9Stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800/90 rounded-lg p-4 border-l-4 border-cyan-500 hover:bg-gray-700/90 transition">
                      <div className="flex items-center space-x-3 mb-3">
                        <img src={stat.agent} alt={stat.name} className="w-12 h-12 rounded-lg ring-2 ring-cyan-500/50" />
                        <div className="flex-1">
                          <div className="text-white font-bold text-lg">{stat.kills} / {stat.deaths} / {stat.assists}</div>
                          <div className="text-cyan-300 text-sm font-semibold">{stat.name}</div>
                        </div>
                      </div>
                      {/* Bar Graph */}
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${stat.pickRate}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-cyan-300 text-xs mt-1 font-semibold">Pick Rate: {stat.pickRate}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build Lab Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 mb-10 shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">BUILD LAB:</span>
            <span className="ml-3">PRO LOADOUTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              {[
                { player: TrentImg, name: 'G2 TRENT', agent: SovaAgent },
                { player: OvyImg, name: 'C9 OVY', agent: OmenAgent },
                { player: BabyBayImg, name: 'BABYBAY', agent: ViperAgent },
                { player: JawgemoImg, name: 'JAWGEMO', agent: YoruAgent },
                { player: ValynImg, name: 'VALYN', agent: ChamberAgent },
              ].map((pro, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-lg hover:from-gray-600 hover:to-gray-700 transition shadow-lg border border-gray-600">
                  <img src={pro.player} alt={pro.name} className="w-14 h-14 rounded-lg ring-2 ring-orange-500/50" />
                  <span className="text-white font-bold text-lg flex-1">{pro.name}</span>
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden ring-2 ring-orange-500/50">
                    <img src={pro.agent} alt="agent" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-8 border-2 border-purple-500/50 shadow-xl">
              <div className="absolute -top-4 -right-4 bg-yellow-500 p-4 rounded-xl shadow-lg z-10 ring-4 ring-yellow-500/30">
                <img src={DeadlockAgent} alt="Deadlock" className="w-16 h-16" />
              </div>
              <div className="absolute top-24 -right-2 bg-orange-500 p-4 rounded-xl shadow-lg z-10 ring-4 ring-orange-500/30">
                <img src={SovaAgent} alt="Sova" className="w-16 h-16" />
              </div>
              <div className="absolute top-48 right-8 bg-red-500 p-4 rounded-xl shadow-lg z-10 ring-4 ring-red-500/30">
                <img src={ViperAgent} alt="Viper" className="w-16 h-16" />
              </div>

              <h3 className="text-white font-bold text-2xl mb-6">WHAT DO PROS PICK?</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                From NA Challenger Qualifiers (via VLR.gg):
              </p>
              <div className="space-y-3 text-yellow-300 font-bold bg-black/40 rounded-lg p-4">
                <p>📊 Ascent: Killjoy 98%, Jett 89%, Sova 89%</p>
                <p>📊 KAYO 54%, Omen 76%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bite-Sized Facts */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-10 shadow-2xl border-2 border-purple-500">
          <h2 className="text-3xl font-extrabold text-white mb-8">📈 BITE-SIZED FACTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-white font-bold text-xl mb-4">
                According to Blitz.gg Diamond+ ranked, Act IV:
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Lotus, Haven, Ascent, Icebox, Sunset, Bind all have win rates hovering around 16.1% play rate.
              </p>
              <div className="mt-6 bg-purple-800/50 rounded-lg p-4">
                <p className="text-purple-200 text-sm">
                  💡 <strong>Pro Tip:</strong> Map diversity is at an all-time high this season!
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={AscentMap}
                alt="Ascent Map"
                className="w-full rounded-xl ring-4 ring-purple-500/50 shadow-2xl hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white font-bold">ASCENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Footer */}
      <footer className="bg-black border-t-4 border-red-600 py-12 mt-16">
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

export default MatchesPage;
