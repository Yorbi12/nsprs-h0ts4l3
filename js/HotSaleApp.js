angular.module('HotSaleApp', [])
.controller('HotSaleController', ['$scope', '$timeout', function($scope, $timeout){
    $scope.maquinaVisible = 0;
    $scope.colorSeleccionado = 0;
    $scope.colorSeleccionadoModal = 0;
    $scope.modalProducto = {
        tipoProducto: 'Máquinas',
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
        codigoCTA: 'VC30-AR-BK-NE',
        esCapsula: true
    }
    $scope.maquinas = [
        {
            nombre: "Essenza Mini C",
            valorMaquina: 3594.00,
            credito: "$1.300",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'VC30-AR-BK-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807685150/essenza-mini-c-blackmatt-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807619614/essenza-mini-c-blackmatt-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807750686/essenza-mini-c-blackmatt-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-white",
                    ctaCode: 'VC30-AR-WH-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808078366/essenza-mini-c-white-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808143902/essenza-mini-c-white-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808209438/essenza-mini-c-white-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-grey",
                    ctaCode: 'VC30-AR-GR-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808274974/essenza-mini-c-grey-perspectiva.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808340510/essenza-mini-c-grey-lateral.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        }
                    ]
                },
				
            ]
        },
        {
            nombre: "Essenza Mini D",
            valorMaquina: 3594.00,
            credito: "$1.300",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad imcomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta.",
            colores: [
                {
                    nombreColor: "ec-red",
                    ctaCode: 'VD30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808406046/essenza-mini-d-red-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808471582/essenza-mini-d-red-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808537118/essenza-mini-d-red-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-black",
                    ctaCode: 'VD30-AR-BK-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808602654/essenza-mini-d-black-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808668190/essenza-mini-d-black-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809389086/essenza-mini-d-black-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'VD30-AR-MB-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809454622/essenza-mini-d-blackmatt-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809782302/essenza-mini-d-blackmatt-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810077214/essenza-mini-d-blackmatt-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Pack Essenza Mini C",
            valorMaquina: 4974.00,
            credito: "$1.300",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                        {
                            nombreColor: "ec-grey",
                            ctaCode: 'VA3C30-AR-GR-NE',
                            fotos: [
                                {
                                    urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810535966/pack-essenza-mini-c-grey-perspectiva.jpg?',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                },
                                {
                                    urlFoto: 'images/pack_essenza_mini_c_grey_frontal.jpg',
                                    altFoto: 'Vista 2',
                                    esPortada: false
                                },
                            ]
                        },
                        {
                            nombreColor: "ec-white",
                            ctaCode: 'VA3C30-AR-WH-NE',
                            fotos: [
                                {
                                    urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810601502/pack-essenza-mini-c-white-perspectiva.jpg?',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                },
                                {
                                    urlFoto: 'images/pack_essenza_mini_d_white_frontal.jpg',
                                    altFoto: 'Vista 2',
                                    esPortada: false
                                }
                            ]
                        },
                        {
                            nombreColor: "ec-black",
                            ctaCode: 'VA3C30-AR-BK-NE',
                            fotos: [
                                {
                                    urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12373062123550/pack-essenza-mini-c-black-perspectiva.jpg?',
                                    altFoto: 'Vista 1',
                                    esPortada: true
                                },
                                {
                                    urlFoto: 'images/pack_essenza_mini_c_black_frontal.jpg',
                                    altFoto: 'Vista 2',
                                    esPortada: false
                                }
                            ]
                        }
                    ]
        },
        {
            nombre: "Pack Essenza Mini D",
            valorMaquina: 4974.00,
            credito: "$1.300",
            precioAnterior: 8290.00,
            cantCuotas: 6,
            textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'VA3D30-AR-BK-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810732574/pack-essenza-mini-d-black.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/pack_essenza_mini_d_black_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                    ]
                },
                {
                    nombreColor: "ec-red",
                    ctaCode: 'VA3D30-AR-RE-NE',
                    fotos: [
                        {   
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813648926/pack-essenza-mini-d-red-perspectiva-.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/pack_essenza_mini_d_red_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                    ]
                },
                {
                    nombreColor: "ec-blackmatte",
                    ctaCode: 'VA3D30-AR-MB-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813714462/pack-essenza-mini-d-blackmatt-perspecticva.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/pack_essenza_mini_d_black_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                    ]
                }
            ]
        },
        {
            nombre: "Pixie",
            valorMaquina: 5214.00,
            credito: "$1.300",
            precioAnterior: 8690.00,
            cantCuotas: 6,
            textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos.",
            colores: [
                {
                    nombreColor: "ec-aluminium",
                    ctaCode: 'VD60-AR-AL-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813779998/pixie-aluminium-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813845534/pixie-aliminium-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813911070/pixie-aliminium-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
				{
                    nombreColor: "ec-carmine",
                    ctaCode: 'VD60-AR-DR-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370814107678/pixie-carmine-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370814894110/pixie-carmine-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370814959646/pixie-carmine-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
              
            ]
        },
		{
            nombre: "Pixie Pack",
            valorMaquina: 6594.00,
            credito: "$1.300",
            precioAnterior: 10990.00,
            cantCuotas: 6,
            textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos. Incluye el  Aeroccino Black 3, que te permite crear recetas de café con leche.",
            colores: [
                {
                    nombreColor: "ec-aluminium",
                    ctaCode: 'VA3D60-AR-AL-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370815352862/pixie-aluminium-eroccino-perspectiva-v2.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/pixie_aluminium_eroccino_perspectiva.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false,
                        }
                    ]
                },
				{
                    nombreColor: "ec-carmine",
                    ctaCode: 'VA3KD60-AR-DR-N',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370815418398/pixie-d-carmine-seroccino-perspectiva.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/pixie_d_carmine_seroccino_frontal.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false,
                        }
                    ]
                }
              
            ]
        },
        {
            nombre: "Citiz&Milk",
            valorMaquina: 7794.00,
            credito: "$1.300",
            precioAnterior: 12990.00,
            cantCuotas: 6,
            textoDescripcion: "Equipada con un Aeroccino, que prepara la espuma de leche perfecta y la leche caliente automáticamente, CitiZ&Milk te permite crear un sinfín de recetas de café a base de leche con solo tocar un botón.",
            colores: [
                {
                    nombreColor: "ec-silver",
                    ctaCode: 'VC122-AR-SI-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370815582238/citiz-milk-silver-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370815713310/citiz-milk-silver-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370816139294/citiz-milk-silver-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                } 
            ]
        },
        {
            nombre: "Lattissima One",
            valorMaquina: 9774.00,
            credito: "$1.300",
            precioAnterior: 16290.00,
            cantCuotas: 6,
            textoDescripcion: "Lattissima One te permitirá disfrutar de un Cappuccino y Latte Macchiato de alta calidad en la comodidad de tu casa. Esta máquina de café Nespresso está equipada con un nuevo e innovador sistema de leche fresca que simplifica la manera de preparar tu café favorito con leche.",
            colores: [
			    {
                    nombreColor: "ec-white",
                    ctaCode: 'VF111-AR-WH-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370816696350/lattissimaone-white-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370817384478/latissimaone-white-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-brown",
                    ctaCode: 'VF111-AR-BW-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370816204830/lattisima-one-brown-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370816270366/lattisima-one-brown-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        }
                    ]
                }
 
            ]
        },
        {
            nombre: "Lattissima Touch",
            valorMaquina: 10734.00,
            credito: "$1.300",
            precioAnterior: 17890.00,
            cantCuotas: 6,
            textoDescripcion: "Ofrece infinitas posibilidades en preparaciones, incluidas aquellas con su propio toque. Elegí entre seis selecciones de café y recetas con leche usando el panel de control táctil.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'VF521-AR-BK-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049447454/lattisima-touch-black-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049775134/lattisima-touch-black-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049840670/lattisima-touch-black-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-white",
                    ctaCode: 'VF521-AR-WH-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049906206/lattisima-touch-white-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049971742/lattisima-touch-white-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050037278/lattisima-touch-silver-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "ec-silver",
                    ctaCode: 'VF521-AR-SI-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050102814/lattisima-touch-silver-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050168350/lattisima-touch-silver-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050037278/lattisima-touch-silver-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
            ]
        },
        {
            nombre: "Expert & Milk",
            valorMaquina: 10734.00,
            credito: "$1.300",
            precioAnterior: 17890.00,
            cantCuotas: 6,
            textoDescripcion: "Ofrece un versátil nivel de configuración, que te permite personalizar y preparar un café que satisgafa tus más altas expectativas desde la comodidad de tu casa.",
            colores: [
                {
                    nombreColor: "ec-black",
                    ctaCode: 'VC85-AR-BK-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050496030/expert-milk-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371050659870/expert-milk-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051184158/expert-milk-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
            ]
        },
		{
            nombre: "Lattissima Pro",
            valorMaquina: 14994.00,
            credito: "$1.300",
            precioAnterior: 24990.00,
            cantCuotas: 6,
            textoDescripcion: "Inspirada en la calidad de las máquinas profesionales pero fácil de usar gracias a su tecnología avanzada y su intuitiva pantalla táctil.",
            colores: [
                {
                    nombreColor: "ec-silver",
                    ctaCode: 'VF456-AR-PR-NE',
                    fotos: [
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051249694/lattisima-pro-frontal.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051708446/lattisima-pro-perspectiva.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051773982/lattisima-pro-cenital.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: false
                        }
                    ]
                }
            ]
        }
    ];
    $scope.variedadVisible = 0;
    $scope.variedades = [
        {
            nombreVariedad: 'Master Origin',
            capsulas: [
                {
                    nombre:'India',
                    tipoCafe:'Café Intenso y Aromático.',
                    intensidad:11,
                    precio:32,
                    precioSup:0,
                    descripcion:'India con Robusta Monsoon debe su sabor salvaje al proceso único de monzones. Cuando los granos de café pasan meses frente al viento, desarrollan un sabor distinto a madera, salado y especiado, tan espeso y persistente como la niebla marina. Una taza poderosa que mezcla Robusta con café Arábica de India, de cuerpo pesado y almibarado.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372597342238/india-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7712.10',
                },
                {
                    nombre:'Indonesia',
                    tipoCafe:'Café rico y amaderado.',
                    intensidad:8,
                    precio:32,
                    precioSup:00,
                    descripcion:'Indonesia es un café Arábica procesado con el método wet hulled, típico de la isla de Sumatra. Un café espresso con notas de madera tropical y rico curado aroma de tabaco con un cuerpo espeso y aterciopelado.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372600193054/indonesia-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7711.10',
                },
                {
                    nombre:'Colombia',
                    tipoCafe:'Café Frutal y Vibrante.',
                    intensidad:6,
                    precio:32,
                    precioSup:0,
                    descripcion:'Colombia es un café suave y afrutado. Podrá probar todas las notas de frutos rojos vinosos de grosella negra y arándano rojo que salen a la superficie. Una acidez brillante lo convierte en un café vivaz, generando un equilibrio suave entre sus aromas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372604551198/colombia-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7715.10',
                },
                {
                    nombre:'Ethiopia',
                    tipoCafe:'Café floral y exuberante.',
                    intensidad:4,
                    precio:32,
                    precioSup:00,
                    descripcion:'El proceso natural tradicional agrega un sabor único, rico en sabor e increíblemente aromático. En Ethiopia con Arábica procesada en seco, podrás capturar cualquier cosa, desde el aroma cálido de la fruta madura hasta delicadas notas de azahar.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372607729694/ethiopia-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7714.10',
                },
                {
                    nombre:'Nicaragua',
                    tipoCafe:'Café dulce y armonioso.',
                    intensidad:5,
                    precio:32,
                    precioSup:0,
                    descripcion:'Nicaragua con Arábica procesada "Black-Honey" es un café nectarioso: tiene una textura suave y satinada y notas dulces de cereales dulces. Su dulzura distintiva proviene del raro proceso Black-Honey.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372612710430/nicaragua-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7713.10',
                }
            ]
        },
        {
            nombreVariedad: 'Intenso',
            capsulas: [
                {
                    nombre:'Kazaar',
                    tipoCafe:'Café excepcionalmente intenso.',
                    intensidad:12,
                    precio:31,
                    precioSup:0,
                    descripcion:'Una mezcla atrevida que incluye Robustas de Brasil y Guatemala, preparada especialmente para Nespresso, y una Arábica de América del Sur tostada separadamente, el Kazaar es un café de intensidad excepcional. Ese Ristretto de cuerpo completo es rico en notas tostadas. En copa se desarrolla un potente amargor y notas de pimienta que se equilibran por una textura densa y cremosa.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372616085534/kazaar-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7694.10',
                },
                {
                    nombre:'Dharkan',
                    tipoCafe:'Café tostado y aterciopelado.',
                    intensidad:11,
                    precio:31,
                    precioSup:00,
                    descripcion:'Esta mezcla de Arábicas lavados de América Latina y Asia revela completamente su carácter gracias a la técnica de tostado largo a baja temperatura. Su poderosa personalidad revela intensas notas tostadas junto con toques de cacao amargo y cereales tostados que se expresan en una textura sedosa y aterciopelada. En la taza crea un equilibrio sutil y una amargura agradable que permanece en la boca.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372619690014/dharkan-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ], 
                    ctaCode: '7695.10',
                },
                {
                    nombre:'Ristretto',
                    tipoCafe:'Café poderoso y contrastante.',
                    intensidad:10,
                    precio:28,
                    precioSup:50,
                    descripcion:'Fuerte en sabor y cuerpo, Ristretto combina las mejores Arábicas sudamericanas, de países como Colombia y Brasil, con grandes Arábicas de África Oriental, famosas por sus aromas cítricos con un toque de Robusta para agregar sabor. El tueste lento y dividido de los granos crea una combinación contrastante, que reúne sutiles notas frutales y ácidas, con tostadas intensas y a chocolate.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372623360030/ristretto-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7704.10',
                },
                {
                    nombre:'Arpeggio',
                    tipoCafe:'Café Intenso y cremoso.',
                    intensidad:9,
                    precio:28,
                    precioSup:50,
                    descripcion:'El Arpeggio toma su carácter distintivo y cuerpo completo de una mezcla de Arabicas de America Central y Sudamerica. El tostado largo permite que cada aspecto se desarrolle en un combinación intensa, combinando el cacao y las notas tostadas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372627128350/arpeggio-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7691.10',
                },
                {
                    nombre:'Roma',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:8,
                    precio:28,
                    precioSup:50,
                    descripcion:'Un sutil equilibrio entre la fuerza, la delicadeza y la plenitud, Roma se distingue por sus notas amaderadas y tostadas. Arábicas de América Central y sudamericanas combinadas con Robusta han sido ligeramente tostadas para conservar el delicado aroma de la mezcla. Roma es el café ideal para aquellos que buscan un Espresso corto y suave.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372629323806/roma-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7439.10',
                }
            ]
        },
        {
            nombreVariedad: 'Espresso',
            capsulas: [
                {
                    nombre:'Livanto',
                    tipoCafe:'Café redondo y equilibrado.',
                    intensidad:6,
                    precio:28,
                    precioSup:50,
                    descripcion:'Esta mezcla de Arábicas de América Central y del Sur es de tueste mediano para sacar una combinación redonda y muy equilibrada. Evoca el olor del café recién tostado: notas tostadas y caramelizadas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372631584798/livanto-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7692.10',
                },
                {
                    nombre:'Capriccio',
                    tipoCafe:'Café intenso y singular.',
                    intensidad:5,
                    precio:28,
                    precioSup:50,
                    descripcion:'Capriccio es un Espresso equilibrado, con una ligera acidez y una nota a cereal muy característica. Se compone de Arábicas de América del Sur incluyendo Brasil, en proporciones ideales, y un toque de Robusta ligeramente tostado.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372634533918/capriccio-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7413.10',
                },
                {
                    nombre:'Volluto',
                    tipoCafe:'Café dulce y ligero.',
                    intensidad:4,
                    precio:28,
                    precioSup:50,
                    descripcion:'Deliciosamente perfumado, Volluto tiene un cuerpo redondo, con galletas dulces y notas ligeras a fruta. Una combinación de arábicas brasileñas y colombianas, su tueste ligero permite expresar toda la delicadeza de este Gran Cru.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372638203934/volluto-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7435.10',
                },
                {
                    nombre:'Cosi',
                    tipoCafe:'Café dulce y delicadamente tostado',
                    intensidad:4,
                    precio:28,
                    precioSup:50,
                    descripcion:'Puros Arábicas del este de África, de América Central y del Sur se armonizan en una mezcla delicada y equilibrada con notas a cereales ligeramente tostadas, potenciadas por sutiles notas afrutadas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372644560926/cosi-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7642.10',
                },
            ]
        },
        {
            nombreVariedad: 'Lungo',
            capsulas: [
                {
                    nombre:'Envivo Lungo',
                    tipoCafe:'Café potente y caramelizado.',
                    intensidad:9,
                    precio:31,
                    precioSup:00,
                    descripcion:'Envivo Lungo es un café Lungo que estimula los sentidos a través de su intenso y generoso carácter. Este café de tueste oscuro es una mezcla de un distintivo Arábica de la India con un Robusta de México, con notas tostadas y ricos aromas que recuerdan a los bosques aromáticos y pan de jengibre.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372648394782/envivolungo-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7654.10',
                },
                {
                    nombre:'Fortissio Lungo',
                    tipoCafe:'Café intenso y con mucho cuerpo.',
                    intensidad:8,
                    precio:31,
                    precioSup:00,
                    descripcion:'Combinamos granos de Arábica de Malabar de India con granos Arábicas latinoamericanos para crear un Lungo con un carácter verdaderamente intenso. Este café, rico en aroma, se expresa en hermosos cereales dulces y notas tostadas maltesas, y ofrece una agradable amargura con una exquisita plenitud en el paladar gracias a su textura redonda y suave.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372651507742/fortissiolungo-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7834.10',
                },
                {
                    nombre:'Vivalto Lungo',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Un complejo y equilibrado matrimonio entre arábicas sudamericanas cultivadas a gran altitud, entre las que destacan el "Cerrado" de Brasil y el Arábica de África Oriental. Vivalto Lungo combina notas florales tostadas y sutiles. El tueste separado de los granos realza el carácter de cada origen.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372655013918/vivaltolungo-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7810.10',
                },
                {
                    nombre:'Linizio Lungo',
                    tipoCafe:'Café redondo y suave.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Con Arábica pura de América del Sur, Linizio Lungo es una mezcla bien redondeada de café brasileño y colombiano. El tueste por separado da una nota a malta y a cereal típica de la variedad Bourbon, manteniendo su carácter equilibrado y suave.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372657307678/liniziolungo-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7622.10',
                },
            ]
        },
        {
            nombreVariedad: 'Decaffeinato',
            capsulas: [
                {
                    nombre:'Ristretto Decaffeinato',
                    tipoCafe:'Café intenso y cremoso.',
                    intensidad:10,
                    precio:31,
                    precioSup:00,
                    descripcion:'Intensamente tostado y rico en sabor, Ristretto Decaffeinato tiene el mismo poderoso carácter y sabor contrastante que el Ristretto original. Una selección de los mejores Arábicas latinoamericanos y del este africano se mezclan sofisticadamente con un toque de Robusta, tostados por separado para crear la sutil nota afrutada de este Espresso encorpado e intenso.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372661403678/decaffeinato-ristretto-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7702.10',
                },
                {
                    nombre:'Arpeggio Decaffeinato',
                    tipoCafe:'Café poderoso y contrastante.',
                    intensidad:9,
                    precio:31,
                    precioSup:00,
                    descripcion:'Tueste oscuro y rico en sabor, Arpeggio Decaffeinato tiene el mismo carácter fuerte, cuerpo intenso y notas de cacao indulgentes como el café Arpeggio original. Una selección de las mejores arábicas de América Central y del Sur enriquece esta mezcla con notas intensas a cacao. Los granos son cuidadosamente protegidos durante el proceso de descafeinización, permitiéndonos mantener la fuerza y riqueza aromática de la mezcla.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372663435294/decaffeinato-arpegio-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7697.10',
                },
                {
                    nombre:'Volluto Decaffeinato',
                    tipoCafe:'Café dulce y liviano.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Deliciosamente dulce y suave, Volluto Decaffeinato tiene los mismos ricos sabores y cuerpo redondo que el café Volluto original. Las arábicas puras seleccionadas de América del Sur son tostadas ligera y separadamente para destacar sus notas específicas, frescas y frutadas. El perfil aromático de estos cafés se conserva cuidadosamente durante el proceso de descafeinización, que respeta la verdadera naturaleza del grano de café, permitiéndonos mantener la fuerza y riqueza de sus aromas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372667924510/decaffeinato-voluto-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7645.10',
                },
                {
                    nombre:'Vivalto Lungo Decaffeinato',
                    tipoCafe:'Café complejo y equilibrado.',
                    intensidad:4,
                    precio:31,
                    precioSup:00,
                    descripcion:'Una mezcla compleja y equilibrada, Vivalto Lungo Decaffeinato tiene el mismo carácter rico que el original café Vivalto Lungo: tostado, ligeramente amaderado con cereales dulces y sutiles notas florales. Se trata de una mezcla de arábica pura de varios orígenes, incluyendo América del Sur y África Oriental. El perfil aromático de estos cafés se conserva cuidadosamente durante el proceso de descafeinización, que respeta la verdadera naturaleza del grano de café, permitiéndonos mantener la fuerza y riqueza de sus aromas.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372665303070/decaffeinato-vivaltolunfo-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7646.10',
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
                    descripcion:'Caramelito es un café elaborado sobre una base de café Livanto, una mezcla de arábicas de América del Sur y Centroamérica de carácter redondo y muy equilibrado. El sabor dulce del caramelo suaviza las notas tostadas. Este delicado blend evoca la cremosidad de un delicioso toffee.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372671430686/caramelito-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7699.10',
                },
                {
                    nombre:'Vanilio',
                    tipoCafe:'Café con aroma a vainilla.',
                    intensidad:6,
                    precio:32,
                    precioSup:00,
                    descripcion:'Vanilio es un café elaborado sobre una base de café Livanto, una mezcla de Arábicas de América del Sur y Centroamérica con un carácter redondo y muy equilibrado. Los aromas ricos y aterciopelados de la vainilla se expresan sutilmente en una textura suave. Una mezcla distinguida por su sabor, infinitamente suave y sedosa en el paladar.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372674052126/vanilio-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7698.10',
                },
                {
                    nombre:'Ciocattino',
                    tipoCafe:'Café con aroma a chocolate.',
                    intensidad:6,
                    precio:32,
                    precioSup:00,
                    descripcion:'Ciocattino es un café elaborado sobre una base de café Livanto, una mezcla de Arábicas de América del Sur y Central con un carácter redondo y muy equilibrado. Las notas de chocolate oscuro y amargo crean una armonía indulgente con las notas tostadas del café Livanto. Una rica combinación que recuerda a un cuadrado de chocolate negro.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372675756062/ciocattino-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7700.10',
                }
            ]
        },
        {
            nombreVariedad: 'Limited Edition',
            capsulas: [
                {
                    nombre:'Ispirazione Salentina',
                    tipoCafe:'Café cremoso y amaderado.',
                    intensidad:0,
                    precio:28,
                    precioSup:00,
                    descripcion:'Un café equilibrado con una textura suave y redonda, aromas a nuez y notas típicas de Robusta.',
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372681228318/salentina-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7689.10',
                },
                {
                    nombre:'Ispirazione Shakerato',
                    tipoCafe:'Café poderoso y duradero.',
                    intensidad:0,
                    precio:28,
                    precioSup:00,
                    descripcion:'Café intenso  y recto, con cacao y aromas especiados que deja un final tostado en boca.',
                    
                    fotos: [ { 
                        urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372683522078/shekerato-frontal.jpg?',
                        fotoAlt:'Vista 1',
                        }
                    ],
                    ctaCode: '7690.10',
                }
            ]
        }
    ];


    $scope.loadingSkeleton = function(mostrar = false) {
        if(!mostrar) {
            $('#skeleton_capsulas').css({
                'opacity':'0',    
                'z-index':10000,
                'display':'none'
            })
        } else {
            $('#skeleton_capsulas').css({
                'opacity':'1',    
                'z-index':10000,
                'position':'relative',
                'display':'block'
            })
        }   
    }

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
            //$scope.modalProducto.codigoCTA = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].ctaCode;
            $('#btn-add-to-bag-modal').data('product-id', $scope.variedades[$scope.variedadVisible].capsulas[idProducto].ctaCode);
            $scope.modalProducto.fotos = $scope.variedades[$scope.variedadVisible].capsulas[idProducto].fotos;
            //mosaic.initializeAllFreeHTMLModules(document.getElementById('modal-add-to-bag'));
            $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
        }
        else {
            $scope.modalProducto.esCapsula = false;
            $scope.modalProducto.tipoProducto = 'Máquinas';
            $scope.modalProducto.nombreProducto = $scope.maquinas[idProducto].nombre;
            $scope.modalProducto.descripcion = $scope.maquinas[idProducto].textoDescripcion;
            $scope.modalProducto.credito = $scope.maquinas[idProducto].credito;
            $scope.modalProducto.cuotas = $scope.calcularCuotas($scope.maquinas[idProducto].valorMaquina, $scope.maquinas[idProducto].cantCuotas);
            $scope.modalProducto.precioAnterior = $scope.maquinas[idProducto].precioAnterior;
            $scope.modalProducto.precioProducto = $scope.maquinas[idProducto].valorMaquina;
            //$scope.modalProducto.codigoCTA = $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].ctaCode;
            $('#btn-add-to-bag-modal').data('product-id', $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].ctaCode);
            $scope.modalProducto.colores = $scope.maquinas[idProducto].colores;
            $scope.modalProducto.fotos = $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].fotos;
            //mosaic.initializeAllFreeHTMLModules(document.getElementById('modal-add-to-bag'));
            $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
        }
        $('#modalProducto').modal('show');
    }
    $scope.calcularCuotas = function(paraPrecio, enCuotas){
        return (paraPrecio/enCuotas).toFixed(2);
    }
    $scope.mostrarMaquina = function(cualMaquina){
        $scope.colorSeleccionado = 0;
        $scope.maquinaVisible = cualMaquina;
        $('#btn-add-to-bag-maquinas').data('product-id', $scope.maquinas[$scope.maquinaVisible].colores[cual].ctaCode);
        $scope.reiniciarBotonesDeCompra('modalProducto');
        $scope.reiniciarBotonesDeCompra('botones_maquinas');
    }
    $scope.mostrarVariedad = function(cualVariedad){
        $scope.loadingSkeleton(true);
        $(".owl-capsulas").trigger('destroy.owl.carousel')
        $scope.variedadVisible = cualVariedad;
        $timeout(function(){
            $(".owl-capsulas").owlCarousel({
                loop: true,
                margin: 10,
                dots:false,
                responsiveClass: true,
                responsive: {
                    0: {
                    items: 1,
                    nav: false,
                    },
                    600: {
                    items: 2,
                    nav: false
                    },
                    1000: {
                    items: 4,
                    nav: false,
                    loop: false
                    }
                }
            });
            $scope.reiniciarBotonesDeCompra('botones_capsulas');
            $scope.loadingSkeleton(false);
        }, 300);
        
    }
    $scope.elegirColor = function(cual){
        $scope.colorSeleccionado = cual;
        $scope.colorSeleccionadoModal = cual;
        $('#btn-add-to-bag-maquinas').data('product-id', $scope.maquinas[$scope.maquinaVisible].colores[cual].ctaCode);
        $scope.reiniciarBotonesDeCompra('modalProducto');
        $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
    }
    $scope.elegirColorModal = function(cual){
        $scope.modalProducto.fotos = $scope.maquinas[$scope.maquinaVisible].colores[cual].fotos;
        $scope.colorSeleccionadoModal = cual;
        $('#btn-add-to-bag-modal').data('product-id', $scope.maquinas[$scope.maquinaVisible].colores[cual].ctaCode);
        $scope.reiniciarBotonesDeCompra('modalProducto');
        $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
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
    $scope.reiniciarBotonesDeCompra = function(paraId){
        mosaic.initializeAllFreeHTMLModules(document.getElementById(paraId));
    }


    $scope.loadingSkeleton(false);
    
}])
