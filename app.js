const UNIT_GROUPS = {
  "Prime Mover": ["LA01","LA03","LA04","LA05","LA06","LA07","LA08","LA09","LA10","LA11","LA12","LA13","LA14","LA15"],
  "Hargil": ["TL001","TL002","TL003"],
  "EndDump": ["TL004","TL005","TL006","TL007","TL008","TL009","TL010","TL011","TL012","TL013","TL014","TL015","TL016","TL017"]
};

let SPAREPARTS = [{"part_no": "7400011996", "description": "gasket; copper; copper 16 *22*1.5"}, {"part_no": "7400011998", "description": "gasket; copper 18*24*1.5"}, {"part_no": "7400018665", "description": "gasket"}, {"part_no": "7400067089", "description": "ball"}, {"part_no": "7400270950", "description": "gasket kit"}, {"part_no": "7400276948", "description": "O-ring kit; UNIT INJECTOR"}, {"part_no": "7400420641", "description": "plane gasket OIL INLET"}, {"part_no": "7400420643", "description": "plane gasket OIL OUTLET/TURBO"}, {"part_no": "7400422426", "description": "pin 8*20"}, {"part_no": "7400469601", "description": "rubber moulding 19.6*4*12.5 RUBBER"}, {"part_no": "7400469846", "description": "sealing ring 22.8 OD X 2.84 WA"}, {"part_no": "7400470190", "description": "sealing ring"}, {"part_no": "7400470922", "description": "sealing ring"}, {"part_no": "7400471708", "description": "rubber moulding RUBBER 35.6 X 27 X 7"}, {"part_no": "7400914531", "description": "snap ring 63.3*58*2"}, {"part_no": "7400925255", "description": "O-ring 64.5*3 NBR 70"}, {"part_no": "7400944364", "description": "O-ring 10.3*2.4"}, {"part_no": "7400947281", "description": "gasket; copper 10.2*13.5*1"}, {"part_no": "7400948610", "description": "O-ring 39.2*3 FKM 70 °"}, {"part_no": "7400949187", "description": "O-ring 6.3*2.4"}, {"part_no": "7400949656", "description": "O-ring 19.2*3 FKM 70°"}, {"part_no": "7400949659", "description": "O-ring"}, {"part_no": "7400960628", "description": "plug M10X1*8"}, {"part_no": "7400961968", "description": "plug"}, {"part_no": "7400966143", "description": "plug M16X1.5*12"}, {"part_no": "7400967344", "description": "O-ring 84.5*3 FKM 70"}, {"part_no": "7400969011", "description": "gasket; copper 14*20*1.5"}, {"part_no": "7400969445", "description": "flange screw M10*30"}, {"part_no": "7400975105", "description": "flange screw M10*100"}, {"part_no": "7400975697", "description": "O-ring 69.2*5.7 EPDM 70"}, {"part_no": "7400976068", "description": "› O-ring 164.3*5.7"}, {"part_no": "7400976971", "description": "O-ring 10.1*1.6 HNBR"}, {"part_no": "7400977282", "description": "OP hex. socket screw M14*55"}, {"part_no": "7400979099", "description": "gasket M22*32*2 STEEL/RUB"}, {"part_no": "7400982724", "description": "gasket 16*19*1.5 STEEL/RUB"}, {"part_no": "7400983472", "description": "cable tie; grey DIA 2/35 W3.6 PA46 GREY"}, {"part_no": "7400984732", "description": "flange screw; black M8*12"}, {"part_no": "7400984733", "description": "flange screw; black M8*16"}, {"part_no": "7400984736", "description": "flange screw; black"}, {"part_no": "7400984740", "description": "flange screw; black"}, {"part_no": "7400984746", "description": "flange screw; black"}, {"part_no": "7400984752", "description": "flange screw; silver"}, {"part_no": "7400984762", "description": "flange screw"}, {"part_no": "7400984764", "description": "flange screw"}, {"part_no": "7400984793", "description": "plug M16X1.5*11.5"}, {"part_no": "7400984816", "description": "flange screw"}, {"part_no": "7400984863", "description": "flange screw"}, {"part_no": "7400992065", "description": "O-ring 164*3 FKM 70° IRH"}, {"part_no": "7400994383", "description": "flange screw M8*14"}, {"part_no": "7400994385", "description": "flange screw; black M8*45"}, {"part_no": "7400994446", "description": "flange screw"}, {"part_no": "7400994823", "description": "hex. socket screw M8*20"}, {"part_no": "7400994852", "description": "washer; black 10.5*42*4"}, {"part_no": "7400994891", "description": "cable tie; grey DIA 2/50 FIX 6.8 0.8/6"}, {"part_no": "7401161059", "description": "OP sealing compound"}, {"part_no": "7401161370", "description": "adhesive 50 ML"}, {"part_no": "7401546531", "description": "lock brace"}, {"part_no": "7401546790", "description": "NS O-ring; middle"}, {"part_no": "7401547252", "description": "sealing ring 21*29.6*6 RUBBER"}, {"part_no": "7401547254", "description": "sealing ring; coolant pipe 49*5.6*7"}, {"part_no": "7401547940", "description": "pivot pin"}, {"part_no": "7401677319", "description": "NS O-ring; lower"}, {"part_no": "7401677370", "description": "sealing ring OUTLET PIPE"}, {"part_no": "7401677722", "description": "NS O-ring; middle"}, {"part_no": "7403161465", "description": "plane gasket CONNECTOR THERM HSG RET"}, {"part_no": "7403183207", "description": "valve bridge"}, {"part_no": "7403183211", "description": "valve spring; inner"}, {"part_no": "7403979639", "description": "plane gasket; starter element"}, {"part_no": "7408131751", "description": "OP draining bowl"}, {"part_no": "7408148729", "description": "connector"}, {"part_no": "7408712497", "description": "NS LOCK FLUID"}, {"part_no": "7420365079", "description": "rubber washer 40.4*52*2.5 RUBBER"}, {"part_no": "7420412482", "description": "flange screw"}, {"part_no": "7420430678", "description": "rubber moulding; coolant pump"}, {"part_no": "7420450320", "description": "spacer sleeve"}, {"part_no": "7420479636", "description": "sealing strip COOLANT CONNECTION"}, {"part_no": "7420510743", "description": "valve spring washer"}, {"part_no": "7420510747", "description": "valve cotter"}, {"part_no": "7420515101", "description": "valve cover"}, {"part_no": "7420526428", "description": "sealing ring"}, {"part_no": "7420536487", "description": "O-ring; INJECTOR SLEEVE INJECTOR SLEEVE"}, {"part_no": "7420538793", "description": "sealing strip; valve cover"}, {"part_no": "7420541940", "description": "sealing strip; plastic"}, {"part_no": "7420551483", "description": "sealing ring; Oil cooler"}, {"part_no": "7420559837", "description": "bracket"}, {"part_no": "7420567779", "description": "plug"}, {"part_no": "7420569833", "description": "NS gudgeon pin"}, {"part_no": "7420579690", "description": "sealing ring M24*33*2 STEEL/FPM"}, {"part_no": "7420590309", "description": "NS compression ring; lower"}, {"part_no": "7420593252", "description": "rubber plug"}, {"part_no": "7420712128", "description": "inlet valve"}, {"part_no": "7420712279", "description": "sealing ring"}, {"part_no": "7420728004", "description": "leaf spring"}, {"part_no": "7420740148", "description": "yoke"}, {"part_no": "7420774317", "description": "oil separator"}, {"part_no": "7420775143", "description": "adjusting screw"}, {"part_no": "7420784537", "description": "plane gasket; Turbocharger"}, {"part_no": "7420787167", "description": "gasket OIL FILTER HOUSING"}, {"part_no": "7420805850", "description": "seal INLET MANIFOLD"}, {"part_no": "7420817742", "description": "gasket; timing gear cover"}, {"part_no": "7420845995", "description": "plug"}, {"part_no": "7420855371", "description": "gasket; exhaust manifold"}, {"part_no": "7420900327", "description": "valve seat; inlet"}, {"part_no": "7420908338", "description": "guide VALVE COVER"}, {"part_no": "7420919484", "description": "valve guide"}, {"part_no": "7420981856", "description": "NS sleeve; Injector"}, {"part_no": "7421024032", "description": "sealing ring"}, {"part_no": "7421043247", "description": "NS TIMING GEAR PLATE INSTR"}, {"part_no": "7421054149", "description": "OP ball socket"}, {"part_no": "7421092243", "description": "sealing ring OIL CIRCUIT"}, {"part_no": "7421096421", "description": "piston cooling jet"}, {"part_no": "7421103569", "description": "rubber moulding PUMP UNIT"}, {"part_no": "7421161901", "description": "NS piston"}, {"part_no": "7421185086", "description": "seal; timing gear cover"}, {"part_no": "7421251596", "description": "NS compression ring; upper"}, {"part_no": "7421261987", "description": "washer"}, {"part_no": "7421274699", "description": "washer kit"}, {"part_no": "7421293367", "description": "sealing strip; steel"}, {"part_no": "7421294062", "description": "gasket COVER COOLANT DUCT"}, {"part_no": "7421298915", "description": "sealing strip; connection pipe"}, {"part_no": "7421334768", "description": "NS cylinder liner"}, {"part_no": "7421344778", "description": "flange screw"}, {"part_no": "7421344803", "description": "hex. socket screw"}, {"part_no": "7421345131", "description": "flange screw SPEC M16*200"}, {"part_no": "7421347087", "description": "crankshaft seal ASSY FRONT"}, {"part_no": "7421351717", "description": "injector sleeve; Kit FOR OTHER MODELS"}, {"part_no": "7421383310", "description": "gasket; timing gear cover"}, {"part_no": "7421406638", "description": "rocker arm; exhaust"}, {"part_no": "7421415427", "description": "rubber moulding PUMP UNIT"}, {"part_no": "7421428655", "description": "inlet valve"}, {"part_no": "7421430606", "description": "adjusting screw"}, {"part_no": "7421430623", "description": "NS sealing ring"}, {"part_no": "7421447682", "description": "gasket; timing gear cover"}, {"part_no": "7421497536", "description": "gasket OIL FILTER HOUSING"}, {"part_no": "7421503575", "description": "sealing ring THERMOSTAT"}, {"part_no": "7421508091", "description": "cover"}, {"part_no": "7421509881", "description": "assembly directive"}, {"part_no": "7421510072", "description": "cylinder head gasket; Cylinder head"}, {"part_no": "7421532261", "description": "sealing ring 14.5*3.2*5 RUBBER"}, {"part_no": "7421581522", "description": "gasket kit; supplementary overhaul"}, {"part_no": "7421590460", "description": "outlet pipe"}, {"part_no": "7421596642", "description": "control valve"}, {"part_no": "7421666520", "description": "plug"}, {"part_no": "7421677250", "description": "NS cover IK 21508091"}, {"part_no": "7421708521", "description": "valve seat; exhaust"}, {"part_no": "7421768034", "description": "de-carbonizing kit"}, {"part_no": "7421779548", "description": "crankshaft seal; front"}, {"part_no": "7421780376", "description": "sealing ring; oil filler"}, {"part_no": "7421822125", "description": "rocker arm; exhaust brake"}, {"part_no": "7421921757", "description": "exhaust valve"}, {"part_no": "7421940610", "description": "sealing ring"}, {"part_no": "7421940615", "description": "sealing ring Ø20X7"}, {"part_no": "7421990221", "description": "valve stem seal"}, {"part_no": "7422191895", "description": "crankshaft seal; rear; rear CASSETTE"}, {"part_no": "7422206133", "description": "plane gasket OIL INLET/TURBO"}, {"part_no": "7422224709", "description": "rocker arm shaft"}, {"part_no": "7422243641", "description": "sealing ring Ø20X6"}, {"part_no": "7422275838", "description": "sealing ring; Oil pump Ø31.4X5.5"}, {"part_no": "7422316718", "description": "plug"}, {"part_no": "7422319091", "description": "NS oil scraper ring"}, {"part_no": "7422368702", "description": "valve seat"}, {"part_no": "7422452225", "description": "plug"}, {"part_no": "7422472567", "description": "NS rocker arm; exhaust"}, {"part_no": "7422691232", "description": "valve spring; outer"}, {"part_no": "7422859766", "description": "flange screw"}, {"part_no": "7422860732", "description": "piston ring kit"}, {"part_no": "7423103145", "description": "cylinder liner kit; steel"}, {"part_no": "7423248736", "description": "gasket OIL FILTER HOUSING"}, {"part_no": "7423318175", "description": "frame reinforcement"}, {"part_no": "7423396314", "description": "exhaust valve"}, {"part_no": "7423424264", "description": "inlet valve"}, {"part_no": "7423579574", "description": "NS thrust washer; crankshaft"}, {"part_no": "7423645312", "description": "NS main bearing cap"}, {"part_no": "7423645321", "description": "NS main bearing cap"}, {"part_no": "7423646508", "description": "flange screw M18*160"}, {"part_no": "7423789275", "description": "overhaul kit; cylinder head"}, {"part_no": "7423803415", "description": "valve spring; outer OUTER"}, {"part_no": "7423803420", "description": "valve spring; inner INNER"}, {"part_no": "7423830349", "description": "cylinder block"}, {"part_no": "7423836339", "description": "flange screw M18*187"}, {"part_no": "7423859377", "description": "NS cylinder block"}, {"part_no": "7423859397", "description": "NS cylinder block"}, {"part_no": "7423885964", "description": "NS bearing shell; connecting rod; upper"}, {"part_no": "7423885966", "description": "NS bearing shell; connecting rod; lower"}, {"part_no": "7423886812", "description": "NS main bearing cap"}, {"part_no": "7423930238", "description": "NS cylinder head"}, {"part_no": "7423930296", "description": "cylinder head"}, {"part_no": "7423949026", "description": "valve bridge; exhaust"}, {"part_no": "7423994963", "description": "big-end bearing kit; connecting rod"}, {"part_no": "7423999622", "description": "plug"}, {"part_no": "7424000234", "description": "exhaust valve kit"}, {"part_no": "7424016197", "description": "engine"}, {"part_no": "7424048900", "description": "cover"}, {"part_no": "7424121550", "description": "OP › gasket"}, {"part_no": "7424124156", "description": "thrust washer kit"}, {"part_no": "7424130793", "description": "lifting eye; front"}, {"part_no": "7424152701", "description": "cover"}, {"part_no": "7424247036", "description": "NS main bearing shell; crankshaft; upper"}, {"part_no": "7424247038", "description": "NS main bearing shell; crankshaft; upper"}, {"part_no": "7424247040", "description": "NS main bearing shell; crankshaft; lower"}, {"part_no": "7424247046", "description": "NS main bearing shell; crankshaft; lower"}, {"part_no": "7424247105", "description": "main bearing kit; crankshaft POS 7"}, {"part_no": "7424382449", "description": "engine overhaul kit"}, {"part_no": "7424426721", "description": "expansion plug"}, {"part_no": "7424426722", "description": "expansion plug"}, {"part_no": "7424426723", "description": "expansion plug"}, {"part_no": "7424427518", "description": "nut washer"}, {"part_no": "7460111964", "description": "hexagon nut"}, {"part_no": "7460111975", "description": "washer 8.4*20*2.5"}, {"part_no": "7460111976", "description": "washer 8.4*25*5"}, {"part_no": "7485108352", "description": "crankshaft seal"}, {"part_no": "7485164172", "description": "NS coolant"}, {"part_no": "B-1010-10610", "description": "BOLT M6x10"}, {"part_no": "B-1010-51260", "description": "BOLT M12x60"}, {"part_no": "B-1010-51650", "description": "BOLT M16x50"}, {"part_no": "B-1010-52080", "description": "BOLT"}, {"part_no": "B-1016-50825", "description": "BOLT"}, {"part_no": "B-1016-50830", "description": "BOLT M8x30"}, {"part_no": "B-1016-51030", "description": "BOLT M10x30"}, {"part_no": "B-1016-51040", "description": "BOLT M10x40"}, {"part_no": "B-1016-51240", "description": "BOLT"}, {"part_no": "B-1016-51640", "description": "BOLT"}, {"part_no": "B-1016-51650", "description": "BOLT"}, {"part_no": "B-1016-51660", "description": "BOLT"}, {"part_no": "B-1017-51600", "description": "BOLT M16x100"}, {"part_no": "B-1050-50820", "description": "BOLT M8x20"}, {"part_no": "B-1050-50830", "description": "BOLT"}, {"part_no": "B-1050-50835", "description": "BOLT"}, {"part_no": "B-1510-50806", "description": "NUT M8x1.25p"}, {"part_no": "B-1510-51613", "description": "NUT M16x2p"}, {"part_no": "B-1510-52016", "description": "NUT M20x2.5p"}, {"part_no": "B-1560-51011", "description": "LOCK NUT M10x1.5p"}, {"part_no": "B-1560-51214", "description": "LOCK NUT"}, {"part_no": "B-1560-51617", "description": "LOCK NUT"}, {"part_no": "B-1560-52021", "description": "LOCK NUT"}, {"part_no": "B-1610-10825", "description": "SPRING WASHER"}, {"part_no": "B-1620-10816", "description": "PLATE WASHER M8"}, {"part_no": "B-1620-11020", "description": "PLATE WASHER M10"}, {"part_no": "B-1620-11632", "description": "WASHER PLATE"}, {"part_no": "B-1620-12032", "description": "WASHER PLATE"}, {"part_no": "B-4010-18080", "description": "Cotter Pin"}, {"part_no": "B-7010-00000", "description": "NIPPLE GREASE"}, {"part_no": "C-005-KM05", "description": "U-BOLT"}, {"part_no": "T17401-Y1320000", "description": "CLAMP 5 ATAS"}, {"part_no": "T17401-Y1420000", "description": "CLAMP 3 ATAS"}, {"part_no": "T17401-Y1520000", "description": "CLAMP 2 ATAS"}, {"part_no": "T17401-Y1620000", "description": "CLAMP 1 ATAS"}, {"part_no": "T58506-D1000000", "description": "HUBODOMETER BRACKET"}, {"part_no": "T58506-D1200000", "description": "BRACKET COVER"}, {"part_no": "T65006-Y1320000", "description": "CLAMP 6 ATAS"}, {"part_no": "TD2-0L5000P1", "description": "ADJUSTER PIN"}, {"part_no": "TD2-0L6000P1", "description": "PLATE"}, {"part_no": "TE4502-A1000000", "description": "SRT45 ASSY"}, {"part_no": "TE4502-B1000000", "description": "BODY ASSY"}, {"part_no": "TE4502-B1620000", "description": "TAIL GATE"}, {"part_no": "TE4502-B2000000", "description": "MULTIKAP ASSY"}, {"part_no": "TE4502-B2110000", "description": "LH STRUCTURE"}, {"part_no": "TE4502-B2115100", "description": "BRACKET"}, {"part_no": "TE4502-B2115120", "description": "PLATE"}, {"part_no": "TE4502-B2115140", "description": "PLATE"}, {"part_no": "TE4502-B2117000", "description": "PIN ASSY 1"}, {"part_no": "TE4502-B2118000", "description": "WASHER PLATE"}, {"part_no": "TE4502-B211A000", "description": "PIN ASSY 2"}, {"part_no": "TE4502-B2120000", "description": "CANOPY"}, {"part_no": "TE4502-B2B10000", "description": "RH STRUCTURE"}, {"part_no": "TE4502-B2B20000", "description": "CANOPY"}, {"part_no": "TE4502-B4000000", "description": "LADDER ASSY"}, {"part_no": "TE4502-B4100000", "description": "LADDER 1"}, {"part_no": "TE4502-B4200000", "description": "LADDER 2"}, {"part_no": "TE4502-C1000000", "description": "LOCK SYSTEM"}, {"part_no": "TE4502-C1100000", "description": "LOCK"}, {"part_no": "TE4502-C1110000", "description": "LOCK ASSY"}, {"part_no": "TE4502-C1200000", "description": "LOCK ASSY"}, {"part_no": "TE4502-C1210000", "description": "LOCK BRACKET"}, {"part_no": "TE4502-F1000000", "description": "FRAME ASSY"}, {"part_no": "TE4502-F1420000", "description": "PLATE"}, {"part_no": "TE4502-F1J10000", "description": "PLATE"}, {"part_no": "TE4502-F2000000", "description": "LANDING GEAR ASSY"}, {"part_no": "TE4502-F2100000", "description": "REINFORCE"}, {"part_no": "TE4502-F2200000", "description": "REINFORCE"}, {"part_no": "TE4502-F2300000", "description": "REINFORCE ASSY"}, {"part_no": "TE4502-F3000000", "description": "OUTRIGGER ASSY"}, {"part_no": "TE4502-F4000000", "description": "STABILIZER ASSY"}, {"part_no": "TE4502-F4100000", "description": "BRACKET STABILIZER"}, {"part_no": "TE4502-F4200000", "description": "STABILIZER"}, {"part_no": "TE4502-F4400000", "description": "PIN"}, {"part_no": "TE4502-F4500000", "description": "PIN"}, {"part_no": "TE4502-F4600000", "description": "PIN ASSY"}, {"part_no": "TE4502-F4700000", "description": "PLATE"}, {"part_no": "TE4502-F5000000", "description": "PERISAI KOLONG"}, {"part_no": "TE4502-G1000000", "description": "FENDER ASSY"}, {"part_no": "TE4502-G1100000", "description": "BRACKET"}, {"part_no": "TE4502-G1200000", "description": "RUBBER FENDER"}, {"part_no": "TE4502-G1300000", "description": "CLAMP"}, {"part_no": "TE4502-G1400000", "description": "RUBBER FENDER"}, {"part_no": "TE4502-G1500000", "description": "RUBBER FENDER"}, {"part_no": "TE4502-H1000000", "description": "HYDRAULIC ASSY"}, {"part_no": "TE4502-L1000000", "description": "ELECTRIC ASSY"}, {"part_no": "TE4502-L1130000", "description": "PLATE"}, {"part_no": "TE4502-M1000000", "description": "PIVOT PIN"}, {"part_no": "TE4502-R1000000", "description": "BRAKE ASSY"}, {"part_no": "TE4502-X1000000", "description": "AXLE & SUSPENSION ASSY"}, {"part_no": "TT2-2B2B00P", "description": "PIN"}, {"part_no": "TT2-2B2C00P", "description": "PLATE"}, {"part_no": "VEHE51-10000", "description": "REAR LAMP - AMBER"}, {"part_no": "VEHE51-30000", "description": "REAR LAMP - RED"}, {"part_no": "VEPA51-40001", "description": "SIDE MARKER W/ COVER"}, {"part_no": "VEPMG2-20001", "description": "REVERSE BUZZER 115 DB"}, {"part_no": "VEUN51-E0000", "description": "REVERSE LAMP"}, {"part_no": "VHHY04-20012-P12", "description": "GREASE NIPPLE"}, {"part_no": "VHHY04-20012-P13", "description": "GREASER PROTECTION CAP"}, {"part_no": "VHHY04-20014-S12", "description": "PACKSET MN 157 TANDEM SEAL"}, {"part_no": "VHHY04-20014-S13", "description": "SLIDER MN 157 A35"}, {"part_no": "VHHY04-20014-S14", "description": "OUTER STOPRING MN 157 A22"}, {"part_no": "VHHY04-20014-S15", "description": "LIFTRING MN 157 A22"}, {"part_no": "VHHY04-20014-S23", "description": "SLIDER MN 137 A35"}, {"part_no": "VHHY04-20014-S24", "description": "OUTER STOPRING MN 137 A22"}, {"part_no": "VHHY04-20028", "description": "HYDRAULIC CYLINDER"}, {"part_no": "VHHY04-20028-B01", "description": "BASE MN2 252-1937-4/4BSAE-290-HD"}, {"part_no": "VHHY04-20028-B02", "description": "PACKSET MN 252"}, {"part_no": "VHHY04-20028-B03", "description": "BOTTOM PLATE MN2 252"}, {"part_no": "VHHY04-20028-B04", "description": "SEAL BOTTOM PLATE MN 252"}, {"part_no": "VHHY04-20028-B05", "description": "LOCKING PLATE MN2 252"}, {"part_no": "VHHY04-20028-B06", "description": "BOLT HEX M12X25X1.25 SET 6 PCS"}, {"part_no": "VHHY04-20028-B07", "description": "WASHER SPRING M12 SET 6 PCS"}, {"part_no": "VHHY04-20028-C01", "description": "DUST COVER FE 226-5"}, {"part_no": "VHHY04-20028-P01", "description": "PISTON MN2 E 137-1965-HD-HC"}, {"part_no": "VHHY04-20028-P09", "description": "SPHERICAL BEARING"}, {"part_no": "VHHY04-20028-P10", "description": "CIRCLIP 90 DIN 472"}, {"part_no": "VHHY04-20028-S11", "description": "STAGE MN2 226-1880-HD-HC"}, {"part_no": "VHHY04-20028-S12", "description": "PACKSET MN 226 TANDEM SEAL"}, {"part_no": "VHHY04-20028-S13", "description": "SLIDER MN 226 A35"}, {"part_no": "VHHY04-20028-S14", "description": "OUTER STOPRING MN 226 A22"}, {"part_no": "VHHY04-20028-S15", "description": "LIFTRING MN 226x6 MK2"}, {"part_no": "VHHY04-20028-S21", "description": "STAGE MN2 202-1880-HD-HC"}, {"part_no": "VHHY04-20028-S22", "description": "PACKSET MN 202 TANDEM SEAL"}, {"part_no": "VHHY04-20028-S23", "description": "SLIDER MN 202 A35"}, {"part_no": "VHHY04-20028-S24", "description": "OUTER STOPRING MN 202 A22"}, {"part_no": "VHHY04-20028-S25", "description": "LIFTRING MN 202x6 MK2"}, {"part_no": "VHHY04-20028-S31", "description": "STAGE MN2 179-1880-HD-HC"}, {"part_no": "VHHY04-20028-S32", "description": "PACKSET MN 179 TANDEM SEAL"}, {"part_no": "VHHY04-20028-S33", "description": "SLIDER MN 179 A35"}, {"part_no": "VHHY04-20028-S34", "description": "OUTER STOPRING MN 179 A22"}, {"part_no": "VHHY04-20028-S35", "description": "LIFTRING MN 179 A22"}, {"part_no": "VHHY04-20028-S41", "description": "STAGE MN2 157-1880-HD-HC"}, {"part_no": "VHHY04-20028-SK", "description": "SEAL KIT"}, {"part_no": "VHHY04-80001", "description": "MULTICAP DRIVE 09235415"}, {"part_no": "VHHY04-80001-1", "description": "Bearring"}, {"part_no": "VHHY04-80001-10", "description": "Washer M12"}, {"part_no": "VHHY04-80001-11", "description": "Capnut High M12x1.75"}, {"part_no": "VHHY04-80001-2", "description": "Grease nipple"}, {"part_no": "VHHY04-80001-3", "description": "Housing of MK drive unit universal"}, {"part_no": "VHHY04-80001-5", "description": "Cylinder for MK drive unit universal"}, {"part_no": "VHHY04-80001-7", "description": "Clamp plate"}, {"part_no": "VHHY04-80001-9", "description": "MK cover for MK drive unit universal"}, {"part_no": "VMCB20-10002", "description": "CHAIN"}, {"part_no": "VMPA26-10003", "description": "SPRING"}, {"part_no": "VMPA26-10004", "description": "SPRING"}, {"part_no": "VPGP02-90001", "description": "PULL CHORD DRAIN COCK"}, {"part_no": "VPGP12-10001", "description": "HOSE CLAMP 1/2"}, {"part_no": "VRAP07-10004", "description": "WHEEL RIM"}, {"part_no": "VRHV06-20001", "description": "ADDITIONAL CROSSBEAM"}, {"part_no": "VRHV06-20001-11", "description": "MAIN BEAM"}, {"part_no": "VRHV06-20001-110", "description": "EXTENSION CYLINDER"}, {"part_no": "VRHV06-20001-111", "description": "FLANGED PIN"}, {"part_no": "VRHV06-20001-112", "description": "SCREW"}, {"part_no": "VRHV06-20001-113", "description": "SCREW"}, {"part_no": "VRHV06-20001-114", "description": "LOCKING LEVER"}, {"part_no": "VRHV06-20001-115", "description": "SUPPORT PLATE"}, {"part_no": "VRHV06-20001-116", "description": "HILT"}, {"part_no": "VRHV06-20001-117", "description": "NUT"}, {"part_no": "VRHV06-20001-118", "description": "SNAP RING"}, {"part_no": "VRHV06-20001-119", "description": "SPRING"}, {"part_no": "VRHV06-20001-12", "description": "MAIN ROAD"}, {"part_no": "VRHV06-20001-120", "description": "SCREW"}, {"part_no": "VRHV06-20001-121", "description": "NUT"}, {"part_no": "VRHV06-20001-122", "description": "SUPPORT PLATE"}, {"part_no": "VRHV06-20001-123", "description": "SCREW"}, {"part_no": "VRHV06-20001-124", "description": "SLIDING BLOCK"}, {"part_no": "VRHV06-20001-125", "description": "SLIDING BLOCK COVER"}, {"part_no": "VRHV06-20001-126", "description": "SCREW"}, {"part_no": "VRHV06-20001-127", "description": "SLIDING BLOCK"}, {"part_no": "VRHV06-20001-128", "description": "SLIDING BLOCK COVER"}, {"part_no": "VRHV06-20001-129", "description": "SCREW"}, {"part_no": "VRHV06-20001-13", "description": "SECOND ROD"}, {"part_no": "VRHV06-20001-130", "description": "SUPPORT PLATE"}, {"part_no": "VRHV06-20001-131", "description": "SCREW"}, {"part_no": "VRHV06-20001-132", "description": "PULLEY"}, {"part_no": "VRHV06-20001-133", "description": "PIN"}, {"part_no": "VRHV06-20001-134", "description": "SNAP RING"}, {"part_no": "VRHV06-20001-135", "description": "FLEYERCHAIN L.1790"}, {"part_no": "VRHV06-20001-136", "description": "FLEYERCHAIN L.1752"}, {"part_no": "VRHV06-20001-137", "description": "ADJUSTABLE CHAIN CONNECTION"}, {"part_no": "VRHV06-20001-138", "description": "NUT"}, {"part_no": "VRHV06-20001-139", "description": "STOP NUT"}, {"part_no": "VRHV06-20001-14", "description": "STABILIZER CYLINDER"}, {"part_no": "VRHV06-20001-140", "description": "FIXED CHAIN CONNECTION"}, {"part_no": "VRHV06-20001-141", "description": "SCREW"}, {"part_no": "VRHV06-20001-142", "description": "NUT"}, {"part_no": "VRHV06-20001-15", "description": "LOCKING RING"}, {"part_no": "VRHV06-20001-16", "description": "LOCKING COLLAR (A+B)"}, {"part_no": "VRHV06-20001-17", "description": "CABLE HOLDER"}, {"part_no": "VRHV06-20001-18", "description": "SCREW"}, {"part_no": "VRHV06-20001-19", "description": "STOP NUT"}, {"part_no": "VRHV06-20001-21", "description": "PIPE FITTING"}, {"part_no": "VRHV06-20001-210", "description": "PLUG"}, {"part_no": "VRHV06-20001-211", "description": "STRAIGHT PIPE FITTING"}, {"part_no": "VRHV06-20001-212", "description": "PIPE"}, {"part_no": "VRHV06-20001-213", "description": "PIPE CLAMP"}, {"part_no": "VRHV06-20001-214", "description": "SCREW"}, {"part_no": "VRHV06-20001-215", "description": "HOSE"}, {"part_no": "VRHV06-20001-216", "description": "PIPE"}, {"part_no": "VRHV06-20001-217", "description": "NIPPLE"}, {"part_no": "VRHV06-20001-218", "description": "PIPE FITTING"}, {"part_no": "VRHV06-20001-219", "description": "FITTING"}, {"part_no": "VRHV06-20001-22", "description": "PIPE"}, {"part_no": "VRHV06-20001-228", "description": "NIPPLE"}, {"part_no": "VRHV06-20001-229", "description": "EXTENSION CYLINDER VLVE"}, {"part_no": "VRHV06-20001-23", "description": "NUT DIN"}, {"part_no": "VRHV06-20001-24", "description": "RING DIN"}, {"part_no": "VRHV06-20001-25", "description": "SAFETY VALVE"}, {"part_no": "VRHV06-20001-26", "description": "PIPE"}, {"part_no": "VRHV06-20001-27", "description": "DUAL"}, {"part_no": "VRHV06-20001-28", "description": "HOSE"}, {"part_no": "VRHV06-20001-29", "description": "HYDRAULIC BLOCK"}, {"part_no": "VRHV06-20001-31", "description": "LINER"}, {"part_no": "VRHV06-20001-32", "description": "PISTON"}, {"part_no": "VRHV06-20001-33", "description": "BUSHING"}, {"part_no": "VRHV06-20001-34", "description": "ROD"}, {"part_no": "VRHV06-20001-35", "description": "SCREW"}, {"part_no": "VRHV06-20001-36", "description": "HALF RINGS"}, {"part_no": "VRHV06-20001-37", "description": "ARTICULATED FOOTPLATE"}, {"part_no": "VRHV06-20001-38", "description": "SEAL KIT"}, {"part_no": "VRHV06-20001-41", "description": "ROD"}, {"part_no": "VRHV06-20001-42", "description": "BUSHING"}, {"part_no": "VRHV06-20001-43", "description": "PISTON"}, {"part_no": "VRHV06-20001-44", "description": "INTERNAL ROD"}, {"part_no": "VRHV06-20001-45", "description": "LINER"}, {"part_no": "VRHV06-20001-46", "description": "SEAL KIT"}, {"part_no": "VRJS05-A0001", "description": "BOLT KING PIN"}, {"part_no": "VRJS06-10001-10", "description": "Brace Lug - W"}, {"part_no": "VRJS06-10001-11", "description": "Intermediate Cross Shaft"}, {"part_no": "VRJS06-10001-12", "description": "Cover Screw"}, {"part_no": "VRJS06-10001-13", "description": "Cover - 2 Speed"}, {"part_no": "VRJS06-10001-14", "description": "Cover - 1 Speed"}, {"part_no": "VRJS06-10001-15", "description": "Pinion Gear"}, {"part_no": "VRJS06-10001-16", "description": "Bevel Gear"}, {"part_no": "VRJS06-10001-17", "description": "Pinion Shaft - 1 Speed"}, {"part_no": "VRJS06-10001-18", "description": "Thrust Washer"}, {"part_no": "VRJS06-10001-19", "description": "Grooved Pin"}, {"part_no": "VRJS06-10001-20", "description": "Spacer Washer"}, {"part_no": "VRJS06-10001-21", "description": "Grease Fitting"}, {"part_no": "VRJS06-10001-22", "description": "Grease Seal"}, {"part_no": "VRJS06-10001-24", "description": "Self Locking Nut"}, {"part_no": "VRJS06-10001-26", "description": "Thrust Bearing"}, {"part_no": "VRJS06-10001-27", "description": "Collar"}, {"part_no": "VRJS06-10001-28", "description": "Output Shaft"}, {"part_no": "VRJS06-10001-30", "description": "Bushing"}, {"part_no": "VRJS06-10001-34", "description": "Spiral Pin"}, {"part_no": "VRJS06-10001-36", "description": "Output Cluster Shaft"}, {"part_no": "VRJS06-10001-37", "description": "Output Cluster Gear"}, {"part_no": "VRJS06-10001-38", "description": "Input Gear Shaft"}, {"part_no": "VRJS06-10001-39", "description": "Output Spur Gear"}, {"part_no": "VRJS06-10001-40", "description": "Input Spur Gear"}, {"part_no": "VRJS06-10001-41", "description": "Detent Spring"}, {"part_no": "VRJS06-10001-42", "description": "Detent Ball"}, {"part_no": "VRJS06-10001-44", "description": "Shift Housing Bolt"}, {"part_no": "VRJS06-10001-45", "description": "Self Locking Nut"}, {"part_no": "VRJS06-10001-46", "description": "Shoe - 10” x 10” x 4 1/2” Standard"}, {"part_no": "VRJS06-10001-47", "description": "Shoe Axle"}, {"part_no": "VRJS06-10001-48", "description": "Hex Head Bolt"}, {"part_no": "VRJS06-10001-49", "description": "Roll Pin - 1/4” x 1/4”"}, {"part_no": "VRJS06-10001-6", "description": "Standard Crank w/Hardware 17"}, {"part_no": "VRJS06-10001-7", "description": "Crank Hanger"}, {"part_no": "VRJS06-10003", "description": "LANDING GEAR"}, {"part_no": "VRJS16-10001", "description": "HUBODOMETER"}, {"part_no": "VRPA03-90001", "description": "HOSE AIR BRAKE"}, {"part_no": "VRPR09-40011-2", "description": "TIRE"}, {"part_no": "VRSR03-90004", "description": "AIR TANK 48L"}, {"part_no": "VRSR03-90006", "description": "BRAKE CHAMBER T36/36"}, {"part_no": "VRWA03-90004", "description": "PILOT RELAY VALVE"}, {"part_no": "VRWA03-90006", "description": "SPRING BRAKE CTRL VALVE"}, {"part_no": "VRYR01-20001-03", "description": "BRAKE SHOE"}, {"part_no": "VRYR01-20001-04", "description": "SPHERICAL BUSH NYLON"}, {"part_no": "VRYR01-20001-05", "description": "O-RING"}, {"part_no": "VRYR01-20001-06", "description": "SPACER WASHER"}, {"part_no": "VRYR01-20001-07", "description": "CIRCLIP"}, {"part_no": "VRYR01-20001-08", "description": "CAMSHAFT BUSH"}, {"part_no": "VRYR01-20001-09", "description": "GREASE NIPPLE"}, {"part_no": "VRYR01-20001-10", "description": "CAMSHAFT LH"}, {"part_no": "VRYR01-20001-11", "description": "CAMSHAFT RH"}, {"part_no": "VRYR01-20001-12", "description": "CAM ROLLER"}, {"part_no": "VRYR01-20001-14", "description": "DUST SEAL CAMSHAFT"}, {"part_no": "VRYR01-20001-15", "description": "BUSH - ANCHOR PIN"}, {"part_no": "VRYR01-20001-17", "description": "ANCHOR PIN P TYPE"}, {"part_no": "VRYR01-20001-18", "description": "CIRCLIP"}, {"part_no": "VRYR01-20001-19", "description": "HOUSING FOR SPHERICAL BEARING"}, {"part_no": "VRYR01-20001-20A", "description": "RETAINER SPRING CAM ROLLER"}, {"part_no": "VRYR01-20001-34", "description": "FLANGE BOLT"}, {"part_no": "VRYR01-20001-37", "description": "DUST COVER PLUG"}, {"part_no": "VRYR01-20001-38", "description": "GREASE NIPPLE EXT"}, {"part_no": "VRYR01-20001-40", "description": "STAR WASHER"}, {"part_no": "VRYR01-20001-41", "description": "HEX BOLT"}, {"part_no": "VRYR01-20001-42", "description": "STAR WASHER"}, {"part_no": "VRYR01-20001-45", "description": "SW08"}, {"part_no": "VRYR01-20001-48", "description": "ANCHOR PIN WASHER"}, {"part_no": "VRYR01-20001-51", "description": "ANCHOR LINING"}, {"part_no": "VRYR01-20001-52", "description": "CAM LINING"}, {"part_no": "VRYR01-20001-53", "description": "RIVET"}, {"part_no": "VRYR01-20001-58", "description": "BRAKE SHOE ASSY"}, {"part_no": "VRYR01-20015-17", "description": "DUST COVER UPPER R SQ"}, {"part_no": "VRYR01-20015-18", "description": "DUST COVER LOWER R SQ"}, {"part_no": "VRYR01-20015-19", "description": "DUST COVER UPPER L SQ"}, {"part_no": "VRYR01-20015-25", "description": "SPRING RETAINER"}, {"part_no": "VRYR01-20015-26", "description": "RETURN SPRING"}, {"part_no": "VRYR01-20015-42", "description": "RETURN SPRING"}, {"part_no": "VRYR01-20015-51", "description": "HEX BOLT"}, {"part_no": "VRYR01-20015-55", "description": "SPLIT PIN"}, {"part_no": "VRYR01-20023-20", "description": "DUST COVER LOWER L SQ"}, {"part_no": "VRYR01-20023-30", "description": "HUB MACHINING"}, {"part_no": "VRYR01-20023-31", "description": "INNER BEARING"}, {"part_no": "VRYR01-20023-33", "description": "TWIN WHEEL STUD"}, {"part_no": "VRYR01-20023-34", "description": "WHEEL NUT M24"}, {"part_no": "VRYR01-20023-35", "description": "WHEEL NUT M22"}, {"part_no": "VRYR01-20023-36", "description": "DRUM MACHINING"}, {"part_no": "VRYR01-20023-37", "description": "HUB SEAL"}, {"part_no": "VRYR01-20023-38", "description": "THRUST WASHER"}, {"part_no": "VRYR01-20023-39", "description": "SPINDLE NUT"}, {"part_no": "VRYR01-20023-40", "description": "LOCK WASHER"}, {"part_no": "VRYR01-20023-41", "description": "HEX BOLT"}, {"part_no": "VRYR01-20023-43", "description": "GASKET"}, {"part_no": "VRYR01-20023-44", "description": "HUB CAP"}, {"part_no": "VRYR01-20023-47", "description": "HEX BOLT"}, {"part_no": "VRYR01-20023-48", "description": "INNERCAM BRACKET"}, {"part_no": "VRYR01-20029", "description": "AXLE"}, {"part_no": "VRYR01-30001-C2", "description": "SLACK ADJUSTER"}, {"part_no": "VRYR02-10001-07", "description": "ADJ. TORQUE ARM ASSY 515-606"}, {"part_no": "VRYR02-10001-08", "description": "TORQUE ARM BUSH ASSY"}, {"part_no": "VRYR02-10001-15", "description": "LOCK NUT"}, {"part_no": "VRYR02-10001-16", "description": "HEX BOLT"}, {"part_no": "VRYR02-10001-3.10", "description": "GREASE NIPPLE"}, {"part_no": "VRYR02-10001-3.5A", "description": "EQUALISER SHAFT"}, {"part_no": "VRYR02-10001-3.6", "description": "LOCK NUT"}, {"part_no": "VRYR02-10001-3.7", "description": "EQUALISER SHAFT WASHER"}, {"part_no": "VRYR02-10001-5", "description": "ADJUSTABLE TORQUE ARM 355-445"}, {"part_no": "VRYR02-10001-5.1", "description": "ADJ. TORQUE ARM SCREW 260"}, {"part_no": "VRYR02-10001-7.2", "description": "ADJ. TORQUE ARM END RH"}, {"part_no": "VRYR02-10001-7.3", "description": "ADJ. TORQUE ARM END LH"}, {"part_no": "VRYR02-10001-7.4", "description": "HEX BOLT"}, {"part_no": "VRYR02-10001-7.5", "description": "LOCK NUT"}, {"part_no": "VRYR02-10001-8.1", "description": "TORQUE ARM PIN"}, {"part_no": "VRYR02-10001-8.2", "description": "LOCK NUT"}, {"part_no": "VRYR02-10001-8.3", "description": "TORQUE ARM PIN WASHER"}, {"part_no": "VRYR02-10001-8.4", "description": "TORQUE ARM PIN BUSH"}, {"part_no": "VRYR02-10004-11", "description": "U-BOLT C/W NUT"}, {"part_no": "VRYR02-10004-12", "description": "FIXED TORQUE ARM"}, {"part_no": "VRYR02-10028-1", "description": "FRONT HANGER"}, {"part_no": "VRYR02-10028-10", "description": "LEAF SPRING"}, {"part_no": "VRYR02-10028-12", "description": "SPRING SEAT"}, {"part_no": "VRYR02-10028-2", "description": "REAR HANGER"}, {"part_no": "VRYR02-10028-25.2", "description": "TOP CLAMP PLATE"}, {"part_no": "VRYR02-10028-26.2", "description": "OIL SEAL"}, {"part_no": "VRYR02-10028-3", "description": "EQUALISER HANGER"}, {"part_no": "VRYR02-10028-4.1", "description": "EQUALISER"}, {"part_no": "VRYR02-10028-5", "description": "EQUALISER SHAFT BUSH"}, {"part_no": "VRYR02-10029", "description": "SUSPENSION"}, {"part_no": "VRYR02-20015-26", "description": "ADJ. TORQUE ARM 420"}, {"part_no": "VYRY02-10028-6", "description": "FIXED TORQUE ARM"}];

