'use client';

import NightSkyBackground from '@/components/NightSkyBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen relative">
      <NightSkyBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing trading with cutting-edge technology and unwavering commitment to our users.
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Exop, we're on a mission to democratize trading by making advanced financial tools accessible to everyone. 
              We believe that everyone deserves access to professional-grade trading capabilities, regardless of their experience level.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in trading technology.",
                icon: "💡"
              },
              {
                title: "Trust",
                description: "We build trust through transparency, security, and reliable service.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our platform and service.",
                icon: "⭐"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image: "/team/john.jpg"
              },
              {
                name: "Jane Smith",
                role: "CTO",
                image: "/team/jane.jpg"
              },
              {
                name: "Mike Johnson",
                role: "Head of Product",
                image: "/team/mike.jpg"
              },
              {
                name: "Sarah Wilson",
                role: "Head of Design",
                image: "/team/sarah.jpg"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "Exop was founded with a vision to revolutionize trading technology."
              },
              {
                year: "2021",
                title: "Platform Launch",
                description: "We launched our first version of the trading platform to early adopters."
              },
              {
                year: "2022",
                title: "Global Expansion",
                description: "Expanded our services to users worldwide and introduced advanced features."
              },
              {
                year: "2023",
                title: "AI Integration",
                description: "Launched our AI-powered trading insights and analytics platform."
              }
            ].map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 font-bold text-xl">{milestone.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Shaping the Future of Trading
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of our mission to make advanced trading accessible to everyone.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </button>
        </section>
      </div>

      <Footer />
    </main>
  );
} 