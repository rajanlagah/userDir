import Search from "../../Component/Search";
import PostDisplay from "../PostsDisplay/index";
import Filter from "../../Component/Filter";
import { useState, useEffect } from "react";
import { getUsers } from "../../action/user";

function HomePage() {
  const [searchQuery, setsearchQuery] = useState(null);
  const [doSearch, setdoSearch] = useState(false);

  const [_users, setUsers] = useState([]);

  useEffect(() => {
    getSetUserData();
  }, []);

  const getSetUserData = async () => {
    try {
      const users = await getUsers({searchQuery});
      console.log(users);
      setUsers(users);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      <div className="flex-row">
        <div className="flex-sm">
          <Filter />
        </div>
        <div className="flex-lg">
          <Search onChange={({ target }) => setsearchQuery(target.value)} onDoSearchClick={()=>getSetUserData()}/>
        </div>
      </div>
      <PostDisplay searchQuery={searchQuery} _users={_users} />
    </div>
  );
}

export default HomePage;