// ---- populate unit dropdown ----
const noUnitSel = document.getElementById('noUnit');
for (const [group, units] of Object.entries(UNIT_GROUPS)) {
  const og = document.createElement('optgroup');
  og.label = group;
  for (const u of units) {
    const opt = document.createElement('option');
    opt.value = u; opt.textContent = u;
    og.appendChild(opt);
  }
  noUnitSel.appendChild(og);
}

// ---- tanggal (dd-mm-yyyy) & jam (24 jam, maks 23:59) ----
const $ = (id) => document.getElementById(id);

function maskDigits(el, format) {
  el.addEventListener('input', () => { el.value = format(el.value.replace(/\D/g, '')); });
}
const fmtDate = (d) => {
  d = d.slice(0, 8);
  if (d.length > 4) return d.slice(0, 2) + '-' + d.slice(2, 4) + '-' + d.slice(4);
  if (d.length > 2) return d.slice(0, 2) + '-' + d.slice(2);
  return d;
};
const fmtTime = (d) => {
  d = d.slice(0, 4);
  return d.length > 2 ? d.slice(0, 2) + ':' + d.slice(2) : d;
};
maskDigits($('tanggal'), fmtDate);
maskDigits($('jamMulai'), fmtTime);
maskDigits($('jamSelesai'), fmtTime);

