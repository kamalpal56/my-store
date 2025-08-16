export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Filters */}
        <div>
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Elektronik</a></li>
          </ul>
          <p className="mt-4 text-sm">© 2024 American</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
