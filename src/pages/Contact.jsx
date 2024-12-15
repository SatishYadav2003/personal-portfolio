import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";


function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid email is required.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";

    if (!formData.description.trim())
      newErrors.description = "Description is required.";

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill out all fields correctly.");
      return;
    }

    const templateParams = {
      to_name: "satish",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.description,
    };

    emailjs
      .send(
        "service_29fl17u",
        "template_a9ek8vp",
        templateParams,
        "s-92T0XgmNhbA9Ues"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", description: "" });
          setShowForm(false);
        },
        (error) => {
          toast.error("Error sending message. Please try again.");
        }
      );
  };

  const [margin, setMargin] = useState(false);

  return (
    <div
      id="contact"
      className={`flex min-h-screen min-w-full items-center justify-center overflow-hidden ${
        margin ? "my-10" : ""
      }  md:my-0`}
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6">
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center text-4xl md:text-7xl"
        >
          <span className="bg-gradient-to-r to-fuchsia-600 from-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h1>

        <motion.p
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center text-lg font-semibold text-gray-500"
        >
          "Want to chat? Click this button to send me an email, and I'll get
          back to you as soon as possible!"
        </motion.p>

        {!showForm ? (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="cursor-pointer text-nowrap rounded-lg border-2 border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
            onClick={() => {
              setShowForm(true);
              setMargin(true);
            }}
          >
            Contact Me
          </motion.a>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3  rounded-lg bg-black/80 p-4 shadow-lg shadow-indigo-700 text-white border border-indigo-700 md:w-3/4 md:py-6 "
            onSubmit={handleFormSubmit}
          >
            <div>
              <label className="block text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                spellCheck={false}
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 w-full rounded-lg border-2 bg-gray-800 px-3 py-2 text-white focus:outline-none ${
                  errors.name ? "border-red-500" : "border-indigo-600"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="mt-1">
              <label className="block text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 w-full rounded-lg border-2 bg-gray-800 px-3 py-2 text-white focus:outline-none ${
                  errors.email ? "border-red-500" : "border-indigo-600"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mt-1">
              <label className="block text-sm font-semibold" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                spellCheck={false}
                value={formData.subject}
                onChange={handleInputChange}
                className={`mt-1 w-full rounded-lg border-2 bg-gray-800 px-3 py-2 text-white focus:outline-none ${
                  errors.subject ? "border-red-500" : "border-indigo-600"
                }`}
                placeholder="Enter the subject"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="mt-1">
              <label
                className="block text-sm font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                spellCheck={false}
                value={formData.description}
                onChange={handleInputChange}
                className={`resize-none mt-1 w-full rounded-lg border-2 bg-gray-800 px-3 py-2 text-white focus:outline-none ${
                  errors.description ? "border-red-500" : "border-indigo-600"
                }`}
                placeholder="Enter your message"
              />
              {errors.description && (
                <p className="text-xs text-red-500">{errors.description}</p>
              )}
            </div>

            <div
              className="flex gap-2 w-full mt-2
            "
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setShowForm(false);
                  setErrors({});
                }}
                className="w-full text-center rounded-lg bg-indigo-600 px-4 py-2 text-lg font-normal text-white hover:bg-indigo-700 "
              >
                Cancel Message
              </motion.div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.4 }}
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-lg font-normal text-white hover:from-green-600 hover:to-emerald-600 "
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}

export default Contact;
