import Dexie from 'dexie'

const db = new Dexie('PassboxDB')
const tables = { users: '++id,&login,&password', passwords: '++id' }

db.version(1).stores(tables)

const getUser = async userData => {
  const user = await db.table('users').get(userData)
  if (!user) throw new Error('User not found!')
  return user
}

const addUser = async userData => {
  const user = await db.table('users').add(userData)
  return user
}

export { db as default, getUser, addUser }
