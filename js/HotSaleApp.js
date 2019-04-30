angular.module('HotSaleApp', [])
.controller('HotSaleController', ['$scope', 'HotSaleService', function($scope, HotSaleService){
    $scope.maquinaVisible = 0;
    $scope.colorSeleccionado = 0;
    $scope.colorSeleccionadoModal = 0;
    $scope.modalProducto = {
        tipoProducto: 'Maquinas',
        nombreProducto: ' ',
        coloresDisponibles: [],
        descripcion: '',
        tipoCafe: '',
        intensidad: 0,
        cuotas: 0,
        credito: '',
        precioAnterior: 0,
        precioProducto: 0.0,
        precioSup: 0,
        fotos: [],
        codigoCTA: '',
        esCapsula: true
    }
    $scope.maquinas = [
        {
            nombre: "Essenza Mini C",
            valorMaquina: 3594.00,
            credito: "$2.400",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_black_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_black_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_black_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_blackmatt_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_blackmatt_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_blackmatt_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-white",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_white_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_white_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_white_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-grey",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_grey_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_c_grey_lateral.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                      
                    ]
                },
				
            ]
        },
        {
            nombre: "Essenza Mini D",
            valorMaquina: 3594.00,
            credito: "$2.400",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad imcomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta.",
            colores: [
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_red_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_red_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_red_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_green_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_green_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_black_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_black_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_black_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_blackmatt_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_blackmatt_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/essenza_mini_d_blackmatt_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Essenza Mini C + Aeroccino 3",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                        {
                            nombreColor: "ec-grey",
                            ctaCode: 'maq_D30-AR-RE-NE',
                            fotos: [
                                {
                                    urlFoto: 'images/maquinas/pack_essenza_mini_c_grey_perspectiva.jpg',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                }
                            ]
                        },
                        {
                            nombreColor: "ec-white",
                            ctaCode: 'maq_D30-AR-RE-NE',
                            fotos: [
                                {
                                    urlFoto: 'images/maquinas/pack_essenza_mini_c_white_perspectiva.jpg',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                },
                            ]
                        },
                        {
                            nombreColor: "ec-black",
                            ctaCode: 'maq_D30-AR-RE-NE',
                            fotos: [
                                {
                                    urlFoto: 'images/maquinas/pack_essenza_mini_c_black_perspectiva.jpg',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                }
                            ]
                        },
                        {
                            nombreColor: "ec-blackmatte",
                            ctaCode: 'maq_D30-AR-RE-NE',
                            fotos: [
                                        {
                                            urlFoto: 'images/maquinas/pack_essenza_mini_c_blackmatt_perspectiva.jpg',
                                            altFoto: 'Vista 1',
                                            esPortada: true
                                        }
                                    ]
                        }
                    ]
        },
        {
            nombre: "Essenza Mini D + Aeroccino 3",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_black.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_red_perspectiva+.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_blackmatt_perspecticva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Pixie",
            valorMaquina: 5214.00,
            credito: "$2.400",
            precioAnterior: 8690.00,
            cantCuotas: 6,
            textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos.",
            colores: [
                {
                    nombreColor: "ec-aluminium",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-carmine",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
              
            ]
        },
		{
            nombre: "Pixie&Aeroccino",
            valorMaquina: 6594.00,
            credito: "$2.400",
            precioAnterior: 10990.00,
            cantCuotas: 6,
            textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos. Incluye el  Aeroccino Black 3, que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-aluminium",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-carmine",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/pixie_aliminium_perspectiva.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
              
            ]
        },
        {
            nombre: "Citz&Milk",
            valorMaquina: 7794.00,
            credito: "$2.400",
            precioAnterior: 12990.00,
            cantCuotas: 6,
            textoDescripcion: "Equipada con un Aeroccino, que prepara la espuma de leche perfecta y la leche caliente automáticamente, CitiZ&Milk te permite crear un sinfín de recetas de café a base de leche con solo tocar un botón.",
            colores: [
                {
                    nombreColor: "ec-silver",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/citiz&milk_silver_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/citiz&milk_silver_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/citiz&milk_silver_lateral.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                } 
            ]
        },
        {
            nombre: "Lattissima One",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_black.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_red_perspectiva+.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_blackmatt_perspecticva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Lattissima Touch",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_black.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_red_perspectiva+.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_blackmatt_perspecticva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Lattissima Pro",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_black.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_red_perspectiva+.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_blackmatt_perspecticva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                }
            ]
        },
		{
            nombre: "Lattissima Pro",
            valorMaquina: 4974.00,
            credito: "$2.400",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_black.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_green_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_red_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/pack_essenza_mini_d_blackmatt_perspectiva.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        }
                    ]
                }
            ]
        },
    ];
    $scope.variedadVisible = 0;
    $scope.variedades = [
        {
            nombreVariedad: 'Limited Edition',
            capsulas: [
                {
                    nombre:'Café Istambul',
                    tipoCafe:'Un café con mucha historia.',
                    intensidad:10,
                    precio:29,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D30-AR-RE-NE',
                },
                {
                    nombre:'Venezia',
                    tipoCafe:'Café complejo y equilibrado',
                    intensidad:7,
                    precio:29,
                    precioSup:50,
                    descripcion:'Un café con historia.',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                }
            ]
        },
        {
            nombreVariedad: 'Master Origin',
            capsulas: [
                {
                    nombre:'India',
                    tipoCafe:'Café Intenso y Aromático.',
                    intensidad:11,
                    precio:32,
                    precioSup:0,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/india_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Indonesia',
                    tipoCafe:'Café rico y amaderado.',
                    intensidad:8,
                    precio:32,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/indonesia_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Colombia',
                    tipoCafe:'Café Frutal y Vibrante.',
                    intensidad:6,
                    precio:32,
                    precioSup:0,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/colombia_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Ethiopia',
                    tipoCafe:'Café floral y exuberante.',
                    intensidad:4,
                    precio:32,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/ethiopia_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Nicaragua',
                    tipoCafe:'Café dulce y armocioso.',
                    intensidad:5,
                    precio:32,
                    precioSup:0,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/nicaragua_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                }
            ]
        },
        {
            nombreVariedad: 'Intensos',
            capsulas: [
                {
                    nombre:'Kazaar',
                    tipoCafe:'Café excepcionalmente intenso.',
                    intensidad:12,
                    precio:31,
                    precioSup:0,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/kazaar_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Dharkan',
                    tipoCafe:'Café tostado y aterciopelado.',
                    intensidad:11,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/dharkan_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Risttreto',
                    tipoCafe:'Café poderoso y contrastante.',
                    intensidad:10,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/ristretto_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Arpeggio',
                    tipoCafe:'Café Intenso y cremoso.',
                    intensidad:9,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/arpeggio_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Roma',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:8,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/roma_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                }
            ]
        },
        {
            nombreVariedad: 'Espressos',
            capsulas: [
                {
                    nombre:'Livanto',
                    tipoCafe:'Café redondo y equilibrado.',
                    intensidad:6,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/livanto_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Capriccio',
                    tipoCafe:'Café intenso y singular.',
                    intensidad:5,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capriccio_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Volluto',
                    tipoCafe:'Café dulce y ligero.',
                    intensidad:4,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/volluto_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Cosi',
                    tipoCafe:'Café ligero y delicadamente tostado.',
                    intensidad:4,
                    precio:28,
                    precioSup:50,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/cosi_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
            ]
        },
        {
            nombreVariedad: 'Lungos',
            capsulas: [
                {
                    nombre:'Envivo Lungo',
                    tipoCafe:'Café potente y caramelizado.',
                    intensidad:9,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/envivolungo_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Fortissio Lungo',
                    tipoCafe:'Café intenso y con mucho cuerpo.',
                    intensidad:8,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Vivalto Lungo',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/vivaltolungo_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Linizio Lungo',
                    tipoCafe:'Café redondo y suave.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/liniziolungo_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
            ]
        },
        {
            nombreVariedad: 'Decaffeinato',
            capsulas: [
                {
                    nombre:'Ristretto Decaffeinato',
                    tipoCafe:'Café poderoso y contrastante.',
                    intensidad:10,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Arpeggio Decaffeinato',
                    tipoCafe:'Café intenso y cremoso.',
                    intensidad:9,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Volluto Decaffeinato',
                    tipoCafe:'Café dulce y liviano.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Vivalto Lungo Decaffeinato',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/capsula-placeholder.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
            ]
        },
        {
            nombreVariedad: 'Variations',
            capsulas: [
                {
                    nombre:'Caramelito',
                    tipoCafe:'Café con aroma a caramelo.',
                    intensidad:6,
                    precio:32,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/caramelito_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Vanilio',
                    tipoCafe:'Café con aroma a vainilla.',
                    intensidad:6,
                    precio:32,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/vanilio_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                },
                {
                    nombre:'Ciocattino',
                    tipoCafe:'Café con aroma a chocolate.',
                    intensidad:6,
                    precio:32,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    urlFoto: 'images/capsulas/ciocattino_frontal.jpg',
                    fotoAlt:'Vista 1',
                    ctaCode: 'maq_D10-AR-RE-NE',
                }
            ]
        }
    ];


    $scope.mostrarModal = function(idProducto,esCapsula) {
        if (esCapsula) {
            $scope.modalProducto.esCapsula = true;
            $scope.modalProducto.tipoProducto = 'Capsulas';
            $scope.modalProducto.nombreProducto = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].nombre;
            $scope.modalProducto.tipoCafe = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].tipoCafe;
            $scope.modalProducto.intensidad = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].intensidad;
            $scope.modalProducto.descripcion = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].descripcion;
            $scope.modalProducto.precioProducto = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].precio;
            $scope.modalProducto.precioSup = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].precioSup;
            $scope.modalProducto.codigoCTA = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].ctaCode;
            $scope.modalProducto.fotos = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].fotos;
        }
        else {
            $scope.modalProducto.esCapsula = false;
            $scope.modalProducto.tipoProducto = 'Maquinas';
            $scope.modalProducto.nombreProducto = $scope.maquinas[idProducto].nombre;
            $scope.modalProducto.descripcion = $scope.maquinas[idProducto].textoDescripcion;
            $scope.modalProducto.credito = $scope.maquinas[idProducto].credito;
            $scope.modalProducto.cuotas = $scope.calcularCuotas($scope.maquinas[idProducto].valorMaquina, $scope.maquinas[idProducto].cantCuotas);
            $scope.modalProducto.precioAnterior = $scope.maquinas[idProducto].precioAnterior;
            $scope.modalProducto.precioProducto = $scope.maquinas[idProducto].valorMaquina;
            $scope.modalProducto.codigoCTA = $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].ctaCode;
            $scope.modalProducto.colores = $scope.maquinas[idProducto].colores;
            $scope.modalProducto.fotos = $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].fotos;
        }
        $('#modalProducto').modal('show');
    }
    $scope.calcularCuotas = function(paraPrecio, enCuotas){
        //return Math.round((paraPrecio / enCuotas), 2)
        return (paraPrecio/enCuotas).toFixed(2);
    }
    $scope.mostrarMaquina = function(cualMaquina){
        $scope.colorSeleccionado = 0;
        $scope.maquinaVisible = cualMaquina;
    }
    $scope.mostrarVariedad = function(cualVariedad){
        $scope.variedadVisible = cualVariedad;
    }
    $scope.elegirColor = function(cual){
        $scope.colorSeleccionado = cual;
        $scope.colorSeleccionadoModal = cual;
    }
    $scope.elegirColorModal = function(cual){
        $scope.modalProducto.fotos = $scope.maquinas[$scope.maquinaVisible].colores[cual].fotos;
        $scope.colorSeleccionadoModal = cual;
    }
    $scope.formatearNumero = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    $scope.getFotoDePortada = function(){
        for(i = 0; i < $scope.maquinas[$scope.maquinaVisible].colores[$scope.colorSeleccionado].fotos.length; i++){
            if($scope.maquinas[$scope.maquinaVisible].colores[$scope.colorSeleccionado].fotos[i].esPortada){
                return $scope.maquinas[$scope.maquinaVisible].colores[$scope.colorSeleccionado].fotos[i];
                break;
            }
        }
    }
    $scope.formatearDecimales = function (number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }
}])
.service('HotSaleService', ['$http', function($http){
    var servicioRetorno = {};


    return servicioRetorno;
}])
// app.directive("wrapOwlcarousel", function() {
//   return {
//     restrict: "E",

//     link: function(scope, element, attrs) {
//       var options = scope.$eval($(element).attr("data-options"));

//       $(element).owlCarousel(options);
//     }
//   };
// });
;
