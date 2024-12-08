'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Ambil data kategori dari tabel 'Categories'
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM Categories',
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Periksa jika data kategori ditemukan
    if (!categories || categories.length === 0) {
      throw new Error('No categories found in the database. Seed the Categories first.');
    }

    const pebelajaransData = [];

    // Buat 2 pembelajaran untuk setiap kategori
    for (const category of categories) {
      for (let i = 1; i <= 2; i++) {
        pebelajaransData.push({
          title: `Pembelajaran ${i} untuk Kategori ID ${category.id}`,
          description: `Deskripsi pembelajaran ${i} untuk kategori dengan ID ${category.id}`,
          image_path: `path/to/image_${category.id}_${i}.jpg`,
          category_id: category.id,
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        });
      }
    }

    // Masukkan data ke tabel Pebelajarans
    await queryInterface.bulkInsert('Pebelajarans', pebelajaransData, {});
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua data dari tabel Pebelajarans
    await queryInterface.bulkDelete('Pebelajarans', null, {});
  },
};
