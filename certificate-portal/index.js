const studentLogin = document.getElementById('student-btn');
const verifyStudent = document.getElementById('verify-btn');
const verifyForm = document.getElementById('verify-form');
const studentForm = document.querySelector('.form-hidden');

const showStudentForm = () => {
  verifyForm.style.display = "none";
  studentForm.style.display = "block";
};

studentLogin.addEventListener('click', () => {
  showStudentForm()
});

