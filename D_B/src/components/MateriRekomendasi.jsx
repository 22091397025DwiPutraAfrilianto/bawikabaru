import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pembelajaranService from "../service/pembelajaranService";

const MateriRekomendasi = ({ categoryId }) => {
    const [materiData, setMateriData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMateriRekomendasi = async () => {
            try {
                const response = await pembelajaranService.getPembelajaranCategoryById(categoryId);
                if (response && Array.isArray(response)) {
                    setMateriData(response);
                    console.log(response);
                }
            } catch (err) {
                console.error("Gagal mengambil materi rekomendasi:", err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (categoryId) fetchMateriRekomendasi();
    }, [categoryId]);

    const handleToTop = () => {
        window.location(0, 0)
    }

    return (
        <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Rekomendasi</h2>
            {isLoading ? (
                <div className="text-gray-500 mt-4">Memuat rekomendasi...</div>
            ) : (
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    {materiData.length > 0 ? (
                        materiData.map((item) => (
                            <Link
                                onClick={handleToTop}
                                to={`/pembelajaran/${item.id}`}
                                key={item.id}
                                className="card bg-white shadow-lg rounded-lg overflow-hidden w-48 hover:shadow-2xl transition-shadow duration-200"
                            >
                                <img
                                    src={item.imagePath ? `/image/pembelajaran/${item.imagePath}` : ''}
                                    alt={item.title}
                                    className="w-full h-32 object-cover"
                                />
                                <p className="mt-2 text-gray-700 font-bold text-sm">{item.title}</p>
                            </Link>
                        ))
                    ) : (
                        <div className="text-gray-500">Belum ada rekomendasi yang tersedia.</div>
                    )}
                </div>
            )}
        </section>
    );
};

export default MateriRekomendasi;
