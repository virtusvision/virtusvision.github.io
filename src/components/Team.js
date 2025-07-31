import React from 'react';

const Team = () => {
  const coreTeam = [
    {
      id: 1,
      name: "Assist. Prof. Dr. Zeynep Filiz Eren",
      role: "CEO & Co-founder",
      role2: "Virtus R&D Software Inc.",
      description: "Assist. Professor",
      university: "Muğla Sıtkı Koçman University",
      expertise: ["Statistics", "Computer Vision", "AI Research", "Strategy"],
      image: "/team/zeynep-eren.jpg"
    },
    {
      id: 2,
      name: "Hasan Ali Özkan", 
      role: "CTO & Co-founder",
      role2: "Virtus R&D Software Inc.",
      description: "Research Assist.",
      university: "Muğla Sıtkı Koçman University",
      expertise: ["Medical Imaging", "Software Architecture", "Computer Engineering", "Development"],
      image: "/team/hasan-ozkan.jpg"
    }
  ];

  const studentTeam = [
    {
      id: 1,
      name: "Hafize Şanlı",
      role: "UI/UX Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/hafize-sanli.jpg"
    },
    {
      id: 2,
      name: "Ela Semra Sava",
      role: "Flutter Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/ela-semra-sava.jpg"
    },
    {
      id: 3,
      name: "Emre Türkoğlu",
      role: "UI/UX Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/emre-turkoglu.jpg"
    },
    {
      id: 4,
      name: "İbrahim Güler",
      role: "Flutter Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/ibrahim-guler.jpg"
    },
    {
      id: 5,
      name: "Münib Akar",
      role: "Backend Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/munib-akar.jpg"
    },
    {
      id: 6,
      name: "Ali Zekai Deveci",
      role: "Backend Developer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/ali-zekai-deveci.jpg"
    },
    {
      id: 7,
      name: "Emir Turgut",
      role: "Data Engineer",
      university: "Muğla Sıtkı Koçman University",
      image: "/team/emir-turgut.jpg"
    }
  ];

  const advisoryBoard = [
    {
      id: 1,
      name: "Dr. Pelin Deniz Tekneci",
      role: "Strategic Operations & Innovation Advisor",
      image: "/team/pelin-deniz-tekneci.jpg"
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. Ufuk Bal",
      role: "Scientific Advisor for Medical Imaging & Deep Tech AI",
      image: "/team/ufuk-bal.jpg"
    },
    {
      id: 3,
      name: "Güldesen Denizci",
      role: "Strategic Advisor for Innovation & Female Entrepreneurship",
      image: "/team/guldesen-denizci.jpg"
    },
    {
      id: 4,
      name: "Assoc. Prof. Dr. Şükrü Çekiç",
      role: "Clinical Advisor - Pediatric Allergy & Immunology",
      image: "/team/sukru-cekic.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 fade-in-up">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up-delay-1">
            A purpose-driven, interdisciplinary team with a passion for innovation in healthcare.
          </p>
        </div>

        {/* Core Team Section */}
        <div className="mb-20 fade-in-up-delay-1">
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreTeam.map((member, index) => (
              <div 
                key={member.id} 
                className={`leadership-card-modern ${index === 0 ? 'fade-in-up-delay-2' : 'fade-in-right'}`}
                style={{backgroundImage: `url(${member.image})`}}
              >
                <div className="card-content">
                  <div className="leadership-name">{member.name}</div>
                  <div className="leadership-role">{member.role}</div>
                  <div className="leadership-university">{member.description}, {member.university}</div>
                  <div className="leadership-expertise">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Team Section */}
        <div className="mb-10 mt-16 fade-in-up-delay-2">
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            {studentTeam.slice(0, 6).map((student, index) => (
              <div 
                key={student.id} 
                className={`student-card-modern card-hover ${index % 2 === 0 ? 'fade-in-up' : 'fade-in-up-delay-1'}`}
                style={{backgroundImage: `url(${student.image})`}}
              >
                <div className="card-content">
                  <div className="student-name">{student.name}</div>
                  <div className="student-role">{student.role}</div>
                  <div className="student-university">{student.university}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Centered last student - Yatay tasarım */}
          <div className="flex justify-center fade-in-right">
            <div 
              className="student-card-modern card-hover"
              style={{
                backgroundImage: `url(${studentTeam[6].image})`, 
                width: '400px', 
                height: '200px'
              }}
            >
              <div className="card-content">
                <div className="student-name">{studentTeam[6].name}</div>
                <div className="student-role">{studentTeam[6].role}</div>
                <div className="student-university">{studentTeam[6].university}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Board Section */}
        <div className="mt-100 fade-in-up-delay-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center fade-in-up">Advisory Board</h2>
          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-1">
            {advisoryBoard.map((advisor, index) => (
              <div 
                key={advisor.id} 
                className={`advisory-card-modern card-hover ${index % 2 === 0 ? 'fade-in-up-delay-1' : 'fade-in-up-delay-2'}`}
                style={{backgroundImage: `url(${advisor.image})`}}
              >
                <div className="card-content">
                  <div className="advisory-name">{advisor.name}</div>
                  <div className="advisory-role">{advisor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team; 