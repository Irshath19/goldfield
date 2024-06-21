import {useForm,Controller} from 'react-hook-form';
import IconInfo from '../Icons/iconsinfo';
import IconMail from '../Icons/mailIcon';
import IconPhone from '../Icons/phoneIcon';
import FormElement from '../Icons/FormElement';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
const ContactUs = () => {
    const{
        control,
        handleSubmit,
        formState:{errors},
    } = useForm({
        defaultValues:{
            name:'',
            email:'',
            message:'',
        },
    });
    const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.post('http://localhost:5174/contactus',contactData);
        setContactData(response.data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5174/contactus', data);

      if (response.status === 201) {
        console.log('Data submitted successfully');
        console.log(data);
        // const updatedResponse = await axios.get('http://localhost:5174/contactusget');
        // setContactData(updatedResponse.data);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  return (
    <div className='xl:container mx-auto mb-32' id="contact">
        <div className='flex justify center bg-brandPrimary' style={{ height: '250px' }}
>
                <h1 className='text-5xl text-center sm:text-5xl text-white uppercase pt-12 font-custom'>Contact Us</h1>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
           <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-6'>
           <div className='grid grid-cols-2 gap-x-6 mb-12 mx-auto'>
                <IconInfo icon={<IconMail/>} text="goldfieldjewelry@gmail.com"/>
                <IconInfo icon={<IconPhone/>} text="+91 98987 98987"/>
                </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                    name="name"
                    control={control}
                    rules={{required:true}}
                    render={({field})=>(
                        <FormElement 
                        type="text" 
                        label="Name"
                         placeholder="Enter name here..."
                          fieldRef={field}
                           hasError={errors.name?.type==='required'}
                           />
                    )}
                    />
                    <Controller
                    name="email"
                    control={control}
                    rules={{required:true}}
                    render={({field})=>(
                        <FormElement 
                        type="email" 
                        label="Email"
                         placeholder="Enter email here..."
                          fieldRef={field}
                           hasError={errors.email?.type==='required'}
                           />
                    )}
                    />
                    <Controller
                    name="message"
                    control={control}
                    rules={{required:true}}
                    render={({field})=>(
                        <FormElement 
                        type="textarea" 
                        label="Message"
                         placeholder="Enter message here..."
                          fieldRef={field}
                           hasError={errors.message?.type==='required'}
                           />
                    )}
                    />
                   <button type='submit' className='w-full px-6 py-3 bg-brandPrimary text-white font-medium uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-700'>Send</button>

                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs