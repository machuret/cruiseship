export function LeadFormBlock() {
  return (
    <section className="section" id="case-review">
      <div className="container">
        <h2 className="h2">Free Case Review</h2>
        <form className="card-grid" action="#" method="post">
          <label className="card">Date of accident<input name="accidentDate" type="date" required /></label>
          <label className="card">Cruise line<input name="cruiseLine" type="text" required /></label>
          <label className="card">Accident type<input name="accidentType" type="text" required /></label>
          <label className="card">Injury severity<select name="severity" required><option>Minor</option><option>Moderate</option><option>Severe</option></select></label>
          <label className="card">State of residence<input name="state" type="text" required /></label>
          <button className="cta-button" type="submit">Submit for Attorney Review</button>
        </form>
      </div>
    </section>
  );
}
