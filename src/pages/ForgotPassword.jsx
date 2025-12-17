import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Stud from "../assets/students.jpg"; // Reusing your background

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send reset email would go here
    console.log("Reset link sent to:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-20 pb-10 flex items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* 1. BACKGROUND (Consistent with Auth Page) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Stud} 
          alt="Page Background" 
          className="w-full h-full object-cover blur-[2px] opacity-20" 
        />
        <div className="absolute inset-0 bg-slate-900/80"></div> 
      </div>

      {/* 2. THE CARD */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10 text-center">
        
        {!isSubmitted ? (
          /* STATE A: INPUT FORM */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-black text-slate-900">Forgot Password?</h1>
              <p className="text-slate-500 font-medium text-sm">
                No worries! Enter your email and we will send you a reset link.
              </p>
            </div>

            <div className="relative group text-left">
              <Mail className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-orange-500 font-medium text-slate-900 transition-all" 
              />
            </div>

            <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 text-sm">
              Send Reset Link
            </button>

            <Link to="/auth" className="flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm font-bold transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Log In
            </Link>
          </form>
        ) : (
          /* STATE B: SUCCESS MESSAGE */
          <div className="space-y-6 py-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-black text-slate-900">Check your mail</h1>
              <p className="text-slate-500 font-medium text-sm max-w-xs mx-auto">
                We have sent a password recover instructions to your email.
              </p>
            </div>
            
            <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 text-sm">
              Open Email App
            </button>

            <div className="pt-4">
               <p className="text-xs text-slate-400 font-medium">Did not receive the email? <button onClick={() => setIsSubmitted(false)} className="text-orange-600 underline hover:text-orange-700">Click to resend</button></p>
            </div>
            
            <Link to="/auth" className="flex items-center justify-center text-slate-400 hover:text-slate-600 text-sm font-bold transition-colors mt-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Log In
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default ForgotPassword;