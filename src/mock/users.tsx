export interface User {
  ID: number;
  Name: string;
  AccessLevel: number;
  IsActive: boolean;
}

const users = [
  {
    ID: 1,
    Name: "Wesley Franco Maciel",
    UserName: "wesley.maciel",
    Password: "casa123",
    Email: "wesley.maciel333@gmail.com",
    AccessLevel: 2,
    IsActive: true,
  },
  {
    ID: 2,
    Name: "Fernanda Oliveira",
    Username: "fernanda.oliveira",
    Password: "tree123",
    Email: "fernanda789@gmail.com",
    AccessLevel: 2,
    IsActive: false,
  },
  {
    ID: 3,
    Name: "Ricardo Santos",
    Username: "ricardo.santos",
    Password: "river123",
    Email: "ricardo234@gmail.com",
    AccessLevel: 3,
    IsActive: true,
  },
  {
    ID: 4,
    Name: "Maria Pereira",
    Username: "maria.pereira",
    Password: "flower123",
    Email: "maria567@gmail.com",
    AccessLevel: 2,
    IsActive: true,
  },
  {
    ID: 5,
    Name: "João Almeida",
    Username: "joao.almeida",
    Password: "mountain123",
    Email: "joao890@gmail.com",
    AccessLevel: 1,
    IsActive: false,
  },
  {
    ID: 6,
    Name: "Ana Costa",
    Username: "ana.costa",
    Password: "ocean123",
    Email: "ana1234@gmail.com",
    AccessLevel: 3,
    IsActive: true,
  },
  {
    ID: 7,
    Name: "Pedro Souza",
    Username: "pedro.souza",
    Password: "sun123",
    Email: "pedro5678@gmail.com",
    AccessLevel: 2,
    IsActive: false,
  },
  {
    ID: 8,
    Name: "Beatriz Martins",
    Username: "beatriz.martins",
    Password: "moon123",
    Email: "beatriz901@gmail.com",
    AccessLevel: 1,
    IsActive: true,
  },
  {
    ID: 9,
    Name: "Gabriel Rodrigues",
    Username: "gabriel.rodrigues",
    Password: "star123",
    Email: "gabriel345@gmail.com",
    AccessLevel: 3,
    IsActive: true,
  },
  {
    ID: 10,
    Name: "Camila Lima",
    Username: "camila.lima",
    Password: "planet123",
    Email: "camila6789@gmail.com",
    AccessLevel: 2,
    IsActive: false,
  },
];

export default users;
