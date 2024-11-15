import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">
            Hi, I'm a Web Developer specializing in modern and responsive web applications.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            View My Work
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am passionate about creating innovative web solutions with clean and efficient code. 
            I specialize in React, Tailwind CSS, and other modern web technologies to craft intuitive, user-friendly applications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 1"
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
              <p className="text-gray-600 mt-2">
                A brief description of the project. Focus on features and technologies used.
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 2"
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
              <p className="text-gray-600 mt-2">
                A brief description of the project. Focus on features and technologies used.
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 3"
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
              <p className="text-gray-600 mt-2">
                A brief description of the project. Focus on features and technologies used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg">I'd love to hear from you. Feel free to reach out via email or phone.</p>
          <div className="mt-4">
            <p>Email: <a href="mailto:your.email@example.com" className="underline">your.email@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="underline">+123 456 7890</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
