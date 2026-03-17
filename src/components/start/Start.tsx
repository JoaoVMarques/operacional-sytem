import { useSettingsStore } from '../../store/useSettings';
import brFlag from '../../assets/images/flags/br-flag.png';
import usaFlag from '../../assets/images/flags/usa-flag.png';
import { useLanguageStore } from '../../store/useLanguageStore';

function Start() {
  const { themeHexCode} = useSettingsStore();
  const { setLanguage } = useLanguageStore();

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-50"
      style={ { background: themeHexCode() } }
    >
      <div className="bg-black/30
      backdrop-blur-md
      p-10
      md:p-14
      rounded-3xl
      shadow-2xl
      flex
      flex-col
      items-center
      border
      border-white/10">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
            Welcome / Bem-vindo
          </h1>
          <hr className="h-1 w-3/4 my-2 m-auto border-t border-gray-300 mb-1 rounded-sm" />
          <p className="text-gray-300 text-sm mb-1">
            Select your language to continue
          </p>
          <p className="text-gray-300 text-sm">
            Selecione seu idioma para continuar
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          <button
            onClick={ () => setLanguage('pt') }
            className="group
            flex
            flex-col
            items-center
            gap-4
            transition-transform
            duration-300
            hover:scale-110
            outline-none"
          >
            <div className="w-32
            h-24
            md:w-40
            md:h-28
            rounded-xl
            overflow-hidden
            shadow-lg
            ring-4
            ring-transparent
            group-hover:ring-green-400
            group-focus:ring-green-400
            transition-all
            duration-300">
              <img
                src={ brFlag }
                alt="brazilian-flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium group-hover:text-green-400 transition-colors">
              Português
            </span>
          </button>
          <button
            onClick={ () => setLanguage('en') }
            className="group
            flex
            flex-col
            items-center
            gap-4
            transition-transform
            duration-300
            hover:scale-110
            outline-none"
          >
            <div className="w-32
            h-24
            md:w-40
            md:h-28
            rounded-xl
            overflow-hidden
            shadow-lg
            ring-4
            ring-transparent
            group-hover:ring-blue-400
            group-focus:ring-blue-400
            transition-all
            duration-300">
              <img
                src={ usaFlag }
                alt="usa-flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
              English
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Start;