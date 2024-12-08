import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import upacaramantenan from "../assets/mantenan.png";
import ruwatan from "../assets/ruwatan.png";
import selametan from "../assets/selametan.png";
import sekaten from "../assets/sekaten.png";
import MenuPembelajaran from "../components/Navbar/MenuPembelajaran";
// Data Materi
const materiData = [
  {
    id: 1,
    title: "Upacara Mantenan",
    description:
      "Prosesi pernikahan adat Jawa yang penuh dengan simbol dan makna filosofis. Upacara ini terdiri dari beberapa tahapan, mulai dari lamaran.",
    image: upacaramantenan,
    navigateTo: "/upacaramantenan",
  },
  {
    id: 2,
    title: "Ruwatan",
    description:
      "Upacara adat Jawa yang bertujuan untuk membersihkan atau membebaskan seseorang dari nasib buruk atau kesialan, yang dipercaya masyarakat.",
    image: ruwatan,
    navigateTo: "/ruwetan",
  },
  {
    id: 3,
    title: "Selametan",
    description:
      "Upacara adat Jawa yang dilakukan untuk mengungkapkan rasa syukur, memohon keselamatan, atau meminta berkah kepada Tuhan.",
    image: selametan,
    navigateTo: "/slametan",
  },
  {
    id: 4,
    title: "Sekaten",
    description:
      "Upacara tradisional Jawa yang diselenggarakan untuk memperingati kelahiran Nabi Muhammad SAW. Upacara ini berlangsung selama sepekan.",
    image: sekaten,
    navigateTo: "/sekaten",
  },
];

const MateriPembelajaran1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-[#fdfbf8] min-h-screen">
        <main className="text-center p-6">
          <h1 className="text-2xl font-bold text-[#333] mb-6">Materi Pembelajaran</h1>

          {/* Button Group */}
          <MenuPembelajaran />

          {/* Materi Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {materiData.map((materi) => (
              <div
                key={materi.id}
                className="w-72 bg-[#fff5da] rounded-lg shadow-md hover:scale-105 transition transform cursor-pointer"
                onClick={() => navigate(materi.navigateTo)}
              >
                <img
                  src={materi.image}
                  alt={materi.title}
                  className="w-full h-44 object-cover"
                />
                <p className="text-lg font-bold text-[#333] p-4">{materi.title}</p>
                <p className="text-justify text-sm text-[#555] px-4 pb-4">
                  {materi.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default MateriPembelajaran1;
