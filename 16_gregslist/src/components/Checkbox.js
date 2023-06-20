function Checkbox({ checkedLocation, setCheckedLocation }) {
  return (
    <div>
      <label htmlFor="location">Location</label>
      <input
        type="checkbox"
        id="location"
        name="location"
        value="location"
        checked={checkedLocation}
        onChange={(e) => setCheckedLocation(e.target.checked)}
      />
    </div>
  );
}

export default Checkbox;
