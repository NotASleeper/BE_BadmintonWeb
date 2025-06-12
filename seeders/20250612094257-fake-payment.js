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
      "payments", // Tên bảng phân biệt hoa thường đúng với migration/model
      [
        {
          transactionid: null,
          orderid: "1",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-07"),
          updatedAt: new Date("2025-05-07"),
        },
        {
          transactionid: null,
          orderid: "2",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-14"),
          updatedAt: new Date("2025-05-14"),
        },
        {
          transactionid: null,
          orderid: "3",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-25"),
          updatedAt: new Date("2025-05-25"),
        },
        {
          transactionid: null,
          orderid: "4",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-06-05"),
          updatedAt: new Date("2025-06-05"),
        },
        {
          transactionid: null,
          orderid: "5",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-12"),
          updatedAt: new Date("2025-05-12"),
        },
        {
          transactionid: null,
          orderid: "6",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-06-06"),
          updatedAt: new Date("2025-06-06"),
        },
        {
          transactionid: null,
          orderid: "7",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-22"),
          updatedAt: new Date("2025-05-22"),
        },
        {
          transactionid: null,
          orderid: "8",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-29"),
          updatedAt: new Date("2025-05-29"),
        },
        {
          transactionid: null,
          orderid: "9",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-06-03"),
          updatedAt: new Date("2025-06-03"),
        },
        {
          transactionid: null,
          orderid: "10",
          paymentmethod: "Cash",
          status: null,
          createdAt: new Date("2025-05-15"),
          updatedAt: new Date("2025-05-15"),
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
    await queryInterface.bulkDelete("payments", null, {});
  },
};
