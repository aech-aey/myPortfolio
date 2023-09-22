import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required');
    } else {
      
      const form = e.target;
      form.submit();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div name='contact' className='w-full h-[130vh]  bg-[#9a9a9a] flex justify-center items-center p-4  text-[#141c06]'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full'
        method='POST'
        action='https://getform.io/f/2f8652bb-32c2-4b17-9566-7de166a2df97'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#BAFF39] '>
            Contact
          </p>
          <p className='py-4 md:text-2xl code '>
            {/* If you have any queries feel free to contact me. */}
          </p>
        </div>
        <input
          className='bg-[#6E6E6E]  p-2'
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#6E6E6E]'
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#6E6E6E] p-2'
          name='message'
          rows='10'
          style={{ resize: 'none' }}
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className='text-lime-950 font-bold border-lime-950 border-2 px-4 py-3 my-4 mx-auto flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
