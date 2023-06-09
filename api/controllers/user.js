import { v4 as uuid } from 'uuid';

let users = [
  {
    id: uuid(),
    name: 'John',
    email: 'john@gmail.com',
    country: 'Germany',
    contact: '981563015',
  },
  {
    id: uuid(),
    name: 'Jane',
    email: 'jane@gmail.com',
    country: 'Indian',
    contact: '981563018',
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id === id);

  if (!result) {
    res.status(400).send('User not found!');
  }

  res.send(result);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };

  users.push(user);

  res.send('New user created!');
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id === id);

  users = users.filter((user) => user.id !== id);

  if (!result) {
    res.status(400).send('User not found!');
  }

  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id === id);
  const { name, email, country, contact } = req.body;

  if (!result) {
    res.status(400).send('User not found!');
  }

  result.name = name;
  result.email = email;
  result.country = country;
  result.contact = contact;

  res.send('Updated user!');
};
