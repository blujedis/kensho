
import useKensho from '@kensho/adapter-react';
import { ChangeEventHandler, useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/header';
import Input from '../components/input';
import Select from '../components/select';

export default function Web() {

  const [showPhone, setShowPhone] = useState(false);

  const initialValues = {
    name: undefined,
    email: 'jones@email.com',
    phone: '760.555.1212',
    message: 'This is just some content for a textarea',
    age: 35.12,
    language: 'React',
    cars: ['Mustang', 'Camaro']
    // state: 'CA'
    // other: 'Some custom value'
  };

  const { register, store, submit, reset, field, getValues, validate } = useKensho({
    initialValues,
    onValidate: (values, names, context) => {

      let errors = {} as any;

      if (values.age < 35)
        errors.age = ['Age must be 35 or older'];

      if (!values.email?.includes('@'))
        errors.email = ['Value is not a valid email address.'];

      return errors;
      // return null;
    },
    onTransform: (values) => {
      return values;
    },
    onError(errors) {
      console.log('errors:', errors);
    },
    onSubmit(values) {
      console.log('submitted:', values);
    },
  });

  const other = field({ name: 'other', value: 'Some new value in input' });

  const { dirty, initialized, submitted, valid, errors, fields } = store;

  const togglePhone = () => {
    // console.log(other.value);
    setShowPhone(!showPhone);
  };

  const getFormValues = () => {
    console.log(getValues());
  };

  const validateInput = async (name: string) => {
    const result = await field(name).validate();
    console.log(result);
  };

  const validateForm = async () => {
    const result = await validate();
    console.log(result);
  };

  const onVirutalChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = e.currentTarget.value;
    other.value = newVal;
  };

  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <Script>
          {
            `tailwind.config = {
                darkMode: 'class'
                theme: {
                  container: { center: true }
                  extend: {
                    colors: {}
                  }
                }
            }`
          }
        </Script>
      </Head>
      <Header />
      <div className="mx-auto container max-w-3xl">
        <div className="flex space-x-4 mb-4">
          <span className="text-gray-800">Initialized: {initialized + ''}</span><span>|</span>
          <span className="text-gray-800">Dirty: {dirty + ''}</span><span>|</span>
          <span className="text-gray-800">Submitted: {submitted + ''}</span><span>|</span>
          <span className="text-gray-800">Valid: {valid + ''}</span>
        </div>
        <form ref={register}>

          <div className="mb-4">
            <Input type="text" name="name" defaultValue="Milton Waddams" />
            <span className="py-2 block">{JSON.stringify(fields.name || {}, null, 2)}</span>
          </div>

          <div className="mb-4">
            <Select name="state" defaultValue="FL">
              <option value="">Please Select</option>
              <option value="FL">Florida</option>
              <option value="CA">California</option>
            </Select>
          </div>

          <div className="mb-4">
            <Select multiple name="cars" size={3} >
              <option value="">--None--</option>
              {/* <optgroup label="Domestic">
                <option value="Mustang">Mustang</option>
                <option value="Corvette">Corvette</option>
                <option value="Camaro">Camaro</option>
                <option value="Challenger">Challenger</option>
              </optgroup>
              <optgroup label="Foreign">
                <option value="Supra">Supra</option>
              </optgroup> */}
              <option value="Mustang">Mustang</option>
              <option value="Corvette">Corvette</option>
              <option value="Camaro">Camaro</option>
              <option value="Challenger">Challenger</option>
              <option value="Supra">Supra</option>
            </Select>
          </div>


          <div className="mb-4 flex flex-row space-x-4">
            <Input type="radio" label="React" name="language" defaultValue="React" />
            <Input type="radio" label="Python" name="language" defaultValue="Python" />
          </div>

          {/* <div className="mb-4">
            <Input type="text" name="email" />
            <span className="text-rose-500">{errors.email?.join('\n')}</span>
          </div> */}

          {!showPhone ? null :
            <div className="mb-4">
              <Input type="text" name="phone" />
            </div>
          }

          {/* <div className="mb-4">
            <Input type="text" name="age" />
            <span className="text-rose-500">{errors.age?.join('\n')}</span>
          </div>*/}

          <div className="mb-4">
            <Input type="text" name="message" unbound defaultValue={other?.value as any} onChange={onVirutalChange} />
            <span>{JSON.stringify(fields.other || {}, null, 2)}</span>
          </div>

          <div className="my-8">
            <hr />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4 content-evenly">

            <button type="button" className="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={() => submit()}>Submit</button>

            <button type="button" className="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={() => reset()}>Reset</button>

            <button type="button" className="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={togglePhone}>Show Phone</button>

            <button type="button" className=" py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={getFormValues}>Get Values</button>

            <button type="button" className="py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={validateForm}>Validate</button>


            <button type="button" className=" py-2 px-6 border border-gray-200 shadow-sm hover:bg-gray-100 pointer" onClick={() => validateInput('email')}>Validate Email</button>

          </div>


        </form>
      </div >
    </>
  );
}
