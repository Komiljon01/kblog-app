import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
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
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  return blogs;
};

export const getDetailedBlog = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        author {
          name
          bio
          id
          image {
            url
          }
        }
        createdAt
        content {
          html
        }
        slug
        tag {
          name
          slug
        }
        title
        image {
          url
        }
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return blog;
};