function isValidDate(v) {
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(v);
  if (!m) return false;
  const d = +m[1], mo = +m[2], y = +m[3];
  const dt = new Date(y, mo - 1, d);
  return y >= 2000 && dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
}
function isValidTime(v) {           // 00:00 – 23:59
  const m = /^(\d{2}):(\d{2})$/.exec(v);
  return !!m && +m[1] <= 23 && +m[2] <= 59;
}
const dateToISO = (v) => v.split('-').reverse().join('-');       // dd-mm-yyyy -> yyyy-mm-dd
const isoToDate = (v) => v.split('-').reverse().join('-');       // yyyy-mm-dd -> dd-mm-yyyy

function openNative(native) {
  try { native.showPicker(); } catch (_) { native.focus(); native.click(); }
}
// kalender: pilih tanggal
$('tanggalBtn').addEventListener('click', () => {
  if (isValidDate($('tanggal').value)) $('tanggalNative').value = dateToISO($('tanggal').value);
  openNative($('tanggalNative'));
});
$('tanggalNative').addEventListener('change', (e) => {
  if (e.target.value) { $('tanggal').value = isoToDate(e.target.value); setFieldError('tanggal', ''); }
});
// jam: pilih dari picker, tetap dibatasi 23:59
['jamMulai', 'jamSelesai'].forEach((id) => {
  $(id + 'Btn').addEventListener('click', () => {
    if (isValidTime($(id).value)) $(id + 'Native').value = $(id).value;
    openNative($(id + 'Native'));
  });
  $(id + 'Native').addEventListener('change', (e) => {
    if (e.target.value && isValidTime(e.target.value)) { $(id).value = e.target.value; setFieldError(id, ''); }
  });
});

