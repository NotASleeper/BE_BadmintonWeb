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
    await queryInterface.bulkInsert("grns", [
      {
        date: new Date("2025-05-03"),
        totalprice: 1680000, // chi tiết bên dưới
        userid: 4,
        createdAt: new Date("2025-05-03"),
        updatedAt: new Date("2025-05-03"),
      },
      {
        date: new Date("2025-05-12"),
        totalprice: 395000,
        userid: 5,
        createdAt: new Date("2025-05-12"),
        updatedAt: new Date("2025-05-12"),
      },
      {
        date: new Date("2025-05-27"),
        totalprice: 322000,
        userid: 4,
        createdAt: new Date("2025-05-27"),
        updatedAt: new Date("2025-05-27"),
      },
      {
        date: new Date("2025-06-01"),
        totalprice: 237000,
        userid: 5,
        createdAt: new Date("2025-06-01"),
        updatedAt: new Date("2025-06-01"),
      },
      {
        date: new Date("2025-06-08"),
        totalprice: 815000,
        userid: 4,
        createdAt: new Date("2025-06-08"),
        updatedAt: new Date("2025-06-08"),
      },
      {
        date: new Date("2025-05-15"),
        totalprice: 244000,
        userid: 4,
        createdAt: new Date("2025-05-15"),
        updatedAt: new Date("2025-05-15"),
      },
      {
        date: new Date("2025-05-23"),
        totalprice: 408000,
        userid: 5,
        createdAt: new Date("2025-05-23"),
        updatedAt: new Date("2025-05-23"),
      },
      {
        date: new Date("2025-06-04"),
        totalprice: 1560000,
        userid: 4,
        createdAt: new Date("2025-06-04"),
        updatedAt: new Date("2025-06-04"),
      },
      {
        date: new Date("2025-06-10"),
        totalprice: 355000,
        userid: 5,
        createdAt: new Date("2025-06-10"),
        updatedAt: new Date("2025-06-10"),
      },
      {
        date: new Date("2025-06-11"),
        totalprice: 927000,
        userid: 4,
        createdAt: new Date("2025-06-11"),
        updatedAt: new Date("2025-06-11"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("grns", null, {});
  },
};
