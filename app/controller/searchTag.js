'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const body = ctx.request.body;
    const list = await ctx.model.Upload.find({ mdTag: { $in: body.id } }).sort({ date: -1 });
    ctx.body = list;
  }
}

module.exports = HomeController;
