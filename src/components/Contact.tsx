// import React, { useState } from "react";
// import CustomSnackbar from "./CustomSnackbar";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [snackbar, setSnackbar] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:junaidHusain50@gmail.com?subject=${encodeURIComponent(
//       form.subject
//     )}&body=${encodeURIComponent(
//       `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
//     )}`;

//     try {
//       window.location.href = mailtoLink;
//       setSnackbar(true); // Open the Snackbar
//     } catch (error) {
//       console.error("Failed to open email client:", error);
//       setSnackbar(true); // Ensure Snackbar opens even if the email client fails
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar(false);
//   };

//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex justify-center items-center">
//       <div className="p-6 max-w-lg w-full bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={form.subject}
//             onChange={handleChange}
//             className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
//             rows={4}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//           <CustomSnackbar
//             open={snackbar}
//             autoHideDuration={6000}
//             anchorOrigin={{ horizontal: "center" }}
//             onClose={handleCloseSnackbar}
//             message="Email client not found."
//             severity="success"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import CustomSnackbar from "./CustomSnackbar";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.subject || !form.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields!",
        severity: "error",
      });
      return;
    }

    const mailtoLink = `mailto:junaidHusain50@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    setSnackbar({
      open: true,
      message: "Opening email client...",
      severity: "success",
    });

    // Delay to allow the Snackbar to appear before redirecting
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex justify-center items-center">
      <div className="p-6 max-w-lg w-full bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Snackbar Component */}
      <CustomSnackbar
        open={snackbar.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </div>
  );
}

export default Contact;
