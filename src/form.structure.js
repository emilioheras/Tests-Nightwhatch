module.exports = {
  data: {
    fields: [
      {
        name: "data[0][Inscription][event_id]",
        type: "hidden",
        label: "",
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][idRace]",
        type: "hidden",
        label: "",
        required: true,
        value: "000010000100131",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][user_id]",
        type: "hidden",
        label: "",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][user_inscription_id]",
        type: "hidden",
        label: "",
        required: false,
        value: "1472",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][selprice]",
        type: "select",
        label: "Precio",
        required: true,
        options: [
          {
            key: "",
            price: 0,
            value: "Selecciona un precio"
          },
          {
            key: "177",
            price: 10.5,
            value: "precio (10.50€ hasta 31-07-2016 00:00)"
          },
          {
            key: "178",
            price: 15,
            value: "precio especial (15€ hasta 31-07-2016 00:00)"
          },
          {
            key: "179",
            price: 0,
            value: "Gratis por tu cara bonita (0€ hasta 31-07-2016 00:00)"
          }
        ],
        isPrice: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][name]",
        type: "text",
        label: "Nombre",
        required: true,
        width: 30,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][surname]",
        type: "text",
        label: "Primer apellido",
        required: true,
        width: 30,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][surname2]",
        type: "text",
        label: "Segundo apellido",
        required: false,
        width: 30,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][mail]",
        type: "email",
        label: "Email",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][verify_email]",
        type: "email",
        label: "Confirmar email",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][tipodni]",
        type: "select",
        label: "Tipo de documento",
        required: true,
        options: [
          {
            key: 0,
            value: "DNI"
          },
          {
            key: 1,
            value: "NIE"
          },
          {
            key: 2,
            value: "Pasaporte"
          },
          {
            key: 3,
            value: "Sin documento"
          }
        ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][dni]",
        type: "text",
        label: "Número de documento",
        required: true,
        dependent: {
          field: "data[0][Inscription][tipodni]",
          condition: "ne",
          value: 3,
          value_type: "integer"
        },
        ws: "http://panel.local.sportmaniacs.com/api/inscriptions/:idDNI?event=371&lang=esp",
        ws_deferred: true,
        response_type: "dni",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][gender]",
        type: "select",
        label: "Género",
        required: true,
        options: [
          {
            key: 0,
            value: "Masculino"
          },
          {
            key: 1,
            value: "Femenino"
          }
        ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][dateofbirthday]",
        type: "date",
        label: "Fecha de nacimiento",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][auth]",
        type: "text",
        label: "Nombre del adulto que autoriza",
        required: true,
        dependent: {
          field: "data[0][Inscription][dateofbirthday]",
          condition: "gt",
          value: "1998-10-31",
          value_type: "date"
        },
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][auth_surname]",
        type: "text",
        label: "Apellido del adulto que autoriza",
        required: true,
        dependent: {
          field: "data[0][Inscription][dateofbirthday]",
          condition: "gt",
          value: "1998-10-31",
          value_type: "date"
        },
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][tipodni_auth]",
        type: "select",
        label: "Tipo de documento del adulto que autoriza",
        required: true,
        options: [
          {
            key: 0,
            value: "DNI"
          },
          {
            key: 1,
            value: "NIE"
          },
          {
            key: 2,
            value: "Pasaporte"
          }
        ],
        dependent: {
          field: "data[0][Inscription][dateofbirthday]",
          condition: "gt",
          value: "1998-10-31",
          value_type: "date"
        },
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][dni_auth]",
        type: "text",
        label: "Número de documento del adulto que autoriza",
        required: true,
        dependent: {
          field: "data[0][Inscription][dateofbirthday]",
          condition: "gt",
          value: "1998-10-31",
          value_type: "date"
        },
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][club]",
        type: "select",
        label: "Club",
        required: false,
        dependent: {
          field: "data[0][Inscription][newClub]",
          condition: "eq",
          value: false,
          value_type: "bool"
        },
        ws: "http://panel.local.sportmaniacs.com/api/clubs?lang=esp",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][club2]",
        type: "text",
        label: "Escribe el nombre de tu club",
        required: false,
        dependent: {
          field: "data[0][Inscription][newClub]",
          condition: "eq",
          value: true,
          value_type: "bool"
        },
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][newClub]",
        type: "checkbox",
        label: "No encuentro mi club",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][prefix_phone]",
        type: "select",
        label: "Prefijo",
        required: true,
        options: [
          {
            value: "+355 (AL)",
            key: "+355",
            code: "ALB"
          },
          {
            value: "+49 (DE)",
            key: "+49",
            code: "DEU"
          },
          {
            value: "+376 (AD)",
            key: "+376",
            code: "AND"
          },
          {
            value: "+244 (AO)",
            key: "+244",
            code: "AGO"
          },
          {
            value: "+1264 (AI)",
            key: "+1264",
            code: "AIA"
          },
          {
            value: "+672 (AQ)",
            key: "+672",
            code: "ATA"
          },
          {
            value: "+1268 (AG)",
            key: "+1268",
            code: "ATG"
          },
          {
            value: "+599 (AN)",
            key: "+599",
            code: "ANT"
          },
          {
            value: "+966 (SA)",
            key: "+966",
            code: "SAU"
          },
          {
            value: "+213 (DZ)",
            key: "+213",
            code: "DZA"
          },
          {
            value: "+54 (AR)",
            key: "+54",
            code: "ARG"
          },
          {
            value: "+374 (AM)",
            key: "+374",
            code: "ARM"
          },
          {
            value: "+297 (AW)",
            key: "+297",
            code: "ABW"
          },
          {
            value: "+61 (AU)",
            key: "+61",
            code: "AUS"
          },
          {
            value: "+43 (AT)",
            key: "+43",
            code: "AUT"
          },
          {
            value: "+994 (AZ)",
            key: "+994",
            code: "AZE"
          },
          {
            value: "+1242 (BS)",
            key: "+1242",
            code: "BHS"
          },
          {
            value: "+973 (BH)",
            key: "+973",
            code: "BHR"
          },
          {
            value: "+880 (BD)",
            key: "+880",
            code: "BGD"
          },
          {
            value: "+1246 (BB)",
            key: "+1246",
            code: "BRB"
          },
          {
            value: "+32 (BE)",
            key: "+32",
            code: "BEL"
          },
          {
            value: "+501 (BZ)",
            key: "+501",
            code: "BLZ"
          },
          {
            value: "+229 (BJ)",
            key: "+229",
            code: "BEN"
          },
          {
            value: "+1441 (BM)",
            key: "+1441",
            code: "BMU"
          },
          {
            value: "+975 (BT)",
            key: "+975",
            code: "BTN"
          },
          {
            value: "+375 (BY)",
            key: "+375",
            code: "BLR"
          },
          {
            value: "+591 (BO)",
            key: "+591",
            code: "BOL"
          },
          {
            value: "+387 (BA)",
            key: "+387",
            code: "BIH"
          },
          {
            value: "+267 (BW)",
            key: "+267",
            code: "BWA"
          },
          {
            value: "+55 (BR)",
            key: "+55",
            code: "BRA"
          },
          {
            value: "+673 (BN)",
            key: "+673",
            code: "BRN"
          },
          {
            value: "+359 (BG)",
            key: "+359",
            code: "BGR"
          },
          {
            value: "+226 (BF)",
            key: "+226",
            code: "BFA"
          },
          {
            value: "+257 (BI)",
            key: "+257",
            code: "BDI"
          },
          {
            value: "+238 (CV)",
            key: "+238",
            code: "CPV"
          },
          {
            value: "+855 (KH)",
            key: "+855",
            code: "KHM"
          },
          {
            value: "+237 (CM)",
            key: "+237",
            code: "CMR"
          },
          {
            value: "+1 (CA)",
            key: "+1",
            code: "CAN"
          },
          {
            value: "+235 (TD)",
            key: "+235",
            code: "TCD"
          },
          {
            value: "+56 (CL)",
            key: "+56",
            code: "CHL"
          },
          {
            value: "+86 (CN)",
            key: "+86",
            code: "CHN"
          },
          {
            value: "+357 (CY)",
            key: "+357",
            code: "CYP"
          },
          {
            value: "+57 (CO)",
            key: "+57",
            code: "COL"
          },
          {
            value: "+269 (KM)",
            key: "+269",
            code: "COM"
          },
          {
            value: "+225 (CI)",
            key: "+225",
            code: "CIV"
          },
          {
            value: "+506 (CR)",
            key: "+506",
            code: "CRI"
          },
          {
            value: "+385 (HR)",
            key: "+385",
            code: "HRV"
          },
          {
            value: "+53 (CU)",
            key: "+53",
            code: "CUB"
          },
          {
            value: "+45 (DK)",
            key: "+45",
            code: "DNK"
          },
          {
            value: "+253 (DJ)",
            key: "+253",
            code: "DJI"
          },
          {
            value: "+1767 (DM)",
            key: "+1767",
            code: "DMA"
          },
          {
            value: "+593 (EC)",
            key: "+593",
            code: "ECU"
          },
          {
            value: "+20 (EG)",
            key: "+20",
            code: "EGY"
          },
          {
            value: "+503 (SV)",
            key: "+503",
            code: "SLV"
          },
          {
            value: "+971 (AE)",
            key: "+971",
            code: "ARE"
          },
          {
            value: "+291 (ER)",
            key: "+291",
            code: "ERI"
          },
          {
            value: "+421 (SK)",
            key: "+421",
            code: "SVK"
          },
          {
            value: "+386 (SI)",
            key: "+386",
            code: "SVN"
          },
          {
            value: "+34 (ES)",
            key: "+34",
            code: "ESP"
          },
          {
            value: "+691 (FM)",
            key: "+691",
            code: "FSM"
          },
          {
            value: "+1 (US)",
            key: "+1",
            code: "USA"
          },
          {
            value: "+372 (EE)",
            key: "+372",
            code: "EST"
          },
          {
            value: "+79 (SJ)",
            key: "+79",
            code: "SJM"
          },
          {
            value: "+251 (ET)",
            key: "+251",
            code: "ETH"
          },
          {
            value: "+679 (FJ)",
            key: "+679",
            code: "FJI"
          },
          {
            value: "+63 (PH)",
            key: "+63",
            code: "PHL"
          },
          {
            value: "+358 (FI)",
            key: "+358",
            code: "FIN"
          },
          {
            value: "+33 (FR)",
            key: "+33",
            code: "FRA"
          },
          {
            value: "+241 (GA)",
            key: "+241",
            code: "GAB"
          },
          {
            value: "+220 (GM)",
            key: "+220",
            code: "GMB"
          },
          {
            value: "+995 (GE)",
            key: "+995",
            code: "GEO"
          },
          {
            value: "+233 (GH)",
            key: "+233",
            code: "GHA"
          },
          {
            value: "+350 (GI)",
            key: "+350",
            code: "GIB"
          },
          {
            value: "+1473 (GD)",
            key: "+1473",
            code: "GRD"
          },
          {
            value: "+30 (GR)",
            key: "+30",
            code: "GRC"
          },
          {
            value: "+299 (GL)",
            key: "+299",
            code: "GRL"
          },
          {
            value: "+590 (GP)",
            key: "+590",
            code: "GLP"
          },
          {
            value: "+1671 (GU)",
            key: "+1671",
            code: "GUM"
          },
          {
            value: "+502 (GT)",
            key: "+502",
            code: "GTM"
          },
          {
            value: "+44 (GG)",
            key: "+44",
            code: "GGY"
          },
          {
            value: "+224 (GN)",
            key: "+224",
            code: "GIN"
          },
          {
            value: "+240 (GQ)",
            key: "+240",
            code: "GNQ"
          },
          {
            value: "+594 (GF)",
            key: "+594",
            code: "GUF"
          },
          {
            value: "+245 (GW)",
            key: "+245",
            code: "GNB"
          },
          {
            value: "+592 (GY)",
            key: "+592",
            code: "GUY"
          },
          {
            value: "+509 (HT)",
            key: "+509",
            code: "HTI"
          },
          {
            value: "+504 (HN)",
            key: "+504",
            code: "HND"
          },
          {
            value: "+852 (HK)",
            key: "+852",
            code: "HKG"
          },
          {
            value: "+36 (HU)",
            key: "+36",
            code: "HUN"
          },
          {
            value: "+91 (IN)",
            key: "+91",
            code: "IND"
          },
          {
            value: "+62 (ID)",
            key: "+62",
            code: "IDN"
          },
          {
            value: "+964 (IQ)",
            key: "+964",
            code: "IRQ"
          },
          {
            value: "+98 (IR)",
            key: "+98",
            code: "IRN"
          },
          {
            value: "+353 (IE)",
            key: "+353",
            code: "IRL"
          },
          {
            value: "+61 (CX)",
            key: "+61",
            code: "CXR"
          },
          {
            value: "+354 (IS)",
            key: "+354",
            code: "ISL"
          },
          {
            value: "+1345 (KY)",
            key: "+1345",
            code: "CYM"
          },
          {
            value: "+61 (CC)",
            key: "+61",
            code: "CCK"
          },
          {
            value: "+682 (CK)",
            key: "+682",
            code: "COK"
          },
          {
            value: "+1670 (MP)",
            key: "+1670",
            code: "MNP"
          },
          {
            value: "+298 (FO)",
            key: "+298",
            code: "FRO"
          },
          {
            value: "+500 (FK)",
            key: "+500",
            code: "FLK"
          },
          {
            value: "+692 (MH)",
            key: "+692",
            code: "MHL"
          },
          {
            value: "+672 (NF)",
            key: "+672",
            code: "NFK"
          },
          {
            value: "+677 (SB)",
            key: "+677",
            code: "SLB"
          },
          {
            value: "+1649 (TC)",
            key: "+1649",
            code: "TCA"
          },
          {
            value: "+808 (UM)",
            key: "+808",
            code: "UMI"
          },
          {
            value: "+1284 (VG)",
            key: "+1284",
            code: "VGB"
          },
          {
            value: "+1340 (VI)",
            key: "+1340",
            code: "VIR"
          },
          {
            value: "+44 (IM)",
            key: "+44",
            code: "IMN"
          },
          {
            value: "+972 (IL)",
            key: "+972",
            code: "ISR"
          },
          {
            value: "+39 (IT)",
            key: "+39",
            code: "ITA"
          },
          {
            value: "+1876 (JM)",
            key: "+1876",
            code: "JAM"
          },
          {
            value: "+81 (JP)",
            key: "+81",
            code: "JPN"
          },
          {
            value: "+44 (JE)",
            key: "+44",
            code: "JEY"
          },
          {
            value: "+962 (JO)",
            key: "+962",
            code: "JOR"
          },
          {
            value: "+7 (KZ)",
            key: "+7",
            code: "KAZ"
          },
          {
            value: "+254 (KE)",
            key: "+254",
            code: "KEN"
          },
          {
            value: "+996 (KG)",
            key: "+996",
            code: "KGZ"
          },
          {
            value: "+686 (KI)",
            key: "+686",
            code: "KIR"
          },
          {
            value: "+965 (KW)",
            key: "+965",
            code: "KWT"
          },
          {
            value: "+266 (LS)",
            key: "+266",
            code: "LSO"
          },
          {
            value: "+371 (LV)",
            key: "+371",
            code: "LVA"
          },
          {
            value: "+961 (LB)",
            key: "+961",
            code: "LBN"
          },
          {
            value: "+231 (LR)",
            key: "+231",
            code: "LBR"
          },
          {
            value: "+218 (LY)",
            key: "+218",
            code: "LBY"
          },
          {
            value: "+41 (LI)",
            key: "+41",
            code: "LIE"
          },
          {
            value: "+370 (LT)",
            key: "+370",
            code: "LTU"
          },
          {
            value: "+352 (LU)",
            key: "+352",
            code: "LUX"
          },
          {
            value: "+853 (MO)",
            key: "+853",
            code: "MAC"
          },
          {
            value: "+389 (MK)",
            key: "+389",
            code: "MKD"
          },
          {
            value: "+261 (MG)",
            key: "+261",
            code: "MDG"
          },
          {
            value: "+60 (MY)",
            key: "+60",
            code: "MYS"
          },
          {
            value: "+265 (MW)",
            key: "+265",
            code: "MWI"
          },
          {
            value: "+960 (MV)",
            key: "+960",
            code: "MDV"
          },
          {
            value: "+223 (ML)",
            key: "+223",
            code: "MLI"
          },
          {
            value: "+356 (MT)",
            key: "+356",
            code: "MLT"
          },
          {
            value: "+212 (MA)",
            key: "+212",
            code: "MAR"
          },
          {
            value: "+596 (MQ)",
            key: "+596",
            code: "MTQ"
          },
          {
            value: "+230 (MU)",
            key: "+230",
            code: "MUS"
          },
          {
            value: "+222 (MR)",
            key: "+222",
            code: "MRT"
          },
          {
            value: "+269 (YT)",
            key: "+269",
            code: "MYT"
          },
          {
            value: "+52 (MX)",
            key: "+52",
            code: "MEX"
          },
          {
            value: "+373 (MD)",
            key: "+373",
            code: "MDA"
          },
          {
            value: "+377 (MC)",
            key: "+377",
            code: "MCO"
          },
          {
            value: "+976 (MN)",
            key: "+976",
            code: "MNG"
          },
          {
            value: "+1664 (MS)",
            key: "+1664",
            code: "MSR"
          },
          {
            value: "+258 (MZ)",
            key: "+258",
            code: "MOZ"
          },
          {
            value: "+95 (MM)",
            key: "+95",
            code: "MMR"
          },
          {
            value: "+264 (NA)",
            key: "+264",
            code: "NAM"
          },
          {
            value: "+674 (NR)",
            key: "+674",
            code: "NRU"
          },
          {
            value: "+977 (NP)",
            key: "+977",
            code: "NPL"
          },
          {
            value: "+505 (NI)",
            key: "+505",
            code: "NIC"
          },
          {
            value: "+227 (NE)",
            key: "+227",
            code: "NER"
          },
          {
            value: "+234 (NG)",
            key: "+234",
            code: "NGA"
          },
          {
            value: "+683 (NU)",
            key: "+683",
            code: "NIU"
          },
          {
            value: "+47 (NO)",
            key: "+47",
            code: "NOR"
          },
          {
            value: "+687 (NC)",
            key: "+687",
            code: "NCL"
          },
          {
            value: "+64 (NZ)",
            key: "+64",
            code: "NZL"
          },
          {
            value: "+968 (OM)",
            key: "+968",
            code: "OMN"
          },
          {
            value: "+31 (NL)",
            key: "+31",
            code: "NLD"
          },
          {
            value: "+92 (PK)",
            key: "+92",
            code: "PAK"
          },
          {
            value: "+680 (PW)",
            key: "+680",
            code: "PLW"
          },
          {
            value: "+970 (PS)",
            key: "+970",
            code: "PSE"
          },
          {
            value: "+507 (PA)",
            key: "+507",
            code: "PAN"
          },
          {
            value: "+675 (PG)",
            key: "+675",
            code: "PNG"
          },
          {
            value: "+595 (PY)",
            key: "+595",
            code: "PRY"
          },
          {
            value: "+51 (PE)",
            key: "+51",
            code: "PER"
          },
          {
            value: "+872 (PN)",
            key: "+872",
            code: "PCN"
          },
          {
            value: "+689 (PF)",
            key: "+689",
            code: "PYF"
          },
          {
            value: "+48 (PL)",
            key: "+48",
            code: "POL"
          },
          {
            value: "+351 (PT)",
            key: "+351",
            code: "PRT"
          },
          {
            value: "+1 (PR)",
            key: "+1",
            code: "PRI"
          },
          {
            value: "+974 (QA)",
            key: "+974",
            code: "QAT"
          },
          {
            value: "+44 (GB)",
            key: "+44",
            code: "GBR"
          },
          {
            value: "+236 (CF)",
            key: "+236",
            code: "CAF"
          },
          {
            value: "+420 (CZ)",
            key: "+420",
            code: "CZE"
          },
          {
            value: "+82 (KR)",
            key: "+82",
            code: "KOR"
          },
          {
            value: "+242 (CG)",
            key: "+242",
            code: "COG"
          },
          {
            value: "+243 (CD)",
            key: "+243",
            code: "COD"
          },
          {
            value: "+850 (KP)",
            key: "+850",
            code: "PRK"
          },
          {
            value: "+856 (LA)",
            key: "+856",
            code: "LAO"
          },
          {
            value: "+1809 (DO)",
            key: "+1809",
            code: "DOM"
          },
          {
            value: "+262 (RE)",
            key: "+262",
            code: "REU"
          },
          {
            value: "+250 (RW)",
            key: "+250",
            code: "RWA"
          },
          {
            value: "+40 (RO)",
            key: "+40",
            code: "ROU"
          },
          {
            value: "+7 (RU)",
            key: "+7",
            code: "RUS"
          },
          {
            value: "+212 (EH)",
            key: "+212",
            code: "ESH"
          },
          {
            value: "+685 (WS)",
            key: "+685",
            code: "WSM"
          },
          {
            value: "+684 (AS)",
            key: "+684",
            code: "ASM"
          },
          {
            value: "+378 (SM)",
            key: "+378",
            code: "SMR"
          },
          {
            value: "+508 (PM)",
            key: "+508",
            code: "SPM"
          },
          {
            value: "+1784 (VC)",
            key: "+1784",
            code: "VCT"
          },
          {
            value: "+290 (SH)",
            key: "+290",
            code: "SHN"
          },
          {
            value: "+1869 (KN)",
            key: "+1869",
            code: "KNA"
          },
          {
            value: "+1758 (LC)",
            key: "+1758",
            code: "LCA"
          },
          {
            value: "+239 (ST)",
            key: "+239",
            code: "STP"
          },
          {
            value: "+221 (SN)",
            key: "+221",
            code: "SEN"
          },
          {
            value: "+248 (SC)",
            key: "+248",
            code: "SYC"
          },
          {
            value: "+232 (SL)",
            key: "+232",
            code: "SLE"
          },
          {
            value: "+65 (SG)",
            key: "+65",
            code: "SGP"
          },
          {
            value: "+963 (SY)",
            key: "+963",
            code: "SYR"
          },
          {
            value: "+252 (SO)",
            key: "+252",
            code: "SOM"
          },
          {
            value: "+94 (LK)",
            key: "+94",
            code: "LKA"
          },
          {
            value: "+268 (SZ)",
            key: "+268",
            code: "SWZ"
          },
          {
            value: "+27 (ZA)",
            key: "+27",
            code: "ZAF"
          },
          {
            value: "+249 (SD)",
            key: "+249",
            code: "SDN"
          },
          {
            value: "+46 (SE)",
            key: "+46",
            code: "SWE"
          },
          {
            value: "+41 (CH)",
            key: "+41",
            code: "CHE"
          },
          {
            value: "+597 (SR)",
            key: "+597",
            code: "SUR"
          },
          {
            value: "+66 (TH)",
            key: "+66",
            code: "THA"
          },
          {
            value: "+886 (TW)",
            key: "+886",
            code: "TWN"
          },
          {
            value: "+992 (TJ)",
            key: "+992",
            code: "TJK"
          },
          {
            value: "+255 (TZ)",
            key: "+255",
            code: "TZA"
          },
          {
            value: "+246 (IO)",
            key: "+246",
            code: "IOT"
          },
          {
            value: "+670 (TL)",
            key: "+670",
            code: "TLS"
          },
          {
            value: "+228 (TG)",
            key: "+228",
            code: "TGO"
          },
          {
            value: "+690 (TK)",
            key: "+690",
            code: "TKL"
          },
          {
            value: "+676 (TO)",
            key: "+676",
            code: "TON"
          },
          {
            value: "+1868 (TT)",
            key: "+1868",
            code: "TTO"
          },
          {
            value: "+216 (TN)",
            key: "+216",
            code: "TUN"
          },
          {
            value: "+993 (TM)",
            key: "+993",
            code: "TKM"
          },
          {
            value: "+90 (TR)",
            key: "+90",
            code: "TUR"
          },
          {
            value: "+688 (TV)",
            key: "+688",
            code: "TUV"
          },
          {
            value: "+380 (UA)",
            key: "+380",
            code: "UKR"
          },
          {
            value: "+256 (UG)",
            key: "+256",
            code: "UGA"
          },
          {
            value: "+598 (UY)",
            key: "+598",
            code: "URY"
          },
          {
            value: "+998 (UZ)",
            key: "+998",
            code: "UZB"
          },
          {
            value: "+678 (VU)",
            key: "+678",
            code: "VUT"
          },
          {
            value: "+379 (VA)",
            key: "+379",
            code: "VAT"
          },
          {
            value: "+58 (VE)",
            key: "+58",
            code: "VEN"
          },
          {
            value: "+84 (VN)",
            key: "+84",
            code: "VNM"
          },
          {
            value: "+681 (WF)",
            key: "+681",
            code: "WLF"
          },
          {
            value: "+967 (YE)",
            key: "+967",
            code: "YEM"
          },
          {
            value: "+260 (ZM)",
            key: "+260",
            code: "ZMB"
          },
          {
            value: "+263 (ZW)",
            key: "+263",
            code: "ZWE"
          }
        ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][phone]",
        type: "phone",
        label: "Teléfono",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][prefix_emergency]",
        type: "select",
        label: "Prefijo",
        required: true,
        options: [
          {
            value: "+355 (AL)",
            key: "+355",
            code: "ALB"
          },
          {
            value: "+49 (DE)",
            key: "+49",
            code: "DEU"
          },
          {
            value: "+376 (AD)",
            key: "+376",
            code: "AND"
          },
          {
            value: "+244 (AO)",
            key: "+244",
            code: "AGO"
          },
          {
            value: "+1264 (AI)",
            key: "+1264",
            code: "AIA"
          },
          {
            value: "+672 (AQ)",
            key: "+672",
            code: "ATA"
          },
          {
            value: "+1268 (AG)",
            key: "+1268",
            code: "ATG"
          },
          {
            value: "+599 (AN)",
            key: "+599",
            code: "ANT"
          },
          {
            value: "+966 (SA)",
            key: "+966",
            code: "SAU"
          },
          {
            value: "+213 (DZ)",
            key: "+213",
            code: "DZA"
          },
          {
            value: "+54 (AR)",
            key: "+54",
            code: "ARG"
          },
          {
            value: "+374 (AM)",
            key: "+374",
            code: "ARM"
          },
          {
            value: "+297 (AW)",
            key: "+297",
            code: "ABW"
          },
          {
            value: "+61 (AU)",
            key: "+61",
            code: "AUS"
          },
          {
            value: "+43 (AT)",
            key: "+43",
            code: "AUT"
          },
          {
            value: "+994 (AZ)",
            key: "+994",
            code: "AZE"
          },
          {
            value: "+1242 (BS)",
            key: "+1242",
            code: "BHS"
          },
          {
            value: "+973 (BH)",
            key: "+973",
            code: "BHR"
          },
          {
            value: "+880 (BD)",
            key: "+880",
            code: "BGD"
          },
          {
            value: "+1246 (BB)",
            key: "+1246",
            code: "BRB"
          },
          {
            value: "+32 (BE)",
            key: "+32",
            code: "BEL"
          },
          {
            value: "+501 (BZ)",
            key: "+501",
            code: "BLZ"
          },
          {
            value: "+229 (BJ)",
            key: "+229",
            code: "BEN"
          },
          {
            value: "+1441 (BM)",
            key: "+1441",
            code: "BMU"
          },
          {
            value: "+975 (BT)",
            key: "+975",
            code: "BTN"
          },
          {
            value: "+375 (BY)",
            key: "+375",
            code: "BLR"
          },
          {
            value: "+591 (BO)",
            key: "+591",
            code: "BOL"
          },
          {
            value: "+387 (BA)",
            key: "+387",
            code: "BIH"
          },
          {
            value: "+267 (BW)",
            key: "+267",
            code: "BWA"
          },
          {
            value: "+55 (BR)",
            key: "+55",
            code: "BRA"
          },
          {
            value: "+673 (BN)",
            key: "+673",
            code: "BRN"
          },
          {
            value: "+359 (BG)",
            key: "+359",
            code: "BGR"
          },
          {
            value: "+226 (BF)",
            key: "+226",
            code: "BFA"
          },
          {
            value: "+257 (BI)",
            key: "+257",
            code: "BDI"
          },
          {
            value: "+238 (CV)",
            key: "+238",
            code: "CPV"
          },
          {
            value: "+855 (KH)",
            key: "+855",
            code: "KHM"
          },
          {
            value: "+237 (CM)",
            key: "+237",
            code: "CMR"
          },
          {
            value: "+1 (CA)",
            key: "+1",
            code: "CAN"
          },
          {
            value: "+235 (TD)",
            key: "+235",
            code: "TCD"
          },
          {
            value: "+56 (CL)",
            key: "+56",
            code: "CHL"
          },
          {
            value: "+86 (CN)",
            key: "+86",
            code: "CHN"
          },
          {
            value: "+357 (CY)",
            key: "+357",
            code: "CYP"
          },
          {
            value: "+57 (CO)",
            key: "+57",
            code: "COL"
          },
          {
            value: "+269 (KM)",
            key: "+269",
            code: "COM"
          },
          {
            value: "+225 (CI)",
            key: "+225",
            code: "CIV"
          },
          {
            value: "+506 (CR)",
            key: "+506",
            code: "CRI"
          },
          {
            value: "+385 (HR)",
            key: "+385",
            code: "HRV"
          },
          {
            value: "+53 (CU)",
            key: "+53",
            code: "CUB"
          },
          {
            value: "+45 (DK)",
            key: "+45",
            code: "DNK"
          },
          {
            value: "+253 (DJ)",
            key: "+253",
            code: "DJI"
          },
          {
            value: "+1767 (DM)",
            key: "+1767",
            code: "DMA"
          },
          {
            value: "+593 (EC)",
            key: "+593",
            code: "ECU"
          },
          {
            value: "+20 (EG)",
            key: "+20",
            code: "EGY"
          },
          {
            value: "+503 (SV)",
            key: "+503",
            code: "SLV"
          },
          {
            value: "+971 (AE)",
            key: "+971",
            code: "ARE"
          },
          {
            value: "+291 (ER)",
            key: "+291",
            code: "ERI"
          },
          {
            value: "+421 (SK)",
            key: "+421",
            code: "SVK"
          },
          {
            value: "+386 (SI)",
            key: "+386",
            code: "SVN"
          },
          {
            value: "+34 (ES)",
            key: "+34",
            code: "ESP"
          },
          {
            value: "+691 (FM)",
            key: "+691",
            code: "FSM"
          },
          {
            value: "+1 (US)",
            key: "+1",
            code: "USA"
          },
          {
            value: "+372 (EE)",
            key: "+372",
            code: "EST"
          },
          {
            value: "+79 (SJ)",
            key: "+79",
            code: "SJM"
          },
          {
            value: "+251 (ET)",
            key: "+251",
            code: "ETH"
          },
          {
            value: "+679 (FJ)",
            key: "+679",
            code: "FJI"
          },
          {
            value: "+63 (PH)",
            key: "+63",
            code: "PHL"
          },
          {
            value: "+358 (FI)",
            key: "+358",
            code: "FIN"
          },
          {
            value: "+33 (FR)",
            key: "+33",
            code: "FRA"
          },
          {
            value: "+241 (GA)",
            key: "+241",
            code: "GAB"
          },
          {
            value: "+220 (GM)",
            key: "+220",
            code: "GMB"
          },
          {
            value: "+995 (GE)",
            key: "+995",
            code: "GEO"
          },
          {
            value: "+233 (GH)",
            key: "+233",
            code: "GHA"
          },
          {
            value: "+350 (GI)",
            key: "+350",
            code: "GIB"
          },
          {
            value: "+1473 (GD)",
            key: "+1473",
            code: "GRD"
          },
          {
            value: "+30 (GR)",
            key: "+30",
            code: "GRC"
          },
          {
            value: "+299 (GL)",
            key: "+299",
            code: "GRL"
          },
          {
            value: "+590 (GP)",
            key: "+590",
            code: "GLP"
          },
          {
            value: "+1671 (GU)",
            key: "+1671",
            code: "GUM"
          },
          {
            value: "+502 (GT)",
            key: "+502",
            code: "GTM"
          },
          {
            value: "+44 (GG)",
            key: "+44",
            code: "GGY"
          },
          {
            value: "+224 (GN)",
            key: "+224",
            code: "GIN"
          },
          {
            value: "+240 (GQ)",
            key: "+240",
            code: "GNQ"
          },
          {
            value: "+594 (GF)",
            key: "+594",
            code: "GUF"
          },
          {
            value: "+245 (GW)",
            key: "+245",
            code: "GNB"
          },
          {
            value: "+592 (GY)",
            key: "+592",
            code: "GUY"
          },
          {
            value: "+509 (HT)",
            key: "+509",
            code: "HTI"
          },
          {
            value: "+504 (HN)",
            key: "+504",
            code: "HND"
          },
          {
            value: "+852 (HK)",
            key: "+852",
            code: "HKG"
          },
          {
            value: "+36 (HU)",
            key: "+36",
            code: "HUN"
          },
          {
            value: "+91 (IN)",
            key: "+91",
            code: "IND"
          },
          {
            value: "+62 (ID)",
            key: "+62",
            code: "IDN"
          },
          {
            value: "+964 (IQ)",
            key: "+964",
            code: "IRQ"
          },
          {
            value: "+98 (IR)",
            key: "+98",
            code: "IRN"
          },
          {
            value: "+353 (IE)",
            key: "+353",
            code: "IRL"
          },
          {
            value: "+61 (CX)",
            key: "+61",
            code: "CXR"
          },
          {
            value: "+354 (IS)",
            key: "+354",
            code: "ISL"
          },
          {
            value: "+1345 (KY)",
            key: "+1345",
            code: "CYM"
          },
          {
            value: "+61 (CC)",
            key: "+61",
            code: "CCK"
          },
          {
            value: "+682 (CK)",
            key: "+682",
            code: "COK"
          },
          {
            value: "+1670 (MP)",
            key: "+1670",
            code: "MNP"
          },
          {
            value: "+298 (FO)",
            key: "+298",
            code: "FRO"
          },
          {
            value: "+500 (FK)",
            key: "+500",
            code: "FLK"
          },
          {
            value: "+692 (MH)",
            key: "+692",
            code: "MHL"
          },
          {
            value: "+672 (NF)",
            key: "+672",
            code: "NFK"
          },
          {
            value: "+677 (SB)",
            key: "+677",
            code: "SLB"
          },
          {
            value: "+1649 (TC)",
            key: "+1649",
            code: "TCA"
          },
          {
            value: "+808 (UM)",
            key: "+808",
            code: "UMI"
          },
          {
            value: "+1284 (VG)",
            key: "+1284",
            code: "VGB"
          },
          {
            value: "+1340 (VI)",
            key: "+1340",
            code: "VIR"
          },
          {
            value: "+44 (IM)",
            key: "+44",
            code: "IMN"
          },
          {
            value: "+972 (IL)",
            key: "+972",
            code: "ISR"
          },
          {
            value: "+39 (IT)",
            key: "+39",
            code: "ITA"
          },
          {
            value: "+1876 (JM)",
            key: "+1876",
            code: "JAM"
          },
          {
            value: "+81 (JP)",
            key: "+81",
            code: "JPN"
          },
          {
            value: "+44 (JE)",
            key: "+44",
            code: "JEY"
          },
          {
            value: "+962 (JO)",
            key: "+962",
            code: "JOR"
          },
          {
            value: "+7 (KZ)",
            key: "+7",
            code: "KAZ"
          },
          {
            value: "+254 (KE)",
            key: "+254",
            code: "KEN"
          },
          {
            value: "+996 (KG)",
            key: "+996",
            code: "KGZ"
          },
          {
            value: "+686 (KI)",
            key: "+686",
            code: "KIR"
          },
          {
            value: "+965 (KW)",
            key: "+965",
            code: "KWT"
          },
          {
            value: "+266 (LS)",
            key: "+266",
            code: "LSO"
          },
          {
            value: "+371 (LV)",
            key: "+371",
            code: "LVA"
          },
          {
            value: "+961 (LB)",
            key: "+961",
            code: "LBN"
          },
          {
            value: "+231 (LR)",
            key: "+231",
            code: "LBR"
          },
          {
            value: "+218 (LY)",
            key: "+218",
            code: "LBY"
          },
          {
            value: "+41 (LI)",
            key: "+41",
            code: "LIE"
          },
          {
            value: "+370 (LT)",
            key: "+370",
            code: "LTU"
          },
          {
            value: "+352 (LU)",
            key: "+352",
            code: "LUX"
          },
          {
            value: "+853 (MO)",
            key: "+853",
            code: "MAC"
          },
          {
            value: "+389 (MK)",
            key: "+389",
            code: "MKD"
          },
          {
            value: "+261 (MG)",
            key: "+261",
            code: "MDG"
          },
          {
            value: "+60 (MY)",
            key: "+60",
            code: "MYS"
          },
          {
            value: "+265 (MW)",
            key: "+265",
            code: "MWI"
          },
          {
            value: "+960 (MV)",
            key: "+960",
            code: "MDV"
          },
          {
            value: "+223 (ML)",
            key: "+223",
            code: "MLI"
          },
          {
            value: "+356 (MT)",
            key: "+356",
            code: "MLT"
          },
          {
            value: "+212 (MA)",
            key: "+212",
            code: "MAR"
          },
          {
            value: "+596 (MQ)",
            key: "+596",
            code: "MTQ"
          },
          {
            value: "+230 (MU)",
            key: "+230",
            code: "MUS"
          },
          {
            value: "+222 (MR)",
            key: "+222",
            code: "MRT"
          },
          {
            value: "+269 (YT)",
            key: "+269",
            code: "MYT"
          },
          {
            value: "+52 (MX)",
            key: "+52",
            code: "MEX"
          },
          {
            value: "+373 (MD)",
            key: "+373",
            code: "MDA"
          },
          {
            value: "+377 (MC)",
            key: "+377",
            code: "MCO"
          },
          {
            value: "+976 (MN)",
            key: "+976",
            code: "MNG"
          },
          {
            value: "+1664 (MS)",
            key: "+1664",
            code: "MSR"
          },
          {
            value: "+258 (MZ)",
            key: "+258",
            code: "MOZ"
          },
          {
            value: "+95 (MM)",
            key: "+95",
            code: "MMR"
          },
          {
            value: "+264 (NA)",
            key: "+264",
            code: "NAM"
          },
          {
            value: "+674 (NR)",
            key: "+674",
            code: "NRU"
          },
          {
            value: "+977 (NP)",
            key: "+977",
            code: "NPL"
          },
          {
            value: "+505 (NI)",
            key: "+505",
            code: "NIC"
          },
          {
            value: "+227 (NE)",
            key: "+227",
            code: "NER"
          },
          {
            value: "+234 (NG)",
            key: "+234",
            code: "NGA"
          },
          {
            value: "+683 (NU)",
            key: "+683",
            code: "NIU"
          },
          {
            value: "+47 (NO)",
            key: "+47",
            code: "NOR"
          },
          {
            value: "+687 (NC)",
            key: "+687",
            code: "NCL"
          },
          {
            value: "+64 (NZ)",
            key: "+64",
            code: "NZL"
          },
          {
            value: "+968 (OM)",
            key: "+968",
            code: "OMN"
          },
          {
            value: "+31 (NL)",
            key: "+31",
            code: "NLD"
          },
          {
            value: "+92 (PK)",
            key: "+92",
            code: "PAK"
          },
          {
            value: "+680 (PW)",
            key: "+680",
            code: "PLW"
          },
          {
            value: "+970 (PS)",
            key: "+970",
            code: "PSE"
          },
          {
            value: "+507 (PA)",
            key: "+507",
            code: "PAN"
          },
          {
            value: "+675 (PG)",
            key: "+675",
            code: "PNG"
          },
          {
            value: "+595 (PY)",
            key: "+595",
            code: "PRY"
          },
          {
            value: "+51 (PE)",
            key: "+51",
            code: "PER"
          },
          {
            value: "+872 (PN)",
            key: "+872",
            code: "PCN"
          },
          {
            value: "+689 (PF)",
            key: "+689",
            code: "PYF"
          },
          {
            value: "+48 (PL)",
            key: "+48",
            code: "POL"
          },
          {
            value: "+351 (PT)",
            key: "+351",
            code: "PRT"
          },
          {
            value: "+1 (PR)",
            key: "+1",
            code: "PRI"
          },
          {
            value: "+974 (QA)",
            key: "+974",
            code: "QAT"
          },
          {
            value: "+44 (GB)",
            key: "+44",
            code: "GBR"
          },
          {
            value: "+236 (CF)",
            key: "+236",
            code: "CAF"
          },
          {
            value: "+420 (CZ)",
            key: "+420",
            code: "CZE"
          },
          {
            value: "+82 (KR)",
            key: "+82",
            code: "KOR"
          },
          {
            value: "+242 (CG)",
            key: "+242",
            code: "COG"
          },
          {
            value: "+243 (CD)",
            key: "+243",
            code: "COD"
          },
          {
            value: "+850 (KP)",
            key: "+850",
            code: "PRK"
          },
          {
            value: "+856 (LA)",
            key: "+856",
            code: "LAO"
          },
          {
            value: "+1809 (DO)",
            key: "+1809",
            code: "DOM"
          },
          {
            value: "+262 (RE)",
            key: "+262",
            code: "REU"
          },
          {
            value: "+250 (RW)",
            key: "+250",
            code: "RWA"
          },
          {
            value: "+40 (RO)",
            key: "+40",
            code: "ROU"
          },
          {
            value: "+7 (RU)",
            key: "+7",
            code: "RUS"
          },
          {
            value: "+212 (EH)",
            key: "+212",
            code: "ESH"
          },
          {
            value: "+685 (WS)",
            key: "+685",
            code: "WSM"
          },
          {
            value: "+684 (AS)",
            key: "+684",
            code: "ASM"
          },
          {
            value: "+378 (SM)",
            key: "+378",
            code: "SMR"
          },
          {
            value: "+508 (PM)",
            key: "+508",
            code: "SPM"
          },
          {
            value: "+1784 (VC)",
            key: "+1784",
            code: "VCT"
          },
          {
            value: "+290 (SH)",
            key: "+290",
            code: "SHN"
          },
          {
            value: "+1869 (KN)",
            key: "+1869",
            code: "KNA"
          },
          {
            value: "+1758 (LC)",
            key: "+1758",
            code: "LCA"
          },
          {
            value: "+239 (ST)",
            key: "+239",
            code: "STP"
          },
          {
            value: "+221 (SN)",
            key: "+221",
            code: "SEN"
          },
          {
            value: "+248 (SC)",
            key: "+248",
            code: "SYC"
          },
          {
            value: "+232 (SL)",
            key: "+232",
            code: "SLE"
          },
          {
            value: "+65 (SG)",
            key: "+65",
            code: "SGP"
          },
          {
            value: "+963 (SY)",
            key: "+963",
            code: "SYR"
          },
          {
            value: "+252 (SO)",
            key: "+252",
            code: "SOM"
          },
          {
            value: "+94 (LK)",
            key: "+94",
            code: "LKA"
          },
          {
            value: "+268 (SZ)",
            key: "+268",
            code: "SWZ"
          },
          {
            value: "+27 (ZA)",
            key: "+27",
            code: "ZAF"
          },
          {
            value: "+249 (SD)",
            key: "+249",
            code: "SDN"
          },
          {
            value: "+46 (SE)",
            key: "+46",
            code: "SWE"
          },
          {
            value: "+41 (CH)",
            key: "+41",
            code: "CHE"
          },
          {
            value: "+597 (SR)",
            key: "+597",
            code: "SUR"
          },
          {
            value: "+66 (TH)",
            key: "+66",
            code: "THA"
          },
          {
            value: "+886 (TW)",
            key: "+886",
            code: "TWN"
          },
          {
            value: "+992 (TJ)",
            key: "+992",
            code: "TJK"
          },
          {
            value: "+255 (TZ)",
            key: "+255",
            code: "TZA"
          },
          {
            value: "+246 (IO)",
            key: "+246",
            code: "IOT"
          },
          {
            value: "+670 (TL)",
            key: "+670",
            code: "TLS"
          },
          {
            value: "+228 (TG)",
            key: "+228",
            code: "TGO"
          },
          {
            value: "+690 (TK)",
            key: "+690",
            code: "TKL"
          },
          {
            value: "+676 (TO)",
            key: "+676",
            code: "TON"
          },
          {
            value: "+1868 (TT)",
            key: "+1868",
            code: "TTO"
          },
          {
            value: "+216 (TN)",
            key: "+216",
            code: "TUN"
          },
          {
            value: "+993 (TM)",
            key: "+993",
            code: "TKM"
          },
          {
            value: "+90 (TR)",
            key: "+90",
            code: "TUR"
          },
          {
            value: "+688 (TV)",
            key: "+688",
            code: "TUV"
          },
          {
            value: "+380 (UA)",
            key: "+380",
            code: "UKR"
          },
          {
            value: "+256 (UG)",
            key: "+256",
            code: "UGA"
          },
          {
            value: "+598 (UY)",
            key: "+598",
            code: "URY"
          },
          {
            value: "+998 (UZ)",
            key: "+998",
            code: "UZB"
          },
          {
            value: "+678 (VU)",
            key: "+678",
            code: "VUT"
          },
          {
            value: "+379 (VA)",
            key: "+379",
            code: "VAT"
          },
          {
            value: "+58 (VE)",
            key: "+58",
            code: "VEN"
          },
          {
            value: "+84 (VN)",
            key: "+84",
            code: "VNM"
          },
          {
            value: "+681 (WF)",
            key: "+681",
            code: "WLF"
          },
          {
            value: "+967 (YE)",
            key: "+967",
            code: "YEM"
          },
          {
            value: "+260 (ZM)",
            key: "+260",
            code: "ZMB"
          },
          {
            value: "+263 (ZW)",
            key: "+263",
            code: "ZWE"
          }
        ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][phone_emergency]",
        type: "phone",
        label: "Teléfono en caso de emergencia",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][code]",
        type: "text",
        label: "Código postal",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][address]",
        type: "text",
        label: "Dirección",
        required: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][nacionalidad]",
        type: "select",
        label: "Nacionalidad",
        required: true,
        ws: "http://panel.local.sportmaniacs.com/api/countries?lang=esp",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][country_id]",
        type: "select",
        label: "País de residencia",
        required: true,
        ws: "http://panel.local.sportmaniacs.com/api/countries?lang=esp",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][province_id]",
        type: "select",
        label: "Provincia de residencia",
        required: true,
        dependent: {
          field: "data[0][Inscription][country_id]",
          condition: "ne",
          value: "undefined",
          value_type: "undefined"
        },
        ws: "http://panel.local.sportmaniacs.com/api/provinces?country=:idCountry&lang=esp",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][city_id]",
        type: "select",
        label: "Ciudad de residencia",
        required: true,
        dependent: {
          field: "data[0][Inscription][province_id]",
          condition: "ne",
          value: "undefined",
          value_type: "undefined"
        },
        ws: "http://panel.local.sportmaniacs.com/api/cities?province=:idProvince&lang=esp",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][licencia]",
        type: "text",
        label: "Número de licencia",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][local]",
        type: "checkbox",
        label: "Participante local",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][condiciones]",
        type: "hidden",
        label: "",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][discount]",
        type: "text",
        label: "Código descuento",
        required: false,
        ws: "http://panel.local.sportmaniacs.com/api/discounts/:idDiscount?race=164&lang=esp",
        ws_deferred: true,
        response_type: "discount",
        group: {
          key: 0,
          value: "Inscripción 1"
        },
        isPrice: true
      },
      {
        name: "data[0][Inscription][gunwave_id]",
        type: "select",
        label: "Elige la wave en la que quieres salir",
        required: true,
        options: [
          {
            key: "14",
            value: "Salida 1 09:00 (76 inscripciones disponibles)"
          },
          {
            key: "15",
            value: "Salida 2 09:05 (100 inscripciones disponibles)"
          }
        ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][no_uso_comercial]",
        type: "checkbox",
        label: "No autorizo la cesión de mis datos con fines comerciales",
        required: false,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscription][tipopago]",
        type: "hidden",
        label: "",
        required: true,
        value: 0,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][0][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][0][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "348",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][0][value]",
        type: "checkbox",
        label: "¿Quieres esta camiseta?",
        required: false,
        more_info: "",
        link: "",
        maxlength: "255",
        price: "5.00",
        isPrice: true,
        width: 100,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][1][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][1][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "349",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][1][value]",
        type: "select",
        label: "Seleccione una talla",
        required: true,
        more_info: "",
        link: "",
        maxlength: "255",
        empty_option: "Elige una opción",
        options: [
          {
            key: "S",
            price: 0,
            value: "S"
          },
          {
            key: "L",
            price: 0,
            value: "L"
          },
          {
            key: "M",
            price: 0,
            value: "M"
          }
        ],
        image: [ ],
        dependent: {
          field: "data[0][Inscriptionattribute][0][value]",
          condition: "eq",
          value: true,
          value_type: "bool"
        },
        width: 100,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][2][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][2][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "350",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][2][value]",
        type: "text",
        label: "Nombre en el dorsal",
        required: true,
        more_info: "",
        link: "",
        maxlength: "16",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][3][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][3][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "351",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][3][value]",
        type: "select",
        label: "Tiempo en el evento",
        required: false,
        more_info: "",
        link: "",
        maxlength: "255",
        empty_option: "Elige una opción",
        options: [
          {
            key: "<60",
            price: 0,
            value: "<60"
          },
          {
            key: ">60",
            price: 0,
            value: ">60"
          }
        ],
        image: [ ],
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][4][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][4][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "352",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][4][value]",
        type: "number",
        label: "¿Que edad tienes?",
        required: false,
        more_info: "",
        link: "",
        maxlength: "255",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][5][event_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "371",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][5][eventattribute_id]",
        type: "hidden",
        label: null,
        required: true,
        value: "353",
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      },
      {
        name: "data[0][Inscriptionattribute][5][value]",
        type: "product",
        label: "Camiseta conmemorativa",
        required: false,
        more_info: "",
        link: "",
        maxlength: "255",
        empty_option: "Elige una opción",
        options: [
          {
            key: "S",
            price: 10,
            value: "S (10€)"
          },
          {
            key: "M",
            price: 10,
            value: "M (10€)"
          },
          {
            key: "L",
            price: 10,
            value: "L (10€)"
          }
        ],
        image: {
          xs: "http://panel.local.sportmaniacs.com/resize/150x0/r/uploads/camisetas.jpg",
          sm: "http://panel.local.sportmaniacs.com/resize/250x0/r/uploads/camisetas.jpg",
          md: "http://panel.local.sportmaniacs.com/resize/500x0/r/uploads/camisetas.jpg",
          lg: "http://panel.local.sportmaniacs.com/resize/750x0/r/uploads/camisetas.jpg",
          xl: "http://panel.local.sportmaniacs.com/resize/1000x0/r/uploads/camisetas.jpg"
        },
        isPrice: true,
        group: {
          key: 0,
          value: "Inscripción 1"
        }
      }
    ],
    groups: [ ],
    subgroups: {
      Extra: {
        fields: [
          "value",
          "no_uso_comercial"
        ]
      },
      Personaliza tu experiencia: {
        fields: [
          "gunwave_id"
        ]
      },
      Un poco de ti: {
        fields: [
          "club",
          "newClub",
          "club2",
          "licencia",
          "local",
          "condiciones"
        ]
      },
      Datos de contacto: {
        fields: [
          "country_id",
          "province_id",
          "city_id",
          "address",
          "code",
          "phone",
          "prefix_phone",
          "phone",
          "prefix_emergency",
          "phone_emergency"
        ]
      },
      Autorización: {
        fields: [
          "auth",
          "auth_surname",
          "tipodni_auth",
          "dni_auth"
        ]
      },
      Datos personales: {
        fields: [
          "name",
          "surname",
          "surname2",
          "mail",
          "tipodni",
          "dni",
          "nacionalidad",
          "dateofbirthday",
          "gender",
          "verify_email"
        ]
      },
      Tu inscripción: {
        fields: [
          "selprice",
          "discount"
        ]
      }
    }
  },
  status: "ok"
}