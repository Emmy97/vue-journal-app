import journalApi from "@/api/journalApi";


//Son usadas para peticiones HTTP
export const loadEntries = async ( /*{commit}*/ ) => {
  const  { data }  =  await journalApi.get('/entries.json')
  const entries = []
  for (let id of Object.keys(data)) {
    // console.log(id);
    entries.push({
       id, 
       ...data[id]
    })
  }


};


export const updateEntry = async () => {
    
};

export const createEntry = async () => {
    
};

