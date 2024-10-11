/* TODO:
- Arreglar los estilos de los titulos
- Añadir las leyendas de ambos ejes en todas la funciones create
- Añador los atributos correspondientes a cada grafico para seguir la generalización indicada  
- Agregar tablita 
*/

//--------------------------------FUNCIONES DE LLENADO----------------------------------------

/* 
Indices de cada seccion:
Estos indices se ocupan para decir exactamente que graficos vamos a generar al momento
de dar click en los botones que se muestran al cargar la pagina.
*/
let allCharts = Array.from({ length: 26 }, (_, index) => index + 1);
let alumnosCharts = [1, 4, 5, 6, 7, 8];
let docentesCharts = [11, 12, 13, 20];
let personalCharts = [14];
let duacydCharts = [9, 10];
let ueuCharts = [21];
let investigacionCharts = [15, 16, 17, 18, 19];
let serviciosCharts = [22,23,24,25,26];


// Rellenar una agrupacion (wrapper) a partir de indices de graficos e id del contenedor a vincular
function fillWrapper(chartList, wrapperID){

    console.log(`Llenando contenedor de ${wrapperID}`);

    chartList.forEach((chartIndex) => {
        document.getElementById(wrapperID).innerHTML += `
            <div id="chart${chartIndex}-container" class="chart-container">
                <div id="chart${chartIndex}-${wrapperID}"></div>
            </div>
        `;
    });
}

// Vaciar una agrupacion (wrapper) a partir del id del contenedor
function emptyWrapper(wrapperID){

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
        emptyWrapper("estadistica");
    }
    /*En caso contrario simplemente se asigna a true para
    indicar que se esta mostrando contenido y rellenamos el contenedor */
    else{
        estadisticaFlag = true;
        fillWrapper(allCharts, "estadistica");
        generateCharts(allCharts, "estadistica");
    }
}

/*---------------------------------------------------------------------*/

function showAlumnos(){
    if(alumnosFlag){
        alumnosFlag = false;
        emptyWrapper("alumnos");
    } else{
        alumnosFlag = true;
        fillWrapper(alumnosCharts, "alumnos");
        generateCharts(alumnosCharts, "alumnos");
    }
}

function showDocentes() {
    if (docentesFlag) {
        docentesFlag = false;
        emptyWrapper("docentes");
    } else {
        docentesFlag = true;
        fillWrapper(docentesCharts, "docentes");
        generateCharts(docentesCharts, "docentes");
    }
}

function showDuacyd() {
    if (duacydFlag) {
        duacydFlag = false;
        emptyWrapper("duacyd");
    } else {
        duacydFlag = true;
        fillWrapper(duacydCharts, "duacyd");
        generateCharts(duacydCharts, "duacyd");
    }
}

function showPersonal() {
    if (personalFlag) {
        personalFlag = false;
        emptyWrapper("personal");
    } else {
        personalFlag = true;
        fillWrapper(personalCharts, "personal");
        generateCharts(personalCharts, "personal");
    }
}

function showUEU() {
    if (ueuFlag) {
        ueuFlag = false;
        emptyWrapper("ueu");
    } else {
        ueuFlag = true;
        fillWrapper(ueuCharts, "ueu");
        generateCharts(ueuCharts, "ueu");
    }
}

function showInvestigacion() {
    if (investigacionFlag) {
        investigacionFlag = false;
        emptyWrapper("investigacion");
    } else {
        investigacionFlag = true;
        fillWrapper(investigacionCharts, "investigacion");
        generateCharts(investigacionCharts, "investigacion");
    }
}

function showServicios() {
    if (serviciosFlag) {
        serviciosFlag = false;
        emptyWrapper("servicios");
    } else {
        serviciosFlag = true;
        fillWrapper(serviciosCharts, "servicios");
        generateCharts(serviciosCharts, "servicios");
    }
}


// ---------------------------------GRAFICOS---------------------------
const chartHeight = 500;
const chartWidth = 0;

