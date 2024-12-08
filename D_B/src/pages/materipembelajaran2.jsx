import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import bahasajawangoko from "../assets/bahasangoko.png";
import bahasajawakrama from "../assets/bahasakrama.png";
import MenuPembelajaran from "../components/Navbar/MenuPembelajaran";

// Data Materi
const materiData = [
  {
    id: 1,
    title: "Bahasa Jawa Ngoko",
    description:
      "Tingkatan bahasa yang paling rendah, dan sering digunakan dalam situasi informal, seperti percakapan antara teman sebaya.",
    image: bahasajawangoko,
    navigateTo: "/jawangoko",
  },
  {
    id: 2,
    title: "Bahasa Jawa Krama",
    description:
      "Tingkatan bahasa yang paling tinggi dan dianggap paling sopan, dan umumnya dipakai dalam situasi formal.",
    image: bahasajawakrama,
    navigateTo: "/jawakrama",
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
