export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
          📩 Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Have a question, a project, or just want to connect? Fill out the form below — I’ll get back to you within 24 hours.
        </p>

        <form
          action="https://formspree.io/f/xwpbkokv" // 
          method="POST"
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
