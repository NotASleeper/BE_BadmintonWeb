"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Vợt cầu lông",
          description:
            "Các loại vợt cầu lông chất lượng cao từ các thương hiệu nổi tiếng.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giày cầu lông",
          description:
            "Giày chuyên dụng cho cầu lông, thiết kế nhẹ, thoáng khí và bám sân tốt.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quần áo cầu lông",
          description:
            "Bộ sưu tập quần áo thể thao dành cho người chơi cầu lông, thoáng mát và thoải mái.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bao vợt",
          description:
            "Bao đựng vợt cầu lông với nhiều kích cỡ và kiểu dáng đa dạng.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cầu lông",
          description:
            "Các loại cầu lông với chất liệu và độ bền khác nhau, phù hợp cho luyện tập và thi đấu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