function setFieldError(id, msg) {
  const box = $('err-' + id);
  if (box) box.textContent = msg || '';
  $(id).classList.toggle('invalid', !!msg);
}

// ---- sparepart row management ----
const rowsWrap = document.getElementById('sperepartRows');
let rowSeq = 0;

function filterParts(q) {
  q = q.trim().toLowerCase();
  if (!q) return SPAREPARTS.slice(0, 25);
  return SPAREPARTS.filter(p =>
    p.part_no.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  ).slice(0, 40);
}

function createRow(prefill) {
  rowSeq += 1;
  const id = 'sp_' + rowSeq;
  const row = document.createElement('div');
  row.className = 'sperepart-row';
  row.dataset.rowId = id;
  row.innerHTML = `
    <div class="combo">
      <input type="text" class="sp-input" placeholder="Cari kode / nama sparepart" autocomplete="off" data-value="">
      <div class="combo-list"></div>
    </div>
    <input type="number" class="sp-qty" min="0" step="1" placeholder="Jml">
    <button type="button" class="row-remove" title="Hapus baris">×</button>
  `;
  rowsWrap.appendChild(row);

  const input = row.querySelector('.sp-input');
  const list = row.querySelector('.combo-list');
  const qty = row.querySelector('.sp-qty');
  const removeBtn = row.querySelector('.row-remove');

  if (prefill) {
    input.value = prefill.label || '';
    input.dataset.value = prefill.part_no || '';
    qty.value = prefill.qty ?? '';
  }

  function renderList(items) {
    if (!items.length) {
      list.innerHTML = '<div class="combo-empty">Tidak ditemukan</div>';
    } else {
      list.innerHTML = items.map(p =>
        `<div class="combo-item" data-code="${p.part_no.replace(/"/g,'&quot;')}" data-desc="${p.description.replace(/"/g,'&quot;')}">
          <span class="code">${p.part_no}</span><span class="desc">${p.description}</span>
        </div>`
      ).join('');
    }
    list.classList.add('open');
  }

  input.addEventListener('focus', () => renderList(filterParts(input.value)));
  input.addEventListener('input', () => {
    input.dataset.value = '';
    renderList(filterParts(input.value));
  });
  input.addEventListener('blur', () => {
    setTimeout(() => list.classList.remove('open'), 150);
  });
  list.addEventListener('mousedown', (e) => {
    const item = e.target.closest('.combo-item');
    if (!item) return;
    const code = item.dataset.code, desc = item.dataset.desc;
    input.value = code + ' — ' + desc;
    input.dataset.value = code;
    list.classList.remove('open');
  });

  removeBtn.addEventListener('click', () => {
    if (rowsWrap.children.length <= 1) return;
    row.remove();
    updateRemoveState();
  });

  updateRemoveState();
}

