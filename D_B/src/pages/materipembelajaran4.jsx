import tarian from "../assets/tarian.png";
import kesenian from "../assets/kesenian.png";
import Navbar from "../components/navbar";
import MenuPembelajaran from "../components/Navbar/MenuPembelajaran";
import { useNavigate } from "react-router-dom";

const MateriPembelajaran4 = () => {
  const navigate = useNavigate();

  const materiCards = [
    {
      id: 1,
      title: "Tarian Tradisional",
      description:
        "Tarian Jawa sangat beragam, mencerminkan kekayaan budaya dan tradisi daerah tersebut. Berikut adalah beberapa tarian Jawa: Tari Gambyong.",
      image: tarian,
      link: "/tariantradisional",
    },
    {
      id: 2,
      title: "Kesenian",
      description:
        "Kesenian daerah Jawa sangat beragam dan mencakup berbagai bentuk seni yang mencerminkan budaya, tradisi, dan nilai-nilai masyarakat.",
      image: kesenian,
      link: "/kesenian",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#fdfbf8] min-h-screen">
        {/* Main Content */}
        <main className="text-center p-6">
          <h1 className="text-2xl font-bold text-[#333] mb-6">Materi Pembelajaran</h1>
          {/* Button Group */}
          <MenuPembelajaran />

          {/* Materi List */}
          <div className="flex flex-wrap justify-center gap-6">
            {materiCards.map((card) => (
              <div
                key={card.id}
                className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform"
                onClick={() => navigate(card.link)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover"
                />
                <p className="text-lg font-bold text-[#333] p-4">{card.title}</p>
                <p className="text-justify text-sm text-[#555] px-4 pb-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran4;
