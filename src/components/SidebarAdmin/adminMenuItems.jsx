const AdminMenuItem = ({ icon: Icon, name, isOpen }) => {
    return (
        <div className="m-2 flex cursor-pointer items-center space-x-2 rounded-md px-2 py-2 text-gray-400 duration-300 hover:bg-blue-700 hover:text-white">
            <Icon className="text-lg" /> {/* Taille d'icône plus petite */}
            {isOpen && <span className="text-[14px] overflow-hidden">{name}</span>} {/* Taille de texte plus petite */}
        </div>
    );
};

export default AdminMenuItem;

