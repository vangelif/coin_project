import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import "./Datepicker.css";

const Form = () => {
    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const totalSteps = 2; // Total number of steps in the form

    const validateFullName = () => {
        const regex = /^[a-zA-Z ]+$/;
        return regex.test(fullName);
    };

    const validateDob = () => {
        if (!dob) return false;
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
        const maxAgeDate = new Date();
        maxAgeDate.setFullYear(maxAgeDate.getFullYear() - 60);

        return dob instanceof Date && !isNaN(dob) && 
            dob < minAgeDate && dob > maxAgeDate;
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"":;?/>.<,])[a-zA-Z\d!@#$%^&*()_+}{"":;?/>.<,]{8,15}$/;
        return regex.test(password);
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateFullName()) {
            newErrors.fullName = "Full Name should contain only letters and spaces";
        }

        if (!validateDob()) {
            newErrors.dob = "Date of Birth should be between 18 and 60 years old";
        }

        if (Object.keys(newErrors).length === 0) {
            setStep(2);
        } else {
            setErrors(newErrors);
        }
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail()) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!validatePassword()) {
            newErrors.password = "Password should be 8-15 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character";
        }

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully");
        } else {
            setErrors(newErrors);
        }
    };

    const progress = (step / totalSteps) * 100;

    return (
        <div className="form">
            <div className="form__progress-bar-title">
                <span>Step {step}</span>
            </div>
            <div className="form__progress-bar-container">
                <div className="form__progress-bar" style={{ width: `${progress}%` }} />
            </div>
            {step === 1 && (
                <form onSubmit={handleStep1Submit}>
                    <div className="form__input">
                        <label htmlFor="fullName">Full Name:</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            value={fullName} 
                            placeholder="Type full name here..."
                            onChange={(e) => setFullName(e.target.value)} 
                            />
                    </div>
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    <div className="form__input">
                        <label htmlFor="dob">Date of Birth:</label>
                        <DatePicker
                            id="dob"
                            selected={dob}
                            onChange={(date) => setDob(date)}
                            dateFormat="dd/mm/yyyy"
                            placeholderText="Select date here..."
                            showYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={50}
                            className="custom-datepicker"
                        />
                    </div>

                        {errors.dob && <span className="error">{errors.dob}</span>}
                    <button 
                    className={`form__button ${Object.keys(errors).length === 0 ? 'valid-button' : 'invalid-button'}`} 
                    type="submit" 
                    disabled={Object.keys(errors).length > 0} 
                >
                    Contiue</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleStep2Submit}>
                    <div className="form__input">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form__input">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                    <button className="form__button" type="submit">Register Now</button>
                </form>
            )}
        </div>
    );
};

export default Form;
