import React from 'react';
import { Link } from 'react-router-dom';

// images from src/assets
import LogoWhite from '../assets/The_Archive_WHITE-removebg-preview.png';
import VCT from '../assets/bar-chart.png'; // fallback header icon
import TrentImg from '../assets/trent.png';
import OvyImg from '../assets/ovy.png';
import TejoImg from '../assets/tejo.png';
import SovaAgent from '../assets/sova.png';
import ChamberAgent from '../assets/chamber.png';
import YoruAgent from '../assets/yoru.png';
import OmenAgent from '../assets/omen.png';
import VyseAgent from '../assets/vyse.png';
import DeadlockAgent from '../assets/deadlock.png';
import ViperAgent from '../assets/viper.png';

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
        {/* Match Header */}
        <div className="bg-red-900 rounded-lg p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={VCT} alt="Event" className="h-8 opacity-90" />
            <span className="text-white font-bold">VCT 2025: AMERICAS STAGE 2</span>
          </div>
          <div className="text-right">
            <p className="text-white">Monday, August 19th</p>
            <p className="text-white">7:00 AM PST</p>
          </div>
        </div>

        {/* Main Match Display */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center space-x-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src={TrentImg} alt="G2 Trent" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold">G2 ESPORTS</h3>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">VS</div>
              <p className="text-gray-400">Best of 3</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src={OvyImg} alt="C9 Ovy" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold">CLOUD 9</h3>
            </div>
          </div>
        </div>

        {/* Match Stats Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button className="bg-red-600 text-white px-6 py-3 rounded font-bold">OVERVIEW</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600">PERFORMANCE</button>
          </div>

          {/* Map Selection */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-bold">MAP 1</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600">MAP 2</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded font-bold hover:bg-gray-600">MAP 3</button>
          </div>

          {/* Team Compositions (background image and agents) */}
          <div
            className="bg-cover bg-center rounded-lg p-8 min-h-[24rem]"
            style={{ backgroundImage: `url('https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6f5f3f4f6f4e2b2c/64bfb0f0d1e4f66a8e4e6f2e/Valorant_Ascent_02.jpg')` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black bg-opacity-60 rounded-lg p-6">
              {/* G2 Esports Team */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center overflow-hidden">
                    <img src={TrentImg} alt="trent" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg">G2 ESPORTS</h3>
                  <span className="ml-auto text-green-500 font-bold text-2xl">13</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={SovaAgent} alt="Sova" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">21/5/4</div>
                      <div className="text-gray-300 text-sm font-bold">SOVA</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={ChamberAgent} alt="Chamber" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">19/12/6</div>
                      <div className="text-gray-300 text-sm font-bold">CHAMBER</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={YoruAgent} alt="Yoru" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">16/8/11</div>
                      <div className="text-gray-300 text-sm font-bold">YORU</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={SovaAgent} alt="Sova2" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">10/13/11</div>
                      <div className="text-gray-300 text-sm font-bold">SOVA</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={OmenAgent} alt="Omen" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">13/14/10</div>
                      <div className="text-gray-300 text-sm font-bold">OMEN</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud 9 Team */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center overflow-hidden">
                    <img src={OvyImg} alt="ovy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg">CLOUD 9</h3>
                  <span className="ml-auto text-red-500 font-bold text-2xl">8</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={YoruAgent} alt="Yoru" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">22/4/2</div>
                      <div className="text-gray-300 text-sm font-bold">YORU</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={OmenAgent} alt="Omen2" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">24/5/5</div>
                      <div className="text-gray-300 text-sm font-bold">OMEN</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={VyseAgent} alt="Vyse" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">11/13/5</div>
                      <div className="text-gray-300 text-sm font-bold">VYSE</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={DeadlockAgent} alt="Deadlock" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">14/16/7</div>
                      <div className="text-gray-300 text-sm font-bold">DEADLOCK</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                    <img src={SovaAgent} alt="SovaC9" className="w-10 h-10 rounded" />
                    <div>
                      <div className="text-white font-semibold">14/12/1</div>
                      <div className="text-gray-300 text-sm font-bold">SOVA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build Lab Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">BUILD LAB: CROSSHAIRS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
                  <img src={TrentImg} alt="trent" className="w-12 h-12 rounded" />
                  <span className="text-white font-bold">G2 TRENT</span>
                  <div className="ml-auto w-16 h-16 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={SovaAgent} alt="trent-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
                  <img src={OvyImg} alt="ovy" className="w-12 h-12 rounded" />
                  <span className="text-white font-bold">C9 O V Y</span>
                  <div className="ml-auto w-16 h-16 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={OmenAgent} alt="ovy-agent" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded">
                  <img src={TejoImg} alt="tejo" className="w-12 h-12 rounded" />
                  <span className="text-white font-bold">BABYRAY</span>
                  <div className="ml-auto w-16 h-16 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                    <img src={ViperAgent} alt="babybay-agent" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 bg-yellow-500 p-4 rounded-lg">
                <img src={DeadlockAgent} alt="Deadlock" className="w-16 h-16" />
              </div>
              <div className="absolute top-20 right-16 bg-orange-500 p-4 rounded-lg">
                <img src={SovaAgent} alt="Sova" className="w-16 h-16" />
              </div>
              <div className="absolute top-40 right-32 bg-red-500 p-4 rounded-lg">
                <img src={ViperAgent} alt="Viper" className="w-16 h-16" />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-4">WHAT DO PROS PICK?</h3>
                <p className="text-gray-400 mb-2">From NA Challenger Qualifiers (via VLR.gg):</p>
                <p className="text-yellow-500">Ascent: Killjoy 98%, Jett 89%, Sova 89%</p>
                <p className="text-yellow-500">KAYO 54%, Omen 76%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bite-Sized Facts */}
        <div className="bg-purple-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">BITE-SIZED FACTS:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white mb-4">
                According to Blitz.gg Diamond+ ranked, Act IV:
              </p>
              <p className="text-gray-300">
                Lotus, Haven, Ascent, Icebox, Sunset, Bind all have win rates hovering around 16.1% play rate.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6f5f3f4f6f4e2b2c/64bfb0f0d1e4f66a8e4e6f2e/Valorant_Ascent_02.jpg" alt="Map" className="w-full rounded-lg opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
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
