/**
 * SIZ Premium EdTech Platform - Core Logic
 */

// Baza Wiedzy (150 pytań z quizu zarządzania procesami, 20 fiszek, 5 podsumowań)
const knowledgeBase = {
    quiz: [
        { type: "single", question: "1. Co oznacza skrót BPM?", options: ["Business Process Measurement", "Business Project Modeling", "Business Process Management", "Basic Process Management"], correct: 2, explanation: "BPM to akronim od angielskiego terminu Business Process Management, oznaczającego zarządzanie procesami biznesowymi." },
        { type: "single", question: "2. Jak Becker i Kahn definiują proces biznesowy?", options: ["Zbiór incydentalnych zadań dla zarządu", "Całkowicie zamknięty, terminowy i logiczny ciąg czynności", "Narzędzie IT do pomiaru efektywności", "Nieustrukturyzowany przepływ informacji"], correct: 1, explanation: "Becker i Kahn kładą nacisk na to, że proces musi być zamknięty, logiczny i posiadać zdefiniowane ramy czasowe." },
        { type: "single", question: "3. Co jest głównym celem biznesowym procesu wg H. Johanssona?", options: ["Sformalizowanie struktury", "Generowanie kosztów stałych", "Rozrost działu IT", "Wytworzenie wartości dla odbiorcy (klienta)"], correct: 3, explanation: "Zgodnie z ujęciem H. Johanssona, idealny proces to taki, w którym transformacja generuje realną wartość dodaną dla klienta." },
        { type: "single", question: "4. Z perspektywy Skrzypek i Hofman (2010), 5 cech procesów to m.in.:", options: ["Holicyzm i zorientowanie na klienta", "Wizualizacja i estetyka", "Poufność i bezpieczeństwo", "Silosowość i zwinność"], correct: 0, explanation: "Autorzy ci uważają, że procesy powstają celowo, mają holistyczny charakter i są silnie zorientowane na dostarczanie wartości klientowi." },
        { type: "single", question: "5. Elastyczność procesu określa:", options: ["Ilość kroków niezbędnych do jego zmapowania", "Stopień zadowolenia zarządu z kosztów", "Poziom łatwości i tempa adaptacji w odpowiedzi na zmiany w otoczeniu", "Zdolność do zastępowania maszyn ludźmi"], correct: 2, explanation: "Elastyczność to po prostu poziom łatwości i tempo adaptacji procesu w odpowiedzi na dynamiczne zmiany otoczenia biznesowego." },
        { type: "single", question: "6. Czym różnią się procesy podstawowe od pomocniczych wg Grajewskiego?", options: ["Podstawowe są droższe", "Pomocnicze bezpośrednio tworzą wartość dodaną, a podstawowe ją analizują", "Podstawowe tworzą wartość dodaną bezpośrednio dla klienta, a pomocnicze je wspierają", "Nie ma między nimi różnicy w BPM"], correct: 2, explanation: "Procesy podstawowe to rdzeń generujący przychód i wartość, natomiast procesy pomocnicze tworzą warunki do ich realizacji." },
        { type: "single", question: "7. W wielofunkcyjnej taksonomii procesów PCF (APQC), procesy dzieli się na:", options: ["Wewnętrzne i zewnętrzne", "Operacyjne i zarządzania", "Lokalne i globalne", "Cykliczne i liniowe"], correct: 1, explanation: "Taksonomia APQC rozróżnia działania operacyjne, generujące bezpośrednią wartość, oraz wspomagające je procesy zarządzania." },
        { type: "single", question: "8. Jak klasyfikowana jest w PCF kategoria 'Zarządzanie zasobami finansowymi'?", options: ["Jako proces operacyjny", "Jako proces zarządzania (wspierający)", "Jako incydent krytyczny", "Jako proces incydentalny"], correct: 1, explanation: "Zarządzanie finansami to klasyczny proces wspierający (zarządczy), niezbędny do funkcjonowania operacji firmy, lecz niebędący jej rdzeniem rynkowym." },
        { type: "single", question: "9. Youngblood jako atrybuty optymalizacji wymienia:", options: ["Szybkość, koszt i jakość", "Tradycję, wizję i misję", "Komputeryzację, standaryzację i automatyzację", "Budżet, reklamę i PR"], correct: 0, explanation: "Dla Youngblooda kluczowymi parametrami sukcesu w optymalizacji są: krótki czas, niska kapitałochłonność oraz wysoka jakość wyników." },
        { type: "single", question: "10. Według koncepcji BPM, 'Szybkość' procesu określa się poprzez:", options: ["Ilość wydruków z drukarki", "Czas cyklu operacji", "Ilość nadgodzin", "Moc procesorów w dziale IT"], correct: 1, explanation: "Czas cyklu, czyli czas trwania operacji od momentu jej zainicjowania do wygenerowania rezultatu, jest miarą szybkości." },
        { type: "single", question: "11. Czego wynikiem są nieefektywność i nieelastyczność procesów wg S. Page?", options: ["Innowacji", "Tolerancji i braku zaufania", "Dobrego zarządzania", "Niedostatecznego i nieciągłego monitorowania przebiegu procesu"], correct: 3, explanation: "Niedostateczny i nieciągły nadzór sprawia, że proces zaczyna się niekontrolowanie rozrastać i traci na efektywności." },
        { type: "single", question: "12. Przykłady procesów operacyjnych w modelu PCF to m.in.:", options: ["Zarządzanie IT", "Zarządzanie kapitałem ludzkim", "Rozwój wizji i strategii, dostarczanie usług", "Zarządzanie ryzykiem korporacyjnym"], correct: 2, explanation: "Tworzenie strategii, produkcja i dostarczanie usług to działania operacyjne bezpośrednio realizujące główny cel rynkowy przedsiębiorstwa." },
        { type: "single", question: "13. Kto jako pierwszy zdefiniował proces w kontekście podziału na komórki funkcjonalne (tzw. 'white space')?", options: ["Taylor", "Deming", "Rummler i Brache", "Page"], correct: 2, explanation: "To Rummler i Brache zauważyli tzw. 'białe plamy', czyli obszary w strukturze firmy, w których giną procesy z powodu braku jasnej odpowiedzialności." },
        { type: "single", question: "14. Kluczowy cel zarządzania procesami biznesowymi to:", options: ["Rozbudowa biurokracji w firmie", "Orientacja wyłącznie na zarząd", "Tworzenie jak najdłuższych procedur", "Ciągła optymalizacja odpowiadająca oczekiwaniom klientów"], correct: 3, explanation: "Ostatecznym powodem, dla którego optymalizuje się procesy, jest ciągłe poprawianie jakości i zadowolenia docelowego klienta." },
        { type: "single", question: "15. W jaki sposób BPM postrzega dążenie do standaryzacji?", options: ["Jako zagrożenie dla kreatywności", "Jako metodę wykonywania pracy prowadzącą do przewidywalności wyników", "Jako cel wyłącznie dla maszyn produkcyjnych", "Jako opcjonalny dodatek"], correct: 1, explanation: "BPM traktuje standaryzację jako gwarancję powtarzalności wyników, ograniczenia zmienności i redukcji błędów w systemie." },
        { type: "single", question: "16. Kim jest Właściciel procesu?", options: ["Osobą odpowiedzialną za jeden, wybrany krok procesu", "Sponsorem opłacającym oprogramowanie", "Osobą ponoszącą ostateczną odpowiedzialność za cały zarządzany proces (end-to-end)", "Prezesem zarządu w każdej firmie"], correct: 2, explanation: "Właściciel ponosi ostateczną i całkowitą odpowiedzialność za działanie i efekty procesu, niezależnie od granic strukturalnych firmy." },
        { type: "single", question: "17. Czy właściciel procesu musi zajmować formalne stanowisko kierownicze?", options: ["Zawsze", "Nigdy, to zabronione w BPM", "Niekoniecznie, bywa nim specjalista bez formalnej władzy", "Tylko w procesach finansowych"], correct: 2, explanation: "Ponieważ proces przebiega w poprzek działów, jego właścicielem nierzadko zostaje specjalista procesowy bez formalnej władzy nad pracownikami tych działów." },
        { type: "single", question: "18. Zgodnie z badaniami V. Danilovej (2019), do zadań właściciela procesu z kategorii 'planowanie' należy:", options: ["Tylko udzielanie nagan", "Rozwiązywanie konfliktów z dostawcami prądu", "Definiowanie podprocesów, granic oraz zapewnienie standaryzacji", "Fizyczne pakowanie produktów"], correct: 2, explanation: "W fazie planowania właściciel definiuje ramy procesu, by zapobiec jego degradacji i narzucić standardy wykonania." },
        { type: "single", question: "19. Kto według Brajer-Marczak najczęściej pełnił rolę właściciela procesu w polskich realiach?", options: ["Zewnętrzni konsultanci", "Stażyści", "Kierownicy funkcjonalni działający w obrębie podległych im jednostek", "Zarząd główny spółki"], correct: 2, explanation: "W praktyce wielu polskich przedsiębiorstw rolę tę przydziela się tradycyjnym kierownikom, co niestety cementuje silosowe podejście do zarządzania." },
        { type: "single", question: "20. Wśród kompetencji koncepcyjnych właściciela procesu wymienia się:", options: ["Zdolność do całościowego postrzegania interesów organizacji (myślenie scenariuszowe)", "Znajomość programowania w języku C++", "Umiejętność przygotowania budżetu", "Empatię i zarządzanie konfliktem"], correct: 0, explanation: "Wymiar koncepcyjny kompetencji to umiejętność przewidywania systemowych konsekwencji podejmowanych decyzji z perspektywy całej organizacji." },
        { type: "single", question: "21. Dlaczego umiejętność perswazji jest kluczowa dla właściciela procesu?", options: ["Ponieważ zazwyczaj posiada on dyktatorską władzę formalną", "Często musi wywierać wpływ na pracowników pomimo braku władzy formalnej (w strukturze)", "Bo wymaga tego notacja BPMN", "Żeby móc podwyższać pensje pracownikom"], correct: 1, explanation: "Z powodu braku władzy hierarchicznej nad wykonawcami z innych działów, perswazja staje się głównym narzędziem egzekwowania założeń procesu." },
        { type: "single", question: "22. Kim jest 'Wykonawca w procesie'?", options: ["Osobą odpowiedzialną za ostateczne KPI całego procesu", "Analitykiem biznesowym rysującym mapę", "Audytorem zewnętrznym", "Pracownikiem posiadającym specjalistyczną wiedzę, realizującym działania (operacje)"], correct: 3, explanation: "Wykonawca to bezpośredni uczestnik wyposażony w wiedzę specjalistyczną, realizujący poszczególne zadania operacyjne w łańcuchu." },
        { type: "single", question: "23. Jak nazywa się narzędzie wskazujące jednoznacznie uprawnienia i obowiązki dla kroków procesu?", options: ["Wykres kołowy", "Histogram", "Macierz odpowiedzialności (np. RACI)", "Tabela DPMO"], correct: 2, explanation: "Macierz odpowiedzialności to tabela łącząca role uczestników z zadaniami i określająca stopień ich decyzyjności oraz zaangażowania." },
        { type: "single", question: "24. W macierzy RACI, litera 'R' (Responsible) oznacza:", options: ["Osobę prawnie odpowiedzialną za biznes (Sponsora)", "Osobę bezpośrednio wykonującą zadanie", "Osobę udzielającą porad", "Osobę tylko informowaną"], correct: 1, explanation: "Rola 'Responsible' wskazuje pracownika operacyjnego, który fizycznie lub systemowo realizuje wyznaczone zadanie." },
        { type: "single", question: "25. W macierzy RACI, litera 'A' (Accountable) oznacza:", options: ["Osobę, która musi wykonać fizyczną pracę", "Eksperta zewnętrznego", "Osobę odpowiedzialną za decyzję, zatwierdzającą pracę osoby wykonującej", "Osobę testującą proces"], correct: 2, explanation: "Rola 'Accountable' dotyczy decydenta ponoszącego ostateczną odpowiedzialność za poprawne wykonanie i autoryzację tego zadania." },
        { type: "single", question: "26. W macierzy RACI, literą 'C' oznaczamy:", options: ["Konsultanta (Consulted) osobę doradzającą, z którą prowadzona jest dwustronna komunikacja", "Twórcę (Creator) - grafika", "Kontrolera (Controller) jakości", "Klienta (Customer) w sklepie"], correct: 0, explanation: "Osoba w roli 'Consulted' to ekspert lub interesariusz, z którym prowadzony jest dwustronny dialog w celu wypracowania optymalnego rozwiązania." },
        { type: "single", question: "27. Co w macierzy RASI/RASCI oznacza dodatkowa litera 'S'?", options: ["Sponsor płaci za proces", "Support aktywnie uczestniczy we wsparciu osoby Responsible", "Security ochrona danych", "Standard - wymóg proceduralny"], correct: 1, explanation: "Rozszerzenie 'Support' pomaga wylistować dodatkowe osoby wspierające pracownika głównego (Responsible) w żmudnej realizacji zadania." },
        { type: "single", question: "28. Co oznacza litera 'I' w macierzy RACI?", options: ["Informed podmiot, który po prostu otrzymuje jednostronną informację o wynikach", "Important najważniejsza rola w procesie", "Ignored-osoba, z którą się nie kontaktujemy", "Input dostawca danych do procesu"], correct: 0, explanation: "Rola 'Informed' oznacza, że komunikacja jest jednokierunkowa - osoba ta jedynie otrzymuje powiadomienie o wynikach lub postępach prac." },
        { type: "single", question: "29. Do czego służy macierz RACI-VS?", options: ["To pomyłka literowa, nie ma takiej macierzy", "Do wyliczania Sigma", "Uzupełnia RACI o role Verifier (Weryfikator) i Sign-off (Sygnatariusz)", "Zastępuje rolę Accountable rolą Verifier"], correct: 2, explanation: "Macierz RACI-VS pozwala zdefiniować dodatkowego weryfikatora jakości (V) oraz ostatecznego sygnatariusza zamykającego etap (S)." },
        { type: "single", question: "30. Co oznacza 'O' w systemie CAIRO (RACI-O)?", options: ["Out of the loop osoby, które celowo nie biorą udziału w zadaniu i nie otrzymują informacji", "Optimization - dział wsparcia", "Organizer - kierownik", "Option zasób opcjonalny"], correct: 0, explanation: "Wykluczenie roli 'Out of the loop' (O) zapobiega zbędnej wymianie informacji, przyspieszając tym samym podejmowanie krytycznych decyzji." },
        { type: "single", question: "31. Na którym poziomie dojrzałości procesowej wg CMMI (poziom 3) znajduje się organizacja, jeśli:", options: ["Jej procesy są mierzone i ciągle ulepszane", "Procesy są dobrze zdefiniowane, sformalizowane i udokumentowane, ale jeszcze niemierzone statystycznie", "Procesy mają charakter ad hoc", "Panuje zarządzanie incydentalne"], correct: 1, explanation: "Na trzecim poziomie CMMI procesy są odpowiednio udokumentowane i powtarzalne, lecz nie mają jeszcze wdrożonego aparatu pomiarów statystycznych." },
        { type: "single", question: "32. Na 5. poziomie dojrzałości (Optymalizowany), organizacja:", options: ["Skupia się na ciągłym usprawnianiu dzięki innowacjom", "Dopiero identyfikuje swoje procesy", "Nie dokumentuje procesów, ufając pracownikom", "Stosuje wyłącznie nagrody finansowe"], correct: 0, explanation: "Piąty poziom dojrzałości charakteryzuje się proaktywnym, ciągłym i innowacyjnym wprowadzaniem optymalizacji na podstawie danych ilościowych." },
        { type: "single", question: "33. Ile stadiów uprocesowienia wymienia Czekaj (2009)?", options: ["Trzy", "Osiem", "Cztery: przygotowanie, doskonalenie, dojrzewanie, pełne uprocesowienie", "Dziesięć"], correct: 2, explanation: "Czekaj wyróżnia cztery kluczowe stadia ewolucji organizacji: przygotowanie, doskonalenie, dojrzewanie oraz wreszcie pełne uprocesowienie." },
        { type: "single", question: "34. Co najczęściej jest główną barierą we wprowadzaniu BPM w polskich firmach?", options: ["Brak komputerów", "Nadmierne skupienie na klientach", "Niechęć prawników", "Kultura hierarchiczna i tzw. podejście silosowe (brak chęci współpracy między działami)"], correct: 3, explanation: "Silosowość i obrona granic terytorialnych przez działy to największy wróg horyzontalnego podejścia wymaganego przez end-to-end BPM." },
        { type: "single", question: "35. Który z elementów JEST uznawany za jeden z 5 warunków sprawnego procesu?", options: ["Biurokracja", "Niejawność zarobków", "Właściciel procesu", "Nadmierna liczba procedur"], correct: 2, explanation: "Zdefiniowany i posiadający właściwe umocowanie właściciel to jeden z pięciu absolutnych fundamentów do skutecznego sterowania procesem." },
        { type: "single", question: "36. Czym jest 'Dopasowanie strategiczne' jako krytyczny element BPM?", options: ["BPM jest odłączone od strategii firmy", "Plan BPM wynika z planu strategicznego i służy jego realizacji", "Używanie systemów IT w każdym procesie", "Proces polegający na rekrutacji dyrektorów"], correct: 1, explanation: "Procesy nie istnieją w próżni - by ich usprawnianie miało sens rynkowy, muszą być ściśle podporządkowane strategii nadrzędnej firmy." },
        { type: "single", question: "37. Kultura w organizacji BPM powinna charakteryzować się:", options: ["Nieufnością", "Brakiem szkoleń", "Silosowością", "Wysokim stopniem zaufania, pracy grupowej i łatwością akceptacji innowacji"], correct: 3, explanation: "Otwarta kultura i bezpieczeństwo psychologiczne to filary sprzyjające odważnemu wdrażaniu innowacji i doskonaleniu pracy grupowej." },
        { type: "single", question: "38. Czy BPM wymaga zaawansowanych systemów informatycznych?", options: ["Są bardzo pomocne do modelowania, pomiaru i kontroli, ale same IT nie załatwią sprawy", "IT są absolutnie zabronione", "Tylko w branży E-commerce", "Systemy IT stanowią 100% skuteczności BPM"], correct: 0, explanation: "Choć systemy IT potężnie przyspieszają BPM, to bez dobrej mapy, przeszkolonych ludzi i odpowiedniej kultury, skomputeryzują one jedynie złe nawyki." },
        { type: "single", question: "39. Podejście procesowe (wg materiałów prof. Hensla) głosi zasadę:", options: ["Winy należy szukać w człowieku, nie w procesie", "Nawet zły, udokumentowany proces jest lepszy niż brak procesu (chaos)", "Więcej procedur to większa autonomia", "Nie należy mierzyć procesów kreatywnych"], correct: 1, explanation: "Podejście procesowe wychodzi z założenia, że ustandaryzowany, mierzalny proces zawsze łatwiej jest naprawić niż wszechobecny, niepisany chaos." },
        { type: "single", question: "40. Jakie są wady (krytyka) podejścia procesowego?", options: ["Zbyt duża orientacja na jakość", "Trudność w stosowaniu wobec 'pracowników wiedzy' i pomijanie gier politycznych w firmach", "Szybki spadek przychodów w 100% przypadków", "Zbytnia koncentracja na zadowoleniu klienta"], correct: 1, explanation: "Główny zarzut wobec klasycznego BPM to trudność z dopasowaniem sztywnych ram do elastycznej pracy 'pracowników wiedzy' i gier politycznych." },
        { type: "single", question: "41. Podejście klasycznego BPM bywa krytykowane za:", options: ["Przyjmowanie nazbyt mechanistycznej wizji organizacji, która jest przecież 'żywym organizmem'", "Ograniczanie ról zarządowi", "Brak stosowania matematyki", "Całkowite odrzucenie struktury płaskiej"], correct: 0, explanation: "Traktowanie firmy jak idealnej maszyny ignoruje fakt, że jest to żywy, społeczny organizm, który stawia opór i rządzi się własną psychologią." },
        { type: "single", question: "42. Co postuluje model Kurta Lewina dotyczący zarządzania zmianą?", options: ["Start, Run, Stop", "Rozmrażanie, Zmiana, Zamrażanie", "Define, Measure, Analyze", "Plan, Do, Check, Act"], correct: 1, explanation: "Teoria Lewina traktuje zarządzanie zmianą jako trzyetapowy proces psychologiczny: unfreezing, movement oraz refreezing." },
        { type: "single", question: "43. Co oznacza faza 'Rozmrażanie' u Lewina?", options: ["Chłodzenie zapału zespołu do innowacji", "Zamrażanie starych procedur", "Destabilizację status quo, uświadomienie zespołowi, że zmiana jest pilnie potrzebna", "Przerwę urlopową przed projektem"], correct: 2, explanation: "Celem etapu rozmrażania jest uświadomienie pracownikom, że stary status quo nie ma racji bytu i niezbędna jest gruntowna zmiana." },
        { type: "single", question: "44. W fazie 'Zamrażanie' (Lewin) kluczowe jest:", options: ["Utrwalanie wyników zmiany w kulturze organizacji (nowe status quo)", "Burzenie starych sposobów działania", "Ciągłe poszukiwanie nowych kryzysów", "Zwolenienie pracowników"], correct: 0, explanation: "Ostatnia faza dotyczy utrwalania i nagradzania nowych postaw, co chroni organizację przed samoistnym powrotem do starych nawyków." },
        { type: "single", question: "45. Dlaczego (wg Kottera) wiele projektów zmian upada?", options: ["Przez nadmiar sukcesów", "Z powodu tworzenia zbyt silnego zespołu sterującego", "Gdy liderzy odtrąbili zwycięstwo zbyt wcześnie lub zignorowali potrzebę krótkoterminowych wygranych (quick wins)", "Z powodu nadmiaru budżetu"], correct: 2, explanation: "Zaniedbanie szybkich, motywujących sukcesów lub zbyt wczesne ogłoszenie tryumfu to najczęstsze błędy prowadzące do załamania entuzjazmu (wg Kottera)." },
        { type: "single", question: "46. Ile etapów liczy klasyczny cykl BPM opisany w książce J. Majczyk?", options: ["Trzy", "Pięć", "Sześć", "Siedem"], correct: 2, explanation: "Model w ujęciu autorki obejmuje sześć logicznych, powiązanych ze sobą etapów od analizy aż do wdrożenia rozwiązań i przeprojektowania." },
        { type: "single", question: "47. Etapy cyklu BPM (w odpowiedniej kolejności) to:", options: ["Analiza, Definiowanie, Projektowanie, Wdrażanie, Monitorowanie, Przeprojektowanie", "Projektowanie, Analiza, Monitorowanie, Definiowanie", "Analiza, Definiowanie, Monitorowanie", "Start, Środek, Zakończenie"], correct: 0, explanation: "Sekwencja zaczyna się od analizy, idzie przez definicję, projekt, wdrożenie oraz monitorowanie, aż po ewentualne przeprojektowanie błędu." },
        { type: "single", question: "48. Na etapie Analizy (I faza) kluczowe jest:", options: ["Diagnoza organizacji (analiza danych, zebranie wymagań, identyfikacja problemów)", "Wdrożenie nowego systemu IT od razu", "Karanie pracowników za błędy", "Zamrożenie budżetów na innowacje"], correct: 0, explanation: "Analiza ma na celu dogłębną diagnozę obecnego stanu, w tym zebranie danych i identyfikację głównych problemów organizacji." },
        { type: "single", question: "49. Do gromadzenia informacji na etapie Analizy stosuje się m.in.:", options: ["Wyłącznie losowania z kapelusza", "Dane pierwotne (wywiady, ankiety) i wtórne (procedury, statuty)", "Tylko dane zewnętrzne od konkurencji", "Dane biometryczne klientów"], correct: 1, explanation: "Podczas diagnozy korzysta się zarówno z ankiet i wywiadów (dane pierwotne), jak i istniejących już statutów i regulaminów (dane wtórne)." },
        { type: "single", question: "50. Jakie są wady danych wtórnych?", options: ["Zajmują zbyt dużo czasu w przygotowaniu", "Zostały stworzone w innym celu, mogą być nieaktualne lub powierzchowne w stosunku do badanego problemu", "Są bardzo drogie", "Zawsze kłamią"], correct: 1, explanation: "Dane wtórne mogą być zdezaktualizowane lub zbyt płytkie, ponieważ powstały z myślą o innych celach niż bieżąca optymalizacja." },
        { type: "single", question: "51. Czym różni się wywiad fokusowy od wywiadu indywidualnego w diagnozie BPM?", options: ["Skupia się na statystyce", "Pozwala na interakcję w grupie, budowę wspólnego znaczenia i elicytację przekonań poprzez dyskusję", "Jest pisemny", "Trwa o wiele krócej"], correct: 1, explanation: "Wywiady fokusowe stymulują dyskusję w grupie, co często ułatwia wspólne zrozumienie procesów i wyzwala nieoczywiste wnioski pracowników." },
        { type: "single", question: "52. Zastosowanie ankiety opartej na Skali Osgooda (dyferencjał semantyczny) pozwala na:", options: ["Wybór miejsca na dyferencjale pomiędzy przymiotnikami o znaczeniu przeciwstawnym", "Wybór od 1 do 100", "Napisanie eseju", "Głosowanie wielokrotne w jednej rubryce"], correct: 0, explanation: "Dyferencjał semantyczny służy do intuicyjnego badania opinii poprzez wskazanie punktu na skali między dwiema przeciwstawnymi wartościami." },
        { type: "single", question: "53. Narzędzie selekcji procesów (np. matryca wyboru) pomaga podjąć decyzję:", options: ["Który pracownik zostanie zwolniony", "Który proces naprawić najpierw, uwzględniając kryteria jak wpływ, nakłady i zwrot z inwestycji", "Jaką firmę szkoleniową zatrudnić", "Gdzie kupić papier do drukarki"], correct: 1, explanation: "Narzędzie do selekcji bazuje na zobiektywizowanych kryteriach wagowych (jak wpływ na firmę i koszty), by pomóc zarządowi wybrać priorytety." },
        { type: "single", question: "54. Co zawiera 'Dokument zakresu' tworzony na etapie Definiowania (II faza)?", options: ["Cały kod źródłowy systemu", "Opis procesu, właściciela, głównych zadań, mierników sukcesu i granic procesu", "Tylko nazwę procesu i podpis prezesa", "Matrycę RACI dla wszystkich działów firmy"], correct: 1, explanation: "Dokument zakresu chroni zespół przed 'pełzaniem' projektu, narzucając jasne ramy czasowe, cel, role oraz metryki procesu." },
        { type: "single", question: "55. Po co określa się precyzyjnie 'zasięg procesu'?", options: ["By odróżnić zadania w procesie od zadań w innych procesach i uniknąć tzw. eskalacji żądań", "Żeby ukarać dział prawny", "By wiedzieć ile kilometrów pokonuje dokument", "Żeby zaimponować konkurencji"], correct: 0, explanation: "Ustalenie granic zapobiega rozmyciu odpowiedzialności i tzw. eskalacji żądań ze strony innych komórek w firmie." },
        { type: "single", question: "56. Jaką rolę na etapie 'Projektowania' (III faza) pełni mapa procesu?", options: ["Jest ładnym plakatem w biurze", "Umożliwia stworzenie graficznego odzwierciedlenia logiki procesu (sekwencji zdarzeń)", "Zastępuje kodeks pracy", "Tylko określa wynagrodzenia w procesie"], correct: 1, explanation: "Mapa procesu stanowi precyzyjną, graficzną wizualizację kolejnych kroków i bram, co drastycznie ułatwia wyłapywanie błędów na etapie projektu." },
        { type: "single", question: "57. Dokument Informacyjny (DI) na etapie Projektowania:", options: ["Jest tym samym co Dokument Zakresu", "Szczegółowo opisuje każdy krok, dodaje instrukcje i odnośniki dla nowo wdrażanych pracowników", "Jest tajny dla zespołu", "Służy do inwigilacji pracowników"], correct: 1, explanation: "Dokument informacyjny dostarcza precyzyjnych opisów słownych (proceduralnych) dla symboli ujętych graficznie na mapie." },
        { type: "single", question: "58. Czego wymaga IV etap: Wdrażanie?", options: ["Porzucenia całej dotychczasowej dokumentacji", "Braku jakiejkolwiek komunikacji (efekt zaskoczenia)", "Właściwego zaplanowania, szkoleń uczestników, komunikacji zmian", "Natychmiastowych zwolnień grupowych"], correct: 2, explanation: "Etap wdrożenia musi być poparty planem komunikacji oraz szeroko zakrojoną akcją szkoleniową, minimalizującą opór społeczny przed nowym." },
        { type: "single", question: "59. Co mierzą 'Incydenty jakościowe' (np. 1 błąd na 1000 operacji)?", options: ["Miernik ilości awarii ekspresu do kawy", "Ilościowy miernik sukcesu dla jakości procesu", "Tylko czas procesu", "Zadowolenie zarządu z własnej pracy"], correct: 1, explanation: "To twardy wskaźnik ilościowy, mierzący jakość wykonanej pracy na podstawie liczby pomyłek (defektów) w zdefiniowanej jednostce prób." },
        { type: "single", question: "60. Faza 'Monitorowania' (V faza) służy do:", options: ["Rozpoczynania nowych procesów", "Ciągłego porównywania wyników rzeczywistych ze wskaźnikami KPI ustanowionymi w dokumencie zakresu", "Audytu zewnętrznego przez urząd skarbowy", "Zmiany nazwy firmy"], correct: 1, explanation: "Monitorowanie pozwala bieżąco korelować wyniki z zakładanymi wskaźnikami KPI, by od razu reagować na potencjalne odchylenia." },
        { type: "single", question: "61. Co oznacza skrót BPMN?", options: ["Business Process Management Network", "Basic Performance Metrics Number", "Business Process Model and Notation", "Basic Process Mapping Note"], correct: 2, explanation: "BPMN (Business Process Model and Notation) to powszechnie akceptowany, międzynarodowy standard graficzny dla modelowania przepływów." },
        { type: "single", question: "62. Która notacja stała się globalnym standardem i jest zrozumiała zarówno dla biznesu jak i IT?", options: ["DFD", "BPMN", "IDEF3", "PERT"], correct: 1, explanation: "To właśnie BPMN zostało stworzone tak, by pogodzić prostotę wymaganą przez biznes ze szczegółowością narzucaną przez dział IT." },
        { type: "single", question: "63. W BPMN, zdarzenie (Event) oznacza się:", options: ["Trójkątem", "Kwadratem", "Okręgiem", "Cylindrem"], correct: 2, explanation: "Okręgi są standardowymi ikonami reprezentującymi moment startu, etap pośredni (np. oczekiwanie na wiadomość) oraz zakończenie sekwencji." },
        { type: "single", question: "64. Zdarzenia w BPMN dzielimy zazwyczaj na:", options: ["Dobre i Zle", "Początkowe, Pośrednie i Końcowe", "Tanie i Drogie", "Małe, Średnie i Duże"], correct: 1, explanation: "Podstawowy podział obejmuje zdarzenia inicjujące przepływ, występujące w trakcie jego trwania oraz finalizujące działania w danej pętli." },
        { type: "single", question: "65. Bramki (Gateways) w BPMN oznaczane są za pomocą:", options: ["Okręgu", "Linii przerywanej", "Rombu", "Trójkąta"], correct: 2, explanation: "Bramki (Gateways), modelowane jako romby, służą do rozgałęziania przepływów na podstawie określonych warunków decyzyjnych." },
        { type: "single", question: "66. Do czego służy bramka wykluczająca (XOR) w BPMN?", options: ["Rozpoczyna kilka procesów na raz", "Wybiera wyłącznie jedną ścieżkę kontynuacji procesu (np. warunek Tak/Nie)", "Czeka na sygnał zewnętrzny", "Zatrzymuje proces awaryjnie"], correct: 1, explanation: "Bramka XOR pozwala systemowi na wybór tylko i wyłącznie jednej z dostępnych ścieżek przepływu, najczęściej na podstawie prostej odpowiedzi tak/nie." },
        { type: "single", question: "67. Bramka równoległa (oznaczona plusem +) w BPMN:", options: ["Zakańcza proces", "Gwarantuje, że wykonana będzie tylko 1 ścieżka", "Rozwidla przepływ na kilka jednoczesnych i niezależnych ścieżek", "Kasuje dane z dysku"], correct: 2, explanation: "Zastosowanie bramki równoległej powoduje jednoczesne uruchomienie wszystkich wychodzących ścieżek, bez żadnych warunków wykluczających." },
        { type: "single", question: "68. W BPMN, prostokąt z zaokrąglonymi rogami oznacza:", options: ["Magazyn danych", "Zdarzenie końcowe", "Basen (Pool)", "Aktywność / Zadanie (Activity / Task)"], correct: 3, explanation: "W notacji BPMN kwadrat lub prostokąt z zaokrąglonymi rogami oznacza wykonanie pojedynczego kroku lub szerszej aktywności procesowej." },
        { type: "single", question: "69. Po co w BPMN stosuje się Baseny (Pools) i Tory (Swimlanes)?", options: ["Tylko dla estetyki diagramu", "By przypisać odpowiedzialność za konkretne aktywności do ról/działów", "Aby proces działał szybciej w chmurze", "Aby wyeliminować bramki logiczne"], correct: 1, explanation: "Ułożenie zadań w wydzielonych torach błyskawicznie obrazuje odpowiedzialność danej jednostki organizacyjnej za wykonanie konkretnego etapu." },
        { type: "single", question: "70. Notacja IDEF3 koncentruje się na:", options: ["Analizie wyłącznie kosztów sprzętu", "Obiektach, ich stanach oraz 'jednostkach zachowania' (UOB - Unit of Behavior)", "Animacji 3D procesów przemysłowych", "Podejściu wyłącznie zębatkowym"], correct: 1, explanation: "Metodologia IDEF3 dokumentuje głównie, w jaki sposób obiekty (np. dokument) zmieniają swój stan na skutek 'jednostek zachowania' procesów." },
        { type: "single", question: "71. W IDEF3 asynchroniczne bramki oznacza się symbolem:", options: ["& (And)", "Okręgiem z plusem", "Romby ze znakami logicznymi np. X", "A iX dla And/Xor bez ramki"], correct: 2, explanation: "Romb ze znakiem 'X' (XOR) lub '&' (AND) jasno definiuje reguły sterowania rozgałęzieniami w środowisku IDEF3." },
        { type: "single", question: "72. Skrót DFD (Data Flow Diagram) oznacza:", options: ["Diagram Przepływu Danych", "Data Format Design", "Document Forwarding Directory", "Diagram Funkcji Decyzyjnych"], correct: 0, explanation: "DFD (Data Flow Diagram) skupia się przede wszystkim na obrazowaniu cyklu życia i transformacji samych informacji przepływających w środowisku." },
        { type: "single", question: "73. Jakie są 4 główne komponenty klasycznego diagramu DFD?", options: ["Trójkąt, kwadrat, koło, elipsa", "Zdarzenie, Basen, Tor, Decyzja", "Zewnętrzna jednostka (aktor), Proces, Przepływ danych, Magazyn danych", "Sponsor, Lider, Audytor, Wykonawca"], correct: 2, explanation: "Podmiot zewnętrzny generuje dane, proces je przekształca, magazyn archiwizuje, a sam przepływ określa kierunek tych transportów." },
        { type: "single", question: "74. Jak notacja DFD oznacza magazyn danych (np. plik, bazę)?", options: ["Romb", "Dwie otwarte, równoległe linie poziome", "Duży trójkąt", "Gruba linia przerywana"], correct: 1, explanation: "W konwencji tej używa się często dwóch otwartych, równoległych linii, aby zasugerować miejsce docelowego spoczynku informacji." },
        { type: "single", question: "75. Do czego służy notacja UML (Unified Modeling Language)?", options: ["Wyłącznie do mapowania struktury organizacyjnej na tablicy", "Do dokumentowania prawa cywilnego", "To standard gł. dla oprogramowania obiektowego, zawierający m.in. diagramy przypadków użycia czy aktywności", "To standard używany tylko przez dział HR"], correct: 2, explanation: "Język UML to uniwersalny standard inżynierii oprogramowania obiektowego, ale jego Diagram Aktywności świetnie nadaje się również do rzutowania procesów biznesowych." },
        { type: "single", question: "76. W tradycyjnych schematach blokowych (flowcharts), diament/romb oznacza:", options: ["Zakończenie", "Czynność manualną", "Decyzję (Rozwidlenie)", "Dokument papierowy"], correct: 2, explanation: "Diament lub romb to najbardziej zakorzeniony w inżynierii symbol na oznaczenie testu warunkowego lub podjęcia decyzji." },
        { type: "single", question: "77. Symbol prostokąta z pofalowaną dolną krawędzią w klasycznym schemacie blokowym oznacza:", options: ["Dyskietkę", "Pamięć taśmową", "Dokument (wydruk)", "Ekran komputera"], correct: 2, explanation: "Tradycyjny, pofalowany na dole kształt miał dawniej symbolizować naderwaną kartkę papieru, by oddać fizyczną formę dokumentu." },
        { type: "single", question: "78. Co oznacza redundancja konstrukcyjna np. w notacji BPMN?", options: ["Brak symboli dla skomplikowanych zdarzeń", "Możliwość modelowania tego samego problemu na kilka różnych sposobów (różnymi symbolami)", "Awaria oprogramowania", "Błąd systemu operacyjnego"], correct: 1, explanation: "Redundancja oznacza, że modeler ma do dyspozycji kilka zupełnie różnych symboli graficznych, aby narysować dokładnie tę samą sytuację logiczną." },
        { type: "single", question: "79. Co należy dodać na mapie procesu, aby nowi pracownicy mogli łatwo zrozumieć symbole?", options: ["Znak wodny", "Historię zmian w ustawie", "Pustą stronę", "Legendę (opis symboli)"], correct: 3, explanation: "Legenda zawierająca objaśnienie symboli skutecznie ujednolica słownik wizualny pomiędzy twórcą mapy a mniej technicznym personelem." },
        { type: "single", question: "80. Jakie popularne oprogramowanie od firmy Microsoft jest często używane do modelowania m.in. BPMN?", options: ["MS Paint", "MS Wordpad", "MS Visio", "MS Access"], correct: 2, explanation: "Microsoft Visio to jedno z najstarszych i najpopularniejszych narzędzi do rysowania diagramów korporacyjnych z użyciem wbudowanych bibliotek BPMN." },
        { type: "single", question: "81. Które z poniższych narzędzi to systemy wspomagające mapowanie procesów w chmurze?", options: ["Winamp i Pasjans", "Bizagi, ADONIS, Lucidchart, IBM Blueworks", "Notepad++ i Kalkulator", "Adobe Premiere Pro"], correct: 1, explanation: "Wyżej wymienione to profesjonalne systemy chmurowe (np. SaaS), zaprojektowane specjalnie z myślą o współdzielonym mapowaniu procesów." },
        { type: "single", question: "82. Na mapie procesu zdefiniowano 'Czas realizacji zadania' i 'Czas oczekiwania'. Czym jest 'Czas przebiegu'?", options: ["Sumą czasu realizacji i czasu oczekiwania dla danego kroku lub całego procesu", "Czasem na dojście do pracy", "Czasem przerw obiadowych minus czas pracy", "Różnicą między oczekiwaniem a realizacją"], correct: 0, explanation: "Czas przebiegu reprezentuje całościowy nakład czasu (lead time) od zainicjowania procesu do jego zakończenia, dodając do siebie czas pracy oraz przerwy." },
        { type: "single", question: "83. Dla jakich procesów (wg Page) należy tworzyć szczegółowe, długe mapy?", options: ["Kiedy proces jest błahy i bez wpływu", "Dla procesów jednorazowych, wykonywanych w 2 minuty", "Kiedy w procesie występuje duża rotacja, proces angażuje wiele osób i generuje dużo błędów/skarg", "Tylko dla procesów darmowych"], correct: 2, explanation: "W procesach o skomplikowanej logice i dużej usterkowości precyzyjna, długa mapa pomaga skutecznie przeszkolić nowe osoby i usunąć błędy." },
        { type: "single", question: "84. W jaki sposób należy określać kierunek na tradycyjnych schematach?", options: ["Dowolnie", "Od prawej do lewej, od dołu do góry", "Zazwyczaj od lewej do prawej i z góry na dół", "Tylko pionowo z dołu do góry"], correct: 2, explanation: "Konwencja z góry na dół i od lewej do prawej jest naturalna dla cywilizacji zachodniej, ułatwiając i przyspieszając płynne odczytywanie przepływów." },
        { type: "single", question: "85. Automatyzacja jako metoda doskonalenia procesu powinna być:", options: ["Zastosowana jako pierwsza przed analizą", "Zastosowana na samym końcu, dopiero po uproszczeniu, wystandaryzowaniu i usunięciu śmieci z procesu", "Używana by przyspieszyć zły proces", "Tylko na poziomie prezesa"], correct: 1, explanation: "Cyfryzacja i automatyzacja bałaganu tworzy tylko szybszy bałagan; dlatego powinno się to robić dopiero po uproszczeniu struktury (Lean)." },
        { type: "single", question: "86. Co oznacza określenie 'Czynności niedodające wartości' (Non-value added)?", options: ["To najważniejsze elementy dla klienta", "Działania, które zabierają czas/zasoby, ale z perspektywy klienta są bezużyteczne i klient by za nie nie zapłacił", "Są to tylko spotkania z zarządem", "Wymagania prawne państwa"], correct: 1, explanation: "Czynności NVA (Non-Value Added) konsumują zasoby i czas, nie tworząc jednocześnie żadnej rynkowej użyteczności z perspektywy klienta docelowego." },
        { type: "single", question: "87. Eliminacja duplikacji polega m.in. na:", options: ["Zwiększeniu ilości sprawdzających audytorów do 5 osób", "Wyeliminowaniu sytuacji, w której wiele działów osobno wpisuje do excela te same dane klienta, zamiast używać wspólnej bazy", "Kserowaniu wszystkich dokumentów w dwóch kopiach", "Kopiowaniu plików na pendrive"], correct: 1, explanation: "Każde ponowne ręczne przepisywanie tych samych wartości do innego arkusza generuje tylko nadmiarowe błędy i spowalnia ogólny przepływ." },
        { type: "single", question: "88. Jak odróżnić cel procesu od jego zakresu?", options: ["Nie da się", "Cel to 'Po Co' (np. minimalizacja błędu), a Zakres to 'Od Kiedy do Kiedy' trwają prace", "Cel to pracownicy, Zakres to managerowie", "Cel to zysk, Zakres to strata"], correct: 1, explanation: "Cel to dążenie biznesowe, dla którego proces istnieje, z kolei zakres wskazuje tylko twarde punkty odcięcia: gdzie praca się zaczyna, a gdzie kończy." },
        { type: "single", question: "89. Na czym polega zasada 'Przełożenia' miar w BPM?", options: ["Proces musi być mierzony tymi samymi wskaźnikami co sprzedaż", "Mierniki sukcesu muszą bezwzględnie korespondować z założeniami biznesowymi oraz potrzebami klienta", "Liczba miar musi przekroczyć 100", "Miary wkleja się zawsze do Excela"], correct: 1, explanation: "Mierzenie procesów dla samego mierzenia jest bezcelowe, dlatego wskaźniki muszą zawsze być wypadkową strategii firmy i oczekiwań rynku." },
        { type: "single", question: "90. Co oznacza określenie 'Użytkownik grafiki' w dokumencie procesu przygotowania opakowania?", options: ["Klient kupujący towar", "Korektor poprawiający błędy", "Program (drukarka)", "Aktor, dla którego zdefiniowane są konkretne wymagania (np. oczekiwanie prawdziwych inf. o produkcie) w dokumencie zakresu"], correct: 3, explanation: "W opisanym przypadku biznesowym 'użytkownik' nie jest klientem w sklepie, lecz po prostu ogniwem lub działem, które odczytuje i weryfikuje wymogi." },
        { type: "single", question: "91. Kto jest uznawany za twórcę 'Scientific Management' (naukowej organizacji pracy) na pocz. XX w.?", options: ["Bill Gates", "Frederick Winslow Taylor", "Steve Jobs", "Peter Drucker"], correct: 1, explanation: "Taylor był inżynierem amerykańskim, który za sprawą swojego dzieła 'Zasady naukowego zarządzania' dał początek inżynierii procesowej na taśmach montażowych." },
        { type: "single", question: "92. Do jakiej metodyki odnoszą się prace W. Edwardsa Deminga?", options: ["TQM (Total Quality Management) i statystycznej kontroli procesu", "BPR (Reengineering)", "SCRUM", "PRINCE2"], correct: 0, explanation: "Deming jest ikoniczną postacią rewolucji jakościowej w Japonii po II wojnie światowej, a jego 14 zasad to fundament kontroli jakości TQM." },
        { type: "single", question: "93. Która zasada pochodzi od Deminga?", options: ["Winny błędu jest w 99% człowiek", "Procesów kreatywnych się nie mierzy", "Winny problemów jakościowych jest przeważnie proces/system, a nie bezpośrednio pracownik", "Błędy to koszt wpisany w naturę biznesu, należy go ignorować"], correct: 2, explanation: "To klasyczny wniosek Deminga: zmuszanie ludzi do lepszej pracy nic nie da, jeśli sam system czy wadliwie skonstruowany proces zmusza ich do pomyłek." },
        { type: "single", question: "94. Six Sigma, zaproponowana w Motoroli w latach 80. przez Billa Smitha, stawia za główny cel:", options: ["Rozbudowę zasobów ludzkich", "Minimalizację defektów przez rygorystyczne procedury statystyczne (redukcję zmienności)", "Wykreowanie nowej nazwy dla firmy", "Wyeliminowanie wszystkich maszyn z produkcji"], correct: 1, explanation: "Metodologia Six Sigma ma swoje korzenie w rygorystycznym, statystycznym ograniczaniu defektów do poziomu 3,4 błędu na milion możliwości (w Motoroli)." },
        { type: "single", question: "95. Podejście BPR (Business Process Reengineering) z lat 90. spopularyzowane przez Hammera cechowało się:", options: ["Poprawianiem procesów małymi kroczkami", "Zwróceniem się ku całkowitemu zburzeniu starego układu i radykalnemu, nowemu zaprojektowaniu procesów", "Zakazem używania komputerów", "Wyłącznym badaniem zadowolenia pracowników"], correct: 1, explanation: "W kontraście do powolnych działań poprawczych (Lean), BPR zakładało czystą kartkę papieru, burzenie starych silosów i skokową reinżynierię całej firmy." },
        { type: "single", question: "96. Narzędzia procedury DMAIC w Six Sigma to skrót od:", options: ["Define, Map, Assign, Implement, Check", "Do, Make, Assert, Improve, Control", "Define, Measure, Analyze, Improve, Control", "Detect, Modify, Alter, Innovate, Close"], correct: 2, explanation: "Procedura DMAIC to pięciofazowy fundament pracy przy projektach optymalizacyjnych Six Sigma." },
        { type: "single", question: "97. SIPOC to narzędzie z fazy 'Define'. Co oznacza to rozwinięcie?", options: ["System, IT, Process, Operation, Control", "Supplier, Input, Process, Output, Customer", "Start, Internal, People, Out, Client", "Source, Income, Payment, Outcome, Cash"], correct: 1, explanation: "Nazwa SIPOC wymusza spojrzenie na cały system łańcucha dostaw od Dostawcy aż do ostatecznego Klienta." },
        { type: "single", question: "98. Co jest głównym celem diagramu SIPOC?", options: ["Wykonanie skomplikowanej symulacji 3D", "Upewnienie się, że wszyscy członkowie zespołu mają jednolity, wysokopoziomowy (5-7 kroków) pogląd na granice, wejścia i wyjścia procesu", "Skrócenie czasu przerw pracowników", "Napisanie skryptu w C#"], correct: 1, explanation: "Zrobienie prostej macierzy SIPOC na start (5-7 kroków) zapobiega przedwczesnemu utonięciu zespołu w nieistotnych, mikroskopijnych detalach procesu." },
        { type: "single", question: "99. CVC (Customer Voice Chart) w fazie Define służy do:", options: ["Projektowania grafiki 3D produktu", "Identyfikacji prawdziwych potrzeb klienta i przełożenia skarg/uwag na język wymagań pozytywnych", "Podnoszenia głosu na klienta w sklepie", "Oceny akustyki na infolinii"], correct: 1, explanation: "CVC pomaga 'wyciągnąć' od klienta powody frustracji i przetłumaczyć je z destrukcyjnych zażaleń na konkretne, pozytywne wymagania funkcjonalne." },
        { type: "single", question: "100. Rozwinięcie skrótu CTQ to:", options: ["Cost-To-Quality", "Critical-To-Quality (wymagania krytyczne dla jakości punktu widzenia klienta)", "Control-The-Queue", "Center-To-Quarter"], correct: 1, explanation: "Wskaźnik CTQ (Critical-To-Quality) przekłada miękkie i mętne głosy klienta na mierzalne wartości i wymogi, od których zależy odczuwalna jakość." },
        { type: "single", question: "101. CTB (Critical-to-Business) różni się od CTQ tym, że:", options: ["Dotyczy tylko firm z branży IT", "Nie ma między nimi różnicy", "Opiera się na potrzebach głównych interesariuszy/biznesu, a nie tylko bezpośredniego klienta końcowego", "Jest mniej ważne niż CTQ"], correct: 2, explanation: "Podczas gdy CTQ bada wyłącznie preferencje odbiorców (np. jakość plastiku), CTB zajmuje się twardymi wymogami biznesu (np. opłacalnością marży, zwrotem dla akcjonariuszy)." },
        { type: "single", question: "102. Model Kano służy do:", options: ["Mapowania procesu produkcyjnego w fabrykach farb", "Klasyfikacji potrzeb klienta na: podstawowe (muszą być), jednowymiarowe i ekscytujące (delighters)", "Sprawdzania opłacalności reklamy telewizyjnej", "Sortowania pracowników od najstarszego do najmłodszego"], correct: 1, explanation: "Model Kano w sposób wizualny udowadnia, że spełnienie wyłącznie podstawowych oczekiwań ustrzeże nas przed skargami, ale nie wykreuje wielkiego zachwytu klienta." },
        { type: "single", question: "103. Czym są atrybuty 'Delighter' w modelu Kano?", options: ["Cechami, których brak nie powoduje niezadowolenia (klient ich nie oczekuje), ale ich obecność wywołuje zachwyt", "Cechami absolutnie wymaganymi (jak koła w samochodzie)", "Cechami, które zmniejszają zadowolenie z każdym użyciem", "Zepsutymi elementami produktu"], correct: 0, explanation: "Ekscytatory (Delighters) to niespodziewane bonusy, jak np. darmowa kawa w warsztacie; ich brak nie zraża klienta, bo po prostu się ich tam nie spodziewał." },
        { type: "single", question: "104. Analiza interesariuszy w fazie Define zakłada m.in.:", options: ["Zwolnienie opornych pracowników", "Sporządzenie listy osób wpływowych i zdefiniowanie działań łagodzących opór przed wdrożeniem Six Sigma", "Ignorowanie zdania dyrektorów finansowych", "Podzielenie firmy na wrogie obozy"], correct: 1, explanation: "Proaktywne zmapowanie, kto kogo lubi i kto ma decydujący wpływ na budżet, pozwala zespołom Six Sigma łagodzić opór polityczny jeszcze przed jego powstaniem." },
        { type: "single", question: "105. Macierz miar to narzędzie z fazy Measure, które służy do:", options: ["Rozliczenia wyjazdów służbowych", "Zestawienia wyznaczonych CTQ/CTB z proponowanymi miernikami i oceny siły tej zależności (np. silna/ słaba)", "Lokalizacji biurek", "Budowy fundamentów"], correct: 1, explanation: "Dzięki tej macierzy zyskujemy pewność, że w ogóle będziemy potrafili mierzalnie udowodnić spełnienie celów, do których zmusza nas CTQ/CTB." },
        { type: "single", question: "106. Dane zebrane w procesie na skali od 1 do 5 (np. ocena satysfakcji klienta) to:", options: ["Dane ilościowe ciągłe", "Dane jakościowe o skali nominalnej", "Dane jakościowe o skali porządkowej", "Dane typu boolowskiego"], correct: 2, explanation: "Skala porządkowa umożliwia ustawienie zebranych danych w hierarchii (np. stopień zadowolenia 1-5), ale uniemożliwia obliczanie z nich tradycyjnych różnic i stosunków jak w skali metrycznej." },
        { type: "single", question: "107. Diagram Pareto oparty jest na regule:", options: ["20% przyczyn powoduje 80% problemów / skutków", "50% pracowników robí 50% normy", "90% czasu marnuje się na 10% zadań", "100% procesów jest uszkodzonych"], correct: 0, explanation: "Zasada Pareto (80/20) przypomina decydentom, by w natłoku problemów skoncentrować wysiłki na kluczowej mniejszości, która powoduje większość strat." },
        { type: "single", question: "108. Cel tworzenia wykresu Pareto to:", options: ["Analiza estetyki wykresów słupkowych", "Określenie i priorytetyzacja najważniejszych przyczyn błędów, by zająć się nimi w pierwszej kolejności", "Wizualizacja wydatków na kawę", "Sprawdzenie obecności pracowników"], correct: 1, explanation: "Wizualizacja słupkowa w Pareto błyskawicznie szereguje defekty od najczęstszych do najrzadszych, natychmiastowo identyfikując tzw. 'najsłabsze ogniwo' procesu." },
        { type: "single", question: "109. Histogram w fazie Measure służy do:", options: ["Analizy geograficznej", "Wyznaczania terminów w projekcie", "Graficznego przedstawienia rozkładu i zmienności badanej cechy (np. czasu trwania setek operacji)", "Analizy tekstu procedur"], correct: 2, explanation: "Histogram jako wykres powierzchni rozkładu pozwala łatwo i szybko nałożyć wyniki pomiarów na pożądane widełki techniczne (tzw. specyfikacje klienta)." },
        { type: "single", question: "110. Karta przebiegu procesu (Run Chart) różni się od histogramu tym, że:", options: ["Pokazuje tylko jedno zdarzenie", "Zawsze jest czarno-biała", "Prezentuje układ danych w funkcji upływającego czasu (szeregi czasowe), by wychwycić trendy", "Ignoruje zmienne czasowe"], correct: 2, explanation: "Karta (Run Chart) uziemia dane na osi upływającego czasu, pozwalając na szybkie wykrycie momentu, w którym maszyna lub pracownik zaczęli tracić wydajność." },
        { type: "single", question: "111. Co to jest DPMO?", options: ["Defects Per Minute Operations", "Departament of Process Management Office", "Defects Per Million Opportunities (liczba defektów na milion okazji)", "Data Production Multi Output"], correct: 2, explanation: "DPMO to klasyczny, ustandaryzowany wskaźnik wadliwości w Six Sigma, odzwierciedlający, ile pomyłek zdarzyłoby się na każdy milion szans na ich popełnienie." },
        { type: "single", question: "112. Wzór na obliczenie DPMO to: (D/(NxO))x1 000 000. Zmienna 'O' to:", options: ["Operations (liczba przepracowanych godzin)", "Opportunities (liczba możliwych defektów do popełnienia w jednej jednostce produktu/usługi)", "Organization size", "Output cost"], correct: 1, explanation: "Dzięki zmiennej 'O' (Opportunities) dowiadujemy się, na ile różnych sposobów pracownik lub maszyna mogli zepsuć konkretną sztukę wyrobu." },
        { type: "single", question: "113. Jeśli w 80 produktach występuje 5 okazji do błędu każdy, i znaleziono 14 defektów, DPMO wynosi 35,000. Jaki to w przybliżeniu poziom Sigma (wg tabel)?", options: ["Około 6 Sigma", "Około 3,3 - 3,4 Sigma", "Dokładnie 2 Sigma", "1 Sigma"], correct: 1, explanation: "Wynik w okolicy 35 000 DPMO pokrywa się ściśle z empirycznymi tabelami konwersji używanymi w Six Sigma, oznaczającymi stabilność na poziomie niecałych 3,4 Sigmy." },
        { type: "single", question: "114. Do czego służy diagram Ishikawy (Fishbone) w fazie Analyze?", options: ["Do liczenia zysku firmy", "Do tworzenia mapy zależności pomiędzy problemem (skutkiem) a jego wszystkimi możliwymi przyczynami korzennymi", "Do planowania urlopów rybaków", "Do graficznego narysowania bazy danych"], correct: 1, explanation: "Klasyczny układ osi ryby pozwala wymusić na członkach zespołu strukturalną burzę mózgów: jakie metody, sprzęt lub ludzie doprowadzili do danego skutku?" },
        { type: "single", question: "115. Diagram Spaghetti wykorzystuje się do:", options: ["Gotowania potraw w biurze", "Ułożenia struktury plików na dysku", "Przeanalizowania fizycznych ścieżek przemieszczania się zasobów/ludzi i wykrycia marnotrawstwa", "Rozplątania kabli pod biurkiem"], correct: 2, explanation: "Fizyczne wykreślenie ścieżek na rzucie hali lub biura często ujawnia setki kilometrów zbędnego chodzenia załatwiającego proste, rutynowe zadania." },
        { type: "single", question: "116. W fazie Improve często używa się techniki 5S. Jakie są jej główne założenia?", options: ["Sell, Send, Save, Stop, Start", "Sort, Set in order, Shine, Standardize, Sustain (metodologia organizacji stanowiska pracy z Lean)", "System, Structure, Service, Sales, Success", "To technika tylko dla działu księgowości"], correct: 1, explanation: "Pięć kroków (Sort, Set in order, Shine, Standardize, Sustain) tworzy czyste i uporządkowane środowisko pracy, na którym każda aberracja jest od razu widoczna." },
        { type: "single", question: "117. Metoda Poka-Yoke oznacza:", options: ["Unikanie spotkań", "Japońską grę karcianą", "Projektowanie rozwiązań błądoodpornych - takich, w których fizycznie lub procesowo bardzo trudno popełnić błąd", "Audyt z certyfikatem"], correct: 2, explanation: "Dobrze wdrożone Poka-Yoke sprawia, że złożenie części czy wypełnienie formularza jest możliwe tylko w jeden (prawidłowy) sposób." },
        { type: "single", question: "118. Technika '5 Why' (5 Dlaczego) polega na:", options: ["Zadawaniu pięciu przypadkowych pytań w ankiecie", "Iteracyjnym pytaniu 'dlaczego?', by dojść od objawów problemu do jego pra-przyczyny (root cause)", "Powtarzaniu dlaczego tak jest, by klient zrezygnował z reklamacji", "Szkoleniu pięciu pracowników rocznie"], correct: 1, explanation: "Powtarzanie słowa 'dlaczego?' jest niezbędne, by zdrapać wierzchnią warstwę problemu (np. awarię maszyny) i dotrzeć do źródła (np. nieczytelnej instrukcji)." },
        { type: "single", question: "119. W fazie Control procedury DMAIC buduje się często tzw.:", options: ["Plan reakcji (Response plan) i karty kontrolne do ciągłego nadzoru odchyleń procesu", "Scenariusze filmowe", "Nowe działy w firmie", "Biuro obsługi prasowej"], correct: 0, explanation: "Faza Control z definicji zapobiega cofnięciu się usprawnionego procesu do swoich starych, złych nawyków po zakończeniu hucznych celebracji." },
        { type: "single", question: "120. Który z elementów jest uznawany za formę wdrożenia fazy Control?", options: ["Usunięcie wszystkich dokumentów PDF", "Sformalizowanie nowej procedury SOP (Standard Operating Procedure) uwzględniającej naniesione poprawki w procesie", "Powrót do starych praktyk po zakończeniu audytu", "Zamknięcie przedsiębiorstwa"], correct: 1, explanation: "Dokumentacja nowej rutyny jest jedynym gwarantem trwałej, systematycznej powtarzalności dla nowych pracowników zrekrutowanych długo po audycie." },
        { type: "single", question: "121. Lean Management koncentruje się przede wszystkim na:", options: ["Zwiększaniu tolerancji na defekty maszyn", "Tworzeniu magazynów wielkopowierzchniowych", "Maksymalizacji wartości dla klienta poprzez radykalną redukcję tzw. marnotrawstw (Muda)", "Zwiększeniu biurokracji do granic możliwości"], correct: 2, explanation: "Odchudzone podejście (Lean) skupia się na skracaniu czasów przebiegu oraz bezwzględnym tropieniu zasobów, które pochłaniają gotówkę, a nie tworzą wartości." },
        { type: "single", question: "122. Wymienia się m.in. 7 form marnotrawstwa (TIMWOOD). Litera 'W' oznacza:", options: ["Wealth", "Waiting oczekiwanie (przestoje, kolejki)", "Water", "Work"], correct: 1, explanation: "W klasycznym skrócie marnotrawstw TIMWOOD, litera 'W' określa mrożenie zasobów z powodu kolejek i bezczynnego oczekiwania na swoją kolej operacyjną." },
        { type: "single", question: "123. Metodyka Zwinna (Agile) w odniesieniu do procesów zakłada, że:", options: ["Przewidywanie i rygorystyczne planowanie jest lepsze niż adaptacja", "Wiedza pochodzi wyłącznie od menedżerów szczebla najwyższego", "Lepiej skupiać się na ludziach, interakcjach i adaptacji do zmiennych wymogów, niż na sztywnych planach", "Należy napisać 500-stronicową instrukcję przed początkiem pracy"], correct: 2, explanation: "Model ten dostrzega, że przy budowie skomplikowanych i innowacyjnych projektów, statyczny roczny plan ustępuje szybkiej adaptacji i iteracjom." },
        { type: "single", question: "124. Głównym motorem rozwoju w metodologii Agile jest:", options: ["Kierownik w zamkniętym gabinecie", "Krzywa uczenia się maszyn produkcyjnych", "Zespół samorganizujący się i informacja zwrotna od klienta (często po tzw. sprintach)", "Audytor finansowy"], correct: 2, explanation: "Sprinty umożliwiają regularną konfrontację z klientem, a samozarządzający się zespół reaguje na kryzys bez czekania na pisemną zgodę kierownika." },
        { type: "single", question: "125. Na czym polega 'Urgency culture' (kultura pilności) w innowacyjnych środowiskach Agile?", options: ["Ciągłym poszukiwaniu nowych klientów i przyspieszonym generowaniu drobnych wartości dla nich poprzez krótkie iteracje", "Bieganiu po biurze z dokumentami", "Wydzwanianiu do pracowników w weekendy", "Unikaniu podejmowania decyzji do ostatniej chwili"], correct: 0, explanation: "Agile kreuje presję czasu po to, by szybciej pokazać odbiorcy niedoskonały prototyp (MVP), by natychmiast otrzymać twardą, uczącą informację zwrotną." },
        { type: "single", question: "126. Procesy kreatywne (B+R, marketing, projektowanie oprogramowania) wg modelu Hensla:", options: ["Nie da się ich zamodelować ani usprawniać", "Podlegają zwinności i modelom współpracy z racji unikatowości zadań, jednak nadal można opisać w nich ramy procesowe", "Należy je traktować identycznie jak taśmę produkcyjną w montowni aut", "Nie wytwarzają wartości dla firmy"], correct: 1, explanation: "Kreatywność nie wyklucza ram organizacyjnych - pracownik nadal realizuje projekt, którego start i zadowolenie klienta na końcu podlegają weryfikacji i doskonaleniu." },
        { type: "single", question: "127. Pracownik wiedzy (Knowledge Worker) w modelu procesowym wymaga:", options: ["Ścisłego zarządzania przez procedury mikro-kontrolne na każdy ruch palcem", "Głębokiego zrozumienia celu procesu, pracy grupowej, autonomii i samozarządzania", "Codziennych kar za spóźnienia i kontroli toalet", "Pozbawienia dostępu do Internetu"], correct: 1, explanation: "Wysokiej klasy specjaliści generują zysk dzięki własnej wiedzy i wnikliwości, dlatego sztywna struktura działa na nich wyjątkowo destruktywnie i anty-motywacyjnie." },
        { type: "single", question: "128. Czym jest wskaźnik BMI wg Hamela i Zanniniego?", options: ["Body Mass Index dla dietetyków w firmie", "Basic Model Integrator dla oprogramowania IT", "Bureaucracy Mass Index - wskaźnik masy biurokracji w organizacji uświadamiający generowane przez nią koszty opóźnień", "Business Master Identifier"], correct: 2, explanation: "Twórcy narzędzia wyceniają stracone godziny, zasoby i frustrację na setki miliardów dolarów, które uciekają firmom z powodu zbędnych warstw w piramidzie dowodzenia." },
        { type: "single", question: "129. Tarcie w klasyfikacji biurokracji oznacza:", options: ["Brak środków smarnych w parku maszynowym", "Zbyt dużo pracy papierkowej zwalniającej procesy decyzyjne do absurdalnego tempa", "Kłótnie personalne między kadrą kierowniczą wyższego szczebla", "Opór stawiany przez stary system informatyczny"], correct: 1, explanation: "Im więcej czasu trzeba spędzać na poszukiwaniu pieczątek od menedżerów szczebla średniego, tym większe jest administracyjne tarcie w machinie biznesowej." },
        { type: "single", question: "130. Izolacja jako wada w strukturze biurokratycznej opisana jest jako:", options: ["Brak dostępu do sieci WiFi", "Delegowanie pracowników na wyjazdy służbowe jednoosobowe", "Nadmierne przeznaczanie czasu na sprawy ściśle 'polityczno-wewnętrzne' a brak skupienia na potrzebach prawdziwego klienta", "Brak biurek w systemie open space"], correct: 2, explanation: "Izolacja u menedżerów wyższego szczebla objawia się w ten sposób, że 90% czasu inwestują w walkę o wpływy i biurokrację, kompletnie zapominając o realiach rynkowych." },
        { type: "single", question: "131. Jaki negatywny skutek niesie 'przerost administracji' wg klasyfikacji BMI?", options: ["Brakuje pracowników fizycznych do wykonania prac budowlanych", "Wzrastająca ilość szczebli zarządczych powoduje inercję i spowolnienie przekazywania kluczowych informacji w dół iw górę hierarchii", "Pojawia się za dużo miejsca w biurze", "Pracownicy zaczynają nadmiernie eksperymentować"], correct: 1, explanation: "Rozbudowane szczeble zarządcze wydłużają tzw. łańcuch dowodzenia, powodując niebezpieczne opóźnienia, głuchy telefon i osłabienie chęci do branía na siebie ryzyka." },
        { type: "single", question: "132. Czy outsourcing poszczególnych zadań procesu wpływa na projektowanie mapy?", options: ["Tak, trzeba go zidentyfikować jako aktora zewnętrznego wraz z przekazywanymi danymi we/wy", "Nie, ignoruje się dostawców zewnętrznych", "Outsourcing jest zakazany w klasycznym BPM", "Tylko w procesie rekrutacji"], correct: 0, explanation: "Z perspektywy ostatecznego efektu procesowego nie ma znaczenia, czy usługa jest kupiona, nadal należy umieścić ją na mapie jako zewnętrzny klocek w układance." },
        { type: "single", question: "133. Rozwiązanie IT w chmurze zastosowane w procesach HR stanowi przykład:", options: ["Silosowości struktury firmy", "Infrastruktury procesu warunkującej jego sprawne działanie we współczesnych organizacjach", "Biurokracji nieprzynoszącej korzyści", "Wyłącznie kosztów ogólnozakładowych"], correct: 1, explanation: "Współczesne podejście chmurowe integruje w czasie rzeczywistym wszystkie aplikacje wspierające, stając się twardym i solidnym spoiwem (infrastrukturą) do BPM." },
        { type: "single", question: "134. Gdy po wprowadzeniu zmian w procesie następuje opór społeczny, Kotter radzi by:", options: ["Zwolnić wszystkich liderów związkowych w trybie dyscyplinarnym", "Zignorować narzekania i poczekać", "Opierać się na silnym zespole wprowadzającym, utrzymać poczucie pilności i w sposób ciągły komunikować i osadzać nową wizję w kulturze", "Wycofać się natychmiast ze wszystkich zmian po pierwszym głosu sprzeciwu"], correct: 2, explanation: "Zgodnie z ośmioma krokami Kottera, silny, zaangażowany i wytrwały zespół przewodni potrafi skruszyć każdą opozycję, stale promując nową, sensowniejszą wizję." },
        { type: "single", question: "135. Jeśli wykonawca procesu stale skarży się, że przebieg procesu go myli, właściciel powinien:", options: ["Przenieść go do innego działu natychmiast", "Przeprowadzić wywiad, usunąć redundantne i 'zawiłe' ścieżki i tym samym uprościć mapę przepływu (tzw. upraszczanie procesu)", "Podwyższyć mu wymagane KPI za karę", "Nic nie robić, bo to normalne zjawisko w fabryce"], correct: 1, explanation: "Podejście ciągłego doskonalenia uczy, by upraszczać nieoczywiste pętle, zamiast oczekiwać od pracowników przyswajania bezsensownej, nielogicznej pamięciówki." },
        { type: "single", question: "136. Co w BPM oznacza 'Dążenie do eliminacji gier politycznych'?", options: ["Organizowanie turniejów gier planszowych w piątki", "Wprowadzanie płaskich struktur, gdzie priorytetem jest mierzalny przebieg procesu dostarczającego wartość, a nie budowa indywidualnych stref wpływów i stanowisk kierowników departamentów", "Umożliwienie pracownikom startu w wyborach samorządowych", "Brak polityki rekrutacyjnej w firmie"], correct: 1, explanation: "BPM kładzie podwaliny pod spłaszczanie struktury, gdzie liczy się poprzeczny łańcuch dostarczający usługę, a nie budowa królestw poszczególnych dyrektorów." },
        { type: "single", question: "137. W jaki sposób BPM może oddziaływać na innowacje technologiczne (jak AI/RPA)?", options: ["Opóźniać ich wdrażanie bo procedury tego zakazują", "Samoistnie optymalizować powtarzalne procesy bez udziału człowieka, opierając się na uprzednio zmapowanej logice z użyciem uczenia maszynowego", "Zamieniać maszyny na ludzi", "Są one kompletnie niekompatybilne"], correct: 1, explanation: "Sztuczna Inteligencja potrzebuje precyzyjnego algorytmu i mapy, bez której niemożliwa jest automatyzacja powtarzalnych, operacyjnych i ustandaryzowanych rutyn." },
        { type: "single", question: "138. Kiedy warto powtórnie przeprowadzić szkolenia dotyczące procesu?", options: ["Gdy mierniki sukcesu (Control) wykazują liczne błędy wynikające z braku umiejętności po stronie wykonawcy (nowego pracownika, lub zmiany systemu)", "Tylko wtedy, kiedy w firmie jest za duży budżet szkoleniowy", "Nigdy, raz opublikowana instrukcja powinna wystarczyć pracownikowi do emerytury", "Tylko w weekendy jako kara dla pracowników"], correct: 0, explanation: "Skuteczne szkolenie nie jest zdarzeniem jednorazowym - winno zostać bezwzględnie wdrożone natychmiast, gdy wskaźniki (np. Control) zasygnalizują rażące obniżenie efektywności w wyniku rotacji." },
        { type: "single", question: "139. Jak nazywa się dokument operacyjny, doprecyzowujący każdy krok mapy i dający wyczerpujące info nowym osobom w procesie?", options: ["Lista zakupów", "RACI Matrix Base", "Dokument Informacyjny (DI) - bywa nazywany też SOP (Standard Operating Procedure)", "Dokument z wizją prezesa"], correct: 2, explanation: "Dokument (SOP) stanowi uzupełnienie prostej mapy graficznej, przekazując niezbędne detale techniczne (np. lokalizację plików), kluczowe dla nowych wykonawców." },
        { type: "single", question: "140. Kluczowy etap: 'Budowanie poparcia dla projektu' w procedurze DMAIC mieści się w kroku:", options: ["Measure - bo trzeba mierzyć poparcie w ankietach", "Control bo trzeba to na bieżąco nadzorować", "Define w ramach tworzenia matryc Analizy Interesariuszy", "Improve w ramach wdrażania ulepszeń"], correct: 2, explanation: "Analiza oporu już na etapie planowania strategii i definicji granic projektu oszczędza kadrze bolesnych niespodzianek na dalszych etapach wdrażania ulepszeń." },
        { type: "single", question: "141. Bariera silosowości w firmach (funkcjonalne komórki patrzące wyłącznie na własny czubek nosa) doprowadziła do:", options: ["Rozwoju podejścia zwinnego i poprzecznego zarządzania procesami przekraczającego ramy pojedynczych departamentów (end-to-end)", "Ugruntowania idei masowego zwolnienia zarządu", "Rozwoju tradycyjnego taylorowskiego podejścia naukowego i zamykania ludzi w małych fabrykach", "Wyzerowania podatków od zysków korporacji"], correct: 0, explanation: "Brak wglądu horyzontalnego powodował przerzucanie się winą przez poszczególne departamenty, wymuszając zmianę zarządzania na podejście wędrujące z klientem ('end-to-end')." },
        { type: "single", question: "142. Ile % polskich organizacji wdraża BPM (według Raportu 2020) tylko na najwyższym poziomie - mierząc procesy i nimi faktycznie kierując poprzez Właścicieli (poziom 5)?", options: ["Około 95%", "Około 50%", "Zaledwie 5%", "Około 27%"], correct: 2, explanation: "Wynik pokazuje dobitnie, jak niewiele polskich firm zdołało skutecznie przejść od etapu rysowania pustych map do faktycznego wyciągania wniosków z twardych pomiarów systemowych." },
        { type: "single", question: "143. Gdy właściciel uświadomi sobie, że proces jest przestarzały, najgorszą rzeczą do zrobienia będzie:", options: ["Analiza przepływów z zespołem", "Zainicjowanie DMAIC", "Powiadomienie wykonawców o możliwych modyfikacjach oprogramowania i szkoleniach", "Zatajenie tych informacji i pozwolenie na tolerowanie tzw. 'dzikich', niesformalizowanych obejść (workarounds) stosowanych po cichu przez pracowników"], correct: 3, explanation: "Zatajanie obejść to najkrótsza droga do totalnej utraty kontroli, ponieważ 'dzikie' sposoby pracy łamią standard, uniemożliwiają pomiar i niszczą elastyczność systemu." },
        { type: "single", question: "144. Podejście procesowe czerpało inspiracje i wiedzę również z koncepcji:", options: ["Filozofii starożytnej Grecji", "Neurobiologii eksperymentalnej", "Kaizen, Total Quality Management oraz Lean Manufacturing", "Medycyny sądowej i chirurgii twardej"], correct: 2, explanation: "Filozofia procesowa to ewolucyjne połączenie mądrości japońskiego Lean (oszczędności), jakościowych pomiarów TQM oraz europejskiej logiki strukturalnej." },
        { type: "single", question: "145. Czy proces rekrutacji w firmie IT jest procesem?", options: ["Nie, to czynność jednorazowa", "Tak, zazwyczaj pomocniczym z perspektywy modelu łańcucha wartości, mającym określony początek, przepływ i rezultat (zatrudnienie lub odrzucenie kandydata)", "Nie, bo rekrutowani to 'ludzie' a proces tyczy się maszyn produkcyjnych", "Tak, ale jest procesem głównym, generującym bezpośrednio przychód ze sprzedaży oprogramowania na giełdzie"], correct: 1, explanation: "Choć rekrutacja nie przynosi bezpośrednio gotówki (więc jest procesem wspierającym), to ma swój klarowny początek (wakat) i przewidywalny koniec, przez co w pełni poddaje się zasadom BPM." },
        { type: "single", question: "146. Dlaczego określenie właściciela procesu bywa kością niezgody w dojrzałych organizacjach hierarchicznych?", options: ["Nikt nie chce premii za proces", "Stanowisko właściciela procesu przecina klasyczne strefy władzy wielu dyrektorów funkcjonalnych, burząc status quo decyzyjności i kontroli budżetowej", "Wymaga posiadania doktoratu z zarządzania, którego nikomu nie chce się robić", "Ponieważ prawo zakazuje istnienia takich stanowisk"], correct: 1, explanation: "Ustanowienie prawnego i faktycznego właściciela oznacza automatyczne zabranie wyłączności na proces dawnym, zazdrosnym dyrektorom poszczególnych komórek funkcjonalnych." },
        { type: "single", question: "147. Co w terminologii Lean oznacza 'Muda'?", options: ["Dobrą zmianę w procesie", "Narzędzie informatyczne typu open-source ułatwiające obieg danych i statystykę w fabryce", "Pojęcie wszelkiego marnotrawstwa, czyli czynności/nakładów niedodających wartości, z punktu widzenia ostatecznego klienta końcowego", "Ciągły pośpiech w biurze polegający na bieganiu"], correct: 2, explanation: "Każde marnotrawstwo (np. oczekiwanie na podpis, duplikacja raportów, nadmiarowe procedury biurokratyczne) ograbia klienta z wartości, a firmę z cennego zysku i zwinności." },
        { type: "single", question: "148. Częsta porażka we wdrożeniu Lean lub BPM wynika z faktu, że zarząd traktuje to podejście jako:", options: ["Nową formę marketingu wizualnego przed urzędem", "Zestaw czarodziejskich sztuczek, które rozwiążą problem natychmiast, z pominięciem ciężkiej pracy organicznej przy kulturze organizacyjnej oraz bolesnej transparentności miar i błędów", "Kolejny bezcelowy powód, by pracownicy zarabiali więcej bez mierzalnych wskaźników pracy", "Możliwość zrezygnowania z księgowości poprzez uproszczenia finansowe w KRS"], correct: 1, explanation: "Jeśli kierownictwo pragnie jedynie modnych nowinek (tzw. sztuczek na pokaz) dla audytorów, to wdrażany system nie ma najmniejszych szans zakotwiczenia się w kulturze organizacji." },
        { type: "single", question: "149. Podstawowa różnica między pomiarem procesu a komórki organizacyjnej:", options: ["Komórki mierzy się w kg, procesy w litrach prądu", "Mierniki komórki często ukrywają problem 'przerzucania' wadliwych danych do innych komórek. Mierniki procesu end-to-end mierzą finalną jakość oddawaną ostatecznemu klientowi", "Nie ma różnicy, komórka = proces w 100%", "Pomiar komórki robi się po cichu bez udziału pracowników, w nocy"], correct: 1, explanation: "Zarządzanie tradycyjną komórką najczęściej promuje lokalne, silosowe cele, tymczasem zarządzanie procesem od początku do końca zmusza do optymalizacji wyniku widocznego dla klienta zewnętrznego." },
        { type: "single", question: "150. Zarządzanie procesami uczy ostatecznie, że w dzisiejszym zróżnicowanym biznesie:", options: ["Dobry innowacyjny lider nie narzuca swoich wizji za pomocą bata, lecz koordynuje, wyznacza obiektywne wskaźniki, zapobiega oporowi społecznemu i czerpie z doświadczenia specjalistów wykonujących dane zadania na styku z klientem", "Trzeba pisać programy analityczne w notatniku Windows z zamkniętymi oczami", "Maszyny zastąpią wszystkich prawników w biurach w Warszawie", "Jedynym wyjściem dla firm jest zamknięcie projektów graficznych i wstrzymanie dystrybucji na terytorium krajów FMCG"], correct: 0, explanation: "Ostateczną lekcją wdrożenia BPM, Lean i Agile jest odejście od wojskowego systemu wydawania rozkazów na rzecz roli lidera wspierającego zwinny, zmotywowany i samosterujący zespół ekspertów." }
    ],

    flashcards: [
        { front: "BPM (Business Process Management)", back: "Zarządzanie procesami biznesowymi - horyzontalna koncepcja zarządzania organizacją, dążąca do optymalizacji przekrojowych przepływów pracy i generowania wartości dla klienta." },
        { front: "Proces biznesowy", back: "Zamknięty, logiczny ciąg powiązanych czynności, posiadający początek i koniec, który przekształca nakłady wejścia w wymierną wartość dodaną na wyjściu." },
        { front: "Właściciel procesu", back: "Menedżer lub specjalista ponoszący całkowitą odpowiedzialność za projekt i wynik procesu (end-to-end), często bez posiadania tradycyjnej władzy nad wszystkimi wykonawcami." },
        { front: "Wykonawca procesu", back: "Pracownik dysponujący wiedzą specjalistyczną, realizujący jedno lub kilka konkretnych zadań operacyjnych zdefiniowanych w mapie danego procesu." },
        { front: "Proces podstawowy (operacyjny)", back: "Rdzeń działalności firmy. Stanowi łańcuch wartości bezpośrednio generujący produkt lub usługę i przynoszący zysk (np. produkcja, sprzedaż)." },
        { front: "Proces pomocniczy (wspierający)", back: "Zapewnia niezbędne zasoby i infrastrukturę dla procesów operacyjnych. Nie dodaje wartości bezpośrednio dla klienta zewnętrznego (np. IT, HR, księgowość)." },
        { front: "Macierz RACI", back: "Narzędzie matrycowe służące do jednoznacznego przypisywania odpowiedzialności dla kroków procesu (R - Wykonawca, A - Akceptant, C - Konsultant, I - Informowany)." },
        { front: "Podejście silosowe (Kultura silosów)", back: "Hierarchiczny, nieefektywny styl, w którym komórki organizacyjne skupiają się na własnych celach, ignorując wymianę informacji i dobro przepływu całego procesu." },
        { front: "Metodyka DMAIC", back: "Znormalizowany cykl poprawy jakości z rodziny Six Sigma, obejmujący 5 faz: Define (Zdefiniuj), Measure (Zmierz), Analyze (Przeanalizuj), Improve (Popraw), Control (Skontroluj)." },
        { front: "Six Sigma", back: "Rygorystyczna metodyka optymalizacyjna wykorzystująca statystykę do drastycznej redukcji zmienności i defektów (cel: max 3,4 błędu na milion okazji)." },
        { front: "DPMO", back: "Defects Per Million Opportunities - wskaźnik wadliwości Six Sigma oznaczający matematyczną liczbę defektów przypadającą na każdy milion okazji do ich popełnienia." },
        { front: "SIPOC", back: "Wysokopoziomowy diagram z fazy Define: Supplier (Dostawca), Input (Wejście), Process (Proces), Output (Wyjście), Customer (Klient), określający ogólne granice projektu." },
        { front: "CTQ (Critical-To-Quality)", back: "Wymagania Krytyczne dla Jakości - przełożenie miękkich i emocjonalnych oczekiwań klienta na konkretne, mierzalne i twarde parametry procesu." },
        { front: "CTB (Critical-To-Business)", back: "Wymagania Krytyczne dla Biznesu - rygorystyczne wskaźniki biznesowe gwarantujące opłacalność, zgodność z prawem i zwrot dla akcjonariuszy, odrębne od próśb klienta." },
        { front: "Model Kano", back: "Narzzie klasyfikujące cechy produktu/usługi na trzy kategorie wpływające na satysfakcję klienta: podstawowe (muszą być), jednowymiarowe oraz zachwycające (ekscytatory)." },
        { front: "Zasada Pareto (Reguła 80/20)", back: "Heurystyka i narzędzie analityczne przypominające, że 80% problemów z jakością lub strat w firmie wynika z zaledwie 20% krytycznych przyczyn korzennych." },
        { front: "Histogram", back: "Wykres słupkowy w fazie Measure przedstawiający częstotliwość występowania badanej cechy (rozkład danych). Służy m.in. do oceny wykraczania procesu poza specyfikacje." },
        { front: "Diagram Ishikawy (Rybia Ość)", back: "Strukturalne narzędzie z fazy Analyze wykorzystywane do burzy mózgów i kategoryzowania wszystkich potencjalnych przyczyn, które doprowadziły do konkretnego problemu (skutku)." },
        { front: "Karta przebiegu (Run Chart)", back: "Dynamiczne narzędzie graficzne nakładające wyniki procesu na upływający czas, ułatwiające szybkie wychwycenie negatywnych trendów i anomalii (Fazy Measure i Control)." },
        { front: "System 5S", back: "Narzędzie wizualnej organizacji stanowiska pracy z Lean (Sort, Set in order, Shine, Standardize, Sustain), zapobiegające marnotrawstwu wynikającemu z poszukiwań i bałaganu." },
        { front: "Poka-Yoke", back: "Projektowanie inżynieryjne 'odporne na błędy' mechanizmów fizycznych lub systemowych, które uniemożliwiają lub skrajnie utrudniają popełnienie pomyłki." },
        { front: "Metoda 5 Why (5 Dlaczego)", back: "Technika iteracyjnego zadawania pytania 'dlaczego?' w celu przebicia się przez powierzchowne symptomy awarii i dotarcia do prawdziwej przyczyny korzennej problemu." },
        { front: "Diagram Spaghetti", back: "Graficzne zmapowanie na rzucie fizycznym wszystkich ścieżek przemieszczania się pracowników, materiałów lub dokumentów w celu wykrycia zbędnych odległości." },
        { front: "Lean Management", back: "Odchudzona koncepcja zarządzania. Zakłada ciągłe dostarczanie maksymalnej wartości klientowi przy jednoczesnej eliminacji wszelkiego marnotrawstwa i zbędnych czynności." },
        { front: "Muda", back: "Japońskie słowo oznaczające marnotrawstwo - każdą operację lub nakład, który pożera czas lub zasoby, lecz nie dodaje wartości z punktu widzenia ostatecznego klienta." },
        { front: "TIMWOOD (7 typów strat)", back: "Akronim głównych marnotrawstw w Lean: Transport, Inventory (Zapasy), Motion (Ruch), Waiting (Oczekiwanie), Overproduction (Nadprodukcja), Overprocessing (Nadmiarowe przetwarzanie), Defects (Defekty)." },
        { front: "BPR (Business Process Reengineering)", back: "Koncepcja z lat 90. zakładająca fundamentalne i radykalne przeprojektowanie procesów w organizacji od zera (od pustej kartki), z pominięciem powolnej ewolucji." },
        { front: "TQM (Total Quality Management)", back: "Rozpropagowane m.in. przez W. Deminga Kompleksowe Zarządzanie Jakością, kładące nacisk na ciągłe ulepszanie procesów i odpowiedzialność wszystkich pracowników za błędy." },
        { front: "Agile (Podejście Zwinne)", back: "Adaptacyjna metodyka zarządzania pracownikami wiedzy. Odrzuca sztywną mapę na rzecz samozarządzających się zespołów, krótkich iteracji (sprintów) i stałego kontaktu z klientem." },
        { front: "Dokument Zakresu", back: "Formalny kontrakt definiujący obszar usprawnień: wyznacza ramy procesu (początek/koniec), cel i role, aby zapobiec niekontrolowanemu 'rozlewaniu się' audytu na inne działy." },
        { front: "SOP (Standardowa Procedura Operacyjna)", back: "Dokument informacyjny i podręcznikowy dla konkretnej ścieżki. Tłumaczy słownie i uszczegóławia każdy element techniczny wskazany na graficznej mapie procesu." },
        { front: "BPMN (Notacja Modelowania)", back: "Standardowy, międzynarodowy język ikon i symboli do rzutowania map procesów, łączący prostotę wymaganą przez biznes z logiką implementacyjną używaną przez IT." },
        { front: "Zdarzenie (Event w BPMN)", back: "Okrągły symbol w mapowaniu BPMN, który sygnalizuje uwarunkowania brzegowe - definiuje fizyczny start, zakończenie lub punkt nasłuchiwania w trakcie procesu (np. otrzymanie maila)." },
        { front: "Bramka XOR (Wykluczająca BPMN)", back: "Romb ze znakiem 'X'. Działa jak zwrotnica - kieruje przepływ wyłącznie w jedną z możliwych ścieżek, zazwyczaj na podstawie ostrego warunku np. Tak / Nie." },
        { front: "Bramka Równoległa (AND w BPMN)", back: "Romb ze znakiem '+'. Reprezentuje rozgałęzienie jednoczesne; powoduje równoległe i niezależne wykonywanie dwóch lub więcej ścieżek przez system lub pracowników." },
        { front: "Baseny i Tory (Pools & Swimlanes)", back: "Struktura wizualna mapy w BPMN służąca do przejrzystego przypisywania odpowiedzialności za klocki (aktywności) do poszczególnych ról zawodowych, działów lub systemów informatycznych." },
        { front: "Metodologia IDEF3", back: "System opisu skupiający się nie na samym przepływie ról, lecz na 'jednostkach zachowania', obrazujących jak dany obiekt ulega przekształceniom z każdym kolejnym krokiem." },
        { front: "DFD (Data Flow Diagram)", back: "Inżynieryjny schemat przepływu skupiony absolutnie na informacjach - obrazuje wejścia i wyjścia bazy danych, procesy ich transformacji oraz miejsca magazynowania na dyskach." },
        { front: "Czas przebiegu (Lead Time)", back: "Całkowity upływ czasu od momentu zarejestrowania nowej sprawy/zamówienia do jej finalnego oddania. Składa się z czasu faktycznej obróbki (pracy) oraz wszystkich przestojów." },
        { front: "Czynności NVA (Non-Value Added)", back: "Fazy procesu niegenerujące wartości rynkowej (np. kserowanie, autoryzacje, biurokracja), za które konsument odmówiłby dobrowolnej zapłaty. Wymagają szybkiej redukcji." },
        { front: "Wąskie gardło (Bottleneck)", back: "Zadanie lub stanowisko o najniższej przepustowości w procesie. Zjawisko to spowalnia wszystkie etapy, tworzy przed sobą zatory i dyktuje absolutne tempo wydajności całej firmy." },
        { front: "Model zmian Kurta Lewina", back: "Psychologiczny zarys skutecznego wdrażania transformacji składający się z trzech etapów: Rozmrażanie (szok), Zmiana (wdrożenie nowych nawyków) i Zamrażanie (utrwalenie status quo)." },
        { front: "Kultura Pilności (Urgency Culture)", back: "Pozytywne środowisko innowacyjne (charakterystyczne dla Agile), gdzie stały kontakt z wymogami klienta zmusza zespół do natychmiastowych, acz bezpiecznych eksperymentów procesowych." },
        { front: "Standaryzacja", back: "Konsolidacja i sformalizowanie 'najlepszej znanej i udowodnionej na dziś praktyki' postępowania, gwarantująca powtarzalność procesów mimo rotacji kadr i zmęczenia fizycznego." },
        { front: "CVC (Customer Voice Chart)", back: "Matryca używana na etapie Define w Six Sigma, ułatwiająca konstruktywne przekucie nieprecyzyjnych i agresywnych skarg klientów w precyzyjne kryteria do naprawy systemu." },
        { front: "BMI (Bureaucracy Mass Index)", back: "Miernik G. Hamela uświadamiający paraliżujący przyrost korporacyjnej masy biurokratycznej - uwidacznia koszty gier politycznych, nieufności, tarć i izolacji kierownictwa od klienta." },
        { front: "Automatyzacja procesów (RPA)", back: "Programowa redukcja ludzkiego udziału. Zasada BPM głosi, że wdrożenie AI/IT musi odbyć się dopiero po usunięciu śmieci z procesu, by nie informatyzować bałaganu." },
        { front: "Elicytacja wiedzy biznesowej", back: "Skomplikowany etap diagnozy analitycznej polegający na systematycznym wydobywaniu i opisywaniu niejawnej (ukrytej) wiedzy ekspertów za pomocą ukierunkowanych wywiadów i dyskusji." },
        { front: "Dopasowanie strategiczne", back: "Kluczowy warunek celowości BPM - przed zainwestowaniem w projekt procesu upewniamy się najpierw, czy służy on w jakikolwiek sposób naczelnej strategii ekonomicznej zarządu." },
        { front: "Zasada przełożenia miar sukcesu", back: "Dogmat kontroli KPI nakazujący, aby wytyczne procesowe szczebla operacyjnego odzwierciedlały obiektywne metryki całościowego sukcesu, by unikać optymalizacji tzw. niewłaściwych rzeczy." }
    ],

    summaries: [
        {
        title: "Klątwa Silosów a Horyzontalna Prawda",
        text: "W tradycyjnych organizacjach działy często funkcjonują jak odizolowane silosy, koncentrując się na własnych celach. Zarządzanie procesowe (BPM) przełamuje te bariery, pokazując cały przepływ pracy od klienta do realizacji zamówienia. Dzięki temu łatwo zauważyć, że optymalizacja jednego działu może paradoksalnie pogorszyć wyniki całej firmy."
    },
    {
        title: "Właściciel Procesu – Lider bez Władzy",
        text: "Właściciel procesu odpowiada za jego przebieg od początku do końca, choć często nie zarządza bezpośrednio osobami realizującymi poszczególne etapy. Sukces osiąga dzięki negocjacjom, współpracy i analizie danych, a nie formalnym poleceniom służbowym."
    },
    {
        title: "Fenomen 3,4 Błędu na Milion",
        text: "Metodyka Six Sigma zakłada niemal perfekcyjną jakość procesów. Poziom sześciu sigm oznacza zaledwie 3,4 defektu na milion możliwości wystąpienia błędu. To podejście opiera zarządzanie na statystyce i mierzalnych wynikach zamiast intuicji."
    },
    {
        title: "Paradoks Pracownika Wiedzy",
        text: "W procesach kreatywnych nadmierna kontrola często ogranicza efektywność. Dlatego w branżach takich jak IT czy badania i rozwój coraz większą rolę odgrywają metody Agile, które stawiają na autonomię zespołów, iteracyjność i szybkie dostosowanie do zmian."
    },
    {
        title: "Ukryty Koszt Hierarchii",
        text: "Wskaźnik BMI (Bureaucracy Mass Index) opisuje poziom biurokracji w organizacji. Zbyt wiele szczebli decyzyjnych i procedur powoduje utratę czasu, spadek elastyczności oraz oddalenie kadry zarządzającej od realnych potrzeb klientów."
    },
    {
        title: "Psychologia Topnienia Organizacji",
        text: "Model zmiany Kurta Lewina porównuje organizację do bryły lodu. Aby skutecznie wdrożyć nowe rozwiązania, należy najpierw 'rozmrozić' stare przyzwyczajenia, następnie przeprowadzić zmianę, a na końcu utrwalić nowe zachowania w kulturze firmy."
    },
    {
        title: "Anatomia Marnotrawstwa",
        text: "Lean Management identyfikuje siedem głównych rodzajów marnotrawstwa określanych jako Muda. Należą do nich m.in. zbędne oczekiwanie, nadprodukcja, niepotrzebny transport czy nadmierne raportowanie. Celem jest eliminacja wszystkiego, za co klient nie chciałby zapłacić."
    },
    {
        title: "Od Emocji do Wymagań",
        text: "Narzędzia takie jak Customer Voice Chart (CVC) pozwalają przełożyć subiektywne opinie klientów na konkretne wymagania jakościowe CTQ (Critical-to-Quality). Dzięki temu ogólne skargi mogą zostać zamienione w mierzalne cele usprawniające proces."
    },
    {
        title: "Sekrety Modelu Kano",
        text: "Model Kano pokazuje, że nie wszystkie cechy produktu mają taki sam wpływ na satysfakcję klienta. Niektóre są obowiązkowe, inne oczekiwane, a jeszcze inne potrafią pozytywnie zaskoczyć i budować lojalność. Co ciekawe, dzisiejsze wyróżniki szybko stają się jutro standardem."
    },
    {
        title: "Poka-Yoke, czyli Projektowanie bez Błędów",
        text: "Poka-Yoke polega na takim projektowaniu procesów i narzędzi, aby uniemożliwić popełnienie błędu. Zamiast polegać wyłącznie na szkoleniach czy kontroli jakości, organizacja tworzy rozwiązania, które automatycznie zapobiegają pomyłkom."
    },
    {
        title: "Złudzenie Automatyzacji",
        text: "Automatyzacja nie naprawia źle zaprojektowanych procesów. Jeśli proces jest nieefektywny, wdrożenie systemu IT jedynie przyspieszy generowanie tych samych problemów. Najpierw należy uprościć i uporządkować proces, a dopiero później go automatyzować."
    },
    {
        title: "Ścieżki z Makaronu",
        text: "Diagram Spaghetti pozwala zobaczyć rzeczywiste trasy przemieszczania się ludzi, dokumentów lub materiałów w organizacji. Gęsta sieć linii ujawnia niepotrzebne ruchy i straty czasu, które często pozostają niezauważone podczas codziennej pracy."
    },
    {
        title: "Potęga Reguły 80/20",
        text: "Analiza Pareto pokazuje, że większość problemów wynika z niewielkiej liczby przyczyn. W praktyce około 80% błędów lub opóźnień może być spowodowane przez zaledwie 20% źródeł problemów. Dzięki temu łatwiej określić priorytety działań naprawczych."
    },
    {
        title: "Filozofia Czystego Biurka",
        text: "Metodologia 5S opiera się na uporządkowaniu miejsca pracy poprzez sortowanie, organizację, czyszczenie, standaryzację i samodyscyplinę. Jej celem nie jest wyłącznie estetyka, lecz szybkie wykrywanie nieprawidłowości oraz ograniczenie strat czasu."
    },
    {
        title: "Klęska przez Przedwczesny Sukces",
        text: "John Kotter zauważył, że wiele transformacji organizacyjnych kończy się niepowodzeniem, ponieważ liderzy zbyt wcześnie ogłaszają sukces. Jeśli nowe rozwiązania nie zostaną trwale zakorzenione w kulturze organizacji, pracownicy szybko wracają do dawnych nawyków."
    }
    ]
};

