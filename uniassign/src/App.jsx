import React, { useState } from "react";

const countries = ["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt", "India"];

const LandingPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, country } = formData;
    alert(name && email && phone && country ? "Thank you for your interest! We will get back to you soon." : "Please fill in all fields.");
  };

  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Apply Now for MBBS Abroad</h1>
        <p>Your future in medicine starts here.</p>
        <button className="apply-button">Apply Now</button>
      </header>

      <section className="benefits-section">
        <h2>Why Study MBBS Abroad?</h2>
        <div className="benefits-grid">
          {["Global exposure to healthcare practices.", "Affordable tuition fees.", "High-quality education."].map((benefit, index) => (
            <div key={index} className="benefit-item">{benefit}</div>
          ))}
        </div>
      </section>

      <section className="countries-section">
        <h2>Top Countries for MBBS</h2>
        <div className="countries-grid">
          {countries.map((country) => (
            <div key={country} className="country-item">{country}</div>
          ))}
        </div>
      </section>

      <section className="admission-section">
        <h2>Admission Process & Eligibility</h2>
        <ol className="admission-list">
          {["Fill out the application form and submit the required documents.", "Wait for confirmation and receive your admission letter.", "Apply for a student visa.", "Book your tickets and join the program."].map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="form-section">
        <form className="lead-form" onSubmit={handleSubmit}><h1>Get in Touch</h1>
          {[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "email", type: "email", placeholder: "Your Email" },
            { name: "phone", type: "tel", placeholder: "Your Phone Number" }
          ].map((field) => (
            <div key={field.name} className="form-group">
              <input
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          ))}
          <div className="form-group">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;