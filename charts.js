
/* --------------------------------FUNCIONES DE LLENADO---------------------------------------- */

/* 
Indices de cada seccion:
Estos indices se ocupan para decir exactamente que graficos vamos a generar al momento
de dar click en los botones que se muestran al cargar la pagina.
*/
let alumnosCharts = [1, 2, 3, 4, 5, 6, 7, 8];
let docentesCharts = [11, 12, 13, 20];
let personalCharts = [14,15];
let duacydCharts = [9, 10];
let ueuCharts = [21];
let investigacionCharts = [16, 17, 18, 19];
let serviciosCharts = [22,23,24];

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

// Esconde los demás wrappers excepto el que le indiquemos 
function hideWrappers(except){
    document.querySelectorAll(".chart-wrapper").forEach(w => {
        // console.log(w.id);
        if(w.id != except){
            w.classList.add("empty");
        }
    });
}


/*-------------- FUNCIONES SHOW --------------------------*/

function showAlumnos() {
    hideWrappers("alumnos");
    document.getElementById("alumnos").classList.toggle("empty");
}

function showDocentes() {
    hideWrappers("docentes");
    document.getElementById("docentes").classList.toggle("empty");
}

function showDuacyd() {
    hideWrappers("duacyd");
    document.getElementById("duacyd").classList.toggle("empty");
}

function showPersonal() {
    hideWrappers("personal");
    document.getElementById("personal").classList.toggle("empty");
}

function showUEU() {
    hideWrappers("ueu");
    document.getElementById("ueu").classList.toggle("empty");
}

function showInvestigacion() {
    hideWrappers("investigacion");
    document.getElementById("investigacion").classList.toggle("empty");
}

function showServicios() {
    hideWrappers("servicios");
    document.getElementById("servicios").classList.toggle("empty");
}


