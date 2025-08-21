import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Download, Phone, Mail, MapPin, Brain, BarChart3, Bot, Workflow, Target } from 'lucide-react';

const BrochureLayout = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Data Analytics & Visualization",
      description: "Uncover hidden patterns, trends, and insights trapped in your data."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Modeling & Data Science", 
      description: "Forecast demand, identify risks, and make proactive decisions."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Generative AI Solutions",
      description: "Build custom chatbots, automate content creation, and enhance customer interactions."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Agentic AI Workflow Automation",
      description: "Create intelligent agents that automate complex, multi-step tasks and processes from end-to-end."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "End-to-End Business Use Case Solving",
      description: "From problem definition to deployment and support."
    }
  ];

  const industries = [
    {
      title: "Real Estate",
      solutions: "Predictive pricing models, lead scoring, market trend analysis, investment opportunity identification."
    },
    {
      title: "Supply Chain & Inventory Management", 
      solutions: "Demand forecasting, optimize stock levels, reduce carrying costs, predict delays."
    },
    {
      title: "Warehouse Optimization",
      solutions: "Route planning for picking, space utilization analysis, predictive maintenance for equipment."
    },
    {
      title: "Lead Generation Across Domains",
      solutions: "AI-powered lead scoring, identifying high-value prospects, automating outreach segmentation."
    },
    {
      title: "Franchise Model Building",
      solutions: "Standardizing operations analytics, performance dashboards for franchisees, centralized KPI tracking."
    }
  ];

  const promises = [
    "Competitive & High-Quality Output: Enterprise-grade solutions at a fraction of the cost.",
    "Unlimited Client Support: We are your partners. Your success is our success.", 
    "End-to-End Ownership: We handle everything from data ingestion to model deployment and training.",
    "Clarity & Communication: No jargon. Just clear explanations and measurable results."
  ];

  return (
    <div className="brochure-container">
      {/* Header */}
      <header className="header-nav no-print">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-text-primary rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="heading-2 font-semibold">FutureMind's</span>
            </div>
            <div className="nav-actions">
              <Button 
                onClick={handleDownloadPDF}
                className="btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-announcement">
            <Brain className="w-4 h-4" />
            Data & AI-Driven Consultancy
          </div>
          <h1 className="heading-hero">
            Turn Your Business Data Into Your Greatest Competitive Advantage
          </h1>
          <p className="hero-subtitle body-large">
            Solving Complex Business Problems with Advanced Analytics, Generative AI & Agentic Systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="btn-primary"
              onClick={() => window.open('tel:+918088104708', '_self')}
            >
              Get Free Consultation
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-6">Welcome to FutureMind's</h2>
            <p className="body-large mb-8">
              Led by <strong>Neeraj P C</strong>, a seasoned expert with over 5 years of experience in Bengaluru's tech heartland, 
              FutureMind's is your partner for navigating the future of business. We specialize in transforming raw data into 
              intelligent, automated, and revenue-generating systems.
            </p>
            <div className="hero-announcement inline-flex">
              We don't just provide reports; we provide solutions.
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Services Section */}
      <section className="pad-xl" id="services">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Our Core Expertise Services</h2>
            <p className="body-large">We tailor our cutting-edge expertise to solve your specific challenges:</p>
          </div>
          <div className="voice-grid">
            {services.map((service, index) => (
              <Card key={index} className="voice-card hover-lift p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent-blue-200 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-2">{service.title}</h3>
                    <p className="body-small text-text-secondary">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Industries Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">We Solve Problems For Your Industry</h2>
          </div>
          <div className="ai-grid">
            {industries.map((industry, index) => (
              <Card key={index} className="voice-card hover-lift p-6">
                <h3 className="heading-3 mb-3 text-accent-purple-400">{industry.title}</h3>
                <p className="body-small">{industry.solutions}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Promise Section */}
      <section className="pad-xl bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">The FutureMind's Promise</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-orange-400 mt-3 flex-shrink-0"></div>
                  <p className="body-medium">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pad-xl hero-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 mb-4">Ready to Unlock Your Business Potential?</h2>
            <p className="body-large mb-8">
              Your data is a goldmine. Let us help you excavate it.<br />
              Contact us today for a free consultation. We will analyze your specific use case and outline a clear path to your solution.
            </p>
            
            <Card className="voice-card p-8 max-w-lg mx-auto">
              <h3 className="heading-2 mb-6">FutureMind's</h3>
              <p className="body-small mb-6 text-text-muted">Owned & Operated by Neeraj P C</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-blue-400" />
                  <div>
                    <p className="body-small font-medium">Call / WhatsApp</p>
                    <p className="mono-text">+91 8088104708</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-purple-400" />
                  <div>
                    <p className="body-small font-medium">Email</p>
                    <p className="mono-text">pcneeraj123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-orange-400" />
                  <div>
                    <p className="body-small font-medium">Based in</p>
                    <p className="mono-text">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  className="btn-primary flex-1"
                  onClick={() => window.open('tel:+918088104708', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  className="btn-secondary flex-1"
                  onClick={() => window.open('mailto:pcneeraj123@gmail.com?subject=Business Consultation Inquiry', '_self')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pad-lg bg-text-primary text-white no-print">
        <div className="container">
          <div className="text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_smart-data-agents/artifacts/biqh0mwm_WhatsApp%20Image%202025-08-21%20at%208.17.38%20PM.jpeg" 
              alt="FutureMind's Logo" 
              className="h-8 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <p className="body-small">© 2024 FutureMind's. All rights reserved.</p>
            <p className="caption mt-2">Transforming Business Through Intelligent Data Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrochureLayout;