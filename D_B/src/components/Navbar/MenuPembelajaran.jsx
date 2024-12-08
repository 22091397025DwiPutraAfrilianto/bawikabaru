import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MenuPembelajaran() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex justify-center gap-4 mb-6">
            <button
                className={`px-4 py-2 border-2 font-bold rounded-full ${isActive("/materipembelajaran") ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                onClick={() => navigate("/materipembelajaran")}
            >
                Adat Istiadat
            </button>
            <button
                className={`px-4 py-2 border-2 font-bold rounded-full ${isActive("/materipembelajaran2") ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                onClick={() => navigate("/materipembelajaran2")}
            >
                Bahasa Jawa
            </button>
            <Link
                className={`px-4 py-2 border-2 font-bold rounded-full ${isActive("/materipembelajaran3") ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                to="/materipembelajaran3"
            >
                Pakaian Adat
            </Link>
            <Link
                className={`px-4 py-2 border-2 font-bold rounded-full ${isActive("/materipembelajaran4") ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                to="/materipembelajaran4"
            >
                Tari & Kesenian
            </Link>
            <Link
                className={`px-4 py-2 border-2 font-bold rounded-full ${isActive("/materipembelajaran5") ? "bg-[#c9a763] text-white" : "bg-[#fff5da] text-[#333] hover:bg-[#c9a763] hover:text-white"}`}
                to="/materipembelajaran5"
            >
                Aksara Jawa
            </Link>
        </div>
    );
}