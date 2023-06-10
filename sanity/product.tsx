import { slugify } from "./uitils/slugify"; // Import the slugify utility function

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // Set a maximum length for the slug
        slugify: (input: any) => slugify(input), // Use the slugify utility function to generate the slug
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
     {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'XS', value: 'XS' },
              { title: 'S', value: 'S' },
              { title: 'M', value: 'M' },
              { title: 'L', value: 'L' },
             { title: 'XL', value: 'XL' },
            ],
          },
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
           
        },
      ],
    },

  
  ],
};
