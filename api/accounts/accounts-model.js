const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts") // select * from accounts

}


const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = userProvidedId
  return db("accounts").where("id", id).first()
  // return db("accounts").where("id", id)

}


// const create = account => {
//   // DO YOUR MAGIC
// }
async function create({ name, budget }) {
  const [id] = await db("accounts").insert({ name, budget })
  return getById(id)
}



// const updateById = (id, account) => {
//   // DO YOUR MAGIC
// }

async function updateById(id, { name, budget }) {
  await db("accounts").where("id", id).update({ name, budget })
  return getById(id)
}

// const deleteById = id => {
//   // DO YOUR MAGIC
// }

async function deleteById(id) {
  const deletedAccount = await getById(id)
  await db("accounts").where("id", id).delete()
  return deletedAccount
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