const app = {
    state: {
        score: 0,
        currentQuestionIndex: 0,
        flashcardIndex: 0,
        progress: 0,
        readiness: 0,
        currentView: 'dashboard',
        answers: [],
        resetConfirm: false
    },
    
    loadState() {
        const saved = localStorage.getItem('siz_app_state_v1');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.state = { ...this.state, ...parsed };
                
                if (isNaN(this.state.score) || this.state.score === null) this.state.score = 0;
                if (isNaN(this.state.currentQuestionIndex) || this.state.currentQuestionIndex === null) this.state.currentQuestionIndex = 0;
                if (isNaN(this.state.progress) || this.state.progress === null) this.state.progress = 0;
                if (isNaN(this.state.readiness) || this.state.readiness === null) this.state.readiness = 0;
                if (!Array.isArray(this.state.answers)) this.state.answers = [];
            } catch(e) {
                console.error("Błąd wczytywania zapisu:", e);
            }
        }
    },

    saveState() {
        localStorage.setItem('siz_app_state_v1', JSON.stringify(this.state));
    },

    init() {
        this.loadState(); 

        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.remove('active');
                setTimeout(() => loader.style.display = 'none', 300);
            }
            
            this.navigate(this.state.currentView || 'dashboard');
            
            this.setupNavigation();
            this.populateSummaries();
            this.initFlashcard();
            
            this.updateDashboardUI();
            this.updateProgressUI();
        }, 800);
    },

    updateDashboardUI() {
        const readinessEl = document.getElementById('readiness-score');
        if (readinessEl) readinessEl.innerText = `${this.state.readiness}%`;
    },

    navigate(viewId) {
        let target = document.getElementById(viewId);
        if (!target) {
            viewId = 'dashboard';
            target = document.getElementById(viewId);
        }

        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === viewId);
        });

        document.querySelectorAll('.view-section').forEach(section => {
            if (section.id !== viewId) {
                section.classList.remove('active');
                section.classList.add('hidden'); 
            }
        });

        if (target) {
            target.classList.remove('hidden');
            setTimeout(() => target.classList.add('active'), 20);
        }

        this.state.currentView = viewId;
        this.saveState();

        if (viewId === 'quiz') this.initQuiz();
    },

    setupNavigation() {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        const toggleMobileMenu = () => {
            if (sidebar && overlay) {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
            }
        };

        if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
        if (overlay) overlay.addEventListener('click', toggleMobileMenu);

        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetBtn = e.target.closest('.nav-item');
                if(targetBtn) this.navigate(targetBtn.dataset.target);
                
                if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
                    toggleMobileMenu();
                }
            });
        });

        const flashcardEl = document.getElementById('flashcard');
        if (flashcardEl) {
            flashcardEl.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });
        }
        
        const fcNext = document.getElementById('fc-next');
        if (fcNext) fcNext.addEventListener('click', () => this.changeFlashcard(1));
        
        const fcPrev = document.getElementById('fc-prev');
        if (fcPrev) fcPrev.addEventListener('click', () => this.changeFlashcard(-1));
    },

    /* ---- WERYFIKACJA WIEDZY (QUIZ) & NAWIGATOR ---- */
    initQuiz() {
        if (!this.state.answers || this.state.answers.length !== knowledgeBase.quiz.length) {
            this.state.answers = new Array(knowledgeBase.quiz.length).fill(null);
        }

        const quizResults = document.getElementById('quiz-results');
        const quizContainer = document.getElementById('quiz-container');
        
        if (quizResults) quizResults.classList.add('hidden');
        if (quizContainer) quizContainer.classList.remove('hidden');
        
        this.setupQuizListeners(); 
        this.buildNavigator();
        this.renderQuestion();
    },

    setupQuizListeners() {
        const prevBtn = document.getElementById('nav-prev-btn');
        const nextBtn = document.getElementById('nav-next-btn');
        const mapToggle = document.getElementById('nav-map-toggle');
        const closeModal = document.getElementById('close-map-btn');
        const modal = document.getElementById('quiz-map-modal');

        if(prevBtn) prevBtn.onclick = () => {
            if (this.state.currentQuestionIndex > 0) {
                this.state.currentQuestionIndex--;
                this.renderQuestion();
            }
        };

        if(nextBtn) nextBtn.onclick = () => {
            if (this.state.currentQuestionIndex < knowledgeBase.quiz.length - 1) {
                this.state.currentQuestionIndex++;
                this.renderQuestion();
            }
        };

        if(mapToggle) mapToggle.onclick = () => { if(modal) modal.classList.remove('hidden'); };
        if(closeModal) closeModal.onclick = () => { if(modal) modal.classList.add('hidden'); };
        
        if(modal) modal.onclick = (e) => {
            if(e.target === modal) modal.classList.add('hidden');
        };
    },

    buildNavigator() {
        const navContainer = document.getElementById('quiz-navigator');
        if (!navContainer) return;
        
        navContainer.innerHTML = '';
        knowledgeBase.quiz.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = 'nav-dot';
            btn.innerText = index + 1;
            
            btn.onclick = () => {
                this.state.currentQuestionIndex = index;
                this.saveState();
                this.renderQuestion();
                document.getElementById('quiz-map-modal').classList.add('hidden');
            };
            
            navContainer.appendChild(btn);
        });
        this.updateNavigatorUI();
    },

    updateNavigatorUI() {
        const total = knowledgeBase.quiz.length;
        let correct = 0, wrong = 0;

        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.className = 'nav-dot'; 
            
            if (this.state.answers[index]) {
                if (this.state.answers[index].isCorrect) {
                    dot.classList.add('answered-correct');
                    correct++;
                } else {
                    dot.classList.add('answered-wrong');
                    wrong++;
                }
            }
            
            if (index === this.state.currentQuestionIndex) {
                dot.classList.add('active');
                dot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        const statC = document.getElementById('map-stat-c');
        const statW = document.getElementById('map-stat-w');
        const statL = document.getElementById('map-stat-l');
        if(statC) statC.innerText = correct;
        if(statW) statW.innerText = wrong;
        if(statL) statL.innerText = total - correct - wrong;

        const pillText = document.getElementById('pill-text');
        const pillFill = document.getElementById('pill-fill');
        if(pillText) pillText.innerText = `Pytanie ${this.state.currentQuestionIndex + 1} / ${total}`;
        if(pillFill) pillFill.style.width = `${((this.state.currentQuestionIndex + 1) / total) * 100}%`;

        const prevBtn = document.getElementById('nav-prev-btn');
        const nextBtn = document.getElementById('nav-next-btn');
        if(prevBtn) {
            prevBtn.disabled = this.state.currentQuestionIndex === 0;
            prevBtn.style.opacity = prevBtn.disabled ? '0.2' : '1';
        }
        if(nextBtn) {
            nextBtn.disabled = this.state.currentQuestionIndex === total - 1;
            nextBtn.style.opacity = nextBtn.disabled ? '0.2' : '1';
        }
    },

    renderQuestion() {
        this.updateNavigatorUI();

        const q = knowledgeBase.quiz[this.state.currentQuestionIndex];
        if (!q) {
            this.showQuizResults();
            return;
        }

        const quizScore = document.getElementById('quiz-score');
        const questionText = document.getElementById('question-text');
        
        if (quizScore) quizScore.innerText = `${this.state.score} pkt`;
        if (questionText) questionText.innerText = q.question;
        
        const optionsContainer = document.getElementById('options-container');
        const bottomNextBtn = document.getElementById('next-btn'); 
        const finishBtn = document.getElementById('finish-btn');
        
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            const previousAnswer = this.state.answers[this.state.currentQuestionIndex];

            q.options.forEach((opt, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt;
                
                if (previousAnswer) {
                    btn.disabled = true;
                    if (index === q.correct) btn.classList.add('correct');
                    else if (index === previousAnswer.selectedIndex) btn.classList.add('wrong');
                } else {
                    btn.onclick = () => this.handleAnswer(index, btn, q.correct, q.explanation);
                }
                optionsContainer.appendChild(btn);
            });

            if (previousAnswer) {
                this.showExplanation(q.explanation);
            }
        }

        if (bottomNextBtn) {
            bottomNextBtn.onclick = null;
            const previousAnswer = this.state.answers[this.state.currentQuestionIndex];
            if (previousAnswer && this.state.currentQuestionIndex < knowledgeBase.quiz.length - 1) {
                bottomNextBtn.classList.remove('hidden');
                bottomNextBtn.innerText = "Kolejne pytanie";
                bottomNextBtn.onclick = () => {
                    this.state.currentQuestionIndex++;
                    this.saveState();
                    this.renderQuestion();
                };
            } else {
                bottomNextBtn.classList.add('hidden');
            }
        }

        if (finishBtn) finishBtn.classList.remove('hidden');
    },

    handleAnswer(selectedIndex, btnElement, correctIndex, explanation) {
        const isCorrect = (selectedIndex === correctIndex);
        
        this.state.answers[this.state.currentQuestionIndex] = {
            selectedIndex: selectedIndex,
            isCorrect: isCorrect
        };

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            btnElement.classList.add('correct');
            this.state.score += 10;
        } else {
            btnElement.classList.add('wrong');
            if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
        }

        const quizScore = document.getElementById('quiz-score');
        if (quizScore) quizScore.innerText = `${this.state.score} pkt`;

        this.showExplanation(explanation);
        this.updateNavigatorUI(); 

        const answeredQuestionsCount = this.state.answers.filter(a => a !== null).length;
        this.state.readiness = Math.round((this.state.score / (answeredQuestionsCount * 10)) * 100);
        
        this.updateProgressUI(answeredQuestionsCount);
        this.updateDashboardUI();
        this.saveState(); 

        const bottomNextBtn = document.getElementById('next-btn');
        if (bottomNextBtn && this.state.currentQuestionIndex < knowledgeBase.quiz.length - 1) {
            bottomNextBtn.classList.remove('hidden');
            bottomNextBtn.innerText = "Kolejne pytanie";
            bottomNextBtn.onclick = () => {
                this.state.currentQuestionIndex++;
                this.saveState(); 
                this.renderQuestion();
            };
        }
    },

    showExplanation(explanationText) {
        const optionsContainer = document.getElementById('options-container');
        if (!optionsContainer || document.getElementById('exp-div')) return; 
        
        const expDiv = document.createElement('div');
        expDiv.id = 'exp-div';
        expDiv.style.marginTop = "1rem";
        expDiv.style.padding = "1rem";
        expDiv.style.backgroundColor = "var(--bg-surface-hover)";
        expDiv.style.borderLeft = "3px solid var(--accent-primary)";
        expDiv.style.color = "var(--text-secondary)";
        expDiv.style.fontSize = "0.9rem";
        expDiv.style.borderRadius = "0 8px 8px 0";
        expDiv.innerHTML = `<strong>Wyjaśnienie:</strong> ${explanationText}`;
        optionsContainer.appendChild(expDiv);
    },

    showQuizResults() {
        const quizContainer = document.getElementById('quiz-container');
        const results = document.getElementById('quiz-results');
        
        if (quizContainer) quizContainer.classList.add('hidden');
        if (results) results.classList.remove('hidden');
        
        const maxScore = knowledgeBase.quiz.length * 10;
        const percentage = Math.round((this.state.score / maxScore) * 100);
        
        const finalScoreText = document.getElementById('final-score-text');
        if (finalScoreText) finalScoreText.innerText = `${percentage}%`;
        
        let feedback = "";
        if (percentage >= 80) feedback = "Świetny wynik. Materiał został przez Ciebie w pełni zintegrowany.";
        else if (percentage >= 50) feedback = "Solidna podstawa. Przejrzyj błędne odpowiedzi korzystając z Nawigatora.";
        else feedback = "Wymagana rekalibracja. Wróć do modułu Syntezy Materiałów i spróbuj ponownie.";
        
        const quizFeedback = document.getElementById('quiz-feedback');
        if (quizFeedback) quizFeedback.innerText = feedback;
    },

    /* ---- FISZKI POJĘCIOWE ---- */
    initFlashcard() {
        if (this.state.flashcardIndex >= knowledgeBase.flashcards.length) {
            this.state.flashcardIndex = 0;
        }
        this.renderFlashcard();
    },

    renderFlashcard() {
        const card = document.getElementById('flashcard');
        if (card) card.classList.remove('flipped');
        
        setTimeout(() => {
            const data = knowledgeBase.flashcards[this.state.flashcardIndex];
            
            const fcFront = document.getElementById('fc-front');
            const fcBack = document.getElementById('fc-back');
            const fcCounter = document.getElementById('fc-counter');
            
            if (fcFront) fcFront.innerText = data.front;
            if (fcBack) fcBack.innerText = data.back;
            if (fcCounter) fcCounter.innerText = `${this.state.flashcardIndex + 1} / ${knowledgeBase.flashcards.length}`;
        }, 300); 
    },

    changeFlashcard(step) {
        let newIndex = this.state.flashcardIndex + step;
        if (newIndex >= knowledgeBase.flashcards.length) newIndex = 0;
        if (newIndex < 0) newIndex = knowledgeBase.flashcards.length - 1;
        
        this.state.flashcardIndex = newIndex;
        this.renderFlashcard();
        this.saveState(); 
    },

    /* ---- SYNTEZA (AKORDIONY) ---- */
    populateSummaries() {
        const container = document.getElementById('summary-container');
        if (!container) return;
        
        container.innerHTML = ''; 
        container.className = 'accordion-layout'; 
        
        knowledgeBase.summaries.forEach((sum, index) => {
            const item = document.createElement('div');
            item.className = 'accordion-item';
            
            const header = document.createElement('div');
            header.className = 'accordion-header';
            header.innerHTML = `
                <h3>${sum.title}</h3>
                <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            `;
            
            const wrapper = document.createElement('div');
            wrapper.className = 'accordion-content-wrapper';
            wrapper.innerHTML = `
                <div class="accordion-content">
                    <div class="accordion-inner">
                        <p>${sum.text}</p>
                    </div>
                </div>
            `;
            
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
            
            item.appendChild(header);
            item.appendChild(wrapper);
            container.appendChild(item);
        });
    },

    /* ---- PASEK POSTĘPU ORAZ PRZYSWOJONA WIEDZA ---- */
    updateProgressUI(answeredSoFar = null) {
        const totalSteps = knowledgeBase.quiz.length;
        if (totalSteps === 0) return;
        
        if (answeredSoFar === null) {
            answeredSoFar = this.state.answers.filter(a => a !== null).length;
        }
        
        this.state.progress = Math.round((answeredSoFar / totalSteps) * 100);
        
        const maxPossibleScore = totalSteps * 10;
        const mastery = Math.round((this.state.score / maxPossibleScore) * 100);

        const globalProgress = document.getElementById('global-progress');
        const progressPercent = document.getElementById('progress-percent');
        if (globalProgress) globalProgress.style.width = `${this.state.progress}%`;
        if (progressPercent) progressPercent.innerText = `${this.state.progress}%`;

        const masteryProgress = document.getElementById('mastery-progress');
        const masteryPercent = document.getElementById('mastery-percent');
        if (masteryProgress) masteryProgress.style.width = `${mastery || 0}%`;
        if (masteryPercent) masteryPercent.innerText = `${mastery || 0}%`;
    },
    
    /* ---- BEZPIECZNY RESET POSTĘPU (iOS WebView Fix) ---- */
    resetProgress() {
        const btn = document.getElementById('reset-progress-btn');
        if (!btn) return; 

        if (!this.state.resetConfirm) {
            this.state.resetConfirm = true;
            this.state.originalResetBtnHTML = btn.innerHTML; 
            
            btn.innerHTML = `<span style="color: var(--danger-color); font-weight: 600;">Na pewno? Kliknij ponownie</span>`;
            
            setTimeout(() => {
                this.state.resetConfirm = false;
                if (this.state.originalResetBtnHTML) {
                    btn.innerHTML = this.state.originalResetBtnHTML;
                }
            }, 3500); 
        } else {
            this.state = {
                score: 0,
                currentQuestionIndex: 0,
                flashcardIndex: 0,
                progress: 0,
                readiness: 0,
                currentView: 'dashboard',
                answers: new Array(knowledgeBase.quiz.length).fill(null),
                resetConfirm: false
            };
            
            localStorage.removeItem('siz_app_state_v1');
            
            this.updateProgressUI();
            this.updateDashboardUI();
            this.renderFlashcard();
            this.navigate('dashboard');

            btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> Resetuj postęp`;
        }
    }
};

// Inicjalizacja środowiska po załadowaniu drzewa DOM
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});