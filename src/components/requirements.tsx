import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormData {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, formState } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    // Fetch existing requirements if the component is mounted in an edit context
    if (router.query.id) {
      axios.get(`/api/requirements/${router.query.id}`).then(response => {
        setRequirements(response.data);
      });
    }
  }, [router]);

  const onSubmit: SubmitHandler<FormData> = data => {
    // Handle form submission, e.g., send to API
    axios.post('/api/requirements', data).then(() => {
      router.push('/');
    }).catch(error => {
      console.error('Error submitting requirements:', error);
    });
  };

  const addRequirement = () => {
    setRequirements([...requirements, { name: '', description: '', isEssential: false }]);
  };

  const removeRequirement = (index: number) => {
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    setRequirements(newRequirements);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {requirements.map((requirement, index) => (
        <div key={requirement.id} className="mb-4">
          <label htmlFor={`name-${index}`} className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id={`name-${index}`}
            {...register(`requirements.${index}.name`)}
            defaultValue={requirement.name}
            type="text"
            placeholder="Requirement name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label htmlFor={`description-${index}`} className="block mt-2 text-sm font-medium text-gray-700">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            defaultValue={requirement.description}
            rows={3}
            placeholder="Requirement description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="flex items-center mt-2">
            <input
              id={`isEssential-${index}`}
              {...register(`requirements.${index}.isEssential`)}
              type="checkbox"
              defaultChecked={requirement.isEssential}
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md shadow-sm"
            />
            <label htmlFor={`isEssential-${index}`} className="ml-2 block text-sm font-medium text-gray-700">Is Essential</label>
          </div>
        </div>
      ))}
      <button type="submit" disabled={formState.isSubmitting} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save Requirements
      </button>
      <button type="button" onClick={addRequirement} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Add Requirement
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id?: string;
  name: string;
  description: string;
  isEssential: boolean;
}

interface FormData {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const { register, handleSubmit, formState } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    // Fetch existing requirements if the component is mounted in an edit context
    if (router.query.id) {
      axios.get(`/api/requirements/${router.query.id}`).then(response => {
        setRequirements(response.data);
      });
    }
  }, [router]);

  const onSubmit: SubmitHandler<FormData> = data => {
    // Handle form submission, e.g., send to API
    axios.post('/api/requirements', data).then(() => {
      router.push('/');
    }).catch(error => {
      console.error('Error submitting requirements:', error);
    });
  };

  const addRequirement = () => {
    setRequirements([...requirements, { name: '', description: '', isEssential: false }]);
  };

  const removeRequirement = (index: number) => {
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    setRequirements(newRequirements);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {requirements.map((requirement, index) => (
        <div key={requirement.id} className="mb-4">
          <label htmlFor={`name-${index}`} className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id={`name-${index}`}
            {...register(`requirements.${index}.name`)}
            defaultValue={requirement.name}
            type="text"
            placeholder="Requirement name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label htmlFor={`description-${index}`} className="block mt-2 text-sm font-medium text-gray-700">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            defaultValue={requirement.description}
            rows={3}
            placeholder="Requirement description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="flex items-center mt-2">
            <input
              id={`isEssential-${index}`}
              {...register(`requirements.${index}.isEssential`)}
              type="checkbox"
              defaultChecked={requirement.isEssential}
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md shadow-sm"
            />
            <label htmlFor={`isEssential-${index}`} className="ml-2 block text-sm font-medium text-gray-700">Is Essential</label>
          </div>
        </div>
      ))}
      <button type="submit" disabled={formState.isSubmitting} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save Requirements
      </button>
      <button type="button" onClick={addRequirement} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Add Requirement
      </button>
    </form>
  );
};

export default GatherRequirements;