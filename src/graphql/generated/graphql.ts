/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AdminArticleEntity = {
  __typename?: 'AdminArticleEntity';
  _count: ArticleCount;
  author?: Maybe<User>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ArticleStatus;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AdminGalleryEntity = {
  __typename?: 'AdminGalleryEntity';
  _count: GalleryCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminProductEntity = {
  __typename?: 'AdminProductEntity';
  _count: ProductCount;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  media?: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Article = {
  __typename?: 'Article';
  _count: ArticleCount;
  author?: Maybe<User>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ArticleStatus;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ArticleCount = {
  __typename?: 'ArticleCount';
  media: Scalars['Int']['output'];
};

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>;
  none?: InputMaybe<ArticleWhereInput>;
  some?: InputMaybe<ArticleWhereInput>;
};

export type ArticleNullableScalarRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>;
  isNot?: InputMaybe<ArticleWhereInput>;
};

export enum ArticleStatus {
  Approved = 'APPROVED',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  InReview = 'IN_REVIEW',
  Published = 'PUBLISHED'
}

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  author?: InputMaybe<UserNullableScalarRelationFilter>;
  category?: InputMaybe<CategoryNullableScalarRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  excerpt?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  media?: InputMaybe<MediaListRelationFilter>;
  metaDescription?: InputMaybe<StringNullableFilter>;
  metaTitle?: InputMaybe<StringNullableFilter>;
  ogImage?: InputMaybe<StringNullableFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumArticleStatusFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  articles?: Maybe<Array<Article>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  articles: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
};

export type CategoryNullableScalarRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  articles?: InputMaybe<ArticleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type CreateArticleDto = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ArticleStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateCompanyProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateGalleryDto = {
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateInquiryInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  hospitalOrClinic?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  tagline?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTeamMemberInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  position: Scalars['String']['input'];
  socials?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateTestimonyInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  hashedPassword: Scalars['String']['input'];
  role?: InputMaybe<Array<Role>>;
  username: Scalars['String']['input'];
};

export type CreateUserProfileInput = {
  profile?: InputMaybe<CreateProfileInput>;
  user?: InputMaybe<CreateUserInput>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumArticleStatusFilter = {
  equals?: InputMaybe<ArticleStatus>;
  in?: InputMaybe<Array<ArticleStatus>>;
  not?: InputMaybe<NestedEnumArticleStatusFilter>;
  notIn?: InputMaybe<Array<ArticleStatus>>;
};

export type EnumMediaTypeFilter = {
  equals?: InputMaybe<MediaType>;
  in?: InputMaybe<Array<MediaType>>;
  not?: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn?: InputMaybe<Array<MediaType>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Gallery = {
  __typename?: 'Gallery';
  _count: GalleryCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GalleryCount = {
  __typename?: 'GalleryCount';
  media: Scalars['Int']['output'];
};

export type GalleryNullableScalarRelationFilter = {
  is?: InputMaybe<GalleryWhereInput>;
  isNot?: InputMaybe<GalleryWhereInput>;
};

export type GalleryWhereInput = {
  AND?: InputMaybe<Array<GalleryWhereInput>>;
  NOT?: InputMaybe<Array<GalleryWhereInput>>;
  OR?: InputMaybe<Array<GalleryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  media?: InputMaybe<MediaListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GeneralMsg = {
  __typename?: 'GeneralMsg';
  message: Scalars['String']['output'];
};

export type Inquiry = {
  __typename?: 'Inquiry';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  hospitalOrClinic?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status: InquiryStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum InquiryStatus {
  Archived = 'ARCHIVED',
  Read = 'READ',
  Replied = 'REPLIED',
  Unread = 'UNREAD'
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type MeQuery = {
  __typename?: 'MeQuery';
  isSignedIn: Scalars['Boolean']['output'];
  user: User;
};

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  article?: Maybe<Article>;
  articleId?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  gallery?: Maybe<Gallery>;
  galleryId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  publicId: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  type: MediaType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  uploader?: Maybe<User>;
  uploaderId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaListRelationFilter = {
  every?: InputMaybe<MediaWhereInput>;
  none?: InputMaybe<MediaWhereInput>;
  some?: InputMaybe<MediaWhereInput>;
};

export enum MediaType {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type MediaWhereInput = {
  AND?: InputMaybe<Array<MediaWhereInput>>;
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  OR?: InputMaybe<Array<MediaWhereInput>>;
  alt?: InputMaybe<StringNullableFilter>;
  article?: InputMaybe<ArticleNullableScalarRelationFilter>;
  articleId?: InputMaybe<StringNullableFilter>;
  caption?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  filename?: InputMaybe<StringFilter>;
  gallery?: InputMaybe<GalleryNullableScalarRelationFilter>;
  galleryId?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductNullableScalarRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  publicId?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumMediaTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  uploader?: InputMaybe<UserNullableScalarRelationFilter>;
  uploaderId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type Meta = {
  __typename?: 'Meta';
  currentPage: Scalars['Float']['output'];
  lastPage: Scalars['Float']['output'];
  next?: Maybe<Scalars['Float']['output']>;
  perPage: Scalars['Float']['output'];
  prev?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: GeneralMsg;
  createArticle: AdminArticleEntity;
  createCategory: Category;
  createCompanyProfile: CompanyProfile;
  createGallery: AdminGalleryEntity;
  createInquiry: PublicInquiryResponseEntity;
  createProduct: Product;
  createTeamMember: TeamMember;
  createTestimony: Testimony;
  createUser: GeneralMsg;
  hardDeleteArticle: AdminArticleEntity;
  logOut: GeneralMsg;
  refreshToken: SignResponse;
  removeArticle: AdminArticleEntity;
  removeCategory: Category;
  removeGallery: AdminGalleryEntity;
  removeInquiry: Inquiry;
  removeProduct: Product;
  removeTeamMember: TeamMember;
  removeTestimony: Testimony;
  restoreArticle: AdminArticleEntity;
  signin: SignResponse;
  signup: SignResponse;
  updateArticle: AdminArticleEntity;
  updateCategory: Category;
  updateCompanyProfile: CompanyProfile;
  updateGallery: AdminGalleryEntity;
  updateInquiry: Inquiry;
  updateMyProfile: Profile;
  updateProduct: Product;
  updateProfile: Profile;
  updateTeamMember: TeamMember;
  updateTestimony: Testimony;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateArticleArgs = {
  payload: CreateArticleDto;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateCompanyProfileArgs = {
  createCompanyProfileInput: CreateCompanyProfileInput;
};


export type MutationCreateGalleryArgs = {
  payload: CreateGalleryDto;
};


export type MutationCreateInquiryArgs = {
  createInquiryInput: CreateInquiryInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateTeamMemberArgs = {
  createTeamMemberInput: CreateTeamMemberInput;
};


export type MutationCreateTestimonyArgs = {
  payload: CreateTestimonyInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserProfileInput;
};


export type MutationHardDeleteArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveGalleryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveInquiryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTeamMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTestimonyArgs = {
  id: Scalars['String']['input'];
};


export type MutationRestoreArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationSigninArgs = {
  signInInput: SignInInput;
};


export type MutationSignupArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateArticleArgs = {
  id: Scalars['String']['input'];
  payload: UpdateArticleDto;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateCompanyProfileArgs = {
  updateCompanyProfileInput: UpdateCompanyProfileInput;
};


export type MutationUpdateGalleryArgs = {
  id: Scalars['String']['input'];
  payload: UpdateGalleryDto;
};


export type MutationUpdateInquiryArgs = {
  id: Scalars['String']['input'];
  updateInquiryInput: UpdateInquiryInput;
};


export type MutationUpdateMyProfileArgs = {
  input: UpdateMyProfileInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateTeamMemberArgs = {
  id: Scalars['String']['input'];
  updateTeamMemberInput: UpdateTeamMemberInput;
};


export type MutationUpdateTestimonyArgs = {
  id: Scalars['String']['input'];
  payload: UpdateTestimonyInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumArticleStatusFilter = {
  equals?: InputMaybe<ArticleStatus>;
  in?: InputMaybe<Array<ArticleStatus>>;
  not?: InputMaybe<NestedEnumArticleStatusFilter>;
  notIn?: InputMaybe<Array<ArticleStatus>>;
};

export type NestedEnumMediaTypeFilter = {
  equals?: InputMaybe<MediaType>;
  in?: InputMaybe<Array<MediaType>>;
  not?: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn?: InputMaybe<Array<MediaType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  media?: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  media: Scalars['Int']['output'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductNullableScalarRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductPublicWhereInput = {
  isActive?: InputMaybe<BoolFilter>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryNullableScalarRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  media?: InputMaybe<MediaListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  tagline?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  dateHired?: Maybe<Scalars['DateTime']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  employeeID?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ProfileNullableScalarRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  address?: InputMaybe<JsonNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  birthDate?: InputMaybe<DateTimeNullableFilter>;
  contact?: InputMaybe<JsonNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  dateHired?: InputMaybe<DateTimeNullableFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  employeeID?: InputMaybe<IntNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type PublicArticleEntity = {
  __typename?: 'PublicArticleEntity';
  author?: Maybe<PublicAuthorEntity>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ArticleStatus;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PublicArticleWhereInput = {
  categoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
};

export type PublicAuthorEntity = {
  __typename?: 'PublicAuthorEntity';
  profile?: Maybe<PublicProfileEntity>;
  username: Scalars['String']['output'];
};

export type PublicCategoryEntity = {
  __typename?: 'PublicCategoryEntity';
  articleCount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PublicCompanyProfileEntity = {
  __typename?: 'PublicCompanyProfileEntity';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PublicGalleryDetailEntity = {
  __typename?: 'PublicGalleryDetailEntity';
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  title: Scalars['String']['output'];
};

export type PublicGalleryEntity = {
  __typename?: 'PublicGalleryEntity';
  coverImageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type PublicInquiryResponseEntity = {
  __typename?: 'PublicInquiryResponseEntity';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type PublicProductEntity = {
  __typename?: 'PublicProductEntity';
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
};

export type PublicProfileEntity = {
  __typename?: 'PublicProfileEntity';
  designation?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type PublicTeamMemberEntity = {
  __typename?: 'PublicTeamMemberEntity';
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  position: Scalars['String']['output'];
  socials?: Maybe<Scalars['JSON']['output']>;
};

export type PublicTestimonyEntity = {
  __typename?: 'PublicTestimonyEntity';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  position?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminArticle?: Maybe<AdminArticleEntity>;
  adminArticles: Array<AdminArticleEntity>;
  adminGalleries: Array<AdminGalleryEntity>;
  adminGallery?: Maybe<AdminGalleryEntity>;
  adminProduct?: Maybe<AdminProductEntity>;
  adminProducts: Array<AdminProductEntity>;
  adminTestimonies: Array<Testimony>;
  adminTestimony?: Maybe<Testimony>;
  article?: Maybe<PublicArticleEntity>;
  articles: Array<PublicArticleEntity>;
  categories: Array<PublicCategoryEntity>;
  categoriesAdmin: Array<Category>;
  category?: Maybe<PublicCategoryEntity>;
  categoryBySlug?: Maybe<PublicCategoryEntity>;
  companyProfile?: Maybe<PublicCompanyProfileEntity>;
  findAllUsers: UserList;
  findOneUser: Profile;
  galleries: Array<PublicGalleryEntity>;
  gallery?: Maybe<PublicGalleryDetailEntity>;
  inquiries: Array<Inquiry>;
  inquiry: Inquiry;
  meQuery: MeQuery;
  product?: Maybe<PublicProductEntity>;
  products: Array<PublicProductEntity>;
  teamMember: TeamMember;
  teamMembers: Array<PublicTeamMemberEntity>;
  testimonies: Array<PublicTestimonyEntity>;
};


export type QueryAdminArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminArticlesArgs = {
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryAdminGalleryArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminTestimonyArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  where?: InputMaybe<PublicArticleWhereInput>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindAllUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindOneUserArgs = {
  profileId: Scalars['String']['input'];
};


export type QueryGalleryArgs = {
  id: Scalars['String']['input'];
};


export type QueryInquiryArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  where?: InputMaybe<ProductPublicWhereInput>;
};


export type QueryTeamMemberArgs = {
  id: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignInInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String']['output'];
  isSignedIn: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type SignUpInput = {
  designation?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  position: Scalars['String']['output'];
  socials?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Testimony = {
  __typename?: 'Testimony';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  position?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UpdateArticleDto = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ArticleStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateGalleryDto = {
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInquiryInput = {
  status?: InputMaybe<InquiryStatus>;
};

export type UpdateMyProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamMemberInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateTestimonyInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  articles?: Maybe<Array<Article>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  /** @Validator.@IsEmail() */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isApproved: Scalars['Boolean']['output'];
  media?: Maybe<Array<Media>>;
  profile?: Maybe<Profile>;
  role?: Maybe<Array<Role>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  articles: Scalars['Int']['output'];
  media: Scalars['Int']['output'];
};

export type UserList = {
  __typename?: 'UserList';
  data: Array<Profile>;
  meta?: Maybe<Meta>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  articles?: InputMaybe<ArticleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isApproved?: InputMaybe<BoolFilter>;
  media?: InputMaybe<MediaListRelationFilter>;
  profile?: InputMaybe<ProfileNullableScalarRelationFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringFilter>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description?: Maybe<Scalars['String']['output']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  specifiedByURL?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
  isOneOf?: Maybe<Scalars['Boolean']['output']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isRepeatable: Scalars['Boolean']['output'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

export type CreateInquiryMutationVariables = Exact<{
  createInquiryInput: CreateInquiryInput;
}>;


export type CreateInquiryMutation = { __typename?: 'Mutation', createInquiry: { __typename?: 'PublicInquiryResponseEntity', success: boolean } };

export type TestConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type TestConnectionQuery = { __typename?: 'Query', __schema: { __typename?: '__Schema', types: Array<{ __typename?: '__Type', name?: string | null }> } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'PublicProductEntity', id: string, name: string, tagline?: string | null, slug: string, media?: Array<{ __typename?: 'Media', url: string }> | null }> };

export type ProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'PublicProductEntity', id: string, name: string, tagline?: string | null, description?: string | null, slug: string, media?: Array<{ __typename?: 'Media', url: string }> | null } | null };

export type GetTeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamMembersQuery = { __typename?: 'Query', teamMembers: Array<{ __typename?: 'PublicTeamMemberEntity', id: string, name: string, position: string, image?: string | null, socials?: any | null }> };

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'PublicArticleEntity', id: string, title?: string | null, slug?: string | null, excerpt?: string | null, publishedAt?: any | null, category?: { __typename?: 'Category', name: string } | null, media?: Array<{ __typename?: 'Media', url: string }> | null }>, categories: Array<{ __typename?: 'PublicCategoryEntity', id: string, name: string, slug: string }> };

export type ArticleQueryVariables = Exact<{
  articleId: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'PublicArticleEntity', id: string, title?: string | null, slug?: string | null, excerpt?: string | null, ogImage?: string | null, createdAt: any, content?: string | null, category?: { __typename?: 'Category', name: string } | null, media?: Array<{ __typename?: 'Media', url: string }> | null, author?: { __typename?: 'PublicAuthorEntity', username: string } | null } | null };

export type GetTestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestimonialsQuery = { __typename?: 'Query', testimonies: Array<{ __typename?: 'PublicTestimonyEntity', id: string, name: string, position?: string | null, avatarUrl?: string | null, company?: string | null, content: string }> };

export type CompanyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyProfileQuery = { __typename?: 'Query', companyProfile?: { __typename?: 'PublicCompanyProfileEntity', id: string, address?: string | null, phone?: string | null, email?: string | null, socials?: any | null } | null };

export type GetGalleriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGalleriesQuery = { __typename?: 'Query', galleries: Array<{ __typename?: 'PublicGalleryEntity', id: string, title: string, coverImageUrl?: string | null }> };


export const CreateInquiryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInquiry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createInquiryInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateInquiryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInquiry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createInquiryInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createInquiryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateInquiryMutation, CreateInquiryMutationVariables>;
export const TestConnectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TestConnectionQuery, TestConnectionQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
export const GetTeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"socials"}}]}}]}}]} as unknown as DocumentNode<GetTeamMembersQuery, GetTeamMembersQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const GetTestimonialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testimonies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTestimonialsQuery, GetTestimonialsQueryVariables>;
export const CompanyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompanyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"socials"}}]}}]}}]} as unknown as DocumentNode<CompanyProfileQuery, CompanyProfileQueryVariables>;
export const GetGalleriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGalleries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImageUrl"}}]}}]}}]} as unknown as DocumentNode<GetGalleriesQuery, GetGalleriesQueryVariables>;