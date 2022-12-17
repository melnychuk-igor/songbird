import '../index.html';
import '../scss/style.scss';
import menu from './modules/menu.js';

import rightAnswer from '../sounds/right-answer.mp3';
import wrongAnswer from '../sounds/wrong-answer.mp3';

window.addEventListener('DOMContentLoaded', () => {
  menu();

  // start bird data
  let currentLang = localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : 'ukr';
  let birdsData;

  function changeDataBirds() {
    birdsData = [
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Ворон' : 'Crow',
          species: 'Corvus corax',
          description:
            currentLang === 'ukr'
              ? "Ворон - великий птах. Довжина тіла досягає 70 сантиметрів, розмах крил – до півтора метра. Ворони населяють околиці Тауера. В Англії існує повір'я, що в день, коли чорні ворони відлетять від Тауера, монархія впаде."
              : 'Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.',
          image:
            'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Журавель' : 'Crane',
          species: 'Grus grus',
          description:
            currentLang === 'ukr'
              ? 'Звуки, що видаються журавлем, схожі на дзвінке "кур-ли - кур-ли". Журавлі найчастіше співають дуетом – один птах починає заспівати зі складу «кур», а другий підхоплює «ли». Якщо птах співає один, він видає лише звук «кур».'
              : 'The sounds made by the crane are similar to the voiced “kur-ly - kur-ly”. Cranes most often sing in a duet - one bird begins the song with the syllable "kur", and the second picks up "ly". If a bird sings alone, then it makes only the sound of “chickens”.',
          image:
            'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Ластівка' : 'Martin',
          species: 'Delichon urbicum',
          description:
            currentLang === 'ukr'
              ? 'Для ластівок характерно тихе щебетання. Пісні ластівок не змовкають протягом усього літа. Дослідники розрізняють у птахів до 6 звуків, що щебечуть: «віт», «ві-віт», «чівіт», «чиривіт» і т.п. Ластівки люблять співати дуетом.'
              : 'Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.',
          image:
            'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Козодой' : 'Nightjar',
          species: 'Caprimulgus europaeus',
          description:
            currentLang === 'ukr'
              ? 'Козодой – непримітний птах, відомий завдяки своєму голосу. Пісня козодоя звучить як монотонна трель схожа на торохтіння мотоцикла. Таке деренчання чутно від заходу сонця до світанку, його тональність, частота і гучність змінюються.'
              : 'Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.',
          image:
            'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Зозуля' : 'Cuckoo',
          species: 'Cuculus canorus',
          description:
            currentLang === 'ukr'
              ? 'Зозулю назвали так через особливості її пісень. Дзвінке «ку-ку» не сплутати ні з яким іншим птахом. Зозулі не будують гнізда, їхнє потомство вирощують інші види пернатих, яким зозулі підкидають свої яйця.'
              : 'The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.',
          image:
            'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Синица' : 'Tit',
          species: 'Parus major',
          description:
            currentLang === 'ukr'
              ? 'У щебетанні синиць розрізняють понад 40 різних звукових поєднань. Співають вони практично цілий рік, трохи затихаючи лише взимку. Синиці справжні санітари лісу. Одна пара синиць у період гніздування оберігає від шкідників десятки дерев.'
              : 'More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.',
          image:
            'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
        },
      ],
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Горобець' : 'Sparrow',
          species: 'Passer domesticus',
          description:
            currentLang === 'ukr'
              ? 'Горобці є найвідомішими і впізнаваними пернатими. Їх легко впізнати по строкатому оперенню і задерикуватому цвіріньканню. Горобці відносяться до синатропного вигляду - вони селяться поблизу людського житла.'
              : 'Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.',
          image:
            'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Грач' : 'Rook',
          species: 'Corvus frugilegus',
          description:
            currentLang === 'ukr'
              ? 'Граки дуже розумні та кмітливі птахи. За допомогою дзьоба вони створюють і використовують найпростіші знаряддя. У граків розвинений рефлекс звуки трактора. Почувши «тарахтіння», вони летять на звук – трактор оре землю, отже, тут багато корму.'
              : 'Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing "rattling", they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.',
          image:
            'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Галка' : 'Jackdaw',
          species: 'Coloeus monedula',
          description:
            currentLang === 'ukr'
              ? "Слово «галка» походить із старослов'янської мови та перекладається як «чорна». Цим словом часто називають воронів чи інших чорних птахів. Латинську назву галки monedula пов'язують зі словами монета за любов птаха до блискучих і яскравих речей."
              : 'The word "jackdaw" comes from the Old Slavonic language and is translated as "black". This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw "monedula" is associated with the words coin for the bird\'s love for shiny and bright things.',
          image:
            'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Співочий дрізд' : 'Song thrush',
          species: 'Turdus philomelos',
          description:
            currentLang === 'ukr'
              ? "Дрізд — найкращий співак із загону гороб'їних. Пісня складається лише з гарних звучних свистів та коротких трелів. Найчастіше її можна почути в ранковий та вечірній час. Співають дрізди протягом усього періоду гніздування."
              : 'Drozd is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.',
          image:
            'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Сорока' : 'Magpie',
          species: 'Pica pica',
          description:
            currentLang === 'ukr'
              ? 'Сорока дуже працьовитий птах. Вона будує до восьми гнізд, а потім вибирає з них найкраще. Вхід у гніздо сорок завжди звернений на південь, щоб у житло було тепліше. Сороки є єдиними птахами, які впізнають себе у дзеркалі.'
              : 'Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.',
          image:
            'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Сойка' : 'Jay',
          species: 'Garrulus glandarius',
          description:
            currentLang === 'ukr'
              ? 'Коли сойка хвилюється, чубчик на її голові скуштує. Птах намагається створити жахливе видовище. Сойки вміють імітувати голоси інших птахів, тварин та звуки, які створює людина. На зиму вони роблять великі запаси жолудів та горіхів.'
              : 'When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.',
          image:
            'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
        },
      ],
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Зяблік' : 'Finch',
          species: 'Fringilla coelebs',
          description:
            currentLang === 'ukr'
              ? "У дикій природі налічується 450 видів зябликів. Взимку зяблики ведуть зграйний спосіб життя. Іноді у їхніх сім'ях можна побачити горобців. Співають зяблики навесні, з настанням шлюбного періоду. Їх спів – це заливні багатохвилинні рулади."
              : 'There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.',
          image:
            'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Клист' : 'Crossbill',
          species: 'Loxia curvirostra',
          description:
            currentLang === 'ukr'
              ? 'Клєстів називають «різдвяними» птахами. У природних умовах вони дають потомство взимку – у січні. Ці птахи утеплюють свої гнізда мохом та шерстю тварин, тому пташенятам не холодно. У пошуках шишок клісти можуть відлітати за 3500 км. від гнізда.'
              : 'Crossbills are called "Christmas" birds. Under natural conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.',
          image:
            'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Горлиця' : 'Dove',
          species: 'Streptopelia turtur',
          description:
            currentLang === 'ukr'
              ? 'Горлиця мешкає у змішаних та широколистяних лісах, а також у міських парках та селищах. Птахи часто вибирають місця життя поряд із людиною та легко звикають до людей. Завдяки мелодійному приємному співу горлиць часто розводять у домашніх умовах.'
              : 'The dove lives in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.',
          image:
            'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Дятел' : 'Woodpecker',
          species: 'Dendrocopos major',
          description:
            currentLang === 'ukr'
              ? 'Дятел – помітний і галасливий птах, часто живе поруч із людиною. З середини січня до кінця червня можна почути «барабанний дріб» дятлів – трель від вібрації гілок під швидкими ударами дзьоба птаха. У хорошу погоду дріб чути у радіусі 1,5 км.'
              : 'The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the "drum roll" of woodpeckers - a trill from the vibration of branches under the quick beats of the bird\'s beak. In good weather, the shot can be heard within a radius of 1.5 km.',
          image:
            'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Удод' : 'Hoopoe',
          species: 'Upupa epops',
          description:
            currentLang === 'ukr'
              ? 'Удоди вважають за краще жити на відкритих ландшафтах з окремими деревами або гаями. Найбільш зручними для птиці є лісостеп та савана. Удод може вибирати місця проживання поруч із людиною: пасовища, виноградники, фруктові сади.'
              : 'Hoopoe prefer to live in open landscapes with individual trees or groves. The most convenient for the bird are the forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.',
          image:
            'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Стриж' : 'Swift',
          species: 'Apus apus',
          description:
            currentLang === 'ukr'
              ? 'Стрижа можна побачити практично у кожному куточку планети. Вони живуть як у лісових зонах, і на відкритих місцевостях. Живуть стрижі великими зграями. Великі колонії цих птахів можна побачити у містах чи прибережних скелях.'
              : 'Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
          image:
            'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
        },
      ],
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Жайворонок' : 'Lark',
          species: 'Alauda arvensis',
          description:
            currentLang === 'ukr'
              ? 'Жайворонки - перелітні птахи. З початку вересня вони відлітають на південь. Повертаються вони на початку березня, незалежно від того, зійшов сніг чи ні. Після прильоту жайворонків визначали настання весни і пору, коли час орати землю.'
              : 'Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.',
          image:
            'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Соловей' : 'Nightingale',
          species: 'Luscinia luscinia',
          description:
            currentLang === 'ukr'
              ? "Солов'ї співають з початку травня до кінця літа. Кожна пісня соловейка складається з 12 елементів, що повторюються, які ще називають колінами. Окрім власних трелів, солов'ї легко і добре переймають співи інших птахів."
              : 'Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
          image:
            'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Шпак' : 'Starling',
          species: 'Sturnus vulgaris',
          description:
            currentLang === 'ukr'
              ? 'Шпаки - перелітні птахи. Синхронний переліт великих зграй шпаків називається мурмурацією. Це гарне явище, що зачаровує, - безліч птахів ніби танцюють у повітрі, утворюючи хитромудрі фігури, які зменшуються і збільшуються в небі.'
              : 'Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.',
          image:
            'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Іволга' : 'Oriole',
          species: 'Oriolus oriolus',
          description:
            currentLang === 'ukr'
              ? 'Мелодічність голосу іволги порівнюють із звучанням флейти. Людині складно розглянути іволгу, оскільки вона мешкає високо на деревах. Іволга не тільки дуже гарний, але й корисний птах. Вона знищує отруйних гусениць, яких не поїдають інші птахи.'
              : "The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.",
          image:
            'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Омелюх' : 'Waxwing',
          species: 'Bombycilla garrulus',
          description:
            currentLang === 'ukr'
              ? 'У омелюхів дуже чіпкі кігтики, що допомагає птаху утримуватися на гілках і скльовувати ягоди, які найважче дістати. У період догляду самець пропонує самці ягоду або інше частування. Якщо самка його приймає, птахи створюють пару.'
              : 'The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.',
          image:
            'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Щиглик' : 'Goldfinch',
          species: 'Carduelis carduelis',
          description:
            currentLang === 'ukr'
              ? 'Щиглики співають красиво та мелодійно. І в природі, і в неволі вони щебечуть майже цілий рік. У співі щиглика розрізняють понад 20 переливчастих трелів. Щиглики звикають до людей і навіть можуть повернутися до господаря після того, як їх випустили на волю.'
              : 'Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.',
          image:
            'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
        },
      ],
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Орел' : 'Eagle',
          species: 'Aquila nipalensis',
          description:
            currentLang === 'ukr'
              ? 'У давнину орел був символом сонця. Орли часто ширяють над землею, при цьому швидкість їх переміщення може досягати 240 км/год. Ілюзія повільного руху відбувається через висоту польоту – понад 700 метрів.'
              : 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km / h. The illusion of slow movement is due to the flight altitude - more than 700 meters.',
          image:
            'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Шуліка' : 'Kite',
          species: 'Milvus migrans',
          description:
            currentLang === 'ukr'
              ? 'Шуліки – великі хижаки, заввишки вони досягають близько півметра, а вага дорослих особин сягає 1 кг. Крила вузькі та довгі, їх розмах становить 1,5 м. Коршуни часто гніздяться великими зграями і навіть утворюють великі колонії.'
              : 'Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.',
          image:
            'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Лунь' : 'Lun',
          species: 'Circus cyaneus',
          description:
            currentLang === 'ukr'
              ? "Лунь – це невеликий сокіл. Харчується в основному мишоподібними гризунами, основа його раціону - полівки, хом'яки, миші. Оперення луня може бути попелясто-сірим. З таким птахом пов'язане порівняння «сивий, як лунь»."
              : 'Lun is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison "gray-haired like a harrier" is associated with such a bird.',
          image:
            'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Сокіл' : 'Falcon',
          species: 'Falco peregrinus',
          description:
            currentLang === 'ukr'
              ? 'Латинська назва сокола Falco походить від слова серп через серповидну форму крил. Довгі та широкі крила дозволяють соколу високо підніматися у небо та вільно парити. Швидкість польоту сокола сягає 280-320 кілометрів на годину.'
              : 'The Latin name of the falcon Falco comes from the word "sickle" because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.',
          image:
            'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Яструб' : 'Hawk',
          species: 'Accipiter gentilis',
          description:
            currentLang === 'ukr'
              ? "Для всіх яструбів характерні широкі та короткі крила. Ще одна відмітна ознака – білі «брови» над очима. Слов'янські дружинники розміщували зображення яструба на своїх прапорах як символ відваги, мощі та безжалісності до ворогів."
              : 'All hawks are characterized by wide and short wings. Another distinguishing feature is the white "eyebrows" above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.',
          image:
            'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Пугач' : 'Owl',
          species: 'Bubo bubo',
          description:
            currentLang === 'ukr'
              ? 'Політ пугача безшумний, зір дуже гострий. Ці особливості роблять птаха неперевершеним нічним мисливцем. У пугача немає природних ворогів, жоден звір не полює на дорослих птахів. А ось на пташенят нападають лисиці та вовки.'
              : 'The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.',
          image:
            'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
        },
      ],
      [
        {
          id: 1,
          name: currentLang === 'ukr' ? 'Альбатрос' : 'Albatross',
          species: 'Diomedea exulans',
          description:
            currentLang === 'ukr'
              ? 'Альбатрос - найбільший літаючий птах у світі. Розмах крил сягає три з половиною, вага – десять кілограмів. Більшість життя альбатроси проводять у повітрі, покриваючи над океанськими просторами величезні відстані.'
              : 'Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.',
          image:
            'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
        },
        {
          id: 2,
          name: currentLang === 'ukr' ? 'Сула' : 'Gannet',
          species: 'Sula nebouxii',
          description:
            currentLang === 'ukr'
              ? 'Особливістю голубоногої сулі є не лише насичений яскраво-синій колір лапок, але ще й той факт, що вони дуже теплі. У той час як інші види птахів гріють кладки своїм тілом, блакитнога сула робить це за допомогою лапок.'
              : 'A feature of the blue-footed booby is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.',
          image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
        },
        {
          id: 3,
          name: currentLang === 'ukr' ? 'Буревісник' : 'Petrel',
          species: 'Puffinus griseus',
          description:
            currentLang === 'ukr'
              ? "Розміри буревісникових різні. Найменші з них у довжину становлять до 25 см, найбільші - до 1 м, при розмаху крил близько 2 м. Існує повір'я, що поява буревісника в повітрі віщує бурю, про що говорить сама назва птаха."
              : 'The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.',
          image:
            'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
        },
        {
          id: 4,
          name: currentLang === 'ukr' ? 'Пелікан' : 'Pelican',
          species: 'Pelecanus',
          description:
            currentLang === 'ukr'
              ? 'Пелікани - жителі морів та річок. Ходять вони незграбно, але добре літають та плавають. Харчуються в основному рибою, влаштовують колективні полювання - вишикувавшись півколом ляскають по воді крилами і дзьобами і витісняють налякану рибу на мілководді. Пелікани - жителі морів і річок. Ходять вони незграбно, але добре літають та плавають. Харчуються здебільшого рибою, влаштовують колективні полювання — вишикувавшись півколом ляскають по воді крилами і дзьобами і витісняють налякану рибу на мілководді.'
              : 'Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.',
          image: 'assets/img/pelican.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
        },
        {
          id: 5,
          name: currentLang === 'ukr' ? 'Пінгвін' : 'Penguin',
          species: 'Aptenodytes forsteri',
          description:
            currentLang === 'ukr'
              ? 'Самець імператорського пінгвіна досягає зросту 130 см, його маса може наближатися до 50 кг. З усіх сучасних пінгвінів цей вид найбільший. Харчування пінгвіна складається з риби, кальмарів та криля. Полюють птахи в океані великими групами.'
              : "The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",
          image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
        },
        {
          id: 6,
          name: currentLang === 'ukr' ? 'Чайка' : 'Gull',
          species: 'Larus argentatus',
          description:
            currentLang === 'ukr'
              ? "Чайки населяють береги морів, озер, річок, водоймищ, боліт, часто гніздяться на островах. З кінця минулого століття чайки почали з'являтися у великих містах, де влаштовують гнізда на дахах будівель. Усі чайки ведуть колоніальний спосіб життя."
              : 'Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.',
          image:
            'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
          audio:
            'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
        },
      ],
    ];
  }

  changeDataBirds();
  // end bird data

  const ukraine = document.querySelector('.header__lang-ukraine');
  const english = document.querySelector('.header__lang-english');
  const menuLink = document.querySelectorAll('.header__menu-link');
  const footerText = document.querySelector('.footer__text');
  const paginationItems = document.querySelectorAll('.game__pagination-item');
  const gameScore = document.querySelector('.game__score');
  let lastItem;

  if (currentLang === 'eng') {
    ukraine.classList.remove('header__btn-lang_active');
    english.classList.add('header__btn-lang_active');
  } else {
    english.classList.remove('header__btn-lang_active');
    ukraine.classList.add('header__btn-lang_active');
  }

  // start change content page Gallery
  function changeGalleryContent() {
    const galleryItemTexts = document.querySelectorAll('.gallery__item-texts');
    let count = 0;

    galleryItemTexts.forEach((item) => {
      item.innerHTML = '';
    });

    birdsData.forEach((item) => {
      item.forEach((innerItem) => {
        galleryItemTexts[count].innerHTML = `
            <h3 class="gallery__item-title">${innerItem.name}</h3>
            <p class="gallery__item-kind">${innerItem.species}</p>
            <p class="gallery__item-text">${innerItem.description}</p>
          `;
        count = ++count;
      });
    });
  }
  // end change content page Gallery

  // start change content page Result
  function changeResultContent() {
    const resultTitle = document.querySelector('.result__title');
    const resultTextPart1 = document.querySelector('.result__text-part-1');
    const resultTextPart2 = document.querySelector('.result__text-part-2');
    const resultBtn = document.querySelector('.result__btn a');

    resultTitle.textContent =
      currentLang === 'ukr' ? 'Вітаємо!' : 'Congratulations!';
    resultTextPart1.textContent =
      currentLang === 'ukr'
        ? 'Ви пройшли вікторину та набрали'
        : 'You passed the quiz and scored';
    resultTextPart2.textContent =
      currentLang === 'ukr'
        ? 'із 30 можливих балів.'
        : 'out of 30 possible points.';
    resultBtn.textContent =
      currentLang === 'ukr' ? 'Спробувати ще раз' : 'To try one more time';
  }
  // end change content page Result

  // start change lang
  function changeLang() {
    menuLink.forEach((item, i) => {
      switch (i) {
        case 0:
          item.textContent = currentLang === 'ukr' ? 'Головна' : 'Home';
          break;
        case 1:
          item.textContent = currentLang === 'ukr' ? 'Вікторина' : 'Quiz';
          break;
        case 2:
          item.textContent = currentLang === 'ukr' ? 'Галерея' : 'Gallery';
          break;
      }
    });

    footerText.textContent =
      currentLang === 'ukr'
        ? 'Copyright © Ігор Мельничук 2022. Усі права захищені.'
        : 'Copyright © Igor Melnichuk 2022. All rights reserved.';

    if (document.querySelector('.intro__title')) {
      const introTitle = document.querySelector('.intro__title');
      const introText = document.querySelector('.intro__text');
      const introListItem = document.querySelectorAll('.intro__list-item');
      const introBtn = document.querySelector('.intro__btn a');

      introTitle.textContent =
        currentLang === 'ukr'
          ? 'Ласкаво просимо до вікторини Songbird'
          : 'Welcome to Songbird Quiz';
      introText.textContent =
        currentLang === 'ukr'
          ? 'Вікторина Songbird – це можливість дізнатися щось нове про птахів та цікаво провести час. Вам треба визначитися за звуком, що це за птах. Суть така:'
          : 'The Songbird quiz is an opportunity to learn something new about birds and have fun. You need to decide by the sound what kind of bird it is. The gist is this:';

      introListItem.forEach((item, i) => {
        switch (i) {
          case 0:
            item.textContent =
              currentLang === 'ukr'
                ? 'Послухайте аудіо.'
                : 'Listen to the audio.';
            break;
          case 1:
            item.textContent =
              currentLang === 'ukr'
                ? 'Спробуйте по аудіо вгадати птаха із запропонованих нижче варіантів.'
                : 'Try to guess the bird from the options below by audio.';
            break;
          case 2:
            item.textContent =
              currentLang === 'ukr'
                ? 'Якщо вгадали з першого разу, то отримаєте максимум – 5 очок за запитання. Якщо не вгадали, то з кожною наступною спробою кількість очок за це питання зменшується на 1.'
                : 'If you guessed right the first time, you will get a maximum of 5 points per question. If you didn’t guess correctly, then with each next attempt, the number of points for this question decreases by 1.';
            break;
          case 3:
            item.textContent =
              currentLang === 'ukr'
                ? 'Перейдіть до наступного питання, як тільки ви знайшли правильну відповідь.'
                : 'Move on to the next question once you have found the correct answer.';
            break;
          case 4:
            item.textContent =
              currentLang === 'ukr'
                ? 'Наприкінці веркторини ви зможете дізнатися про результати поточної гри.'
                : 'At the end of the quiz, you will be able to find out the results of the current game.';
            break;
        }
      });
      introBtn.textContent =
        currentLang === 'ukr' ? 'Почати гру' : 'Start game';
    } else if (document.location.href.includes('game')) {
      const instructionText = document.querySelector('.instruction__text');
      const gameBtn = document.querySelector('.game__btn button');

      paginationItems.forEach((item, i) => {
        switch (i) {
          case 0:
            item.textContent = currentLang === 'ukr' ? 'Розминка' : 'Warm up';
            break;
          case 1:
            item.textContent =
              currentLang === 'ukr' ? "Гороб'їні" : 'Passerines';
            break;
          case 2:
            item.textContent =
              currentLang === 'ukr' ? 'Лісові птахи' : 'Forest birds';
            break;
          case 3:
            item.textContent =
              currentLang === 'ukr' ? 'Співачі птахи' : 'Song birds';
            break;
          case 4:
            item.textContent =
              currentLang === 'ukr' ? 'Хижі птахи' : 'Predator birds';
            break;
          case 5:
            item.textContent =
              currentLang === 'ukr' ? 'Морські птахи' : 'Sea birds';
            break;
        }
      });

      gameScore.textContent = currentLang === 'ukr' ? 'Рахунок:' : 'Score:';
      instructionText.innerHTML =
        currentLang === 'ukr'
          ? 'Послухайте програвач.<br />Виберіть птаха зі списку.'
          : 'Listen to the player.<br />Select a bird from the list.';
      gameBtn.textContent =
        currentLang === 'ukr' ? 'Наступний рівень' : 'Next level';
    }
    if (document.location.href.includes('gallery')) {
      changeGalleryContent();
    }
    if (document.location.href.includes('result')) {
      const resultScore = document.querySelector('.result__score');
      resultScore.textContent = localStorage.getItem('score');
      changeResultContent();
    }
  }

  changeLang();
  // end change lang

  const scoreNum = document.querySelector('.game__score-num');
  const currentAnimalImg = document.querySelector('.game__current-animal-img');
  const currentAnimalTitle = document.querySelector(
    '.game__current-animal-title'
  );
  const gameItem = document.querySelectorAll('.game__item');
  const instruction = document.querySelector('.instruction');
  const descriptionAnimal = document.querySelector('.description-animal');
  const descriptionAnimalTitle = document.querySelector(
    '.description-animal__title'
  );
  const descriptionAnimalKind = document.querySelector(
    '.description-animal__kind'
  );
  const descriptionAnimalImg = document.querySelector(
    '.description-animal__img'
  );
  const descriptionAnimalText = document.querySelector(
    '.description-animal__text'
  );
  const gameBtn = document.querySelector('.game__btn');
  const tracks = [];
  let slider = document.querySelectorAll('.strip-music');
  let rightNum;

  function randomNum() {
    rightNum = Math.floor(Math.random() * 6);
  }

  randomNum();

  let nextLevel = false;
  let score = 0;
  let points = 5;
  let stage = 0;

  function createGameItem() {
    gameItem.forEach((item, i) => {
      item.textContent = birdsData[stage][i].name;
    });
  }

  // start page game
  if (
    document.location.href.includes('game') ||
    document.location.href.includes('gallery')
  ) {
    let audio = document.querySelectorAll('.audio');
    let play = document.querySelectorAll('.audio__btn-play');
    let recent_volume = document.querySelectorAll('.strip-volume');
    let volume_show = document.querySelectorAll('.audio__value');
    let audioAllTime = document.querySelectorAll('.audio__all-time');

    let volumeIcon = document.querySelectorAll('.fa-volume-up');
    let lastAudioIndex;

    let timer;
    let Playing_song = false;

    // start create audios Element
    for (let i = 0; i < audio.length; i++) {
      tracks.push(document.createElement('audio'));
    }
    // end create audios Element

    tracks.forEach((item, i) => {
      item.addEventListener('loadedmetadata', (event) => {
        let seconds = Math.floor(item.duration);
        let minutes = 0;

        while (seconds >= 60) {
          minutes++;
          seconds = seconds - 60;
        }

        audioAllTime[i].textContent = `0${minutes}: ${
          seconds > 9 ? seconds : '0' + seconds
        }`;
      });
    });

    // start load the track
    clearInterval(timer);

    tracks.forEach((item, i) => {
      if (document.location.href.includes('game')) {
        tracks[0].src = birdsData[stage][rightNum].audio;
      } else if (document.location.href.includes('gallery')) {
        let galleryItemAudio = document.querySelectorAll(
          '.gallery__item-audio'
        );
        item.src = galleryItemAudio[i].getAttribute('data-sound');
      }

      item.load();
    });

    timer = setInterval(range_slider, 1000);

    // start mute/unmute sound
    volumeIcon.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (tracks[i].volume > 0) {
          tracks[i].volume = 0;
          recent_volume[i].value = 0;
          volume_show[i].innerHTML = 0;
          item.className = 'fa fa-volume-off';
        } else {
          tracks[i].volume = 1;
          recent_volume[i].value = 100;
          volume_show[i].innerHTML = 100;
          item.className = 'fa fa-volume-up';
        }
      });
    });
    // end mute/unmute sound

    // start checking the song is playing or not
    play.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (lastAudioIndex !== undefined && lastAudioIndex !== i) {
          pauseSong(lastAudioIndex);
        }
        lastAudioIndex = i;

        if (Playing_song === false) {
          playSong(i);
        } else {
          pauseSong(i);
        }
      });
    });
    // end checking the song is playing or not

    // start play song
    function playSong(i) {
      play.forEach((item, i) => {
        pauseSong(i);
      });

      tracks[i].play();
      Playing_song = true;
      play[i].innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    // end play song

    // start pause song
    function pauseSong(i) {
      tracks[i].pause();
      Playing_song = false;
      play[i].innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
    // end pause song

    // start change volume
    recent_volume.forEach((item) => {
      item.addEventListener('click', () => {
        volume_show.forEach((innerItem, i) => {
          innerItem.innerHTML = recent_volume[i].value;
          tracks[i].volume = recent_volume[i].value / 100;
        });
      });
    });
    // end change volume

    // start change slider position
    slider.forEach((item, i) => {
      item.addEventListener('click', () => {
        let slider_position = tracks[i].duration * (item.value / 100);
        tracks[i].currentTime = slider_position;
      });
    });
    // end change slider position

    // start update slider position
    function range_slider() {
      let position = 0;

      tracks.forEach((item, i) => {
        if (!isNaN(item.duration)) {
          position = item.currentTime * (100 / item.duration);
          slider[i].value = position;
        }

        if (item.ended) {
          play[i].innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
          slider[i].value = 0;
        }
      });
    }
    // end update slider position

    if (document.location.href.includes('game')) {
      createGameItem();

      function createGame() {
        gameItem.forEach((item, i) => {
          item.addEventListener('click', (e) => {
            lastItem = item;
            instruction.classList.remove('instruction_active');
            descriptionAnimal.classList.add('description-animal_active');
            descriptionAnimalTitle.textContent =
              birdsData[stage][+item.getAttribute('date-item')].name;
            descriptionAnimalKind.textContent =
              birdsData[stage][+item.getAttribute('date-item')].species;
            pauseSong(1);
            slider[1].value = 0;
            tracks[1].src =
              birdsData[stage][+item.getAttribute('date-item')].audio;
            descriptionAnimalImg.src =
              birdsData[stage][+item.getAttribute('date-item')].image;
            descriptionAnimalText.textContent =
              birdsData[stage][+item.getAttribute('date-item')].description;

            if (!nextLevel) {
              if (rightNum === i) {
                pauseSong(0);

                const audio = new Audio(rightAnswer);
                audio.play();
                item.classList.add('game__item_right');
                currentAnimalTitle.textContent =
                  birdsData[stage][rightNum].name;
                currentAnimalImg.src = birdsData[stage][rightNum].image;
                score += points;
                scoreNum.textContent = score;
                gameBtn.classList.add('game__btn_active');
                nextLevel = true;

                if (stage === 5) {
                  setTimeout(() => {
                    localStorage.setItem('score', score);
                    document.location.href = 'result.html';
                  }, 1500);
                }
              } else {
                if (!e.target.classList.contains('game__item_wrong')) {
                  const audio = new Audio(wrongAnswer);
                  points = --points;
                  audio.volume = 0.25;
                  audio.play();
                }

                item.classList.add('game__item_wrong');
              }
            }
          });
        });
      }

      createGame();

      gameBtn.addEventListener('click', () => {
        stage = ++stage;
        if (stage < 6) {
          paginationItems.forEach((item, i) => {
            item.classList.remove('game__pagination-item_active');

            if (stage === i) {
              item.classList.add('game__pagination-item_active');
            }
          });

          gameBtn.classList.remove('game__btn_active');
          nextLevel = false;
          lastItem = null;
          points = 5;
          currentAnimalTitle.textContent = '******';
          currentAnimalImg.src = 'assets/img/secret-bird.jpg';
          randomNum();
          tracks[0].src = birdsData[stage][rightNum].audio;

          instruction.classList.add('instruction_active');
          descriptionAnimal.classList.remove('description-animal_active');

          gameItem.forEach((item, i) => {
            item.textContent = birdsData[stage][i].name;
            item.classList.remove('game__item_wrong');
            item.classList.remove('game__item_right');
          });
        }
      });
    }
  }
  // end page game

  // start btns change lang
  ukraine.addEventListener('click', () => {
    localStorage.setItem('lang', 'ukr');
    currentLang = 'ukr';
    english.classList.remove('header__btn-lang_active');
    ukraine.classList.add('header__btn-lang_active');

    changeLang();
    changeDataBirds();

    // if (document.location.href.includes('game')) {
    createGameItem();
    lastItem ? lastItem.click() : null;
    // }

    if (document.location.href.includes('gallery')) {
      changeGalleryContent();
    }

    if (document.location.href.includes('result')) {
      changeResultContent();
    }
  });

  english.addEventListener('click', () => {
    localStorage.setItem('lang', 'eng');
    currentLang = 'eng';
    ukraine.classList.remove('header__btn-lang_active');
    english.classList.add('header__btn-lang_active');
    changeLang();
    changeDataBirds();

    if (document.location.href.includes('game')) {
      createGameItem();
      lastItem ? lastItem.click() : null;
    }

    if (document.location.href.includes('gallery')) {
      changeGalleryContent();
    }

    if (document.location.href.includes('result')) {
      changeResultContent();
    }
  });
  // end btns change lang
});
