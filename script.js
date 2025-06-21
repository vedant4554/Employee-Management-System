function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin123') {
    window.location.href = 'dashboard.html';
  } else {
    alert("Invalid credentials! Use admin / admin123");
  }
}

function addEmployee() {
  const name = document.getElementById('empName').value;
  const id = document.getElementById('empId').value;
  const email = document.getElementById('empEmail').value;
  const dept = document.getElementById('empDept').value;
  const role = document.getElementById('empRole').value;
  const salary = document.getElementById('empSalary').value;

  if (!name || !id || !email || !dept || !role || !salary) {
    alert("Please fill in all fields.");
    return;
  }

  const table = document.getElementById('employeeTable');
  const row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = id;
  row.insertCell(2).innerText = email;
  row.insertCell(3).innerText = dept;
  row.insertCell(4).innerText = role;
  row.insertCell(5).innerText = salary;

  const actionCell = row.insertCell(6);
  actionCell.innerHTML = `
    <button onclick="editEmployee(this)">Edit</button>
    <button onclick="deleteEmployee(this)">Delete</button>
  `;

  clearForm();
}

function clearForm() {
  document.getElementById('empName').value = '';
  document.getElementById('empId').value = '';
  document.getElementById('empEmail').value = '';
  document.getElementById('empDept').value = '';
  document.getElementById('empRole').value = '';
  document.getElementById('empSalary').value = '';
}

function deleteEmployee(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function editEmployee(button) {
  const row = button.parentElement.parentElement;
  const cells = row.getElementsByTagName('td');

  document.getElementById('empName').value = cells[0].innerText;
  document.getElementById('empId').value = cells[1].innerText;
  document.getElementById('empEmail').value = cells[2].innerText;
  document.getElementById('empDept').value = cells[3].innerText;
  document.getElementById('empRole').value = cells[4].innerText;
  document.getElementById('empSalary').value = cells[5].innerText;

  row.remove();
}
