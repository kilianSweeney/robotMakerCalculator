Ext.define('motioncalc.store.Conversions', {
    extend: 'Ext.data.Store',

    config: {
	storeId:'_Conversions',
        fields: ['unitFrom','xFactor','plusFactor','unitType','displayUnit'],
        data: [
//conversions[0]
{unitFrom:'acre',xFactor:4046.873,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[1]
{unitFrom:'are',xFactor:100,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[2]
{unitFrom:'barn',xFactor:1E-28,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[3]
{unitFrom:'circular mil',xFactor:5.067075E-10,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[4]
{unitFrom:'cm²',xFactor:0.0001,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[5]
{unitFrom:'darcy',xFactor:9.869233E-13,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[6]
{unitFrom:'ft²',xFactor:9.290304E-02,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[7]
{unitFrom:'hectare',xFactor:10000,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[8]
{unitFrom:'in²',xFactor:6.4516E-04,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[9]
{unitFrom:'km²',xFactor:1000000,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[10]
{unitFrom:'mi²',xFactor:2589988,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[11]
{unitFrom:'mm²',xFactor:0.000001,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[12]
{unitFrom:'m²',xFactor:1,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[13]
{unitFrom:'yd²',xFactor:0.8361274,plusFactor:0,unitType:'Area',displayUnit:true},
//conversions[14]
{unitFrom:'abfarad',xFactor:1E+09,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[15]
{unitFrom:'EMU capacitance',xFactor:1E+09,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[16]
{unitFrom:'ESU capacitance',xFactor:1.11265E-12,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[17]
{unitFrom:'F',xFactor:1,plusFactor:0,unitType:'Capacitance',displayUnit:false},
//conversions[18]
{unitFrom:'farad',xFactor:1,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[19]
{unitFrom:'microfarads',xFactor:0.000001,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[20]
{unitFrom:'picofarads',xFactor:1E-12,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[21]
{unitFrom:'statfarad',xFactor:1.11265E-12,plusFactor:0,unitType:'Capacitance',displayUnit:true},
//conversions[22]
{unitFrom:'abmho',xFactor:1E+09,plusFactor:0,unitType:'Conductance',displayUnit:true},
//conversions[23]
{unitFrom:'mho',xFactor:1,plusFactor:0,unitType:'Conductance',displayUnit:true},
//conversions[24]
{unitFrom:'S',xFactor:1,plusFactor:0,unitType:'Conductance',displayUnit:false},
//conversions[25]
{unitFrom:'siemens',xFactor:1,plusFactor:0,unitType:'Conductance',displayUnit:true},
//conversions[26]
{unitFrom:'statmho',xFactor:1.11265E-12,plusFactor:0,unitType:'Conductance',displayUnit:true},
//conversions[27]
{unitFrom:'A',xFactor:1,plusFactor:0,unitType:'Current',displayUnit:false},
//conversions[28]
{unitFrom:'abampere',xFactor:10,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[29]
{unitFrom:'amp',xFactor:1,plusFactor:0,unitType:'Current',displayUnit:false},
//conversions[30]
{unitFrom:'ampere',xFactor:1,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[31]
{unitFrom:'Bi',xFactor:10,plusFactor:0,unitType:'Current',displayUnit:false},
//conversions[32]
{unitFrom:'biot',xFactor:10,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[33]
{unitFrom:'EMU-current',xFactor:10,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[34]
{unitFrom:'ESU-current',xFactor:3.335641E-10,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[35]
{unitFrom:'Gi',xFactor:0.7957747,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[36]
{unitFrom:'gilbert',xFactor:0.7957747,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[37]
{unitFrom:'milliampere',xFactor:0.001,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[38]
{unitFrom:'statampere',xFactor:3.335641E-10,plusFactor:0,unitType:'Current',displayUnit:true},
//conversions[39]
{unitFrom:'g/cm³',xFactor:1000,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[40]
{unitFrom:'grain/gal (US)',xFactor:1.711806E-02,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[41]
{unitFrom:'kg/cm³',xFactor:1000000,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[42]
{unitFrom:'kg/m³',xFactor:1,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[43]
{unitFrom:'lb/ft³',xFactor:16.01846,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[44]
{unitFrom:'lb/gal (UK)',xFactor:99.77633,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[45]
{unitFrom:'lb/gal (US)',xFactor:119.8264,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[46]
{unitFrom:'lb/in³',xFactor:27679.9,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[47]
{unitFrom:'lb/yd³',xFactor:0.5932764,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[48]
{unitFrom:'oz/gal (UK)',xFactor:6.236023,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[49]
{unitFrom:'oz/gal (US)',xFactor:7.489152,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[50]
{unitFrom:'oz/in³',xFactor:1729.994,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[51]
{unitFrom:'slug/ft³',xFactor:515.3788,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[52]
{unitFrom:'ton(long)/yd³',xFactor:1328.939,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[53]
{unitFrom:'ton(short)/yd³',xFactor:1186.553,plusFactor:0,unitType:'Density',displayUnit:true},
//conversions[54]
{unitFrom:'Btu',xFactor:1055.87,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[55]
{unitFrom:'cal',xFactor:4.19002,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[56]
{unitFrom:'electronvolt',xFactor:1.60219E-19,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[57]
{unitFrom:'erg',xFactor:0.0000001,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[58]
{unitFrom:'eV',xFactor:1.60219E-19,plusFactor:0,unitType:'Energy',displayUnit:false},
//conversions[59]
{unitFrom:'ft-lbf',xFactor:1.355818,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[60]
{unitFrom:'ft-poundal',xFactor:4.214011E-02,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[61]
{unitFrom:'J',xFactor:1,plusFactor:0,unitType:'Energy',displayUnit:false},
//conversions[62]
{unitFrom:'joule',xFactor:1,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[63]
{unitFrom:'kcal',xFactor:4190.02,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[64]
{unitFrom:'kW-h',xFactor:3600000,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[65]
{unitFrom:'megajoule',xFactor:1000000,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[66]
{unitFrom:'quad',xFactor:1.055E+18,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[67]
{unitFrom:'therm (EEG)',xFactor:1.05506E+08,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[68]
{unitFrom:'therm (US)',xFactor:1.054804E+08,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[69]
{unitFrom:'ton of TNT',xFactor:4.184E+09,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[70]
{unitFrom:'W-h',xFactor:3600,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[71]
{unitFrom:'W-s',xFactor:1,plusFactor:0,unitType:'Energy',displayUnit:true},
//conversions[72]
{unitFrom:'ft³/min',xFactor:4.719474E-04,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[73]
{unitFrom:'ft³/s',xFactor:2.831685E-02,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[74]
{unitFrom:'gal(US)/day',xFactor:4.381264E-08,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[75]
{unitFrom:'gal(US)/min',xFactor:6.30902E-05,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[76]
{unitFrom:'gpm',xFactor:6.30902E-05,plusFactor:0,unitType:'Flow Rate',displayUnit:false},
//conversions[77]
{unitFrom:'in³/min',xFactor:2.731177E-07,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[78]
{unitFrom:'L/min',xFactor:1.666667E-05,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[79]
{unitFrom:'L/s',xFactor:0.001,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[80]
{unitFrom:'m³/s',xFactor:1,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[81]
{unitFrom:'yd³/min',xFactor:1.274258E-02,plusFactor:0,unitType:'Flow Rate',displayUnit:true},
//conversions[82]
{unitFrom:'dyn',xFactor:0.00001,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[83]
{unitFrom:'dyne',xFactor:0.00001,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[84]
{unitFrom:'kg(f)',xFactor:9.80665,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[85]
{unitFrom:'kgf',xFactor:9.80665,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[86]
{unitFrom:'kilogram force',xFactor:9.80665,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[87]
{unitFrom:'kilogram-force',xFactor:9.80665,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[88]
{unitFrom:'kilonewton',xFactor:1000,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[89]
{unitFrom:'kilopond',xFactor:9.80665,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[90]
{unitFrom:'kip',xFactor:4448.222,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[91]
{unitFrom:'kN',xFactor:1000,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[92]
{unitFrom:'lb(f)',xFactor:4.448222,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[93]
{unitFrom:'lbf',xFactor:4.448222,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[94]
{unitFrom:'N',xFactor:1,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[95]
{unitFrom:'Newton',xFactor:1,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[96]
{unitFrom:'ozf',xFactor:0.2780139,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[97]
{unitFrom:'pound force',xFactor:4.448222,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[98]
{unitFrom:'pound-force',xFactor:4.448222,plusFactor:0,unitType:'Force',displayUnit:false},
//conversions[99]
{unitFrom:'poundal',xFactor:0.138255,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[100]
{unitFrom:'ton-force',xFactor:8896.443,plusFactor:0,unitType:'Force',displayUnit:true},
//conversions[101]
{unitFrom:'abhenry',xFactor:1E-09,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[102]
{unitFrom:'EMU-inductance',xFactor:1E-09,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[103]
{unitFrom:'ESU-inductance',xFactor:8.987552E+11,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[104]
{unitFrom:'H',xFactor:1,plusFactor:0,unitType:'Inductance',displayUnit:false},
//conversions[105]
{unitFrom:'henry',xFactor:1,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[106]
{unitFrom:'millihenry',xFactor:0.001,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[107]
{unitFrom:'stathenry',xFactor:8.987552E+11,plusFactor:0,unitType:'Inductance',displayUnit:true},
//conversions[108]
{unitFrom:'gm-cm²',xFactor:0.0000001,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[109]
{unitFrom:'kg-cm²',xFactor:0.0001,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[110]
{unitFrom:'kg-m²',xFactor:1,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[111]
{unitFrom:'lb-ft-s²',xFactor:1.35582,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[112]
{unitFrom:'lb-in-s²',xFactor:0.112985,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[113]
{unitFrom:'N-m-s²',xFactor:1,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[114]
{unitFrom:'oz-in-s²',xFactor:7.06155E-03,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[115]
{unitFrom:'slug-ft²',xFactor:1.35582,plusFactor:0,unitType:'Inertia',displayUnit:true},
//conversions[116]
{unitFrom:'footcandle',xFactor:10.76391,plusFactor:0,unitType:'Light',displayUnit:true},
//conversions[117]
{unitFrom:'lumen/ft²',xFactor:10.76391,plusFactor:0,unitType:'Light',displayUnit:true},
//conversions[118]
{unitFrom:'lux',xFactor:1,plusFactor:0,unitType:'Light',displayUnit:true},
//conversions[119]
{unitFrom:'phot',xFactor:10000,plusFactor:0,unitType:'Light',displayUnit:true},
//conversions[120]
{unitFrom:'cm/s**2',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[121]
{unitFrom:'cm/s/s',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[122]
{unitFrom:'cm/sec**2',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[123]
{unitFrom:'cm/sec/sec',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[124]
{unitFrom:'cm/sec^2',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[125]
{unitFrom:'cm/sec²',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[126]
{unitFrom:'cm/s^2',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[127]
{unitFrom:'cm/s²',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[128]
{unitFrom:'feet/sec/sec',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[129]
{unitFrom:'feet/sec^2',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[130]
{unitFrom:'feet/sec²',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[131]
{unitFrom:'feet/s²',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[132]
{unitFrom:'ft/s**2',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[133]
{unitFrom:'ft/s/s',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[134]
{unitFrom:'ft/s^2',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[135]
{unitFrom:'ft/s²',xFactor:0.3048,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[136]
{unitFrom:'g',xFactor:9.80665,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[137]
{unitFrom:'gal',xFactor:0.01,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[138]
{unitFrom:'in/s**2',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[139]
{unitFrom:'in/s/s',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[140]
{unitFrom:'in/sec/sec',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[141]
{unitFrom:'in/sec^2',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[142]
{unitFrom:'in/sec²',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[143]
{unitFrom:'in/s^2',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[144]
{unitFrom:'in/s²',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[145]
{unitFrom:'inches/second^2',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[146]
{unitFrom:'inches/second²',xFactor:0.0254,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[147]
{unitFrom:'m/s**2',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[148]
{unitFrom:'m/s/s',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[149]
{unitFrom:'m/sec**2',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[150]
{unitFrom:'m/sec^2',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[151]
{unitFrom:'m/sec²',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[152]
{unitFrom:'m/s^2',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[153]
{unitFrom:'m/s²',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[154]
{unitFrom:'meters/second^2',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[155]
{unitFrom:'meters/second²',xFactor:1,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[156]
{unitFrom:'mm/s**2',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[157]
{unitFrom:'mm/s/s',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[158]
{unitFrom:'mm/sec**2',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[159]
{unitFrom:'mm/sec/sec',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[160]
{unitFrom:'mm/sec^2',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[161]
{unitFrom:'mm/sec²',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[162]
{unitFrom:'mm/s^2',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:false},
//conversions[163]
{unitFrom:'mm/s²',xFactor:0.001,plusFactor:0,unitType:'Linear acceleration',displayUnit:true},
//conversions[164]
{unitFrom:'"',xFactor:0.0254,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[165]
{unitFrom:'\'',xFactor:0.3048,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[166]
{unitFrom:'angstrom',xFactor:1E-10,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[167]
{unitFrom:'astronomical un',xFactor:1.495979E+11,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[168]
{unitFrom:'AU',xFactor:1.495979E+11,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[169]
{unitFrom:'centimeter',xFactor:0.01,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[170]
{unitFrom:'cm',xFactor:0.01,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[171]
{unitFrom:'fathom',xFactor:1.8288,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[172]
{unitFrom:'feet',xFactor:0.3048,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[173]
{unitFrom:'fermi',xFactor:1E-15,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[174]
{unitFrom:'ft',xFactor:0.3048,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[175]
{unitFrom:'ft.',xFactor:0.3048,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[176]
{unitFrom:'in',xFactor:0.0254,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[177]
{unitFrom:'in.',xFactor:0.0254,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[178]
{unitFrom:'inch',xFactor:0.0254,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[179]
{unitFrom:'inches',xFactor:0.0254,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[180]
{unitFrom:'kilometer',xFactor:1000,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[181]
{unitFrom:'km',xFactor:1000,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[182]
{unitFrom:'l.y.',xFactor:9.46073E+15,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[183]
{unitFrom:'light year',xFactor:9.46073E+15,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[184]
{unitFrom:'m',xFactor:1,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[185]
{unitFrom:'m.',xFactor:1,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[186]
{unitFrom:'meter',xFactor:1,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[187]
{unitFrom:'meters',xFactor:1,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[188]
{unitFrom:'microinch',xFactor:2.54E-08,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[189]
{unitFrom:'micron',xFactor:0.000001,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[190]
{unitFrom:'mil',xFactor:0.0000254,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[191]
{unitFrom:'mile',xFactor:1609.344,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[192]
{unitFrom:'millimeter',xFactor:0.001,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[193]
{unitFrom:'mm',xFactor:0.001,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[194]
{unitFrom:'nanometer',xFactor:1E-09,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[195]
{unitFrom:'nautical mile',xFactor:1852,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[196]
{unitFrom:'parsec',xFactor:3.085678E+16,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[197]
{unitFrom:'pc',xFactor:3.085678E+16,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[198]
{unitFrom:'pica',xFactor:4.217518E-03,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[199]
{unitFrom:'point',xFactor:3.514598E-04,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[200]
{unitFrom:'rd',xFactor:5.02921,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[201]
{unitFrom:'rod',xFactor:5.02921,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[202]
{unitFrom:'yard',xFactor:0.9144,plusFactor:0,unitType:'Linear distance',displayUnit:true},
//conversions[203]
{unitFrom:'yd',xFactor:0.9144,plusFactor:0,unitType:'Linear distance',displayUnit:false},
//conversions[204]
{unitFrom:'cm/s',xFactor:0.01,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[205]
{unitFrom:'cm/sec',xFactor:0.01,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[206]
{unitFrom:'cm/second',xFactor:0.01,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[207]
{unitFrom:'feet/min',xFactor:0.00508,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[208]
{unitFrom:'feet/minute',xFactor:0.00508,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[209]
{unitFrom:'feet/s',xFactor:0.3048,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[210]
{unitFrom:'feet/second',xFactor:0.3048,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[211]
{unitFrom:'fpm',xFactor:0.00508,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[212]
{unitFrom:'ft/h',xFactor:8.466667E-05,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[213]
{unitFrom:'ft/min',xFactor:0.00508,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[214]
{unitFrom:'ft/s',xFactor:0.3048,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[215]
{unitFrom:'ft/sec',xFactor:0.3048,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[216]
{unitFrom:'ft/second',xFactor:0.3048,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[217]
{unitFrom:'in/min',xFactor:4.233333E-04,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[218]
{unitFrom:'in/minute',xFactor:4.233333E-04,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[219]
{unitFrom:'in/s',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[220]
{unitFrom:'in/sec',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[221]
{unitFrom:'in/second',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[222]
{unitFrom:'inch/s',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[223]
{unitFrom:'inch/sec',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[224]
{unitFrom:'inches/minute',xFactor:4.233333E-04,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[225]
{unitFrom:'inches/second',xFactor:0.0254,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[226]
{unitFrom:'kilometers/hr',xFactor:0.2777778,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[227]
{unitFrom:'km/h',xFactor:0.2777778,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[228]
{unitFrom:'knot',xFactor:0.5144444,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[229]
{unitFrom:'kph',xFactor:0.2777778,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[230]
{unitFrom:'m/min',xFactor:1.666667E-02,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[231]
{unitFrom:'m/minute',xFactor:1.666667E-02,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[232]
{unitFrom:'m/s',xFactor:1,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[233]
{unitFrom:'m/sec',xFactor:1,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[234]
{unitFrom:'m/second',xFactor:1,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[235]
{unitFrom:'meters/minute',xFactor:1.666667E-02,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[236]
{unitFrom:'meters/second',xFactor:1,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[237]
{unitFrom:'mi/h',xFactor:0.44704,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[238]
{unitFrom:'mi/min',xFactor:26.8224,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[239]
{unitFrom:'mi/s',xFactor:1609.344,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[240]
{unitFrom:'miles per hour',xFactor:0.44704,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[241]
{unitFrom:'mm/s',xFactor:0.001,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[242]
{unitFrom:'mm/sec',xFactor:0.001,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[243]
{unitFrom:'mm/second',xFactor:0.001,plusFactor:0,unitType:'Linear speed',displayUnit:false},
//conversions[244]
{unitFrom:'mph',xFactor:0.44704,plusFactor:0,unitType:'Linear speed',displayUnit:true},
//conversions[245]
{unitFrom:'maxwell',xFactor:1E-08,plusFactor:0,unitType:'Magnetic Flux',displayUnit:true},
//conversions[246]
{unitFrom:'maxwells',xFactor:1E-08,plusFactor:0,unitType:'Magnetic Flux',displayUnit:false},
//conversions[247]
{unitFrom:'unit pole',xFactor:1.256637E-07,plusFactor:0,unitType:'Magnetic Flux',displayUnit:true},
//conversions[248]
{unitFrom:'unit poles',xFactor:1.256637E-07,plusFactor:0,unitType:'Magnetic Flux',displayUnit:false},
//conversions[249]
{unitFrom:'Wb',xFactor:1,plusFactor:0,unitType:'Magnetic Flux',displayUnit:false},
//conversions[250]
{unitFrom:'weber',xFactor:1,plusFactor:0,unitType:'Magnetic Flux',displayUnit:true},
//conversions[251]
{unitFrom:'carat',xFactor:0.0002,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[252]
{unitFrom:'grain',xFactor:6.479891E-05,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[253]
{unitFrom:'gram',xFactor:0.001,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[254]
{unitFrom:'kg',xFactor:1,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[255]
{unitFrom:'kilogram',xFactor:1,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[256]
{unitFrom:'lb',xFactor:0.4535925,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[257]
{unitFrom:'ounce',xFactor:2.834952E-02,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[258]
{unitFrom:'oz',xFactor:2.834952E-02,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[259]
{unitFrom:'pound',xFactor:0.4535925,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[260]
{unitFrom:'pounds',xFactor:0.4535925,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[261]
{unitFrom:'slug',xFactor:14.5939,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[262]
{unitFrom:'slugs',xFactor:14.5939,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[263]
{unitFrom:'ton (assay)',xFactor:2.916667E-02,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[264]
{unitFrom:'ton (long)',xFactor:1016.047,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[265]
{unitFrom:'ton (metric)',xFactor:1000,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[266]
{unitFrom:'ton (short)',xFactor:907.1847,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[267]
{unitFrom:'tonne',xFactor:1000,plusFactor:0,unitType:'Mass',displayUnit:false},
//conversions[268]
{unitFrom:'troy ounce',xFactor:3.110348E-02,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[269]
{unitFrom:'troy pound',xFactor:0.3732417,plusFactor:0,unitType:'Mass',displayUnit:true},
//conversions[270]
{unitFrom:'cal/min',xFactor:6.973333E-02,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[271]
{unitFrom:'cal/s',xFactor:4.184,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[272]
{unitFrom:'erg/s',xFactor:0.0000001,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[273]
{unitFrom:'ft-lbf/h',xFactor:3.766161E-04,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[274]
{unitFrom:'ft-lbf/min',xFactor:2.259697E-02,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[275]
{unitFrom:'ft-lbf/s',xFactor:1.355818,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[276]
{unitFrom:'horsepower',xFactor:745.6999,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[277]
{unitFrom:'hp',xFactor:745.6999,plusFactor:0,unitType:'Power',displayUnit:false},
//conversions[278]
{unitFrom:'kcal/min',xFactor:69.73333,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[279]
{unitFrom:'kcal/s',xFactor:4184,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[280]
{unitFrom:'W',xFactor:1,plusFactor:0,unitType:'Power',displayUnit:false},
//conversions[281]
{unitFrom:'watt',xFactor:1,plusFactor:0,unitType:'Power',displayUnit:true},
//conversions[282]
{unitFrom:'atm',xFactor:101325,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[283]
{unitFrom:'atmosphere, std',xFactor:101325,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[284]
{unitFrom:'bar',xFactor:100000,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[285]
{unitFrom:'cm of mercury',xFactor:1333.224,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[286]
{unitFrom:'cm of water',xFactor:98.0665,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[287]
{unitFrom:'cmH2O',xFactor:98.0665,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[288]
{unitFrom:'cmHg',xFactor:1333.224,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[289]
{unitFrom:'dyn/cm²',xFactor:0.1,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[290]
{unitFrom:'dyne/cm²',xFactor:0.1,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[291]
{unitFrom:'foot of mercury',xFactor:40636.66,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[292]
{unitFrom:'foot of water',xFactor:2989.067,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[293]
{unitFrom:'ftH2O',xFactor:2989.067,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[294]
{unitFrom:'ftHg',xFactor:40636.66,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[295]
{unitFrom:'gf/cm²',xFactor:98.0665,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[296]
{unitFrom:'inch of mercury',xFactor:3386.389,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[297]
{unitFrom:'inH2O',xFactor:249.0889,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[298]
{unitFrom:'inHg',xFactor:3386.389,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[299]
{unitFrom:'kgf/cm²',xFactor:98066.5,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[300]
{unitFrom:'kgf/mm²',xFactor:9806650,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[301]
{unitFrom:'kgf/m²',xFactor:9.80665,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[302]
{unitFrom:'kiloPascal',xFactor:1000,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[303]
{unitFrom:'kip/in²',xFactor:6894757,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[304]
{unitFrom:'kPa',xFactor:1000,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[305]
{unitFrom:'ksi',xFactor:6894757,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[306]
{unitFrom:'lb/in²',xFactor:1489072,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[307]
{unitFrom:'lbf/ft²',xFactor:47.88026,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[308]
{unitFrom:'lbf/in²',xFactor:6894.757,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[309]
{unitFrom:'mbar',xFactor:100,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[310]
{unitFrom:'millibar',xFactor:100,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[311]
{unitFrom:'mm of mercury',xFactor:133.3224,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[312]
{unitFrom:'mmHg',xFactor:133.3224,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[313]
{unitFrom:'Pa',xFactor:1,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[314]
{unitFrom:'pascal',xFactor:1,plusFactor:0,unitType:'Pressure',displayUnit:false},
//conversions[315]
{unitFrom:'poundal/ft²',xFactor:1.488165,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[316]
{unitFrom:'psi',xFactor:6894.757,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[317]
{unitFrom:'Torr',xFactor:133.322,plusFactor:0,unitType:'Pressure',displayUnit:true},
//conversions[318]
{unitFrom:'abohm',xFactor:1E-09,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[319]
{unitFrom:'EMU-resistance',xFactor:1E-09,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[320]
{unitFrom:'ESU-resistance',xFactor:8.987552E+11,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[321]
{unitFrom:'kohm',xFactor:1000,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[322]
{unitFrom:'ohm',xFactor:1,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[323]
{unitFrom:'statohm',xFactor:8.987552E+11,plusFactor:0,unitType:'Resistance',displayUnit:true},
//conversions[324]
{unitFrom:'deg/s**2',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[325]
{unitFrom:'deg/s/s',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[326]
{unitFrom:'deg/s^2',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[327]
{unitFrom:'deg/s²',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary acceleration',displayUnit:true},
//conversions[328]
{unitFrom:'degrees/sec²',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[329]
{unitFrom:'rad/s**2',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[330]
{unitFrom:'rad/s/s',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[331]
{unitFrom:'rad/s^2',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[332]
{unitFrom:'rad/s²',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:true},
//conversions[333]
{unitFrom:'radians/sec**2',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[334]
{unitFrom:'radians/sec^2',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[335]
{unitFrom:'radians/sec²',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[336]
{unitFrom:'radians/s²',xFactor:0.1591549,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[337]
{unitFrom:'rev/s**2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[338]
{unitFrom:'rev/s/s',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[339]
{unitFrom:'rev/sec**2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[340]
{unitFrom:'rev/sec/sec',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[341]
{unitFrom:'rev/sec^2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[342]
{unitFrom:'rev/sec²',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[343]
{unitFrom:'rev/s^2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[344]
{unitFrom:'rev/s²',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:true},
//conversions[345]
{unitFrom:'revs/s**2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[346]
{unitFrom:'revs/s/s',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[347]
{unitFrom:'revs/s^2',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[348]
{unitFrom:'revs/s²',xFactor:1,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[349]
{unitFrom:'RPM/s',xFactor:1.666667E-02,plusFactor:0,unitType:'Rotary acceleration',displayUnit:true},
//conversions[350]
{unitFrom:'RPM/sec',xFactor:1.666667E-02,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[351]
{unitFrom:'RPM/second',xFactor:1.666667E-02,plusFactor:0,unitType:'Rotary acceleration',displayUnit:false},
//conversions[352]
{unitFrom:'arc-minutes',xFactor:4.62963E-05,plusFactor:0,unitType:'Rotary displacement',displayUnit:true},
//conversions[353]
{unitFrom:'arc-seconds',xFactor:7.716049E-07,plusFactor:0,unitType:'Rotary displacement',displayUnit:true},
//conversions[354]
{unitFrom:'deg',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[355]
{unitFrom:'deg.',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[356]
{unitFrom:'degrees',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary displacement',displayUnit:true},
//conversions[357]
{unitFrom:'rad',xFactor:0.1591549,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[358]
{unitFrom:'radian',xFactor:0.1591549,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[359]
{unitFrom:'radians',xFactor:0.1591549,plusFactor:0,unitType:'Rotary displacement',displayUnit:true},
//conversions[360]
{unitFrom:'revolution',xFactor:1,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[361]
{unitFrom:'revolutions',xFactor:1,plusFactor:0,unitType:'Rotary displacement',displayUnit:true},
//conversions[362]
{unitFrom:'revs',xFactor:1,plusFactor:0,unitType:'Rotary displacement',displayUnit:false},
//conversions[363]
{unitFrom:'deg/s',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary speed',displayUnit:true},
//conversions[364]
{unitFrom:'deg/sec',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[365]
{unitFrom:'degrees/sec',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[366]
{unitFrom:'degrees/second',xFactor:2.777778E-03,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[367]
{unitFrom:'rad/s',xFactor:0.1591549,plusFactor:0,unitType:'Rotary speed',displayUnit:true},
//conversions[368]
{unitFrom:'rad/sec',xFactor:0.1591549,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[369]
{unitFrom:'radians/second',xFactor:0.1591549,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[370]
{unitFrom:'rads/sec',xFactor:0.1591549,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[371]
{unitFrom:'rev/s',xFactor:1,plusFactor:0,unitType:'Rotary speed',displayUnit:true},
//conversions[372]
{unitFrom:'rev/sec',xFactor:1,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[373]
{unitFrom:'revolutions/sec',xFactor:1,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[374]
{unitFrom:'revs/s',xFactor:1,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[375]
{unitFrom:'revs/sec',xFactor:1,plusFactor:0,unitType:'Rotary speed',displayUnit:false},
//conversions[376]
{unitFrom:'RPM',xFactor:1.666667E-02,plusFactor:0,unitType:'Rotary speed',displayUnit:true},
//conversions[377]
{unitFrom:'Celsius',xFactor:1,plusFactor:0,unitType:'Temperature',displayUnit:false},
//conversions[378]
{unitFrom:'deg C',xFactor:1,plusFactor:0,unitType:'Temperature',displayUnit:false},
//conversions[379]
{unitFrom:'deg F',xFactor:0.5555556,plusFactor:-17.77778,unitType:'Temperature',displayUnit:false},
//conversions[380]
{unitFrom:'deg K',xFactor:1,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[381]
{unitFrom:'deg R',xFactor:0.5555556,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[382]
{unitFrom:'degrees C',xFactor:1,plusFactor:0,unitType:'Temperature',displayUnit:false},
//conversions[383]
{unitFrom:'degrees F',xFactor:0.5555556,plusFactor:-17.77778,unitType:'Temperature',displayUnit:false},
//conversions[384]
{unitFrom:'degrees K',xFactor:1,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[385]
{unitFrom:'degrees R',xFactor:0.5555556,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[386]
{unitFrom:'F',xFactor:0.5555556,plusFactor:-17.77778,unitType:'Temperature',displayUnit:false},
//conversions[387]
{unitFrom:'Fahrenheit',xFactor:0.5555556,plusFactor:-17.77778,unitType:'Temperature',displayUnit:false},
//conversions[388]
{unitFrom:'Kelvin',xFactor:1,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[389]
{unitFrom:'Rankin',xFactor:0.5555556,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[390]
{unitFrom:'° C',xFactor:1,plusFactor:0,unitType:'Temperature',displayUnit:false},
//conversions[391]
{unitFrom:'° K',xFactor:1,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[392]
{unitFrom:'° R',xFactor:0.5555556,plusFactor:-273.15,unitType:'Temperature',displayUnit:false},
//conversions[393]
{unitFrom:'°C',xFactor:1,plusFactor:0,unitType:'Temperature',displayUnit:true},
//conversions[394]
{unitFrom:'°F',xFactor:0.5555556,plusFactor:-17.77778,unitType:'Temperature',displayUnit:true},
//conversions[395]
{unitFrom:'°K',xFactor:1,plusFactor:-273.15,unitType:'Temperature',displayUnit:true},
//conversions[396]
{unitFrom:'°R',xFactor:0.5555556,plusFactor:-273.15,unitType:'Temperature',displayUnit:true},
//conversions[397]
{unitFrom:'day',xFactor:86400,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[398]
{unitFrom:'day-sidereal',xFactor:86164.09,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[399]
{unitFrom:'hour',xFactor:3600,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[400]
{unitFrom:'hour-sidereal',xFactor:3590.17,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[401]
{unitFrom:'millisecond',xFactor:0.001,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[402]
{unitFrom:'minute',xFactor:60,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[403]
{unitFrom:'minute-sidereal',xFactor:59.83617,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[404]
{unitFrom:'nanosecond',xFactor:1E-09,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[405]
{unitFrom:'s',xFactor:1,plusFactor:0,unitType:'Time',displayUnit:false},
//conversions[406]
{unitFrom:'sec',xFactor:1,plusFactor:0,unitType:'Time',displayUnit:false},
//conversions[407]
{unitFrom:'second',xFactor:1,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[408]
{unitFrom:'second-sidereal',xFactor:0.9972696,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[409]
{unitFrom:'shake',xFactor:1E-08,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[410]
{unitFrom:'year',xFactor:3.1536E+07,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[411]
{unitFrom:'year-sidereal',xFactor:3.155815E+07,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[412]
{unitFrom:'year-tropical',xFactor:3.155693E+07,plusFactor:0,unitType:'Time',displayUnit:true},
//conversions[413]
{unitFrom:'dyn-cm',xFactor:0.0000001,plusFactor:0,unitType:'Torque',displayUnit:false},
//conversions[414]
{unitFrom:'dyne cm',xFactor:0.0000001,plusFactor:0,unitType:'Torque',displayUnit:false},
//conversions[415]
{unitFrom:'dyne-cm',xFactor:0.0000001,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[416]
{unitFrom:'gm-cm',xFactor:9.806614E-05,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[417]
{unitFrom:'kg-cm',xFactor:9.806614E-02,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[418]
{unitFrom:'kgf-m',xFactor:9.80665,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[419]
{unitFrom:'lb(f)-in',xFactor:0.1129848,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[420]
{unitFrom:'lbf-ft',xFactor:1.355818,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[421]
{unitFrom:'mN-m',xFactor:0.001,plusFactor:0,unitType:'Torque',displayUnit:false},
//conversions[422]
{unitFrom:'N-cm',xFactor:0.01,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[423]
{unitFrom:'N-m',xFactor:1,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[424]
{unitFrom:'newton meter',xFactor:1,plusFactor:0,unitType:'Torque',displayUnit:false},
//conversions[425]
{unitFrom:'ozf-in',xFactor:7.061552E-03,plusFactor:0,unitType:'Torque',displayUnit:true},
//conversions[426]
{unitFrom:'centipoise',xFactor:0.001,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[427]
{unitFrom:'lb/(ft-h)',xFactor:4.133789E-04,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[428]
{unitFrom:'lb/(ft-s)',xFactor:1.488164,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[429]
{unitFrom:'lbf-s/ft²',xFactor:47.88026,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[430]
{unitFrom:'lbf-s/in²',xFactor:6894.757,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[431]
{unitFrom:'Pa-s',xFactor:1,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[432]
{unitFrom:'pascal second',xFactor:1,plusFactor:0,unitType:'Viscosity',displayUnit:false},
//conversions[433]
{unitFrom:'pascal-second',xFactor:1,plusFactor:0,unitType:'Viscosity',displayUnit:false},
//conversions[434]
{unitFrom:'poise',xFactor:0.1,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[435]
{unitFrom:'poundal-s/ft²',xFactor:1.488164,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[436]
{unitFrom:'slug/(ft-s)',xFactor:47.88026,plusFactor:0,unitType:'Viscosity',displayUnit:true},
//conversions[437]
{unitFrom:'abvolt',xFactor:1E-08,plusFactor:0,unitType:'Voltage',displayUnit:true},
//conversions[438]
{unitFrom:'millivolt',xFactor:0.001,plusFactor:0,unitType:'Voltage',displayUnit:true},
//conversions[439]
{unitFrom:'statvolt',xFactor:299.7925,plusFactor:0,unitType:'Voltage',displayUnit:true},
//conversions[440]
{unitFrom:'V',xFactor:1,plusFactor:0,unitType:'Voltage',displayUnit:false},
//conversions[441]
{unitFrom:'volt',xFactor:1,plusFactor:0,unitType:'Voltage',displayUnit:true},
//conversions[442]
{unitFrom:'barrel',xFactor:0.158987,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[443]
{unitFrom:'bbl',xFactor:0.158987,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[444]
{unitFrom:'board foot',xFactor:2.359737E-03,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[445]
{unitFrom:'bushel',xFactor:3.523907E-02,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[446]
{unitFrom:'cup',xFactor:2.365882E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[447]
{unitFrom:'fl oz',xFactor:2.957353E-05,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[448]
{unitFrom:'fl oz (US)',xFactor:2.957353E-05,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[449]
{unitFrom:'fluid ounce',xFactor:2.957353E-05,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[450]
{unitFrom:'ft³',xFactor:2.831685E-02,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[451]
{unitFrom:'gal',xFactor:3.785412E-03,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[452]
{unitFrom:'gal (UK)',xFactor:4.54609E-03,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[453]
{unitFrom:'gal (US)',xFactor:3.785412E-03,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[454]
{unitFrom:'gil (UK)',xFactor:1.420654E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[455]
{unitFrom:'gil (US)',xFactor:1.182941E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[456]
{unitFrom:'in³',xFactor:1.638706E-05,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[457]
{unitFrom:'L',xFactor:0.001,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[458]
{unitFrom:'liter',xFactor:0.001,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[459]
{unitFrom:'mL',xFactor:0.000001,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[460]
{unitFrom:'m³',xFactor:1,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[461]
{unitFrom:'peck',xFactor:8.809768E-03,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[462]
{unitFrom:'pint',xFactor:4.731765E-04,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[463]
{unitFrom:'pint (dry)',xFactor:5.506105E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[464]
{unitFrom:'pint (liquid)',xFactor:4.731765E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[465]
{unitFrom:'pt',xFactor:4.731765E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[466]
{unitFrom:'qt',xFactor:9.463529E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[467]
{unitFrom:'quart',xFactor:9.463529E-04,plusFactor:0,unitType:'Volume',displayUnit:false},
//conversions[468]
{unitFrom:'quart (dry)',xFactor:1.101221E-03,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[469]
{unitFrom:'quart (liquid)',xFactor:9.463529E-04,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[470]
{unitFrom:'tablespoon',xFactor:1.478676E-05,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[471]
{unitFrom:'teaspoon',xFactor:4.928922E-06,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[472]
{unitFrom:'ton (register)',xFactor:2.831685,plusFactor:0,unitType:'Volume',displayUnit:true},
//conversions[473]
{unitFrom:'yd³',xFactor:0.7645549,plusFactor:0,unitType:'Volume',displayUnit:true}
        ]
    }
});

