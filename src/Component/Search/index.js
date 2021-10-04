import Button from "../Button";
import './style.css'

const Search = ({onChange,onDoSearchClick}) => (
  <div className='flex-row'>
    <div className='flex-lg'>
      <input className='search-input' onChange={onChange}/>
    </div>
    <div className='flex-sm'>
      <Button safe label="Search" onClick={onDoSearchClick} />
    </div>
  </div>
);

export default Search;
