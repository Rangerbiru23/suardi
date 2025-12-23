'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ShoppingBag, Truck, Star, ChevronRight, Leaf, Apple, Circle } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="SUARDI" className="h-10 w-auto rounded-lg" />
              <span className="ml-3 text-2xl font-bold text-green-700">SUARDI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Produk</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Leaf className="absolute -top-2 -left-2 text-green-500 animate-pulse" size={24} />
                <Apple className="absolute -top-2 -right-2 text-red-500 animate-pulse" size={24} />
                <Circle className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-orange-500 animate-pulse" size={24} />
                <div className="bg-white p-4 rounded-full shadow-xl">
                  <img src="/logo.png" alt="SUARDI" className="h-20 w-auto rounded-lg" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">SUARDI</span>
              <br />
              <span className="text-3xl md:text-4xl text-orange-600">Buah Segar Berkualitas</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Penyedia buah-buahan segar terbaik di Cirebon. Kualitas premium, harga terjangkau, dan pengiriman tepat waktu untuk kebutuhan rumah tangga dan bisnis Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center">
                <ShoppingBag className="mr-2" size={20} />
                Pesan Sekarang
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Segar</h3>
              <p className="text-gray-600">Buah-buahan langsung dari kebun, dipetik saat matang sempurna</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman di hari yang sama untuk wilayah Cirebon</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-shadow">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">Hanya buah-buahan terbaik dengan kualitas terjamin</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">SUARDI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SUARDI adalah usaha perdagangan buah-buahan eceran yang berkomitmen menyediakan produk buah segar berkualitas tinggi untuk masyarakat Cirebon dan sekitarnya.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Berlokasi di Dusun 01 Dayeuh, Desa Gumulung Lebak, Kecamatan Greged, Kabupaten Cirebon, kami telah melayani pelanggan dengan berbagai jenis buah-buahan segar pilihan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">Dusun 01 Dayeuh, Gumulung Lebak, Greged, Cirebon</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">0852-8570-3526</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-orange-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                <p className="text-gray-600 mb-4">
                  Menjadi penyedia buah-buahan segar terpercaya yang mendukung gaya hidup sehat masyarakat dengan harga terjangkau.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="text-green-500 mr-2" size={16} />
                    Kualitas terbaik terjamin
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="text-green-500 mr-2" size={16} />
                    Harga kompetitif
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="text-green-500 mr-2" size={16} />
                    Pelayanan ramah
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="text-orange-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600">Berbagai jenis buah-buahan segar pilihan</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Apel Malang', price: 'Rp 25.000/kg', icon: '🍎', color: 'from-red-50 to-red-100' },
              { name: 'Jeruk Sunkist', price: 'Rp 30.000/kg', icon: '🍊', color: 'from-orange-50 to-orange-100' },
              { name: 'Pisang Cavendish', price: 'Rp 20.000/sisir', icon: '🍌', color: 'from-yellow-50 to-yellow-100' },
              { name: 'Anggur Import', price: 'Rp 80.000/kg', icon: '🍇', color: 'from-purple-50 to-purple-100' },
              { name: 'Semangka', price: 'Rp 15.000/kg', icon: '🍉', color: 'from-green-50 to-green-100' },
              { name: 'Melon', price: 'Rp 18.000/kg', icon: '🍈', color: 'from-lime-50 to-lime-100' },
              { name: 'Pepaya California', price: 'Rp 12.000/kg', icon: '🥭', color: 'from-orange-50 to-orange-100' },
              { name: 'Alpukat', price: 'Rp 22.000/kg', icon: '🥑', color: 'from-green-50 to-green-100' }
            ].map((product, index) => (
              <div key={index} className={`bg-gradient-to-br ${product.color} p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}>
                <div className="text-4xl mb-4 text-center">{product.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.price}</p>
                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors">
                  Pesan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600">Siap melayani kebutuhan buah segar Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">Dusun 01 Dayeuh, Gumulung Lebak, Greged, Cirebon, Jawa Barat</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">0852-8570-3526</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@suardifruit.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-orange-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Pesan Sekarang!</h3>
              <p className="mb-6">Dapatkan buah segar berkualitas dengan harga terbaik. Pengiriman cepat ke seluruh wilayah Cirebon.</p>
              <div className="space-y-4">
                <button className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Telepon Sekarang
                </button>
                <button className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center">
                  <Mail className="mr-2" size={20} />
                  Kirim Pesan WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="SUARDI" className="h-8 w-auto rounded-lg mr-3" />
                <span className="text-xl font-bold">SUARDI</span>
              </div>
              <p className="text-gray-400">
                Penyedia buah-buahan segar berkualitas di Cirebon. Kepuasan pelanggan adalah prioritas kami.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Buah Segar Eceran</li>
                <li>Pengiriman Same Day</li>
                <li>Pesan Antar</li>
                <li>Konsultasi Nutrisi</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
                <li>Buka: 06:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SUARDI. All rights reserved. | Buah Segar Berkualitas Cirebon</p>
          </div>
        </div>
      </footer>
    </div>
  )
}