
import Navbar from "./components/navBar";
import StudentList from "./components/studentList";
import './App.css';

function App() {

  const students = [
    {
      id: 1,
      fullName: 'Kelvin Chidera',
      email: 'ezenwakachidera6@gmail.com',
      department: 'Computer Science',
      level: '300 Level',
      profileImage: 'https://i.pravatar.cc/300?img=12',
      enrollmentStatus: 'Active'
    },
    {
      id: 2,
      fullName: 'Sophia Williams',
      email: 'sophiawilliams@gmail.com',
      department: 'Software Engineering',
      level: '200 Level',
      profileImage: 'https://i.pravatar.cc/300?img=47',
      enrollmentStatus: 'Pending'
    },
    {
      id: 3,
      fullName: 'Daniel Johnson',
      email: 'danieljohnson@gmail.com',
      department: 'Information Technology',
      level: '400 Level',
      profileImage: 'https://i.pravatar.cc/300?img=13',
      enrollmentStatus: 'Inactive'
    },
    {
      id: 4,
      fullName: 'Amara Anieto',
      email: 'amaraanieto@gmail.com',
      department: 'Computer Science',
      level: '100 Level',
      profileImage: 'https://i.pravatar.cc/300?img=44',
      enrollmentStatus: 'Active'
    }
  ];


  function handleViewProfile(studentName) {
    alert(`You are viewing ${studentName}'s profile`);
  }

  return (

    <>
      <Navbar />

      <main className="main-content">

        <div className="page-heading">
          <div>
            <p className="welcome-text">STUDENT MANAGEMENT</p>
            <h1>Student Profiles</h1>
            <p className="page-description">
              Manage and view student information in one place.
            </p>
          </div>

          <div className="student-total">
            <span>Total Students</span>
            <h2>{students.length}</h2>
          </div>
        </div>

        <StudentList
          students={students}
          onViewProfile={handleViewProfile}
        />

      </main>
    </>



  );
}

export default App;