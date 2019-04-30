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
    ];
    $scope.variedadVisible = 0;
    $scope.variedades = [
        {
            nombreVariedad: 'Intenso',
            capsulas: [
                {
                    nombre:'Colombia',
                    tipoCafe:'Café frutal y vibrante',
                    intensidad:6,
                    precio:27,
                    precioSup:00,
                    descripcion:'Lorem impsum....',
                    fotos:[
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 1', esPortada: true },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 2', esPortada: false },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 3', esPortada: false }
                    ],
                    ctaCode: 'maq_D30-AR-RE-NE',
                },
                {
                    nombre:'Roma',
                    tipoCafe:'Café complejo y equilibrado',
                    intensidad:8,
                    precio:28,
                    precioSup:50,
                    descripcion:'Mezcla equilibrada de Arábicas de América Central y del Sur y de Robusta ligeramente tostados, Roma revela notas dulces y de madera y un sabor intenso y persistente en el paladar.',
                    fotos:[
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 1', esPortada: true },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 2', esPortada: false },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 3', esPortada: false }
                    ],
                    ctaCode: 'maq_D10-AR-RE-NE',
                }
            ]
        },
        {
            nombreVariedad: 'Espresso',
            capsulas: [
                {
                    nombre:'Hola',
                    tipoCafe:'Café frutal y vibrante',
                    intensidad:6,
                    precio:27,
                    precioSup:0,
                    descripcion:'Lorem impsum....',
                    fotos:[
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 1', esPortada: true },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 2', esPortada: false },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 3', esPortada: false }
                    ],
                    ctaCode: '...',
                },
                {
                    nombre:'Ejemplo',
                    tipoCafe:'Café complejo y equilibrado',
                    intensidad:8,
                    precio:28,
                    precioSup:50,
                    descripcion:'Mezcla equilibrada de Arábicas de América Central y del Sur y de Robusta ligeramente tostados, Roma revela notas dulces y de madera y un sabor intenso y persistente en el paladar.',
                    fotos:[
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 1', esPortada: true },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 2', esPortada: false },
                        { urlFoto: 'images/capsulas/capsula-placeholder.png', alt:'Vista 3', esPortada: false }
                    ],
                    ctaCode: '...',
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
