// "use client";

// import LoginButton from "./auth/LoginButton";
// import { signIn } from "next-auth/react";
// import { Orbitron } from "next/font/google";
// import styles from './typing.module.css';

// const orbitron = Orbitron({ subsets: ["latin"] });

// export default function Page() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
//       <div className="max-w-2xl w-full space-y-8 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm">
//         <div className="text-center space-y-4">
//           <h1 className={`${orbitron.className} text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600`}>
//             Welcome to GenAI
//           </h1>
//           <h2 className="text-2xl text-gray-300">Fonada</h2>
//           <p className={`${styles.typingAnimation} text-gray-400 max-w-md mx-auto`}>
//          Experience the next generation of AI-powered voice solutions 
//           </p>
//         </div>

//         <div className="mt-8 space-y-4 max-w-md mx-auto">
//           <LoginButton />
          
//           <button
//             onClick={() => signIn("facebook")}
//             className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
//           >
//             <FacebookIcon className="w-5 h-5" />
//             Sign in with Facebook
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// // Facebook icon component
// const FacebookIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} viewBox="0 0 24 24">
//     <path
//       fill="currentColor"
//       d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//     />
//   </svg>
// );
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Stethoscope, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F1117] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 bg-[#161923]/50 backdrop-blur-sm">
        <div className="flex items-center">
          <Image 
            src="/img/logo.webp" 
            alt="Fonada Logo" 
            width={150} 
            height={50} 
            className="h-12 w-auto"
          />
        </div>
        <Button 
          className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] hover:opacity-90 transition-opacity"
          asChild
        >
          <Link href="/login">Get Started</Link>
        </Button>
      </header>

      <main className="flex-grow px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] inline-block text-transparent bg-clip-text">
              Welcome to GenAI for Healthcare
            </h1>
            <p className="text-xl mb-8 text-gray-400">
              Experience the next generation of AI-powered solutions for medical practices
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/login">Try It Now</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 -mx-6 md:-mx-12 lg:-mx-24 bg-[#161923]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] inline-block text-transparent bg-clip-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Calendar className="w-8 h-8 text-[#4F7FFF]" />,
                  title: "Appointment Booking", 
                  description: "Streamline patient scheduling with our intuitive booking system." 
                },
                { 
                  icon: <FileText className="w-8 h-8 text-[#7F6AFF]" />,
                  title: "Report Retrieval", 
                  description: "Securely access and manage patient reports with ease." 
                },
                { 
                  icon: <Stethoscope className="w-8 h-8 text-[#9F5AFF]" />,
                  title: "Test Booking", 
                  description: "Efficiently schedule and manage medical tests for patients." 
                },
                { 
                  icon: <MessageCircle className="w-8 h-8 text-[#4F7FFF]" />,
                  title: "Medical Queries", 
                  description: "AI-powered assistance for various medical-related inquiries." 
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#1E2230] p-6 rounded-lg border border-gray-800">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] inline-block text-transparent bg-clip-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$99/mo", features: ["Appointment Booking", "Basic Report Access", "Email support"] },
                { name: "Pro", price: "$299/mo", features: ["All Basic features", "Advanced Analytics", "24/7 Priority support"] },
                { name: "Enterprise", price: "Custom", features: ["All Pro features", "Custom Integration", "Dedicated account manager"] }
              ].map((plan, index) => (
                <div key={index} className="bg-[#1E2230] p-6 rounded-lg border border-gray-800 text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] inline-block text-transparent bg-clip-text">
                    {plan.price}
                  </p>
                  <ul className="mb-6 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-2 flex items-center text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-[#4F7FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#4F7FFF] to-[#9F5AFF] hover:opacity-90 transition-opacity"
                  >
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#161923] py-6 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="/img/logo.webp" 
              alt="Fonada Logo" 
              width={100} 
              height={33} 
              className="h-8 w-auto"
            />
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm opacity-80 hover:opacity-100">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm opacity-80 hover:opacity-100">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm opacity-80 hover:opacity-100">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm opacity-80 hover:opacity-100">Privacy Policy</Link></li>
            </ul>
          </nav>
          <div className="text-gray-400 text-xs opacity-70">
            <p>&copy; {new Date().getFullYear()} Fonada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

