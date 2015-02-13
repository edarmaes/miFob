//primera version de FOB

//calculo de resultado para dlls/lb
$(document).on('pagebeforeshow', '#resultado-dlls-lb', function(){  
	//inicializar variables validando campos en blanco
	if($('#costoCompra').val()==""){ var costoCompra=0;	} else{	var costoCompra = parseFloat($('#costoCompra').val()); }
	if($('#tipoCambio').val()==""){	var tipoCambio=0; } else{ var tipoCambio = parseFloat($('#tipoCambio').val()); }
	if($('#porcentajeArancel').val()==""){ var porcentajeArancel=0;	} else{	var porcentajeArancel = parseFloat($('#porcentajeArancel').val()); }
	if($('#porcentajeUtilidad').val()==""){	var porcentajeUtilidad=0; } else{ var porcentajeUtilidad = parseFloat($('#porcentajeUtilidad').val()); }
	if($('#kilogramos').val()==""){	var kilogramos=0; } else{ var kilogramos = parseFloat($('#kilogramos').val()); }
	if($('#tipoCambioConver').val()==""){ var tipoCambioConver=0; } else{ var tipoCambioConver = parseFloat($('#tipoCambioConver').val()); }
    //algunas operaciones
	//para sacar el porcentaje
	porcentajeArancel = porcentajeArancel / 100; 
	porcentajeUtilidad = porcentajeUtilidad / 100;
	//buscar valor de selects
	var selectAduana = $('#select-aduana').val();
	var selectDestino = $('#select-destino').val();
	var aduanaProducto = 0;
	var aduanaDestino = 0;
	var aduana = "";
	var producto = "";
	var destino = "";
	//Aduana
	switch (selectAduana) {
		case "1-1":
			aduanaProducto = 7170.49;
			aduana = "Laredo";
			producto = "Cárnicos";
			break;
		case "1-2":
		   	aduanaProducto = 10203.48;
			aduana = "Laredo";
			producto = "Papas";
			break;
		case "2-1":
			aduanaProducto = 7886.92;
			aduana = "Reynosa";
			producto = "Grasa o recorte Cerdo";
			break;
		case "2-2":
		   	aduanaProducto = 8586.70;
			aduana = "Reynosa";
			producto = "Cabeza de Cordero";
			break;
		case "2-3":
		   	aduanaProducto = 10062.56;
			aduana = "Reynosa";
			producto = "Pollo";
			break;
		case "3-1":
		   	aduanaProducto = 61050.3005050505;
			aduana = "Manzanillo";
			producto = "Cabezas de Cordero";
			break;
		case "3-2":
		   	aduanaProducto = 53500;
			aduana = "Manzanillo";
			producto = "Canal de Cordero";
			break;
		case "3-3":
		   	aduanaProducto = 45204.7608744926;
			aduana = "Manzanillo";
			producto = "Cogote de carnero CHILE";
			break;
		case "3-4":
		   	aduanaProducto = 74564.9;
			aduana = "Manzanillo";
			producto = "Cogote de Carnero USA";
			break;
		case "3-5":
		   	aduanaProducto = 103825.98;
			aduana = "Manzanillo";
			producto = "Cogote de Cordero NUEVA ZELANDA";
			break;
		case "3-6":
		   	aduanaProducto = 37993.7575440828;
			aduana = "Manzanillo";
			producto = "Cogote de Cordero CHILE";
			break;
		case "3-7":
		   	aduanaProducto = 102365.464632788;
			aduana = "Manzanillo";
			producto = "Espaldilla de Cordero NUEVA ZELANDA";
			break;
		case "3-8":
		   	aduanaProducto = 143041.98;
			aduana = "Manzanillo";
			producto = "Espaldilla de Cordero AUSTRALIA";
			break;
		case "3-9":
		   	aduanaProducto = 40356.1188775795;
			aduana = "Manzanillo";
			producto = "Espaldilla de Cordero CHILE";
			break;
		case "3-10":
		   	aduanaProducto = 90789.0239019696;
			aduana = "Manzanillo";
			producto = "Espaldilla Mutton NUEVA ZELANDA";
			break;
		case "3-11":
		   	aduanaProducto = 45202.6967349389;
			aduana = "Manzanillo";
			producto = "Espaldilla Mutton CHILE";
			break;
		case "3-12":
		   	aduanaProducto = 118165.71;
			aduana = "Manzanillo";
			producto = "Espaldilla Mutton AUSTRALIA";
			break;
		case "3-13":
		   	aduanaProducto = 34347.13;
			aduana = "Manzanillo";
			producto = "Grasa o recorte Cerdo";
			break;
		case "3-14":
		   	aduanaProducto = 20575.43;
			aduana = "Manzanillo";
			producto = "Manufactura Mutton";
			break;
		case "3-15":
		   	aduanaProducto = 38232.7468802698;
			aduana = "Manzanillo";
			producto = "Menudo de Cordero";
			break;
		case "3-16":
		   	aduanaProducto = 52321.72;
			aduana = "Manzanillo";
			producto = "Pata de Res";
			break;
		case "3-17":
		   	aduanaProducto = 53500;
			aduana = "Manzanillo";
			producto = "Recorte Mutton";
			break;
		case "3-18":
		   	aduanaProducto = 20586.88;
			aduana = "Manzanillo";
			producto = "Trozos de Cordero";
			break;
		case "3-19":
		   	aduanaProducto = 38644.2283753525;
			aduana = "Manzanillo";
			producto = "Vacío de Cordero";
			break;
		case "4-1":
		   	aduanaProducto = 53446.35;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de Cordero CHILE";
			break;
		case "4-2":
		   	aduanaProducto = 111013.79;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de Cordero NUEVA ZELANDA";
			break;
		case "4-3":
		   	aduanaProducto = 105275.85;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de Carnero NUEVA ZELANDA";
			break;
		case "4-4":
		   	aduanaProducto = 114416.86;
			aduana = "Lázaro Cárdenas";
			producto = "Espaldilla Mutton NUEVA ZELANDA";
			break;
		case "4-5":
		   	aduanaProducto = 53848.64;
			aduana = "Lázaro Cárdenas";
			producto = "Espaldilla de Cordero CHILE";
			break;
		case "4-6":
		   	aduanaProducto = 32650.918662499;
			aduana = "Lázaro Cárdenas";
			producto = "Grasa o recorte Cerdo";
			break;
		case "4-7":
		   	aduanaProducto = 52239.46;
			aduana = "Lázaro Cárdenas";
			producto = "Cabeza de Cordero CHILE";
			break;
		case "4-8":
		   	aduanaProducto = 86812.36;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de Carnero CHILE";
			break;
		case "4-9":
		   	aduanaProducto = 53446.35;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de Cordero CHILE";
			break;
		case "4-10":
		   	aduanaProducto = 141247.68;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de Cordero NUEVA ZELANDA";
			break;
		case "4-11":
		   	aduanaProducto = 66278.63;
			aduana = "Lázaro Cárdenas";
			producto = "Guata de Cordero CHILE";
			break;
		case "4-12":
		   	aduanaProducto = 111009.58;
			aduana = "Lázaro Cárdenas";
			producto = "Vacío de Carnero NUEVA ZELANDA";
			break;
		case "4-13":
		   	aduanaProducto = 54985.18;
			aduana = "Lázaro Cárdenas";
			producto = "Vacío de Cordero CHILE";
			break;
		case "5-1":
		   	aduanaProducto = 14950.28;
			aduana = "Matamoros";
			producto = "Manteca Líquida";
			break;
		case "6-1":
		   	aduanaProducto = 0;
			aduana = "Nacional";
			producto = "Nacional";
			break;
	}
	switch (aduana) {
		case "Laredo":
			switch (selectDestino) {
				case "1":
					//aduanaDestino = 12243;
					aduanaDestino = 13712.16;
					destino = "Aguascalientes, Ags.";
					break;
				case "2":
					aduanaDestino = 16695;
					destino = "Edo. de México";
					break;
				case "3":
					//aduanaDestino = 17808;
					aduanaDestino = 19962.77;
					destino = "México, D.F.";
					break;
				case "4":
					//aduanaDestino = 8904;
					aduanaDestino = 9972.48;
					destino = "El Carmen, N.L.";
					break;
				case "5":
					//aduanaDestino = 8190;
					aduanaDestino = 8725.92;
					destino = "Guadalupe, N.L.";
					break;
				case "6":
					//aduanaDestino = 8190;
					aduanaDestino = 8725.92;
					destino = "Monterrey, N.L.";
					break;
				case "7":
					//aduanaDestino = 15582;
					aduanaDestino = 17451.84;
					destino = "Guadalajara, Jal.";
					break;
				case "8":
					//aduanaDestino = 14469;
					aduanaDestino = 16205.28;
					destino = "León, Gto.";
					break;
				case "9":
					//aduanaDestino = 14469;
					aduanaDestino = 16205.28;
					destino = "Querétaro, Qro.";
					break;
				case "10":
					//aduanaDestino = 13356;
					aduanaDestino = 14958.72;
					destino = "San Juan de los Lagos, Jal.";
					break;
				case "11":
					//aduanaDestino = 20034;
					aduanaDestino = 22438.08;
					destino = "Puebla, Pue.";
					break;
				case "12":
					//aduanaDestino = 12243;
					aduanaDestino = 13712.16;
					destino = "San Luis Potosí, SLP.";
					break;
				case "13":
					//aduanaDestino = 23373;
					aduanaDestino = 26177.76;
					destino = "Durango";
					break;
				case "14":
					aduanaDestino = 15750;
					destino = "Toluca";
					break;
			}
			break;
		case "Reynosa":
				switch (selectDestino) {
					case "1":
						//aduanaDestino = 13650;
						aduanaDestino = 16250.28;
						destino = "Aguascalientes, Ags.";
						break;
					case "2":
						//aduanaDestino = 16800;
						aduanaDestino = 19944.96;
						destino = "Edo. de México";
						break;
					case "3":
						//aduanaDestino = 17850;
						aduanaDestino = 19944.96;
						destino = "México, D.F.";
						break;
					case "6":
						//aduanaDestino = 8400;
						aduanaDestino = 9972.96;
						destino = "Monterrey, N.L.";
						break;
				}
			break;
		case "Manzanillo":
				switch (selectDestino) {
					case "1":
						aduanaDestino = 16275;
						destino = "Aguascalientes, Ags.";
						break;
					case "3":
						aduanaDestino = 16275;
						destino = "México, D.F.";
						break;
				}
			break;
		case "Lázaro Cárdenas":
			aduanaDestino = 0;
			break;
		case "Matamoros":
			aduanaDestino = 42000;
			break;
		case "Nacional":
			aduanaDestino = 0;
			break;
	}
	//para mostrar el destino
	switch (selectDestino) {
		case "1":
			destino = "Aguascalientes, Ags.";
			break;
		case "2":
			destino = "Edo. de México";
			break;
		case "3":
			destino = "México, D.F.";
			break;
		case "4":
			destino = "El Carmen, N.L.";
			break;
		case "5":
			destino = "Guadalupe, N.L.";
			break;
		case "6":
			destino = "Monterrey, N.L.";
			break;
		case "7":
			destino = "Guadalajara, Jal.";
			break;
		case "8":
			destino = "León, Gto.";
			break;
		case "9":
			destino = "Querétaro, Qro.";
			break;
		case "10":
			destino = "San Juan de los Lagos, Jal.";
			break;
		case "11":
			destino = "Puebla, Pue.";
			break;
		case "12":
			destino = "San Luis Potosí, SLP.";
			break;
		case "13":
			destino = "Durango";
			break;
		case "14":
			destino = "Toluca";
			break;
	}
	
	//formulas
	$('#costoCompraR').text(costoCompra);
	$('#tipoCambioR').text(tipoCambio);
	$('#porcentajeArancelR').text(porcentajeArancel*100);
	$('#porcentajeUtilidadR').text(porcentajeUtilidad*100);
	$('#kilogramosR').text(kilogramos);
	$('#aduanaProductoR').text(aduana + " - " + producto);
	$('#destinoR').text(destino);
	$('#aduanaDestinoR').text(aduanaDestino);
	$('#agenciaAduanalR').text(aduanaProducto);
	
	var formulaPart1 = (((costoCompra / 0.45359237)*tipoCambio)*kilogramos);
    var formulaPart2 = (formulaPart1 * porcentajeArancel);
    var formula = ((formulaPart1 + formulaPart2 + aduanaDestino + aduanaProducto)/kilogramos)*(1+porcentajeUtilidad);
	$('#precioVentaR').text(Math.round(formula*100)/100);
	
	//formulas apartado desglose
	var precioCompra = ((costoCompra / 0.45359237)*tipoCambio);
	$('#precioCompraR').text(Math.round(precioCompra*100)/100);
	//---------------------------
	var arancel = precioCompra * porcentajeArancel;
	$('#arancelR').text(Math.round(arancel*100)/100);
	//---------------------------
	var flete = aduanaDestino / kilogramos;
	$('#fleteR').text(Math.round(flete*100)/100);
	//---------------------------
	var agenciaAduanal = aduanaProducto / kilogramos;
	$('#agenciaAduanalDesgloseR').text(Math.round(agenciaAduanal*100)/100);
	//---------------------------
	var costoTotalKg = precioCompra + arancel + flete + agenciaAduanal;
	$('#costoTotalKgR').text(Math.round(costoTotalKg*100)/100);
	//---------------------------
	var utilidad = costoTotalKg * porcentajeUtilidad;
	$('#utilidadR').text(Math.round(utilidad*100)/100);
	//---------------------------
	var precioVentaPesos = costoTotalKg + utilidad;
	$('#precioVentaDesgloseR').text(Math.round(precioVentaPesos*100)/100);
	//---------------------------
	$('#tipoCambioConverR').text(Math.round(tipoCambioConver*100)/100);
	if(tipoCambioConver==0 || tipoCambioConver=="0" || tipoCambioConver==""){
		$('#precioVentaDllsR').text("0");
	} else {
		var precioVentaDlls = (precioVentaPesos / tipoCambioConver) * 0.4536;
		$('#precioVentaDllsR').text(Math.round(precioVentaDlls*100)/100);
	}
	

	//alert( aduanaProducto + " - " + aduanaDestino + " - " + aduana + " - " + producto + " - " + destino );
});






















