import axios from "axios";
import Music from "../class/musicClass"; // Assuming this is a constructor function for Category

// Ambil URL dari file `.env` menggunakan Vite
const apiUrl = import.meta.env.VITE_APP_API_URL; // Gunakan `import.meta.env`

const getMusics = async () => {
    try {
        const response = await axios.get(`${apiUrl}/musics`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response?.data?.musics) {
            return response.data.musics.map(music => new Music(music));
        }

        throw new Error("No music data found.");
    } catch (error) {
        console.error("Error fetching musics:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch music");
    }
};

const getMusicById = async (musicId) => {
    try {
        const response = await axios.get(`${apiUrl}/musics/${musicId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.data && response.data.music) {
            return new Music(response.data.music);
        }

        throw new Error("No music data found.");
    } catch (error) {
        console.error("Error fetching musics:", error.message || error);
        throw new Error(error.response?.data?.message || "Failed to fetch music");
    }
};


const musicService = {
    getMusics,
    getMusicById
};

export default musicService;
