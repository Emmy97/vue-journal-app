import journalApi from "@/api/journalApi";


//Son usadas para peticiones HTTP
export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')

  if (!data) return commit('setEntries', [])


  const entries = []

  for (let id of Object.keys(data)) {
    // console.log(id);
    entries.push({
      id,
      ...data[id]
    })

  }

  commit('setEntries', entries)

};


export const updateEntry = async ({ commit }, entry) => {

  const { data } = await journalApi.put(`/entries/${entry.id}.json`, entry)

  commit('updateEntry', data)
};

export const createEntry = async ({ commit }, entry) => {

  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };

  const { data } = await journalApi.post(`/entries.json`, dataToSave)


  dataToSave.id = data.name;

  commit('addEntry', dataToSave)

  return data.name

};

export const deleteEntry = async ({ commit }, id) => {

  await journalApi.delete(`/entries/${id}.json`, id)

  commit('deleteEntry', id)
};

