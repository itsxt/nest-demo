import * as mongoose from 'mongoose';
// 使用Mongoose定义要存储的数据类型
export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String,
});