function updateRemoveState() {
  const disable = rowsWrap.children.length <= 1;
  rowsWrap.querySelectorAll('.row-remove').forEach(b => b.disabled = disable);
}

document.getElementById('addSperepart').addEventListener('click', () => createRow());
createRow();

function collectSpareparts() {
  const out = [];
  rowsWrap.querySelectorAll('.sperepart-row').forEach(row => {
    const input = row.querySelector('.sp-input');
    const qty = row.querySelector('.sp-qty');
    const label = input.value.trim();
    const code = input.dataset.value || '';
    const qtyVal = qty.value;
    if (label || qtyVal) {
      out.push({ part_no: code, label, qty: qtyVal ? Number(qtyVal) : null });
    }
  });
  return out;
}

// ---- toast ----
const toastEl = document.getElementById('toast');
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2600);
}

// ---- Supabase configuration ----
// Fill these in with your own project's values (Project Settings → API).
// SUPABASE_ANON_KEY is the public "anon" key — safe to ship in client-side
// code as long as you have Row Level Security policies set on the table.
const SUPABASE_URL = 'https://rpnehrwyxxhzdiytbkuu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FxoSev9TYS5tw8dku-VyCg_NcuYplT7';
const SUPABASE_TABLE = 'maintenance_activity_dataset';

