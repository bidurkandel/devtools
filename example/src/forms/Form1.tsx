import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool, PLACEMENT } from '../../../src/devTool';

const Form1: React.FC<{ placement: PLACEMENT }> = ({ placement }) => {
  const { register, control, handleSubmit } = useForm<{
    firstName: string;
    lastName: string;
    custom: string;
    ha: {
      test: string;
    };
  }>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      ha: {
        test: '',
      },
    },
  });

  React.useEffect(() => {
    register('custom');
  }, [register]);

  return (
    <>
      <form onSubmit={handleSubmit((data) => data)}>
        <label>First Name</label>
        <input {...register('firstName', { required: true })} />
        <input {...register('ha.test', { required: true })} />

        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />

        <input style={{ fontWeight: 400 }} type="submit" />
      </form>

      <DevTool
        id="form1"
        control={control}
        placement={placement ?? 'top-right'}
      />
    </>
  );
};

export default Form1;
