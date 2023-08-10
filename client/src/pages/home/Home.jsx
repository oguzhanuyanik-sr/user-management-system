import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get('https://user-management-api1.vercel.app/');

    if (res.status === 200) {
      setdata(res.data);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure?')) {
      const res = await axios.delete(
        `https://user-management-api1.vercel.app/${id}`
      );

      if (res.status === 200) {
        getUsers();
      }
    }
  };

  const tableHeaders = ['No', 'Name', 'Email', 'Country', 'Contact', 'Action'];

  return (
    <main className='flex justify-center mt-28'>
      <table className='w-full mx-6 md:container md:mx-0'>
        <thead className='h-16 bg-green-200 text-xl text-white-200 border-[1px] border-green-150'>
          <tr>
            {tableHeaders.map((header, i) => {
              return <th key={i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody className='text-green-400 border border-green-200'>
          {data.map((user, i) => (
            <tr
              className='bg-white-100 text-xl text-center border-b-[1px] border-green-150 hover:bg-green-150 hover:text-white-100 '
              key={i}
            >
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.country}</td>
              <td>{user.contact}</td>
              <td>
                <div>
                  <Link
                    className='inline-flex justify-center items-center h-10 w-full md:w-1/3 px-6 text-lg text-white-300 bg-btnGreen hover:bg-black-300 transition-all'
                    to={`/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className='inline-flex justify-center items-center h-10 w-full md:w-1/3 px-6 text-lg text-white-300 bg-btnBlue hover:bg-black-300 transition-all'
                    to={`/update/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className='inline-flex justify-center items-center h-10 w-full md:w-1/3 px-6 text-lg text-white-300 bg-btnRed hover:bg-black-300 transition-all'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Home;