const supabaseConfigured = !SUPABASE_URL.includes('YOUR-PROJECT-REF') && !SUPABASE_ANON_KEY.includes('YOUR-ANON');
 
if (!supabaseConfigured) {
  const banner = document.getElementById('dbBanner');
  banner.textContent = 'Supabase belum dikonfigurasi — isi SUPABASE_URL dan SUPABASE_ANON_KEY di dalam app.js agar form bisa menyimpan data.';
  banner.style.display = 'block';
}
 
async function saveToSupabase(record) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(record)
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase ${res.status}: ${text || res.statusText}`);
  }
}
 
// ---- Ambil daftar sparepart dari tabel Supabase ----
// Sesuaikan nama tabel & kolom dengan tabel sparepart Anda di Supabase.
const SP_TABLE    = 'spereparts_dataset';   // nama tabel sparepart
const SP_COL_NO   = 'no_part';     // kolom nomor part
const SP_COL_NAME = 'nama_part';   // kolom nama part
 
async function loadSpareparts() {
  if (!supabaseConfigured) return;
  const PAGE = 1000;               // batas default Supabase per request
  const all = [];
  try {
    for (let from = 0; ; from += PAGE) {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/${SP_TABLE}?select=${SP_COL_NO},${SP_COL_NAME}&order=${SP_COL_NAME}.asc`,
        { headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Range-Unit': 'items',
            'Range': `${from}-${from + PAGE - 1}`
        } }
      );
      if (!res.ok) throw new Error(`${res.status} ${await res.text().catch(() => '')}`);
      const rows = await res.json();
      all.push(...rows);
      if (rows.length < PAGE) break;
    }
    SPAREPARTS = all
      .filter(r => r[SP_COL_NO] != null)
      .map(r => ({ part_no: String(r[SP_COL_NO]), description: String(r[SP_COL_NAME] ?? '') }));
    showToast(`${SPAREPARTS.length} sparepart dimuat dari Supabase`);
  } catch (err) {
    console.error('Gagal memuat sparepart:', err);
    showToast('Gagal memuat sparepart, memakai data bawaan');
  }
}
loadSpareparts();
 
