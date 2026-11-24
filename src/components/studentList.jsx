

import StudentCard from './studentCard';


function StudentList({ students, onViewProfile}) {

    return (
        <section className="student-section" id="students">

            <div className="section-heading">
                <div>
                    <h2>All Students</h2>
                    <p>Here are the registered students.</p>
                </div>

                <span className="student-count">
                    {students.length} Students
                </span>
            </div>

            <div className="student-grid">

                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        fullName={student.fullName}
                        email={student.email}
                        department={student.department}
                        level={student.level}
                        profileImage={student.profileImage}
                        enrollmentStatus={student.enrollmentStatus}
                        onViewProfile={onViewProfile}
                    />
                ))}

            </div>

        </section>
    );
}

export default StudentList;
