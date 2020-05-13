import Dexie from 'dexie';

const db = new Dexie('PassboxDB');
const tables = { users: '++id,&login,password', passwords: '++id' };

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

db.version(1).stores(tables);

const getUser = async (userData) => {
  await sleep(1000);
  const user = await db.table('users').get(userData);
  if (!user) throw new Error('User not found!');
  return user;
};

const addUser = async (userData) => {
  await sleep(1000);
  const user = await db.table('users').add(userData);
  return user;
};

export { db as default, getUser, addUser };