/* ---------------------------------GRAFICOS--------------------------- */
const chartHeight = 500;
const chartWidth = 0;
const legendPadding = 15;
const colorPallette = [
    '#154360', // Azul marino oscuro
    '#8E44AD', // Púrpura oscuro
    '#273746', // Gris carbón oscuro
    '#7D3C98', // Vino oscuro
    '#1F618D', // Azul profundo
    '#512E5F', // Lila oscuro
    '#A93226', // Rojo vino oscuro
    '#6C7A92', // Gris azulado oscuro
    '#D35400', // Naranja oscuro
    '#5D6D7E'  // Gris oscuro
];




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
                ['x', '2019-01', '2019-02', '2020-01', '2020-02', '2021-01', '2021-02', '2022-01', '2022-02', '2023-01', '2023-02', '2024-01', '2024-02', '2025-01'],
                ['Matricula', 18452, 20035, 18860, 21064, 19634, 21245, 20125, 23796, 19863, 20843, 19536, 20036, 20601],
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
        title: 'Matrícula estudiantil de licenciatura - FES Aragón Semestre 2025-I',
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
        rotate: -45,
        legendHeight: 150,
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
                ['Cantidad', 246, 450, 74, 73, 61, 61, 50, 15, 14, 13, 13, 11, 7, 7, 6, 5, 4, 11, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
        type: 'bar',
        rotate: -45
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
        code: `
        <div class="body">
            <div class="container-info">
                <div class="card-info" style="--clr:#202c56;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="body"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>6,418</h3>
                            <p>Alumnos que concluyeron su servico</p>
                        </div>
                    </div>
                </div>
    
                <div class="card-info" style="--clr:#C6BFC9;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="extension-puzzle"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>816</h3>
                            <p>Programas ofertados</p>
                        </div>
                    </div>
                </div>

                <div class="card-info" style="--clr:#cdc04e;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="trophy"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>58</h3>
                            <p>Ganadores del premio al servicio social</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>`,
        title: 'Servicio Social',
        type: 'HTML',
    },
    {
        bindto: `#chart${chartNumber++}`, 
        code: `
        <div class="body">
            <div class="container-info">
                <div class="card-info" style="--clr:#202c56;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="body"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>23,630</h3>
                            <p>Comunidad Atendida</p>
                        </div>
                    </div>
                </div>
    
                <div class="card-info" style="--clr:#cdc04e;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="school"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>1,097</h3>
                            <p>Cursos realizados</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>`,
        title: 'Educación continua',
        type: 'HTML'
    },
    {
        bindto: `#chart${chartNumber++}`,
        code: `
        <div class="body">
            <div class="container-info">
                <div class="card-info" style="--clr:#202c56;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="body"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>45,927</h3>
                            <p>Personas inscritas</p>
                        </div>
                    </div>
                </div>
    
                <div class="card-info" style="--clr:#cdc04e;">
                    <div class="box" >
                        <div class="icon">
                            <div class="iconBox"><ion-icon name="school"></ion-icon></div>
                        </div>
                        <div class="content">
                            <h3>1,745</h3>
                            <p>Cursos ofertados</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>`,
        title: 'Centro de lenguas 2021-I a 2024-II',
        type: 'HTML'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            columns: [
                ["Técnicos de tiempo completo", 46],
                ["Titulares de tiempo completo", 45],
                ["Titulares medio de tiempo", 1],
                ["Asociados de tiempo completo", 34],
                ["Asociados de medio tiempo", 6],
                ["Asignatura", 1600],
                ["Ayudantes", 104],
            ],
            type : 'pie',
        },
        colors: colorPallette,
        title: 'Personal académico 2024',
        type: 'pie'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data:  {
            // iris data from R
            columns: [
                ["Doctorado", 230],
                ["Maestría", 554],
                ["Especialidad", 38],
                ["Licenciatura", 867],
                ["Técnico", 7],
                ["Pasante de licenciatura", 140],
            ],
            type : 'pie',
        },
        colors: colorPallette,
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
            
                // ['Programa de Estímulos a la Productividad y al Rendimiento del Personal Académico de Asignatura', 1367],
                // ['Programa de Estímulos al Desempeño del Personal Académico de Tiempo Completo', 98],
                // ['Programa de Estímulos al Desempeño de Personal Académico de Carrera de Medio Tiempo para el Fortalecimiento de la Docencia', 3],
                // ['Programa de Estímulos por Equivalencia', 23],
                // ['Programa de Estímulos de Iniciación de la Carrera Académica para Personal de Tiempo Completo', 1]
            ],
            
        },
        colors: colorPallette,
        title: 'Estímulos',
        type: 'donut'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            columns: [
                ["Base", 605],
                ["Confianza", 57],
                ["Funcionarios", 99],
            ],
            type : 'pie',
        },
        colors: colorPallette,
        title: 'Personal administrativo y de base',
        type:'pie'  
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            x: 'x', 
            columns: [
                ['x', '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
                ['Profesores de Carrera', 66,65,66,68,67,67,65,66,66,73,73,76,74,79,86],
                ['Técnicos Académicos', 46,45,45,45,45,45,46,49,48,47,46,44,44,44,45],
            ],
            types: {
                'Profesores de Carrera': 'area-spline',
                'Técnicos Académicos': 'area-spline'
            },
            groups: [['Profesores de Carrera', 'Técnicos Académicos']] 
        },
        colors: colorPallette,
        title: 'Histórico de Profesores de Carrera y Técnicos Académicos de la FES Aragón',
        xTitle: 'Año',
        yTitle: 'Profesor',
        type: 'stackedArea'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data: {
            x : 'x',
            columns: [
                ['x', 'Ciencias y Desarrollo tecnológico', 'PAPIME', 'Humanidades y ciencias sociales', 'Convenios en investigación', 'PAPIIT', 'Proyectos de posdoctorantes'],
                ['Proyectos', 67, 64, 21, 15, 34, 14],
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
                    ['x1', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'],
                    ['x2', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'],
                    ['PAPIME', 9, 7, 9, 19, 26, 16, 12, 17],
                    ['PAPIIT', 6, 6, 7, 8, 14, 16, 11, 7]
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
                ['SNI', 27, 26, 28, 35, 30, 42, 53, 55]
            ],
        },
        title: 'Total de docentes adscritos al Sistema Nacional de Investigación (SNI)', 
        yTitle: 'Docentes',
        xTitle: 'SNI',
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
                ['Publicaciones', 111, 91, 25],
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
        code: `
    <div class="body">
        <div class="container-info">
            <div class="card-info" style="--clr:#202c56;">
                <div class="box" >
                    <div class="icon">
                        <div class="iconBox"><ion-icon name="body"></ion-icon></div>
                    </div>
                    <div class="content">
                        <h3>400</h3>
                        <p>Personas inscritas</p>
                    </div>
                </div>
            </div>

            <div class="card-info" style="--clr:#cdc04e;">
                <div class="box" >
                    <div class="icon">
                        <div class="iconBox"><ion-icon name="school"></ion-icon></div>
                    </div>
                    <div class="content">
                        <h3>2,556</h3>
                        <p>Cursos ofertados</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
        `,
        title: 'Programa de actualización y superación docente (PASD) 2017-2024',
        type: 'HTML'
    },
    {
        bindto: `#chart${chartNumber++}`,
        code: `
    <div class="body">
        <div class="container-info">
            <div class="card-info" style="--clr:#202c56;">
                <div class="box" >
                    <div class="icon">
                        <div class="iconBox"><ion-icon name="body"></ion-icon></div>
                    </div>
                    <div class="content">
                        <h3>8,961</h3>
                        <p>Personas inscritas</p>
                    </div>
                </div>
            </div>

            <div class="card-info" style="--clr:#cdc04e;">
                <div class="box" >
                    <div class="icon">
                        <div class="iconBox"><ion-icon name="barbell"></ion-icon></div>
                    </div>
                    <div class="content">
                        <h3>52</h3>
                        <p>Actividades ofertadas</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
        `,
        title: 'Actividades Deportivas',
        type: 'HTML'
    },
    {
        bindto: `#chart${chartNumber++}`,
        data:{
            columns: [
                ["Títulos", 66313],
                ["Ejemplares", 336607],
                ["Libros digitales", 68847],
            ],
        },
        colors: colorPallette,
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
                [chartObject.xTitle]: '#202c56'  
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
            padding: legendPadding
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

function createMultipleLineChart(chartObject, wrapperID) {
    // Colores predeterminados (puedes ajustar la lista de colores)
    const defaultColors = ['#cdc04e', '#202c56', '#ff6b6b', '#4caf50', '#ffb74d'];

    // Genera los colores basados en las series de datos en chartObject.data.xs
    const colors = {};
    Object.keys(chartObject.data.xs).forEach((key, index) => {
        colors[key] = defaultColors[index % defaultColors.length];
    });

    // Genera el gráfico con los colores asignados dinámicamente
    c3.generate({
        bindto: chartObject.bindto + "-" + wrapperID,
        data: {
            xs: chartObject.data.xs,
            columns: chartObject.data.columns,
            colors: colors
        },
        legend: {
            show: true,
            padding: legendPadding
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
                    rotate: chartObject.rotate,
                    multiline: true
                },
                height: chartObject.legendHeight != 0 ? chartObject.legendHeight : 70
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
            r: 5,
            focus: {
                expand: {
                    r: 7
                }
            }
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
        legend: {
            show: true,
            padding: legendPadding
        },
        color: {
            pattern: ['#202c56', '#cdc04e', '#ff6b6b', '#4caf50', '#ffb74d'] 
        },
        axis: {
            x: {
                type: 'category',
                categories: chartObject.categories,
                tick: {
                    rotate: chartObject.rotate,
                    multiline: false
                },
                label: {
                    text: chartObject.xTitle,
                    position: 'outer-center'
                }
            },
            y: {
                tick: {
                    format: d3.format(",") // Añade comas cada tres dígitos
                },
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
            columns: chartObject.data.columns,
            type: 'donut'
        },
        donut: {
            label: {
                show: true,
                format: function(value, ratio, id) {
                    return d3.format(",")(value); // Muestra el valor en lugar del porcentaje
                }
            }
        },
        legend: {
            show: true,
            padding: legendPadding
        },
        color: {
            pattern: colorPallette
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
                show: true,
                format: function(value, ratio, id) {
                    return d3.format(",")(value); // Muestra el valor en lugar del porcentaje
                    
                }
            }
        },
        legend: {
            show: true,
            padding: legendPadding
        },
        color: {
            pattern: colorPallette
        },
        title: {
            text: chartObject.title
        }
    });
}

function createStackedAreaChart(chartObject, wrapperID){
    c3.generate({
        bindto: chartObject.bindto+"-"+wrapperID,
        data: chartObject.data,
        axis: {
            x: {
                type: 'category' 
            },
            y: {
                tick: {
                    format: d3.format(",")  // Añade comas cada tres dígitos
                }
            }
        },
        padding: {
            top: 20,
            right: 50,
            bottom: 0,
            left: 60
        },
        legend: {
            show: true,
            padding: legendPadding
        },
        color: {
            pattern: ['#cdc04e', '#202c56', '#ff6b6b', '#4caf50', '#ffb74d'] 
        },
        title: {
            text: chartObject.title
        }
    });
}

function createHTMLComponent(chartObject, wrapperID){
    const bindto = chartObject.bindto+"-"+wrapperID;
    
    document.getElementById(bindto.replace("#",'')).innerHTML += `
    <text class='c3-title'>${chartObject.title}</text>
    ${chartObject.code}
    `;
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
            case 'stackedArea':
                createStackedAreaChart(g, wrapperID);
                break;
            case 'HTML':
                createHTMLComponent(g, wrapperID);
                break;
            default:
                console.log(`[${g.bindto} - ${type}] no se puede construir, no hay función para ello.`)
                break;
          }
    });  
}


// Llena todos los wrappers y les asigna la clase "empty" ;
function initWrappers(){
    fillWrapper(alumnosCharts,"alumnos");
    fillWrapper(docentesCharts,"docentes");
    fillWrapper(duacydCharts,"duacyd");
    fillWrapper(personalCharts,"personal");
    fillWrapper(ueuCharts,"ueu");
    fillWrapper(investigacionCharts,"investigacion");
    fillWrapper(serviciosCharts,"servicios");

    document.querySelectorAll(".chart-wrapper").forEach(w => w.classList.add("empty"));

    generateCharts(alumnosCharts,"alumnos");
    generateCharts(docentesCharts,"docentes");
    generateCharts(duacydCharts,"duacyd");
    generateCharts(personalCharts,"personal");
    generateCharts(ueuCharts,"ueu");
    generateCharts(investigacionCharts,"investigacion");
    generateCharts(serviciosCharts,"servicios");
}

initWrappers();
