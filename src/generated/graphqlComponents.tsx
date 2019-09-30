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

export type Cuisine = {
   __typename?: 'Cuisine',
  id: Scalars['ID'],
  /** Food Cuisine Name */
  name: Scalars['String'],
  foods: Array<Food>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Food = {
   __typename?: 'Food',
  id: Scalars['ID'],
  /** Name of associated food item. */
  name: Scalars['String'],
  description: Scalars['String'],
  /** Relationship between a single food and its cuisine. */
  cuisine: Cuisine,
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
  allCuisines: Array<Cuisine>,
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
export type AllFoodsWithCuisinesQueryVariables = {};


export type AllFoodsWithCuisinesQuery = (
  { __typename?: 'Query' }
  & { allFoods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name' | 'description'>
    & { cuisine: (
      { __typename?: 'Cuisine' }
      & Pick<Cuisine, 'id' | 'name'>
    ) }
  )> }
);

export type AllUsersQueryVariables = {};


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'fullName' | 'age'>
  )> }
);

export const AllFoodsWithCuisinesDocument = gql`
    query allFoodsWithCuisines {
  allFoods {
    id
    name
    description
    cuisine {
      id
      name
    }
  }
}
    `;
export type AllFoodsWithCuisinesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>, 'query'>;

    export const AllFoodsWithCuisinesComponent = (props: AllFoodsWithCuisinesComponentProps) => (
      <ApolloReactComponents.Query<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables> query={AllFoodsWithCuisinesDocument} {...props} />
    );
    
export type AllFoodsWithCuisinesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables> & TChildProps;
export function withAllFoodsWithCuisines<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllFoodsWithCuisinesQuery,
  AllFoodsWithCuisinesQueryVariables,
  AllFoodsWithCuisinesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables, AllFoodsWithCuisinesProps<TChildProps>>(AllFoodsWithCuisinesDocument, {
      alias: 'allFoodsWithCuisines',
      ...operationOptions
    });
};

    export function useAllFoodsWithCuisinesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>) {
      return ApolloReactHooks.useQuery<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>(AllFoodsWithCuisinesDocument, baseOptions);
    }
      export function useAllFoodsWithCuisinesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>(AllFoodsWithCuisinesDocument, baseOptions);
      }
      
export type AllFoodsWithCuisinesQueryHookResult = ReturnType<typeof useAllFoodsWithCuisinesQuery>;
export type AllFoodsWithCuisinesQueryResult = ApolloReactCommon.QueryResult<AllFoodsWithCuisinesQuery, AllFoodsWithCuisinesQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    id
    firstName
    lastName
    fullName
    age
  }
}
    `;
export type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;

    export const AllUsersComponent = (props: AllUsersComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQuery, AllUsersQueryVariables> query={AllUsersDocument} {...props} />
    );
    
export type AllUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllUsersQuery, AllUsersQueryVariables> & TChildProps;
export function withAllUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersQuery,
  AllUsersQueryVariables,
  AllUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersQuery, AllUsersQueryVariables, AllUsersProps<TChildProps>>(AllUsersDocument, {
      alias: 'allUsers',
      ...operationOptions
    });
};

    export function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
      return ApolloReactHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
    }
      export function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
      
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersQueryResult = ApolloReactCommon.QueryResult<AllUsersQuery, AllUsersQueryVariables>;