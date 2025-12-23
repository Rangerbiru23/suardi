import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validasi input
    const requiredFields = ['name', 'phone', 'message']
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { 
            success: false, 
            error: `Field ${field} is required` 
          },
          { status: 400 }
        )
      }
    }

    // Validasi format nomor telepon Indonesia
    const phoneRegex = /^(\+62|62)?[0-9]{9,15}$/
    if (!phoneRegex.test(body.phone.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid phone number format' 
        },
        { status: 400 }
      )
    }

    // Format data kontak
    const contactData = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || null,
      message: body.message.trim(),
      orderType: body.orderType || 'general',
      address: body.address?.trim() || null,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Log kontak (dalam implementasi nyata, simpan ke database)
    console.log('New contact submission:', contactData)

    // Simulasi pengiriman notifikasi ke admin
    // Dalam implementasi nyata, kirim email atau WhatsApp
    const adminNotification = {
      to: 'admin@suardifruit.com',
      subject: `New Contact: ${contactData.name}`,
      message: `
        Name: ${contactData.name}
        Phone: ${contactData.phone}
        Email: ${contactData.email || 'Not provided'}
        Message: ${contactData.message}
        Order Type: ${contactData.orderType}
        Address: ${contactData.address || 'Not provided'}
        Time: ${contactData.timestamp}
      `
    }

    console.log('Admin notification:', adminNotification)

    // Response sukses
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.',
      data: {
        id: Date.now(),
        ...contactData
      }
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Dalam implementasi nyata, ambil dari database
    // Ini hanya untuk testing
    return NextResponse.json({
      success: true,
      message: 'Contact API is working',
      contact_info: {
        phone: '0852-8570-3526',
        email: 'info@suardifruit.com',
        address: 'Dusun 01 Dayeuh, Gumulung Lebak, Greged, Cirebon',
        hours: '06:00 - 21:00 WIB'
      }
    })
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}