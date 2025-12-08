import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests
import { TestInput } from './types'; // Define the input type for the test

interface WriteTestFormProps {
  onSubmit: (testData: TestInput) => void;
}

const WriteTest: React.FC<WriteTestFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TestInput>();

  const [createTest] = useMutation(CREATE_TEST);

  const submitHandler: SubmitHandler<TestInput> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: { input: data } });
      onSubmit(data);
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col space-y-4">
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        inputRef={register({ required: 'Title is required' })}
        aria-label="Test Title"
        error={!!errors.title}
        helperText={errors.title?.message}
        className="w-full"
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        name="description"
        inputRef={register({ required: 'Description is required' })}
        aria-label="Test Description"
        error={!!errors.description}
        helperText={errors.description?.message}
        className="w-full"
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading} aria-label="Submit Test">
        {loading ? 'Submitting...' : 'Create Test'}
      </Button>
    </form>
  );
};

export default WriteTest;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests
import { TestInput } from './types'; // Define the input type for the test

interface WriteTestFormProps {
  onSubmit: (testData: TestInput) => void;
}

const WriteTest: React.FC<WriteTestFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TestInput>();

  const [createTest] = useMutation(CREATE_TEST);

  const submitHandler: SubmitHandler<TestInput> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: { input: data } });
      onSubmit(data);
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col space-y-4">
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        inputRef={register({ required: 'Title is required' })}
        aria-label="Test Title"
        error={!!errors.title}
        helperText={errors.title?.message}
        className="w-full"
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        name="description"
        inputRef={register({ required: 'Description is required' })}
        aria-label="Test Description"
        error={!!errors.description}
        helperText={errors.description?.message}
        className="w-full"
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading} aria-label="Submit Test">
        {loading ? 'Submitting...' : 'Create Test'}
      </Button>
    </form>
  );
};

export default WriteTest;