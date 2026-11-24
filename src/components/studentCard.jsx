

function StudentCard({
    id,
    fullName,
    email,
    department,
    level,
    profileImage,
    enrollmentStatus,
    onViewProfile
}) {
    return (
        <div className="student-card">

            <div className="card-top">
                <span className="student-id">
                    ID: {id}
                </span>

                {enrollmentStatus === 'Active' ? (
                    <span className="status-badge active">
                        Active
                    </span>
                ) : enrollmentStatus === 'Pending' ? (
                    <span className="status-badge pending">
                        Pending
                    </span>
                ) : (
                    <span className="status-badge inactive">
                        Inactive
                    </span>
                )}

            </div>

            <div className="profile-image-container">
                <img
                    src={profileImage}
                    alt={`${fullName}'s profile`}
                    className="profile-image"
                />
            </div>

            <div className="student-info">

                <h3>{fullName}</h3>

                <p className="student-email">
                    {email}
                </p>

                <div className="student-details">

                    <div className="detail-item">
                        <span>Department</span>
                        <p>{department}</p>
                    </div>

                    <div className="detail-item">
                        <span>Academic Level</span>
                        <p>{level}</p>
                    </div>

                </div>

            </div>
            <button
                className="view-profile-btn"
                onClick={() => onViewProfile(fullName)}
            >
                View Profile
            </button>

        </div>
    );
}

export default StudentCard