/* Cada elemento de la lista (chartObjet) debe tener dentro de si los siguientes datos

bindto: 'En que contenedor se va a construir'
data: 'Los datos que vamos a mostrar en el gráfico (Objeto)'
title: 'Titulo del grafico'
xTitle: 'Titulo del eje horizontal'
yTitle: 'Título del eje vertical'
type: 'tipo de grafico a construir'

Data: puede variar un poco dependiendo de tipo de grafico que se desea construir.
*/
let chartNumber = 1;
const chartObjectsList = [
    {
        bindto: `#chart${chartNumber++}`,
        data : {
            columns: [
                ['x', '2019-01', '2019-02', '2020-01', '2020-02', '2021-01', '2021-02', '2022-01', '2022-02', '2023-01', '2023-02', '2024-01', '2024-02'],
                ['Matricula', 18452, 20035, 18860, 21064, 19634, 21245, 20125, 23796, 19863, 20843, 19536],
            ],
        } ,
        title: 'Matrícula FES Aragón 2019-2025',
        xTitle: 'Matricula',
        yTitle: 'Número de alumnos',
        type: 'line'
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
            xs:  {
                'Hombres': 'x1',
                'Mujeres': 'x2',
            },
            columns:[
                ['x1', 'ARQ', 'DI', 'PED', 'ICI', 'ICO', 'IEE', 'IID', 'IMC', 'CYP', 'DER', 'ECO', 'PDA', 'RRII', 'SOC', 'SUA-DER', 'SUA-ECO', 'SUA-RRII'],
                ['x2', 'ARQ', 'DI', 'PED', 'ICI', 'ICO', 'IEE', 'IID', 'IMC', 'CYP', 'DER', 'ECO', 'PDA', 'RRII', 'SOC', 'SUA-DER', 'SUA-ECO', 'SUA-RRII'],
                ['Hombres', 874, 254, 322, 1237, 1453, 636, 651, 715, 1072, 3082, 781, 140, 422, 224, 676, 386, 265],
                ['Mujeres', 709, 349, 1155, 264, 268, 90, 239, 100, 1030, 2933, 389, 164, 791, 238, 703, 213, 355]
            ],
        },
        title: 'Matrícula estudiantil de licenciaura - FES Aragón Semestre 2025-I',
        yTitle: 'Alumnos',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: { 
            xs: {
                'Hombres': 'x1',
                'Mujeres': 'x2',
            },
            columns: [
                ['x1', 'Maestría en Economía','Doctorado en Derecho','Maestría en Pedagogía','Doctorado en Economía',
                'Especialización en Puentes','Maestría en Estudios Políticos y Sociales','Maestría en Arquitectura',
                'Doctorado en Pedagogía','Maestría en Ingeniería','Maestría en Política Criminal','Maestría en Derecho'],
                ['x2', 'Maestría en Economía','Doctorado en Derecho','Maestría en Pedagogía','Doctorado en Economía',
                'Especialización en Puentes','Maestría en Estudios Políticos y Sociales','Maestría en Arquitectura',
                'Doctorado en Pedagogía','Maestría en Ingeniería','Maestría en Política Criminal','Maestría en Derecho'],
                ['Hombres', 2,3,3,5,7,5,9,4,15,11,70],
                ['Mujeres', 2,1,2,0,0,3,5,11,3,15,47]
            ],
        },
        title: 'Matrícula estudiantil de posgrado - FES Aragón Semestre 2025-I',
        yTitle: 'Alumnos',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data : {
            columns: [
                ['x', '2011-I','2012-I','2013-I','2014-I','2015-I','2016-I','2017-I','2018-I','2019-I','2020-I','2021-I',
                '2022-I','2023-I','2024-I','2025-I'],
                ['Matricula',  298,413,344,314,342,364,330,335,357,258,256,256,201,235,223],
            ],
        },
        title: 'Histórico de matrícula de estudiantes de posgrado FES Aragón',
        xTitle: 'Matricula',
        yTitle: 'Estudiantes',
        type: 'line' 
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
            columns: [
                ['x', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                ['Titulados', 2273, 2275, 2473, 2351, 846, 2039, 3056],
            ],
        },
        title: 'Titulación Enero 2017 a Marzo 2024',
        xTitle: 'Titulados',
        yTitle: 'Número de alumnos',
        type: 'line' 
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
            columns: [
                ['x', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Eficiencia Total', 58.4, 57.6, 59.9, 60.2, 63.9, 65.3, 65.1],
                
            ],
        },
        title: 'Eficiencia Terminal Total-Licenciatura',
        xTitle: 'Eficiencia Total',
        yTitle: '',
        type: 'line' 
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
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
        },
        categories: [
            'España', 'Canadá', 'Colombia', 'Argentina', 'Estados Unidos',
            'Reino Unido', 'Chile', 'Corea del Sur', 'Brasil', 'Irlanda',
            'Perú', 'Alemania', 'Cuba', 'Rusia', 'Francia', 'Costa Rica',
            'Italia', 'Australia', 'Japón', 'Panamá', 'Paraguay',
            'Portugal', 'República Checa', 'China', 'Bélgica', 'Ecuador',
            'El Salvador', 'Israel', 'Líbano', 'Países Bajos', 'Polonia',
            'Serbia', 'Sudáfrica', 'Suiza', 'Uruguay'
        ],
        title: 'Movilidad',
        xTitle: 'País',
        yTitle: 'Cantidad de alumnos',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
            columns: [
                ['2016-2020', 34711],
                ['2020-2024', 57441]
            ],
            type: 'bar'
        },
        title: 'Alumnas y alumnos becados',
        xTitle: 'Año',
        yTitle: 'Alumnos',
        type: 'bar'
    },
    {   
        bindto: `#chart${chartNumber++}`, 
        columns: [
            ['Programas de servicio social', 816],
            ['Ganadores del premio al servicio social', 58]
        ],
        colors: ['#1f77b4', '#ff7f0e'],
        type: 'donut',
    },
    {
        bindto: `#chart${chartNumber++}`, 
        data: {
            columns: [
                ['Comunidad atendida', 23630],
                ['Cursos realizados', 1097]
            ],
            type: 'bar'
        },
        title: 'Educación continua',
        xTitle: '',
        yTitle: '',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            columns: [
                ['Estudiantes inscritos', 45927],
                ['Número de cursos', 1745]
            ],
            type: 'bar'
        },
        title: 'Centro de lenguas 2021-I a 2024-II',
        xTitle: '',
        yTitle: '',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            columns: [
                ["Carreta TC y MT", 86],
                ["Técnicos", 46],
                ["Asignatura", 1600],
                ["Ayudantes", 104],
            ],
            type : 'pie',
        },
        title: 'Personal académico 2024',
        type: 'pie'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data:  {
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
        },
        // colors: []
        title: 'Grado académico de la comunidad docente',
        type: 'pie'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data:{
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
            },
        },
        title: 'Estimulos',
        xTitle: 'Estimulos',
        yTitle: 'Valor',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            // iris data from R
            columns: [
                ["Base", 605],
                ["Confianza", 57],
                ["Funcionarios", 99],
            ],
            type : 'pie',
        },
        // color: [],
        title: 'Personal administrativo y de base',
        type:'pie'  
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            xs: {
                'Profesores de Carrera': 'x1',
                'Técnicos Académicos': 'x2',
            },
            columns: [
                ['x1', '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
                ['x2', '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
                ['Profesores de Carrera', 66,65,66,68,67,67,65,66,66,73,73,76,74,79,86],
                ['Técnicos Académicos', 46,45,45,45,45,45,46,49,48,47,46,44,44,44,45],
            ],
        },
        title: 'Histórico de Profesores de Carrera y Técnicos Académicos de la FES Aragón',
        xTitle: 'Año',
        yTitle: 'Profesor',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            x : 'x',
            columns: [
                ['x', 'Ciencias y Desarrollo tecnológico', 'PAPIME', 'Humanidades y ciencias sociales', 'Convenios en investigación', 'PAPIIT', 'Proyectos de posdoctorantes'],
                ['Proyectos', 22, 17, 21, 4, 7, 10],
            ],
            type: 'bar'
        },
        title: 'Proyectos de investigación 2024',
        xTitle: '',
        yTitle: '',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`,
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
            ],
        },
        title: 'Histórico de Profesores de Carrera y Técnicos Académicos de la FES Aragón',
        xTitle: 'Año',
        yTitle: 'Profesor',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            x : 'x',
            columns: [
                ['x', 'Ciencias y Desarrollo tecnológico', 'PAPIME', 'Humanidades y ciencias sociales', 'Convenios en investigación', 'PAPIIT', 'Proyectos de posdoctorantes'],
                ['Proyectos', 22, 17, 21, 4, 7, 10],
            ],
            type: 'bar'
        },
        title: 'Proyectos de investigación 2024',
        xTitle: '',
        yTitle: '',
        type: 'bar'
    },
    {
        bindto: `#chart${chartNumber++}`,
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
            ],
        },
        title: 'Proyectos de investigación desarrollados con financiamiento institucional', 
        yTitle: 'Proyectos',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: { 
            columns: [
                ['x', 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                ['SNI', 27, 26, 28, 35, 30, 42, 55, 55]
            ],
        },
        title: 'Total de docentes adscritos al Sistema Nacional de Investigación (SNI)', 
        yTitle: 'Docentes',
        type: 'line'  
    },
    {
        bindto: `#chart${chartNumber++}`,
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
            ],
        },
        title: 'Docentes en el Sistema Nacional de Investigadores (SNI)',
        yTitle: 'Docentes',
        type: 'multipleLine'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data:{
            x : 'x',
            columns: [
                ['x', 'Nuevas ediciones, reimpresiones y libros digitales en ePUB y PDF', 'Gacetas', 'Textos Fesarnotes'],
                ['publicaciones', 111, 91, 25],
            ],
            type: 'bar'
        },
        title: 'Publicaciones',
        xTitle: '',
        yTitle: '',
        type: 'bar',
    },
    {
        bindto: `#chart${chartNumber++}`,
        columns: [
            ["Total de cursos", 400],
            ["Total de inscripciones registradas", 11213],
        ],
        title: 'Programa de actualización y superación docente (PASD) 2017-2024',
        // colors: [],
        type: 'donut'
    },
    {
        bindto: `#chart${chartNumber++}`,
        columns: [
            ["Personas inscritas", 8961],
            ["Actividades ofertadas", 52],
        ],
        title: 'Actividades deportivas',
        type: 'donut'
    },
    {
        bindto: `#chart${chartNumber++}`,
        columns: [
            ["Títulos", 66313],
            ["Ejemplares", 336607],
            ["Libros digitales", 68847],
        ],
        title: 'Biblioteca',
        type: 'donut'
    }

];


