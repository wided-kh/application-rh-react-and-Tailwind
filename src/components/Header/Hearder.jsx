import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="flex items-center justify-between bg-white px-7 py-3 dark:bg-slate-700 dark:text-gray-300">
            <h1 className="font-bold text-lg">Tableau de bord</h1>
            <button
                className="rounded-md bg-gray-500 dark:bg-slate-600 dark:text-slate-300 p-1 transition duration-300 flex items-center"
                onClick={toggleDarkMode}
            >
                {darkMode ? (
                    <FaSun className="p-2 text-4xl" />
                ) : (
                    <FaMoon className="p-2 text-4xl" />
                )}
            </button>
        </div>
    );
};

export default Header;
