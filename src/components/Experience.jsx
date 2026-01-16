// components/Experience.jsx - Fixed for no scrollbars
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Assistant Director/ Public Awareness and Empowerment",
      company: "Communications Authority of Kenya",
      period: "05/2025 - Present",
      achievements: [
        "Head of Public Awareness and Empowerment Function: Spearhead strategic planning, budgets, and performance contracts.",
        "Strategic Leadership: Provide leadership for business process improvement.",
        "Local, Regional and International Leadership: Vice-Rapporteur at ITU-D Study Group 1 and Chairperson at EACO Working Party I.",
        "National Leadership on Child Online Protection: Co-chaired Technical Working Group on Child Online Protection and Safety.",
        "Consumer Protection and Regulatory Impact: Designed ICT accessibility programs for Persons with Disabilities.",
        "Policy Regulation and Market Frameworks: Designed market structures, licensing frameworks, and spectrum allocation mechanisms.",
        "Stakeholder Engagement: Built ecosystem of over 50 stakeholders for consumer education programs.",
        "Corporate Governance: Spearheaded implementation of governance principles.",
        "Team Management and Development: Led supervision, coaching, and mentoring of staff."
      ]
    },
    {
      role: "Ag. Deputy Director, Public Education and Awareness",
      company: "Communications Authority of Kenya",
      period: "02/2025 - 05/2025",
      achievements: [
        "Head of Public Education and Awareness: Led departmental planning and budgeting.",
        "Strategic Leadership: Ensured continuous improvement of business processes.",
        "Regulatory Interventions: Oversaw adaptive regulatory policies for consumer protection.",
        "Oversight of Consumer Education Programme: Aligned initiatives with regulatory goals.",
        "Performance Management: Implemented robust performance management system.",
        "Corporate Governance: Ensured adherence to governance principles.",
        "Team Management: Provided strategic leadership and development for staff."
      ]
    },
    {
      role: "Principal Officer (Manager), Consumer Education and Outreach",
      company: "Communications Authority of Kenya",
      period: "01/2024 - 12/2024",
      achievements: [
        "Acting Head of Public Education and Awareness: Provided strategic leadership and ensured continuity.",
        "Strategic Planning: Integrated consumer empowerment into strategic plans.",
        "Consumer Research and Insights: Led data-driven policymaking.",
        "Programme Management: Project lead for Consumer Education and Empowerment Programmes.",
        "Program Execution: Designed and led Child Online Safety Programme and County ICT Consumer Forums.",
        "Emerging Consumer Issues Research: Anticipated risks and shaped regulatory responses.",
        "Public Awareness Campaigns: Drove multi-channel consumer education activities."
      ]
    },
    {
      role: "Personal Assistant to the Acting Director General and Principal Officer Consumer Education and Outreach",
      company: "Communications Authority of Kenya",
      period: "11/2023 - 01/2024",
      achievements: [
        "Executive Advisory: Provided data-driven insights and risk mitigation.",
        "Strategy Execution: Translated CEO vision into actionable plans.",
        "Organizational Efficiency: Streamlined decision-making and improved workflows.",
        "Stakeholder Management: Aligned internal and external interests.",
        "Leadership Alignment: Bridged leadership teams and maintained accountability.",
        "Governance and Policy Alignment: Ensured all documents aligned with Authority's mandate."
      ]
    },
    {
      role: "Principal Officer (Manager), Consumer Education and Outreach",
      company: "Communications Authority of Kenya",
      period: "08/2022 - 11/2023",
      achievements: [
        "Resource in Licence Renewal Process and Spectrum Assignment Mechanism design.",
        "Strategic Management: Developed Authority's strategic plan initiatives.",
        "Redesigned County ICT Consumer Forum Programme (Kikao Kikuu).",
        "Led design of National Survey on Child Online Protection and Safety.",
        "Resource in development of Authority's Strategic Plan (2023-2027).",
        "Project Lead for Consumer Behaviour and Trends Survey."
      ]
    },
    {
      role: "Acting Manager, Research and Consumer Information",
      company: "Communications Authority of Kenya",
      period: "10/2017 - 08/2022",
      achievements: [
        "Programme Lead: Redesigned Consumer Protection and Empowerment Programme.",
        "Relaunched Phase II of Child Online Protection Programme.",
        "Executed over 17 projects under Child Online Protection Programme.",
        "Developed Draft Industry Guidelines for Child Online Protection in Kenya.",
        "Change Management Lead for Business Process Reengineering and Automation.",
        "Developed Business Continuity Business Case and Charter.",
        "Strategic Management: Participated in corporate performance negotiations."
      ]
    },
    {
      role: "Assistant Manager, Consumer Education and Outreach",
      company: "Communications Authority of Kenya",
      period: "04/2014 - 08/2017",
      achievements: [
        "Programme Lead: Launched Phase I of Child Online Protection Programme.",
        "Launched County ICT Consumer Programme.",
        "Change Management Lead for Business Process Reengineering.",
        "Department Lead: Developed and monitored departmental budgets.",
        "Strategic Management: Participated in strategic planning and performance contracts."
      ]
    },
    {
      role: "Officer I, Research and Consumer Information",
      company: "Communications Commission of Kenya (Now Communications Authority of Kenya)",
      period: "07/2011 - 04/2014",
      achievements: [
        "Project Lead: Automation of departmental processes.",
        "Developed consumer behaviour and trends indicators.",
        "Designed strategy for consumer information dissemination.",
        "Department Lead: Budget and performance contract monitoring.",
        "Strategic Management: Participated in strategic planning.",
        "Designed and implemented annual consumer forums."
      ]
    },
    {
      role: "Officer II, Research and Consumer Information",
      company: "Communications Commission of Kenya (Now Communications Authority of Kenya)",
      period: "01/2007 - 06/2011",
      achievements: [
        "Project Lead: Development and monitoring of Service Charter Standards.",
        "Programme Lead: Designed consumer education and outreach programmes.",
        "Department Lead: Budget and performance contract management.",
        "Implemented Authority's strategic plan initiatives.",
        "Designed and implemented annual consumer forums."
      ]
    },
    {
      role: "Officer, Operations and Customer Service",
      company: "Jambo Telkom Limited",
      period: "08/2005 - 12/2006",
      achievements: [
        "Programme Lead: Market Research on Internet Service Providers.",
        "Programme Executive: Prepared business proposals for ISP products.",
        "Managed Customer Relationship Management System and Services."
      ]
    },
    {
      role: "Telecoms Controller",
      company: "Telkom Kenya Limited",
      period: "05/2005 - 08/2005",
      achievements: [
        "Programme Executive: Designed and undertook research and surveys.",
        "Developed and implemented Sales and Customer Service SOPs.",
        "Telecoms Analyst: Prepared regulatory compliance reports.",
        "Developed processes for automation of billing function (e-billing)."
      ]
    },
    {
      role: "Assistant Telecoms Controller (ATC)",
      company: "Telkom Kenya Limited",
      period: "06/2004 - 05/2005",
      achievements: [
        "Customer Service Management: Managed cutover from analogue to digital exchanges.",
        "Telecoms Analyst: Prepared regulatory compliance reports.",
        "Programme Executive: Prepared Customer Service training materials."
      ]
    }
  ];

  return (
    <section id="experience" className="mb-16 w-full overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Work Experience</h2>
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300 w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-3 md:mb-0 md:pr-4 flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 break-words">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm md:text-base break-words">
                    {exp.company}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium self-start md:self-center whitespace-nowrap mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 break-words">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;