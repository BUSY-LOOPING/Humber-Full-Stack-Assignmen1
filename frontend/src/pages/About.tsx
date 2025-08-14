import React from "react";
import Banner from "../components/Banner";

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Banner title="About Us" imageUrl="/img/banner.jpg" />

      <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-8 text-gray-800">
        <p className="text-lg leading-relaxed">
          At DripNest, we believe that style and comfort should go hand in hand.
          Founded with a passion for minimalism and quality, our products are
          designed to make you feel confident every day.
        </p>

        <h3 className="text-xl font-semibold">Our Mission</h3>
        <p className="leading-relaxed">
          To provide timeless, functional clothing and accessories that meet the
          demands of modern life — without compromising on sustainability or style.
        </p>

        <h3 className="text-xl font-semibold">What Makes Us Different</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>High-quality materials</li>
          <li>Ethical manufacturing</li>
          <li>Thoughtful design</li>
          <li>Fast & secure delivery</li>
        </ul>

        <h3 className="text-xl font-semibold">Get in Touch</h3>
        <p className="leading-relaxed">
          We love hearing from our community. Reach out anytime via our{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact page
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default About;
