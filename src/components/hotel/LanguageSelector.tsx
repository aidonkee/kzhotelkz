import { ChevronDown } from "lucide-react";
import { useLanguage, Language, languageNames, languageFlags } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const LanguageSelector = ({ isScrolled = false }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const languages: Language[] = ["ru", "kz", "en", "zh", "az"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-gold ${
        isScrolled ? "text-foreground" : "text-white"
      }`}>
        <span>{languageFlags[language]}</span>
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border-gold/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`flex items-center gap-2 cursor-pointer ${
              language === lang ? "bg-gold/10 text-gold" : ""
            }`}
          >
            <span>{languageFlags[lang]}</span>
            <span>{languageNames[lang]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
