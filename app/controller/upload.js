'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const reqBody = ctx.request.body;
    // 判断标签在tags表里是否存在
    const result = await ctx.model.Tag.find({ tag: { $in: reqBody.mdTag } });
    const newTag = [];
    for (const i in result) {
      await ctx.model.Tag.update({ tag: result[i].tag }, { $set: { number: result[i].number + 1 } });
      newTag.push(result[i].tag);
    }
    reqBody.mdTag.map(e => !newTag.includes(e) && ctx.model.Tag.create({ tag: e }));
    // 新增文章
    await ctx.model.Upload.create(reqBody);
    ctx.body = { code: 200 };
  }
}

module.exports = HomeController;
