angular.module('HotSaleApp', [])
.controller('HotSaleController', ['$scope', 'HotSaleService', function($scope, HotSaleService){
    $scope.maquinaVisible = 0;
    $scope.colorSeleccionado = 0;
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
            nombre: "Essenza Mini",
            valorMaquina: 3549.00,
            credito: "$2.400",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "lorem impsum....",
            colores: [
                {
                    nombreColor: "red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test2.jpg',
                            altFoto: 'Vista 2',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test3.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Essenza Mega",
            valorMaquina: 3549.00,
            credito: "$2.400",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "lorem impsum....",
            colores: [
                {
                    nombreColor: "red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test2.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test3.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                },
                {
                    nombreColor: "green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Essenza Archi",
            valorMaquina: 3549.00,
            credito: "$2.400",
            precioAnterior: 5990.00,
            cantCuotas: 6,
            textoDescripcion: "lorem impsum....",
            colores: [
                {
                    nombreColor: "red",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test2.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test3.jpg',
                            altFoto: 'Vista 3',
                            esPortada: true
                        }
                    ]
                },
                {
                    nombreColor: "green",
                    ctaCode: 'maq_D30-AR-RE-NE',
                    fotos: [
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'images/maquinas/maquina-silver-test.jpg',
                            altFoto: 'Vista 3',
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