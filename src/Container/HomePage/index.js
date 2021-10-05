import ReactPaginate from "react-paginate";

import Search from "../../Component/Search";
import PostDisplay from "../PostsDisplay/index";
import Filter from "../../Component/Filter";
import { useState, useEffect } from "react";
import { deleteUser, getUsers } from "../../action/user";

const HomePage = () => {
  const limitPerPage = 10;
  const [searchQuery, setsearchQuery] = useState(null);
  const [totalCount, settotalCount] = useState(1);
  const [searchFilter, setsearchFilter] = useState("Full Name");
  const [_start, set_start] = useState(0);
  const [_end, set_end] = useState(limitPerPage);
  const [isLoading, setisLoading] = useState(false);

  const [_users, setUsers] = useState([]);

  useEffect(() => {
    getSetUserData();
  }, [_start, _end]);

  const getSetUserData = async () => {
    setisLoading(true);
    try {
      const users = await getUsers({
        searchQuery,
        queryProperty: searchFilter,
        _start,
        _end
      });
      setUsers([...users.data]);
      settotalCount(users.totalCount);
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
      console.log("error", e);
    }
  };

  const onUserDelete = async (id) => {
    try {
      const users = await deleteUser({ id });
      getSetUserData();
    } catch (e) {
      console.log("error", e);
    }
  };



  const onNextPage = ({ selected }) => {
    console.log("selected", selected);
    set_start(selected * limitPerPage);
    set_end((selected + 1) * limitPerPage);
  };

  return (
    <>
      <div className="flex-row">
        <div className="flex-sm">
          <Filter
            selectedValue={searchFilter}
            onChange={({ target }) => setsearchFilter(target.value)}
          />
        </div>
        <div className="flex-lg">
          <Search
            onChange={({ target }) => setsearchQuery(target.value)}
            onDoSearchClick={() => getSetUserData()}
          />
        </div>
      </div>
      <PostDisplay
        onUserDelete={onUserDelete}
        searchQuery={searchQuery}
        _users={_users}
        isLoading={isLoading}
      />
      {_users && _users.length > 0 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalCount / limitPerPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onNextPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default HomePage;
