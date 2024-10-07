<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>	
<%@ page import="valueobject.UserValueObject" %>
<%@ page import="util.Attribute" %>
<%@ page import="dao.UserDAO" %>
<%@ page import="org.apache.log4j.Logger" %>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Estadisticas</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <link href="css/navBarEstilo.css" rel="stylesheet">
        <link href="css/EstiloConsulta.css" rel="stylesheet">
        <link href="css/miEstilo.css" rel="stylesheet">

        <!-- Incluye D3.js versión 5.x -->
	    <script src="https://d3js.org/d3.v5.min.js"></script>
	    <!-- Incluye C3.js versión 0.7.20 -->
	    <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.20/c3.min.css" rel="stylesheet" />
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.20/c3.min.js"></script>

	    <style>
	        #chart {
	            width: 100%;
	            height: 500px;
	        }

	        #chart23-container {
			    display: flex;
			    flex-direction: column;
			    align-items: center; /* Centra horizontalmente */
			}

			#chart23 {
			    max-width: 100%; /* Mantiene la imagen dentro del contenedor */
			    height: auto; /* Mantiene la proporción */
			}

			h3 {
			    display: flex;
			    flex-direction: column;
			    align-items: center; /* Centra horizontalmente */
			}

			h3 {
			    max-width: 100%; /* Mantiene la imagen dentro del contenedor */
			    height: auto; /* Mantiene la proporción */
			}

	    </style>
    </head>
    <BODY>
	    <div class="container cuerpo-principal">
	        <%@include file="header.frame.jsp" %>
	        <%@include file="nav.frame.jsp" %>
	        <%@include file="messages.frame.jsp" %>

	        <% 
	          	/*No hay una sesion activa*/
	            if((UserValueObject) session.getAttribute(Attribute.Session.CURRENT_USER)==null)
	            {

	        %>
	        		<h3>No hay una sesión activa, no se puede mostrar la información</h3>

	        <%
	    		}else{/*hay una sesion activa*/
	    			/*Se mostrará la informacion correspondiente*/
	    			Logger log = Logger.getLogger("SAAI_Log");
	    			String carrera = ((UserValueObject) session.getAttribute(Attribute.Session.CURRENT_USER)).getDepto();
	    			String div = ((UserValueObject) session.getAttribute(Attribute.Session.CURRENT_USER)).getDivision();
	    			String carreraURL=request.getParameter("claveCarrera");
	    			String divisionURL=request.getParameter("division");
	   
	    			 if ((carrera.equals(carreraURL) && ((div != null && div.equals(divisionURL)) 
				        || (div == null))) 
				        || (carrera.equals(divisionURL) && div == null) 
				        || ((carrera.equals("UNI00") || carrera.equals("UNI01")) && div == null)
				    ){
	            		carrera=carreraURL;
	            		UserDAO p=new UserDAO();
	            		String nombre = p.getNombreFromCar(carrera);
	        %>
	            		<br>
						<div class="Titulo">Estadísticas</div>
						<br>

						<div id="chart-container">
						    <h3>Matrícula FES Aragón 2019-2025</h3>
						    <div id="chart"></div>
						</div>

						<div id="chart-container">
						    <h3>Matrícula estudiantil de licenciaura - FES Aragón Semestre 2025-I</h3>
						    <div id="chart23"></div>
						</div>

						<div id="chart-container">
						    <h3>Matrícula estudiantil de posgrado - FES Aragón Semestre 2025-I</h3>
						    <div id="chart24"></div>
						</div>

						<div id="chart-container">
						    <h3>Histórico de matrícula de estudiantes de posgrado FES Aragón</h3>
						    <div id="chart25"></div>
						</div>
						<!-------------------------------------------------------------------------->		
						<div id="chart2-container">
						    <h3>Titulación enero 2017 a marzo 2024</h3>
						    <div id="chart2"></div>
						</div>

						<!--<div id="chart3-container">
						    <h3>Eficiencia terminal en tiempo curricular-Licenciatura</h3>
						    <div id="chart3"></div>
						</div>-->

						<div id="chart4-container">
						    <h3>Eficiencia terminal total-Licenciatura</h3>
						    <div id="chart4"></div>
						</div>

						<div id="chart5-container">
						    <h3>Movilidad</h3>
						    <div id="chart5"></div>
						</div>

						<div id="chart6-container">
						    <h3>Alumnas y alumnos becados</h3>
						    <div id="chart6"></div>
						</div>

						<div id="chart7-container">
						    <h3>Servicio social</h3>
						    <div id="chart7"></div>
						</div>

						<div id="chart8-container">
						    <h3> Educación continua</h3>
						    <div id="chart8"></div>
						</div>

						<div id="chart9-container">
						    <h3>Centro de lenguas 2021-I a 2024-II</h3>
						    <div id="chart9"></div>
						</div>

						<div id="chart10-container">
						    <h3>Personal académico 2024</h3>
						    <div id="chart10"></div>
						</div>

						<div id="chart11-container">
						    <h3>Grado académico de la comunidad docente</h3>
						    <div id="chart11"></div>
						</div>

						<div id="chart12-container">
						    <h3>Estímulos</h3>
						    <div id="chart12"></div>
						</div>

						<div id="chart13-container">
						    <h3>Personal administrativo y de base</h3>
						    <div id="chart13"></div>
						</div>
						<!---------------------------------------------------------------------------->
						<div id="chart-container">
						    <h3>Histórico de Profesores de Carrera y Técnicos Académicos de la FES Aragón</h3>
						    <div id="chart26"></div>
						</div>
						<!---------------------------------------------------------------------------->
						<div id="chart14-container">
						    <h3>Proyectos de investigación 2024</h3>
						    <div id="chart14"></div>
						</div>

						<div id="chart15-container">
						    <h3>Proyectos de investigación desarrollados con financiamiento institucional</h3>
						    <div id="chart15"></div>
						</div>

						<div id="chart16-container">
						    <h3>Total de docentes adscritos al Sistema Nacional de Investigación (SNI)</h3>
						    <div id="chart16"></div>
						</div>

						<div id="chart17-container">
						    <h3>Docentes en el Sistema Nacional de Investigadores (SNI)</h3>
						    <div id="chart17"></div>
						</div>

						<div id="chart18-container">
						    <h3>Publicaciones</h3>
						    <div id="chart18"></div>
						</div>

						<div id="chart19-container">
						    <h3>Programa de actualización y superación docente (PASD) 2017-2024</h3>
						    <div id="chart19"></div>
						</div>

						<!--<div id="chart20-container">
						    <h3>Actividades culturales 2023-2024</h3>
						    <div id="chart20"></div>
						</div>-->

						<div id="chart21-container">
						    <h3>Actividades deportivas 2023</h3>
						    <div id="chart21"></div>
						</div>

						<div id="chart22-container">
						    <h3>Biblioteca</h3>
						    <div id="chart22"></div>
						</div>

						<div id="chart23-container">
						    <h3>Acreditaciones por Carrera</h3>
						    <img src="<%=Resource.Files.URL%>img/acreditacion2025.png" alt="Acreditaciones por Carrera" id="chart23" />
						</div>
						<br>
						<br>

	   		<%
					}else{
	    	%>
	    				<h1>No tiene permisos para visualizar la p&aacute;gina</h1>
	    	<%
	    				log.info(((UserValueObject) session.getAttribute(Attribute.Session.CURRENT_USER)).getUsuario()+ "-> no tiene permiso para la consulta de alumnos de "+ carrera);
					}
				}
	    	%>
		</div>

		<script src="js/jquery.js"></script>
		<script src="js/popper.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<!-- <script src="js/portada.js"></script> -->
		<script type="text/javascript">
		    function tamVentana() {
		        var tam = [0, 0];
		        if (typeof window.innerWidth != 'undefined')
		        {
		            tam = [window.innerWidth, window.innerHeight];
		        } else if (typeof document.documentElement != 'undefined'
		                && typeof document.documentElement.clientWidth !=
		                'undefined' && document.documentElement.clientWidth != 0)
		        {
		            tam = [
		                document.documentElement.clientWidth,
		                document.documentElement.clientHeight
		            ];
		        } else {
		            tam = [
		                document.getElementsByTagName('body')[0].clientWidth,
		                document.getElementsByTagName('body')[0].clientHeight
		            ];
		        }
		        return tam;
		    }

		    function tamanioWrap() {
		        var tamanioY = tamVentana()[1];
		        var tamanioX = tamVentana()[0];
		        if (tamanioX < 768) {
		            document.getElementById("FrameDeConsulta").style.height = (tamanioY - 203) + "px";
		        } else {
		            if (tamanioX < 992) {
		                document.getElementById("FrameDeConsulta").style.height = (tamanioY - 203) + "px";
		            } else {
		                if (tamanioX < 1200) {
		                    document.getElementById("FrameDeConsulta").style.height = (tamanioY - 235) + "px";
		                } else {
		                    document.getElementById("FrameDeConsulta").style.height = (tamanioY - 195) + "px";
		                }
		            }
		        }
		    }
		</script>
		<script src="js/charts.js"></script>
	</body>
</html>