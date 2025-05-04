const OrderRepository = require("../repository/order");

class OrderService {
  async createOrder(order) {
    return await OrderRepository.create(order);
  }

  async getOrderById(id) {
    return await OrderRepository.read(id);
  }

  async updateOrder(id, order) {
    await OrderRepository.update(id, order);
    return await OrderRepository.read(id);
  }

  async deleteOrder(id) {
    await OrderRepository.delete(id);
  }
  async getAllOrders() {
    return await OrderRepository.list();
  }

  //   async getOrdersByStatus(statusId) {
  //     const orders = await OrderRepository.findByStatus(statusId);
  //     if (orders.length === 0) {
  //       throw new Error("No orders found with this status");
  //     }
  //     return orders;
  //   }
}

module.exports = new OrderService();
