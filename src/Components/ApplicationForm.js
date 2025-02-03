import React, { useState, useEffect } from "react";
import "../Application.css";
import emailjs from "emailjs-com";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    motherName: "",
    fatherName: "",
    address: "",
    motherQualification: "",
    fatherQualification: "",
    motherOccupation: "",
    fatherOccupation: "",
    siblings: "",
    annualIncome: "",
    religion: "",
    caste: "",
    classOrCourse: "",
    institution: "",
    totalExpenses: "",
    paymentDetails: "",
    grantsOrScholarships: "",
    sportsOrCultural: "",
    academicDetails: [
      { year: "", percentage: "" },
      { year: "", percentage: "" },
    ],
    email: "",
    phone: "",
  });
  
  // Add this at the top of your component
  const [uploadedImage, setUploadedImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAcademicDetailsChange = (index, field, value) => {
    const updatedAcademicDetails = [...formData.academicDetails];
    updatedAcademicDetails[index][field] = value;
    setFormData({ ...formData, academicDetails: updatedAcademicDetails });
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Maximum file size in bytes (50 KB)
      const maxSize = 50 * 1024;
  
      if (file.size > maxSize) {
        alert("Please upload an image smaller than 50 KB.");
        return;
      }
  
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setUploadedImage(base64String);
          setImagePreview(base64String);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid .jpg or .png file.");
      }
    }
  };
  

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.email) {
    alert("Please fill in all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const templateParams = {
      name: formData.name || "N/A",
      dob: formData.dob || "N/A",
      motherName: formData.motherName || "N/A",
      fatherName: formData.fatherName || "N/A",
      address: formData.address || "N/A",
      motherQualification: formData.motherQualification || "N/A",
      fatherQualification: formData.fatherQualification || "N/A",
      motherOccupation: formData.motherOccupation || "N/A",
      fatherOccupation: formData.fatherOccupation || "N/A",
      siblings: formData.siblings || "N/A",
      annualIncome: formData.annualIncome || "N/A",
      religion: formData.religion || "N/A",
      caste: formData.caste || "N/A",
      academicDetails: formData.academicDetails
        .map(
          (entry) =>
            `Year: ${entry.year || "N/A"}, Percentage: ${entry.percentage || "N/A"}`
        )
        .join("\n"),
      classOrCourse: formData.classOrCourse || "N/A",
      institution: formData.institution || "N/A",
      totalExpenses: formData.totalExpenses || "N/A",
      paymentDetails: formData.paymentDetails || "N/A",
      grantsOrScholarships: formData.grantsOrScholarships || "N/A",
      sportsOrCultural: formData.sportsOrCultural || "N/A",
      email: formData.email || "N/A",
      phone: formData.phone || "N/A",
      image: uploadedImage || '',
    };

    const response = await emailjs.send(
      "service_e1wtrag",
      "template_ql5bbed",
      templateParams,
      "W1RB7N5FF94La4FHR"
    );

    console.log("Email sent successfully:", response.status, response.text);
    alert("Application submitted successfully!");

    // Reset form and image data
    setFormData({
      name: "",
      dob: "",
      motherName: "",
      fatherName: "",
      address: "",
      motherQualification: "",
      fatherQualification: "",
      motherOccupation: "",
      fatherOccupation: "",
      siblings: "",
      annualIncome: "",
      religion: "",
      caste: "",
      classOrCourse: "",
      institution: "",
      totalExpenses: "",
      paymentDetails: "",
      grantsOrScholarships: "",
      sportsOrCultural: "",
      academicDetails: [
        { year: "", percentage: "" },
        { year: "", percentage: "" },
      ],
      email: "",
      phone: "",
    });
    setUploadedImage('');
    setImagePreview('');

  } catch (error) {
    console.error("Failed to send email:", error);
    alert("There was an error submitting the application. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="form-container">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="motherName">Mother's Name</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="fatherName">Father's/Guardian's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="address">Address for Communication</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="motherQualification">Mother's Qualification</label>
          <input
            type="text"
            id="motherQualification"
            name="motherQualification"
            value={formData.motherQualification}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="fatherQualification">Father's Qualification</label>
          <input
            type="text"
            id="fatherQualification"
            name="fatherQualification"
            value={formData.fatherQualification}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="motherOccupation">Mother's Occupation</label>
          <input
            type="text"
            id="motherOccupation"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="fatherOccupation">Father's Occupation</label>
          <input
            type="text"
            id="fatherOccupation"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="siblings">Details of Siblings</label>
          <textarea
            id="siblings"
            name="siblings"
            value={formData.siblings}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="annualIncome">Annual Income of Parents/Guardian</label>
          <input
            type="text"
            id="annualIncome"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="religion">Religion</label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="caste">Caste</label>
          <input
            type="text"
            id="caste"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="classOrCourse">Class/Course</label>
          <input
            type="text"
            id="classOrCourse"
            name="classOrCourse"
            value={formData.classOrCourse}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="institution">Name and Address of Institution</label>
          <textarea
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="totalExpenses">Total Estimated Expenses for Current Year</label>
          <input
            type="text"
            id="totalExpenses"
            name="totalExpenses"
            value={formData.totalExpenses}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="paymentDetails">Details of Payments Made (if any)</label>
          <textarea
            id="paymentDetails"
            name="paymentDetails"
            value={formData.paymentDetails}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="grantsOrScholarships">
            Grants/Scholarships/Free Ships (if any)
          </label>
          <textarea
            id="grantsOrScholarships"
            name="grantsOrScholarships"
            value={formData.grantsOrScholarships}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="sportsOrCultural">
            Participation in Sports/Cultural Events (if any)
          </label>
          <textarea
            id="sportsOrCultural"
            name="sportsOrCultural"
            value={formData.sportsOrCultural}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <h3>Academic Details of Previous Two Years</h3>
          {formData.academicDetails.map((entry, index) => (
            <div key={index} className="academic-entry">
              <div>
                <label>Year</label>
                <input
                  type="text"
                  value={entry.year}
                  onChange={(e) =>
                    handleAcademicDetailsChange(index, "year", e.target.value)
                  }
                />
              </div>
              <div>
                <label>Percentage</label>
                <input
                  type="text"
                  value={entry.percentage}
                  onChange={(e) =>
                    handleAcademicDetailsChange(index, "percentage", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div className="form-field">
          <label htmlFor="fileUpload">Upload Supporting Document (JPG/PNG)</label>
          <input
            type="file"
            id="fileUpload"
            accept=".jpg,.png"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ maxWidth: '200px', marginTop: '10px' }}
              />
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;