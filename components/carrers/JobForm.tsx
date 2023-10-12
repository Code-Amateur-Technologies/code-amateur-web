'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IJobForm {
  showForm: boolean;
  setShowForm: (arg0: boolean) => void;
  jobSelected: string;
}

export default function JobForm(props: IJobForm) {
  console.log('Props:---', props);
  const router = useRouter();
  const [resumeFile, setResumeFile] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      position: props.jobSelected,
      resume: null,
      message: '',
    },
  });

  console.log('position Value:---', getValues('position'));

  const handleFile = (e: any) => {
    setResumeFile(e.target.files[0].name);
    console.log('Next File Value: ', getValues('resume'));
  };

  const onSubmit = async (data: any) => {
    console.log('Submit Success:----', data);
    const formData = new FormData();

    formData.append('access_key', 'e75fd085-f41d-449e-8f77-2de1ee9289a7');
    formData.append('from_name', 'CAT - Application for Job');
    formData.append('subject', 'Lead from CAT Careers Page');

    for (const key in data) {
      if (key === "resume") {
        // formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(() => router.push('/success'))
      .catch(() => {
        router.push('/error');
      })
      .finally(() => {
        props.setShowForm(false);
      });
  };
  console.log('Errors:------', errors);

  return (
    <div className='w-full lg:w-1/2'>
      <form
        name='job_apply_form'
        onSubmit={handleSubmit(onSubmit)}
        className='gap-4 form'
      >
        <div className='flex-between'>
          <p className='text-base text-white'>Fill out your information</p>
          <button onClick={() => props.setShowForm(false)} className='self-end'>
            <FontAwesomeIcon
              icon={faXmark}
              size='xl'
              style={{ color: '#fff' }}
            />
          </button>
        </div>

        <input
          type='checkbox'
          id='botcheck'
          name='botcheck'
          className='hidden'
          style={{ display: 'none' }}
        ></input>

        <div>
          <input
            {...register('name', { required: true })}
            type='text'
            id='name'
            placeholder='Enter your full name *'
            className='form-input'
          />
          {errors?.name && (
            <div className='form-error'>
              <p>please provide your full name</p>
            </div>
          )}
        </div>

        <input
          {...register('phone')}
          type='tel'
          id='phone'
          placeholder='Enter your phone number'
          className='form-input'
        />

        <div>
          <input
            {...register('email', { required: true })}
            type='email'
            id='email'
            placeholder='Enter your email address *'
            className='form-input'
          />
          {errors?.email && (
            <div className='form-error'>
              <p>please provide your email</p>
            </div>
          )}
        </div>

        <input
          readOnly
          {...register('position')}
          type='text'
          id='position'
          placeholder='Position'
          defaultValue={props.jobSelected}
          className='form-input pointer-events-none'
        />

        <div>
          <div className='flex items-center gap-5'>
            <label htmlFor='resume' className='file-upload-label'>
              <p>Upload your resume</p>
              <FontAwesomeIcon icon={faUpload} />
            </label>
            <p className='text-white'>
              {resumeFile ? resumeFile : 'No file chosen'}
            </p>
          </div>
          {errors?.resume && (
            <div className='form-error'>
              <p>your resume is required</p>
            </div>
          )}
        </div>

        <Controller
          control={control}
          name={'resume'}
          rules={{ required: 'Resume is required' }}
          render={({ field: { onChange } }) => {
            return (
              <input
                hidden
                type='file'
                accept='application/pdf, .doc'
                id='resume'
                onChange={(event: any) => {
                  onChange(event.target.files[0]);
                  handleFile(event);
                }}
              />
            );
          }}
        />

        <textarea
          {...register('message')}
          id='message'
          placeholder='Type your message'
          className='form-input'
        ></textarea>

        <button type='submit' className='dark-button'>
          send application
        </button>
      </form>
    </div>
  );
}
