import axios from "axios";

const getUsers = async ({
  _start = 0,
  _end = 10,
  searchQuery,
  queryProperty
}) => {
  let params = {
    _start,
    _end
  };
  if (searchQuery) {
    params = { ...params, [queryProperty]: searchQuery };
  }
  try {
    const users = await axios.get("http://localhost:5000/users", {
      params
    });
    console.log(users);
    return {
      data: users.data,
      totalCount: users.headers["x-total-count"]
    };
  } catch (e) {
    console.log("Error");
  }
};

const updateUser = async ({ id, user }) => {
  try {
    const users = await axios({
      method: "patch",
      url: `http://localhost:5000/users/${id}/`,
      headers: {
        "Content-type": "application/json"
      },
      data: user
    });
    return users.data;
  } catch (e) {
    throw Error("Failed");
    console.log("Error");
  }
};

const deleteUser = async ({ id }) => {
  try {
    await axios.delete(`http://localhost:5000/users/2`);
  } catch (e) {
    throw Error("Failed");
    console.log("Error");
  }
};

const addNewUserData = async (user) => {
  // debugger
  try {
    const users = await axios.post(`http://localhost:5000/users`, {
      id: Date.now(),
      ...user
    });
    return;
  } catch (e) {
    throw Error("Failed");
    console.log("Error");
  }
};
export { getUsers, updateUser, deleteUser, addNewUserData };
