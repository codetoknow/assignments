import { useState } from "react"


const RegistrationFormAssignment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: "",
        country: "",
        favourite: "",
        subscribe: false,
        hobbies: []
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        bio: "",
        country: "",
        favourite: "",
        subscribe: "",
        hobbies: ""
    })

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        if (name === "name" && !value.trim()) {
            newErrors.name = "Name cannot be empty";
        } else if (name === "email" && !value.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (name === "email" && !value.includes("@")) {
            newErrors.email = "Invalid email format";
        } else if (name === "bio" && !value.trim()) {
            newErrors.bio = "Please enter bio";
        } else if (name === "country" && !value) {
            newErrors.country = "Please select country";
        } else if (name === "favourite" && !value) {
            newErrors.favourite = "Please choose your favourite";
        } else if (name === "hobbies" && value.length === 0) {
            newErrors.hobbies = "Please choose at least one hobby";
        } else {
            newErrors[name] = ""; // Clear the error if the field is valid
        }

        setErrors(newErrors);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (name === "subscribe") {
                setFormData({ ...formData, [name]: checked });
            } else if (name === "hobbies") {
                const updatedHobbies = formData.hobbies.includes(value)
                    ? formData.hobbies.filter((hobby) => hobby !== value)
                    : [...formData.hobbies, value];
                setFormData({ ...formData, hobbies: updatedHobbies });

                // Validate hobbies based on the updated array
                validateField("hobbies", updatedHobbies);
                return; // Exit early to avoid double validation
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Validate the changed field
        validateField(name, value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data Submitted: ", formData)
        alert("Form submitted successfully!")
    }
    // console.log(errors)
    return (
        <form
            role="form"
            style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}
            onSubmit={handleFormSubmit}
        >
            <label id="name-label" htmlFor="name">
                Name:
            </label>
            <input
                aria-invalid={formData.name === ""}
                title="Please enter your full name"
                aria-required="true"
                aria-labelledby="name-label"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            <label id="email-label" htmlFor="email">
                Email:
            </label>
            <input
                aria-invalid={!formData.email.includes("@")}
                aria-required="true"
                aria-describedby="email-hint"
                aria-labelledby="email-label"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter email"
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
            <span id="email-hint" style={{ fontSize: "0.8rem", color: "gray" }}>
                We'll never share your email.
            </span>
            <span aria-hidden="true">📧</span>
            <label id="bio-label" htmlFor="bio">
                Bio:
            </label>
            <textarea
                aria-labelledby="bio-label"
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Enter bio"
            />
            {errors.bio && <span style={{ color: "red" }}>{errors.bio}</span>}
            <label id="country-label" htmlFor="country">
                Country:
            </label>
            <select
                aria-describedby="country-hint"
                aria-labelledby="country-label"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
            >
                <option value="">Select a country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
            </select>
            {errors.country && <span style={{ color: "red" }}>{errors.country}</span>}
            <span id="country-hint" style={{ fontSize: "0.8rem", color: "gray" }}>
                Select your country of residence.
            </span>
            <fieldset>
                <legend>Favourite:</legend>
                <label htmlFor="html">
                    <input
                        aria-checked={formData.favourite === "html"}
                        type="radio"
                        name="favourite"
                        value="html"
                        onChange={handleInputChange}
                    />
                    HTML
                </label>
                <label htmlFor="css">
                    <input
                        aria-checked={formData.favourite === "css"}
                        type="radio"
                        name="favourite"
                        value="css"
                        onChange={handleInputChange}
                    />
                    CSS
                </label>
                <label htmlFor="javascript">
                    <input
                        aria-checked={formData.favourite === "javascript"}
                        type="radio"
                        id="javascript"
                        name="favourite"
                        value="javascript"
                        onChange={handleInputChange}
                    />
                    Javascript
                </label>
            </fieldset>
            {errors.favourite && <span style={{ color: "red" }}>{errors.favourite}</span>}
            <label>Subscribe:</label>
            <input
                aria-describedby="subscribe-hint"
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
            />
            {errors.subscribe && <span style={{ color: "red" }}>{errors.subscribe}</span>}
            <span id="subscribe-hint" style={{ fontSize: "0.8rem", color: "gray" }}>
                Receive updates via email.
            </span>
            <fieldset>
                <legend>Hobbies</legend>
                <label htmlFor="cricket">
                    <input
                        type="checkbox"
                        id="cricket"
                        name="hobbies"
                        value="cricket"
                        checked={formData.hobbies.includes("cricket")}
                        onChange={handleInputChange}
                    />
                    Cricket
                </label>
                <label htmlFor="football">
                    <input
                        type="checkbox"
                        id="football"
                        name="hobbies"
                        value="football"
                        checked={formData.hobbies.includes("football")}
                        onChange={handleInputChange}
                    />
                    Football
                </label>
                <label htmlFor="basketball">
                    <input
                        type="checkbox"
                        id="basketball"
                        name="hobbies"
                        value="basketball"
                        checked={formData.hobbies.includes("basketball")}
                        onChange={handleInputChange}
                    />
                    Basketball
                </label>
            </fieldset>
            {errors.hobbies && <span style={{ color: "red" }}>{errors.hobbies}</span>}
            <button
                type="submit"
                disabled={!formData.name || !formData.email}
                aria-disabled={!formData.name || !formData.email}
                style={{ opacity: !formData.name || !formData.email ? 0.5 : 1 }}
            >
                Submit
            </button>
        </form>
    )
}

export default RegistrationFormAssignment;
