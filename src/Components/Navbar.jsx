import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end space-x-4 py-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">Homepage</a>
            <a href="/owner" className="text-gray-700 hover:text-gray-900">Owner</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;