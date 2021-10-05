import './style.css'

const Filter = ({ selectedValue, onChange }) => (
  <div className='filter'>
    <label>
      Filter:
      <select value={selectedValue} onChange={onChange}>
        <option value="Full Name">Username</option>
        <option value="Country">Country</option>
        <option value="DOB">DOB</option>
      </select>
    </label>
  </div>
);

export default Filter;
