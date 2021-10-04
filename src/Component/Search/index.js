import Button from "../Button";
import './style.css'

const Search = () => (
  <div className='flex-row'>
    <div className='flex-lg'>
      <input className='search-input'/>
    </div>
    <div className='flex-sm'>
      <Button safe label="Search" onClick={() => console.log("clicked")} />
    </div>
  </div>
);

export default Search;
