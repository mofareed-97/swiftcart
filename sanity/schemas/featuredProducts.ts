const featuredProductsSchema = {
  name: "featuredProduct",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "mostSellingProducts",
      title: "Most Selling Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "bestDeals",
      title: "Best Deals",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "trendingProducts",
      title: "Trending Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
};

export default featuredProductsSchema;
