import React from 'react';
import { Link } from 'react-router-dom';

// Logo and branding
import LogoWhite from '../assets/The_Archive_WHITE-removebg-preview.png';
import ValorantLogo from '../assets/VALORANT LOGO.png';

// Pro players
import TrentImg from '../assets/trent.png';
import OvyImg from '../assets/ovy.png';
import BabyBayImg from '../assets/BABYBAY.png';
import JawgemoImg from '../assets/JAWGEMO.png';
import ValynImg from '../assets/VALYN.png';
import XeppaImg from '../assets/XEPPA.png';

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
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={LogoWhite} alt="The Archive" className="h-8" />
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-red-500 transition-colors">HOME</Link>
            <Link to="/news" className="text-white hover:text-red-500 transition-colors">NEWS</Link>
            <Link to="/matches" className="text-red-500 font-bold">MATCHES</Link>
            <Link to="/patch-digest" className="text-white hover:text-red-500 transition-colors">PATCH DIGEST</Link>
            <Link to="/secret-files" className="text-white hover:text-red-500 transition-colors">SECRET FILES</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Match Header (with Valorant Logo) */}
        <div className="bg-red-900 rounded-lg p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={ValorantLogo} alt="Valorant" className="h-10 w-10 object-contain" />
            <span className="text-white font-bold text-lg">VCT 2025: AMERICAS STAGE 2</span>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold">Monday, August 19th</p>
            <p className="text-white/80">7:00 AM PST</p>
          </div>
        </div>

        {/* Main Match Display */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8 shadow-lg">
          <div className="flex items-center justify-center space-x-12">
            <div className="text-center">
              <div className="w-28 h-28 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden ring-2 ring-gray-700">
                <img src={TrentImg} alt="G2 Trent" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-lg">G2 ESPORTS</h3>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-white mb-2">VS</div>
              <p className="text-gray-400 font-semibold">Best of 3</p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden ring-2 ring-gray-700">
                <img src={OvyImg} alt="C9 Ovy" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-lg">CLOUD 9</h3>
            </div>
          </div>
        </div>

        {/* Match Stats Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition">
              OVERVIEW
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600 transition">
              PERFORMANCE
            </button>
          </div>

          {/* Map Selection */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition">
              MAP 1
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600 transition">
              MAP 2
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600 transition">
              MAP 3
            </button>
          </div>

          {/* Team Compositions (ASCENT map background) */}
          <div
            className="bg-cover bg-center rounded-lg p-8 min-h-[28rem]"
            style={{ backgroundImage: `url(${AscentMap})` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/70 rounded-lg p-6 backdrop-blur-sm">
              {/* G2 Esports Team */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white rounded mr-3 flex items-center justify-center overflow-hidden">
                    <img src={TrentImg} alt="trent" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-xl">G2 ESPORTS</h3>
                  <span className="ml-auto text-green-400 font-bold text-3xl">13</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={SovaAgent} alt="Sova" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">21 / 5 / 4</div>
                      <div className="text-gray-300 text-sm font-semibold">SOVA</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={ChamberAgent} alt="Chamber" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">19 / 12 / 6</div>
                      <div className="text-gray-300 text-sm font-semibold">CHAMBER</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={YoruAgent} alt="Yoru" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">16 / 8 / 11</div>
                      <div className="text-gray-300 text-sm font-semibold">YORU</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={NeonAgent} alt="Neon" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">10 / 13 / 11</div>
                      <div className="text-gray-300 text-sm font-semibold">NEON</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={OmenAgent} alt="Omen" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">13 / 14 / 10</div>
                      <div className="text-gray-300 text-sm font-semibold">OMEN</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud 9 Team */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white rounded mr-3 flex items-center justify-center overflow-hidden">
                    <img src={OvyImg} alt="ovy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-xl">CLOUD 9</h3>
                  <span className="ml-auto text-red-400 font-bold text-3xl">8</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={YoruAgent} alt="Yoru" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">22 / 4 / 2</div>
                      <div className="text-gray-300 text-sm font-semibold">YORU</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={OmenAgent} alt="Omen2" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">24 / 5 / 5</div>
                      <div className="text-gray-300 text-sm font-semibold">OMEN</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={VyseAgent} alt="Vyse" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">11 / 13 / 5</div>
                      <div className="text-gray-300 text-sm font-semibold">VYSE</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={DeadlockAgent} alt="Deadlock" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">14 / 16 / 7</div>
                      <div className="text-gray-300 text-sm font-semibold">DEADLOCK</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800/80 p-3 rounded backdrop-blur-sm">
                    <img src={FadeAgent} alt="Fade" className="w-12 h-12 rounded ring-1 ring-white/20" />
                    <div className="flex-1">
                      <div className="text-white font-bold">14 / 12 / 1</div>
                      <div className="text-gray-300 text-sm font-semibold">FADE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build Lab Section (enhanced with more pro-players) */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">BUILD LAB: PRO LOADOUTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                  <img src={TrentImg} alt="trent" className="w-12 h-12 rounded ring-2 ring-white/10" />
                  <span className="text-white font-bold flex-1">G2 TRENT</span>
                  <div className="w-14 h-14 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={SovaAgent} alt="trent-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                  <img src={OvyImg} alt="ovy" className="w-12 h-12 rounded ring-2 ring-white/10" />
                  <span className="text-white font-bold flex-1">C9 O V Y</span>
                  <div className="w-14 h-14 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={OmenAgent} alt="ovy-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                  <img src={BabyBayImg} alt="babybay" className="w-12 h-12 rounded ring-2 ring-white/10" />
                  <span className="text-white font-bold flex-1">BABYBAY</span>
                  <div className="w-14 h-14 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={ViperAgent} alt="babybay-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                  <img src={JawgemoImg} alt="jawgemo" className="w-12 h-12 rounded ring-2 ring-white/10" />
                  <span className="text-white font-bold flex-1">JAWGEMO</span>
                  <div className="w-14 h-14 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={YoruAgent} alt="jawgemo-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                  <img src={ValynImg} alt="valyn" className="w-12 h-12 rounded ring-2 ring-white/10" />
                  <span className="text-white font-bold flex-1">VALYN</span>
                  <div className="w-14 h-14 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={ChamberAgent} alt="valyn-agent" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 bg-yellow-500 p-3 rounded-lg shadow-lg z-10">
                <img src={DeadlockAgent} alt="Deadlock" className="w-14 h-14" />
              </div>
              <div className="absolute top-20 right-16 bg-orange-500 p-3 rounded-lg shadow-lg z-10">
                <img src={SovaAgent} alt="Sova" className="w-14 h-14" />
              </div>
              <div className="absolute top-40 right-32 bg-red-500 p-3 rounded-lg shadow-lg z-10">
                <img src={ViperAgent} alt="Viper" className="w-14 h-14" />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
                <h3 className="text-white font-bold text-xl mb-4">WHAT DO PROS PICK?</h3>
                <p className="text-gray-400 mb-3 leading-relaxed">
                  From NA Challenger Qualifiers (via VLR.gg):
                </p>
                <div className="space-y-2 text-yellow-400 font-semibold">
                  <p>Ascent: Killjoy 98%, Jett 89%, Sova 89%</p>
                  <p>KAYO 54%, Omen 76%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bite-Sized Facts (with real map preview) */}
        <div className="bg-purple-900/80 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">BITE-SIZED FACTS:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white font-semibold mb-4">
                According to Blitz.gg Diamond+ ranked, Act IV:
              </p>
              <p className="text-gray-200 leading-relaxed">
                Lotus, Haven, Ascent, Icebox, Sunset, Bind all have win rates hovering around 16.1% play rate.
              </p>
            </div>
            <div className="relative">
              <img
                src={AscentMap}
                alt="Ascent Map"
                className="w-full rounded-lg ring-2 ring-white/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src={LogoWhite} alt="The Archive" className="h-8" />
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

export default MatchesPage;
