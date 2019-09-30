import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthenticatedUser = {
   __typename?: 'AuthenticatedUser',
  user: User,
  jwt: Scalars['String'],
};

export type Food = {
   __typename?: 'Food',
  id: Scalars['ID'],
  /** Name of associated food item. */
  name: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type LoginUserInput = {
  emailAddress: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  /** Registers and saves a user for later authentication use. */
  registerUser: AuthenticatedUser,
  /** Login User and return user with JWT. */
  loginUser: AuthenticatedUser,
  /** Finds a user by their emailAddress (unique) and removes all items tied to that user in the DB. */
  deleteUser?: Maybe<User>,
  /** Used to remove all users from the database. */
  deleteAllUsers?: Maybe<Array<User>>,
};


export type MutationRegisterUserArgs = {
  registerUserData: RegisterUserInput
};


export type MutationLoginUserArgs = {
  loginUserData: LoginUserInput
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  /** Test query that always returns a non-persisted string to ensure the GraphQL portion of the server is running. */
  test: Scalars['String'],
  /** Finds and returns a list of all users. Does not include password field! */
  allUsers: Array<User>,
  /** Finds one user by ID and returns the user. */
  findUser: User,
  allFoods: Array<Food>,
};


export type QueryFindUserArgs = {
  userId: Scalars['String']
};

export type RegisterUserInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  birthday: Scalars['String'],
  emailAddress: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName: Scalars['String'],
  /** Needs to be in ISOString Format! */
  birthday: Scalars['String'],
  /** Formatted with Moment for more legible birthday date, via field resolver. */
  formattedBirthday: Scalars['String'],
  /** The age of the user as an integer. */
  age: Scalars['Int'],
  emailAddress: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};
export type AllFoodsQueryVariables = {};


export type AllFoodsQuery = (
  { __typename?: 'Query' }
  & { allFoods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name'>
  )> }
);

export const AllFoodsDocument = gql`
    query allFoods {
  allFoods {
    id
    name
  }
}
    `;
export type AllFoodsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllFoodsQuery, AllFoodsQueryVariables>, 'query'>;

    export const AllFoodsComponent = (props: AllFoodsComponentProps) => (
      <ApolloReactComponents.Query<AllFoodsQuery, AllFoodsQueryVariables> query={AllFoodsDocument} {...props} />
    );
    
export type AllFoodsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllFoodsQuery, AllFoodsQueryVariables> & TChildProps;
export function withAllFoods<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllFoodsQuery,
  AllFoodsQueryVariables,
  AllFoodsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllFoodsQuery, AllFoodsQueryVariables, AllFoodsProps<TChildProps>>(AllFoodsDocument, {
      alias: 'allFoods',
      ...operationOptions
    });
};

    export function useAllFoodsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFoodsQuery, AllFoodsQueryVariables>) {
      return ApolloReactHooks.useQuery<AllFoodsQuery, AllFoodsQueryVariables>(AllFoodsDocument, baseOptions);
    }
      export function useAllFoodsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFoodsQuery, AllFoodsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllFoodsQuery, AllFoodsQueryVariables>(AllFoodsDocument, baseOptions);
      }
      
export type AllFoodsQueryHookResult = ReturnType<typeof useAllFoodsQuery>;
export type AllFoodsQueryResult = ApolloReactCommon.QueryResult<AllFoodsQuery, AllFoodsQueryVariables>;