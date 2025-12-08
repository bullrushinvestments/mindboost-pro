import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecificationForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // API call to create business specification
    setTimeout(() => {
      alert(JSON.stringify(data));
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          {...register('businessName', { required: true })}
          id="businessName"
          type="text"
          placeholder="Enter business name"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
        <input
          {...register('industryType', { required: true })}
          id="industryType"
          type="text"
          placeholder="Enter industry type"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.industryType && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfUsers" className="block text-sm font-medium text-gray-700">Number of Users</label>
        <input
          {...register('numberOfUsers', { required: true })}
          id="numberOfUsers"
          type="number"
          placeholder="Enter number of users"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.numberOfUsers && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
        <textarea
          {...register('featuresRequired', { required: true })}
          id="featuresRequired"
          rows={3}
          placeholder="Enter features required"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.featuresRequired && "border-red-300 focus:border-red-500")}
        />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        {loading ? 'Creating...' : 'Create Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecificationForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // API call to create business specification
    setTimeout(() => {
      alert(JSON.stringify(data));
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          {...register('businessName', { required: true })}
          id="businessName"
          type="text"
          placeholder="Enter business name"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
        <input
          {...register('industryType', { required: true })}
          id="industryType"
          type="text"
          placeholder="Enter industry type"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.industryType && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfUsers" className="block text-sm font-medium text-gray-700">Number of Users</label>
        <input
          {...register('numberOfUsers', { required: true })}
          id="numberOfUsers"
          type="number"
          placeholder="Enter number of users"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.numberOfUsers && "border-red-300 focus:border-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
        <textarea
          {...register('featuresRequired', { required: true })}
          id="featuresRequired"
          rows={3}
          placeholder="Enter features required"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.featuresRequired && "border-red-300 focus:border-red-500")}
        />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        {loading ? 'Creating...' : 'Create Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;