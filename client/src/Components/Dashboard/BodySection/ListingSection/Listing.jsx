import React from 'react';
import { ArrowRight, Home, DollarSign, Users, BarChart, Phone, Mail, MapPin } from 'lucide-react';

const Listing = () => {
  const mainStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f0f7ff, #e8eeff)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  };

  const containerStyles = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px'
  };

  const cardStyles = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    marginBottom: '32px',
    transition: 'all 0.3s ease'
  };

  const headerStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: '16px'
  };

  const subheaderStyles = {
    fontSize: '1.25rem',
    color: '#4b5563',
    lineHeight: '1.6',
    marginBottom: '24px'
  };

  const featureGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  };

  const featureCardStyles = {
    background: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease'
  };

  const featureIconContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const featureTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginLeft: '12px',
    color: '#1f2937'
  };

  const advantagesSectionStyles = {
    background: '#eef2ff',
    borderRadius: '8px',
    padding: '24px',
    marginTop: '24px'
  };

  const tipsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '24px'
  };

  const tipBoxStyles = {
    padding: '24px',
    borderRadius: '8px',
    background: '#f0fdf4'
  };

  const pitfallBoxStyles = {
    padding: '24px',
    borderRadius: '8px',
    background: '#faf5ff'
  };

  const contactSectionStyles = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    marginBottom: '32px'
  };

  const contactGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginTop: '24px'
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: '#f8fafc',
    borderRadius: '8px'
  };

  const footerStyles = {
    background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
    color: 'white',
    padding: '32px 0',
    textAlign: 'center',
    marginTop: '48px'
  };

  const features = [
    {
      icon: <Home style={{color: '#4f46e5'}} size={24} />,
      title: "Smart Room Management",
      description: "Efficiently manage all your room-related expenses with our intuitive system."
    },
    {
      icon: <DollarSign style={{color: '#10b981'}} size={24} />,
      title: "Cost Tracking",
      description: "Keep detailed records of all expenses and split costs fairly among roommates."
    },
    {
      icon: <Users style={{color: '#3b82f6'}} size={24} />,
      title: "Roommate Coordination",
      description: "Improve communication and coordination between all room occupants."
    },
    {
      icon: <BarChart style={{color: '#8b5cf6'}} size={24} />,
      title: "Expense Analytics",
      description: "View detailed analytics and reports of your room expenses over time."
    }
  ];

  return (
    <div style={mainStyles}>
      <div style={containerStyles}>
        {/* Hero Section */}
        <div style={cardStyles}>
          <h1 style={headerStyles}>Room Expenses Management</h1>
          <p style={subheaderStyles}>
            Take control of your room expenses with our comprehensive management system.
            Track costs, split bills, and maintain transparency with your roommates.
          </p>
        </div>

        {/* Features Grid */}
        <div style={featureGridStyles}>
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyles}>
              <div style={featureIconContainerStyles}>
                {feature.icon}
                <h3 style={featureTitleStyles}>{feature.title}</h3>
              </div>
              <p style={{color: '#4b5563'}}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div style={cardStyles}>
          <h2 style={{...headerStyles, fontSize: '2rem'}}>About Room Expenses</h2>
          <p style={{color: '#4b5563', lineHeight: '1.6', marginBottom: '24px'}}>
            Room expenses are essential to managing a household or shared living space.
            They include rent, utilities, maintenance, and other costs associated with
            maintaining a room. Properly managing these expenses can save money, prevent
            disputes, and ensure a smooth living experience for everyone involved.
          </p>

          <div style={advantagesSectionStyles}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#4f46e5', marginBottom: '16px'}}>
              Advantages of Managing Room Expenses
            </h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {[
                "Better financial management",
                "Prevents conflicts between roommates",
                "Helps in budgeting and saving money",
                "Ensures fair distribution of expenses",
                "Reduces stress by having a clear plan"
              ].map((item, index) => (
                <li key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#4b5563'}}>
                  <ArrowRight style={{color: '#4f46e5', marginRight: '8px'}} size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tips Section */}
        <div style={cardStyles}>
          <h2 style={{...headerStyles, fontSize: '2rem'}}>Tips for Effective Expense Management</h2>
          <div style={tipsGridStyles}>
            <div style={tipBoxStyles}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#047857', marginBottom: '12px'}}>
                Best Practices
              </h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#4b5563'}}>
                <li style={{marginBottom: '8px'}}>• Set clear payment deadlines</li>
                <li style={{marginBottom: '8px'}}>• Keep all receipts organized</li>
                <li style={{marginBottom: '8px'}}>• Use digital payment methods</li>
                <li style={{marginBottom: '8px'}}>• Regular expense reviews</li>
              </ul>
            </div>
            <div style={pitfallBoxStyles}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#7c3aed', marginBottom: '12px'}}>
                Common Pitfalls to Avoid
              </h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#4b5563'}}>
                <li style={{marginBottom: '8px'}}>• Delayed payments</li>
                <li style={{marginBottom: '8px'}}>• Poor documentation</li>
                <li style={{marginBottom: '8px'}}>• Unclear splitting rules</li>
                <li style={{marginBottom: '8px'}}>• Ignoring small expenses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div style={contactSectionStyles}>
          <h2 style={{...headerStyles, fontSize: '2rem'}}>Contact Us</h2>
          <p style={subheaderStyles}>
            Get in touch with us for any queries or support regarding room expense management.
          </p>
          <div style={contactGridStyles}>
            <div style={contactItemStyles}>
              <Phone size={24} style={{color: '#4f46e5'}} />
              <div>
                <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937'}}>Phone</h3>
                <p style={{color: '#4b5563'}}>+91 6305622539</p>
              </div>
            </div>
            <div style={contactItemStyles}>
              <Mail size={24} style={{color: '#4f46e5'}} />
              <div>
                <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937'}}>Email</h3>
                <p style={{color: '#4b5563'}}>nagasaik13@gmail.com</p>
              </div>
            </div>
            <div style={contactItemStyles}>
              <MapPin size={24} style={{color: '#4f46e5'}} />
              <div>
                <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937'}}>Address</h3>
                <p style={{color: '#4b5563'}}>Killa Road Kondapalli, 521228</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={footerStyles}>
        <div style={{maxWidth: '100%', margin: '0 auto', padding: '0 20px'}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px'}}>
            Room Expense Management
          </h3>
          <p style={{marginBottom: '16px'}}>
            Developed by KILARU NAGA SAI
          </p>
          <p style={{color: '#e0e7ff'}}>
            © 2025 Room Expense Management. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Listing;