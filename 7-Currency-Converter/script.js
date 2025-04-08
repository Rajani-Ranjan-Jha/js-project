const selectFrom = document.getElementById('from')
const selectTo = document.getElementById('to')
const inputFrom = document.getElementById('num-from')
const inputTo = document.getElementById('num-to')
const Output = document.getElementById('output')
// import dotenv from 'dotenv';
// dotenv.config();
// const currency_api_key = process.env.currency_api_key;
const currency_api_key = "cur_live_kDmtvp8mMKBDTMqZKTPlL5BFoUbLvyUCIAv4okJ9";
const Currency = {
    AED: 'United Arab Emirates Dirham',
    AFN: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    AMD: 'Armenian Dram',
    ANG: 'Netherlands Antillean Guilder',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AUD: 'Australian Dollar',
    AWG: 'Aruban Florin',
    AZN: 'Azerbaijani Manat',
    BAM: 'Bosnia-Herzegovina Convertible Mark',
    BBD: 'Barbadian Dollar',
    BDT: 'Bangladeshi Taka',
    BGN: 'Bulgarian Lev',
    BHD: 'Bahraini Dinar',
    BIF: 'Burundian Franc',
    BMD: 'Bermudian Dollar',
    BND: 'Brunei Dollar',
    BOB: 'Bolivian Boliviano',
    BRL: 'Brazilian Real',
    BSD: 'Bahamian Dollar',
    BTN: 'Bhutanese Chhertum',
    BWP: 'Botswana Pula',
    BYN: 'Belarusian Ruble',
    BZD: 'Belize Dollar',
    CAD: 'Canadian Dollar',
    CDF: 'Congolese Franc',
    CHF: 'Swiss Franc',
    CLP: 'Chilean Peso',
    CNY: 'Chinese Renminbi',
    COP: 'Colombian Peso',
    CRC: 'Costa Rican Colón',
    CUC: 'Cuban Convertible Peso',
    CUP: 'Cuban Peso',
    CVE: 'Cape Verdean Escudo',
    CZK: 'Czech Koruna',
    DJF: 'Djiboutian Franc',
    DKK: 'Danish Krone',
    DOP: 'Dominican Peso',
    DZD: 'Algerian Dinar',
    EGP: 'Egyptian Pound',
    ERN: 'Eritrean Nakfa',
    ETB: 'Ethiopian Birr',
    EUR: 'Euro',
    FJD: 'Fijian Dollar',
    FKP: 'Falkland Islands Pound',
    GBP: 'British Pound',
    GEL: 'Georgian Lari',
    GHS: 'Ghanaian Cedi',
    GIP: 'Gibraltar Pound',
    GMD: 'Gambian Dalasi',
    GNF: 'Guinean Franc',
    GTQ: 'Guatemalan Quetzal',
    GYD: 'Guyanese Dollar',
    HKD: 'Hong Kong Dollar',
    HNL: 'Honduran Lempira',
    HRK: 'Croatian Kuna',
    HTG: 'Haitian Gourde',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli Shekel',
    INR: 'Indian Rupee',
    IQD: 'Iraqi Dinar',
    IRR: 'Iranian Rial',
    ISK: 'Icelandic Króna',
    JMD: 'Jamaican Dollar',
    JOD: 'Jordanian Dinar',
    JPY: 'Japanese Yen',
    KES: 'Kenyan Shilling',
    KGS: 'Kyrgyzstani Som',
    KHR: 'Cambodian Riel',
    KMF: 'Comorian Franc',
    KPW: 'North Korean Won',
    KRW: 'South Korean Won',
    KWD: 'Kuwaiti Dinar',
    KYD: 'Cayman Islands Dollar',
    KZT: 'Kazakhstani Tenge',
    LAK: 'Lao Kip',
    LBP: 'Lebanese Pound',
    LKR: 'Sri Lankan Rupee',
    LRD: 'Liberian Dollar',
    LSL: 'Lesotho Loti',
    LYD: 'Libyan Dinar',
    MAD: 'Moroccan Dirham',
    MDL: 'Moldovan Leu',
    MGA: 'Malagasy Ariary',
    MKD: 'Macedonian Denar',
    MMK: 'Myanmar Kyat',
    MNT: 'Mongolian Tögrög',
    MOP: 'Macanese Pataca',
    MRO: 'Mauritanian Ouguiya',
    MUR: 'Mauritian Rupee',
    MVR: 'Maldivian Rufiyaa',
    MWK: 'Malawian Kwacha',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    MZN: 'Mozambican Metical',
    NAD: 'Namibian Dollar',
    NGN: 'Nigerian Naira',
    NIO: 'Nicaraguan Córdoba',
    NOK: 'Norwegian Krone',
    NPR: 'Nepalese Rupee',
    NZD: 'New Zealand Dollar',
    OMR: 'Omani Rial',
    PAB: 'Panamanian Balboa',
    PEN: 'Peruvian Sol',
    PGK: 'Papua New Guinean Kina',
    PHP: 'Philippine Peso',
    PKR: 'Pakistani Rupee',
    PLN: 'Polish Złoty',
    PYG: 'Paraguayan Guarani',
    QAR: 'Qatari Riyal',
    RON: 'Romanian Leu',
    RSD: 'Serbian Dinar',
    RUB: 'Russian Ruble',
    RWF: 'Rwandan Franc',
    SAR: 'Saudi Riyal',
    SBD: 'Solomon Islands Dollar',
    SCR: 'Seychellois Rupee',
    SDG: 'Sudanese Pound',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    SHP: 'Saint Helena Pound',
    SLL: 'Sierra Leonean Leone',
    SOS: 'Somali Shilling',
    SRD: 'Surinamese Dollar',
    SSP: 'South Sudanese Pound',
    STD: 'São Tomé and Principe Dobra',
    SVC: 'Salvadoran Colón',
    SYP: 'Syrian Pound',
    SZL: 'Swazi Lilangeni',
    THB: 'Thai Baht',
    TJS: 'Tajikistani Somoni',
    TMT: 'Turkmenistan Manat',
    TND: 'Tunisian Dinar',
    TOP: 'Tongan Paʻanga',
    TRY: 'Turkish Lira',
    TTD: 'Trinidad and Tobago Dollar',
    TWD: 'New Taiwan Dollar',
    TZS: 'Tanzanian Shilling',
    UAH: 'Ukrainian Hryvnia',
    UGX: 'Ugandan Shilling',
    USD: 'United States Dollar',
    USN: 'United States Dollar (next day)',
    USS: 'United States Dollar (same day)',
    UYI: 'Uruguayan Peso (indexed units)',
    UYU: 'Uruguayan Peso',
    UZS: 'Uzbekistan Som',
    VEF: 'Venezuelan Bolivar',
    VND: 'Vietnamese Dong',
    VUV: 'Vanuatu Vatu',
    WST: 'Samoan Tālā',
    XAF: 'Central African CFA Franc',
    XAG: 'Silver',
    XAU: 'Gold',
    XBA: 'European Composite Unit',
    XBB: 'European Monetary Unit',
    XBC: 'European Unit of Account (EUA)',
    XBD: 'European Unit of Account (EUA)',
    XCD: 'East Caribbean Dollar',
    XDR: 'Special Drawing Rights',
    XOF: 'West African CFA Franc',
    XPD: 'Palladium',
    XPF: 'French Pacific Franc',
    XPT: 'Platinum',
    XSU: 'Sudanese Pound (old)',
    XTS: 'Codes specifically reserved for testing purposes',
    XUA: 'ADB Unit of Account',
    XXX: 'Unknown currency',
    YER: 'Yemeni Rial',
    ZAR: 'South African Rand',
    ZMW: 'Zambian Kwacha',
    ZWL: 'Zimbabwean Dollar'
}

function UploadCurrency() {

    for (const key in Currency) {
        const optionFrom = document.createElement('option');
        optionFrom.value = key;
        optionFrom.text = Currency[key];
        selectFrom.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = key;
        optionTo.text = Currency[key];
        selectTo.appendChild(optionTo);
    }
}
UploadCurrency()

async function HandleInput() {
    console.log("Please Wait, Loading...");
    // Get values from input fields
    const from = selectFrom.value;
    const to = selectTo.value;
    const amount = inputFrom.value;

    // Validate input fields
    if (from !== '' && to !== '' && amount !== '') {
        // Get the exchange rate
        const rate = await getRate(from, to);

        // Validate the exchange rate
        if (rate !== null && !isNaN(rate)) {
            // Calculate the result
            const resultValue = parseFloat(amount) * rate;

            // Log the result
            console.log(`${amount}${from} is equal to ${resultValue.toFixed(2)}${to}`);

            // Update the output field
            inputTo.value = resultValue.toFixed(2);
        } else {
            console.error('Failed to get exchange rate');
            // Output.style.display = 'flex'
            // Output.innerText = 'Failed to get exchange rate';
        }
    } else {
        console.error('Please fill in all fields');
        Output.style.display = 'flex'
        Output.innerText = 'Error, Please fill all the required fields';
    }
}


function getRate(from, to) {
    from = from.toLowerCase();
    to = to.toLowerCase();
    // const url = `https://api.currencyapi.com/v3/latest?apikey=${currency_api_key}&currencies=${to}%2C${from}`;
    const url = `https://www.floatrates.com/daily/${from}.json`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data[to]) {
                console.error(`No exchange rate found for ${from} to ${to}`);
                Output.style.display = 'flex'
                Output.innerText = `No exchange rate found for two same values: ${from.toUpperCase()} to ${to.toUpperCase()}. Please try again.`
            }
            const rate = data[to].rate;
            console.log(rate);
            return rate;
        })
        .catch(error => {
            console.error('Error:', error);
            // throw error;
        });
}