// ---- form submit ----
const form = document.getElementById('maintForm');
const submitBtn = document.getElementById('submitBtn');
 
form.addEventListener('submit', async (e) => {
  e.preventDefault();
 
  const readyEl = form.querySelector('input[name="ready"]:checked');
  const requiredIds = ['tanggal','noUnit','km','kerusakan','perbaikan','jamMulai','jamSelesai','pic'];
  let firstInvalid = null;
  for (const id of requiredIds) {
    const el = document.getElementById(id);
    el.classList.add('touched');
    if (!el.value.trim()) firstInvalid = firstInvalid || el;
  }
  // format tanggal & jam (24 jam, maks 23:59)
  const checks = [
    ['tanggal', isValidDate, 'Gunakan format dd-mm-yyyy yang valid'],
    ['jamMulai', isValidTime, 'Format 24 jam HH:MM, maksimal 23:59'],
    ['jamSelesai', isValidTime, 'Format 24 jam HH:MM, maksimal 23:59']
  ];
  for (const [id, fn, msg] of checks) {
    const el = $(id);
    const bad = !!el.value && !fn(el.value);
    setFieldError(id, bad ? msg : '');
    if (bad) firstInvalid = firstInvalid || el;
  }
  if (!readyEl) firstInvalid = firstInvalid || form.querySelector('input[name="ready"]');
  if (firstInvalid) {
    firstInvalid.focus();
    showToast('Mohon lengkapi semua kolom bertanda * dengan benar');
    return;
  }
 
  // Nama kunci di sini HARUS sama persis dengan nama kolom di tabel
  // maintenance_activity_dataset (lihat skema Supabase).
  const record = {
    tanggal: dateToISO(document.getElementById('tanggal').value), // kolom date, format yyyy-mm-dd
    no_unit: document.getElementById('noUnit').value,
    hm: document.getElementById('hm').value ? Number(document.getElementById('hm').value) : null,
    km: document.getElementById('km').value ? Number(document.getElementById('km').value) : null,
    kerusakan: document.getElementById('kerusakan').value.trim(),
    'pekerjaan / perbaikan': document.getElementById('perbaikan').value.trim(), // nama kolom aslinya mengandung spasi & "/"
    sperepart: collectSpareparts(),      // kolom jsonb: [{part_no, label, qty}, ...]
    lokasi: document.getElementById('lokasi').value.trim(),
    jam_mulai: document.getElementById('jamMulai').value,     // "HH:MM", cocok dengan kolom time
    jam_selesai: document.getElementById('jamSelesai').value,
    pic: document.getElementById('pic').value.trim(),
    ready: readyEl.value === 'Yes'       // kolom boolean
    // created_at dibiarkan kosong; isi kalau ingin dicatat dari sisi browser:
    // created_at: new Date().toISOString(),
  };
 
  if (!supabaseConfigured) {
    showToast('Supabase belum dikonfigurasi di app.js');
    return;
  }
 
  submitBtn.disabled = true;
  submitBtn.textContent = 'Menyimpan…';
 
  try {
    await saveToSupabase(record);
    showToast('Form berhasil disimpan ke Supabase');
    form.reset();
    rowsWrap.innerHTML = '';
    rowSeq = 0;
    createRow();
    form.querySelectorAll('.touched').forEach(el => el.classList.remove('touched'));
    ['tanggal','jamMulai','jamSelesai'].forEach(id => setFieldError(id, ''));
  } catch (err) {
    showToast('Gagal menyimpan: ' + (err && err.message ? err.message : 'coba lagi'));
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Simpan Form';
  }
});