export const FeedBack = ({ state, onChangeState, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {Object.getOwnPropertyNames(state).map(i => {
        return (
          <button
            key={[i]}
            name={[i]}
            type="button"
            onClick={eve => onChangeState(eve.target.name)}
          >
            {[i]}
          </button>
        );
      })}
    </div>
  );
};