//calculo de resultado para pesos/kg

$(document).on('pagebeforeshow', '#resultado-pesos-kg', function(){  
	//inicializar variables validando campos en blanco
	if($('#tipoCambio2').val()==""){ var tipoCambio2=0; } else{ var tipoCambio2 = parseFloat($('#tipoCambio2').val()); }
	if($('#porcentajeArancel2').val()==""){ var porcentajeArancel2=0; } else { var porcentajeArancel2 = parseFloat($('#porcentajeArancel2').val()); }
	if($('#porcentajeUtilidad2').val()==""){ var porcentajeUtilidad2=0; } else{ var porcentajeUtilidad2 = parseFloat($('#porcentajeUtilidad2').val()); }
	if($('#kilogramos2').val()==""){ var kilogramos2=0; } else{ var kilogramos2 = parseFloat($('#kilogramos2').val()); }
	if($('#costoTotalKg2').val()==""){ var costoTotalKg2=0; } else{ var costoTotalKg2 = parseFloat($('#costoTotalKg2').val()); }
    //algunas operaciones
	//para sacar el porcentaje
	porcentajeArancel2 = porcentajeArancel2 / 100; 
	porcentajeUtilidad2 = porcentajeUtilidad2 / 100;
	//buscar valor de selects
	var selectAduana2 = $('#select-aduana2').val();
	var selectDestino2 = $('#select-destino2').val();
	var aduanaProducto2 = 0;
	var aduanaDestino2 = 0;
	var aduana2 = "";
	var producto2 = "";
	var destino2 = "";
	//Aduana
	switch (selectAduana2) {
		case "1-1":
			aduanaProducto2 = 7170.49;
			aduana2 = "Laredo";
			producto2 = "Cárnicos";
			break;
		case "1-2":
		   	aduanaProducto2 = 10203.48;
			aduana2 = "Laredo";
			producto2 = "Papas";
			break;
		case "2-1":
			aduanaProducto2 = 7886.92;
			aduana2 = "Reynosa";
			producto2 = "Grasa o recorte Cerdo";
			break;
		case "2-2":
		   	aduanaProducto2 = 8586.70;
			aduana2 = "Reynosa";
			producto2 = "Cabeza de Cordero";
			break;
		case "2-3":
		   	aduanaProducto2 = 10062.56;
			aduana2 = "Reynosa";
			producto2 = "Pollo";
			break;
		case "3-1":
		   	aduanaProducto2 = 61050.3005050505;
			aduana2 = "Manzanillo";
			producto2 = "Cabezas de Cordero";
			break;
		case "3-2":
		   	aduanaProducto2 = 53500;
			aduana2 = "Manzanillo";
			producto2 = "Canal de Cordero";
			break;
		case "3-3":
		   	aduanaProducto2 = 45204.7608744926;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de carnero CHILE";
			break;
		case "3-4":
		   	aduanaProducto2 = 74564.9;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de Carnero USA";
			break;
		case "3-5":
		   	aduanaProducto2 = 103825.98;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de Cordero NUEVA ZELANDA";
			break;
		case "3-6":
		   	aduanaProducto2 = 37993.7575440828;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de Cordero CHILE";
			break;
		case "3-7":
		   	aduanaProducto2 = 102365.464632788;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de Cordero NUEVA ZELANDA";
			break;
		case "3-8":
		   	aduanaProducto2 = 143041.98;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de Cordero AUSTRALIA";
			break;
		case "3-9":
		   	aduanaProducto2 = 40356.1188775795;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de Cordero CHILE";
			break;
		case "3-10":
		   	aduanaProducto2 = 90789.0239019696;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla Mutton NUEVA ZELANDA";
			break;
		case "3-11":
		   	aduanaProducto2 = 45202.6967349389;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla Mutton CHILE";
			break;
		case "3-12":
		   	aduanaProducto2 = 118165.71;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla Mutton AUSTRALIA";
			break;
		case "3-13":
		   	aduanaProducto2 = 34347.13;
			aduana2 = "Manzanillo";
			producto2 = "Grasa o recorte Cerdo";
			break;
		case "3-14":
		   	aduanaProducto2 = 20575.43;
			aduana2 = "Manzanillo";
			producto2 = "Manufactura Mutton";
			break;
		case "3-15":
		   	aduanaProducto2 = 38232.7468802698;
			aduana2 = "Manzanillo";
			producto2 = "Menudo de Cordero";
			break;
		case "3-16":
		   	aduanaProducto2 = 52321.72;
			aduana2 = "Manzanillo";
			producto2 = "Pata de Res";
			break;
		case "3-17":
		   	aduanaProducto2 = 53500;
			aduana2 = "Manzanillo";
			producto2 = "Recorte Mutton";
			break;
		case "3-18":
		   	aduanaProducto2 = 20586.88;
			aduana2 = "Manzanillo";
			producto2 = "Trozos de Cordero";
			break;
		case "3-19":
		   	aduanaProducto2 = 38644.2283753525;
			aduana2 = "Manzanillo";
			producto2 = "Vacío de Cordero";
			break;
		case "4-1":
		   	aduanaProducto2 = 53446.35;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de Cordero CHILE";
			break;
		case "4-2":
		   	aduanaProducto2 = 111013.79;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de Cordero NUEVA ZELANDA";
			break;
		case "4-3":
		   	aduanaProducto2 = 105275.85;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de Carnero NUEVA ZELANDA";
			break;
		case "4-4":
		   	aduanaProducto2 = 114416.86;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Espaldilla Mutton NUEVA ZELANDA";
			break;
		case "4-5":
		   	aduanaProducto2 = 53848.64;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Espaldilla de Cordero CHILE";
			break;
		case "4-6":
		   	aduanaProducto2 = 32650.918662499;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Grasa o recorte Cerdo";
			break;
		case "4-7":
		   	aduanaProducto2 = 52239.46;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cabeza de Cordero CHILE";
			break;
		case "4-8":
		   	aduanaProducto2 = 86812.36;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de Carnero CHILE";
			break;
		case "4-9":
		   	aduanaProducto2 = 53446.35;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de Cordero CHILE";
			break;
		case "4-10":
		   	aduanaProducto2 = 141247.68;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de Cordero NUEVA ZELANDA";
			break;
		case "4-11":
		   	aduanaProducto2 = 66278.63;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Guata de Cordero CHILE";
			break;
		case "4-12":
		   	aduanaProducto2 = 111009.58;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Vacío de Carnero NUEVA ZELANDA";
			break;
		case "4-13":
		   	aduanaProducto2 = 54985.18;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Vacío de Cordero CHILE";
			break;
		case "5-1":
		   	aduanaProducto2 = 14950.28;
			aduana2 = "Matamoros";
			producto2 = "Manteca Líquida";
			break;
		case "6-1":
		   	aduanaProducto2 = 0;
			aduana2 = "Nacional";
			producto2 = "Nacional";
			break;
	}
	switch (aduana2) {
		case "Laredo":
			switch (selectDestino2) {
				case "1":
					//aduanaDestino2 = 12243;
					aduanaDestino2 = 13712.16;
					destino2 = "Aguascalientes, Ags.";
					break;
				case "2":
					aduanaDestino2 = 16695;
					destino2 = "Edo. de México";
					break;
				case "3":
					//aduanaDestino2 = 17808;
					aduanaDestino2 = 19962.77;
					destino2 = "México, D.F.";
					break;
				case "4":
					//aduanaDestino2 = 8904;
					aduanaDestino2 = 9972.48;
					destino2 = "El Carmen, N.L.";
					break;
				case "5":
					//aduanaDestino2 = 8190;
					aduanaDestino2 = 8725.92;
					destino2 = "Guadalupe, N.L.";
					break;
				case "6":
					//aduanaDestino2 = 8190;
					aduanaDestino2 = 8725.92;
					destino2 = "Monterrey, N.L.";
					break;
				case "7":
					//aduanaDestino2 = 15582;
					aduanaDestino2 = 17451.84;
					destino2 = "Guadalajara, Jal.";
					break;
				case "8":
					//aduanaDestino2 = 14469;
					aduanaDestino2 = 16205.28;
					destino2 = "León, Gto.";
					break;
				case "9":
					//aduanaDestino2 = 14469;
					aduanaDestino2 = 16205.28;
					destino2 = "Querétaro, Qro.";
					break;
				case "10":
					//aduanaDestino2 = 13356;
					aduanaDestino2 = 14958.72;
					destino2 = "San Juan de los Lagos, Jal.";
					break;
				case "11":
					//aduanaDestino2 = 20034;
					aduanaDestino2 = 22438.08;
					destino2 = "Puebla, Pue.";
					break;
				case "12":
					//aduanaDestino2 = 12243;
					aduanaDestino2 = 13712.16;
					destino2 = "San Luis Potosí, SLP.";
					break;
				case "13":
					//aduanaDestino2 = 23373;
					aduanaDestino2 = 26177.76;
					destino2 = "Durango";
					break;
				case "14":
					aduanaDestino2 = 15750;
					destino2 = "Toluca";
					break;
			}
			break;
		case "Reynosa":
				switch (selectDestino2) {
					case "1":
						//aduanaDestino2 = 13650;
						aduanaDestino2 = 16250.28;
						destino2 = "Aguascalientes, Ags.";
						break;
					case "2":
						//aduanaDestino2 = 16800;
						aduanaDestino2 = 19944.96;
						destino2 = "Edo. de México";
						break;
					case "3":
						//aduanaDestino2 = 17850;
						aduanaDestino2 = 19944.96;
						destino2 = "México, D.F.";
						break;
					case "6":
						//aduanaDestino2 = 8400;
						aduanaDestino2 = 9972.48;
						destino2 = "Monterrey, N.L.";
						break;
				}
			break;
		case "Manzanillo":
				switch (selectDestino2) {
					case "1":
						aduanaDestino2 = 16275;
						destino2 = "Aguascalientes, Ags.";
						break;
					case "3":
						aduanaDestino2 = 16275;
						destino2 = "México, D.F.";
						break;
				}
			break;
		case "Lázaro Cárdenas":
			aduanaDestino2 = 0;
			break;
		case "Matamoros":
			aduanaDestino2 = 42000;
			break;
		case "Nacional":
			aduanaDestino2 = 0;
			break;
	}
	//para mostrar el destino
	switch (selectDestino2) {
		case "1":
			destino2 = "Aguascalientes, Ags.";
			break;
		case "2":
			destino2 = "Edo. de México";
			break;
		case "3":
			destino2 = "México, D.F.";
			break;
		case "4":
			destino2 = "El Carmen, N.L.";
			break;
		case "5":
			destino2 = "Guadalupe, N.L.";
			break;
		case "6":
			destino2 = "Monterrey, N.L.";
			break;
		case "7":
			destino2 = "Guadalajara, Jal.";
			break;
		case "8":
			destino2 = "León, Gto.";
			break;
		case "9":
			destino2 = "Querétaro, Qro.";
			break;
		case "10":
			destino2 = "San Juan de los Lagos, Jal.";
			break;
		case "11":
			destino2 = "Puebla, Pue.";
			break;
		case "12":
			destino2 = "San Luis Potosí, SLP.";
			break;
		case "13":
			destino2 = "Durango";
			break;
		case "14":
			destino2 = "Toluca";
			break;
	}
	
	//formulas
	$('#tipoCambioR2').text(tipoCambio2);
	$('#porcentajeArancelR2').text(porcentajeArancel2*100);
	$('#porcentajeUtilidadR2').text(porcentajeUtilidad2*100);
	$('#kilogramosR2').text(kilogramos2);
	$('#aduanaProductoR2').text(aduana2 + " - " + producto2);
	$('#destinoR2').text(destino2);
	$('#aduanaDestinoR2').text(aduanaDestino2);
	$('#agenciaAduanalR2').text(aduanaProducto2);
	$('#costoTotalKgR2').text(costoTotalKg2);
	
	//formulas apartado desglose
	var agenciaAduanal2 = aduanaProducto2 / kilogramos2;
	$('#agenciaAduanalDesgloseR2').text(Math.round(agenciaAduanal2*100)/100);
	//---------------------------
	var flete2 = aduanaDestino2 / kilogramos2;
	$('#fleteR2').text(Math.round(flete2*100)/100);
	//---------------------------
	var precioCompra2 = ((costoTotalKg2 - agenciaAduanal2 - flete2) / (1 + porcentajeArancel2));
	$('#arancelR2').text(Math.round(precioCompra2*100)/100);
	//---------------------------
	var arancel2 = precioCompra2 * porcentajeArancel2;
	$('#precioCompraR2').text(Math.round(arancel2*100)/100);
	//---------------------------
	var utilidad2 = costoTotalKg2 * porcentajeUtilidad2;
	$('#utilidadR2').text(Math.round(utilidad2*100)/100);
	//---------------------------
	var precioVentaPesos2 = costoTotalKg2 + utilidad2;
	$('#precioVentaDesgloseR2').text(Math.round(precioVentaPesos2*100)/100);
	//---------------------------
	var costoCompra2 = (precioCompra2 * 0.45359237) / tipoCambio2;
	$('#costoCompraR2').text(Math.round(costoCompra2*100)/100);
	//---------------------------
	//formula principal
	var formulaPart12 = (((costoCompra2 / 0.45359237)*tipoCambio2)*kilogramos2);
    var formulaPart22 = (formulaPart12 * porcentajeArancel2);
    var formula2 = ((formulaPart12 + formulaPart22 + aduanaDestino2 + aduanaProducto2)/kilogramos2)*(1+porcentajeUtilidad2);
	$('#precioVentaR2').text(Math.round(formula2*100)/100);


	//alert( aduanaProducto + " - " + aduanaDestino + " - " + aduana + " - " + producto + " - " + destino );
});
