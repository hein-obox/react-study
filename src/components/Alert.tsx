import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onAlertClick: () => void;
}

const Alert = ({ children, onAlertClick }: Props) => {

  return (
    <>
      <div className="alert alert-primary">{children}</div>

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onAlertClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
