'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Ambil data kategori dari tabel 'Categories'
    await queryInterface.bulkInsert('Pebelajarans', [
      {
        title: 'Upacara Mantenan',
        description: 'Upacara mantenan merupakan rangkaian tradisi dalam pernikahan yang sarat dengan nilai budaya dan makna filosofis. Di berbagai daerah di Indonesia, upacara mantenan memiliki variasi yang berbeda sesuai adat setempat, seperti adat Jawa, Sunda, Minang, hingga Bugis. Namun, secara umum, upacara ini melambangkan penyatuan dua insan sekaligus dua keluarga yang diikat dalam perjanjian suci pernikahan. Prosesi ini biasanya dipenuhi simbol-simbol yang menunjukkan harapan, doa, dan rasa syukur atas perjalanan hidup baru pasangan pengantin.',
        createdBy: 1,
        image_path: 'mantenan.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Bahasa Jawa Ngoko',
        description: 'Bahasa Jawa Ngoko adalah salah satu tingkatan bahasa Jawa yang digunakan dalam percakapan sehari- hari, terutama di antara teman sebaya, anggota keluarga yang lebih muda, atau orang yang memiliki hubungan akrab.Ragam ini dikenal karena kesederhanaannya dibandingkan dengan tingkatan bahasa Jawa lainnya seperti krama dan krama inggil.Ngoko sering menjadi pintu awal bagi seseorang yang belajar bahasa Jawa karena kosakatanya yang relatif mudah dan tidak terlalu formal.',
        createdBy: 1,
        image_path: 'ungahunguhbasa.png',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua data dari tabel Pebelajarans
    await queryInterface.bulkDelete('Pebelajarans', null, {});
  },
};
