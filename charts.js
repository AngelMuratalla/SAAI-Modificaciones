// Indices de cada seccion 
let allCharts = Array.from({ length: 22 }, (_, index) => index + 1);
let alumnosCharts = [1, 2, 3, 4, 5, 6];
let docentesCharts = [9, 10, 11, 18];
let personalCharts = [12];
let duacydCharts = [7, 8];
let ueuCharts = [19];
let investigacionCharts = [13, 14, 15, 16, 17];
let serviciosCharts = [20];


// Rellenar un contenedor (wrapper) a partir de indices e id del contenedor
function fillContainer(chartList, wrapperID){

    console.log(`Llenando contenedor de ${wrapperID}`);

    chartList.forEach((chartIndex) => {
        document.getElementById(wrapperID).innerHTML += `
            <div id="chart${chartIndex}-container">
                <div id="chart${chartIndex}"></div>
            </div>
        `;
    });
}

// Vaciar un contenedor (wrapper) a partir del id del contenedor
function emptyContainer(wrapperID){

    console.log(`Vaciando contenedor de ${wrapperID}`);

    document.getElementById(wrapperID).innerHTML = "";    
}

// Banderas de control
let estadisticaFlag = false;
let alumnosFlag = false;
let docentesFlag = false;
let duacydFlag = false;
let personalFlag = false;
let ueuFlag = false;
let investigacionFlag = false;
let serviciosFlag = false;


/*-------------- Explicacion de funciones show --------------------------*/

// ShowAll muestra todos los graficos construidos con d3js
function showAll(){
    /*En caso de que la bandera de control este activa 
    quiere decir que se esta mostrando contenido dentro del contenedor
    cambiamos el valor de la bandera y vaciamos el contenedor*/
    if(estadisticaFlag){
        estadisticaFlag = false;
        emptyContainer("estadistica");
    }
    /*En caso contrario simplemente se asigna a true para
    indicar que se esta mostrando contenido y rellenamos el contenedor */
    else{
        estadisticaFlag = true;
        fillContainer(allCharts, "estadistica");
        generateCharts();
    }
}

/*---------------------------------------------------------------------*/

function showAlumnos(){
    if(alumnosFlag){
        alumnosFlag = false;
        emptyContainer("alumnos");
    } else{
        alumnosFlag = true;
        fillContainer(alumnosCharts, "alumnos");
        generateCharts();
    }
}

function showDocentes() {
    if (docentesFlag) {
        docentesFlag = false;
        emptyContainer("docentes");
    } else {
        docentesFlag = true;
        fillContainer(docentesCharts, "docentes");
        generateCharts();
    }
}

function showDuacyd() {
    if (duacydFlag) {
        duacydFlag = false;
        emptyContainer("duacyd");
    } else {
        duacydFlag = true;
        fillContainer(duacydCharts, "duacyd");
        generateCharts();
    }
}

function showPersonal() {
    if (personalFlag) {
        personalFlag = false;
        emptyContainer("personal");
    } else {
        personalFlag = true;
        fillContainer(personalCharts, "personal");
        generateCharts();
    }
}

function showUEU() {
    if (ueuFlag) {
        ueuFlag = false;
        emptyContainer("ueu");
    } else {
        ueuFlag = true;
        fillContainer(ueuCharts, "ueu");
        generateCharts();
    }
}

function showInvestigacion() {
    if (investigacionFlag) {
        investigacionFlag = false;
        emptyContainer("investigacion");
    } else {
        investigacionFlag = true;
        fillContainer(investigacionCharts, "investigacion");
        generateCharts();
    }
}

function showServicios() {
    if (serviciosFlag) {
        serviciosFlag = false;
        emptyContainer("servicios");
    } else {
        serviciosFlag = true;
        fillContainer(serviciosCharts, "servicios");
        generateCharts();
    }
}







