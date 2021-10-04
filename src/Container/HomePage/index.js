import Search from "../../Component/Search";
import PostDisplay from "../PostsDisplay/index";
import Filter from "../../Component/Filter";

function HomePage() {
  return (
    <div>
      <div className="flex-row">
        <div className="flex-sm">
          <Filter />
        </div>
        <div className="flex-lg">
          <Search />
        </div>
      </div>
      <PostDisplay />
    </div>
  );
}

export default HomePage;
