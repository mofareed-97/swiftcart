const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of product",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    },

    {
      name: "type",
      title: "Type",
      type: "string",
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },

    {
      name: "countInStock",
      title: "Count In Stock",
      type: "number",
    },

    // {
    //   name: "rating",
    //   title: "Rating",
    //   type: "number",
    // },
  ],
};

export default productSchema;