// ---------------------------------GRAFICOS---------------------------
function createLineChart(chartObject){
    c3.generate({
        bindto: chartObject.bindto, //Especifica en que contenedor se generará
        data: {
            x: 'x',
            columns: [
                ['x', '2019-01', '2019-02', '2020-01', '2020-02', '2021-01', '2021-02', '2022-01', '2022-02', '2023-01', '2023-02', '2024-01', '2024-02'],
                ['Matricula', 18452, 20035, 18860, 21064, 19634, 21245, 20125, 23796, 19863, 20843, 19536],
            ],
            type: 'line',
            colors: {
                Matricula: '#202c56 ' // Color de la línea
                 
            }
        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    format: '%Y-%m',
                    rotate: 75, // Rotar etiquetas para mejor visibilidad
                    multiline: false
                },
                height: 70 // Ajuste de altura para espacio de las etiquetas rotadas
            },
            y: {
                tick: {
                    format: d3.format(",")  // Añade comas cada tres dígitos
                },
                label: {
                    text: 'Número de alumnos',
                    position: 'outer-middle'
                }
            }
        },
        legend: {
            show: true,
            position: 'left'
        },
        size: {
            height:500,
            width: 500
        },
        padding: {
            top: 20,
            right: 50,
            bottom: 0,
            left: 60
        },
        title: {
            text: 'Matrícula Anual',
            position: 'top-center'

        },
        point: {
            r: 5, // Tamaño de los puntos en la línea
            focus: {
                expand: {
                    r: 7  // Aumenta el tamaño al pasar el mouse
                }
            }
        },
        tooltip: {
            format: {
                value: function(value) {
                    return d3.format(",")(value);  // Formato de número con comas
                }
            }
        }
    });
}


    function generateCharts(){
        // var chart1 = c3.generate({
        //     bindto: '#chart1', // Especifica el contenedor para el gráfico
        //     data: {
        //         x: 'x',
        //         columns: [
        //             ['x', '2019-01', '2019-02', '2020-01', '2020-02', '2021-01', '2021-02', '2022-01', '2022-02', '2023-01', '2023-02', '2024-01', '2024-02'],
        //             ['Matricula', 18452, 20035, 18860, 21064, 19634, 21245, 20125, 23796, 19863, 20843, 19536],
        //         ],
        //     },
        //     axis: {
        //         x: {
        //             type: 'category',
        //             tick: {
        //                 format: '%Y-%m'
        //             }
        //         },
        //         y: {
        //             tick: {
        //                 format: d3.format(",")  // Esto añade comas cada tres dígitos
        //             }
        //         }
        //     }       
        // }); 
        
        var chart1 = c3.generate({
            bindto: '#chart1', // Especifica el contenedor para el gráfico
            data: {
                x: 'x',
                columns: [
                    ['x', '2019-01', '2019-02', '2020-01', '2020-02', '2021-01', '2021-02', '2022-01', '2022-02', '2023-01', '2023-02', '2024-01', '2024-02'],
                    ['Matricula', 18452, 20035, 18860, 21064, 19634, 21245, 20125, 23796, 19863, 20843, 19536],
                ],
                type: 'line',
                colors: {
                    Matricula: '#202c56 ' // Color de la línea
                     
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        format: '%Y-%m',
                        rotate: 75, // Rotar etiquetas para mejor visibilidad
                        multiline: false
                    },
                    height: 70 // Ajuste de altura para espacio de las etiquetas rotadas
                },
                y: {
                    tick: {
                        format: d3.format(",")  // Añade comas cada tres dígitos
                    },
                    label: {
                        text: 'Número de alumnos',
                        position: 'outer-middle'
                    }
                }
            },
            legend: {
                show: true,
                position: 'left'
            },
            size: {
                height:500,
                width: 500
            },
            padding: {
                top: 20,
                right: 50,
                bottom: 0,
                left: 60
            },
            title: {
                text: 'Matrícula Anual',
                position: 'top-center'

            },
            point: {
                r: 5, // Tamaño de los puntos en la línea
                focus: {
                    expand: {
                        r: 7  // Aumenta el tamaño al pasar el mouse
                    }
                }
            },
            tooltip: {
                format: {
                    value: function(value) {
                        return d3.format(",")(value);  // Formato de número con comas
                    }
                }
            }
        });
        
        
        var chart2 = c3.generate({
            bindto: '#chart2', // Especifica el contenedor para el gráfico
            data: {
                x: 'x',
                columns: [
                    ['x', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    ['Titulados', 2273, 2275, 2473, 2351, 846, 2039, 3056],
                ],
                type: 'line'
            },
            axis: {
                x: {
                    type: 'category'  // Configuramos el eje 'x' como categórico ya que usas años
                },
                y: {
                    tick: {
                        format: d3.format(",")  // Formatea los números con comas cada tres dígitos
                    }
                }
            }
        });
        
        /*Grafica 3*/
            
        var chart4 = c3.generate({
            bindto: '#chart4', // Especifica el contenedor para el gráfico
            data: {
                x: 'x',
                columns: [
                    ['x', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['Eficiencia Total', 58.4, 57.6, 59.9, 60.2, 63.9, 65.3, 65.1],
                    
                ],
                type: 'line'
            }
        });
        
        /*Constante Movilidad*/
        const data = {
            columns: [
                ['Cantidad', 450, 450, 74, 73, 61, 61, 50, 15, 14, 13, 13, 11, 7, 7, 6, 5, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            type: 'bar',
            labels: true,
            color: function (color, d) {
                const colors = [
                        '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', 
                        '#bcbd22', '#17becf', '#393b79', '#637939', '#8c6d31', '#843c39', '#5254a3', '#6b6ecf', 
                        '#637939', '#8c564b', '#9c9ede', '#d6616b', '#e7969c', '#7b4173', '#a55194', '#843c39', 
                        '#d6616b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'
                ];
                return colors[d.index];
            }
        };
        
        var chart5 = c3.generate({
            bindto: '#chart5',
            data: data,
            bar: {
                width: {
                    ratio: 0.5 // ancho de las barras
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: [
                            'España', 'Canadá', 'Colombia', 'Argentina', 'Estados Unidos',
                            'Reino Unido', 'Chile', 'Corea del Sur', 'Brasil', 'Irlanda',
                            'Perú', 'Alemania', 'Cuba', 'Rusia', 'Francia', 'Costa Rica',
                            'Italia', 'Australia', 'Japón', 'Panamá', 'Paraguay',
                            'Portugal', 'República Checa', 'China', 'Bélgica', 'Ecuador',
                            'El Salvador', 'Israel', 'Líbano', 'Países Bajos', 'Polonia',
                            'Serbia', 'Sudáfrica', 'Suiza', 'Uruguay'
                    ],
                    tick: {
                        rotate: 75,
                        multiline: false
                    },
                    label: {
                        text: 'País',
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: 'Cantidad de Alumnos',
                        position: 'outer-middle'
                    }
                }
            },
            tooltip: {
                show: true
            }
        });
        
        var chart6 = c3.generate({
            bindto: '#chart6',
            data: {
                columns: [
                    ['2016-2020', 34711],
                    ['2020-2024', 57441]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // ancho de las barras
                }
            },
            axis: {
                y: {
                    tick: {
                        format: function (d) {
                            // Formatea el número con comas cada tres dígitos
                            return d3.format(',')(d);
                        }
                    },
                    label: {
                        text: 'Alumnos y Alumnas',
                        position: 'outer-middle'
                    }
                }
            },
            tooltip: {
                format: {
                    title: function (x) {
                        return 'Periodo ';
                    },
                    value: function (value, ratio, id) {
                        return 'Cantidad: ' + d3.format(',')(value);
                    }
                }
            }
        });
        
        /*Constantes Servicio social*/
        const data2 = {
            columns: [
                ['Programas de servicio social', 816],
                ['Ganadores del premio al servicio social', 58]
            ],
            type: 'donut'
        };
        
        var chart7 = c3.generate({
            bindto: '#chart7',
            data: data2,
            donut: {
                label: {
                    show: true
                    }
                },
            color: {
                pattern: ['#1f77b4', '#ff7f0e']
            },
            title: {
                text: 'Relación entre Programas de Servicio Social y Ganadores del Premio'
            }
        });
        
        var chart8 = c3.generate({
            bindto: '#chart8',
            data: {
                columns: [
                    ['Comunidad atendida', 23630],
                    ['Cursos realizados', 1097]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // ancho de las barras
                }
            },
            axis: {
                y: {
                    tick: {
                        format: function (d) {
                        // Formatea el número con comas cada tres dígitos
                            return d3.format(',')(d);
                        }
                    }
                }
            },
            tooltip: {
                format: {
                    title: function (x) {
                        return 'Educación Continua'; // Encabezado del tooltip
                    },
                    value: function (value, ratio, id) {
                        return d3.format(',')(value); // Valor formateado con comas
                    }
                }
            }
        });
        
        var chart9 = c3.generate({
            bindto: '#chart9',
            data: {
                columns: [
                    ['Estudiantes inscritos', 45927],
                    ['Número de cursos', 1745]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // ancho de las barras
                }
            },
            axis: {
                y: {
                    tick: {
                        format: function (d) {
                            // Formatea el número con comas cada tres dígitos
                            return d3.format(',')(d);
                        }
                    }
                }
            },
            tooltip: {
                format: {
                    title: function () {
                        return 'Centro de Lenguas'; // Encabezado del tooltip
                    },
                    value: function (value, ratio, id) {
                        return d3.format(',')(value); // Valor formateado con comas
                    }
                }
            }
        });
        
        var chart10 = c3.generate({
            bindto: '#chart10',
            data: {
                // iris data from R
            columns: [
                    ["Carreta TC y MT", 86],
                    ["Técnicos", 46],
                    ["Asignatura", 1600],
                    ["Ayudantes", 104],
                ],
                type : 'pie',
            }
        });
        
        var chart11 = c3.generate({
            bindto: '#chart11',
            data: {
                // iris data from R
                columns: [
                    ["Doctorado", 210],
                    ["Maestría", 526],
                    ["Especialidad", 38],
                    ["Licenciatura", 915],
                    ["Técnico", 7],
                    ["Pasante de licenciatura", 140],
                ],
                type : 'pie',
            }
        });
        
        /*Constantes Estimulos*/
        const data3 = {
            columns: [
                ['PEPASIG', 1367],
                ['PRIDE', 98],
                ['PEDPACMeT', 3],
                ['PEE', 23],
                ['PEI', 1]
            ],
            type: 'bar',
            groups: [
                ['PEPASIG', 'PRIDE', 'PEDPACMeT', 'PEE', 'PEI']
            ],
            colors: {
                PEPASIG: '#1f77b4',
                PRIDE: '#ff7f0e',
                PEDPACMeT: '#2ca02c',
                PEE: '#d62728',
                PEI: '#9467bd'
            }
        };
        
        var chart12= c3.generate({
            bindto: '#chart12',
            data: data3,
            bar: {
                width: {
                    ratio: 0.5 // ancho de las barras
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: ['']
                },
                y: {
                    label: {
                        text: 'Valor',
                        position: 'outer-middle'
                        }
                    }
            },
            grid: {
                y: {
                    show: true
                }
            }
        });        
        
        var chart13 = c3.generate({
            bindto: '#chart13',
            data: {
                // iris data from R
                columns: [
                    ["Base", 605],
                    ["Confianza", 57],
                    ["Funcionarios", 99],
                ],
                type : 'pie',
            }
        });
        
        var chart14 = c3.generate({
            bindto: '#chart14',
            data: {
                x : 'x',
                columns: [
                    ['x', 'Ciencias y Desarrollo tecnológico', 'PAPIME', 'Humanidades y ciencias sociales', 'Convenios en investigación', 'PAPIIT', 'Proyectos de posdoctorantes'],
                    ['Proyectos', 22, 17, 21, 4, 7, 10],
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        rotate: 75,
                        multiline: false
                    },
                    height: 130
                }
            }
        });
        
        var chart15 = c3.generate({
            bindto: '#chart15',
            data: {
                xs: {
                    'PAPIME': 'x1',
                    'PAPIIT': 'x2',
                },
            columns: [
                    ['x1', 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024],
                    ['x2', 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024],
                    ['PAPIME', 9, 7, 9, 19, 26, 16, 12, 18, 17],
                    ['PAPIIT', 6, 6, 7, 8, 14, 16, 11, 6, 7]
                ]
            }
        });        
        
        var chart16 = c3.generate({
            bindto: '#chart16',
            data: {
                xs: {
                    'SNI': 'x1',
                },
                columns: [
                    ['x1', 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                    ['SNI', 27, 26, 28, 35, 30, 42, 55, 55]
                ]
            }
        });
        
        var chart17 = c3.generate({
            bindto: '#chart17',
            data: {
                xs: {
                    'Adscritos a la Facultad': 'x1',
                    'Adscritos a otras instituciones': 'x2',
                },
                columns: [
                    ['x1', 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                    ['x2', 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                    ['Adscritos a la Facultad', 13, 11, 11, 17, 14, 19, 18, 18],
                    ['Adscritos a otras instituciones', 14, 15, 17, 18, 16, 23, 37, 37]
                ]
            }
        });
        
        var chart18 = c3.generate({
            bindto: '#chart18',
            data: {
                x : 'x',
                columns: [
                    ['x', 'Nuevas ediciones, reimpresiones y libros digitales en ePUB y PDF', 'Gacetas', 'Textos Fesarnotes'],
                    ['publicaciones', 111, 91, 25],
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        rotate: 75,
                        multiline: false
                    },
                    height: 130
                }
            }
        });
        
        var chart19 = c3.generate({
            bindto: '#chart19',
            data: {
                columns: [
                    ["Total de cursos", 400],
                    ["Total de inscripciones registradas", 11213],
                ],
                type: 'donut',
            },
            donut: {
                title: "PASD 2017-2024"
            },
            tooltip: {
                format: {
                    value: function (value, ratio, id) {
                        return value;  // Muestra el valor numérico en el tooltip
                    }
                }
            }
        });
        
        /*Grafico 20*/
        
        var chart21 = c3.generate({
            bindto: '#chart21',
            data: {
                columns: [
                    ["Personas inscritas", 8961],
                    ["Actividades ofertadas", 52],
                ],
                type : 'donut',
            },
            donut: {
                title: "Actividades deportivas"
            },
            tooltip: {
                format: {
                    value: function (value, ratio, id) {
                        return value;  // Muestra el valor numérico en el tooltip
                    }
                }
            }
        });
        
        var chart22 = c3.generate({
            bindto: '#chart22',
            data: {
                columns: [
                    ["Títulos", 66313],
                    ["Ejemplares", 336607],
                    ["Libros digitales", 68847],
                ],
                type: 'donut',
                colors: {
                    "Títulos": '#1f77b4',
                    "Ejemplares": '#fff',
                    "Libros digitales": '#000'
                }
            },
            donut: {
                title: "Biblioteca",
                label: {
                    format: function(value, ratio, id) {
                        return value;
                    }
                },
                width: 40 // Ajusta el grosor del donut
            },
            tooltip: {
                format: {
                    value: function (value, ratio, id) {
                        return value;  // Muestra el valor numérico en el tooltip
                    }
                }
            },
            legend: {
                position: 'right' // Mueve la leyenda a la derecha
            },
            size: {
                height: 400,
                width: 400
            },
            padding: {
                top: 10,
                right: 20,
                bottom: 10,
                left: 20
            },
            title: {
                text: 'Estadísticas de la Biblioteca',
                position: 'top-center'
            }
        });
        
    }


