
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm f-wrap">
  <div className="w-[90%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:flex-row sm:justify-between sm:items-start text-center sm:text-left space-y-10 sm:space-y-0">
    
    {/* Logo & Description */}
    <div>
      <div className="flex items-center space-x-2 text-white text-lg font-bold mb-2">
        <img src="/footer-logo.png" alt="Logo" className="w-6 h-6" /> {/* Replace with actual logo */}
        <span>SafePro VPN</span>
      </div>
      <p className="text-sm mb-4 ">Secure. Private. Unrestricted.</p>
      <div className="flex space-x-4">
        <a href="#"><img src="/social-media/facebook.svg" alt="Facebook" className="w-4 h-4" /></a>
        <a href="#"><img src="/social-media/twitter.png" alt="Twitter" className="w-4 h-4" /></a>
        <a href="#"><img src="/social-media/instagram.svg" alt="Instagram" className="w-4 h-4" /></a>
        <a href="#"><img src="/social-media/linkedin.png" alt="LinkedIn" className="w-4  h-4" /></a>
      </div>
    </div>

    {/* Products */}
    <div>
      <h3 className="text-white font-semibold mb-3">Products</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Download VPN</a></li>
        <li><a href="#" className="hover:text-white">VPN for Windows</a></li>
        <li><a href="#" className="hover:text-white">VPN for Mac</a></li>
        <li><a href="#" className="hover:text-white">VPN for iOS</a></li>
        <li><a href="#" className="hover:text-white">VPN for Android</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-white font-semibold mb-3">Resources</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">What is a VPN?</a></li>
        <li><a href="#" className="hover:text-white">Privacy Guide</a></li>
        <li><a href="#" className="hover:text-white">Server Status</a></li>
        <li><a href="#" className="hover:text-white">VPN Reviews</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-white font-semibold mb-3">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Help Center</a></li>
        <li><a href="#" className="hover:text-white">Contact Us</a></li>
        <li><a href="#" className="hover:text-white">Setup Guides</a></li>
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 py-4 w-[85%] mx-auto flex justify-between items-center text-xs text-gray-500">
    <p>© 2023 SafePro VPN. All rights reserved.</p>
    <p>
      Powered By <a href="#" className="text-cyan-500 hover:underline">TecClub</a>
    </p>
  </div>

  {/* Floating Button */}
  <div className="fixed bottom-5 right-5 bg-cyan-500 text-white rounded-full p-3 shadow-md cursor-pointer">
    <img src="/social-media/footer-corner.svg" alt="Support" className="w-5 h-5" /> {/* Replace with actual support icon */}
  </div>
</footer>

  );
}