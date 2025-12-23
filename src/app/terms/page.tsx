import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions - SUARDI Buah Segar',
  description: 'Syarat dan ketentuan SUARDI - Penyedia buah-buahan segar berkualitas di Cirebon',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center mb-6">
              <img src="/logo.png" alt="SUARDI" className="h-10 w-auto rounded-lg mr-3" />
              <span className="text-2xl font-bold text-green-700">SUARDI</span>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-gray-600">Syarat dan Ketentuan Layanan SUARDI Buah Segar</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-6">
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
                Selamat datang di SUARDI Buah Segar. Syarat dan Ketentuan ini mengatur penggunaan website dan layanan yang disediakan oleh SUARDI. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700">
                Jika Anda tidak setuju dengan bagian manapun dari syarat dan ketentuan ini, harap jangan menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definisi</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>"SUARDI"</strong> adalah usaha perdagangan buah-buahan eceran yang beralamat di Dusun 01 Dayeuh, Gumulung Lebak, Greged, Cirebon.</li>
                <li><strong>"Layanan"</strong> mencakup penjualan buah-buahan segar, pengiriman, dan layanan terkait lainnya.</li>
                <li><strong>"Pelanggan"</strong> adalah individu atau entitas yang menggunakan layanan SUARDI.</li>
                <li><strong>"Pesanan"</strong> adalah permintaan pembelian produk buah-buahan dari Pelanggan.</li>
                <li><strong>"Website"</strong> adalah platform online SUARDI di alamat yang bersangkutan.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Produk dan Layanan</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Ketersediaan Produk</h3>
              <p className="text-gray-700 mb-4">
                SUARDI berusaha menyediakan produk buah-buahan segar berkualitas tinggi. Ketersediaan produk dapat berubah tergantung pada musim dan pasokan.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Kualitas Produk</h3>
              <p className="text-gray-700 mb-4">
                Semua produk yang dijual oleh SUARDI adalah buah-buahan segar yang telah melalui proses quality control. Kami menjamin kualitas produk saat dikirim.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Harga</h3>
              <p className="text-gray-700 mb-4">
                Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Harga yang berlaku adalah harga pada saat pesanan dibuat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pemesanan</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Cara Pemesanan</h3>
              <p className="text-gray-700 mb-4">
                Pemesanan dapat dilakukan melalui:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Telepon: 0852-8570-3526</li>
                <li>WhatsApp</li>
                <li>Kunjungan langsung ke lokasi</li>
                <li>Website (jika tersedia)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Konfirmasi Pesanan</h3>
              <p className="text-gray-700 mb-4">
                Setiap pesanan akan dikonfirmasi oleh staf SUARDI melalui telepon atau WhatsApp sebelum diproses.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Minimum Order</h3>
              <p className="text-gray-700 mb-4">
                Tidak ada minimum order untuk pembelian eceran. Untuk pembelian grosir, hubungi kami untuk mendapatkan penawaran khusus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pembayaran</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Metode Pembayaran</h3>
              <p className="text-gray-700 mb-4">
                Kami menerima metode pembayaran berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Tunai (Cash on Delivery)</li>
                <li>Transfer Bank</li>
                <li>E-Wallet (jika tersedia)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Waktu Pembayaran</h3>
              <p className="text-gray-700 mb-4">
                Pembayaran harus dilakukan saat pengiriman untuk COD, atau maksimal 1x24 jam setelah konfirmasi untuk transfer bank.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pengiriman</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Area Pengiriman</h3>
              <p className="text-gray-700 mb-4">
                Kami melayani pengiriman di wilayah:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Kecamatan Greged dan sekitarnya (gratis ongkir)</li>
                <li>Kota Cirebon (ongkir disesuaikan)</li>
                <li>Luar area Cirebon (dengan kesepakatan)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Waktu Pengiriman</h3>
              <p className="text-gray-700 mb-4">
                Pengiriman dilakukan pada jam operasional (06:00 - 21:00). Same day delivery untuk pesanan sebelum pukul 15:00.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Resiko Pengiriman</h3>
              <p className="text-gray-700 mb-4">
                Resiko produk selama pengiriman menjadi tanggung jawab SUARDI. Produk yang rusak saat pengiriman akan diganti atau uang dikembalikan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kebijakan Pengembalian</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Alasan Pengembalian</h3>
              <p className="text-gray-700 mb-4">
                Pengembalian diterima jika:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Produk tidak segar atau busuk</li>
                <li>Produk salah dikirim</li>
                <li>Kualitas tidak sesuai standar</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Prosedur Pengembalian</h3>
              <p className="text-gray-700 mb-4">
                Laporkan maksimal 2 jam setelah pengiriman. Kami akan melakukan verifikasi dan penggantian atau pengembalian uang.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak dan Kewajiban Pelanggan</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Hak Pelanggan</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Mendapatkan produk segar berkualitas</li>
                <li>Mendapatkan informasi yang akurat tentang produk</li>
                <li>Mendapatkan pelayanan yang baik</li>
                <li>Menukar produk yang tidak sesuai</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Kewajiban Pelanggan</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Memberikan informasi yang benar dan lengkap</li>
                <li>Melakukan pembayaran tepat waktu</li>
                <li>Menerima pesanan pada waktu yang disepakati</li>
                <li>Memberikan feedback untuk peningkatan layanan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 mb-4">
                Semua konten, logo, merek dagang, dan materi di website ini adalah hak milik SUARDI dan dilindungi oleh hukum hak kekayaan intelektual. Tidak diperbolehkan menggunakan materi tanpa izin tertulis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Pembatasan Tanggung Jawab</h2>
              <p className="text-gray-700 mb-4">
                SUARDI tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami. Maksimal tanggung jawab kami adalah nilai pembelian produk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                SUARDI tidak bertanggung jawab atas keterlambatan atau ketidakmampuan memenuhi kewajiban karena kejadian di luar kendali kami (bencana alam, kerusuhan, pandemi, dll).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700 mb-4">
                SUARDI berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diinformasikan melalui website atau kontak langsung. Penggunaan lanjutan layanan berarti setuju dengan perubahan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Hukum yang Berlaku</h2>
              <p className="text-gray-700 mb-4">
                Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan secara musyawarah atau melalui pengadilan di Cirebon.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
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
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}