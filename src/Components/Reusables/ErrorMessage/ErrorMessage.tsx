import "./ErrorMessage.css";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage(props: ErrorMessageProps): JSX.Element {
  return (
    <p className="ErrorMessage error">
      <span>⛔</span> {props.message}
    </p>
  );
}

export default ErrorMessage;
