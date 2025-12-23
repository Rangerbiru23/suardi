import { NextRequest, NextResponse } from 'next/server'

// Database sementara untuk orders
const orders: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validasi input
    const requiredFields = ['customerName', 'customerPhone', 'items']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Field ${field} is required` 
          },
          { status: 400 }
        )
      }
    }

    // Validasi items
    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'At least one item is required' 
        },
        { status: 400 }
      )
    }

    // Validasi setiap item
    for (const item of body.items) {
      if (!item.productId || !item.quantity || item.quantity <= 0) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Invalid item data' 
          },
          { status: 400 }
        )
      }
    }

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    
    // Calculate total
    let totalAmount = 0
    const orderItems = body.items.map((item: any) => {
      const itemTotal = item.price * item.quantity
      totalAmount += itemTotal
      return {
        productId: item.productId,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
        total: itemTotal
      }
    })

    // Create order
    const order = {
      id: orderId,
      customerName: body.customerName,
      customerPhone: body.customerPhone,
      customerEmail: body.customerEmail || null,
      deliveryAddress: body.deliveryAddress || null,
      items: orderItems,
      totalAmount: totalAmount,
      deliveryFee: body.deliveryFee || 0,
      finalAmount: totalAmount + (body.deliveryFee || 0),
      paymentMethod: body.paymentMethod || 'COD',
      orderDate: new Date().toISOString(),
      status: 'pending',
      notes: body.notes || null
    }

    // Simpan order (dalam implementasi nyata, simpan ke database)
    orders.push(order)

    // Log order
    console.log('New order received:', order)

    // Simulasi notifikasi ke admin
    const adminNotification = {
      orderId: order.id,
      customer: order.customerName,
      phone: order.customerPhone,
      total: order.finalAmount,
      items: order.items.length,
      time: order.orderDate
    }
    console.log('Admin notification for new order:', adminNotification)

    return NextResponse.json({
      success: true,
      message: 'Pesanan Anda telah diterima! Kami akan segera menghubungi Anda untuk konfirmasi.',
      data: {
        orderId: order.id,
        totalAmount: order.finalAmount,
        estimatedDelivery: '1-2 jam',
        status: order.status
      }
    })

  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get('orderId')

    if (orderId) {
      // Get specific order
      const order = orders.find(o => o.id === orderId)
      if (!order) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Order not found' 
          },
          { status: 404 }
        )
      }
      return NextResponse.json({
        success: true,
        data: order
      })
    } else {
      // Get all orders (admin only - dalam implementasi nyata, tambahkan authentication)
      return NextResponse.json({
        success: true,
        data: orders,
        total: orders.length
      })
    }
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}