const API = "http://localhost:5000/api/auth";


/* ================= REGISTER ================= */

const registerForm =
  document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const name =
        document.getElementById("name").value;

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      const role =
        document.getElementById("role").value;

      try {

        const res = await fetch(
          `${API}/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              email,
              password,
              role
            })
          }
        );

        const data = await res.json();

        if (!res.ok) {
          alert(data.error);
          return;
        }

        alert("Registration Successful!");

        /* STORE LOCALLY (optional) */
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("userRole", role);

        redirectByRole(role);

      } catch (err) {
        alert("Server error");
      }
    }
  );
}


/* ================= LOGIN ================= */

const loginForm =
  document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      try {

        const res = await fetch(
          `${API}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email,
              password
            })
          }
        );

        const data = await res.json();

        if (!res.ok) {
          alert(data.error);
          return;
        }

        /* STORE USER DATA */
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("userName", data.name);
        localStorage.setItem("userRole", data.role);

        alert("Login Successful!");

        redirectByRole(data.role);

      } catch (err) {
        alert("Server error");
      }
    }
  );
}


/* ================= ROLE REDIRECT ================= */

function redirectByRole(role) {

  if (role === "donor") {
    window.location.href = "donor.html";
  }

  else if (role === "ngo") {
    window.location.href = "ngo.html";
  }

  else if (role === "volunteer") {
    window.location.href = "volunteer.html";
  }

  else {
    window.location.href = "index.html";
  }
}


/* ================= LOGOUT ================= */

const logoutBtn =
  document.getElementById("logout");

if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    () => {

      localStorage.clear();

      window.location.href =
        "login.html";
    }
  );
}
