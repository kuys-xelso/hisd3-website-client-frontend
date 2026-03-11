/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateInquiry($input: CreateInquiryInput!) {\n    createInquiry(createInquiryInput: $input) {\n      id\n      name\n      email\n      phone\n      hospitalOrClinic\n      message\n    }\n  }\n": typeof types.CreateInquiryDocument,
    "\n  query TestConnection {\n    __schema {\n      types {\n        name\n      }\n    }\n  }\n": typeof types.TestConnectionDocument,
    "\n  query GetProducts {\n    products {\n      id\n      name\n      tagline\n      slug\n      media {\n        url\n      }\n    }\n  }\n": typeof types.GetProductsDocument,
    "\nquery Product($productId: String!) {\n  product(id: $productId) {\n    id\n    name\n    tagline\n    description\n    slug\n    media {\n      url\n    }\n  }\n}\n": typeof types.ProductDocument,
    "\n  query GetTeamMembers {\n    teamMembers {\n      id\n      name\n      position \n      image\n      socials\n    }\n  }\n": typeof types.GetTeamMembersDocument,
    "\n  query GetArticles {\n      articles {\n      id\n      title\n      slug\n      excerpt\n      publishedAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n    }\n    categories {\n      id\n      name\n      slug\n    }\n  }\n": typeof types.GetArticlesDocument,
    "\n  query Article($articleId: String!) {\n    article(id: $articleId) {\n      id\n      title\n      slug\n      excerpt\n      ogImage\n      createdAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n      content\n      author {\n        username\n      }\n    }\n  }\n": typeof types.ArticleDocument,
    "\n  query GetTestimonials {\n    testimonies {\n      id\n      name\n      position\n      avatarUrl\n      company\n      content\n    }\n  }\n": typeof types.GetTestimonialsDocument,
    "\nquery CompanyProfile {\n  companyProfile {\n    id\n    address\n    phone\n    email\n    socials\n  }\n}\n": typeof types.CompanyProfileDocument,
    "\n  query GetGalleries {\n    galleries {\n      id\n      title\n      coverImageUrl\n    }\n  }\n": typeof types.GetGalleriesDocument,
};
const documents: Documents = {
    "\n  mutation CreateInquiry($input: CreateInquiryInput!) {\n    createInquiry(createInquiryInput: $input) {\n      id\n      name\n      email\n      phone\n      hospitalOrClinic\n      message\n    }\n  }\n": types.CreateInquiryDocument,
    "\n  query TestConnection {\n    __schema {\n      types {\n        name\n      }\n    }\n  }\n": types.TestConnectionDocument,
    "\n  query GetProducts {\n    products {\n      id\n      name\n      tagline\n      slug\n      media {\n        url\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\nquery Product($productId: String!) {\n  product(id: $productId) {\n    id\n    name\n    tagline\n    description\n    slug\n    media {\n      url\n    }\n  }\n}\n": types.ProductDocument,
    "\n  query GetTeamMembers {\n    teamMembers {\n      id\n      name\n      position \n      image\n      socials\n    }\n  }\n": types.GetTeamMembersDocument,
    "\n  query GetArticles {\n      articles {\n      id\n      title\n      slug\n      excerpt\n      publishedAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n    }\n    categories {\n      id\n      name\n      slug\n    }\n  }\n": types.GetArticlesDocument,
    "\n  query Article($articleId: String!) {\n    article(id: $articleId) {\n      id\n      title\n      slug\n      excerpt\n      ogImage\n      createdAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n      content\n      author {\n        username\n      }\n    }\n  }\n": types.ArticleDocument,
    "\n  query GetTestimonials {\n    testimonies {\n      id\n      name\n      position\n      avatarUrl\n      company\n      content\n    }\n  }\n": types.GetTestimonialsDocument,
    "\nquery CompanyProfile {\n  companyProfile {\n    id\n    address\n    phone\n    email\n    socials\n  }\n}\n": types.CompanyProfileDocument,
    "\n  query GetGalleries {\n    galleries {\n      id\n      title\n      coverImageUrl\n    }\n  }\n": types.GetGalleriesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateInquiry($input: CreateInquiryInput!) {\n    createInquiry(createInquiryInput: $input) {\n      id\n      name\n      email\n      phone\n      hospitalOrClinic\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation CreateInquiry($input: CreateInquiryInput!) {\n    createInquiry(createInquiryInput: $input) {\n      id\n      name\n      email\n      phone\n      hospitalOrClinic\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TestConnection {\n    __schema {\n      types {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query TestConnection {\n    __schema {\n      types {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts {\n    products {\n      id\n      name\n      tagline\n      slug\n      media {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products {\n      id\n      name\n      tagline\n      slug\n      media {\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Product($productId: String!) {\n  product(id: $productId) {\n    id\n    name\n    tagline\n    description\n    slug\n    media {\n      url\n    }\n  }\n}\n"): (typeof documents)["\nquery Product($productId: String!) {\n  product(id: $productId) {\n    id\n    name\n    tagline\n    description\n    slug\n    media {\n      url\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTeamMembers {\n    teamMembers {\n      id\n      name\n      position \n      image\n      socials\n    }\n  }\n"): (typeof documents)["\n  query GetTeamMembers {\n    teamMembers {\n      id\n      name\n      position \n      image\n      socials\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArticles {\n      articles {\n      id\n      title\n      slug\n      excerpt\n      publishedAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n    }\n    categories {\n      id\n      name\n      slug\n    }\n  }\n"): (typeof documents)["\n  query GetArticles {\n      articles {\n      id\n      title\n      slug\n      excerpt\n      publishedAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n    }\n    categories {\n      id\n      name\n      slug\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Article($articleId: String!) {\n    article(id: $articleId) {\n      id\n      title\n      slug\n      excerpt\n      ogImage\n      createdAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n      content\n      author {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query Article($articleId: String!) {\n    article(id: $articleId) {\n      id\n      title\n      slug\n      excerpt\n      ogImage\n      createdAt\n      category {\n        name\n      }\n      media {\n        url\n      }\n      content\n      author {\n        username\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTestimonials {\n    testimonies {\n      id\n      name\n      position\n      avatarUrl\n      company\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetTestimonials {\n    testimonies {\n      id\n      name\n      position\n      avatarUrl\n      company\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery CompanyProfile {\n  companyProfile {\n    id\n    address\n    phone\n    email\n    socials\n  }\n}\n"): (typeof documents)["\nquery CompanyProfile {\n  companyProfile {\n    id\n    address\n    phone\n    email\n    socials\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGalleries {\n    galleries {\n      id\n      title\n      coverImageUrl\n    }\n  }\n"): (typeof documents)["\n  query GetGalleries {\n    galleries {\n      id\n      title\n      coverImageUrl\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;