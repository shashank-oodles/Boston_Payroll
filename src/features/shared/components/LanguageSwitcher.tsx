import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "FR", label: "French" },
  { code: "ES", label: "Spanish" },
];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("EN");
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="hidden lg:block relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          flex items-center gap-1
          text-sm font-medium text-gray-700
          hover:text-gray-900 cursor-pointer
        "
      >
        {current}
        <IoIosArrowDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang.code);
                setOpen(false);
                // hook your i18n logic here
              }}
              className="
                w-full text-left px-3 py-2 text-sm
                hover:bg-gray-100 cursor-pointer
              "
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
