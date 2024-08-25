CREATE TABLE Products (
    ID INT PRIMARY KEY IDENTITY(1,1), -- Unique ID, auto-incrementing
    ProductName NVARCHAR(255) NOT NULL, -- Name of the product
    ProductDescription NVARCHAR(MAX) NOT NULL, -- Description of the product
    BrandName NVARCHAR(255) NOT NULL, -- Brand name of the product
    Category NVARCHAR(255) NOT NULL, -- Category of the product
    ListPrice DECIMAL(18, 2) NOT NULL, -- List price of the product
    Quantity INT NOT NULL, -- Quantity of the product
    ImagePath NVARCHAR(500), -- Path to the product image
    forGender NVARCHAR(50) -- Gender-specific product (e.g., Male, Female, Unisex)
);

INSERT INTO Products (ProductName, ProductDescription, BrandName, Category, ListPrice, Quantity, ImagePath, forGender)
VALUES 
('Running Shoes', 'Lightweight running shoes for daily use', 'Sportify', 'Footwear', 120.00, 80, '/images/running_shoes.jpg', 'Male'),
('Smartwatch Pro', 'Advanced smartwatch with fitness tracking', 'TechWorld', 'Wearables', 199.99, 150, '/images/smartwatch_pro.jpg', 'Unisex'),
('Yoga Mat', 'Comfortable and durable yoga mat', 'FitLife', 'Fitness', 25.00, 250, '/images/yoga_mat.jpg', 'Female'),
('LED Desk Lamp', 'Adjustable LED desk lamp with touch control', 'BrightLight', 'Home & Office', 49.99, 300, '/images/led_desk_lamp.jpg', 'Unisex'),


('Running Shoes Pro', 'Premium running shoes with enhanced cushioning', 'Sportify', 'Footwear', 150.00, 100, '/images/running_shoes_pro.jpg', 'Male'),

('Graphics Card RTX 3080', 'High-end graphics card for 4K gaming', 'UltraTech', 'Computers', 799.99, 40, '/images/products/pc/images (1).jpg', 'Unisex'),
('Graphics Card RTX 3070', 'High-end graphics card for 4K gaming', 'UltraTech', 'Computers', 799.99, 40, '/images/products/pc/images (2).jpg', 'Unisex'),

('Gaming Laptop G15', 'High-performance gaming laptop with RGB keyboard', 'GameMaster', 'Computers', 1299.99, 50, '/images/products/pc/61BuT2yTQ6S._AC_SL1500_.jpg', 'Unisex'),

('Mechanical Keyboard', 'Durable mechanical keyboard with customizable keys', 'KeyCraft', 'Computers', 99.99, 200, '/images/products/pc/71ZRus2YNcL._AC_UF894,1000_QL80.jpg', 'Unisex'),
('Mechanical Keyboard', 'Logi mechanical keyboard with customizable keys', 'Logitech', 'Computers', 99.99, 200, '/images/products/pc/images.jpg', 'Unisex'),
('Gaming Mouse', 'Ergonomic gaming mouse with programmable buttons', 'Razer', 'Computers', 59.99, 300, '/images/products/pc/razer.jpg', 'Unisex'),
('Gaming Mouse', 'Everest Gaming mouse ', 'Everest', 'Computers', 59.99, 300, '/images/products/pc/everest.jpeg', 'Unisex'),

('CPU Cooler', 'Efficient cooling solution for high-performance CPUs', 'CoolMaster', 'Computers', 49.99, 150, '/images/products/pc/518NO7QbAJL._AC_UF894,1000_QL80.jpg', 'Unisex'),
('SSD 1TB', 'High-speed solid-state drive for fast data access', 'DataDrive', 'Computers', 149.99, 220, '/images/products/pc/110000271566482.jpg', 'Unisex'),
('Power Supply 750W', 'Reliable power supply for gaming PCs', 'PowerMax', 'Computers', 89.99, 100, '/images/products/pc/110000100103810.jpg', 'Unisex'),




('Athletic Sneakers', 'Comfortable and stylish sneakers for sports', 'MoveFit', 'Footwear', 110.00, 120, '/images/athletic_sneakers.jpg', 'Female'),

('RTX 4090 Graphics Card', 'High-performance graphics card for gaming and rendering', 'NVIDIA', 'Computers', 1599.99, 25, '/images/products/pc/rtx_4090.jpg', 'Unisex'),
('Intel Core i9-13900K', 'High-end processor with 24 cores and 32 threads', 'Intel', 'Computers', 599.99, 30, '/images/products/pc/i9_13900k.jpg', 'Unisex'),
('Corsair Vengeance 32GB DDR4', '32GB DDR4 RAM with high speed', 'Corsair', 'Computers', 159.99, 50, '/images/products/pc/corsair_vengeance_ddr4.jpg', 'Unisex'),
('ASUS ROG Strix Z690-E', 'Motherboard with Z690 chipset for Intel processors', 'ASUS', 'Computers', 299.99, 20, '/images/products/pc/asus_rog_strix_z690_e.jpg', 'Unisex'),
('Cooler Master Hyper 212', 'CPU cooler with 4 heat pipes for better cooling', 'Cooler Master', 'Computers', 49.99, 60, '/images/products/pc/cooler_master_hyper_212.jpg', 'Unisex'),
('Logitech MX Master 3', 'Advanced wireless mouse with customizable buttons', 'Logitech', 'Computers', 99.99, 100, '/images/products/pc/logitech_mx_master_3.jpg', 'Unisex'),
('Razer BlackWidow V3', 'Mechanical gaming keyboard with RGB backlighting', 'Razer', 'Computers', 129.99, 80, '/images/products/pc/razer_blackwidow_v3.jpg', 'Unisex'),
('Thermaltake Toughpower 850W', '850W power supply with 80 Plus Gold certification', 'Thermaltake', 'Computers', 139.99, 25, '/images/products/pc/thermaltake_toughpower_850w.jpg', 'Unisex'),
('Acer Predator X27', '27-inch 4K UHD monitor with G-SYNC technology', 'Acer', 'Computers', 1399.99, 15, '/images/products/pc/acer_predator_x27.jpg', 'Unisex'),
('Gigabyte B550 AORUS PRO', 'Motherboard with B550 chipset for AMD processors', 'Gigabyte', 'Computers', 179.99, 25, '/images/products/pc/gigabyte_b550_aorus_pro.jpg', 'Unisex'),
('NZXT Kraken X63', '240mm AIO liquid cooler for CPUs', 'NZXT', 'Computers', 149.99, 40, '/images/products/pc/nzxt_kraken_x63.jpg', 'Unisex'),
('Be Quiet! Dark Rock Pro 4', 'High-performance CPU cooler with silent operation', 'Be Quiet!', 'Computers', 89.99, 25, '/images/products/pc/be_quiet_dark_rock_pro_4.jpg', 'Unisex'),
('ASUS TUF Gaming X570-PLUS', 'Motherboard with X570 chipset for AMD processors', 'ASUS', 'Computers', 199.99, 30, '/images/products/pc/asus_tuf_gaming_x570_plus.jpg', 'Unisex');