function createLineChart(chartObject,wrapperID){

    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID, //Especifica en que contenedor se generará
        data: {
            x: 'x',
            columns: chartObject.data.columns,
            type: 'line',
            colors : {
                // [chartObject.xTitle]: '#202c56'  
            }
        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    rotate: 0, // Rotar etiquetas para mejor visibilidad
                    multiline: false
                },
                height: 70 // Ajuste de altura para espacio de las etiquetas rotadas
            },
            y: {
                tick: {
                    format: d3.format(",")  // Añade comas cada tres dígitos
                },
                label: {
                    text: chartObject.yTitle,
                    position: 'outer-middle' 
                }
            }
        },
        legend: {
            show: true,
        },
        size: {
            height: chartHeight,
            width: chartWidth
        },
        padding: {
            top: 20,
            right: 50,
            bottom: 0,
            left: 60
        },
        title: {
            text: chartObject.title,
            position: 'top-center'

        },
        point: {
            r: 5, // Tamaño de los puntos en la línea
            focus: {
                expand: {
                    r: 7  // Aumenta el tamaño al pasar el mouse
                }
            },
        },
        tooltip: {
            format: {
                value: function(value) {
                    return d3.format(",")(value);  // Formato de número con comas
                }
            }
        }
    })
}

function createMultipleLineChart(chartObject,wrapperID){
    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID,
        data: {
            xs: chartObject.data.xs,
            columns: chartObject.data.columns,
        },
        legend: {
            show: true,
        },
        size: {
            height: chartHeight,
            width: chartWidth
        },
        padding: {
            top: 20,
            right: 50,
            bottom: 0,
            left: 60
        },
        title: {
            text: chartObject.title,
            position: 'top-center'

        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    rotate: 0, // Rotar etiquetas para mejor visibilidad
                    multiline: false
                },
                height: 70 // Ajuste de altura para espacio de las etiquetas rotadas
            },
            y: {
                tick: {
                    format: d3.format(",")  // Añade comas cada tres dígitos
                },
                label: {
                    text: chartObject.yTitle,
                    position: 'outer-middle' 
                }
            }
        },
        point: {
            r: 5, // Tamaño de los puntos en la línea
            focus: {
                expand: {
                    r: 7  // Aumenta el tamaño al pasar el mouse
                }
            },
        }
    });  
}

