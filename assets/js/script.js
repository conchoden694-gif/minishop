const API_URL = 'http://localhost:5000'; // Thay bằng URL khi deploy

// Dữ liệu sản phẩm mẫu
const products = [
  { id: 1, name: "Robot hút bụi lau nhà Roborock Q Revo 5AE", price: 11990000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/roborock-q-revo-5ae-1.jpg" },
  { id: 2, name: "Điện thoại iPhone 15", price: 24990000, image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-15-pro-max_2__4_1.jpg?_gl=1*17esq6x*_gcl_au*MTIyNzIyMjQ3LjE3Njc2NzkxNTU.*_ga*MTU5OTQ5NDg2My4xNzM4NjkzMjk0*_ga_QLK8WFHNK9*czE3Njc2NzkxNTUkbzE0JGcxJHQxNzY3Njc5MTY2JGo0OSRsMCRoMTIzMzY0NzYyNA.." },
  { id: 3, name: "Máy sấy tóc Ion tốc độ cao Laifen SE", price: 2190000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-say-toc-ion-toc-do-cao-laifen-se-1.jpg" },
  { id: 4, name: "Máy tạo kiểu tóc đa năng Dyson Airwrap Complete Long HS05 Limited Edition", price: 10990000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tao-kieu-toc-dyson-airwrap-complete-long-hs05-limited-edition-1.png" },
  { id: 5, name: "Máy in Laser Brother HL-L2321D", price: 3190000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/_/0/_0002_26903_chinh_dien_brother_hl_2321.jpg" },
  { id: 6, name: "Máy giặt sấy Xiaomi Mijia giặt 10.5 - Sấy 7.5kg 2025", price: 11490000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-giat-say-xiaomi-mijia-giat-10-5-kg-say-7-kg-2025-1.png" },
  { id: 7, name: "iPhone 17 Pro 256GB | Chính hãng", price: 34390000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png" },
  { id: 8, name: "Samsung Galaxy Z Fold7 12GB 256GB", price: 40590000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-7-xanh.jpg" },
  { id: 9, name: "Laptop Dell Inspiron 14 5440 D0F3W - Chính hãng", price: 15990000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop_dell_inspiron_14_5440_d0f3w_-_2.png" },
  { id: 10, name: "Đồng hồ thông minh Coros Pace 4", price: 6960000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ssss_1_28.png" },
  { id: 11, name: "Đồng hồ thông minh Huawei Watch Fit 3", price: 1990000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/dong-ho-thong-minh-huawei-watch-fit-3_2.jpg" },
  { id: 12, name: "Xiaomi Max 2025 85 N36V", price: 30490000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/o/google-tivi-xiaomi-max-100-inch-n36z-2025_1.png" },
  { id: 13, name: "Tivi Xiaomi A Pro 4K 55 inch QLED 2026", price: 10290000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/i/tivi-xiaomi-qled-4k-a-pro-55-inch-2026.png" },
  { id: 14, name: "Tai nghe Bluetooth Apple AirPods 4 | Chính hãng Apple Việt Nam", price: 3050000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png" },
  { id: 15, name: "Ốp lưng linh hoạt Samsung Galaxy Z Fold5 chính hãng", price: 749000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/h/thumb-op-lung_4__1.png" },
  { id: 16, name: "Bàn phím + Bao da AI Samsung Galaxy Tab S10 FE Plus chính hãng touch pad", price: 4312000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_-_2025-05-13t161740.683.png" },
  { id: 17, name: "Ốp lưng iPhone 15 Likgus PC", price: 135000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/op-lung-iphone-15-likgus-pc_1_.png" },
  { id: 18, name: "Màn hình Gaming ASUS TUF VG27AQ5A 27 inch", price: 4990000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__9_234.png" },
  { id: 19, name: "Camera DJI Osmo Pocket 3 Creator Combo", price: 12800000, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-quay-chong-rung-dji-osmo-pocket-3-advanced-4k_1_.png" }
];

// Biến toàn cục
let token = localStorage.getItem('token');
let user = null;
let cart = [];

// Load user từ localStorage
if (token) {
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    token = null;
    user = null;
  }
}

// Hàm lấy giỏ hàng từ backend (an toàn với lỗi JSON)
async function getCart() {
  if (!token) {
    cart = [];
    return [];
  }

  try {
    const res = await fetch(`${API_URL}/cart`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Lỗi API /cart: ${res.status}`, text.substring(0, 200));
      if (res.status === 401) {
        alert('Phiên đăng nhập hết hạn!');
        logout();
      }
      cart = [];
      return [];
    }

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      cart = await res.json();
    } else {
      console.error('Response không phải JSON:', await res.text());
      cart = [];
    }
  } catch (err) {
    console.error('Lỗi kết nối khi lấy giỏ hàng:', err);
    cart = [];
  }

  return cart;
}

// Cập nhật số lượng giỏ hàng trên header
async function updateCartCount() {
  await getCart();
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    countEl.textContent = totalItems;
  }
}

// Cập nhật phần đăng nhập/đăng xuất
function updateAuthSection() {
  const authSection = document.getElementById('auth-section');
  if (!authSection) return;

  if (user) {
    authSection.innerHTML = `
      <span class="user-greeting">Xin chào, <strong>${user.name}</strong></span>
      <button onclick="logout()" class="logout-btn">Đăng xuất</button>
    `;
  } else {
    authSection.innerHTML = `
      <a href="login.html" class="auth-link">Đăng nhập</a>
      <a href="register.html" class="auth-link">Đăng ký</a>
    `;
  }
}

// Đăng xuất
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  token = null;
  user = null;
  cart = [];
  updateCartCount();
  updateAuthSection();
  alert('Đã đăng xuất thành công!');
  window.location.href = 'index.html';
}

// Thêm vào giỏ hàng
async function addToCart(id) {
  if (!token) {
    if (confirm('Bạn cần đăng nhập để thêm vào giỏ hàng. Đi đến trang đăng nhập?')) {
      window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
    }
    return;
  }

  try {
    const res = await fetch(`${API_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ productId: id, quantity: 1 })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Lỗi thêm giỏ:', res.status, text);
      alert('Không thể thêm sản phẩm!');
      return;
    }

    await getCart();
    updateCartCount();
    alert('Đã thêm vào giỏ hàng!');
  } catch (err) {
    console.error('Lỗi kết nối thêm giỏ:', err);
    alert('Lỗi mạng!');
  }
}

// Xóa sản phẩm khỏi giỏ
async function removeFromCart(productId) {
  if (!token || !confirm('Xóa sản phẩm này khỏi giỏ hàng?')) return;

  try {
    await fetch(`${API_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ productId, quantity: -999 })
    });

    await getCart();
    updateCartCount();

    if (window.location.pathname.includes('cart.html')) {
      renderCartTable();
    }

    alert('Đã xóa sản phẩm!');
  } catch (err) {
    alert('Lỗi xóa sản phẩm!');
  }
}

// Render bảng giỏ hàng (chỉ dùng cho cart.html)
function renderCartTable() {
  const tbody = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-price');
  const emptyMsg = document.getElementById('empty-cart');
  const cartTableContainer = document.getElementById('cart-table-container');

  if (!tbody) return;

  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (cartTableContainer) cartTableContainer.style.display = 'none';
    tbody.innerHTML = '';
    if (totalEl) totalEl.textContent = '0đ';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (cartTableContainer) cartTableContainer.style.display = 'block';

  let total = 0;
  let rows = '';

  cart.forEach(item => {
    const prod = products.find(p => p.id === item.productId);
    if (!prod) return;

    total += prod.price * item.quantity;

    rows += `
      <tr>
        <td data-label="Hình ảnh"><img src="${prod.image}" alt="${prod.name}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;"></td>
        <td data-label="Sản phẩm" class="product-name">${prod.name}</td>
        <td data-label="Giá" style="color:#ff6b35;font-weight:bold;">${prod.price.toLocaleString('vi-VN')}đ</td>
        <td data-label="Số lượng" class="quantity" style="text-align:center;font-weight:bold;">${item.quantity}</td>
        <td data-label="Tổng" style="color:#ff6b35;font-weight:bold;">${(prod.price * item.quantity).toLocaleString('vi-VN')}đ</td>
        <td data-label="Xóa">
          <button class="remove-btn" onclick="removeFromCart(${item.productId})" title="Xóa sản phẩm">×</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = rows;
  if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + 'đ';
}


// Render sản phẩm (trang chủ & sản phẩm)
function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map(p => `
    <div class="product-card" onclick="viewDetail(${p.id})">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${p.price.toLocaleString('vi-VN')}đ</div>
        <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">Thêm vào giỏ</button>
      </div>
    </div>
  `).join('');
}

function viewDetail(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

// Khởi chạy khi load trang
document.addEventListener('DOMContentLoaded', async () => {
  updateAuthSection();
  await updateCartCount();

  // Trang chủ
  if (document.getElementById('featured-products')) {
    renderProducts('featured-products', products.slice(0, 4));
  }

  // Trang sản phẩm
  if (document.getElementById('all-products')) {
    renderProducts('all-products', products);
  }

  // Trang chi tiết sản phẩm
  if (window.location.pathname.includes('product-detail.html')) {
    const id = new URLSearchParams(window.location.search).get('id');
    const prod = products.find(p => p.id == id);
    if (prod && document.getElementById('product-detail-content')) {
      document.getElementById('product-detail-content').innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <div class="detail-info">
          <h1>${prod.name}</h1>
          <div class="price">${prod.price.toLocaleString('vi-VN')}đ</div>
          <p><strong>Mô tả:</strong> Sản phẩm chất lượng cao, chính hãng 100%. Bảo hành đầy đủ.</p>
          <button class="btn-primary" onclick="addToCart(${id})">Thêm vào giỏ hàng</button>
        </div>
      `;
    }
  }

  // Trang giỏ hàng - HIỂN THỊ SẢN PHẨM ĐÚNG
 // Trang giỏ hàng - SỬA ĐỂ HIỂN THỊ SẢN PHẨM NGAY LẬP TỨC
// Trang giỏ hàng - HIỂN THỊ SẢN PHẨM ĐẦY ĐỦ TỪ BACKEND
if (window.location.pathname.includes('cart.html')) {
  if (!token) {
    window.location.href = 'login.html?redirect=cart.html';
    return;
  }

  const cartItemsDiv = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-price');
  const totalBlock = document.getElementById('cart-total');

  async function renderCart() {
    await getCart(); // Lấy dữ liệu từ backend

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = `
        <div style="text-align:center;padding:100px 20px;background:white;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
          <p style="font-size:24px;color:#666;margin-bottom:30px;">🛒 Giỏ hàng đang trống.</p>
          <a href="products.html" style="background:linear-gradient(135deg,#ff6b35,#e55a2b);color:white;padding:15px 40px;border-radius:50px;text-decoration:none;font-weight:600;box-shadow:0 8px 25px rgba(255,107,53,0.4);display:inline-block;">Tiếp tục mua sắm</a>
        </div>
      `;
      if (totalBlock) totalBlock.style.display = 'none';
      return;
    }

    if (totalBlock) totalBlock.style.display = 'block';

    let total = 0;
    let tableHTML = `
      <table style="width:100%;border-collapse:separate;border-spacing:0;background:white;border-radius:16px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.1);margin-bottom:40px;">
        <thead>
          <tr style="background:#0f172a;color:white;">
            <th style="padding:20px;text-align:left;">Hình ảnh</th>
            <th style="padding:20px;text-align:left;">Sản phẩm</th>
            <th style="padding:20px;text-align:left;">Giá</th>
            <th style="padding:20px;text-align:center;">Số lượng</th>
            <th style="padding:20px;text-align:left;">Tổng</th>
            <th style="padding:20px;text-align:center;">Xóa</th>
          </tr>
        </thead>
        <tbody>
    `;

    cart.forEach(item => {
      const prod = products.find(p => p.id === item.productId);
      if (!prod) return; // Bỏ qua nếu không tìm thấy sản phẩm

      total += prod.price * item.quantity;

      tableHTML += `
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:25px 20px;vertical-align:middle;">
            <img src="${prod.image}" alt="${prod.name}" style="width:90px;height:90px;object-fit:cover;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          </td>
          <td style="padding:25px 20px;vertical-align:middle;font-weight:600;font-size:19px;">${prod.name}</td>
          <td style="padding:25px 20px;vertical-align:middle;color:#ff6b35;font-weight:bold;font-size:19px;">${prod.price.toLocaleString('vi-VN')}đ</td>
          <td style="padding:25px 20px;vertical-align:middle;text-align:center;font-weight:bold;font-size:19px;">${item.quantity}</td>
          <td style="padding:25px 20px;vertical-align:middle;color:#ff6b35;font-weight:bold;font-size:19px;">${(prod.price * item.quantity).toLocaleString('vi-VN')}đ</td>
          <td style="padding:25px 20px;vertical-align:middle;text-align:center;">
            <button onclick="removeFromCart(${item.productId})" style="background:#ef4444;color:white;border:none;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:20px;box-shadow:0 4px 10px rgba(239,68,68,0.3);transition:all 0.3s;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">×</button>
          </td>
        </tr>
      `;
    });

    tableHTML += `
        </tbody>
      </table>
    `;

    cartItemsDiv.innerHTML = tableHTML;
    totalEl.textContent = total.toLocaleString('vi-VN') + 'đ';
  }

  // Gọi render khi load trang
  renderCart();
}


  // Trang thanh toán
  if (window.location.pathname.includes('checkout.html')) {
    if (!token) {
      window.location.href = 'login.html?redirect=checkout.html';
      return;
    }
    document.getElementById('checkout-form').onsubmit = async e => {
      e.preventDefault();
      await fetch(`${API_URL}/cart/clear`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Cảm ơn quý khách! Đơn hàng đã được đặt thành công (demo).');
      window.location.href = 'index.html';
    };
  }
});
