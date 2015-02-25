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
	var selectFleteVenta = $('#select-flete-venta').val();
	var selectAcondicionar = $('#select-acondicionar').val();
	var selectTiempoConservacion = $('#select-tiempo-conservacion').val();
	var selectMaquila = $('#select-maquila').val();
	var aduanaProducto = 0;
	var aduanaDestino = 0;
	var fleteVenta = 0;
	var acondicionar = 0;
	var tiempoConservacion = 0;
	var maquila = 0;
	var aduana = "";
	var producto = "";
	var destino = "";
	//Aduana
	switch (selectAduana) {
		case "1-1":
			aduanaProducto = 11516.175;
			aduana = "Laredo";
			producto = "Cabeza de borrego";
			break;
		case "1-2":
		   	aduanaProducto = 6608.4268;
			aduana = "Laredo";
			producto = "Grasa";
			break;
		case "1-3":
			aduanaProducto = 6877.0697;
			aduana = "Laredo";
			producto = "Recorte";
			break;
		case "1-4":
			aduanaProducto = 14575.9652;
			aduana = "Laredo";
			producto = "Arrachera";
			break;
		case "1-5":
			aduanaProducto = 7800.9258;
			aduana = "Laredo";
			producto = "Cabeza de lomo";
			break;
		case "1-6":
			aduanaProducto = 9908.8978;
			aduana = "Laredo";
			producto = "Carnitas";
			break;
		case "1-7":
			aduanaProducto = 8297.6935;
			aduana = "Laredo";
			producto = "Espaldilla de cerdo";
			break;
		case "1-8":
			aduanaProducto = 6291.4366;
			aduana = "Laredo";
			producto = "Glándula";
			break;
		case "1-9":
			aduanaProducto = 20405.8059;
			aduana = "Laredo";
			producto = "Pulpas";
			break;
		case "1-10":
			aduanaProducto = 8457.3508;
			aduana = "Laredo";
			producto = "Unto de cerdo";
			break;
		case "1-11":
			aduanaProducto = 7899.2782;
			aduana = "Laredo";
			producto = "Pierna de cerdo";
			break;
		case "1-12":
			aduanaProducto = 8950.6477;
			aduana = "Laredo";
			producto = "Papada";
			break;
		case "1-13":
			aduanaProducto = 7178.8258;
			aduana = "Laredo";
			producto = "Trompa";
			break;
		case "1-14":
			aduanaProducto = 7757.4833;
			aduana = "Laredo";
			producto = "Manita";
			break;
		case "1-15":
			aduanaProducto = 9671.2514;
			aduana = "Laredo";
			producto = "Lengua de res";
			break;
		case "1-16":
			aduanaProducto = 8688.5100;
			aduana = "Laredo";
			producto = "Lengua de cerdo";
			break;
		case "1-17":
			aduanaProducto = 8427.6999;
			aduana = "Laredo";
			producto = "Buche";
			break;
		case "1-18":
			aduanaProducto = 7748.1932;
			aduana = "Laredo";
			producto = "Patita";
			break;
		case "1-19":
			aduanaProducto = 8485.2013;
			aduana = "Laredo";
			producto = "Hígado";
			break;
		case "1-20":
			aduanaProducto = 8278.1420;
			aduana = "Laredo";
			producto = "Oreja";
			break;
		case "1-21":
			aduanaProducto = 7760.7909;
			aduana = "Laredo";
			producto = "Cuero de lomo";
			break;
		case "1-22":
			aduanaProducto = 6331.7930;
			aduana = "Laredo";
			producto = "Cuero de panza";
			break;
		case "1-23":
			aduanaProducto = 7109.9877;
			aduana = "Laredo";
			producto = "Cuero de panceta";
			break;
		case "1-24":
			aduanaProducto = 6461.0167;
			aduana = "Laredo";
			producto = "Cuero de cabeza de lomo";
			break;
		case "1-25":
			aduanaProducto = 6201.6092;
			aduana = "Laredo";
			producto = "Cuero de pierna";
			break;
		case "1-26":
			aduanaProducto = 6776.1406;
			aduana = "Laredo";
			producto = "Cuero mixto";
			break;
		case "1-27":
			aduanaProducto = 9104.9216;
			aduana = "Laredo";
			producto = "Menudo";
			break;
		case "1-28":
			aduanaProducto = 15517.6949;
			aduana = "Laredo";
			producto = "Pata de res";
			break;
		case "1-29":
			aduanaProducto = 9065.4815;
			aduana = "Laredo";
			producto = "Cárnico";
			break;
		case "1-30":
			aduanaProducto = 7439.4244;
			aduana = "Laredo";
			producto = "Mantequa";
			break;
		case "1-31":
			aduanaProducto = 8973.9908;
			aduana = "Laredo";
			producto = "Pollo";
			break;
		case "1-32":
			aduanaProducto = 7843.9052;
			aduana = "Laredo";
			producto = "Huevo";
			break;
		case "1-33":
			aduanaProducto = 8429.3042;
			aduana = "Laredo";
			producto = "Visceras";
			break;
			//-----------------------------------------------
		case "2-1":
			aduanaProducto = 6875.1456;
			aduana = "Reynosa";
			producto = "Grasa";
			break;
		case "2-2":
		   	aduanaProducto = 15756.7079;
			aduana = "Reynosa";
			producto = "Cabeza de Cordero";
			break;
		case "2-3":
		   	aduanaProducto = 10062.5581;
			aduana = "Reynosa";
			producto = "Pollo";
			break;
		case "2-":
			aduanaProducto = 6699.8540;
			aduana = "Reynosa";
			producto = "Recorte";
			break;
		case "2-":
			aduanaProducto = 11151.3851;
			aduana = "Reynosa";
			producto = "Cárnico";
			break;
		case "2-":
			aduanaProducto = 6446.9792;
			aduana = "Reynosa";
			producto = "Cuero de panza";
			break;
		case "2-":
			aduanaProducto = 30423.1212;
			aduana = "Reynosa";
			producto = "Pata de res";
			break;
		case "2-":
			aduanaProducto = 30423.1212;
			aduana = "Reynosa";
			producto = "Pulpas";
			break;
		case "2-":
			aduanaProducto = 9825.8126;
			aduana = "Reynosa";
			producto = "Visceras";
			break;
			//-------------------------------------------
		case "3-1":
		   	aduanaProducto = 19079.3400;
			aduana = "Manzanillo";
			producto = "Cabezas de cordero NUEVA ZELANDA";
			break;
		case "3-2":
		   	aduanaProducto = 53500;
			aduana = "Manzanillo";
			producto = "Canal de cordero";
			break;
		case "3-3":
		   	aduanaProducto = 45204.7608;
			aduana = "Manzanillo";
			producto = "Cogote de carnero CHILE";
			break;
		case "3-4":
		   	aduanaProducto = 74564.9044;
			aduana = "Manzanillo";
			producto = "Cogote de carnero USA";
			break;
		case "3-5":
		   	aduanaProducto = 127192.6129;
			aduana = "Manzanillo";
			producto = "Cogote de carnero NUEVA ZELANDA";
			break;
		case "3-6":
		   	aduanaProducto = 37993.7575;
			aduana = "Manzanillo";
			producto = "Cogote de cordero CHILE";
			break;
		case "3-7":
		   	aduanaProducto = 142512.9024;
			aduana = "Manzanillo";
			producto = "Cogote de cordero NUEVA ZELANDA";
			break;
		case "3-8":
		   	aduanaProducto = 143041.9776;
			aduana = "Manzanillo";
			producto = "Espaldilla de cordero AUSTRALIA";
			break;
		case "3-9":
		   	aduanaProducto = 40356.1188;
			aduana = "Manzanillo";
			producto = "Espaldilla de cordero CHILE";
			break;
		case "3-10":
		   	aduanaProducto = 179852.3851;
			aduana = "Manzanillo";
			producto = "Espaldilla de carnero NUEVA ZELANDA";
			break;
		case "3-11":
		   	aduanaProducto = 45202.6967;
			aduana = "Manzanillo";
			producto = "Espaldilla de carnero CHILE";
			break;
		case "3-12":
		   	aduanaProducto = 118165.7108;
			aduana = "Manzanillo";
			producto = "Espaldilla de carnero AUSTRALIA";
			break;
		case "3-13":
		   	aduanaProducto = 34347.13;
			aduana = "Manzanillo";
			producto = "Grasa o recorte de cerdo";
			break;
		case "3-14":
		   	aduanaProducto = 19079.3400;
			aduana = "Manzanillo";
			producto = "Manufactura CHILE";
			break;
		case "3-15":
		   	aduanaProducto = 38232.7468;
			aduana = "Manzanillo";
			producto = "Menudo de cordero";
			break;
		case "3-16":
		   	aduanaProducto = 52321.7231;
			aduana = "Manzanillo";
			producto = "Para de res";
			break;
		case "3-17":
		   	aduanaProducto = 53500;
			aduana = "Manzanillo";
			producto = "Recorte Mutton";
			break;
		case "3-18":
		   	aduanaProducto = 20586.88;
			aduana = "Manzanillo";
			producto = "Trozos de cordero";
			break;
		case "3-19":
		   	aduanaProducto = 38644.2283;
			aduana = "Manzanillo";
			producto = "Vacio de cordero";
			break;
		case "3-20":
		   	aduanaProducto = 18875.3870;
			aduana = "Manzanillo";
			producto = "Recorte de res CHILE";
			break;
		case "3-21":
		   	aduanaProducto = 56981.5410;
			aduana = "Manzanillo";
			producto = "Cuarto delantero CHILE";
			break;
		case "3-22":
		   	aduanaProducto = 56979.7465;
			aduana = "Manzanillo";
			producto = "Cárnico CHILE";
			break
		case "3-23":
		   	aduanaProducto = 18192.4767;
			aduana = "Manzanillo";
			producto = "Pecho de carnero CHILE";
			break;
		case "3-24":
		   	aduanaProducto = 18192.4767;
			aduana = "Manzanillo";
			producto = "Pecho de cordero CHILE";
			break;
		case "3-25":
		   	aduanaProducto = 20054.3499;
			aduana = "Manzanillo";
			producto = "Pulpas CHILE";
			break;
		case "3-26":
		   	aduanaProducto = 20054.3499;
			aduana = "Manzanillo";
			producto = "Visceras CHILE";
			break;
			//---------------------------------------------------
		case "4-1":
		   	aduanaProducto = 21805.0152;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de cordero CHILE";
			break;
		case "4-2":
		   	aduanaProducto = 106758.5851;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de cordero NUVA ZELANDA";
			break;
		case "4-3":
		   	aduanaProducto = 117057.0512;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de carnero NUEVA ZELANDA";
			break;
		case "4-4":
		   	aduanaProducto = 17527.9117;
			aduana = "Lázaro Cárdenas";
			producto = "Cogote de carnero CHILE";
			break;
		case "4-5":
		   	aduanaProducto = 157971.0992;
			aduana = "Lázaro Cárdenas";
			producto = "Espaldilla de carnero NUEVA ZELANDA";
			break;
		case "4-6":
		   	aduanaProducto = 17527.9117;
			aduana = "Lázaro Cárdenas";
			producto = "Espaldilla de carnero CHILE";
			break;
		case "4-7":
		   	aduanaProducto = 53848.6425;
			aduana = "Lázaro Cárdenas";
			producto = "Espaldilla de cordero CHILE";
			break;
		case "4-8":
		   	aduanaProducto = 32650.92;
			aduana = "Lázaro Cárdenas";
			producto = "Grasa o recorte de cerdo";
			break;
		case "4-9":
		   	aduanaProducto = 52239.4619;
			aduana = "Lázaro Cárdenas";
			producto = "Cabeza de cordero CHILE";
			break;
		case "4-10":
		   	aduanaProducto = 86812.3621;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de carnero CHILE";
			break;
		case "4-11":
		   	aduanaProducto = 53446.3458;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de cordero CHILE";
			break;
		case "4-12":
		   	aduanaProducto = 141247.6784;
			aduana = "Lázaro Cárdenas";
			producto = "Canal de cordero NUEVA ZELANDA";
			break;
		case "4-13":
		   	aduanaProducto = 66278.6279;
			aduana = "Lázaro Cárdenas";
			producto = "Guata de cordero CHILE";
			break;
		case "4-14":
		   	aduanaProducto = 111009.5801;
			aduana = "Lázaro Cárdenas";
			producto = "Vacío de carnero NUEVA ZELANDA";
			break;
		case "4-15":
		   	aduanaProducto = 54985.1752;
			aduana = "Lázaro Cárdenas";
			producto = "Vacío de cordero CHILE";
			break;
		case "4-16":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Corazón CHILE";
			break;
		case "4-17":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Cabeza de res CHILE";
			break;
		case "4-18":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Hígado de res CHILE";
			break;
		case "4-19":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Patita CHILE";
			break;
		case "4-20":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Asado de tira CHILE";
			break;
		case "4-21":
		   	aduanaProducto = 37195.3729;
			aduana = "Lázaro Cárdenas";
			producto = "Lengua de carnero CHILE";
			break;
		case "4-22":
		   	aduanaProducto = 13357.1101;
			aduana = "Lázaro Cárdenas";
			producto = "Lengua de cordero CHILE";
			break;
		case "4-23":
		   	aduanaProducto = 29300.3450;
			aduana = "Lázaro Cárdenas";
			producto = "Manufactura CHILE";
			break;
		case "4-24":
		   	aduanaProducto = 37195.3729;
			aduana = "Lázaro Cárdenas";
			producto = "Mejilla de carnero CHILE";
			break;
		case "4-25":
		   	aduanaProducto = 23900.6205;
			aduana = "Lázaro Cárdenas";
			producto = "Mejilla de cordero CHILE";
			break;
		case "4-26":
		   	aduanaProducto = 31997.2187;
			aduana = "Lázaro Cárdenas";
			producto = "Pecho de carnero CHILE";
			break;
		case "4-27":
		   	aduanaProducto = 15260.8094;
			aduana = "Lázaro Cárdenas";
			producto = "Pecho de cordero CHILE";
			break;
		case "4-28":
		   	aduanaProducto = 15834.2081;
			aduana = "Lázaro Cárdenas";
			producto = "Pulpa CHILE";
			break;
		case "4-29":
		   	aduanaProducto = 15833.4601;
			aduana = "Lázaro Cárdenas";
			producto = "Recorte de res CHILE";
			break;
			//-------------------------------------------------
		case "5-1":
		   	aduanaProducto = 14950.28;
			aduana = "Matamoros";
			producto = "Manteca Líquida";
			break;
			//------------------------------------------------
		case "6-1":
		   	aduanaProducto = 21061.2252;
			aduana = "Piedras Negras";
			producto = "Manteca Líquida";
			break;
			//------------------------------------------------
		case "7-1":
		   	aduanaProducto = 0;
			aduana = "Nacional";
			producto = "Nacional";
			break;
	}
	switch (aduana) { //Destino
		case "Laredo":
			switch (selectDestino) {
				case "1":
					aduanaDestino = 13712.16;
					destino = "Aguascalientes, Ags.";
					break;
				case "2":
					aduanaDestino = 16695;
					destino = "Edo. de México";
					break;
				case "3":
					aduanaDestino = 19962.77;
					destino = "México, D.F.";
					break;
				case "4":
					aduanaDestino = 9972.48;
					destino = "El Carmen, N.L.";
					break;
				case "5":
					aduanaDestino = 8725.92;
					destino = "Guadalupe, N.L.";
					break;
				case "6":
					aduanaDestino = 8725.92;
					destino = "Monterrey, N.L.";
					break;
				case "7":
					aduanaDestino = 17451.84;
					destino = "Guadalajara, Jal.";
					break;
				case "8":
					aduanaDestino = 16205.28;
					destino = "León, Gto.";
					break;
				case "9":
					aduanaDestino = 16205.28;
					destino = "Querétaro, Qro.";
					break;
				case "10":
					aduanaDestino = 14958.72;
					destino = "San Juan de los Lagos, Jal.";
					break;
				case "11":
					aduanaDestino = 22438.08;
					destino = "Puebla, Pue.";
					break;
				case "12":
					aduanaDestino = 13712.16;
					destino = "San Luis Potosí, SLP.";
					break;
				case "13":
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
						aduanaDestino = 16250.28;
						destino = "Aguascalientes, Ags.";
						break;
					case "2":
						aduanaDestino = 19944.96;
						destino = "Edo. de México";
						break;
					case "3":
						aduanaDestino = 19944.96;
						destino = "México, D.F.";
						break;
					case "6":
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
		case "Piedras Negras":
			aduanaDestino = 45258.44;
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
	//para obtener el valor del flete de venta
	switch (selectFleteVenta) {
		case "1-1":
			fleteVenta = 10780;
			break;
		case "1-2":
			fleteVenta = 0;
			break;
		case "1-3":
			fleteVenta = 9460;
			break;
		case "1-4":
			fleteVenta = 9460;
			break;
		case "1-5":
			fleteVenta = 5830;
			break;
		case "1-6":
			fleteVenta = 6380;
			break;
		case "1-7":
			fleteVenta = 0;
			break;
		case "1-8":
			fleteVenta = 10780;
			break;
		case "2-1":
			fleteVenta = 10962;
			break;
		case "2-2":
			fleteVenta = 11200;
			break;
		case "2-3":
			fleteVenta = 10500;
			break;
		case "2-4":
			fleteVenta = 10500;
			break;
		case "2-5":
			fleteVenta = 6300;
			break;
		case "2-6":
			fleteVenta = 9900;
			break;
		case "2-7":
			fleteVenta = 10500;
			break;
		case "2-8":
			fleteVenta = 10962;
			break;
	}
	//para obtener el valor si se quiere acondicionar
	switch (selectAcondicionar) {
		case "NO":
			acondicionar = 0;
			break;
		case "SI":
			acondicionar = 6096.32;
			break;
	}
	//para obtener el valor del tiempo de conservacion
	switch (selectTiempoConservacion) {
		case "0":
			tiempoConservacion = 0;
			break;
		case "1":
			tiempoConservacion = 1;
			break;
		case "2":
			tiempoConservacion = 2;
			break;
		case "3":
			tiempoConservacion = 3;
			break;
		case "4":
			tiempoConservacion = 4;
			break;
		case "5":
			tiempoConservacion = 5;
			break;
		case "6":
			tiempoConservacion = 6;
			break;
		case "7":
			tiempoConservacion = 7;
			break;
		case "8":
			tiempoConservacion = 8;
			break;
		case "9":
			tiempoConservacion = 9;
			break;
		case "10":
			tiempoConservacion = 10;
			break;
		case "11":
			tiempoConservacion = 11;
			break;
		case "12":
			tiempoConservacion = 12;
			break;
	}
	//para obtener el valor de la maquila
	switch (selectMaquila) {
		case "0":
			maquila = 0;
			break;
		case "1":
			maquila = 2.3;
			break;
		case "2":
			maquila = 2;
			break;
		case "3":
			maquila = 2;
			break;
		case "4":
			maquila = 2.3;
			break;
		case "5":
			maquila = 2;
			break;
		case "6":
			maquila = 3;
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

	//esto se agrega en la version 2.0
	$('#costoR').text(fleteVenta);//campo costo - valor de flete venta
	$('#acondicionarR').text(acondicionar);//acondicionar - siempre es el valor 6096.32
	$('#tiempoConservacionR').text(tiempoConservacion+" meses");//tiempo conservacion
	var tiempoConservacion2 = kilogramos*0.36*tiempoConservacion;
	$('#costoConservacionR').text(Math.round(tiempoConservacion2*100)/100);
	var maquila2 = kilogramos*maquila;
	$('#maquilaR').text(Math.round(maquila2*100)/100);// el costo de maquila por kilogramos de la maquila
	
	var formulaPart1 = (((costoCompra / 0.45359237)*tipoCambio)*kilogramos);
    var formulaPart2 = (formulaPart1 * porcentajeArancel);
    var formula = ((formulaPart1 + formulaPart2 + aduanaDestino + aduanaProducto + fleteVenta + acondicionar + maquila2)/kilogramos)*(1+porcentajeUtilidad);
	$('#precioVentaR').text(Math.round(formula*100)/100); //cambia la formula
	
	//formulas apartado desglose
	var precioCompra = ((costoCompra*tipoCambio)/0.45359237);
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
	fleteVenta = fleteVenta / kilogramos;
	$('#fleteVentaR').text(Math.round(fleteVenta*100)/100);
	//---------------------------
	var acondicionamiento = acondicionar / kilogramos;
	$('#acondicionamientoTempR').text(Math.round(acondicionamiento*100)/100);
	//---------------------------
	var costoConservacion = tiempoConservacion2 / kilogramos;
	$('#conservacionCongeladoR').text(Math.round(costoConservacion*100)/100);
	//---------------------------
	maquila = maquila2 / kilogramos;
	$('#maquilaR2').text(Math.round(maquila*100)/100);
	//---------------------------
	var costoTotalKg = precioCompra + arancel + flete + agenciaAduanal + fleteVenta + acondicionamiento + costoConservacion + maquila;
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
		var precioVentaDlls = (precioVentaPesos / tipoCambioConver) * 0.45359237;
		$('#precioVentaDllsR').text(Math.round(precioVentaDlls*100)/100);
	}
});






