function createBarChart(chartObject,wrapperID){
    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID,
        data: chartObject.data,
        bar: {
            width: {
                ratio: 0.5 // ancho de las barras
            }
        },
        title: {
            text: chartObject.title,
            position: 'top-center'

        },
        axis: {
            x: {
                type: 'category',
                categories: chartObject.categories,
                tick: {
                    rotate: 0,
                    multiline: false
                },
                label: {
                    text: chartObject.xTitle,
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: chartObject.yTitle,
                    position: 'outer-middle'
                }
            }
        },
        size: {
            height: chartHeight,
            width: chartWidth 
        },
        padding: {
            top: 20,
            right: 50,
            bottom: 0,
            left: 60
        },
        tooltip: {
            show: true
        }
    });
}


function createDonutChart(chartObject,wrapperID){
    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID,
        
        data: {
            columns: chartObject.columns,
            type: 'donut'
        },
        donut: {
            label: {
                show: true
                }
        },
        color: {
            pattern: chartObject.colors
        },
        title: {
            text: chartObject.title
        }
    });
}

function createPieChart(chartObject,wrapperID){
    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID,
        data: chartObject.data,
        pie: {
            label: {
                show: true
            }
        },
        color: {
            pattern: chartObject.colors
        },
        title: {
            text: 'Personal académico 2024'
        }
    });
}



//Genera los graficos indicados dentro de la lista de indices 
function generateCharts(indexChartList, wrapperID){
    indexChartList.forEach(i => {
        const g = chartObjectsList[i-1];
        // console.log(g);
        const type = g.type
        // console.log(type);
        switch (type) {
            case 'line':
                createLineChart(g, wrapperID);
                break;
            case 'multipleLine':
                createMultipleLineChart(g, wrapperID);
                break;
            case 'bar':
                createBarChart(g, wrapperID);
                break;
            case 'donut':
                createDonutChart(g, wrapperID);
                break;
            case 'pie':
                createPieChart(g, wrapperID);
                break;
            default:
                console.log(`[${g.bindto} - ${type}] no se puede construir, no hay función para ello.`)
                break;
          }
    });  
}



