import { FaTachometerAlt, FaUsers, FaClipboardCheck, FaHistory, FaStar, FaCheckSquare, FaClock, FaBell, FaSignOutAlt } from "react-icons/fa";
  
  import {
    CiMoneyCheck1,
    CiMoneyBill,
    CiUser,
    CiShoppingCart,
  } from "react-icons/ci";
  
  import user01 from "../assets/user01.png";
  import user02 from "../assets/user02.png";
  import user03 from "../assets/user03.png";
  import user04 from "../assets/user04.png";
  
  // Menu Items pour l'administrateur RH
export const adminMenuItems = [
  {
      icon: FaTachometerAlt, // Icône pour le tableau de bord
      name: "Tableau de bord", // Changement de texte
      isOpen: true,
  },
  {
      icon: FaUsers,
      name: "Employés",
      isOpen: true,
  },
  {
      icon: FaClipboardCheck,
      name: "Congés en attente",
      isOpen: true,
  },
  {
      icon: FaHistory,
      name: "Tous les congés",
      isOpen: true,
  },
  {
      icon: FaStar,
      name: "Évaluations",
      isOpen: true,
  },
  {
      icon: FaCheckSquare,
      name: "Validation des heures",
      isOpen: true,
  },
  {
      icon: FaClock,
      name: "Historique des feuilles",
      isOpen: true,
  },
  
  {
      icon: FaBell,
      name: "Gestion des notifications",
      isOpen: true,
  },
  {
      icon: FaSignOutAlt, // Changement d'icône pour la déconnexion
      name: "Déconnexion", // Changement de texte
      isOpen: true,
      isLogout: true, // Ajout d'une propriété pour gérer la déconnexion
  },
];
  // Card Items
  export const cardItems = [
    {
      title: "Total Earning",
      value: "$2200.00",
      icon: (
        <CiMoneyCheck1 className="rounded-full bg-teal-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "Total Expenses",
      value: "$1200.00",
      icon: (
        <CiMoneyBill className="rounded-full bg-teal-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "New Users",
      value: "150",
      icon: (
        <CiUser className="rounded-full bg-teal-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "Total Sales",
      value: "320",
      icon: (
        <CiShoppingCart className="rounded-full bg-teal-500 p-2 text-4xl text-white" />
      ),
    },
  ];
  
  // Table Data
  export const tableData = [
    {
      id: 1,
      receiptName: "Payment Received",
      date: "2024-09-14",
      amount: "$500",
    },
    {
      id: 2,
      receiptName: "Refund Issued",
      date: "2024-09-13",
      amount: "$200",
    },
    {
      id: 3,
      receiptName: "Subscription",
      date: "2024-09-12",
      amount: "$150",
    },
    {
      id: 4,
      receiptName: "Product Sale",
      date: "2024-09-11",
      amount: "$300",
    },
  ];
  
  // Recent Activities
  export const recentActivities = [
    {
      id: 1,
      name: "John Doe",
      img: user01,
      activity: "Logged In",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: user02,
      activity: "Made a Purchase",
    },
    {
      id: 3,
      name: "Alice Johnson",
      img: user03,
      activity: "Updated Profile",
    },
    {
      id: 4,
      name: "Bob Brown",
      img: user04,
      activity: "Logged Out",
    },
  ];
  
  // Chart Data
  export const monthData = [
    {
      name: "Jan",
      sales: 4000,
      revenue: 2400,
    },
    {
      name: "Feb",
      sales: 3000,
      revenue: 1398,
    },
    {
      name: "Mar",
      sales: 2000,
      revenue: 9800,
    },
    {
      name: "Apr",
      sales: 2780,
      revenue: 3908,
    },
    {
      name: "May",
      sales: 1890,
      revenue: 4800,
    },
    {
      name: "Jun",
      sales: 2390,
      revenue: 3800,
    },
    {
      name: "Jul",
      sales: 3490,
      revenue: 4300,
    },
  ];
  
  export const chartData01 = [
    {
      name: "Electronics",
      value: 400,
    },
    {
      name: "Clothing",
      value: 300,
    },
    {
      name: "Groceries",
      value: 300,
    },
    {
      name: "Furniture",
      value: 200,
    },
  ];
  
  export const chartData02 = [
    {
      name: "Laptops",
      value: 100,
    },
    {
      name: "Smartphones",
      value: 300,
    },
    {
      name: "Men's Wear",
      value: 100,
    },
    {
      name: "Women's Wear",
      value: 80,
    },
  ];
  