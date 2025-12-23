import { NextRequest, NextResponse } from 'next/server'

// Database sementara (dalam implementasi nyata, gunakan database yang proper)
const products = [
  {
    id: 1,
    name: 'Apel Malang',
    price: 25000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Apel segar dari Malang, manis dan renyah',
    stock: 50,
    image: '🍎',
    available: true
  },
  {
    id: 2,
    name: 'Jeruk Sunkist',
    price: 30000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Jeruk import berkualitas tinggi, banyak vitamin C',
    stock: 30,
    image: '🍊',
    available: true
  },
  {
    id: 3,
    name: 'Pisang Cavendish',
    price: 20000,
    unit: 'sisir',
    category: 'buah-buahan',
    description: 'Pisang Cavendish segar, manis dan bergizi',
    stock: 40,
    image: '🍌',
    available: true
  },
  {
    id: 4,
    name: 'Anggur Import',
    price: 80000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Anggur import tanpa biji, manis dan segar',
    stock: 15,
    image: '🍇',
    available: true
  },
  {
    id: 5,
    name: 'Semangka',
    price: 15000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Semangka merah manis, segar untuk buka puasa',
    stock: 25,
    image: '🍉',
    available: true
  },
  {
    id: 6,
    name: 'Melon',
    price: 18000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Melon orange, manis dan berair',
    stock: 20,
    image: '🍈',
    available: true
  },
  {
    id: 7,
    name: 'Pepaya California',
    price: 12000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Pepaya California, manis dan banyak vitamin A',
    stock: 35,
    image: '🥭',
    available: true
  },
  {
    id: 8,
    name: 'Alpukat',
    price: 22000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Alpukat mentega, lembut dan bergizi',
    stock: 18,
    image: '🥑',
    available: true
  },
  {
    id: 9,
    name: 'Strawberry',
    price: 35000,
    unit: 'box',
    category: 'buah-buahan',
    description: 'Strawberry segar, manis dan sehat',
    stock: 12,
    image: '🍓',
    available: true
  },
  {
    id: 10,
    name: 'Mangga Harum Manis',
    price: 28000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Mangga harum manis khas Indonesia',
    stock: 22,
    image: '🥭',
    available: true
  },
  {
    id: 11,
    name: 'Nanas',
    price: 16000,
    unit: 'buah',
    category: 'buah-buahan',
    description: 'Nanas madu, manis dan segar',
    stock: 16,
    image: '🍍',
    available: true
  },
  {
    id: 12,
    name: 'Pir',
    price: 32000,
    unit: 'kg',
    category: 'buah-buahan',
    description: 'Pir import, juicy dan segar',
    stock: 14,
    image: '🍐',
    available: true
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const available = searchParams.get('available')
    const search = searchParams.get('search')

    let filteredProducts = [...products]

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by availability
    if (available === 'true') {
      filteredProducts = filteredProducts.filter(p => p.available)
    }

    // Search by name
    if (search) {
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validasi input
    const requiredFields = ['name', 'price', 'unit', 'description']
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

    // Buat produk baru
    const newProduct = {
      id: products.length + 1,
      name: body.name,
      price: body.price,
      unit: body.unit,
      category: body.category || 'buah-buahan',
      description: body.description,
      stock: body.stock || 0,
      image: body.image || '🍎',
      available: body.available !== false
    }

    // Dalam implementasi nyata, simpan ke database
    products.push(newProduct)

    return NextResponse.json({
      success: true,
      data: newProduct,
      message: 'Product created successfully'
    })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}