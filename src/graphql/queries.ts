import { gql } from "./generated";

export const TEST_QUERY = gql(`
  query TestConnection {
    __schema {
      types {
        name
      }
    }
  }
`);

export const GET_PRODUCTS = gql(`
  query GetProducts {
    products {
      id
      name
      tagline
      slug
      media {
        url
      }
    }
  }
`);

export const GET_PRODUCT_BY_ID = gql(`
query Product($productId: String!) {
  product(id: $productId) {
    id
    name
    tagline
    description
    slug
    media {
      url
    }
  }
}
`);

export const GET_TEAM_MEMBERS = gql(`
  query GetTeamMembers {
    teamMembers {
      id
      name
      position 
      image
      socials
    }
  }
`);

export const GET_ARTICLES = gql(`
  query GetArticles {
      articles {
      id
      title
      slug
      excerpt
      publishedAt
      category {
        name
      }
      media {
        url
      }
    }
    categories {
      id
      name
      slug
    }
  }
`);

export const GET_ARTICLE_BY_ID = gql(`
  query Article($articleId: String!) {
    article(id: $articleId) {
      id
      title
      slug
      excerpt
      ogImage
      createdAt
      category {
        name
      }
      media {
        url
      }
      content
      author {
        username
      }
    }
  }
`);

export const GET_TESTIMONIALS = gql(`
  query GetTestimonials {
    testimonies {
      id
      name
      position
      avatarUrl
      company
      content
    }
  }
`);
