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
  /** Finds an item of food, and updates the food with an associated cuisine. */
  updateFoodWithCuisine: Food,
  /** Updates the food with the associated user in the database. */
  updateFoodWithUsers: Food,
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


export type MutationUpdateFoodWithCuisineArgs = {
  updateFoodCuisineData: UpdateFoodCuisineInput
};


export type MutationUpdateFoodWithUsersArgs = {
  foodUserData: UpdateFoodUserInput
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

export type UpdateFoodCuisineInput = {
  foodId: Scalars['String'],
  cuisineId: Scalars['String'],
};

export type UpdateFoodUserInput = {
  foodId: Scalars['String'],
  userIds: Array<Scalars['String']>,
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
export type AllCuisinesQueryVariables = {};


export type AllCuisinesQuery = (
  { __typename?: 'Query' }
  & { allCuisines: Array<(
    { __typename?: 'Cuisine' }
    & Pick<Cuisine, 'id' | 'name'>
  )> }
);

export type CreateCuisineMutationVariables = {
  name: Scalars['String']
};


export type CreateCuisineMutation = (
  { __typename?: 'Mutation' }
  & { createCuisine: (
    { __typename?: 'Cuisine' }
    & Pick<Cuisine, 'id' | 'name'>
  ) }
);

export type DeleteCuisineMutationVariables = {
  id: Scalars['String']
};


export type DeleteCuisineMutation = (
  { __typename?: 'Mutation' }
  & { deleteCuisine: Maybe<(
    { __typename?: 'Cuisine' }
    & Pick<Cuisine, 'id' | 'name'>
    & { foods: Maybe<Array<(
      { __typename?: 'Food' }
      & Pick<Food, 'name'>
    )>> }
  )> }
);

export type UpdateFoodWithCuisineMutationVariables = {
  cuisineId: Scalars['String'],
  foodId: Scalars['String']
};


export type UpdateFoodWithCuisineMutation = (
  { __typename?: 'Mutation' }
  & { updateFoodWithCuisine: (
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name'>
  ) }
);

export type AllFoodsQueryVariables = {};


export type AllFoodsQuery = (
  { __typename?: 'Query' }
  & { allFoods: Array<(
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name' | 'description'>
  )> }
);

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

export type UpdateFoodsWithUsersMutationVariables = {
  foodId: Scalars['String'],
  userIds: Array<Scalars['String']>
};


export type UpdateFoodsWithUsersMutation = (
  { __typename?: 'Mutation' }
  & { updateFoodWithUsers: (
    { __typename?: 'Food' }
    & Pick<Food, 'id' | 'name'>
    & { users: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    )>> }
  ) }
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

export type AllUsersWithFoodsQueryVariables = {};


export type AllUsersWithFoodsQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'fullName'>
    & { foods: Maybe<Array<(
      { __typename?: 'Food' }
      & Pick<Food, 'id' | 'name'>
    )>> }
  )> }
);

export type FindUserQueryVariables = {
  userId: Scalars['String']
};


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { findUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'fullName' | 'emailAddress' | 'age' | 'birthday'>
  ) }
);

export const AllCuisinesDocument = gql`
    query allCuisines {
  allCuisines {
    id
    name
  }
}
    `;
export type AllCuisinesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCuisinesQuery, AllCuisinesQueryVariables>, 'query'>;

    export const AllCuisinesComponent = (props: AllCuisinesComponentProps) => (
      <ApolloReactComponents.Query<AllCuisinesQuery, AllCuisinesQueryVariables> query={AllCuisinesDocument} {...props} />
    );
    
export type AllCuisinesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCuisinesQuery, AllCuisinesQueryVariables> & TChildProps;
export function withAllCuisines<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCuisinesQuery,
  AllCuisinesQueryVariables,
  AllCuisinesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCuisinesQuery, AllCuisinesQueryVariables, AllCuisinesProps<TChildProps>>(AllCuisinesDocument, {
      alias: 'allCuisines',
      ...operationOptions
    });
};

    export function useAllCuisinesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCuisinesQuery, AllCuisinesQueryVariables>) {
      return ApolloReactHooks.useQuery<AllCuisinesQuery, AllCuisinesQueryVariables>(AllCuisinesDocument, baseOptions);
    }
      export function useAllCuisinesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCuisinesQuery, AllCuisinesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllCuisinesQuery, AllCuisinesQueryVariables>(AllCuisinesDocument, baseOptions);
      }
      
