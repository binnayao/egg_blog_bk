'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const list = await ctx.model.Tag.find().sort({ number: -1 });
    ctx.body = list;
  }
}

module.exports = HomeController;
