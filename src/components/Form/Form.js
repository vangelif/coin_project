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
    const [showSuccessRegistration, setShowSuccessRegistration] = useState(false);

    const totalSteps = 2;

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
            setShowSuccessRegistration(true);
            setTimeout(() => {
                setShowSuccessRegistration(false);
                setStep(1);
                setFullName("");
                setDob(null);
                setEmail("");
                setPassword("");
                setErrors({});
            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };

    const progress = (step / totalSteps) * 100;

    return (
        <div className="form">
            <section className="form__progress-bar-grid">
                <div className="form__progress-bar-grid-item">
                    <div className="form__progress-bar-title">
                        {/* <span>Step {step - 1}</span> */}
                        <span>Step 1</span>
                    </div>
                    <div className="form__progress-bar-background">
                        <div className="form__progress-bar-line" style={{ width: `${progress}%` }} />
                    </div>
                </div>
                {/* item 2 */}
                <div className="form__progress-bar-grid-item tablet">
                    <div className="form__progress-bar-title">
                        {/* <span>Step {step + 1}</span> */}
                        <span>Step 2</span>
                    </div>
                    <div className="form__progress-bar-background">
                        <div className="form__progress-bar-line" style={{ width: `${progress - 50}%` }} />
                    </div>
                </div>
            </section>
            {step === 1 && (
                <form onSubmit={handleStep1Submit}>
                    <article className="form__input_container">
                        <div className="form__input">
                            <label htmlFor="fullName">Full Name:</label>
                            <div>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                placeholder="Type full name here..."
                                onChange={(e) => setFullName(e.target.value)} />
                            </div>
                        </div>
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                        <div className="form__input">
                            <label htmlFor="dob">Date of Birth:</label>
                            <div>
                            <DatePicker
                                id="dob"
                                selected={dob}
                                onChange={(date) => setDob(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select date here..."
                                showYearDropdown
                                showMonthDropdown
                                scrollableMonthYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={50}
                                className="custom-datepicker" />
                            </div>
                        </div>
                    </article>
                    {errors.dob && <span className="error">{errors.dob}</span>}
                    <div className="form__button_container">
                        <button
                            className={`form__button ${(Object.keys(errors).length > 0 || fullName === '' || dob === '') ? 'invalid-button' : 'valid-button'}`}
                            type="submit"
                        >
                            Continue</button>
                    </div>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleStep2Submit}>
                    <article className="form__input_container">
                        <div className="form__input">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                placeholder="Type email here..." 
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
                                placeholder="Type password here..."
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </article>
                        {errors.password && <span className="error">{errors.password}</span>}
                        <div className="form__button_container">
                            <button 
                            className={`form__button ${
                                (Object.keys(errors).length > 0 || fullName === '' || dob === '') ? 'invalid-button' : 'valid-button'
                            }`} 
                            type="submit"
                    >
                        Register Now</button>
                    </div>
                </form>
            )}
                {showSuccessRegistration && (
                    <div className="popup">
                        🎊Registration successful!
                    </div>
                )}
            <footer class="form__footer">
                <p>Don't have an account? <a style={{ color: 'red' }} href="/">Create one here</a> and register for the event</p>
                <p class="form__footer_p">Terms and Conditions apply*. To read the full T&Cs, click <span style={{ color: 'red' }}>here</span>.</p>
            </footer>
        </div>
    );
};

export default Form;
