import {Injectable} from '@angular/core';
import {Country, LatLng} from '../../interface/interface';

// declare var google: any;

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    allCountries: Country[] = [
        {
            name: 'Afghanistan',
            iso2: 'af',
            dialCode: '93',
            priority: 0,
            areaCodes: null,
            countryCode: 'AF',
            nativeName: 'Afghanistan (‫افغانستان‬‎)',
            latLng: {
                lat: '33.93911',
                lng: '67.709953'
            },
            latLngString: '33.93911, 67.709953'
        },
        {
            name: 'Albania',
            iso2: 'al',
            dialCode: '355',
            priority: 0,
            areaCodes: null,
            countryCode: 'AL',
            nativeName: 'Albania (Shqipëri)',
            latLng: {
                lat: '41.153332',
                lng: '20.168331'
            },
            latLngString: '41.153332, 20.168331'
        },
        {
            name: 'Algeria',
            iso2: 'dz',
            dialCode: '213',
            priority: 0,
            areaCodes: null,
            countryCode: 'DZ',
            nativeName: 'Algeria (‫الجزائر‬‎)',
            latLng: {
                lat: '28.033886',
                lng: '1.659626'
            },
            latLngString: '28.033886, 1.659626'
        },
        {
            name: 'American Samoa',
            iso2: 'as',
            dialCode: '1',
            priority: 5,
            areaCodes: [
                '684'
            ],
            countryCode: 'AS',
            nativeName: 'American Samoa',
            latLng: {
                lat: '-14.270972',
                lng: '-170.132217'
            },
            latLngString: '-14.270972, 170.132217'
        },
        {
            name: 'Andorra',
            iso2: 'ad',
            dialCode: '376',
            priority: 0,
            areaCodes: null,
            countryCode: 'AD',
            nativeName: 'Andorra',
            latLng: {
                lat: '42.546245',
                lng: '1.601554'
            },
            latLngString: '42.546245, 1.601554'
        },
        {
            name: 'Angola',
            iso2: 'ao',
            dialCode: '244',
            priority: 0,
            areaCodes: null,
            countryCode: 'AO',
            nativeName: 'Angola',
            latLng: {
                lat: '-11.202692',
                lng: '17.873887'
            },
            latLngString: '-11.202692, 17.873887'
        },
        {
            name: 'Anguilla',
            iso2: 'ai',
            dialCode: '1',
            priority: 6,
            areaCodes: [
                '264'
            ],
            countryCode: 'AI',
            nativeName: 'Anguilla',
            latLng: {
                lat: '18.220554',
                lng: '-63.068615'
            },
            latLngString: '18.220554, 63.068615'
        },
        {
            name: 'Antigua and Barbuda',
            iso2: 'ag',
            dialCode: '1',
            priority: 7,
            areaCodes: [
                '268'
            ],
            countryCode: 'AG',
            nativeName: 'Antigua and Barbuda',
            latLng: {
                lat: '17.060816',
                lng: '-61.796428'
            },
            latLngString: '17.060816, 61.796428'
        },
        {
            name: 'Argentina',
            iso2: 'ar',
            dialCode: '54',
            priority: 0,
            areaCodes: null,
            countryCode: 'AR',
            nativeName: 'Argentina',
            latLng: {
                lat: '-38.416097',
                lng: '-63.616672'
            },
            latLngString: '-38.416097, 63.616672'
        },
        {
            name: 'Armenia',
            iso2: 'am',
            dialCode: '374',
            priority: 0,
            areaCodes: null,
            countryCode: 'AM',
            nativeName: 'Armenia (Հայաստան)',
            latLng: {
                lat: '40.069099',
                lng: '45.038189'
            },
            latLngString: '40.069099, 45.038189'
        },
        {
            name: 'Aruba',
            iso2: 'aw',
            dialCode: '297',
            priority: 0,
            areaCodes: null,
            countryCode: 'AW',
            nativeName: 'Aruba',
            latLng: {
                lat: '12.52111',
                lng: '-69.968338'
            },
            latLngString: '12.52111, 69.968338'
        },
        {
            name: 'Australia',
            iso2: 'au',
            dialCode: '61',
            priority: 0,
            areaCodes: null,
            countryCode: 'AU',
            nativeName: 'Australia',
            latLng: {
                lat: '-25.274398',
                lng: '133.775136'
            },
            latLngString: '-25.274398, 133.775136'
        },
        {
            name: 'Austria',
            iso2: 'at',
            dialCode: '43',
            priority: 0,
            areaCodes: null,
            countryCode: 'AT',
            nativeName: 'Austria (Österreich)',
            latLng: {
                lat: '47.516231',
                lng: '14.550072'
            },
            latLngString: '47.516231, 14.550072'
        },
        {
            name: 'Azerbaijan',
            iso2: 'az',
            dialCode: '994',
            priority: 0,
            areaCodes: null,
            countryCode: 'AZ',
            nativeName: 'Azerbaijan (Azərbaycan)',
            latLng: {
                lat: '40.143105',
                lng: '47.576927'
            },
            latLngString: '40.143105, 47.576927'
        },
        {
            name: 'Bahamas',
            iso2: 'bs',
            dialCode: '1',
            priority: 8,
            areaCodes: [
                '242'
            ],
            countryCode: 'BS',
            nativeName: 'Bahamas',
            latLng: {
                lat: '25.03428',
                lng: '-77.39628'
            },
            latLngString: '25.03428, 77.39628'
        },
        {
            name: 'Bahrain',
            iso2: 'bh',
            dialCode: '973',
            priority: 0,
            areaCodes: null,
            countryCode: 'BH',
            nativeName: 'Bahrain (‫البحرين‬‎)',
            latLng: {
                lat: '25.930414',
                lng: '50.637772'
            },
            latLngString: '25.930414, 50.637772'
        },
        {
            name: 'Bangladesh',
            iso2: 'bd',
            dialCode: '880',
            priority: 0,
            areaCodes: null,
            countryCode: 'BD',
            nativeName: 'Bangladesh (বাংলাদেশ)',
            latLng: {
                lat: '23.684994',
                lng: '90.356331'
            },
            latLngString: '23.684994, 90.356331'
        },
        {
            name: 'Barbados',
            iso2: 'bb',
            dialCode: '1',
            priority: 9,
            areaCodes: [
                '246'
            ],
            countryCode: 'BB',
            nativeName: 'Barbados',
            latLng: {
                lat: '13.193887',
                lng: '-59.543198'
            },
            latLngString: '13.193887, 59.543198'
        },
        {
            name: 'Belarus',
            iso2: 'by',
            dialCode: '375',
            priority: 0,
            areaCodes: null,
            countryCode: 'BY',
            nativeName: 'Belarus (Беларусь)',
            latLng: {
                lat: '53.709807',
                lng: '27.953389'
            },
            latLngString: '53.709807, 27.953389'
        },
        {
            name: 'Belgium',
            iso2: 'be',
            dialCode: '32',
            priority: 0,
            areaCodes: null,
            countryCode: 'BE',
            nativeName: 'Belgium (België)',
            latLng: {
                lat: '50.503887',
                lng: '4.469936'
            },
            latLngString: '50.503887, 4.469936'
        },
        {
            name: 'Belize',
            iso2: 'bz',
            dialCode: '501',
            priority: 0,
            areaCodes: null,
            countryCode: 'BZ',
            nativeName: 'Belize',
            latLng: {
                lat: '17.189877',
                lng: '-88.49765'
            },
            latLngString: '17.189877, 88.49765'
        },
        {
            name: 'Benin',
            iso2: 'bj',
            dialCode: '229',
            priority: 0,
            areaCodes: null,
            countryCode: 'BJ',
            nativeName: 'Benin (Bénin)',
            latLng: {
                lat: '9.30769',
                lng: '2.315834'
            },
            latLngString: '9.30769, 2.315834'
        },
        {
            name: 'Bermuda',
            iso2: 'bm',
            dialCode: '1',
            priority: 10,
            areaCodes: [
                '441'
            ],
            countryCode: 'BM',
            nativeName: 'Bermuda',
            latLng: {
                lat: '32.321384',
                lng: '-64.75737'
            },
            latLngString: '32.321384, 64.75737'
        },
        {
            name: 'Bhutan',
            iso2: 'bt',
            dialCode: '975',
            priority: 0,
            areaCodes: null,
            countryCode: 'BT',
            nativeName: 'Bhutan (འབྲུག)',
            latLng: {
                lat: '27.514162',
                lng: '90.433601'
            },
            latLngString: '27.514162, 90.433601'
        },
        {
            name: 'Bolivia',
            iso2: 'bo',
            dialCode: '591',
            priority: 0,
            areaCodes: null,
            countryCode: 'BO',
            nativeName: 'Bolivia',
            latLng: {
                lat: '-16.290154',
                lng: '-63.588653'
            },
            latLngString: '-16.290154, 63.588653'
        },
        {
            name: 'Bosnia and Herzegovina',
            iso2: 'ba',
            dialCode: '387',
            priority: 0,
            areaCodes: null,
            countryCode: 'BA',
            nativeName: 'Bosnia and Herzegovina (Босна и Херцеговина)',
            latLng: {
                lat: '43.915886',
                lng: '17.679076'
            },
            latLngString: '43.915886, 17.679076'
        },
        {
            name: 'Botswana',
            iso2: 'bw',
            dialCode: '267',
            priority: 0,
            areaCodes: null,
            countryCode: 'BW',
            nativeName: 'Botswana',
            latLng: {
                lat: '-22.328474',
                lng: '24.684866'
            },
            latLngString: '-22.328474, 24.684866'
        },
        {
            name: 'Brazil',
            iso2: 'br',
            dialCode: '55',
            priority: 0,
            areaCodes: null,
            countryCode: 'BR',
            nativeName: 'Brazil (Brasil)',
            latLng: {
                lat: '-14.235004',
                lng: '-51.92528'
            },
            latLngString: '-14.235004, 51.92528'
        },
        {
            name: 'British Indian Ocean Territory',
            iso2: 'io',
            dialCode: '246',
            priority: 0,
            areaCodes: null,
            countryCode: 'IO',
            nativeName: 'British Indian Ocean Territory',
            latLng: {
                lat: '-6.343194',
                lng: '71.876519'
            },
            latLngString: '-6.343194, 71.876519'
        },
        {
            name: 'British Virgin Islands',
            iso2: 'vg',
            dialCode: '1',
            priority: 11,
            areaCodes: [
                '284'
            ],
            countryCode: 'VG',
            nativeName: 'British Virgin Islands',
            latLng: {
                lat: '18.420695',
                lng: '-64.639968'
            },
            latLngString: '18.420695, 64.639968'
        },
        {
            name: 'Brunei',
            iso2: 'bn',
            dialCode: '673',
            priority: 0,
            areaCodes: null,
            countryCode: 'BN',
            nativeName: 'Brunei',
            latLng: {
                lat: '4.535277',
                lng: '114.727669'
            },
            latLngString: '4.535277, 114.727669'
        },
        {
            name: 'Bulgaria',
            iso2: 'bg',
            dialCode: '359',
            priority: 0,
            areaCodes: null,
            countryCode: 'BG',
            nativeName: 'Bulgaria (България)',
            latLng: {
                lat: '42.733883',
                lng: '25.48583'
            },
            latLngString: '42.733883, 25.48583'
        },
        {
            name: 'Burkina Faso',
            iso2: 'bf',
            dialCode: '226',
            priority: 0,
            areaCodes: null,
            countryCode: 'BF',
            nativeName: 'Burkina Faso',
            latLng: {
                lat: '12.238333',
                lng: '-1.561593'
            },
            latLngString: '12.238333, 1.561593'
        },
        {
            name: 'Burundi',
            iso2: 'bi',
            dialCode: '257',
            priority: 0,
            areaCodes: null,
            countryCode: 'BI',
            nativeName: 'Burundi (Uburundi)',
            latLng: {
                lat: '-3.373056',
                lng: '29.918886'
            },
            latLngString: '-3.373056, 29.918886'
        },
        {
            name: 'Cambodia',
            iso2: 'kh',
            dialCode: '855',
            priority: 0,
            areaCodes: null,
            countryCode: 'KH',
            nativeName: 'Cambodia (កម្ពុជា)',
            latLng: {
                lat: '12.565679',
                lng: '104.990963'
            },
            latLngString: '12.565679, 104.990963'
        },
        {
            name: 'Cameroon',
            iso2: 'cm',
            dialCode: '237',
            priority: 0,
            areaCodes: null,
            countryCode: 'CM',
            nativeName: 'Cameroon (Cameroun)',
            latLng: {
                lat: '7.369722',
                lng: '12.354722'
            },
            latLngString: '7.369722, 12.354722'
        },
        {
            name: 'Canada',
            iso2: 'ca',
            dialCode: '1',
            priority: 1,
            areaCodes: [
                '204',
                '226',
                '236',
                '249',
                '250',
                '289',
                '306',
                '343',
                '365',
                '387',
                '403',
                '416',
                '418',
                '431',
                '437',
                '438',
                '450',
                '506',
                '514',
                '519',
                '548',
                '579',
                '581',
                '587',
                '604',
                '613',
                '639',
                '647',
                '672',
                '705',
                '709',
                '742',
                '778',
                '780',
                '782',
                '807',
                '819',
                '825',
                '867',
                '873',
                '902',
                '905'
            ],
            countryCode: 'CA',
            nativeName: 'Canada',
            latLng: {
                lat: '56.130366',
                lng: '-106.346771'
            },
            latLngString: '56.130366, 106.346771'
        },
        {
            name: 'Cape Verde',
            iso2: 'cv',
            dialCode: '238',
            priority: 0,
            areaCodes: null,
            countryCode: 'CV',
            nativeName: 'Cape Verde (Kabu Verdi)',
            latLng: {
                lat: '16.002082',
                lng: '-24.013197'
            },
            latLngString: '16.002082, 24.013197'
        },
        {
            name: 'Cayman Islands',
            iso2: 'ky',
            dialCode: '1',
            priority: 12,
            areaCodes: [
                '345'
            ],
            countryCode: 'KY',
            nativeName: 'Cayman Islands',
            latLng: {
                lat: '19.513469',
                lng: '-80.566956'
            },
            latLngString: '19.513469, 80.566956'
        },
        {
            name: 'Central African Republic',
            iso2: 'cf',
            dialCode: '236',
            priority: 0,
            areaCodes: null,
            countryCode: 'CF',
            nativeName: 'Central African Republic (République centrafricaine)',
            latLng: {
                lat: '6.611111',
                lng: '20.939444'
            },
            latLngString: '6.611111, 20.939444'
        },
        {
            name: 'Chad',
            iso2: 'td',
            dialCode: '235',
            priority: 0,
            areaCodes: null,
            countryCode: 'TD',
            nativeName: 'Chad (Tchad)',
            latLng: {
                lat: '15.454166',
                lng: '18.732207'
            },
            latLngString: '15.454166, 18.732207'
        },
        {
            name: 'Chile',
            iso2: 'cl',
            dialCode: '56',
            priority: 0,
            areaCodes: null,
            countryCode: 'CL',
            nativeName: 'Chile',
            latLng: {
                lat: '-35.675147',
                lng: '-71.542969'
            },
            latLngString: '-35.675147, 71.542969'
        },
        {
            name: 'China',
            iso2: 'cn',
            dialCode: '86',
            priority: 0,
            areaCodes: null,
            countryCode: 'CN',
            nativeName: 'China (中国)',
            latLng: {
                lat: '35.86166',
                lng: '104.195397'
            },
            latLngString: '35.86166, 104.195397'
        },
        {
            name: 'Christmas Island',
            iso2: 'cx',
            dialCode: '61',
            priority: 2,
            areaCodes: null,
            countryCode: 'CX',
            nativeName: 'Christmas Island',
            latLng: {
                lat: '-10.447525',
                lng: '105.690449'
            },
            latLngString: '-10.447525, 105.690449'
        },
        {
            name: 'Cocos [Keeling] Islands',
            iso2: 'cc',
            dialCode: '61',
            priority: 1,
            areaCodes: null,
            countryCode: 'CC',
            nativeName: 'Cocos (Keeling) Islands',
            latLng: {
                lat: '-12.164165',
                lng: '96.870956'
            },
            latLngString: '-12.164165, 96.870956'
        },
        {
            name: 'Colombia',
            iso2: 'co',
            dialCode: '57',
            priority: 0,
            areaCodes: null,
            countryCode: 'CO',
            nativeName: 'Colombia',
            latLng: {
                lat: '4.570868',
                lng: '-74.297333'
            },
            latLngString: '4.570868, 74.297333'
        },
        {
            name: 'Comoros',
            iso2: 'km',
            dialCode: '269',
            priority: 0,
            areaCodes: null,
            countryCode: 'KM',
            nativeName: 'Comoros (‫جزر القمر‬‎)',
            latLng: {
                lat: '-11.875001',
                lng: '43.872219'
            },
            latLngString: '-11.875001, 43.872219'
        },
        {
            name: 'Congo [DRC]',
            iso2: 'cd',
            dialCode: '243',
            priority: 0,
            areaCodes: null,
            countryCode: 'CD',
            nativeName: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
            latLng: {
                lat: '-4.038333',
                lng: '21.758664'
            },
            latLngString: '-4.038333, 21.758664'
        },
        {
            name: 'Congo [Republic]',
            iso2: 'cg',
            dialCode: '242',
            priority: 0,
            areaCodes: null,
            countryCode: 'CG',
            nativeName: 'Congo (Republic) (Congo-Brazzaville)',
            latLng: {
                lat: '-0.228021',
                lng: '15.827659'
            },
            latLngString: '-0.228021, 15.827659'
        },
        {
            name: 'Cook Islands',
            iso2: 'ck',
            dialCode: '682',
            priority: 0,
            areaCodes: null,
            countryCode: 'CK',
            nativeName: 'Cook Islands',
            latLng: {
                lat: '-21.236736',
                lng: '-159.777671'
            },
            latLngString: '-21.236736, 159.777671'
        },
        {
            name: 'Costa Rica',
            iso2: 'cr',
            dialCode: '506',
            priority: 0,
            areaCodes: null,
            countryCode: 'CR',
            nativeName: 'Costa Rica',
            latLng: {
                lat: '9.748917',
                lng: '-83.753428'
            },
            latLngString: '9.748917, 83.753428'
        },
        {
            name: 'Côte d\'Ivoire',
            iso2: 'ci',
            dialCode: '225',
            priority: 0,
            areaCodes: null,
            countryCode: 'CI',
            nativeName: 'Côte d’Ivoire',
            latLng: {
                lat: '7.539989',
                lng: '-5.54708'
            },
            latLngString: '7.539989, 5.54708'
        },
        {
            name: 'Croatia',
            iso2: 'hr',
            dialCode: '385',
            priority: 0,
            areaCodes: null,
            countryCode: 'HR',
            nativeName: 'Croatia (Hrvatska)',
            latLng: {
                lat: '45.1',
                lng: '15.2'
            },
            latLngString: '45.1, 15.2'
        },
        {
            name: 'Cuba',
            iso2: 'cu',
            dialCode: '53',
            priority: 0,
            areaCodes: null,
            countryCode: 'CU',
            nativeName: 'Cuba',
            latLng: {
                lat: '21.521757',
                lng: '-77.781167'
            },
            latLngString: '21.521757, 77.781167'
        },
        {
            name: 'Cyprus',
            iso2: 'cy',
            dialCode: '357',
            priority: 0,
            areaCodes: null,
            countryCode: 'CY',
            nativeName: 'Cyprus (Κύπρος)',
            latLng: {
                lat: '35.126413',
                lng: '33.429859'
            },
            latLngString: '35.126413, 33.429859'
        },
        {
            name: 'Czech Republic',
            iso2: 'cz',
            dialCode: '420',
            priority: 0,
            areaCodes: null,
            countryCode: 'CZ',
            nativeName: 'Czech Republic (Česká republika)',
            latLng: {
                lat: '49.817492',
                lng: '15.472962'
            },
            latLngString: '49.817492, 15.472962'
        },
        {
            name: 'Denmark',
            iso2: 'dk',
            dialCode: '45',
            priority: 0,
            areaCodes: null,
            countryCode: 'DK',
            nativeName: 'Denmark (Danmark)',
            latLng: {
                lat: '56.26392',
                lng: '9.501785'
            },
            latLngString: '56.26392, 9.501785'
        },
        {
            name: 'Djibouti',
            iso2: 'dj',
            dialCode: '253',
            priority: 0,
            areaCodes: null,
            countryCode: 'DJ',
            nativeName: 'Djibouti',
            latLng: {
                lat: '11.825138',
                lng: '42.590275'
            },
            latLngString: '11.825138, 42.590275'
        },
        {
            name: 'Dominica',
            iso2: 'dm',
            dialCode: '1',
            priority: 13,
            areaCodes: [
                '767'
            ],
            countryCode: 'DM',
            nativeName: 'Dominica',
            latLng: {
                lat: '15.414999',
                lng: '-61.370976'
            },
            latLngString: '15.414999, 61.370976'
        },
        {
            name: 'Dominican Republic',
            iso2: 'do',
            dialCode: '1',
            priority: 2,
            areaCodes: [
                '809',
                '829',
                '849'
            ],
            countryCode: 'DO',
            nativeName: 'Dominican Republic (República Dominicana)',
            latLng: {
                lat: '18.735693',
                lng: '-70.162651'
            },
            latLngString: '18.735693, 70.162651'
        },
        {
            name: 'Ecuador',
            iso2: 'ec',
            dialCode: '593',
            priority: 0,
            areaCodes: null,
            countryCode: 'EC',
            nativeName: 'Ecuador',
            latLng: {
                lat: '-1.831239',
                lng: '-78.183406'
            },
            latLngString: '-1.831239, 78.183406'
        },
        {
            name: 'Egypt',
            iso2: 'eg',
            dialCode: '20',
            priority: 0,
            areaCodes: null,
            countryCode: 'EG',
            nativeName: 'Egypt (‫مصر‬‎)',
            latLng: {
                lat: '26.820553',
                lng: '30.802498'
            },
            latLngString: '26.820553, 30.802498'
        },
        {
            name: 'El Salvador',
            iso2: 'sv',
            dialCode: '503',
            priority: 0,
            areaCodes: null,
            countryCode: 'SV',
            nativeName: 'El Salvador',
            latLng: {
                lat: '13.794185',
                lng: '-88.89653'
            },
            latLngString: '13.794185, 88.89653'
        },
        {
            name: 'Equatorial Guinea',
            iso2: 'gq',
            dialCode: '240',
            priority: 0,
            areaCodes: null,
            countryCode: 'GQ',
            nativeName: 'Equatorial Guinea (Guinea Ecuatorial)',
            latLng: {
                lat: '1.650801',
                lng: '10.267895'
            },
            latLngString: '1.650801, 10.267895'
        },
        {
            name: 'Eritrea',
            iso2: 'er',
            dialCode: '291',
            priority: 0,
            areaCodes: null,
            countryCode: 'ER',
            nativeName: 'Eritrea',
            latLng: {
                lat: '15.179384',
                lng: '39.782334'
            },
            latLngString: '15.179384, 39.782334'
        },
        {
            name: 'Estonia',
            iso2: 'ee',
            dialCode: '372',
            priority: 0,
            areaCodes: null,
            countryCode: 'EE',
            nativeName: 'Estonia (Eesti)',
            latLng: {
                lat: '58.595272',
                lng: '25.013607'
            },
            latLngString: '58.595272, 25.013607'
        },
        {
            name: 'Ethiopia',
            iso2: 'et',
            dialCode: '251',
            priority: 0,
            areaCodes: null,
            countryCode: 'ET',
            nativeName: 'Ethiopia',
            latLng: {
                lat: '9.145',
                lng: '40.489673'
            },
            latLngString: '9.145, 40.489673'
        },
        {
            name: 'Falkland Islands [Islas Malvinas]',
            iso2: 'fk',
            dialCode: '500',
            priority: 0,
            areaCodes: null,
            countryCode: 'FK',
            nativeName: 'Falkland Islands (Islas Malvinas)',
            latLng: {
                lat: '-51.796253',
                lng: '-59.523613'
            },
            latLngString: '-51.796253, 59.523613'
        },
        {
            name: 'Faroe Islands',
            iso2: 'fo',
            dialCode: '298',
            priority: 0,
            areaCodes: null,
            countryCode: 'FO',
            nativeName: 'Faroe Islands (Føroyar)',
            latLng: {
                lat: '61.892635',
                lng: '-6.911806'
            },
            latLngString: '61.892635, 6.911806'
        },
        {
            name: 'Fiji',
            iso2: 'fj',
            dialCode: '679',
            priority: 0,
            areaCodes: null,
            countryCode: 'FJ',
            nativeName: 'Fiji',
            latLng: {
                lat: '-16.578193',
                lng: '179.414413'
            },
            latLngString: '-16.578193, 179.414413'
        },
        {
            name: 'Finland',
            iso2: 'fi',
            dialCode: '358',
            priority: 0,
            areaCodes: null,
            countryCode: 'FI',
            nativeName: 'Finland (Suomi)',
            latLng: {
                lat: '61.92411',
                lng: '25.748151'
            },
            latLngString: '61.92411, 25.748151'
        },
        {
            name: 'France',
            iso2: 'fr',
            dialCode: '33',
            priority: 0,
            areaCodes: null,
            countryCode: 'FR',
            nativeName: 'France',
            latLng: {
                lat: '46.227638',
                lng: '2.213749'
            },
            latLngString: '46.227638, 2.213749'
        },
        {
            name: 'French Guiana',
            iso2: 'gf',
            dialCode: '594',
            priority: 0,
            areaCodes: null,
            countryCode: 'GF',
            nativeName: 'French Guiana (Guyane française)',
            latLng: {
                lat: '3.933889',
                lng: '-53.125782'
            },
            latLngString: '3.933889, 53.125782'
        },
        {
            name: 'French Polynesia',
            iso2: 'pf',
            dialCode: '689',
            priority: 0,
            areaCodes: null,
            countryCode: 'PF',
            nativeName: 'French Polynesia (Polynésie française)',
            latLng: {
                lat: '-17.679742',
                lng: '-149.406843'
            },
            latLngString: '-17.679742, 149.406843'
        },
        {
            name: 'Gabon',
            iso2: 'ga',
            dialCode: '241',
            priority: 0,
            areaCodes: null,
            countryCode: 'GA',
            nativeName: 'Gabon',
            latLng: {
                lat: '-0.803689',
                lng: '11.609444'
            },
            latLngString: '-0.803689, 11.609444'
        },
        {
            name: 'Gambia',
            iso2: 'gm',
            dialCode: '220',
            priority: 0,
            areaCodes: null,
            countryCode: 'GM',
            nativeName: 'Gambia',
            latLng: {
                lat: '13.443182',
                lng: '-15.310139'
            },
            latLngString: '13.443182, 15.310139'
        },
        {
            name: 'Georgia',
            iso2: 'ge',
            dialCode: '995',
            priority: 0,
            areaCodes: null,
            countryCode: 'GE',
            nativeName: 'Georgia (საქართველო)',
            latLng: {
                lat: '42.315407',
                lng: '43.356892'
            },
            latLngString: '42.315407, 43.356892'
        },
        {
            name: 'Germany',
            iso2: 'de',
            dialCode: '49',
            priority: 0,
            areaCodes: null,
            countryCode: 'DE',
            nativeName: 'Germany (Deutschland)',
            latLng: {
                lat: '51.165691',
                lng: '10.451526'
            },
            latLngString: '51.165691, 10.451526'
        },
        {
            name: 'Ghana',
            iso2: 'gh',
            dialCode: '233',
            priority: 0,
            areaCodes: null,
            countryCode: 'GH',
            nativeName: 'Ghana (Gaana)',
            latLng: {
                lat: '7.946527',
                lng: '-1.023194'
            },
            latLngString: '7.946527, 1.023194'
        },
        {
            name: 'Gibraltar',
            iso2: 'gi',
            dialCode: '350',
            priority: 0,
            areaCodes: null,
            countryCode: 'GI',
            nativeName: 'Gibraltar',
            latLng: {
                lat: '36.137741',
                lng: '-5.345374'
            },
            latLngString: '36.137741, 5.345374'
        },
        {
            name: 'Greece',
            iso2: 'gr',
            dialCode: '30',
            priority: 0,
            areaCodes: null,
            countryCode: 'GR',
            nativeName: 'Greece (Ελλάδα)',
            latLng: {
                lat: '39.074208',
                lng: '21.824312'
            },
            latLngString: '39.074208, 21.824312'
        },
        {
            name: 'Greenland',
            iso2: 'gl',
            dialCode: '299',
            priority: 0,
            areaCodes: null,
            countryCode: 'GL',
            nativeName: 'Greenland (Kalaallit Nunaat)',
            latLng: {
                lat: '71.706936',
                lng: '-42.604303'
            },
            latLngString: '71.706936, 42.604303'
        },
        {
            name: 'Grenada',
            iso2: 'gd',
            dialCode: '1',
            priority: 14,
            areaCodes: [
                '473'
            ],
            countryCode: 'GD',
            nativeName: 'Grenada',
            latLng: {
                lat: '12.262776',
                lng: '-61.604171'
            },
            latLngString: '12.262776, 61.604171'
        },
        {
            name: 'Guadeloupe',
            iso2: 'gp',
            dialCode: '590',
            priority: 0,
            areaCodes: null,
            countryCode: 'GP',
            nativeName: 'Guadeloupe',
            latLng: {
                lat: '16.995971',
                lng: '-62.067641'
            },
            latLngString: '16.995971, 62.067641'
        },
        {
            name: 'Guam',
            iso2: 'gu',
            dialCode: '1',
            priority: 15,
            areaCodes: [
                '671'
            ],
            countryCode: 'GU',
            nativeName: 'Guam',
            latLng: {
                lat: '13.444304',
                lng: '144.793731'
            },
            latLngString: '13.444304, 144.793731'
        },
        {
            name: 'Guatemala',
            iso2: 'gt',
            dialCode: '502',
            priority: 0,
            areaCodes: null,
            countryCode: 'GT',
            nativeName: 'Guatemala',
            latLng: {
                lat: '15.783471',
                lng: '-90.230759'
            },
            latLngString: '15.783471, 90.230759'
        },
        {
            name: 'Guernsey',
            iso2: 'gg',
            dialCode: '44',
            priority: 1,
            areaCodes: [
                '1481',
                '7781',
                '7839',
                '7911'
            ],
            countryCode: 'GG',
            nativeName: 'Guernsey',
            latLng: {
                lat: '49.465691',
                lng: '-2.585278'
            },
            latLngString: '49.465691, 2.585278'
        },
        {
            name: 'Guinea',
            iso2: 'gn',
            dialCode: '224',
            priority: 0,
            areaCodes: null,
            countryCode: 'GN',
            nativeName: 'Guinea (Guinée)',
            latLng: {
                lat: '9.945587',
                lng: '-9.696645'
            },
            latLngString: '9.945587, 9.696645'
        },
        {
            name: 'Guinea-Bissau',
            iso2: 'gw',
            dialCode: '245',
            priority: 0,
            areaCodes: null,
            countryCode: 'GW',
            nativeName: 'Guinea-Bissau (Guiné Bissau)',
            latLng: {
                lat: '11.803749',
                lng: '-15.180413'
            },
            latLngString: '11.803749, 15.180413'
        },
        {
            name: 'Guyana',
            iso2: 'gy',
            dialCode: '592',
            priority: 0,
            areaCodes: null,
            countryCode: 'GY',
            nativeName: 'Guyana',
            latLng: {
                lat: '4.860416',
                lng: '-58.93018'
            },
            latLngString: '4.860416, 58.93018'
        },
        {
            name: 'Haiti',
            iso2: 'ht',
            dialCode: '509',
            priority: 0,
            areaCodes: null,
            countryCode: 'HT',
            nativeName: 'Haiti',
            latLng: {
                lat: '18.971187',
                lng: '-72.285215'
            },
            latLngString: '18.971187, 72.285215'
        },
        {
            name: 'Honduras',
            iso2: 'hn',
            dialCode: '504',
            priority: 0,
            areaCodes: null,
            countryCode: 'HN',
            nativeName: 'Honduras',
            latLng: {
                lat: '15.199999',
                lng: '-86.241905'
            },
            latLngString: '15.199999, 86.241905'
        },
        {
            name: 'Hong Kong',
            iso2: 'hk',
            dialCode: '852',
            priority: 0,
            areaCodes: null,
            countryCode: 'HK',
            nativeName: 'Hong Kong (香港)',
            latLng: {
                lat: '22.396428',
                lng: '114.109497'
            },
            latLngString: '22.396428, 114.109497'
        },
        {
            name: 'Hungary',
            iso2: 'hu',
            dialCode: '36',
            priority: 0,
            areaCodes: null,
            countryCode: 'HU',
            nativeName: 'Hungary (Magyarország)',
            latLng: {
                lat: '47.162494',
                lng: '19.503304'
            },
            latLngString: '47.162494, 19.503304'
        },
        {
            name: 'Iceland',
            iso2: 'is',
            dialCode: '354',
            priority: 0,
            areaCodes: null,
            countryCode: 'IS',
            nativeName: 'Iceland (Ísland)',
            latLng: {
                lat: '64.963051',
                lng: '-19.020835'
            },
            latLngString: '64.963051, 19.020835'
        },
        {
            name: 'India',
            iso2: 'in',
            dialCode: '91',
            priority: 0,
            areaCodes: null,
            countryCode: 'IN',
            nativeName: 'India (भारत)',
            latLng: {
                lat: '20.593684',
                lng: '78.96288'
            },
            latLngString: '20.593684, 78.96288'
        },
        {
            name: 'Indonesia',
            iso2: 'id',
            dialCode: '62',
            priority: 0,
            areaCodes: null,
            countryCode: 'ID',
            nativeName: 'Indonesia',
            latLng: {
                lat: '-0.789275',
                lng: '113.921327'
            },
            latLngString: '-0.789275, 113.921327'
        },
        {
            name: 'Iran',
            iso2: 'ir',
            dialCode: '98',
            priority: 0,
            areaCodes: null,
            countryCode: 'IR',
            nativeName: 'Iran (‫ایران‬‎)',
            latLng: {
                lat: '32.427908',
                lng: '53.688046'
            },
            latLngString: '32.427908, 53.688046'
        },
        {
            name: 'Iraq',
            iso2: 'iq',
            dialCode: '964',
            priority: 0,
            areaCodes: null,
            countryCode: 'IQ',
            nativeName: 'Iraq (‫العراق‬‎)',
            latLng: {
                lat: '33.223191',
                lng: '43.679291'
            },
            latLngString: '33.223191, 43.679291'
        },
        {
            name: 'Ireland',
            iso2: 'ie',
            dialCode: '353',
            priority: 0,
            areaCodes: null,
            countryCode: 'IE',
            nativeName: 'Ireland',
            latLng: {
                lat: '53.41291',
                lng: '-8.24389'
            },
            latLngString: '53.41291, 8.24389'
        },
        {
            name: 'Isle of Man',
            iso2: 'im',
            dialCode: '44',
            priority: 2,
            areaCodes: [
                '1624',
                '74576',
                '7524',
                '7924',
                '7624'
            ],
            countryCode: 'IM',
            nativeName: 'Isle of Man',
            latLng: {
                lat: '54.236107',
                lng: '-4.548056'
            },
            latLngString: '54.236107, 4.548056'
        },
        {
            name: 'Israel',
            iso2: 'il',
            dialCode: '972',
            priority: 0,
            areaCodes: null,
            countryCode: 'IL',
            nativeName: 'Israel (‫ישראל‬‎)',
            latLng: {
                lat: '31.046051',
                lng: '34.851612'
            },
            latLngString: '31.046051, 34.851612'
        },
        {
            name: 'Italy',
            iso2: 'it',
            dialCode: '39',
            priority: 0,
            areaCodes: null,
            countryCode: 'IT',
            nativeName: 'Italy (Italia)',
            latLng: {
                lat: '41.87194',
                lng: '12.56738'
            },
            latLngString: '41.87194, 12.56738'
        },
        {
            name: 'Jamaica',
            iso2: 'jm',
            dialCode: '1',
            priority: 4,
            areaCodes: [
                '876',
                '658'
            ],
            countryCode: 'JM',
            nativeName: 'Jamaica',
            latLng: {
                lat: '18.109581',
                lng: '-77.297508'
            },
            latLngString: '18.109581, 77.297508'
        },
        {
            name: 'Japan',
            iso2: 'jp',
            dialCode: '81',
            priority: 0,
            areaCodes: null,
            countryCode: 'JP',
            nativeName: 'Japan (日本)',
            latLng: {
                lat: '36.204824',
                lng: '138.252924'
            },
            latLngString: '36.204824, 138.252924'
        },
        {
            name: 'Jersey',
            iso2: 'je',
            dialCode: '44',
            priority: 3,
            areaCodes: [
                '1534',
                '7509',
                '7700',
                '7797',
                '7829',
                '7937'
            ],
            countryCode: 'JE',
            nativeName: 'Jersey',
            latLng: {
                lat: '49.214439',
                lng: '-2.13125'
            },
            latLngString: '49.214439, 2.13125'
        },
        {
            name: 'Jordan',
            iso2: 'jo',
            dialCode: '962',
            priority: 0,
            areaCodes: null,
            countryCode: 'JO',
            nativeName: 'Jordan (‫الأردن‬‎)',
            latLng: {
                lat: '30.585164',
                lng: '36.238414'
            },
            latLngString: '30.585164, 36.238414'
        },
        {
            name: 'Kazakhstan',
            iso2: 'kz',
            dialCode: '7',
            priority: 1,
            areaCodes: [
                '33',
                '7'
            ],
            countryCode: 'KZ',
            nativeName: 'Kazakhstan (Казахстан)',
            latLng: {
                lat: '48.019573',
                lng: '66.923684'
            },
            latLngString: '48.019573, 66.923684'
        },
        {
            name: 'Kenya',
            iso2: 'ke',
            dialCode: '254',
            priority: 0,
            areaCodes: null,
            countryCode: 'KE',
            nativeName: 'Kenya',
            latLng: {
                lat: '-0.023559',
                lng: '37.906193'
            },
            latLngString: '-0.023559, 37.906193'
        },
        {
            name: 'Kiribati',
            iso2: 'ki',
            dialCode: '686',
            priority: 0,
            areaCodes: null,
            countryCode: 'KI',
            nativeName: 'Kiribati',
            latLng: {
                lat: '-3.370417',
                lng: '-168.734039'
            },
            latLngString: '-3.370417, 168.734039'
        },
        {
            name: 'Kosovo',
            iso2: 'xk',
            dialCode: '383',
            priority: 0,
            areaCodes: null,
            countryCode: 'XK',
            nativeName: 'Kosovo',
            latLng: {
                lat: '42.602636',
                lng: '20.902977'
            },
            latLngString: '42.602636, 20.902977'
        },
        {
            name: 'Kuwait',
            iso2: 'kw',
            dialCode: '965',
            priority: 0,
            areaCodes: null,
            countryCode: 'KW',
            nativeName: 'Kuwait (‫الكويت‬‎)',
            latLng: {
                lat: '29.31166',
                lng: '47.481766'
            },
            latLngString: '29.31166, 47.481766'
        },
        {
            name: 'Kyrgyzstan',
            iso2: 'kg',
            dialCode: '996',
            priority: 0,
            areaCodes: null,
            countryCode: 'KG',
            nativeName: 'Kyrgyzstan (Кыргызстан)',
            latLng: {
                lat: '41.20438',
                lng: '74.766098'
            },
            latLngString: '41.20438, 74.766098'
        },
        {
            name: 'Laos',
            iso2: 'la',
            dialCode: '856',
            priority: 0,
            areaCodes: null,
            countryCode: 'LA',
            nativeName: 'Laos (ລາວ)',
            latLng: {
                lat: '19.85627',
                lng: '102.495496'
            },
            latLngString: '19.85627, 102.495496'
        },
        {
            name: 'Latvia',
            iso2: 'lv',
            dialCode: '371',
            priority: 0,
            areaCodes: null,
            countryCode: 'LV',
            nativeName: 'Latvia (Latvija)',
            latLng: {
                lat: '56.879635',
                lng: '24.603189'
            },
            latLngString: '56.879635, 24.603189'
        },
        {
            name: 'Lebanon',
            iso2: 'lb',
            dialCode: '961',
            priority: 0,
            areaCodes: null,
            countryCode: 'LB',
            nativeName: 'Lebanon (‫لبنان‬‎)',
            latLng: {
                lat: '33.854721',
                lng: '35.862285'
            },
            latLngString: '33.854721, 35.862285'
        },
        {
            name: 'Lesotho',
            iso2: 'ls',
            dialCode: '266',
            priority: 0,
            areaCodes: null,
            countryCode: 'LS',
            nativeName: 'Lesotho',
            latLng: {
                lat: '-29.609988',
                lng: '28.233608'
            },
            latLngString: '-29.609988, 28.233608'
        },
        {
            name: 'Liberia',
            iso2: 'lr',
            dialCode: '231',
            priority: 0,
            areaCodes: null,
            countryCode: 'LR',
            nativeName: 'Liberia',
            latLng: {
                lat: '6.428055',
                lng: '-9.429499'
            },
            latLngString: '6.428055, 9.429499'
        },
        {
            name: 'Libya',
            iso2: 'ly',
            dialCode: '218',
            priority: 0,
            areaCodes: null,
            countryCode: 'LY',
            nativeName: 'Libya (‫ليبيا‬‎)',
            latLng: {
                lat: '26.3351',
                lng: '17.228331'
            },
            latLngString: '26.3351, 17.228331'
        },
        {
            name: 'Liechtenstein',
            iso2: 'li',
            dialCode: '423',
            priority: 0,
            areaCodes: null,
            countryCode: 'LI',
            nativeName: 'Liechtenstein',
            latLng: {
                lat: '47.166',
                lng: '9.555373'
            },
            latLngString: '47.166, 9.555373'
        },
        {
            name: 'Lithuania',
            iso2: 'lt',
            dialCode: '370',
            priority: 0,
            areaCodes: null,
            countryCode: 'LT',
            nativeName: 'Lithuania (Lietuva)',
            latLng: {
                lat: '55.169438',
                lng: '23.881275'
            },
            latLngString: '55.169438, 23.881275'
        },
        {
            name: 'Luxembourg',
            iso2: 'lu',
            dialCode: '352',
            priority: 0,
            areaCodes: null,
            countryCode: 'LU',
            nativeName: 'Luxembourg',
            latLng: {
                lat: '49.815273',
                lng: '6.129583'
            },
            latLngString: '49.815273, 6.129583'
        },
        {
            name: 'Macau',
            iso2: 'mo',
            dialCode: '853',
            priority: 0,
            areaCodes: null,
            countryCode: 'MO',
            nativeName: 'Macau (澳門)',
            latLng: {
                lat: '22.198745',
                lng: '113.543873'
            },
            latLngString: '22.198745, 113.543873'
        },
        {
            name: 'Macedonia [FYROM]',
            iso2: 'mk',
            dialCode: '389',
            priority: 0,
            areaCodes: null,
            countryCode: 'MK',
            nativeName: 'Macedonia (FYROM) (Македонија)',
            latLng: {
                lat: '41.608635',
                lng: '21.745275'
            },
            latLngString: '41.608635, 21.745275'
        },
        {
            name: 'Madagascar',
            iso2: 'mg',
            dialCode: '261',
            priority: 0,
            areaCodes: null,
            countryCode: 'MG',
            nativeName: 'Madagascar (Madagasikara)',
            latLng: {
                lat: '-18.766947',
                lng: '46.869107'
            },
            latLngString: '-18.766947, 46.869107'
        },
        {
            name: 'Malawi',
            iso2: 'mw',
            dialCode: '265',
            priority: 0,
            areaCodes: null,
            countryCode: 'MW',
            nativeName: 'Malawi',
            latLng: {
                lat: '-13.254308',
                lng: '34.301525'
            },
            latLngString: '-13.254308, 34.301525'
        },
        {
            name: 'Malaysia',
            iso2: 'my',
            dialCode: '60',
            priority: 0,
            areaCodes: null,
            countryCode: 'MY',
            nativeName: 'Malaysia',
            latLng: {
                lat: '4.210484',
                lng: '101.975766'
            },
            latLngString: '4.210484, 101.975766'
        },
        {
            name: 'Maldives',
            iso2: 'mv',
            dialCode: '960',
            priority: 0,
            areaCodes: null,
            countryCode: 'MV',
            nativeName: 'Maldives',
            latLng: {
                lat: '3.202778',
                lng: '73.22068'
            },
            latLngString: '3.202778, 73.22068'
        },
        {
            name: 'Mali',
            iso2: 'ml',
            dialCode: '223',
            priority: 0,
            areaCodes: null,
            countryCode: 'ML',
            nativeName: 'Mali',
            latLng: {
                lat: '17.570692',
                lng: '-3.996166'
            },
            latLngString: '17.570692, 3.996166'
        },
        {
            name: 'Malta',
            iso2: 'mt',
            dialCode: '356',
            priority: 0,
            areaCodes: null,
            countryCode: 'MT',
            nativeName: 'Malta',
            latLng: {
                lat: '35.937496',
                lng: '14.375416'
            },
            latLngString: '35.937496, 14.375416'
        },
        {
            name: 'Marshall Islands',
            iso2: 'mh',
            dialCode: '692',
            priority: 0,
            areaCodes: null,
            countryCode: 'MH',
            nativeName: 'Marshall Islands',
            latLng: {
                lat: '7.131474',
                lng: '171.184478'
            },
            latLngString: '7.131474, 171.184478'
        },
        {
            name: 'Martinique',
            iso2: 'mq',
            dialCode: '596',
            priority: 0,
            areaCodes: null,
            countryCode: 'MQ',
            nativeName: 'Martinique',
            latLng: {
                lat: '14.641528',
                lng: '-61.024174'
            },
            latLngString: '14.641528, 61.024174'
        },
        {
            name: 'Mauritania',
            iso2: 'mr',
            dialCode: '222',
            priority: 0,
            areaCodes: null,
            countryCode: 'MR',
            nativeName: 'Mauritania (‫موريتانيا‬‎)',
            latLng: {
                lat: '21.00789',
                lng: '-10.940835'
            },
            latLngString: '21.00789, 10.940835'
        },
        {
            name: 'Mauritius',
            iso2: 'mu',
            dialCode: '230',
            priority: 0,
            areaCodes: null,
            countryCode: 'MU',
            nativeName: 'Mauritius (Moris)',
            latLng: {
                lat: '-20.348404',
                lng: '57.552152'
            },
            latLngString: '-20.348404, 57.552152'
        },
        {
            name: 'Mayotte',
            iso2: 'yt',
            dialCode: '262',
            priority: 1,
            areaCodes: [
                '269',
                '639'
            ],
            countryCode: 'YT',
            nativeName: 'Mayotte',
            latLng: {
                lat: '-12.8275',
                lng: '45.166244'
            },
            latLngString: '-12.8275, 45.166244'
        },
        {
            name: 'Mexico',
            iso2: 'mx',
            dialCode: '52',
            priority: 0,
            areaCodes: null,
            countryCode: 'MX',
            nativeName: 'Mexico (México)',
            latLng: {
                lat: '23.634501',
                lng: '-102.552784'
            },
            latLngString: '23.634501, 102.552784'
        },
        {
            name: 'Micronesia',
            iso2: 'fm',
            dialCode: '691',
            priority: 0,
            areaCodes: null,
            countryCode: 'FM',
            nativeName: 'Micronesia',
            latLng: {
                lat: '7.425554',
                lng: '150.550812'
            },
            latLngString: '7.425554, 150.550812'
        },
        {
            name: 'Moldova',
            iso2: 'md',
            dialCode: '373',
            priority: 0,
            areaCodes: null,
            countryCode: 'MD',
            nativeName: 'Moldova (Republica Moldova)',
            latLng: {
                lat: '47.411631',
                lng: '28.369885'
            },
            latLngString: '47.411631, 28.369885'
        },
        {
            name: 'Monaco',
            iso2: 'mc',
            dialCode: '377',
            priority: 0,
            areaCodes: null,
            countryCode: 'MC',
            nativeName: 'Monaco',
            latLng: {
                lat: '43.750298',
                lng: '7.412841'
            },
            latLngString: '43.750298, 7.412841'
        },
        {
            name: 'Mongolia',
            iso2: 'mn',
            dialCode: '976',
            priority: 0,
            areaCodes: null,
            countryCode: 'MN',
            nativeName: 'Mongolia (Монгол)',
            latLng: {
                lat: '46.862496',
                lng: '103.846656'
            },
            latLngString: '46.862496, 103.846656'
        },
        {
            name: 'Montenegro',
            iso2: 'me',
            dialCode: '382',
            priority: 0,
            areaCodes: null,
            countryCode: 'ME',
            nativeName: 'Montenegro (Crna Gora)',
            latLng: {
                lat: '42.708678',
                lng: '19.37439'
            },
            latLngString: '42.708678, 19.37439'
        },
        {
            name: 'Montserrat',
            iso2: 'ms',
            dialCode: '1',
            priority: 16,
            areaCodes: [
                '664'
            ],
            countryCode: 'MS',
            nativeName: 'Montserrat',
            latLng: {
                lat: '16.742498',
                lng: '-62.187366'
            },
            latLngString: '16.742498, 62.187366'
        },
        {
            name: 'Morocco',
            iso2: 'ma',
            dialCode: '212',
            priority: 0,
            areaCodes: null,
            countryCode: 'MA',
            nativeName: 'Morocco (‫المغرب‬‎)',
            latLng: {
                lat: '31.791702',
                lng: '-7.09262'
            },
            latLngString: '31.791702, 7.09262'
        },
        {
            name: 'Mozambique',
            iso2: 'mz',
            dialCode: '258',
            priority: 0,
            areaCodes: null,
            countryCode: 'MZ',
            nativeName: 'Mozambique (Moçambique)',
            latLng: {
                lat: '-18.665695',
                lng: '35.529562'
            },
            latLngString: '-18.665695, 35.529562'
        },
        {
            name: 'Myanmar [Burma]',
            iso2: 'mm',
            dialCode: '95',
            priority: 0,
            areaCodes: null,
            countryCode: 'MM',
            nativeName: 'Myanmar (Burma) (မြန်မာ)',
            latLng: {
                lat: '21.913965',
                lng: '95.956223'
            },
            latLngString: '21.913965, 95.956223'
        },
        {
            name: 'Namibia',
            iso2: 'na',
            dialCode: '264',
            priority: 0,
            areaCodes: null,
            countryCode: 'NA',
            nativeName: 'Namibia (Namibië)',
            latLng: {
                lat: '-22.95764',
                lng: '18.49041'
            },
            latLngString: '-22.95764, 18.49041'
        },
        {
            name: 'Nauru',
            iso2: 'nr',
            dialCode: '674',
            priority: 0,
            areaCodes: null,
            countryCode: 'NR',
            nativeName: 'Nauru',
            latLng: {
                lat: '-0.522778',
                lng: '166.931503'
            },
            latLngString: '-0.522778, 166.931503'
        },
        {
            name: 'Nepal',
            iso2: 'np',
            dialCode: '977',
            priority: 0,
            areaCodes: null,
            countryCode: 'NP',
            nativeName: 'Nepal (नेपाल)',
            latLng: {
                lat: '28.394857',
                lng: '84.124008'
            },
            latLngString: '28.394857, 84.124008'
        },
        {
            name: 'Netherlands',
            iso2: 'nl',
            dialCode: '31',
            priority: 0,
            areaCodes: null,
            countryCode: 'NL',
            nativeName: 'Netherlands (Nederland)',
            latLng: {
                lat: '52.132633',
                lng: '5.291266'
            },
            latLngString: '52.132633, 5.291266'
        },
        {
            name: 'New Caledonia',
            iso2: 'nc',
            dialCode: '687',
            priority: 0,
            areaCodes: null,
            countryCode: 'NC',
            nativeName: 'New Caledonia (Nouvelle-Calédonie)',
            latLng: {
                lat: '-20.904305',
                lng: '165.618042'
            },
            latLngString: '-20.904305, 165.618042'
        },
        {
            name: 'New Zealand',
            iso2: 'nz',
            dialCode: '64',
            priority: 0,
            areaCodes: null,
            countryCode: 'NZ',
            nativeName: 'New Zealand',
            latLng: {
                lat: '-40.900557',
                lng: '174.885971'
            },
            latLngString: '-40.900557, 174.885971'
        },
        {
            name: 'Nicaragua',
            iso2: 'ni',
            dialCode: '505',
            priority: 0,
            areaCodes: null,
            countryCode: 'NI',
            nativeName: 'Nicaragua',
            latLng: {
                lat: '12.865416',
                lng: '-85.207229'
            },
            latLngString: '12.865416, 85.207229'
        },
        {
            name: 'Niger',
            iso2: 'ne',
            dialCode: '227',
            priority: 0,
            areaCodes: null,
            countryCode: 'NE',
            nativeName: 'Niger (Nijar)',
            latLng: {
                lat: '17.607789',
                lng: '8.081666'
            },
            latLngString: '17.607789, 8.081666'
        },
        {
            name: 'Nigeria',
            iso2: 'ng',
            dialCode: '234',
            priority: 0,
            areaCodes: null,
            countryCode: 'NG',
            nativeName: 'Nigeria',
            latLng: {
                lat: '9.081999',
                lng: '8.675277'
            },
            latLngString: '9.081999, 8.675277'
        },
        {
            name: 'Niue',
            iso2: 'nu',
            dialCode: '683',
            priority: 0,
            areaCodes: null,
            countryCode: 'NU',
            nativeName: 'Niue',
            latLng: {
                lat: '-19.054445',
                lng: '-169.867233'
            },
            latLngString: '-19.054445, 169.867233'
        },
        {
            name: 'Norfolk Island',
            iso2: 'nf',
            dialCode: '672',
            priority: 0,
            areaCodes: null,
            countryCode: 'NF',
            nativeName: 'Norfolk Island',
            latLng: {
                lat: '-29.040835',
                lng: '167.954712'
            },
            latLngString: '-29.040835, 167.954712'
        },
        {
            name: 'North Korea',
            iso2: 'kp',
            dialCode: '850',
            priority: 0,
            areaCodes: null,
            countryCode: 'KP',
            nativeName: 'North Korea (조선 민주주의 인민 공화국)',
            latLng: {
                lat: '40.339852',
                lng: '127.510093'
            },
            latLngString: '40.339852, 127.510093'
        },
        {
            name: 'Northern Mariana Islands',
            iso2: 'mp',
            dialCode: '1',
            priority: 17,
            areaCodes: [
                '670'
            ],
            countryCode: 'MP',
            nativeName: 'Northern Mariana Islands',
            latLng: {
                lat: '17.33083',
                lng: '145.38469'
            },
            latLngString: '17.33083, 145.38469'
        },
        {
            name: 'Norway',
            iso2: 'no',
            dialCode: '47',
            priority: 0,
            areaCodes: null,
            countryCode: 'NO',
            nativeName: 'Norway (Norge)',
            latLng: {
                lat: '60.472024',
                lng: '8.468946'
            },
            latLngString: '60.472024, 8.468946'
        },
        {
            name: 'Oman',
            iso2: 'om',
            dialCode: '968',
            priority: 0,
            areaCodes: null,
            countryCode: 'OM',
            nativeName: 'Oman (‫عُمان‬‎)',
            latLng: {
                lat: '21.512583',
                lng: '55.923255'
            },
            latLngString: '21.512583, 55.923255'
        },
        {
            name: 'Pakistan',
            iso2: 'pk',
            dialCode: '92',
            priority: 0,
            areaCodes: null,
            countryCode: 'PK',
            nativeName: 'Pakistan (‫پاکستان‬‎)',
            latLng: {
                lat: '30.375321',
                lng: '69.345116'
            },
            latLngString: '30.375321, 69.345116'
        },
        {
            name: 'Palau',
            iso2: 'pw',
            dialCode: '680',
            priority: 0,
            areaCodes: null,
            countryCode: 'PW',
            nativeName: 'Palau',
            latLng: {
                lat: '7.51498',
                lng: '134.58252'
            },
            latLngString: '7.51498, 134.58252'
        },
        {
            name: 'Palestinian Territories',
            iso2: 'ps',
            dialCode: '970',
            priority: 0,
            areaCodes: null,
            countryCode: 'PS',
            nativeName: 'Palestine (‫فلسطين‬‎)',
            latLng: {
                lat: '31.952162',
                lng: '35.233154'
            },
            latLngString: '31.952162, 35.233154'
        },
        {
            name: 'Panama',
            iso2: 'pa',
            dialCode: '507',
            priority: 0,
            areaCodes: null,
            countryCode: 'PA',
            nativeName: 'Panama (Panamá)',
            latLng: {
                lat: '8.537981',
                lng: '-80.782127'
            },
            latLngString: '8.537981, 80.782127'
        },
        {
            name: 'Papua New Guinea',
            iso2: 'pg',
            dialCode: '675',
            priority: 0,
            areaCodes: null,
            countryCode: 'PG',
            nativeName: 'Papua New Guinea',
            latLng: {
                lat: '-6.314993',
                lng: '143.95555'
            },
            latLngString: '-6.314993, 143.95555'
        },
        {
            name: 'Paraguay',
            iso2: 'py',
            dialCode: '595',
            priority: 0,
            areaCodes: null,
            countryCode: 'PY',
            nativeName: 'Paraguay',
            latLng: {
                lat: '-23.442503',
                lng: '-58.443832'
            },
            latLngString: '-23.442503, 58.443832'
        },
        {
            name: 'Peru',
            iso2: 'pe',
            dialCode: '51',
            priority: 0,
            areaCodes: null,
            countryCode: 'PE',
            nativeName: 'Peru (Perú)',
            latLng: {
                lat: '-9.189967',
                lng: '-75.015152'
            },
            latLngString: '-9.189967, 75.015152'
        },
        {
            name: 'Philippines',
            iso2: 'ph',
            dialCode: '63',
            priority: 0,
            areaCodes: null,
            countryCode: 'PH',
            nativeName: 'Philippines',
            latLng: {
                lat: '12.879721',
                lng: '121.774017'
            },
            latLngString: '12.879721, 121.774017'
        },
        {
            name: 'Poland',
            iso2: 'pl',
            dialCode: '48',
            priority: 0,
            areaCodes: null,
            countryCode: 'PL',
            nativeName: 'Poland (Polska)',
            latLng: {
                lat: '51.919438',
                lng: '19.145136'
            },
            latLngString: '51.919438, 19.145136'
        },
        {
            name: 'Portugal',
            iso2: 'pt',
            dialCode: '351',
            priority: 0,
            areaCodes: null,
            countryCode: 'PT',
            nativeName: 'Portugal',
            latLng: {
                lat: '39.399872',
                lng: '-8.224454'
            },
            latLngString: '39.399872, 8.224454'
        },
        {
            name: 'Puerto Rico',
            iso2: 'pr',
            dialCode: '1',
            priority: 3,
            areaCodes: [
                '787',
                '939'
            ],
            countryCode: 'PR',
            nativeName: 'Puerto Rico',
            latLng: {
                lat: '18.220833',
                lng: '-66.590149'
            },
            latLngString: '18.220833, 66.590149'
        },
        {
            name: 'Qatar',
            iso2: 'qa',
            dialCode: '974',
            priority: 0,
            areaCodes: null,
            countryCode: 'QA',
            nativeName: 'Qatar (‫قطر‬‎)',
            latLng: {
                lat: '25.354826',
                lng: '51.183884'
            },
            latLngString: '25.354826, 51.183884'
        },
        {
            name: 'Réunion',
            iso2: 're',
            dialCode: '262',
            priority: 0,
            areaCodes: null,
            countryCode: 'RE',
            nativeName: 'Réunion (La Réunion)',
            latLng: {
                lat: '-21.115141',
                lng: '55.536384'
            },
            latLngString: '-21.115141, 55.536384'
        },
        {
            name: 'Romania',
            iso2: 'ro',
            dialCode: '40',
            priority: 0,
            areaCodes: null,
            countryCode: 'RO',
            nativeName: 'Romania (România)',
            latLng: {
                lat: '45.943161',
                lng: '24.96676'
            },
            latLngString: '45.943161, 24.96676'
        },
        {
            name: 'Russia',
            iso2: 'ru',
            dialCode: '7',
            priority: 0,
            areaCodes: null,
            countryCode: 'RU',
            nativeName: 'Russia (Россия)',
            latLng: {
                lat: '61.52401',
                lng: '105.318756'
            },
            latLngString: '61.52401, 105.318756'
        },
        {
            name: 'Rwanda',
            iso2: 'rw',
            dialCode: '250',
            priority: 0,
            areaCodes: null,
            countryCode: 'RW',
            nativeName: 'Rwanda',
            latLng: {
                lat: '-1.940278',
                lng: '29.873888'
            },
            latLngString: '-1.940278, 29.873888'
        },
        {
            name: 'Saint Helena',
            iso2: 'sh',
            dialCode: '290',
            priority: 0,
            areaCodes: null,
            countryCode: 'SH',
            nativeName: 'Saint Helena',
            latLng: {
                lat: '-24.143474',
                lng: '-10.030696'
            },
            latLngString: '-24.143474, 10.030696'
        },
        {
            name: 'Saint Kitts and Nevis',
            iso2: 'kn',
            dialCode: '1',
            priority: 18,
            areaCodes: [
                '869'
            ],
            countryCode: 'KN',
            nativeName: 'Saint Kitts and Nevis',
            latLng: {
                lat: '17.357822',
                lng: '-62.782998'
            },
            latLngString: '17.357822, 62.782998'
        },
        {
            name: 'Saint Lucia',
            iso2: 'lc',
            dialCode: '1',
            priority: 19,
            areaCodes: [
                '758'
            ],
            countryCode: 'LC',
            nativeName: 'Saint Lucia',
            latLng: {
                lat: '13.909444',
                lng: '-60.978893'
            },
            latLngString: '13.909444, 60.978893'
        },
        {
            name: 'Saint Pierre and Miquelon',
            iso2: 'pm',
            dialCode: '508',
            priority: 0,
            areaCodes: null,
            countryCode: 'PM',
            nativeName: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
            latLng: {
                lat: '46.941936',
                lng: '-56.27111'
            },
            latLngString: '46.941936, 56.27111'
        },
        {
            name: 'Saint Vincent and the Grenadines',
            iso2: 'vc',
            dialCode: '1',
            priority: 20,
            areaCodes: [
                '784'
            ],
            countryCode: 'VC',
            nativeName: 'Saint Vincent and the Grenadines',
            latLng: {
                lat: '12.984305',
                lng: '-61.287228'
            },
            latLngString: '12.984305, 61.287228'
        },
        {
            name: 'Samoa',
            iso2: 'ws',
            dialCode: '685',
            priority: 0,
            areaCodes: null,
            countryCode: 'WS',
            nativeName: 'Samoa',
            latLng: {
                lat: '-13.759029',
                lng: '-172.104629'
            },
            latLngString: '-13.759029, 172.104629'
        },
        {
            name: 'San Marino',
            iso2: 'sm',
            dialCode: '378',
            priority: 0,
            areaCodes: null,
            countryCode: 'SM',
            nativeName: 'San Marino',
            latLng: {
                lat: '43.94236',
                lng: '12.457777'
            },
            latLngString: '43.94236, 12.457777'
        },
        {
            name: 'São Tomé and Príncipe',
            iso2: 'st',
            dialCode: '239',
            priority: 0,
            areaCodes: null,
            countryCode: 'ST',
            nativeName: 'São Tomé and Príncipe (São Tomé e Príncipe)',
            latLng: {
                lat: '0.18636',
                lng: '6.613081'
            },
            latLngString: '0.18636, 6.613081'
        },
        {
            name: 'Saudi Arabia',
            iso2: 'sa',
            dialCode: '966',
            priority: 0,
            areaCodes: null,
            countryCode: 'SA',
            nativeName: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
            latLng: {
                lat: '23.885942',
                lng: '45.079162'
            },
            latLngString: '23.885942, 45.079162'
        },
        {
            name: 'Senegal',
            iso2: 'sn',
            dialCode: '221',
            priority: 0,
            areaCodes: null,
            countryCode: 'SN',
            nativeName: 'Senegal (Sénégal)',
            latLng: {
                lat: '14.497401',
                lng: '-14.452362'
            },
            latLngString: '14.497401, 14.452362'
        },
        {
            name: 'Serbia',
            iso2: 'rs',
            dialCode: '381',
            priority: 0,
            areaCodes: null,
            countryCode: 'RS',
            nativeName: 'Serbia (Србија)',
            latLng: {
                lat: '44.016521',
                lng: '21.005859'
            },
            latLngString: '44.016521, 21.005859'
        },
        {
            name: 'Seychelles',
            iso2: 'sc',
            dialCode: '248',
            priority: 0,
            areaCodes: null,
            countryCode: 'SC',
            nativeName: 'Seychelles',
            latLng: {
                lat: '-4.679574',
                lng: '55.491977'
            },
            latLngString: '-4.679574, 55.491977'
        },
        {
            name: 'Sierra Leone',
            iso2: 'sl',
            dialCode: '232',
            priority: 0,
            areaCodes: null,
            countryCode: 'SL',
            nativeName: 'Sierra Leone',
            latLng: {
                lat: '8.460555',
                lng: '-11.779889'
            },
            latLngString: '8.460555, 11.779889'
        },
        {
            name: 'Singapore',
            iso2: 'sg',
            dialCode: '65',
            priority: 0,
            areaCodes: null,
            countryCode: 'SG',
            nativeName: 'Singapore',
            latLng: {
                lat: '1.352083',
                lng: '103.819836'
            },
            latLngString: '1.352083, 103.819836'
        },
        {
            name: 'Slovakia',
            iso2: 'sk',
            dialCode: '421',
            priority: 0,
            areaCodes: null,
            countryCode: 'SK',
            nativeName: 'Slovakia (Slovensko)',
            latLng: {
                lat: '48.669026',
                lng: '19.699024'
            },
            latLngString: '48.669026, 19.699024'
        },
        {
            name: 'Slovenia',
            iso2: 'si',
            dialCode: '386',
            priority: 0,
            areaCodes: null,
            countryCode: 'SI',
            nativeName: 'Slovenia (Slovenija)',
            latLng: {
                lat: '46.151241',
                lng: '14.995463'
            },
            latLngString: '46.151241, 14.995463'
        },
        {
            name: 'Solomon Islands',
            iso2: 'sb',
            dialCode: '677',
            priority: 0,
            areaCodes: null,
            countryCode: 'SB',
            nativeName: 'Solomon Islands',
            latLng: {
                lat: '-9.64571',
                lng: '160.156194'
            },
            latLngString: '-9.64571, 160.156194'
        },
        {
            name: 'Somalia',
            iso2: 'so',
            dialCode: '252',
            priority: 0,
            areaCodes: null,
            countryCode: 'SO',
            nativeName: 'Somalia (Soomaaliya)',
            latLng: {
                lat: '5.152149',
                lng: '46.199616'
            },
            latLngString: '5.152149, 46.199616'
        },
        {
            name: 'South Africa',
            iso2: 'za',
            dialCode: '27',
            priority: 0,
            areaCodes: null,
            countryCode: 'ZA',
            nativeName: 'South Africa',
            latLng: {
                lat: '-30.559482',
                lng: '22.937506'
            },
            latLngString: '-30.559482, 22.937506'
        },
        {
            name: 'South Korea',
            iso2: 'kr',
            dialCode: '82',
            priority: 0,
            areaCodes: null,
            countryCode: 'KR',
            nativeName: 'South Korea (대한민국)',
            latLng: {
                lat: '35.907757',
                lng: '127.766922'
            },
            latLngString: '35.907757, 127.766922'
        },
        {
            name: 'Spain',
            iso2: 'es',
            dialCode: '34',
            priority: 0,
            areaCodes: null,
            countryCode: 'ES',
            nativeName: 'Spain (España)',
            latLng: {
                lat: '40.463667',
                lng: '-3.74922'
            },
            latLngString: '40.463667, 3.74922'
        },
        {
            name: 'Sri Lanka',
            iso2: 'lk',
            dialCode: '94',
            priority: 0,
            areaCodes: null,
            countryCode: 'LK',
            nativeName: 'Sri Lanka (ශ්‍රී ලංකාව)',
            latLng: {
                lat: '7.873054',
                lng: '80.771797'
            },
            latLngString: '7.873054, 80.771797'
        },
        {
            name: 'Sudan',
            iso2: 'sd',
            dialCode: '249',
            priority: 0,
            areaCodes: null,
            countryCode: 'SD',
            nativeName: 'Sudan (‫السودان‬‎)',
            latLng: {
                lat: '12.862807',
                lng: '30.217636'
            },
            latLngString: '12.862807, 30.217636'
        },
        {
            name: 'Suriname',
            iso2: 'sr',
            dialCode: '597',
            priority: 0,
            areaCodes: null,
            countryCode: 'SR',
            nativeName: 'Suriname',
            latLng: {
                lat: '3.919305',
                lng: '-56.027783'
            },
            latLngString: '3.919305, 56.027783'
        },
        {
            name: 'Svalbard and Jan Mayen',
            iso2: 'sj',
            dialCode: '47',
            priority: 1,
            areaCodes: [
                '79'
            ],
            countryCode: 'SJ',
            nativeName: 'Svalbard and Jan Mayen',
            latLng: {
                lat: '77.553604',
                lng: '23.670272'
            },
            latLngString: '77.553604, 23.670272'
        },
        {
            name: 'Swaziland',
            iso2: 'sz',
            dialCode: '268',
            priority: 0,
            areaCodes: null,
            countryCode: 'SZ',
            nativeName: 'Swaziland',
            latLng: {
                lat: '-26.522503',
                lng: '31.465866'
            },
            latLngString: '-26.522503, 31.465866'
        },
        {
            name: 'Sweden',
            iso2: 'se',
            dialCode: '46',
            priority: 0,
            areaCodes: null,
            countryCode: 'SE',
            nativeName: 'Sweden (Sverige)',
            latLng: {
                lat: '60.128161',
                lng: '18.643501'
            },
            latLngString: '60.128161, 18.643501'
        },
        {
            name: 'Switzerland',
            iso2: 'ch',
            dialCode: '41',
            priority: 0,
            areaCodes: null,
            countryCode: 'CH',
            nativeName: 'Switzerland (Schweiz)',
            latLng: {
                lat: '46.818188',
                lng: '8.227512'
            },
            latLngString: '46.818188, 8.227512'
        },
        {
            name: 'Syria',
            iso2: 'sy',
            dialCode: '963',
            priority: 0,
            areaCodes: null,
            countryCode: 'SY',
            nativeName: 'Syria (‫سوريا‬‎)',
            latLng: {
                lat: '34.802075',
                lng: '38.996815'
            },
            latLngString: '34.802075, 38.996815'
        },
        {
            name: 'Taiwan',
            iso2: 'tw',
            dialCode: '886',
            priority: 0,
            areaCodes: null,
            countryCode: 'TW',
            nativeName: 'Taiwan (台灣)',
            latLng: {
                lat: '23.69781',
                lng: '120.960515'
            },
            latLngString: '23.69781, 120.960515'
        },
        {
            name: 'Tajikistan',
            iso2: 'tj',
            dialCode: '992',
            priority: 0,
            areaCodes: null,
            countryCode: 'TJ',
            nativeName: 'Tajikistan',
            latLng: {
                lat: '38.861034',
                lng: '71.276093'
            },
            latLngString: '38.861034, 71.276093'
        },
        {
            name: 'Tanzania',
            iso2: 'tz',
            dialCode: '255',
            priority: 0,
            areaCodes: null,
            countryCode: 'TZ',
            nativeName: 'Tanzania',
            latLng: {
                lat: '-6.369028',
                lng: '34.888822'
            },
            latLngString: '-6.369028, 34.888822'
        },
        {
            name: 'Thailand',
            iso2: 'th',
            dialCode: '66',
            priority: 0,
            areaCodes: null,
            countryCode: 'TH',
            nativeName: 'Thailand (ไทย)',
            latLng: {
                lat: '15.870032',
                lng: '100.992541'
            },
            latLngString: '15.870032, 100.992541'
        },
        {
            name: 'Timor-Leste',
            iso2: 'tl',
            dialCode: '670',
            priority: 0,
            areaCodes: null,
            countryCode: 'TL',
            nativeName: 'Timor-Leste',
            latLng: {
                lat: '-8.874217',
                lng: '125.727539'
            },
            latLngString: '-8.874217, 125.727539'
        },
        {
            name: 'Togo',
            iso2: 'tg',
            dialCode: '228',
            priority: 0,
            areaCodes: null,
            countryCode: 'TG',
            nativeName: 'Togo',
            latLng: {
                lat: '8.619543',
                lng: '0.824782'
            },
            latLngString: '8.619543, 0.824782'
        },
        {
            name: 'Tokelau',
            iso2: 'tk',
            dialCode: '690',
            priority: 0,
            areaCodes: null,
            countryCode: 'TK',
            nativeName: 'Tokelau',
            latLng: {
                lat: '-8.967363',
                lng: '-171.855881'
            },
            latLngString: '-8.967363, 171.855881'
        },
        {
            name: 'Tonga',
            iso2: 'to',
            dialCode: '676',
            priority: 0,
            areaCodes: null,
            countryCode: 'TO',
            nativeName: 'Tonga',
            latLng: {
                lat: '-21.178986',
                lng: '-175.198242'
            },
            latLngString: '-21.178986, 175.198242'
        },
        {
            name: 'Trinidad and Tobago',
            iso2: 'tt',
            dialCode: '1',
            priority: 22,
            areaCodes: [
                '868'
            ],
            countryCode: 'TT',
            nativeName: 'Trinidad and Tobago',
            latLng: {
                lat: '10.691803',
                lng: '-61.222503'
            },
            latLngString: '10.691803, 61.222503'
        },
        {
            name: 'Tunisia',
            iso2: 'tn',
            dialCode: '216',
            priority: 0,
            areaCodes: null,
            countryCode: 'TN',
            nativeName: 'Tunisia (‫تونس‬‎)',
            latLng: {
                lat: '33.886917',
                lng: '9.537499'
            },
            latLngString: '33.886917, 9.537499'
        },
        {
            name: 'Turkey',
            iso2: 'tr',
            dialCode: '90',
            priority: 0,
            areaCodes: null,
            countryCode: 'TR',
            nativeName: 'Turkey (Türkiye)',
            latLng: {
                lat: '38.963745',
                lng: '35.243322'
            },
            latLngString: '38.963745, 35.243322'
        },
        {
            name: 'Turkmenistan',
            iso2: 'tm',
            dialCode: '993',
            priority: 0,
            areaCodes: null,
            countryCode: 'TM',
            nativeName: 'Turkmenistan',
            latLng: {
                lat: '38.969719',
                lng: '59.556278'
            },
            latLngString: '38.969719, 59.556278'
        },
        {
            name: 'Turks and Caicos Islands',
            iso2: 'tc',
            dialCode: '1',
            priority: 23,
            areaCodes: [
                '649'
            ],
            countryCode: 'TC',
            nativeName: 'Turks and Caicos Islands',
            latLng: {
                lat: '21.694025',
                lng: '-71.797928'
            },
            latLngString: '21.694025, 71.797928'
        },
        {
            name: 'Tuvalu',
            iso2: 'tv',
            dialCode: '688',
            priority: 0,
            areaCodes: null,
            countryCode: 'TV',
            nativeName: 'Tuvalu',
            latLng: {
                lat: '-7.109535',
                lng: '177.64933'
            },
            latLngString: '-7.109535, 177.64933'
        },
        {
            name: 'U.S. Virgin Islands',
            iso2: 'vi',
            dialCode: '1',
            priority: 24,
            areaCodes: [
                '340'
            ],
            countryCode: 'VI',
            nativeName: 'U.S. Virgin Islands',
            latLng: {
                lat: '18.335765',
                lng: '-64.896335'
            },
            latLngString: '18.335765, 64.896335'
        },
        {
            name: 'Uganda',
            iso2: 'ug',
            dialCode: '256',
            priority: 0,
            areaCodes: null,
            countryCode: 'UG',
            nativeName: 'Uganda',
            latLng: {
                lat: '1.373333',
                lng: '32.290275'
            },
            latLngString: '1.373333, 32.290275'
        },
        {
            name: 'Ukraine',
            iso2: 'ua',
            dialCode: '380',
            priority: 0,
            areaCodes: null,
            countryCode: 'UA',
            nativeName: 'Ukraine (Україна)',
            latLng: {
                lat: '48.379433',
                lng: '31.16558'
            },
            latLngString: '48.379433, 31.16558'
        },
        {
            name: 'United Arab Emirates',
            iso2: 'ae',
            dialCode: '971',
            priority: 0,
            areaCodes: null,
            countryCode: 'AE',
            nativeName: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
            latLng: {
                lat: '23.424076',
                lng: '53.847818'
            },
            latLngString: '23.424076, 53.847818'
        },
        {
            name: 'United Kingdom',
            iso2: 'gb',
            dialCode: '44',
            priority: 0,
            areaCodes: null,
            countryCode: 'GB',
            nativeName: 'United Kingdom',
            latLng: {
                lat: '55.378051',
                lng: '-3.435973'
            },
            latLngString: '55.378051, 3.435973'
        },
        {
            name: 'United States',
            iso2: 'us',
            dialCode: '1',
            priority: 0,
            areaCodes: null,
            countryCode: 'US',
            nativeName: 'United States',
            latLng: {
                lat: '37.09024',
                lng: '-95.712891'
            },
            latLngString: '37.09024, 95.712891'
        },
        {
            name: 'Uruguay',
            iso2: 'uy',
            dialCode: '598',
            priority: 0,
            areaCodes: null,
            countryCode: 'UY',
            nativeName: 'Uruguay',
            latLng: {
                lat: '-32.522779',
                lng: '-55.765835'
            },
            latLngString: '-32.522779, 55.765835'
        },
        {
            name: 'Uzbekistan',
            iso2: 'uz',
            dialCode: '998',
            priority: 0,
            areaCodes: null,
            countryCode: 'UZ',
            nativeName: 'Uzbekistan (Oʻzbekiston)',
            latLng: {
                lat: '41.377491',
                lng: '64.585262'
            },
            latLngString: '41.377491, 64.585262'
        },
        {
            name: 'Vanuatu',
            iso2: 'vu',
            dialCode: '678',
            priority: 0,
            areaCodes: null,
            countryCode: 'VU',
            nativeName: 'Vanuatu',
            latLng: {
                lat: '-15.376706',
                lng: '166.959158'
            },
            latLngString: '-15.376706, 166.959158'
        },
        {
            name: 'Vatican City',
            iso2: 'va',
            dialCode: '39',
            priority: 1,
            areaCodes: [
                '06698'
            ],
            countryCode: 'VA',
            nativeName: 'Vatican City (Città del Vaticano)',
            latLng: {
                lat: '41.902916',
                lng: '12.453389'
            },
            latLngString: '41.902916, 12.453389'
        },
        {
            name: 'Venezuela',
            iso2: 've',
            dialCode: '58',
            priority: 0,
            areaCodes: null,
            countryCode: 'VE',
            nativeName: 'Venezuela',
            latLng: {
                lat: '6.42375',
                lng: '-66.58973'
            },
            latLngString: '6.42375, 66.58973'
        },
        {
            name: 'Vietnam',
            iso2: 'vn',
            dialCode: '84',
            priority: 0,
            areaCodes: null,
            countryCode: 'VN',
            nativeName: 'Vietnam (Việt Nam)',
            latLng: {
                lat: '14.058324',
                lng: '108.277199'
            },
            latLngString: '14.058324, 108.277199'
        },
        {
            name: 'Wallis and Futuna',
            iso2: 'wf',
            dialCode: '681',
            priority: 0,
            areaCodes: null,
            countryCode: 'WF',
            nativeName: 'Wallis and Futuna (Wallis-et-Futuna)',
            latLng: {
                lat: '-13.768752',
                lng: '-177.156097'
            },
            latLngString: '-13.768752, 177.156097'
        },
        {
            name: 'Western Sahara',
            iso2: 'eh',
            dialCode: '212',
            priority: 1,
            areaCodes: [
                '5288',
                '5289'
            ],
            countryCode: 'EH',
            nativeName: 'Western Sahara (‫الصحراء الغربية‬‎)',
            latLng: {
                lat: '24.215527',
                lng: '-12.885834'
            },
            latLngString: '24.215527, 12.885834'
        },
        {
            name: 'Yemen',
            iso2: 'ye',
            dialCode: '967',
            priority: 0,
            areaCodes: null,
            countryCode: 'YE',
            nativeName: 'Yemen (‫اليمن‬‎)',
            latLng: {
                lat: '15.552727',
                lng: '48.516388'
            },
            latLngString: '15.552727, 48.516388'
        },
        {
            name: 'Zambia',
            iso2: 'zm',
            dialCode: '260',
            priority: 0,
            areaCodes: null,
            countryCode: 'ZM',
            nativeName: 'Zambia',
            latLng: {
                lat: '-13.133897',
                lng: '27.849332'
            },
            latLngString: '-13.133897, 27.849332'
        },
        {
            name: 'Zimbabwe',
            iso2: 'zw',
            dialCode: '263',
            priority: 0,
            areaCodes: null,
            countryCode: 'ZW',
            nativeName: 'Zimbabwe',
            latLng: {
                lat: '-19.015438',
                lng: '29.154857'
            },
            latLngString: '-19.015438, 29.154857'
        }
    ];

    country: Country;

    constructor() {
        this.country = this.allCountries[0];
    }

    setCountry(country: Country) {
        this.country = country;
    }

    getCountry() {
        return this.country;
    }

    async getCurrentLocation(): Promise<LatLng> {
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(location => {
                console.log('Latitude: ' + location.coords.latitude + ', Longitude: ' + location.coords.longitude)
                resolve({lat: location.coords.latitude, lng: location.coords.longitude});
            });
        });
    }

    async geocodeLocation(): Promise<Country> {
        return new Promise(resolve => {
            // this.getCurrentLocation().then(latLng => {
            //     console.log(latLng);
            //     const country = this.allCountries.filter(x => x.latLng.lat === latLng.lat.toString()
            //         && x.latLng.lng === latLng.lng.toString())[0];

            //         console.log('coutnry', country)
            //     resolve(country);
            // });
            const country = this.allCountries[142];
            resolve(country);
        });
    }

    getAllCountries() {
        return this.allCountries;
    }
}
