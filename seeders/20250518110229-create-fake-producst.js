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
      "products",
      [
        {
          name: "Vợt cầu lông Yonex Astrox 99 Pro",
          categoriesid: 1, // Vợt cầu lông
          description:
            "Vợt cao cấp dành cho người chơi chuyên nghiệp, công nghệ tân tiến tăng sức mạnh cú đập.",
          price: 3500000,
          brand: "Yonex",
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giày cầu lông Victor A970ACE",
          categoriesid: 2, // Giày cầu lông
          description:
            "Giày nhẹ, độ bám cao, giảm chấn tốt giúp di chuyển linh hoạt trên sân.",
          price: 2200000,
          brand: "Victor",
          quantity: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Áo cầu lông Lining Chính Hãng",
          categoriesid: 3, // Quần áo cầu lông
          description:
            "Áo thể thao Lining chất liệu thoáng khí, thấm hút mồ hôi tốt, phù hợp thi đấu & luyện tập.",
          price: 450000,
          brand: "Lining",
          quantity: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bao vợt cầu lông Yonex 2 ngăn",
          categoriesid: 4, // Bao vợt
          description:
            "Bao đựng vợt có lớp lót chống sốc, đựng được từ 2–3 vợt, phù hợp cho người chơi bán chuyên.",
          price: 650000,
          brand: "Yonex",
          quantity: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cầu lông Lining A+60",
          categoriesid: 5, // Cầu lông
          description:
            "Loại cầu lông thi đấu chất lượng cao, bay ổn định và độ bền tốt, dùng phổ biến trong các giải phong trào.",
          price: 300000,
          brand: "Lining",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vợt cầu lông Lining Turbo X90",
          categoriesid: 1,
          description:
            "Vợt cân bằng tốt giữa công và thủ, phù hợp người chơi trình độ trung bình–khá.",
          price: 1850000,
          brand: "Lining",
          quantity: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giày cầu lông Mizuno Wave Claw",
          categoriesid: 2,
          description:
            "Giày cầu lông cao cấp đến từ Nhật Bản, nổi bật với khả năng đàn hồi và bám sân cực tốt.",
          price: 2750000,
          brand: "Mizuno",
          quantity: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bộ quần áo cầu lông Yonex 10325",
          categoriesid: 3,
          description:
            "Thiết kế thể thao, chất liệu mát lạnh, co giãn 4 chiều giúp vận động linh hoạt.",
          price: 520000,
          brand: "Yonex",
          quantity: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bao vợt cầu lông Lining cao cấp",
          categoriesid: 4,
          description:
            "Bao vợt Lining dày dặn, ngăn lớn đựng giày, cầu và phụ kiện khác.",
          price: 780000,
          brand: "Lining",
          quantity: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ống cầu lông Yonex Mavis 350",
          categoriesid: 5,
          description:
            "Loại cầu nhựa bền, bay ổn định, lý tưởng cho luyện tập hàng ngày và tiết kiệm chi phí.",
          price: 180000,
          brand: "Yonex",
          quantity: 120,
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
