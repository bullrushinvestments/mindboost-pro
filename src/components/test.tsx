import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations';
import { TestInput } from './types/TestTypes';

interface WriteTestsProps {
  onSubmit: (data: TestInput) => void;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestInput>();

  const [createTest] = useMutation(CREATE_TEST_MUTATION, {
    onCompleted: (data) => {
      onSubmit(data.createTest);
      reset();
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeFragment({
        id: `Test:${data.createTest.id}`,
        fragment: gql`
          fragment TestFields on Test {
            id
            title
            description
            createdAt
          }
        `,
        data,
      });
    },
  });

  const onSubmitForm: SubmitHandler<TestInput> = (data) => {
    setLoading(true);
    createTest({ variables: { input: data } });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          <p className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            {...register('description', { required: 'Description is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          <p className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>

        {loading ? (
          <button type="submit" disabled className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
            Loading...
          </button>
        ) : (
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Create Test
          </button>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg" role="alert">
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations';
import { TestInput } from './types/TestTypes';

interface WriteTestsProps {
  onSubmit: (data: TestInput) => void;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestInput>();

  const [createTest] = useMutation(CREATE_TEST_MUTATION, {
    onCompleted: (data) => {
      onSubmit(data.createTest);
      reset();
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeFragment({
        id: `Test:${data.createTest.id}`,
        fragment: gql`
          fragment TestFields on Test {
            id
            title
            description
            createdAt
          }
        `,
        data,
      });
    },
  });

  const onSubmitForm: SubmitHandler<TestInput> = (data) => {
    setLoading(true);
    createTest({ variables: { input: data } });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          <p className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            {...register('description', { required: 'Description is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          <p className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>

        {loading ? (
          <button type="submit" disabled className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
            Loading...
          </button>
        ) : (
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Create Test
          </button>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg" role="alert">
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default WriteTests;