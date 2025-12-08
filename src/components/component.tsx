import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpecifications();
  }, []);

  const fetchSpecifications = async () => {
    try {
      const response = await axios.get<BusinessSpec>('/api/specifications');
      setSpecification(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load business specification.');
      setLoading(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (requirementId: number, detail: string) => {
    const updatedRequirements = specification.requirements.map(req =>
      req.id === requirementId ? { ...req, details: detail } : req
    );
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleInputChange}
            rows={4}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {specification.requirements.map((requirement) => (
            <li key={requirement.id} className="py-4 flex items-center justify-between space-x-4">
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
                <p className="mt-1 text-sm text-gray-500 truncate w-full">
                  {requirement.details}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            loading && 'opacity-50 cursor-not-allowed'
          )}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpecifications();
  }, []);

  const fetchSpecifications = async () => {
    try {
      const response = await axios.get<BusinessSpec>('/api/specifications');
      setSpecification(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load business specification.');
      setLoading(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (requirementId: number, detail: string) => {
    const updatedRequirements = specification.requirements.map(req =>
      req.id === requirementId ? { ...req, details: detail } : req
    );
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleInputChange}
            rows={4}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {specification.requirements.map((requirement) => (
            <li key={requirement.id} className="py-4 flex items-center justify-between space-x-4">
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
                <p className="mt-1 text-sm text-gray-500 truncate w-full">
                  {requirement.details}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            loading && 'opacity-50 cursor-not-allowed'
          )}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;