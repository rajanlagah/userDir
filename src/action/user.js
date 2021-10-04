import axios from "axios";

const getUsers = async ({ start = 0, end = 10 ,searchQuery='Iva Haley',queryProperty='Full Name'}) => {
    console.log("queryPropertyqueryProperty",queryProperty)
    
    let params = {
        _start: 20,
        _end: 30,
    }

    if(queryProperty == 'Full Name' && searchQuery){
        params ={
            [queryProperty]:searchQuery
        }
    }
   
    try {
    const users = await axios.get("http://localhost:5000/users", {
      params,
    });
    return users.data
  } catch (e) {
    console.log("Error");
  }
};

export { getUsers };
