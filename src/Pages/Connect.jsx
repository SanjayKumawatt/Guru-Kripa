import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';

export default function Connect() {
  const [activeTab, setActiveTab] = useState('tenant'); // 'tenant' | 'landlord'
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulating API call for MERN backend (Replace with real Axios/Fetch call later)
    setTimeout(() => {
      setFormStatus('success');
      // Optional: Reset form after 5 seconds
      // setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Intro & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col pt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Two ways to <br />
              <span className="text-blue-600">get started.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed font-medium mb-12"
            >
              Choose the path that applies to you. Use the form to register your interest, ask a question, or request early access. If you have a question that does not fit either form, write directly to us and we will respond within one working day.
            </motion.p>

            {/* Direct Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm mt-auto"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:talk@gurukripaservice.in" className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                      talk@gurukripaservice.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="font-medium text-slate-600 leading-relaxed">
                      1121/1597, Gandhi Nagar,<br />
                      Bura Gujjar Road, Muktsar, Malout,<br />
                      Punjab - 152101, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Forms */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-6 md:p-10 relative overflow-hidden min-h-[600px] flex flex-col"
            >
              
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  /* --- Success State UI --- */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full my-auto py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received!</h2>
                    <p className="text-lg text-slate-600 font-medium max-w-sm">
                      Thank you for reaching out. Our team will review your details and get back to you within one working day.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-10 text-blue-600 font-bold hover:text-slate-900 transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  /* --- Form UI --- */
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    {/* Modern Custom Tabs */}
                    <div className="flex p-1 bg-slate-100 rounded-2xl mb-10 relative z-10">
                      <button
                        onClick={() => setActiveTab('tenant')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                          activeTab === 'tenant' 
                            ? 'bg-white text-blue-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <Home className="w-4 h-4" /> I am looking for a home
                      </button>
                      <button
                        onClick={() => setActiveTab('landlord')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                          activeTab === 'landlord' 
                            ? 'bg-white text-blue-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <Building className="w-4 h-4" /> I have a property to list
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                      <AnimatePresence mode="wait">
                        
                        {/* --- TENANT FORM --- */}
                        {activeTab === 'tenant' && (
                          <motion.div 
                            key="tenant-form"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 flex-1"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Your Name</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">City & Area looking in</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="e.g. Malviya Nagar, Jaipur" />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Accommodation Type</label>
                                <select required className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700">
                                  <option value="">Select Type</option>
                                  <option value="1BHK">1BHK</option>
                                  <option value="2BHK">2BHK</option>
                                  <option value="3BHK">3BHK</option>
                                  <option value="Studio">Studio</option>
                                  <option value="Room">Room in shared flat</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Your Situation</label>
                                <select required className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700">
                                  <option value="">Select Situation</option>
                                  <option value="Student">Student</option>
                                  <option value="Professional">Working professional</option>
                                  <option value="Family">Family</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Monthly Budget</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="₹15,000" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">When you need to move</label>
                                <select required className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700">
                                  <option value="">Select Timeline</option>
                                  <option value="Immediately">Immediately</option>
                                  <option value="1_month">Within 1 month</option>
                                  <option value="3_months">Within 3 months</option>
                                  <option value="Exploring">Just exploring</option>
                                </select>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* --- LANDLORD FORM --- */}
                        {activeTab === 'landlord' && (
                          <motion.div 
                            key="landlord-form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 flex-1"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Your Name</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="Jane Doe" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Property Location</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="City, Area, Address" />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Property Type</label>
                                <select required className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700">
                                  <option value="">Select Type</option>
                                  <option value="1BHK">1BHK</option>
                                  <option value="2BHK">2BHK</option>
                                  <option value="3BHK">3BHK</option>
                                  <option value="Studio">Studio</option>
                                  <option value="Room">Room</option>
                                  <option value="House">Independent house</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Expected Monthly Rent</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="₹20,000" />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Preferred Tenant</label>
                                <select required className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700">
                                  <option value="">Select Preference</option>
                                  <option value="Students">Students</option>
                                  <option value="Professionals">Working professionals</option>
                                  <option value="Families">Families</option>
                                  <option value="Any">Any</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Availability Date</label>
                                <input required type="date" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* --- SHARED FIELDS (Email, Phone, Textarea) --- */}
                      <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <input required type="email" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="you@example.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Phone Number</label>
                            <input required type="tel" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700" placeholder="+91 XXXXX XXXXX" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Specific requirements or questions <span className="text-slate-400 font-normal">(Optional)</span></label>
                          <textarea rows="3" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 outline-none transition-all font-medium text-slate-700 resize-none" placeholder="Write any specific details here..."></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="mt-10">
                        <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-slate-900 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
                        >
                          {formStatus === 'submitting' ? (
                            <span className="animate-pulse flex items-center gap-2">Processing...</span>
                          ) : (
                            <>
                              {activeTab === 'tenant' ? "I'm Looking for a Home" : "I Have a Property to List"}
                              <Send className="w-5 h-5 ml-1" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}