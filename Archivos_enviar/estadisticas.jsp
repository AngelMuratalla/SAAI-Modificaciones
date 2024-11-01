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

			/* Importamos fuente Poppins */
			@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
			
			/* Normalizar estilos */
			*{
                box-sizing: border-box;
                padding: 0;
                margin: 0;
				font-family: "Poppins", sans-serif;
            }

			/* Contenedor de cada grafico */
	        .chart-container {
	        	margin: 1rem;
	        }

			/* Hacer que el texto de los titulos sea seleccionable */
			.c3 text {
				-webkit-user-select: auto;
				-moz-user-select: auto;
				user-select: auto;
			}

			/* Moficamos los estilos del texto de los titulos de cada grafica */
			.c3-title {
				font-family: "Poppins", sans-serif;
				font-size: 24px; 
				font-weight: bold; 
				color: #a6ad62; 
			}


			/* Estilos de cada sección (acordeón) */
            .accordion-header{
                background-color: #4CAF50; 
                /* padding-top: 1.25rem 0;  */
                border-radius: 0.625rem; 
                box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1); 
                color: white; 
                font-weight: bold;
                display: flex; 
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 1rem;
            }

			/* Añadimos un pequeño espacio al final */
            .accordion-header:last-of-type{
				margin-bottom: 3rem;
			}

			/* Estilos de titulo de acordeón */
            .accordion-title{
                padding: 0.5rem 0;
                font-size: 2rem;
				width: 100%;
				height: 100%;
				text-align: center;	
            }

			/* Estilos de agrupación de gráficas */
            .chart-wrapper{
                background-color: #fff;
                color: #3f3f3f;
                text-align: center;
                width: 100%;
            }

			/* Oculta agrupación */
			.empty{
				display: none;
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

					
					<div class="accordion-header" style="background: #013A63;">
						<div class="accordion-title" onclick="showDuacyd()">DUACyD</div>
						<div class="chart-wrapper" id="duacyd"></div>
					</div>
					
					<div class="accordion-header" style="background: #01497C;">
						<div class="accordion-title" onclick="showDocentes()">Docentes</div>
						<div class="chart-wrapper" id="docentes"></div>
					</div>

					<div class="accordion-header" style="background: #014F86;">
						<div class="accordion-title" onclick="showAlumnos()">Alumnos</div>
						<div class="chart-wrapper" id="alumnos"></div>
					</div>


					<div class="accordion-header" style="background: #2A6F97;">
						<div class="accordion-title" onclick="showPersonal()">Personal</div>
						<div class="chart-wrapper" id="personal"></div>
					</div>

					<div class="accordion-header" style="background: #2C7DA0;">
						<div class="accordion-title" onclick="showInvestigacion()">Investigación</div>
						<div class="chart-wrapper" id="investigacion"></div>
					</div>
					
					<div class="accordion-header" style="background: #468FAF;">
						<div class="accordion-title" onclick="showUEU()">Unidad de Educación Universitaria</div>
						<div class="chart-wrapper" id="ueu"></div>
					</div>
					
					<div class="accordion-header" style="background: #61A5C2;">
						<div class="accordion-title" onclick="showServicios()">Servicios</div>
						<div class="chart-wrapper" id="servicios"></div>
					</div>

            

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