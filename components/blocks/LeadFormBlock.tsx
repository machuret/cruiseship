export function LeadFormBlock() {
  return (
    <section id="case-review" className="section alt">
      <div className="container">
        <h2 className="h2">Request Free Case Review</h2>
        <p>Complete the form and a maritime lawyer will contact you within 24 hours.</p>
        <form action="/api/leads" method="POST" className="card" style={{ maxWidth: "600px" }}>
          <div className="form-group">
            <label>Date of Accident</label>
            <input type="date" name="accidentDate" required />
          </div>
          <div className="form-group">
            <label>Cruise Line</label>
            <input type="text" name="cruiseLine" placeholder="e.g., Carnival" required />
          </div>
          <div className="form-group">
            <label>Accident Type</label>
            <input type="text" name="accidentType" placeholder="e.g., Slip and Fall" required />
          </div>
          <div className="form-group">
            <label>Injury Severity</label>
            <select name="severity" required>
              <option value="">Select severity</option>
              <option value="minor">Minor injury</option>
              <option value="moderate">Moderate injury</option>
              <option value="serious">Serious injury</option>
              <option value="severe">Severe/catastrophic</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your State of Residence</label>
            <input type="text" name="state" placeholder="e.g., Florida" required />
          </div>
          <button type="submit">Submit for Review</button>
        </form>
      </div>
    </section>
  );
}