//calculo de resultado para pesos/kg

$(document).on('pagebeforeshow', '#resultado-pesos-lb', function(){  
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
			aduanaProducto2 = 11516.175;
			aduana2 = "Laredo";
			producto2 = "Cabeza de borrego";
			break;
		case "1-2":
		   	aduanaProducto2 = 6608.4268;
			aduana2 = "Laredo";
			producto2 = "Grasa";
			break;
		case "1-3":
			aduanaProducto2 = 6877.0697;
			aduana2 = "Laredo";
			producto2 = "Recorte";
			break;
		case "1-4":
			aduanaProducto2 = 14575.9652;
			aduana2 = "Laredo";
			producto2 = "Arrachera";
			break;
		case "1-5":
			aduanaProducto2 = 7800.9258;
			aduana2 = "Laredo";
			producto2 = "Cabeza de lomo";
			break;
		case "1-6":
			aduanaProducto2 = 9908.8978;
			aduana2 = "Laredo";
			producto2 = "Carnitas";
			break;
		case "1-7":
			aduanaProducto2 = 8297.6935;
			aduana2 = "Laredo";
			producto2 = "Espaldilla de cerdo";
			break;
		case "1-8":
			aduanaProducto2 = 6291.4366;
			aduana2 = "Laredo";
			producto2 = "Glándula";
			break;
		case "1-9":
			aduanaProducto2 = 20405.8059;
			aduana2 = "Laredo";
			producto2 = "Pulpas";
			break;
		case "1-10":
			aduanaProducto2 = 8457.3508;
			aduana2 = "Laredo";
			producto2 = "Unto de cerdo";
			break;
		case "1-11":
			aduanaProducto2 = 7899.2782;
			aduana2 = "Laredo";
			producto2 = "Pierna de cerdo";
			break;
		case "1-12":
			aduanaProducto2 = 8950.6477;
			aduana2 = "Laredo";
			producto2 = "Papada";
			break;
		case "1-13":
			aduanaProducto2 = 7178.8258;
			aduana2 = "Laredo";
			producto2 = "Trompa";
			break;
		case "1-14":
			aduanaProducto2 = 7757.4833;
			aduana2 = "Laredo";
			producto2 = "Manita";
			break;
		case "1-15":
			aduanaProducto2 = 9671.2514;
			aduana2 = "Laredo";
			producto2 = "Lengua de res";
			break;
		case "1-16":
			aduanaProducto2 = 8688.5100;
			aduana2 = "Laredo";
			producto2 = "Lengua de cerdo";
			break;
		case "1-17":
			aduanaProducto2 = 8427.6999;
			aduana2 = "Laredo";
			producto2 = "Buche";
			break;
		case "1-18":
			aduanaProducto2 = 7748.1932;
			aduana2 = "Laredo";
			producto2 = "Patita";
			break;
		case "1-19":
			aduanaProducto2 = 8485.2013;
			aduana2 = "Laredo";
			producto2 = "Hígado";
			break;
		case "1-20":
			aduanaProducto2 = 8278.1420;
			aduana2 = "Laredo";
			producto2 = "Oreja";
			break;
		case "1-21":
			aduanaProducto2 = 7760.7909;
			aduana2 = "Laredo";
			producto2 = "Cuero de lomo";
			break;
		case "1-22":
			aduanaProducto2 = 6331.7930;
			aduana2 = "Laredo";
			producto2 = "Cuero de panza";
			break;
		case "1-23":
			aduanaProducto2 = 7109.9877;
			aduana2 = "Laredo";
			producto2 = "Cuero de panceta";
			break;
		case "1-24":
			aduanaProducto2 = 6461.0167;
			aduana2 = "Laredo";
			producto2 = "Cuero de cabeza de lomo";
			break;
		case "1-25":
			aduanaProducto2 = 6201.6092;
			aduana2 = "Laredo";
			producto2 = "Cuero de pierna";
			break;
		case "1-26":
			aduanaProducto2 = 6776.1406;
			aduana2 = "Laredo";
			producto2 = "Cuero mixto";
			break;
		case "1-27":
			aduanaProducto2 = 9104.9216;
			aduana2 = "Laredo";
			producto2 = "Menudo";
			break;
		case "1-28":
			aduanaProducto2 = 15517.6949;
			aduana2 = "Laredo";
			producto2 = "Pata de res";
			break;
		case "1-29":
			aduanaProducto2 = 9065.4815;
			aduana2 = "Laredo";
			producto2 = "Cárnico";
			break;
		case "1-30":
			aduanaProducto2 = 7439.4244;
			aduana2 = "Laredo";
			producto2 = "Mantequa";
			break;
		case "1-31":
			aduanaProducto2 = 8973.9908;
			aduana2 = "Laredo";
			producto2 = "Pollo";
			break;
		case "1-32":
			aduanaProducto2 = 7843.9052;
			aduana2 = "Laredo";
			producto2 = "Huevo";
			break;
		case "1-33":
			aduanaProducto2 = 8429.3042;
			aduana2 = "Laredo";
			producto2 = "Visceras";
			break;
			//-----------------------------------------------
		case "2-1":
			aduanaProducto2 = 6875.1456;
			aduana2 = "Reynosa";
			producto2 = "Grasa";
			break;
		case "2-2":
		   	aduanaProducto2 = 15756.7079;
			aduana2 = "Reynosa";
			producto2 = "Cabeza de Cordero";
			break;
		case "2-3":
		   	aduanaProducto2 = 10062.5581;
			aduana2 = "Reynosa";
			producto2 = "Pollo";
			break;
		case "2-":
			aduanaProducto2 = 6699.8540;
			aduana2 = "Reynosa";
			producto2 = "Recorte";
			break;
		case "2-":
			aduanaProducto2 = 11151.3851;
			aduana2 = "Reynosa";
			producto2 = "Cárnico";
			break;
		case "2-":
			aduanaProducto2 = 6446.9792;
			aduana2 = "Reynosa";
			producto2 = "Cuero de panza";
			break;
		case "2-":
			aduanaProducto2 = 30423.1212;
			aduana2 = "Reynosa";
			producto2 = "Pata de res";
			break;
		case "2-":
			aduanaProducto2 = 30423.1212;
			aduana2 = "Reynosa";
			producto2 = "Pulpas";
			break;
		case "2-":
			aduanaProducto2 = 9825.8126;
			aduana2 = "Reynosa";
			producto2 = "Visceras";
			break;
			//-------------------------------------------
		case "3-1":
		   	aduanaProducto2 = 19079.3400;
			aduana2 = "Manzanillo";
			producto2 = "Cabezas de cordero NUEVA ZELANDA";
			break;
		case "3-2":
		   	aduanaProducto2 = 53500;
			aduana2 = "Manzanillo";
			producto2 = "Canal de cordero";
			break;
		case "3-3":
		   	aduanaProducto2 = 45204.7608;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de carnero CHILE";
			break;
		case "3-4":
		   	aduanaProducto2 = 74564.9044;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de carnero USA";
			break;
		case "3-5":
		   	aduanaProducto2 = 127192.6129;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de carnero NUEVA ZELANDA";
			break;
		case "3-6":
		   	aduanaProducto2 = 37993.7575;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de cordero CHILE";
			break;
		case "3-7":
		   	aduanaProducto2 = 142512.9024;
			aduana2 = "Manzanillo";
			producto2 = "Cogote de cordero NUEVA ZELANDA";
			break;
		case "3-8":
		   	aduanaProducto2 = 143041.9776;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de cordero AUSTRALIA";
			break;
		case "3-9":
		   	aduanaProducto2 = 40356.1188;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de cordero CHILE";
			break;
		case "3-10":
		   	aduanaProducto2 = 179852.3851;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de carnero NUEVA ZELANDA";
			break;
		case "3-11":
		   	aduanaProducto2 = 45202.6967;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de carnero CHILE";
			break;
		case "3-12":
		   	aduanaProducto2 = 118165.7108;
			aduana2 = "Manzanillo";
			producto2 = "Espaldilla de carnero AUSTRALIA";
			break;
		case "3-13":
		   	aduanaProducto2 = 34347.13;
			aduana2 = "Manzanillo";
			producto2 = "Grasa o recorte de cerdo";
			break;
		case "3-14":
		   	aduanaProducto2 = 19079.3400;
			aduana2 = "Manzanillo";
			producto2 = "Manufactura CHILE";
			break;
		case "3-15":
		   	aduanaProducto2 = 38232.7468;
			aduana2 = "Manzanillo";
			producto2 = "Menudo de cordero";
			break;
		case "3-16":
		   	aduanaProducto2 = 52321.7231;
			aduana2 = "Manzanillo";
			producto2 = "Para de res";
			break;
		case "3-17":
		   	aduanaProducto2 = 53500;
			aduana2 = "Manzanillo";
			producto2 = "Recorte Mutton";
			break;
		case "3-18":
		   	aduanaProducto2 = 20586.88;
			aduana2 = "Manzanillo";
			producto2 = "Trozos de cordero";
			break;
		case "3-19":
		   	aduanaProducto2 = 38644.2283;
			aduana2 = "Manzanillo";
			producto2 = "Vacio de cordero";
			break;
		case "3-20":
		   	aduanaProducto2 = 18875.3870;
			aduana2 = "Manzanillo";
			producto2 = "Recorte de res CHILE";
			break;
		case "3-21":
		   	aduanaProducto2 = 56981.5410;
			aduana2 = "Manzanillo";
			producto2 = "Cuarto delantero CHILE";
			break;
		case "3-22":
		   	aduanaProducto2 = 56979.7465;
			aduana2 = "Manzanillo";
			producto2 = "Cárnico CHILE";
			break
		case "3-23":
		   	aduanaProducto2 = 18192.4767;
			aduana2 = "Manzanillo";
			producto2 = "Pecho de carnero CHILE";
			break;
		case "3-24":
		   	aduanaProducto2 = 18192.4767;
			aduana2 = "Manzanillo";
			producto2 = "Pecho de cordero CHILE";
			break;
		case "3-25":
		   	aduanaProducto2 = 20054.3499;
			aduana2 = "Manzanillo";
			producto2 = "Pulpas CHILE";
			break;
		case "3-26":
		   	aduanaProducto2 = 20054.3499;
			aduana2 = "Manzanillo";
			producto2 = "Visceras CHILE";
			break;
			//---------------------------------------------------
		case "4-1":
		   	aduanaProducto2 = 21805.0152;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de cordero CHILE";
			break;
		case "4-2":
		   	aduanaProducto2 = 106758.5851;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de cordero NUVA ZELANDA";
			break;
		case "4-3":
		   	aduanaProducto2 = 117057.0512;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de carnero NUEVA ZELANDA";
			break;
		case "4-4":
		   	aduanaProducto2 = 17527.9117;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cogote de carnero CHILE";
			break;
		case "4-5":
		   	aduanaProducto2 = 157971.0992;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Espaldilla de carnero NUEVA ZELANDA";
			break;
		case "4-6":
		   	aduanaProducto2 = 17527.9117;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Espaldilla de carnero CHILE";
			break;
		case "4-7":
		   	aduanaProducto2 = 53848.6425;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Espaldilla de cordero CHILE";
			break;
		case "4-8":
		   	aduanaProducto2 = 32650.92;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Grasa o recorte de cerdo";
			break;
		case "4-9":
		   	aduanaProducto2 = 52239.4619;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cabeza de cordero CHILE";
			break;
		case "4-10":
		   	aduanaProducto2 = 86812.3621;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de carnero CHILE";
			break;
		case "4-11":
		   	aduanaProducto2 = 53446.3458;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de cordero CHILE";
			break;
		case "4-12":
		   	aduanaProducto2 = 141247.6784;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Canal de cordero NUEVA ZELANDA";
			break;
		case "4-13":
		   	aduanaProducto2 = 66278.6279;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Guata de cordero CHILE";
			break;
		case "4-14":
		   	aduanaProducto2 = 111009.5801;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Vacío de carnero NUEVA ZELANDA";
			break;
		case "4-15":
		   	aduanaProducto2 = 54985.1752;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Vacío de cordero CHILE";
			break;
		case "4-16":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Corazón CHILE";
			break;
		case "4-17":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Cabeza de res CHILE";
			break;
		case "4-18":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Hígado de res CHILE";
			break;
		case "4-19":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Patita CHILE";
			break;
		case "4-20":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Asado de tira CHILE";
			break;
		case "4-21":
		   	aduanaProducto2 = 37195.3729;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Lengua de carnero CHILE";
			break;
		case "4-22":
		   	aduanaProducto2 = 13357.1101;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Lengua de cordero CHILE";
			break;
		case "4-23":
		   	aduanaProducto2 = 29300.3450;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Manufactura CHILE";
			break;
		case "4-24":
		   	aduanaProducto2 = 37195.3729;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Mejilla de carnero CHILE";
			break;
		case "4-25":
		   	aduanaProducto2 = 23900.6205;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Mejilla de cordero CHILE";
			break;
		case "4-26":
		   	aduanaProducto2 = 31997.2187;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Pecho de carnero CHILE";
			break;
		case "4-27":
		   	aduanaProducto2 = 15260.8094;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Pecho de cordero CHILE";
			break;
		case "4-28":
		   	aduanaProducto2 = 15834.2081;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Pulpa CHILE";
			break;
		case "4-29":
		   	aduanaProducto2 = 15833.4601;
			aduana2 = "Lázaro Cárdenas";
			producto2 = "Recorte de res CHILE";
			break;
			//-------------------------------------------------
		case "5-1":
		   	aduanaProducto2 = 14950.28;
			aduana2 = "Matamoros";
			producto2 = "Manteca Líquida";
			break;
			//------------------------------------------------
		case "6-1":
		   	aduanaProducto2 = 21061.2252;
			aduana2 = "Piedras Negras";
			producto2 = "Manteca Líquida";
			break;
			//------------------------------------------------
		case "7-1":
		   	aduanaProducto2 = 0;
			aduana2 = "Nacional";
			producto2 = "Nacional";
			break;
	}
	switch (aduana2) {
		case "Laredo":
			switch (selectDestino2) {
				case "1":
					aduanaDestino2 = 13712.16;
					destino2 = "Aguascalientes, Ags.";
					break;
				case "2":
					aduanaDestino2 = 16695;
					destino2 = "Edo. de México";
					break;
				case "3":
					aduanaDestino2 = 19962.77;
					destino2 = "México, D.F.";
					break;
				case "4":
					aduanaDestino2 = 9972.48;
					destino2 = "El Carmen, N.L.";
					break;
				case "5":
					aduanaDestino2 = 8725.92;
					destino2 = "Guadalupe, N.L.";
					break;
				case "6":
					aduanaDestino2 = 8725.92;
					destino2 = "Monterrey, N.L.";
					break;
				case "7":
					aduanaDestino2 = 17451.84;
					destino2 = "Guadalajara, Jal.";
					break;
				case "8":
					aduanaDestino2 = 16205.28;
					destino2 = "León, Gto.";
					break;
				case "9":
					aduanaDestino2 = 16205.28;
					destino2 = "Querétaro, Qro.";
					break;
				case "10":
					aduanaDestino2 = 14958.72;
					destino2 = "San Juan de los Lagos, Jal.";
					break;
				case "11":
					aduanaDestino2 = 22438.08;
					destino2 = "Puebla, Pue.";
					break;
				case "12":
					aduanaDestino2 = 13712.16;
					destino2 = "San Luis Potosí, SLP.";
					break;
				case "13":
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
						aduanaDestino2 = 16250.28;
						destino2 = "Aguascalientes, Ags.";
						break;
					case "2":
						aduanaDestino2 = 19944.96;
						destino2 = "Edo. de México";
						break;
					case "3":
						aduanaDestino2 = 19944.96;
						destino2 = "México, D.F.";
						break;
					case "6":
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
	$('#precioCompraR2').text(Math.round(precioCompra2*100)/100);
	//---------------------------
	var arancel2 = precioCompra2 * porcentajeArancel2;
	$('#arancelR2').text(Math.round(arancel2*100)/100);
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