export type AllCuisinesQueryHookResult = ReturnType<typeof useAllCuisinesQuery>;
export type AllCuisinesQueryResult = ApolloReactCommon.QueryResult<AllCuisinesQuery, AllCuisinesQueryVariables>;
export const CreateCuisineDocument = gql`
    mutation createCuisine($name: String!) {
  createCuisine(cuisineData: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateCuisineMutationFn = ApolloReactCommon.MutationFunction<CreateCuisineMutation, CreateCuisineMutationVariables>;
export type CreateCuisineComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCuisineMutation, CreateCuisineMutationVariables>, 'mutation'>;

    export const CreateCuisineComponent = (props: CreateCuisineComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCuisineMutation, CreateCuisineMutationVariables> mutation={CreateCuisineDocument} {...props} />
    );
    
export type CreateCuisineProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCuisineMutation, CreateCuisineMutationVariables> & TChildProps;
export function withCreateCuisine<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCuisineMutation,
  CreateCuisineMutationVariables,
  CreateCuisineProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCuisineMutation, CreateCuisineMutationVariables, CreateCuisineProps<TChildProps>>(CreateCuisineDocument, {
      alias: 'createCuisine',
      ...operationOptions
    });
};

    export function useCreateCuisineMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCuisineMutation, CreateCuisineMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateCuisineMutation, CreateCuisineMutationVariables>(CreateCuisineDocument, baseOptions);
    }
export type CreateCuisineMutationHookResult = ReturnType<typeof useCreateCuisineMutation>;
export type CreateCuisineMutationResult = ApolloReactCommon.MutationResult<CreateCuisineMutation>;
export type CreateCuisineMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCuisineMutation, CreateCuisineMutationVariables>;
export const DeleteCuisineDocument = gql`
    mutation deleteCuisine($id: String!) {
  deleteCuisine(cuisineId: $id) {
    id
    name
    foods {
      name
    }
  }
}
    `;
export type DeleteCuisineMutationFn = ApolloReactCommon.MutationFunction<DeleteCuisineMutation, DeleteCuisineMutationVariables>;
export type DeleteCuisineComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCuisineMutation, DeleteCuisineMutationVariables>, 'mutation'>;

    export const DeleteCuisineComponent = (props: DeleteCuisineComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCuisineMutation, DeleteCuisineMutationVariables> mutation={DeleteCuisineDocument} {...props} />
    );
    
export type DeleteCuisineProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteCuisineMutation, DeleteCuisineMutationVariables> & TChildProps;
export function withDeleteCuisine<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCuisineMutation,
  DeleteCuisineMutationVariables,
  DeleteCuisineProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCuisineMutation, DeleteCuisineMutationVariables, DeleteCuisineProps<TChildProps>>(DeleteCuisineDocument, {
      alias: 'deleteCuisine',
      ...operationOptions
    });
};

    export function useDeleteCuisineMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCuisineMutation, DeleteCuisineMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteCuisineMutation, DeleteCuisineMutationVariables>(DeleteCuisineDocument, baseOptions);
    }
export type DeleteCuisineMutationHookResult = ReturnType<typeof useDeleteCuisineMutation>;
export type DeleteCuisineMutationResult = ApolloReactCommon.MutationResult<DeleteCuisineMutation>;
export type DeleteCuisineMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCuisineMutation, DeleteCuisineMutationVariables>;
export const UpdateFoodWithCuisineDocument = gql`
    mutation updateFoodWithCuisine($cuisineId: String!, $foodId: String!) {
  updateFoodWithCuisine(updateFoodCuisineData: {cuisineId: $cuisineId, foodId: $foodId}) {
    id
    name
  }
}
    `;
export type UpdateFoodWithCuisineMutationFn = ApolloReactCommon.MutationFunction<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables>;
export type UpdateFoodWithCuisineComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables>, 'mutation'>;

    export const UpdateFoodWithCuisineComponent = (props: UpdateFoodWithCuisineComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables> mutation={UpdateFoodWithCuisineDocument} {...props} />
    );
    
export type UpdateFoodWithCuisineProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables> & TChildProps;
export function withUpdateFoodWithCuisine<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateFoodWithCuisineMutation,
  UpdateFoodWithCuisineMutationVariables,
  UpdateFoodWithCuisineProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables, UpdateFoodWithCuisineProps<TChildProps>>(UpdateFoodWithCuisineDocument, {
      alias: 'updateFoodWithCuisine',
      ...operationOptions
    });
};

    export function useUpdateFoodWithCuisineMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables>(UpdateFoodWithCuisineDocument, baseOptions);
    }
export type UpdateFoodWithCuisineMutationHookResult = ReturnType<typeof useUpdateFoodWithCuisineMutation>;
export type UpdateFoodWithCuisineMutationResult = ApolloReactCommon.MutationResult<UpdateFoodWithCuisineMutation>;
export type UpdateFoodWithCuisineMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateFoodWithCuisineMutation, UpdateFoodWithCuisineMutationVariables>;
export const AllFoodsDocument = gql`
    query allFoods {
  allFoods {
    id
    name
    description
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
export const UpdateFoodsWithUsersDocument = gql`
    mutation updateFoodsWithUsers($foodId: String!, $userIds: [String!]!) {
  updateFoodWithUsers(foodUserData: {foodId: $foodId, userIds: $userIds}) {
    id
    name
    users {
      id
      fullName
    }
  }
}
    `;
export type UpdateFoodsWithUsersMutationFn = ApolloReactCommon.MutationFunction<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables>;
export type UpdateFoodsWithUsersComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables>, 'mutation'>;

    export const UpdateFoodsWithUsersComponent = (props: UpdateFoodsWithUsersComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables> mutation={UpdateFoodsWithUsersDocument} {...props} />
    );
    
export type UpdateFoodsWithUsersProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables> & TChildProps;
export function withUpdateFoodsWithUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateFoodsWithUsersMutation,
  UpdateFoodsWithUsersMutationVariables,
  UpdateFoodsWithUsersProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables, UpdateFoodsWithUsersProps<TChildProps>>(UpdateFoodsWithUsersDocument, {
      alias: 'updateFoodsWithUsers',
      ...operationOptions
    });
};

    export function useUpdateFoodsWithUsersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables>(UpdateFoodsWithUsersDocument, baseOptions);
    }
