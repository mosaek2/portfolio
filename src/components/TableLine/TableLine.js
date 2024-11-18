import "./TableLine.css";

export default function TableLine({ title, children, width }) {
  return (
    <div className="table-line" style={{ width: width }}>
      <div className="table-line-title">
        <p className="table-line-title-text">{title}</p>
      </div>

      <div className="table-line-content">{children}</div>
    </div>
  );
}
