import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Download, Phone, Mail, MapPin, Brain, BarChart3, Bot, Workflow, Target } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const BrochureLayout = () => {
  const handleDownloadPDF = () => {
    const element = document.querySelector('.brochure-container');
    const opt = {
      margin: 0.5,
      filename: 'FutureMinds-Brochure.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Hide elements that shouldn't appear in PDF
    const printElements = document.querySelectorAll('.no-print');
    printElements.forEach(el => el.style.display = 'none');
    
    html2pdf().set(opt).from(element).save().then(() => {
      // Restore hidden elements
      printElements.forEach(el => el.style.display = '');
    });
  };

  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Competitive Intelligence Through Data",
      description: "Transform raw business data into strategic advantages that put you ahead of competition.",
      impact: "30-50% cost reduction"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Business Intelligence", 
      description: "Forecast market changes, customer behavior, and operational needs before they impact your bottom line.",
      impact: "40% faster decision making"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Revenue-Generating AI Systems",
      description: "Custom AI solutions that don't just cut costs—they create new profit streams and enhance customer value.",
      impact: "25% revenue increase potential"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Intelligent Process Automation",
      description: "End-to-end workflow automation that eliminates manual errors and scales your best business decisions.",
      impact: "80% manual task elimination"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strategic Risk Mitigation",
      description: "AI-powered risk monitoring and predictive alerts that prevent costly business blind spots.",
      impact: "60% risk prevention rate"
    }
  ];

  const industries = [
    {
      title: "Real Estate & Property Development",
      solutions: "AI-powered pricing optimization, predictive market analysis, and automated lead qualification systems that maximize property ROI and accelerate sales cycles.",
      impact: "35% faster sales closure"
    },
    {
      title: "Supply Chain & Logistics", 
      solutions: "Intelligent demand forecasting, automated inventory optimization, and predictive maintenance systems that eliminate stockouts and reduce carrying costs.",
      impact: "45% inventory cost reduction"
    },
    {
      title: "Manufacturing & Warehouse Operations",
      solutions: "Smart routing algorithms, predictive equipment maintenance, and automated quality control systems that maximize throughput and minimize downtime.",
      impact: "50% operational efficiency gain"
    },
    {
      title: "Sales & Lead Generation",
      solutions: "AI-driven prospect scoring, automated qualification workflows, and predictive customer journey mapping that converts more leads into revenue.",
      impact: "60% lead conversion improvement"
    },
    {
      title: "Franchise & Multi-Location Business",
      solutions: "Centralized performance analytics, standardized operations dashboards, and predictive franchise success modeling for scalable growth.",
      impact: "40% operational consistency increase"
    }
  ];

  const promises = [
    {
      title: "Enterprise-Grade Solutions at Startup Speed",
      description: "You get Fortune 500-level AI systems without the Fortune 500 price tag or timeline. Quality that scales, delivered at the pace your business demands."
    },
    {
      title: "Unlimited Strategic Support", 
      description: "Your success becomes our obsession. Unlimited consultations, continuous optimizations, and strategic guidance—because your growth drives our reputation."
    },
    {
      title: "Complete Ownership & Accountability",
      description: "From initial strategy through final deployment and beyond, we own every aspect of your transformation. No finger-pointing, no gaps in service—just results."
    },
    {
      title: "Crystal-Clear Communication",
      description: "No technical jargon, no confusing reports. Every recommendation comes with clear business impact, measurable ROI, and actionable next steps."
    }
  ];

  return (
    <div className="brochure-container">
      {/* Header */}
      <header className="header-nav no-print">
        <div className="container">
          <div className="flex items-center justify-between">
            <img 
              src="https://customer-assets.emergentagent.com/job_smart-data-agents/artifacts/v5g5guav_WhatsApp%20Image%202025-08-21%20at%208.17.38%20PM.jpeg" 
              alt="FutureMind's Logo" 
              className="logo h-12 w-auto"
            />
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
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_smart-data-agents/artifacts/v5g5guav_WhatsApp%20Image%202025-08-21%20at%208.17.38%20PM.jpeg" 
              alt="FutureMind's Logo" 
              className="w-64 h-auto mx-auto mb-6"
            />
          </div>
          <div className="hero-announcement">
            <Brain className="w-4 h-4" />
            Data & AI-Driven Consultancy
          </div>
          <h1 className="heading-hero">
            Every Industry Leader Faces the Same Critical Choice: Transform or Fall Behind
          </h1>
          <p className="hero-subtitle body-large">
            Your competitors are already leveraging AI and data analytics to cut costs, reduce errors, and unlock new revenue streams. 
            The question isn't whether you'll modernize—it's whether you'll lead the transformation or scramble to catch up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="btn-primary"
              onClick={() => window.open('tel:+918088104708', '_self')}
            >
              Schedule Strategic Consultation
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
            >
              See Transformation Pillars
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="pad-xl bg-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-6">This Isn't About Technology—It's About Your Future Market Position</h2>
            <p className="body-large mb-8">
              As a seasoned CTO with 5+ years architecting business transformations across Bengaluru's most competitive markets, 
              I've witnessed countless companies struggle with the same fundamental challenge: <strong>their data is their goldmine, but they're mining it with outdated tools.</strong>
            </p>
            <div className="hero-announcement inline-flex mb-8">
              We don't just implement solutions—we engineer your competitive advantage.
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="voice-card p-6 text-left">
                <h3 className="heading-3 mb-4 text-accent-orange-400">The Reality Check</h3>
                <ul className="space-y-3 body-medium">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-orange-400 mt-2 flex-shrink-0"></div>
                    <span>Your competitors are reducing operational costs by 30-50% through AI automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-orange-400 mt-2 flex-shrink-0"></div>
                    <span>Manual processes are costing you thousands in preventable errors monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-orange-400 mt-2 flex-shrink-0"></div>
                    <span>Revenue opportunities are slipping through cracks in your data analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-orange-400 mt-2 flex-shrink-0"></div>
                    <span>Business risks remain invisible without predictive intelligence</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="voice-card p-6 text-left">
                <h3 className="heading-3 mb-4 text-accent-blue-400">Your Strategic Advantage</h3>
                <ul className="space-y-3 body-medium">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-blue-400 mt-2 flex-shrink-0"></div>
                    <span>Custom AI systems that eliminate 80%+ of manual operational tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-blue-400 mt-2 flex-shrink-0"></div>
                    <span>Predictive analytics that identify profit opportunities before competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-blue-400 mt-2 flex-shrink-0"></div>
                    <span>Intelligent automation that scales your best decisions across operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-blue-400 mt-2 flex-shrink-0"></div>
                    <span>Real-time risk monitoring that prevents costly business blindspots</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pad-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-6">Why Generic Solutions Fail—And Our Tailored Approach Succeeds</h2>
            <p className="body-large mb-8">
              Every business leader I've partnered with initially thought their challenges were unique. The truth? 
              <strong>Your challenges ARE unique—but the underlying patterns are predictable.</strong> That's where our strategic advantage lies.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-purple-400" />
                </div>
                <h3 className="heading-3 mb-2">Deep Use Case Analysis</h3>
                <p className="body-small">We dissect your specific business model, not apply generic templates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent-blue-400" />
                </div>
                <h3 className="heading-3 mb-2">Custom AI Architecture</h3>
                <p className="body-small">Purpose-built systems that integrate seamlessly with your operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Workflow className="w-8 h-8 text-accent-orange-400" />
                </div>
                <h3 className="heading-3 mb-2">End-to-End Ownership</h3>
                <p className="body-small">From strategy to deployment to continuous optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Services Section */}
      <section className="pad-xl" id="services">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Four Pillars of Business Transformation</h2>
            <p className="body-large">Every successful transformation rests on these strategic foundations:</p>
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
                    <p className="body-small text-text-secondary mb-3">{service.description}</p>
                    <div className="text-xs font-medium text-accent-blue-400 uppercase tracking-wide">
                      ROI Impact: {service.impact}
                    </div>
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
            <h2 className="heading-1 mb-4">Proven Transformation Across High-Stakes Industries</h2>
            <p className="body-large">Our strategic approach has delivered measurable results across sectors where precision and profitability matter most:</p>
          </div>
          <div className="ai-grid">
            {industries.map((industry, index) => (
              <Card key={index} className="voice-card hover-lift p-6">
                <h3 className="heading-3 mb-3 text-accent-purple-400">{industry.title}</h3>
                <p className="body-small mb-4">{industry.solutions}</p>
                <div className="text-xs font-medium text-accent-purple-400 uppercase tracking-wide">
                  Business Impact: {industry.impact}
                </div>
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
            <h2 className="heading-1 mb-4">Your Success Is Our Sole Performance Metric</h2>
            <p className="body-large mb-8">
              This isn't a vendor relationship—it's a strategic partnership where your competitive advantage becomes our shared mission.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {promises.map((promise, index) => (
                <Card key={index} className="voice-card p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent-orange-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="heading-3 mb-2 text-accent-orange-400">{promise.title}</h3>
                      <p className="body-medium">{promise.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="hero-announcement inline-flex mb-6">
                Strategic Partnership Guarantee
              </div>
              <p className="body-large max-w-3xl mx-auto">
                <strong>When you partner with FutureMind's, you're not hiring a consultant—you're acquiring a strategic technology officer</strong> 
                dedicated to your market dominance. Every system we build, every insight we deliver, every automation we deploy serves one purpose: 
                making your business more profitable, more efficient, and more competitive than it was yesterday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pad-xl hero-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 mb-4">Your Next Move Determines Your Market Position</h2>
            <p className="body-large mb-8">
              <strong>Every day you delay transformation is a day your competitors gain ground.</strong><br />
              Schedule a free, no-obligation strategic consultation where we'll analyze your specific business challenges and present a tailored roadmap for AI-driven growth.
            </p>
            
            <div className="hero-announcement inline-flex mb-8">
              Free Strategic Consultation • Custom Solution Roadmap • Zero Commitment Required
            </div>
            
            <Card className="voice-card p-8 max-w-lg mx-auto">
              <h3 className="heading-2 mb-2">Ready to Lead Your Industry?</h3>
              <p className="body-small mb-6 text-text-muted">
                Connect directly with <strong>Neeraj P C</strong><br />
                Chief Technology Strategist • 5+ Years Transforming Bengaluru Businesses
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-blue-400" />
                  <div>
                    <p className="body-small font-medium">Direct Line / WhatsApp</p>
                    <p className="mono-text">+91 8088104708</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-purple-400" />
                  <div>
                    <p className="body-small font-medium">Strategic Consultation</p>
                    <p className="mono-text">pcneeraj123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-orange-400" />
                  <div>
                    <p className="body-small font-medium">Serving All Industries From</p>
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
                  Schedule Call Now
                </Button>
                <Button 
                  className="btn-secondary flex-1"
                  onClick={() => window.open('mailto:pcneeraj123@gmail.com?subject=Strategic Business Transformation Consultation&body=Hi Neeraj,%0D%0A%0D%0AI\'m interested in exploring how AI and data analytics can transform my business operations and give us a competitive advantage.%0D%0A%0D%0AMy Industry: [Please specify]%0D%0ACompany: [Company name]%0D%0ACurrent Challenge: [Brief description]%0D%0A%0D%0APlease let me know your availability for a strategic consultation.%0D%0A%0D%0ABest regards', '_self')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Custom Roadmap
                </Button>
              </div>
              
              <p className="caption mt-4 text-center">
                <strong>Response Guarantee:</strong> Every inquiry receives a strategic response within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pad-lg bg-text-primary text-white no-print">
        <div className="container">
          <div className="text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_smart-data-agents/artifacts/v5g5guav_WhatsApp%20Image%202025-08-21%20at%208.17.38%20PM.jpeg" 
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