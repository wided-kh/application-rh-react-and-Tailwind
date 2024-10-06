import { LuLayoutDashboard } from "react-icons/lu";
import MenuItem from "./adminMenuItems";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { adminMenuItems } from "../../constants";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed left-0 top-0 h-full bg-slate-800 text-white transition-all z-50 flex flex-col duration-300 dark:bg-slate-700 ${isOpen ? "w-44" : "w-16 items-center"}`}>
            <div className="flex items-center justify-center p-2 bg-slate-800 rounded-md shadow-md">
                <LuLayoutDashboard className={`text-xl text-white transition-all ${isOpen ? "w-10" : "w-8"}`} />
                {isOpen && <span className="ml-1 text-sm text-white font-medium">Essence RH</span>} {/* Titre affiché uniquement si isOpen est true */}
            </div>
            {/* Menu Items */}
            <div className="mt-6 flex-1">
                {adminMenuItems.map((item, index) => (
                    <MenuItem key={index} icon={item.icon} name={item.name} isOpen={isOpen} />
                ))}
            </div>

            {/* Toggle button */}
            <button onClick={toggleSidebar} className="m-2 flex items-center justify-center rounded-md bg-gray-700 p-3 text-2x1 font-bold bg-blue-900 duration-300">
                {isOpen ? <RiArrowLeftWideFill/>:
                <RiArrowRightWideFill/> }
            </button>
        </div>
    );
};

export default AdminSidebar;
