import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogsByTag = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
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

  const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    {
      slug,
    },
  );

  return tag;
};
