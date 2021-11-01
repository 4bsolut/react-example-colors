export default function Colors() {
  const setColor = (ev) => {
    console.log(ev.target.value);
  };
  return (
    <div className="row">
      <div className="col s4">
        <button
          onClick={setColor}
          value="#c62828"
          Style="background:#c62828;width:100%"
          className="waves-effect waves-light btn-large"
        >
          &nbsp;
        </button>
      </div>
      <div className="col s4">
        <button
          onClick={setColor}
          value="#6a1b9a"
          Style="background:#6a1b9a;width:100%"
          className="waves-effect waves-light btn-large"
        >
          &nbsp;
        </button>
      </div>
      <div className="col s4">
        <button
          onClick={setColor}
          value="#c5cae9"
          Style="background:#c5cae9;width:100%"
          className="waves-effect waves-light btn-large"
        >
          &nbsp;
        </button>
      </div>
    </div>
  );
}
