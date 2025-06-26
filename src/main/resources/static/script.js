// Show Signup Section
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.auth-switch').style.display = 'none';
    document.getElementById('signupSection').style.display = 'block';
}

// Hide Signup Section
function hideSignup() {
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.querySelector('.auth-switch').style.display = 'block';
}

// Handle Login
function login() {
    const btn = document.querySelector('#loginForm button');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="loading-spinner"></span> Logging in...`;
    btn.disabled = true;

    fetch('/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: document.getElementById('loginUsername').value,
            password: document.getElementById('loginPassword').value
        })
    }).then(response => {
        if (response.ok) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'dashboard.html';
        } else {
            alert('Login failed! Check credentials.');
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }).catch(() => {
        alert('Network error! Please try again.');
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}

// Handle Signup
function signup() {
    const btn = document.querySelector('#signupSection button');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="loading-spinner"></span> Creating account...`;
    btn.disabled = true;

    fetch('/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: document.getElementById('signupUsername').value,
            password: document.getElementById('signupPassword').value
        })
    }).then(response => {
        if (response.ok) {
            alert('Signup successful! Please login.');
            hideSignup();
        } else {
            alert('Signup failed! Username might be taken.');
        }
        btn.innerHTML = originalText;
        btn.disabled = false;
    }).catch(() => {
        alert('Network error! Please try again.');
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}

// Load Employees in Dashboard
function loadEmployees() {
    const btn = document.querySelector('.btn-refresh');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="loading-spinner"></span> Refreshing...`;
    btn.disabled = true;

    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '<tr><td colspan="4"><span class="loading-spinner"></span> Loading employees...</td></tr>';
    
    fetch('/employees')
        .then(response => response.json())
        .then(data => {
            if(data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="4">No employees found</td></tr>';
                return;
            }
            
            tableBody.innerHTML = data.map(e => `
                <tr>
                    <td>${e.name}</td>
                    <td>${e.department}</td>
                    <td>$${e.salary.toLocaleString()}</td>
                    <td>
                        <button onclick="deleteEmployee('${e.id}')" class="btn-danger">
                            <i class="fas fa-trash-alt btn-icon"></i> Delete
                        </button>
                    </td>
                </tr>
            `).join('');
        })
        .catch(() => {
            tableBody.innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
        })
        .finally(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
}

// Add Employee
function addEmployee() {
    const btn = document.querySelector('.employee-form button');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="loading-spinner"></span> Adding...`;
    btn.disabled = true;

    const employee = {
        name: document.getElementById('name').value,
        department: document.getElementById('department').value,
        salary: parseFloat(document.getElementById('salary').value)
    };

    fetch('/employees', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employee)
    })
    .then(() => {
        loadEmployees();
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('department').value = '';
        document.getElementById('salary').value = '';
    })
    .catch(() => alert('Error adding employee'))
    .finally(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}

// Delete Employee
function deleteEmployee(id) {
    if (!confirm('Are you sure you want to delete this employee?')) return;
    
    const btn = document.querySelector(`button[onclick="deleteEmployee('${id}')"]`);
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="loading-spinner"></span> Deleting...`;
    btn.disabled = true;

    fetch(`/employees/${id}`, {method: 'DELETE'})
        .then(() => loadEmployees())
        .catch(() => alert('Error deleting employee'))
        .finally(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
}

// Handle Logout
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

// Auto Load Employees when dashboard opens
if (window.location.pathname.endsWith('dashboard.html')) {
    loadEmployees();
}