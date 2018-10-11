'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const id = ctx.request.body;
    const detail = await ctx.model.Upload.find({ _id: id.id });
    ctx.body = detail[0];
  }
}

module.exports = HomeController;
