import React from 'react';
import { Link } from 'react-router-dom';

const SecretFilesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/src/assets/The_Archive_WHITE-removebg-preview.png" alt="The Archive" className="h-8" />
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-red-500 transition-colors">HOME</Link>
            <Link to="/news" className="text-white hover:text-red-500 transition-colors">NEWS</Link>
            <Link to="/matches" className="text-white hover:text-red-500 transition-colors">MATCHES</Link>
            <Link to="/patch-digest" className="text-white hover:text-red-500 transition-colors">PATCH DIGEST</Link>
            <Link to="/secret-files" className="text-red-500 font-bold">SECRET FILES</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <div 
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/Secret Files.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          {/* Main Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-400 mb-8">
              GOD OF WAR<br />RAGNARÖK
            </h1>
            <div className="bg-blue-900 inline-block px-4 py-2 rounded text-white font-bold">
              COMPLETE GUIDE<br />& WALKTHROUGH
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
                src="/src/assets/Secret Files.jpg" 
                alt="God of War Scene 1" 
                className="rounded-lg w-full"
              />
              <img 
                src="/src/assets/Secret Files.jpg" 
                alt="God of War Scene 2" 
                className="rounded-lg w-full"
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
                src="/src/assets/Secret Files.jpg" 
                alt="Tyr Secret" 
                className="rounded-lg w-full mb-6"
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
                src="/src/assets/Secret Files.jpg" 
                alt="Mjolnir Secret" 
                className="rounded-lg w-full mb-6"
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
                src="/src/assets/Secret Files.jpg" 
                alt="Past Echoes" 
                className="rounded-lg w-full mb-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <img src="/src/assets/The_Archive_WHITE-removebg-preview.png" alt="The Archive" className="h-8" />
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

export default SecretFilesPage;
