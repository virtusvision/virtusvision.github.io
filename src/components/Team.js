import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Zeynep Filiz Eren",
      role: "Co-Founder & CEO",
      description: "AI researcher with a background in statistics and computer vision. Leads technology and strategy.",
      expertise: ["Statistics", "Computer Vision", "AI Research", "Strategy"],
      image: "ZFE"
    },
    {
      id: 2,
      name: "Hasan Ali Özkan",
      role: "Co-Founder & CTO",
      description: "Computer engineer with experience in medical imaging and software architecture.",
      expertise: ["Medical Imaging", "Software Architecture", "Computer Engineering", "Development"],
      image: "HAO"
    },
    {
      id: 3,
      name: "Dr. Şükrü Çekiç",
      role: "Clinical Advisor",
      description: "Associate Professor in Pediatric Allergy-Immunology at Uludağ University Hospital. Leads clinical validation and data collection.",
      expertise: ["Pediatric Allergy", "Immunology", "Clinical Validation", "Data Collection"],
      image: "SC"
    },
    {
      id: 4,
      name: "Gülseden Denizci",
      role: "Business & Innovation Consultant",
      description: "Expert in entrepreneurship, innovation, and women's empowerment in deep tech.",
      expertise: ["Entrepreneurship", "Innovation", "Business Development", "Deep Tech"],
      image: "GD"
    }
  ];

  const studentTeam = [
    {
      id: 1,
      name: "Hafize Şanlı",
      role: "UI/UX Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "HS"
    },
    {
      id: 2,
      name: "Ela Semra Sava",
      role: "Flutter Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "ESS"
    },
    {
      id: 3,
      name: "Emre Türkoğlu",
      role: "UI/UX Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "ET"
    },
    {
      id: 4,
      name: "İbrahim Güler",
      role: "Flutter Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "İG"
    },
    {
      id: 5,
      name: "Münib Akar",
      role: "Backend Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "MA"
    },
    {
      id: 6,
      name: "Ali Zekai Deveci",
      role: "Backend Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "AZD"
    }
  ];

  const dataEngineer = {
    id: 7,
    name: "Emir Turgut",
    role: "Data Engineer",
    university: "Muğla Sıtkı Koçman University",
    image: "ET"
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A purpose-driven, interdisciplinary team with a passion for innovation in healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{member.image}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Innovation Team</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A talented group of undergraduate volunteers from statistics, engineering, and medicine, contributing to research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
            {studentTeam.map((student) => (
              <div key={student.id} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{student.image}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{student.name}</h4>
                <p className="text-xs text-blue-600 font-medium mb-2">{student.role}</p>
                <p className="text-xs text-gray-500">{student.university}</p>
              </div>
            ))}
          </div>
          
          {/* Emir Turgut - Data Engineer (Ortalı) */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">{dataEngineer.image}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{dataEngineer.name}</h4>
              <p className="text-xs text-blue-600 font-medium mb-2">{dataEngineer.role}</p>
              <p className="text-xs text-gray-500">{dataEngineer.university}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 