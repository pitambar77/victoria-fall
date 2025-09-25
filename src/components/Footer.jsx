// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#1C1C1C] text-gray-300">
//       {/* Top Section */}
//       <div className="container mx-auto py-12 px-4 md:px-8 flex flex-col  md:flex-row justify-between items-start md:items-center">
//         {/* Logo and Copyright Info */}
//         <div className="mb-8 md:mb-0 md:mr-12">
//           {/* Replace with your logo component or image */}
//           <img
//             src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//             alt="Where To Africa Travel and Tours Logo"
//             className="mb-4 max-w-[50%]"
//           />
//         </div>

//         {/* Zimbabwe Contact Info */}
//         <div className="mb-8 md:mb-0 md:mr-12">
//           <h3 className="text-xl font-semibold mb-2 text-white">Zimbabwe</h3>
//           <p>T: +263 (0)77 5386228</p>
//           <p>E: john.mc@whereto.africa</p>
//         </div>

//         {/* South Africa Contact Info */}
//         <div className="mb-8 md:mb-0">
//           <h3 className="text-xl font-semibold mb-2 text-white">South Africa</h3>
//           <p>T: +27 31 535 2811</p>
//           <p>W: +27 (0)82 555 7203</p>
//           <p>E: john.mc@whereto.africa</p>
//         </div>
       
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#161616] py-6 px-4 md:px-8">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
//           {/* Copyright */}
//           <div className="mb-2 md:mb-0">
//             <p className="text-gray-400">
//               © 2020 Where To Africa Travel (Pty) Ltd. All rights reserved. &nbsp;
//               <a href="#" className="hover:underline text-gray-400">Terms & Conditions</a>
//             </p>
//           </div>

//           {/* Social Media & Scroll to Top */}
//           <div className="flex items-center space-x-4">
//             <p className="text-white uppercase font-semibold">Get Social</p>
//             <a
//               href="#"
//               aria-label="Facebook"
//               className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2v2h2v2h-2v2h-2v-2h-2v-2h2v-2h-2V8h2V6h2v2h2V6h2v2h-2z"/></svg>
//             </a>
            
//             {/* Scroll to Top Button */}
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               aria-label="Scroll to top"
//               className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 focus:outline-none"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] hd ">
      {/* Top Section */}
      <div className="container mx-auto py-20 px-4 md:px-8 ">
        <div className=' grid grid-cols-3 items-center justify-between'>

      
        {/* Logo and Copyright Info */}
        <div className="mb-8 md:mb-0 md:mr-20 ">
          {/* Replace with your logo component or image */}
          <img
            src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
            alt="Where To Africa Travel and Tours Logo"
            className="mb-4 w-full"
          />
        </div>

        {/* Zimbabwe Contact Info */}
        <div className="mb-8 md:mb-0 items-center hd text-[#9d9d9d] ">
          <h3 className="text-xl font-semibold mb-2 text-[#6b6957]">Zimbabwe</h3>
          <p>T: +263 (0)77 5386228</p>
          <p>E: john.mc@whereto.africa</p>
        </div>

        {/* South Africa Contact Info */}
        <div className="mb-8 md:mb-0 hd text-[#9d9d9d]">
          <h3 className="text-xl font-semibold mb-2 text-[#6b6957]">South Africa</h3>
          <p>T: +27 31 535 2811</p>
          <p>W: +27 (0)82 555 7203</p>
          <p>E: john.mc@whereto.africa</p>
        </div>
      </div>
  </div>
      {/* Bottom Bar */}
      <div className="bg-[#252525] py-6 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <div className="mb-2 md:mb-0">
            <p className="text-[#9d9d9d] hd font-semibold ">
              © 2020 Where To Africa Travel (Pty) Ltd. All rights reserved. &nbsp;
              <a href="#" className="hover:underline text-[#9d9d9d]">Terms & Conditions</a>
            </p>
          </div>

          {/* Social Media & Scroll to Top */}
          <div className="flex items-center space-x-4">
            <p className="text-[#9d9d9d] hd uppercase font-semibold">Get Social</p>
            <a
              href="#"
              aria-label="Facebook"
              className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2v2h2v2h-2v2h-2v-2h-2v-2h2v-2h-2V8h2V6h2v2h2V6h2v2h-2z"/></svg>
            </a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;