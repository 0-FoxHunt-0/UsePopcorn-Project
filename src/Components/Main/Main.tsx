import "./Main.css";

interface MainProps {
  children: any;
}

function Main(props: MainProps): JSX.Element {
  return (
    <div className="Main">
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Main;
