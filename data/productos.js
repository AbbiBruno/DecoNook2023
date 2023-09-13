let productos = [


  {
    "codigo": "P001",
    "nombre": "Lámpara de mesa",
    "precio": 39.99,
    "categoria": "Iluminación",

    "imagen": "https://casika.es/51219-large_default/lampara-de-mesa-arabia-ratan.jpg",

    "descripcion":
      "Lámpara de mesa moderna con base de metal y pantalla de tela.",
    "stock": 15
  },
  {
    "codigo": "P002",
    "nombre": "Cojín decorativo",
    "precio": 19.99,
    "categoria": "Decoración",

      "imagen": "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202110/19/00169950101357____6__640x640.jpg",

    "descripcion": "Cojín decorativo con estampado floral y relleno de plumas.",
    "stock": 8
  },
  {
    "codigo": "P003",
    "nombre": "Mesa de centro",
    "precio": 149.99,
    "categoria": "Muebles",

    "imagen": "https://media.istockphoto.com/photos/set-of-retro-wooden-coffee-table-on-white-background-included-path-picture-id1161176490?k=6&m=1161176490&s=170667a&w=0&h=sQtFRskY4BrIQKeowfb0MJvK70_xEdXIZ6d_jrFGmXo=",

    "descripcion": "Mesa de centro de madera maciza doble con acabado en barniz.",
    "stock": 3
  },
  {
    "codigo": "P004",
    "nombre": "Cortinas opacas",
    "precio": 29.99,
    "categoria": "Textiles",

    "imagen": "https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/8719883720067_1.jpg",

    "descripcion":
      "Cortinas opacas de alta calidad para bloquear la luz exterior.",
    "stock": 12
  },
  {
    "codigo": "P005",
    "nombre": "Espejo de pared",
    "precio": 79.99,
    "categoria": "Espejos",

    "imagen": "https://c.media.kavehome.com/images/Products/SN006M47_1V01.jpg?tx=w_900,c_fill,ar_0.8,g_auto",

    "descripcion": "Espejo de pared con marco de metal dorado envejecido.",
    "stock": 5
  },
  {
    "codigo": "P006",
    "nombre": "Juego de sábanas",
    "precio": 49.99,
    "categoria": "Textiles",

    "imagen": "https://katarinahome.com/wp-content/uploads/2023/03/Juego-de-Sabanas-Beige-Boho-Burrito-Blanco.jpg",

    "descripcion": "Juego de sábanas de algodón suave y resistente.",
    "stock": 20
  }
];
  
  class Producto {
    constructor(codigo, nombre, precio, categoria, imagen, descripcion, stock) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
      this.imagen = imagen;
      this.descripcion = descripcion;
      this.stock = stock;
    }
  }
  
  export{productos,Producto};
  
