import pakaianadatpria from "../assets/pakaianadatpria.png";
import pakaianadatwanita from "../assets/pakaianadatwanita.png";
import Navbar from "../components/navbar";
import MenuPembelajaran from "../components/Navbar/MenuPembelajaran";
import { useNavigate } from "react-router-dom";

const MateriPembelajaran3 = () => {
  const navigate = useNavigate();

  const materiCards = [
    {
      id: 1,
      title: "Pakaian Adat Pria",
      description:
        "Pakaian adat jawa untuk pria memiliki variasi yang kaya dan mencerminkan tradisi serta budaya yang mendalam, berikut adalah contoh pakaian adat pria.",
      image: pakaianadatpria,
      link: "/pakaianpria",
    },
    {
      id: 2,
      title: "Pakaian Adat Wanita",
      description:
        "Pakaian adat jawa untuk wanita memiliki variasi yang kaya dan mencerminkan tradisi serta budaya yang beragam, berikut adalah contoh pakaian adat wanita.",
      image: pakaianadatwanita,
      link: "/pakaianwanita",
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

export default MateriPembelajaran3;
