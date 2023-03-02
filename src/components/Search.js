export const Search = ({ value = "", setValue }) => {
  return (
    <div className="mb-5 flex flex-col items-center">
      <input
        className="input input-bordered input-sm w-full max-w-xs mb-2.5"
        name="search"
        placeholder="Search..."
        id="search"
        type="search"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
};
