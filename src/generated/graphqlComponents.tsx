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

export type CreateCuisineInput = {
  name: Scalars['String'],
};

export type CreateFoodInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  cuisineName: Scalars['String'],
  /** Uses the User ID from the database */
  userId?: Maybe<Scalars['String']>,
};

export type Cuisine = {
   __typename?: 'Cuisine',
  id: Scalars['ID'],
  /** Food Cuisine Name */
  name: Scalars['String'],
  foods?: Maybe<Array<Food>>,
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
  cuisine?: Maybe<Cuisine>,
  users?: Maybe<Array<User>>,
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
  createFood: Food,
  deleteFood: Food,
  createCuisine: Cuisine,
  deleteCuisine?: Maybe<Cuisine>,
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


export type MutationCreateFoodArgs = {
  foodData: CreateFoodInput
};


export type MutationDeleteFoodArgs = {
  foodId: Scalars['String']
};


export type MutationCreateCuisineArgs = {
  cuisineData: CreateCuisineInput
};


export type MutationDeleteCuisineArgs = {
  cuisineId: Scalars['String']
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
  foods?: Maybe<Array<Food>>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};
export type AllFoodsWithCuisinesQueryVariables = {};


export type AllFoodsWithCuisinesQuery = (
  { __typename?: 'Query' }
  & { allFoods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name' | 'description'>
    & { cuisine: Maybe<(
      { __typename?: 'Cuisine' }
      & Pick<Cuisine, 'id' | 'name'>
    )> }
  )> }
);

export type AllUsersQueryVariables = {};


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'fullName' | 'birthday' | 'formattedBirthday' | 'age' | 'emailAddress' | 'createdAt'>
  )> }
);

export type RegisterUserMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  emailAddress: Scalars['String'],
  birthday: Scalars['String'],
  password: Scalars['String']
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'jwt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName' | 'emailAddress' | 'birthday' | 'formattedBirthday'>
    ) }
  ) }
);

export type LoginUserMutationVariables = {
  emailAddress: Scalars['String'],
  password: Scalars['String']
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'jwt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName' | 'emailAddress' | 'formattedBirthday'>
    ) }
  ) }
);

export type DeleteAllUsersMutationVariables = {};


export type DeleteAllUsersMutation = (
  { __typename?: 'Mutation' }
  & { deleteAllUsers: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'fullName' | 'emailAddress' | 'formattedBirthday'>
  )>> }
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
    fullName
    birthday
    formattedBirthday
    age
    emailAddress
    createdAt
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
export const RegisterUserDocument = gql`
    mutation registerUser($firstName: String!, $lastName: String!, $emailAddress: String!, $birthday: String!, $password: String!) {
  registerUser(registerUserData: {firstName: $firstName, lastName: $lastName, emailAddress: $emailAddress, birthday: $birthday, password: $password}) {
    user {
      id
      fullName
      emailAddress
      birthday
      formattedBirthday
    }
    jwt
  }
}
    `;
export type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export type RegisterUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterUserMutation, RegisterUserMutationVariables>, 'mutation'>;

    export const RegisterUserComponent = (props: RegisterUserComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterUserMutation, RegisterUserMutationVariables> mutation={RegisterUserDocument} {...props} />
    );
    
export type RegisterUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RegisterUserMutation, RegisterUserMutationVariables> & TChildProps;
export function withRegisterUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterUserMutation,
  RegisterUserMutationVariables,
  RegisterUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterUserMutation, RegisterUserMutationVariables, RegisterUserProps<TChildProps>>(RegisterUserDocument, {
      alias: 'registerUser',
      ...operationOptions
    });
};

    export function useRegisterUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
      return ApolloReactHooks.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
    }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($emailAddress: String!, $password: String!) {
  loginUser(loginUserData: {emailAddress: $emailAddress, password: $password}) {
    user {
      id
      fullName
      emailAddress
      formattedBirthday
    }
    jwt
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginUserMutation, LoginUserMutationVariables>, 'mutation'>;

    export const LoginUserComponent = (props: LoginUserComponentProps) => (
      <ApolloReactComponents.Mutation<LoginUserMutation, LoginUserMutationVariables> mutation={LoginUserDocument} {...props} />
    );
    
export type LoginUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginUserMutation, LoginUserMutationVariables> & TChildProps;
export function withLoginUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

    export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
    }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const DeleteAllUsersDocument = gql`
    mutation deleteAllUsers {
  deleteAllUsers {
    id
    fullName
    emailAddress
    formattedBirthday
  }
}
    `;
export type DeleteAllUsersMutationFn = ApolloReactCommon.MutationFunction<DeleteAllUsersMutation, DeleteAllUsersMutationVariables>;
export type DeleteAllUsersComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAllUsersMutation, DeleteAllUsersMutationVariables>, 'mutation'>;

    export const DeleteAllUsersComponent = (props: DeleteAllUsersComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAllUsersMutation, DeleteAllUsersMutationVariables> mutation={DeleteAllUsersDocument} {...props} />
    );
    
export type DeleteAllUsersProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteAllUsersMutation, DeleteAllUsersMutationVariables> & TChildProps;
export function withDeleteAllUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAllUsersMutation,
  DeleteAllUsersMutationVariables,
  DeleteAllUsersProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAllUsersMutation, DeleteAllUsersMutationVariables, DeleteAllUsersProps<TChildProps>>(DeleteAllUsersDocument, {
      alias: 'deleteAllUsers',
      ...operationOptions
    });
};

    export function useDeleteAllUsersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAllUsersMutation, DeleteAllUsersMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteAllUsersMutation, DeleteAllUsersMutationVariables>(DeleteAllUsersDocument, baseOptions);
    }
export type DeleteAllUsersMutationHookResult = ReturnType<typeof useDeleteAllUsersMutation>;
export type DeleteAllUsersMutationResult = ApolloReactCommon.MutationResult<DeleteAllUsersMutation>;
export type DeleteAllUsersMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAllUsersMutation, DeleteAllUsersMutationVariables>;