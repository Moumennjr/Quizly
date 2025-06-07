import "./total-points.css";

function TotalPoints({ content, value }) {
  return (
    <div className="question-points" id="total-points">
            <i className="bi bi-star"></i>
            <span>{content}</span>
            <span style={{width: "25px", display:"flex",justifyContent:"center"}}>{value}</span>
        </div>
  );
}

export default TotalPoints;