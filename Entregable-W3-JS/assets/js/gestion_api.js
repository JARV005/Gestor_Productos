const API_URL = 'http://localhost:3000/productos'; 

// Get the products in a table
async function getProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const products = await response.json();
    console.log('📦 Lista actual de productos:');
    console.table(products);
  } catch (error) {
    console.error('❌ Error al obtener los productos:', error.message);
  }
}

// POST - Create a new product
async function createProduct() {
  const newProduct = {
    name: 'Altavoces Bluetooth',
    price: 420
  };

  // Validation 
  if (!newProduct.name || typeof newProduct.price !== 'number') {
    console.error('❌ Entrada inválida: el nombre no debe estar vacío y el precio debe ser numérico');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);
    const created = await response.json();
    console.log('✅ Producto creado correctamente:', created);
  } catch (error) {
    console.error('❌ Error al crear el producto:', error.message);
  }
}

// PUT - Update a product
async function updateProduct() {
  const id = 1; // ID product
  const updatedProduct = {
    name: 'Teclado Gamer RGB',
    price: 520
  };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);
    const updated = await response.json();
    console.log('🔁 Producto actualizado correctamente:', updated);
  } catch (error) {
    console.error('❌ Error al actualizar el producto:', error.message);
  }
}

// Delete a product by id
async function deleteProduct() {
  const id = 2; // ID product

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error(`Error ${response.status}`);
    console.log(`🗑️ Producto con ID ${id} eliminado correctamente`);
  } catch (error) {
    console.error('❌ Error al eliminar el producto:', error.message);
  }
}
