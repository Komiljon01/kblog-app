import { IBlog, ICategoryAndTag } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;

  const { categories } = await request<{ categories: ICategoryAndTag[] }>(
    graphqlAPI,
    query,
  );

  return categories;
};

export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        blogs {
          title
          createdAt
          author {
            name
            image {
              url
            }
          }
          category {
            name
            slug
          }
          description
          image {
            url
          }
          tag {
            name
            slug
          }
          content {
            html
          }
          slug
        }
        name
      }
    }
  `;

  const { category } = await request<{
    category: { blogs: IBlog[]; name: string };
  }>(graphqlAPI, query, {
    slug,
  });

  return category;
};
