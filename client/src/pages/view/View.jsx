import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  const getUser = async (id) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);

    if (res.status === 200) {
      setUser({ ...res.data });
    }
  };

  const inputs = [
    { title: 'No:', content: user.id },
    { title: 'Name:', content: user.name },
    { title: 'Email:', content: user.email },
    { title: 'Country:', content: user.country },
    { title: 'Contact', content: user.contact },
  ];

  return (
    <main className='flex justify-center w-full'>
      <div className='container flex justify-center'>
        <div className='mt-24 px-9 py-28 bg-green-200 rounded-lg shadow-standard'>
          {inputs.map((input, i) => {
            return (
              <div key={i} className='px-6 py-2 mb-4 bg-white-300 rounded-lg'>
                <span className='mr-2 text-2xl font-bold text-green-200'>
                  {input.title}
                </span>
                <span className='text-2xl text-green-150'>{input.content}</span>
              </div>
            );
          })}
          <div className='flex justify-around items-center mt-10'>
            <Link
              className='px-16 py-2 text-2xl font-bold text-white-300 bg-btnBlue rounded-md shadow-standard hover:bg-black-400 transition-all'
              to={'/'}
            >
              Back
            </Link>
            <Link
              className='px-16 py-2 text-2xl font-bold text-white-300 bg-btnGreen rounded-md shadow-standard hover:bg-black-400 transition-all'
              to={`/update/${user.id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default View;
