// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_code',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_code',
  foreignKey: 'tag_id'
});

// create the association between Product & Product Tag
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

// create the association between Tag & Product Tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
