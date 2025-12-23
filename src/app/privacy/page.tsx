import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - SUARDI Buah Segar',
  description: 'Kebijakan privasi SUARDI - Penyedia buah-buahan segar berkualitas di Cirebon',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center mb-6">
              <img src="/logo.png" alt="SUARDI" className="h-10 w-auto rounded-lg mr-3" />
              <span className="text-2xl font-bold text-green-700">SUARDI</span>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Kebijakan Privasi SUARDI Buah Segar</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-700 mb-4">
                Selamat datang di SUARDI Buah Segar. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan website dan layanan SUARDI, Anda menyetujui praktik privasi yang dijelaskan dalam kebijakan ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informasi Pribadi</h3>
              <p className="text-gray-700 mb-4">
                Kami dapat mengumpulkan informasi pribadi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nama lengkap</li>
                <li>Nomor telepon</li>
                <li>Alamat email</li>
                <li>Alamat pengiriman</li>
                <li>Informasi pesanan</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Informasi Non-Pribadi</h3>
              <p className="text-gray-700 mb-4">
                Kami juga mengumpulkan informasi non-pribadi secara otomatis:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Alamat IP</li>
                <li>Jenis browser</li>
                <li>Waktu akses</li>
                <li>Halaman yang dikunjungi</li>
                <li>Informasi perangkat</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
              <p className="text-gray-700 mb-4">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Memproses dan mengirim pesanan Anda</li>
                <li>Memberikan layanan pelanggan</li>
                <li>Menginformasikan promo dan produk baru</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Melindungi dari aktivitas penipuan</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
              <p className="text-gray-700 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Dengan persetujuan Anda</li>
                <li>Untuk memproses pesanan (jasa pengiriman)</li>
                <li>Mematuhi hukum atau perintah pengadilan</li>
                <li>Melindungi hak, properti, atau keselamatan kami</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
              <p className="text-gray-700 mb-4">
                SUARDI berkomitmen untuk melindungi keamanan informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Prosedur keamanan fisik dan digital</li>
                <li>Pelatihan reguler staf tentang privasi data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
              <p className="text-gray-700 mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Mengakses informasi pribadi Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus akun dan data pribadi</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Mempersonalisasi pengalaman pengguna</li>
              </ul>
              <p className="text-gray-700">
                Anda dapat mengatur cookies melalui pengaturan browser Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan</h2>
              <p className="text-gray-700">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website atau email. Penggunaan lanjutan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami, silakan hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">SUARDI Buah Segar</p>
                <p className="text-gray-700">Dusun 01 Dayeuh, Gumulung Lebak, Greged, Cirebon</p>
                <p className="text-gray-700">Telepon: 0852-8570-3526</p>
                <p className="text-gray-700">Email: info@suardifruit.com</p>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}