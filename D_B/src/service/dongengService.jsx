import axios from "axios";
import Dongeng from "../class/dongengClass"; // Assuming this is a constructor function for Dongeng

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getDongengs = async () => {
    try {
        const response = await axios.get(`${apiUrl}/dongengs`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.dongengs) {
            return response.data.dongengs.map(dongeng => new Dongeng(dongeng));
        }

        throw new Error("No dongeng data found.");
    } catch (error) {
        console.error("Error fetching videos:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch videos");
    }
};
const getDongengById = async (dongengId) => {
    try {
        const response = await axios.get(`${apiUrl}/dongengs/${dongengId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.dongeng) {
            return new Dongeng(response?.data?.dongeng);
        }

        throw new Error("Dongeng tidak ditemukan.");
    } catch (error) {
        console.error("Error fetching Dongeng by ID:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch Dongeng");
    }
};

const dongengService = {
    getDongengs,
    getDongengById,
};

export default dongengService;
