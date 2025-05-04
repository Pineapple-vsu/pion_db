const { Op } = require("sequelize");
const Order = require("../models/Order");

class OrderRepository {
  async create(order) {
    return await Order.create(order);
  }

  async read(id) {
    return await Order.findByPk(id);
  }

  async update(id, order) {
    await Order.update(order, { where: { id } });
    // return await Order.findByPk(id); // Возвращаем обновлённый заказ
  }

  async delete(id) {
    await Order.destroy({ where: { id } });
  }

  async list() {
    return await Order.findAll();
  }

  //   async findByStatus(statusId) {
  //     return await Order.findAll({ where: { status_id: statusId } });
  //   }
}

module.exports = new OrderRepository();