export type UpdateFoodsWithUsersMutationHookResult = ReturnType<typeof useUpdateFoodsWithUsersMutation>;
export type UpdateFoodsWithUsersMutationResult = ApolloReactCommon.MutationResult<UpdateFoodsWithUsersMutation>;
export type UpdateFoodsWithUsersMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateFoodsWithUsersMutation, UpdateFoodsWithUsersMutationVariables>;
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
export const AllUsersWithFoodsDocument = gql`
    query allUsersWithFoods {
  allUsers {
    id
    fullName
    foods {
      id
      name
    }
  }
}
    `;
export type AllUsersWithFoodsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>, 'query'>;

    export const AllUsersWithFoodsComponent = (props: AllUsersWithFoodsComponentProps) => (
      <ApolloReactComponents.Query<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables> query={AllUsersWithFoodsDocument} {...props} />
    );
    
export type AllUsersWithFoodsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables> & TChildProps;
export function withAllUsersWithFoods<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersWithFoodsQuery,
  AllUsersWithFoodsQueryVariables,
  AllUsersWithFoodsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables, AllUsersWithFoodsProps<TChildProps>>(AllUsersWithFoodsDocument, {
      alias: 'allUsersWithFoods',
      ...operationOptions
    });
};

    export function useAllUsersWithFoodsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>) {
      return ApolloReactHooks.useQuery<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>(AllUsersWithFoodsDocument, baseOptions);
    }
      export function useAllUsersWithFoodsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>(AllUsersWithFoodsDocument, baseOptions);
      }
      
export type AllUsersWithFoodsQueryHookResult = ReturnType<typeof useAllUsersWithFoodsQuery>;
export type AllUsersWithFoodsQueryResult = ApolloReactCommon.QueryResult<AllUsersWithFoodsQuery, AllUsersWithFoodsQueryVariables>;
export const FindUserDocument = gql`
    query findUser($userId: String!) {
  findUser(userId: $userId) {
    id
    fullName
    emailAddress
    age
    birthday
  }
}
    `;
export type FindUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindUserQuery, FindUserQueryVariables>, 'query'> & ({ variables: FindUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindUserComponent = (props: FindUserComponentProps) => (
      <ApolloReactComponents.Query<FindUserQuery, FindUserQueryVariables> query={FindUserDocument} {...props} />
    );
    
export type FindUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<FindUserQuery, FindUserQueryVariables> & TChildProps;
export function withFindUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindUserQuery,
  FindUserQueryVariables,
  FindUserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FindUserQuery, FindUserQueryVariables, FindUserProps<TChildProps>>(FindUserDocument, {
      alias: 'findUser',
      ...operationOptions
    });
};

    export function useFindUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
      return ApolloReactHooks.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, baseOptions);
    }
      export function useFindUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, baseOptions);
      }
      
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserQueryResult = ApolloReactCommon.QueryResult<FindUserQuery, FindUserQueryVariables>;