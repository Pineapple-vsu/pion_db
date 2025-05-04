const orderService = require("../services/order");

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const order = await orderService.updateOrder(req.params.id, req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await orderService.deleteOrder(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new OrderController();
