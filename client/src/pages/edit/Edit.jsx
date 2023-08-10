import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  country: '',
  contact: '',
};

const Edit = () => {
  const [data, setData] = useState(initialState);
  const { name, email, country, contact } = data;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  const getUser = async (id) => {
    const res = await axios.get(
      `https://user-management-api1.vercel.app/${id}`
    );

    if (res.status === 200) {
      setData({ ...res.data });
    }
  };

  const createUser = async (data) => {
    const res = await axios.post(
      'https://user-management-api1.vercel.app/',
      data
    );

    if (res.status === 200) {
      toast.success(res.data);
    }
  };

  const updateUser = async (data, id) => {
    const res = await axios.put(
      `https://user-management-api1.vercel.app/${id}`,
      data
    );

    if (res.status === 200) {
      toast.success(res.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !country || !contact) {
      toast.error('Please fill all the fields!');
      return;
    }

    if (!id) {
      await createUser(data);
    } else {
      await updateUser(data, id);
    }

    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const inputs = [
    {
      title: 'name',
      type: 'text',
      content: name,
    },
    {
      title: 'email',
      type: 'email',
      content: email,
    },
    {
      title: 'country',
      type: 'text',
      content: country,
    },
    {
      title: 'contact',
      type: 'tel',
      content: contact,
    },
  ];

  return (
    <main className='flex justify-center w-full'>
      <div className='container flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='w-full mt-24 px-9 py-28 bg-green-200 rounded-lg shadow-standard md:w-2/3 xl:w-1/2'
        >
          {inputs.map((input, i) => {
            return (
              <div
                key={i}
                className='flex items-center w-full py-2 mb-4 bg-white-300 rounded-md shadow-standard'
              >
                <label
                  className='w-[30%] px-3 text-2xl font-bold text-green-200 capitalize'
                  htmlFor={input.title}
                >
                  {input.title}
                </label>
                <input
                  className='w-full px-3 py-1 mr-2 text-2xl text-green-200 outline-none rounded-md'
                  onChange={handleInputChange}
                  value={input.content}
                  type={input.type}
                  name={input.title}
                  id={input.title}
                  placeholder={`Enter a ${input.title}`}
                />
              </div>
            );
          })}
          <input
            className='w-full py-3 text-2xl font-bold text-white-300 bg-btnGreen cursor-pointer rounded-md shadow-standard hover:bg-black-400 transition-all'
            type='submit'
            value={id ? 'Update' : 'Add'}
          />
        </form>
      </div>
    </main>
  );
};

export default Edit;
