import PropTypes from "prop-types";
import { FILTER } from "../../constants/filter.constants";

export const FilterByFollow = ({ setSelectedSortOption }) => {
  return (
    <div className="relative flex justify-end items-center gap-4">
      <label htmlFor="sort-select">Sort by following:</label>
      <select
        name="sort"
        id="sort-select"
        className={`relative appearance-none w-48 px-3 py-2 rounded-md text-sm font-semibold text-gray-900 shadow-sm cursor-pointer border-2 border-solid border-white hover:border-blue transition-colors bg-arrow-down bg-no-repeat bg-[right_-22px_top_7px] bg-[length:55px_55px]`}
        onChange={(e) => {
          setSelectedSortOption(e.target.value);
        }}
      >
        {Object.entries(FILTER).map(([id, value]) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterByFollow.propTypes = {
  setSelectedSortOption: PropTypes.func.isRequired,
};
