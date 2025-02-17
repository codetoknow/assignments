

const PersonalDetails = ({ personalDetails }) => {
    return (
        <div>
            <p>Name: <strong>{personalDetails.name}</strong></p>
            <p>Age: <strong>{personalDetails.age}</strong> years</p>
        </div>
    )
}

export default PersonalDetails;
