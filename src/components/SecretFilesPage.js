import React from 'react';
import { Link } from 'react-router-dom';
import ArchiveLogo from '../assets/The_Archive_WHITE-removebg-preview.png';
import GowRagnarok from '../assets/GOW RAGNAROK.jpg';
import GowLogo from '../assets/GOD OF WAR LOGO.png';
import GowWalkthrough from '../assets/GOD OF WAR WALKTHROUGH.png';
import DadAndBoy from '../assets/DAD AND BOY.jpeg';
import KratosVThor from '../assets/KRATOS V THOR.png';
import SubtleBg from '../assets/1296116.jpg';

const SecretFilesPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Snowy Blue Themed Header Navigation */}
      <nav className="bg-gradient-to-r from-blue-900 to-slate-800 border-b-2 border-blue-700 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={ArchiveLogo} alt="The Archive" className="h-20" />
            </Link>
            <div className="flex space-x-10 text-base font-bold uppercase tracking-wider">
              <Link to="/" className="text-white hover:text-cyan-300 transition-colors">HOME</Link>
              <Link to="/news" className="text-white hover:text-cyan-300 transition-colors">NEWS</Link>
              <Link to="/matches" className="text-white hover:text-cyan-300 transition-colors">MATCHES</Link>
              <Link to="/patch-digest" className="text-white hover:text-cyan-300 transition-colors">PATCH DIGEST</Link>
              <Link to="/secret-files" className="text-cyan-300 font-extrabold">SECRET FILES</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Layered Backgrounds */}
      <div className="relative min-h-screen">
        {/* Subtle Background Layer - increased opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${SubtleBg})` }}
        ></div>
        
        {/* Walkthrough Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${GowWalkthrough})` }}
        ></div>
        
        {/* Dark Overlay - slightly reduced for more visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          {/* Main Header with Logo */}
          <div className="mb-12">
            <img 
              src={GowLogo} 
              alt="God of War Logo" 
              className="h-32 w-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-blue-400 mb-8">
              GOD OF WAR<br />RAGNARÖK
            </h1>
            <div className="bg-blue-900 inline-block px-4 py-2 rounded text-white font-bold">
              COMPLETE GUIDE<br />
              & WALKTHROUGH
            </div>
          </div>

          {/* Secret File Entry */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              SECRET FILE #13:<br />
              GOD OF WAR:<br />RAGNARÖK
            </h2>
            
            <h3 className="text-2xl font-bold text-blue-400 mb-6">UNCOVER THE SECRETS</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every legend has its shadows. God of War: Ragnarök may tell the story of gods, 
              giants, and the end of the world, but buried beneath its epic battles and heartfelt 
              moments lie secrets that most never uncover. Hidden dialogues, forgotten lore, 
              disguised allies, whispers in the frost, and callbacks to Kratos' brutal past all 
              weave a deeper layer of mythos ready to be decoded.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              This Secret File compiles the overlooked truths, easter eggs, and hidden lore of 
              Ragnarök's Fragments of Lore across the Nine Realms so far richer, 
              and far stranger, than they first appear.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src={DadAndBoy} 
                alt="Kratos and Atreus" 
                className="rounded-lg w-full object-cover h-64"
              />
              <img 
                src={GowRagnarok} 
                alt="God of War Ragnarok" 
                className="rounded-lg w-full object-cover h-64"
              />
            </div>
          </div>

          {/* Secret Sections */}
          <div className="space-y-12">
            {/* Secret 1 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">1. THE REAL TYR</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Early in the game, Kratos and Atreus free Tyr, the Norse god of war, from Odin's 
                prison. He comes across as pacifist, wise, and strangely reluctant to help. For 
                hours, players trust Tyr. Only to learn later that this "Tyr" was Odin in disguise the 
                entire time. It's one of the game's biggest twists.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The actual Tyr is alive, but locked away in Niflheim. You can only meet him after 
                finishing the story, and he reacts in unique ways depending on where you take 
                him. This clever misdirection shows just how masterfully Odin has been 
                want to manipulate Kratos and Atreus.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong>Implications:</strong> Even allies may be enemies in disguise, and Odin's deception 
                proves that in the Nine Realms, trust itself is a dangerous weapon.
              </p>
              
              <img 
                src={DadAndBoy} 
                alt="Tyr Secret - Kratos and Atreus" 
                className="rounded-lg w-full mb-6 object-cover h-80"
              />
            </div>

            {/* Secret 2 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">2. THE ECHO OF MJÖLNIR</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                When Thor dies, many players expected Kratos to pick up his hammer. After all, 
                he once wielded the Blade of Olympus and countless weapons of myth. But 
                instead, Mjölnir is left untouched. If you listen to the dialogue, you'll notice lines 
                from Mimir that hint Thor's hammer still echoes with the god's voice and 
                brutality.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By refusing to claim it, Kratos shows that he's finally breaking free of his old cycle 
                of violence. It's not about power anymore. He doesn't need another god's weapon. 
                This quiet moment symbolizes Kratos' growth; he no longer defines 
                himself by the weapons he carries, but by the choices he makes.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong>Implications:</strong> The moment symbolizes Kratos' growth; he no longer defines 
                himself by the weapons he carries, but by the choices he makes.
              </p>
              
              <img 
                src={KratosVThor} 
                alt="Kratos vs Thor" 
                className="rounded-lg w-full mb-6 object-cover h-80"
              />
            </div>

            {/* Secret 3 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">3. ECHOES OF THE PAST</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Kratos tries to put his Greek past behind him, but Ragnarök doesn't let him 
                forget. Inside Sindri's house is a toy boat sitting on a shelf. Look close 
                enough, and it bears a striking resemblance to the boat Kratos and his daughter 
                Calliope shared in Greece. It's a subtle reminder that his guilt is never far away, 
                enough, sometimes humming vaguely from Chains of Olympus, one of the older 
                PSP titles.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong>Implications:</strong> No matter how much Kratos changes, the past is etched into the 
                fabric of his present, and those who've shaped his journey forward.
              </p>
              
              <img 
                src={GowRagnarok} 
                alt="Past Echoes" 
                className="rounded-lg w-full mb-6 object-cover h-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Black Footer with Blue Accent */}
      <footer className="bg-black border-t-4 border-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={ArchiveLogo} alt="The Archive" className="h-12" />
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md">
                The Archive - Your source for esports news, match coverage, game updates, and hidden secrets.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors">News</Link>
                <Link to="/matches" className="text-gray-400 hover:text-blue-400 transition-colors">Matches</Link>
                <Link to="/patch-digest" className="text-gray-400 hover:text-blue-400 transition-colors">Patch Digest</Link>
                <Link to="/secret-files" className="text-gray-400 hover:text-blue-400 transition-colors">Secret Files</Link>
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

export default SecretFilesPage;
