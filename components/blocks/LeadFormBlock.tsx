"use client";

import { useState } from "react";

const VALID_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
  "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

interface FormData {
  accidentDate: string;
  cruiseLine: string;
  accidentType: string;
  severity: string;
  state: string;
}

export function LeadFormBlock() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState<FormData>({
    accidentDate: "",
    cruiseLine: "",
    accidentType: "",
    severity: "",
    state: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setFormData({ accidentDate: "", cruiseLine: "", accidentType: "", severity: "", state: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  }

  if (status === "success") {
    return (
      <section id="case-review" className="section alt">
        <div className="container">
          <div className="card" style={{ maxWidth: "600px", textAlign: "center", padding: "48px 24px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }} aria-hidden="true">✓</div>
            <h2 className="h2">Thank You!</h2>
            <p style={{ color: "var(--color-muted)" }}>
              Your case review request has been received. A maritime lawyer will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-review" className="section alt">
      <div className="container">
        <h2 className="h2">Request Free Case Review</h2>
        <p>Complete the form and a maritime lawyer will contact you within 24 hours.</p>
        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: "600px" }} aria-label="Case review request form">
          {status === "error" && (
            <div role="alert" style={{ 
              background: "#fef2f2", 
              border: "1px solid #dc2626", 
              color: "#dc2626", 
              padding: "12px 16px", 
              borderRadius: "8px", 
              marginBottom: "16px" 
            }}>
              {errorMsg}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="accidentDate">Date of Accident <span aria-label="required">*</span></label>
            <input 
              id="accidentDate"
              type="date" 
              name="accidentDate" 
              required 
              aria-required="true"
              value={formData.accidentDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cruiseLine">Cruise Line <span aria-label="required">*</span></label>
            <input 
              id="cruiseLine"
              type="text" 
              name="cruiseLine" 
              placeholder="e.g., Carnival" 
              required 
              aria-required="true"
              value={formData.cruiseLine}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="accidentType">Accident Type <span aria-label="required">*</span></label>
            <input 
              id="accidentType"
              type="text" 
              name="accidentType" 
              placeholder="e.g., Slip and Fall" 
              required 
              aria-required="true"
              value={formData.accidentType}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">Injury Severity <span aria-label="required">*</span></label>
            <select 
              id="severity"
              name="severity" 
              required 
              aria-required="true"
              value={formData.severity}
              onChange={handleChange}
            >
              <option value="">Select severity</option>
              <option value="minor">Minor injury</option>
              <option value="moderate">Moderate injury</option>
              <option value="serious">Serious injury</option>
              <option value="severe">Severe/catastrophic</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state">Your State of Residence <span aria-label="required">*</span></label>
            <select
              id="state"
              name="state"
              required
              aria-required="true"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select your state</option>
              {VALID_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <button 
            type="submit" 
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Submit for Review"}
          </button>
        </form>
      </div>
    </section>
  );
}
