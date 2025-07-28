export default function StatCard({ title, value, change, icon }) {
    return (
      <div className="card shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted mb-1">{title}</h6>
            <h4>{value}</h4>
            <small className={change.startsWith("-") ? "text-danger" : "text-success"}>
              {change}
            </small>
          </div>
          <div className="fs-2 text-primary">{icon}</div>
        </div>
      </div>
    );
  }