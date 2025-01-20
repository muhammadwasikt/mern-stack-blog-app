import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const mailtoURL = `mailto:donthereply@gmail.com?subject=Contact%20Form%20Submission&body=Name: ${encodeURIComponent(
        data.name
      )}%0AEmail: ${encodeURIComponent(data.email)}%0A%0AMessage:%0A${encodeURIComponent(
        data.message
      )}`;
      window.location.href = mailtoURL;
    reset(); 
  };

  return (
    <div className="bg-base-100 text-base-content py-10 px-6 lg:px-20">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          Have questions, feedback, or suggestions? Fill out the form below, and
          we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="card bg-base-200 shadow-md p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Message</span>
            </label>
            <textarea
              placeholder="Write your message here..."
              className={`textarea textarea-bordered w-full ${
                errors.message ? "textarea-error" : ""
              }`}
              rows="4"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-error text-sm">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn bg-primary w-full text-secandory ${
              isSubmitting ? "loading" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
