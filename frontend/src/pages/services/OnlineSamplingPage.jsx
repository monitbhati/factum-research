import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  Target, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  BarChart3
} from 'lucide-react';

export const OnlineSamplingPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" 
          alt="Online Sampling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/85"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Online Sampling
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              Precision-targeted digital recruitment delivering verified respondents across diverse demographics and specialized markets
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">What is Online Sampling?</h2>
            <p className="text-gray-100 leading-relaxed drop-shadow-md">
              Online sampling is the process of recruiting survey respondents through digital channels to participate in market research studies. We maintain verified panels of diverse participants across demographics, industries, and geographies, enabling precise targeting for any research objective.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our Online Sampling Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-pink-700" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Precision Targeting</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced demographic and behavioral targeting ensures you reach exactly the right respondents for your research objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Demographic profiling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Behavioral targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Custom screening</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi-layered validation processes ensure authentic, engaged respondents who provide reliable data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Identity verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Engagement monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Data validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Access to diverse panels across multiple countries and regions for comprehensive market coverage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">50+ countries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Multi-language support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Cultural adaptation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rapid Deployment</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fast sample delivery with real-time monitoring and optimization for efficient fieldwork completion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Quick turnaround</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Real-time tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Automated optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Sample Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-200">
              <Users className="text-pink-700 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Consumer Panels</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                General population and specialized consumer segments across all major demographics and lifestyle categories.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• General Population</li>
                <li>• Age & Gender Segments</li>
                <li>• Income & Education</li>
                <li>• Lifestyle Categories</li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-green-200">
              <BarChart3 className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">B2B Professionals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Decision-makers and professionals across industries, job functions, and company sizes for business research.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• C-Suite Executives</li>
                <li>• IT Decision Makers</li>
                <li>• Healthcare Professionals</li>
                <li>• Industry Specialists</li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-purple-200">
              <Shield className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialty Audiences</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hard-to-reach and niche populations requiring specialized recruitment and engagement strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Medical Conditions</li>
                <li>• High Net Worth</li>
                <li>• Ethnic Minorities</li>
                <li>• Low Incidence Groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our Sampling Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Target Definition</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">We work with you to precisely define your target audience, including demographics, behaviors, and screening criteria.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Panel Selection</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Strategic selection from our verified panel network and partner sources to ensure optimal reach and quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Invitation & Screening</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Targeted invitations with custom screening to ensure participants meet your exact specifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Quality Monitoring</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Real-time monitoring of response quality, completion rates, and data integrity throughout fieldwork.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Delivery & Validation</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Final data validation and delivery with comprehensive quality documentation and sample composition reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6">
            Ready to Launch Your Online Study?
          </h2>
          <p className="text-lg text-gray-100 drop-shadow-md mb-8 max-w-2xl mx-auto">
            Let's discuss your sampling needs and target audience requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-white text-white hover:bg-white/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};