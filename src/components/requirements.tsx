import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface IRequirement {
  name: string;
  description?: string;
  isRequired: boolean;
}

interface IGatherRequirementsForm {
  businessName: string;
  websitePurpose: string;
  targetAudience: string;
  featuresNeeded: string[];
  paymentMethods: string[];
  designPreferences: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const addRequirement = () => {
    setRequirements([...requirements, { name: `Requirement ${requirements.length + 1}`, isRequired: false }]);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-lg font-semibold">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name:</label>
          <input type="text" id="businessName" {...register("businessName", { required: true })} className="mt-1 p-2 w-full border rounded-md" />
          {errors.businessName && <p className="text-red-500 text-sm mt-1">Business name is required</p>}
        </div>
        
        {/* Other form fields would go here */}

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Submit</button>
      </form>

      {requirements.map((requirement, index) => (
        <div key={index} className="mt-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">{requirement.name}</label>
          <input type="text" id={`requirement-${index}`} {...register(`featuresNeeded.${index}`)} className="mt-1 p-2 w-full border rounded-md" />
        </div>
      ))}

      <button onClick={addRequirement} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">Add Requirement</button>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface IRequirement {
  name: string;
  description?: string;
  isRequired: boolean;
}

interface IGatherRequirementsForm {
  businessName: string;
  websitePurpose: string;
  targetAudience: string;
  featuresNeeded: string[];
  paymentMethods: string[];
  designPreferences: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const addRequirement = () => {
    setRequirements([...requirements, { name: `Requirement ${requirements.length + 1}`, isRequired: false }]);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-lg font-semibold">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name:</label>
          <input type="text" id="businessName" {...register("businessName", { required: true })} className="mt-1 p-2 w-full border rounded-md" />
          {errors.businessName && <p className="text-red-500 text-sm mt-1">Business name is required</p>}
        </div>
        
        {/* Other form fields would go here */}

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Submit</button>
      </form>

      {requirements.map((requirement, index) => (
        <div key={index} className="mt-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">{requirement.name}</label>
          <input type="text" id={`requirement-${index}`} {...register(`featuresNeeded.${index}`)} className="mt-1 p-2 w-full border rounded-md" />
        </div>
      ))}

      <button onClick={addRequirement} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">Add Requirement</button>
    </div>
  );
};

export default GatherRequirements;