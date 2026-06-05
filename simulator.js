/**
 * SIZ Premium EdTech - SILNIK SYMULATORA EGZAMINU
 */

// TUTAJ ZNAJDUJE SIĘ TWOJA BAZA 40 PYTAŃ EGZAMINACYJNYCH
const examDatabase = [
    {
        question: "Które z poniższych stwierdzeń są zgodne z definicjami i koncepcjami procesu biznesowego?",
        options: [
            "Proces biznesowy to kompletna sekwencja aktywności i zdarzeń, które odpowiadają popytowi.",
            "Proces biznesowy zawsze musi być w całości zamknięty w obrębie jednej funkcji organizacyjnej, aby był skuteczny.",
            "Zgodnie z definicją Hammera i Champy'ego, proces biznesowy to sekwencja czynności wykorzystująca dane wejściowe w celu wytworzenia wartości dla klienta.",
            "Głównym celem istnienia procesów biznesowych jest wyłącznie minimalizacja kosztów operacyjnych przedsiębiorstwa.",
            "Procesy pomocnicze (supporting processes) bezpośrednio tworzą wartość dla klienta zewnętrznego.",
            "W klasyfikacji APQC (PCF) wyróżnia się procesy operacyjne, które obejmują m.in. rozwój wizji i strategii oraz zarządzanie łańcuchem dostaw.",
            "Cechami procesu wskazanymi przez Skrzypek i Hofman są m.in. celowość, orientacja na klienta oraz holizm."
        ],
        correct: [0, 2, 5, 6]
    },
    {
        question: "Zgodnie z treścią monografii oraz wykładów, jakie funkcje i odpowiedzialności przypisuje się właścicielowi procesu?",
        options: [
            "Właściciel procesu zawsze musi zajmować stanowisko kierownicze w strukturze hierarchicznej, aby skutecznie zarządzać procesem.",
            "Do zadań właściciela procesu należy m.in. definiowanie wskaźników wydajności (KPI) i monitorowanie wydajności procesu.",
            "Właściciel procesu odpowiada wyłącznie za wykonanie pojedynczego zadania w ramach procesu, nie za jego całościowe rezultaty.",
            "Właściciel procesu, jako osoba odpowiedzialna za zarządzany proces, może być również sponsorem tego procesu.",
            "W modelu dojrzałości CMMI, rola właściciela procesu jest zbędna na najwyższych poziomach dojrzałości.",
            "Właściciel procesu powinien posiadać umiejętności przywódcze, aby motywować zespół i reprezentować proces na forum zarządu.",
            "Zgodnie z badaniami Danilovej, zakres odpowiedzialności właściciela procesu nie obejmuje zarządzania interesariuszami i rzecznictwa interesów."
        ],
        correct: [1, 3, 5]
    },
    {
        question: "Które stwierdzenia dotyczące matrycy odpowiedzialności (RACI i jej wariantów) są prawdziwe?",
        options: [
            "W macierzy RACI litera 'R' (Responsible) oznacza osobę, która jest odpowiedzialna za zadanie w sensie prawnym lub biznesowym (accountable).",
            "Macierz RACI-VS wprowadza dodatkowe role 'V' (Verification) i 'S' (Sign-off), gdzie 'V' oznacza osobę potwierdzającą wykonanie zadania, niezależną od wykonawcy.",
            "Wariant CAIRO (lub RACI-O) wprowadza rolę 'O' (Out of the loop), co pozwala świadomie wykluczyć niektóre osoby z udziału w zadaniu.",
            "Głównym celem stosowania macierzy RACI jest uniknięcie rozmycia odpowiedzialności, gdy proces przebiega przez wiele komórek organizacyjnych.",
            "Macierz RASCI, w przeciwieństwie do RACI, nie uwzględnia roli wspierającej (Support).",
            "Zgodnie z materiałami, wkomponowanie macierzy odpowiedzialności bezpośrednio do modelu procesu jest niezalecane, ponieważ prowadzi do niepotrzebnej replikacji danych.",
            "W macierzy RACI, za daną czynność odpowiedzialnych (Accountable) może być wiele osób jednocześnie."
        ],
        correct: [1, 2, 3]
    },
    {
        question: "Które z poniższych stwierdzeń poprawnie opisują etapy i narzędzia procedury DMAIC?",
        options: [
            "Etap Define (Definiuj) koncentruje się na zbieraniu danych i mierzeniu obecnej wydajności procesu.",
            "Narzędzie SIPOC służy do identyfikacji Dostawców (Suppliers), Wejść (Inputs), Procesu (Process), Wyjść (Outputs) i Klientów (Customers).",
            "Diagram Pareto jest narzędziem używanym głównie na etapie Improve (Ulepszaj) do generowania rozwiązań.",
            "Wskaźnik DPMO (Defects Per Million Opportunities) oblicza się ze wzoru: DPMO = (Całkowita liczba defektów / (Liczba badanych produktów * Liczba możliwych defektów na produkt)) * 1 000 000.",
            "Model Kano służy do kategoryzacji potrzeb klienta na dissatisfiers, satisfiers i delighters.",
            "Diagram przyczynowo-skutkowy (Ishikawy) jest narzędziem etapu Analyze (Analizuj), pomagającym zidentyfikować źródła problemów.",
            "Na etapie Control (Kontroluj) nie stosuje się już żadnych narzędzi analitycznych, a jedynie dokumentację procesu."
        ],
        correct: [1, 3, 4, 5]
    },
    {
        question: "Które z wymienionych działań i zasad są zgodne z koncepcją 5S?",
        options: [
            "Seiri (Sortowanie) polega na oznaczaniu czerwoną kropką wszystkich materiałów i narzędzi, które nie są oczywiście potrzebne na stanowisku pracy.",
            "Seiton (Porządkowanie) wymaga, aby każdemu narzędziu przypisać stałe miejsce, co ułatwia jego odłożenie.",
            "Seiso (Sprzątanie) obejmuje jedynie comiesięczne, generalne porządki w całej fabryce, a nie codzienne utrzymanie czystości.",
            "Seiketsu (Standaryzacja) polega na tworzeniu spójnych procedur dla codziennych działań, takich jak sortowanie, porządkowanie i sprzątanie.",
            "Shitsuke (Utrwalanie) zakłada, że 5S powinno być jednorazową akcją, a nie stałym elementem pracy.",
            "Celem 5S jest stworzenie środowiska pracy sprzyjającego wydajności i wyrobienie w pracownikach poczucia odpowiedzialności za to środowisko.",
            "Podczas fazy Seiton, przy określaniu miejsc przechowywania narzędzi, należy kierować się zasadą ekonomizacji ruchu."
        ],
        correct: [0, 1, 3, 5, 6]
    },
    {
        question: "Które stwierdzenia dotyczące podejścia Agile w kontekście zarządzania procesami (BPM) są poprawne?",
        options: [
            "Metodyki Agile sprawdzają się najlepiej w modelach pracy o charakterze rutynowym i wysoce sformalizowanym (model transakcyjny).",
            "W odróżnieniu od tradycyjnego BPM, metodyki Agile kładą większy nacisk na adaptację niż na przewidywanie i planowanie.",
            "Zespoły Agile opierają się na założeniu, że informacje od klientów są cenniejsze niż intuicje menedżerów przy określaniu kierunku innowacji.",
            "W metodyce Agile to proces jest najważniejszym elementem, a ludzie mają się do niego dostosowywać.",
            "Sprinty w Agile służą przede wszystkim do zmuszania pracowników do wydajniejszej pracy poprzez ustalanie sztywnych terminów.",
            "Zastosowanie BPM w modelu współpracy (collaboration) jest stosunkowo łatwe, ponieważ zadania są tam wysoce powtarzalne.",
            "Głównym elementem metodyki Agile jest zespół, a nie szczegółowo zdefiniowany proces."
        ],
        correct: [1, 2, 6]
    },
    {
        question: "Które z poniższych są przykładami procesów biznesowych lub ich klasyfikacji?",
        options: [
            "Dystrybucja rozumiana jako proces współtworzenia i dostarczania wartości klientowi.",
            "Innowacje polegające na tworzeniu nowych pomysłów i rozwoju produktu.",
            "Procesy zarządzania, które w klasyfikacji APQC obejmują m.in. rozwój i zarządzanie kapitałem ludzkim.",
            "Procesy podstawowe (core processes), które według Grajewskiego bezpośrednio tworzą wartość dodaną dla klienta.",
            "Procesy pomocnicze, które według Brilmana wytwarzają wartość bezpośrednio dla klienta zewnętrznego.",
            "Proces rekrutacji pracownika jest przykładem procesu pomocniczego (wspierającego).",
            "Proces przygotowania etykiety opakowania (PPEO) jest przykładem procesu, który dostarcza informacji potrzebnych do komunikacji z konsumentami."
        ],
        correct: [0, 1, 2, 3, 5, 6]
    },
    {
        question: "Które czynniki i warunki są kluczowe dla poprawnego wdrożenia i funkcjonowania zarządzania procesami biznesowymi (BPM)?",
        options: [
            "Jasny podział odpowiedzialności za poszczególne poziomy zarządzania procesami, czyli odpowiednia struktura zarządzania.",
            "Kultura organizacyjna wspierająca BPM, w której procesy są postrzegane jako naturalny sposób realizacji zadań.",
            "Posiadanie przez organizację metod analizy, projektowania, wdrożenia i kontroli procesów.",
            "Wykonawcy procesu, którzy rozumieją cały proces i potrafią pracować w grupie, ale nie potrzebują kompetencji samozarządzania.",
            "Wdrożenie odpowiednich technologii informatycznych (IT) wspierających modelowanie, realizację i monitorowanie procesów.",
            "Dopasowanie strategiczne BPM do ogólnej strategii organizacji, gdzie plany BPM wynikają z planu strategicznego.",
            "Tradycyjne systemy HR i IT, które koncentrują się na funkcjach, a nie na procesach, są w pełni wystarczające do wsparcia BPM."
        ],
        correct: [0, 1, 2, 4, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących notacji modelowania procesów (BPMN, UML, DFD, IDEF3) są prawdziwe?",
        options: [
            "BPMN (Business Process Model and Notation) został zaprojektowany z myślą o tym, aby był zrozumiały zarówno dla analityków biznesowych, jak i dla programistów technicznych.",
            "W BPMN, tzw. basen (pool) reprezentuje uczestnika procesu (np. organizację), a przepływy sekwencji mogą przekraczać granice basenu.",
            "DFD (Data Flow Diagram) koncentruje się na przepływie danych i może być dobrym punktem wyjścia do bardziej szczegółowych modeli, np. w UML.",
            "Notacja IDEF3 pozwala na modelowanie zarówno sekwencji działań, jak i przejść obiektów pomiędzy stanami.",
            "Diagramy aktywności w UML są podzbiorem diagramów strukturalnych, które przedstawiają statyczną strukturę systemu, a nie jego zachowanie.",
            "W BPMN, choreografia (choreography) istnieje pomiędzy pulami (uczestnikami) i reprezentuje interakcje, a nie ma jednego podmiotu odpowiedzialnego.",
            "W notacji DFD w wersji SSADM, magazyn danych może być oznaczony jako ręczny (M-manual) lub zdigitalizowany (D-digitised)."
        ],
        correct: [0, 2, 3, 5, 6]
    },
    {
        question: "Które z wymienionych koncepcji i osób miały kluczowy wpływ na genezę i rozwój podejścia procesowego?",
        options: [
            "Frederick Winslow Taylor, który poprzez scientific management dążył do standaryzacji produktu i wzrostu wydajności.",
            "W. Edwards Deming, który koncentrował się na statystycznej kontroli procesu i minimalizacji zmienności (wariancji).",
            "Henry Ford, który jako pierwszy wprowadził koncepcję mapowania procesów (process mapping) w przemyśle motoryzacyjnym.",
            "Michael Hammer, który poprzez Business Process Reengineering (BPR) podkreślał rolę radykalnego przeprojektowania procesów.",
            "Bill Smith, który jest uznawany za twórcę koncepcji Six Sigma w firmie Motorola.",
            "Henri Fayol, który jako pierwszy zdefiniował proces biznesowy w kontekście łańcucha dostaw.",
            "Taiichi Ohno, który udokumentował siedem rodzajów marnotrawstwa (muda) w systemie produkcyjnym Toyoty."
        ],
        correct: [0, 1, 3, 4, 6]
    },
    {
        question: "Które z poniższych stwierdzeń są zgodne z zasadami BPM i koncepcją ciągłego doskonalenia (Kaizen)?",
        options: [
            "Nawet dobrze zaprojektowany proces musi być dobrze wykonywany, co wymaga odpowiednich kompetencji, systemów i kultury organizacyjnej.",
            "Nawet dobry proces z czasem staje się złym w wyniku zmian zachodzących w otoczeniu, dlatego wymaga stałego nadzoru.",
            "Im więcej wariantów procesu, tym lepiej, ponieważ zwiększa to elastyczność organizacji i jej zdolność do adaptacji.",
            "Celem ciągłego doskonalenia (Kaizen) jest wprowadzanie dużych, rewolucyjnych zmian w procesie w długich odstępach czasu.",
            "Zintegrowane zarządzanie procesami pozwala wiązać strategię organizacji z procesami i działaniami operacyjnymi.",
            "Nawet kiepski proces jest lepszy od jego braku, ponieważ brak formalizacji prowadzi do chaosu, trudności w kontrolowaniu i problemów z jakością.",
            "Koncentracja na twardych danych i obiektywnych miarach efektywności to jedna z zasad podejścia procesowego, wywodząca się z prac Deminga."
        ],
        correct: [0, 1, 4, 5, 6]
    },
    {
        question: "Jakie działania i zachowania świadczą o dojrzałości procesowej organizacji lub jej braku?",
        options: [
            "Organizacja znajdująca się na trzecim poziomie dojrzałości procesowej (zdefiniowanym) charakteryzuje się procesami powtarzalnymi, zdefiniowanymi i udokumentowanymi, ale pozostającymi niemierzonymi.",
            "W organizacjach o niskiej dojrzałości procesowej, właściciele procesów często są kierownikami funkcjonalnymi, którzy dysponują zasobami głównie w obrębie swoich jednostek.",
            "Kluczowym wyzwaniem we wprowadzaniu podejścia procesowego jest ustalenie, kto powinien pełnić rolę właściciela procesu, zwłaszcza gdy proces wykracza poza granice poszczególnych komórek.",
            "Na piątym poziomie dojrzałości procesowej (optymalizowanym) procesy są jedynie definiowane, ale nie są mierzone ani zarządzane.",
            "Powszechnym problemem w praktyce jest to, że właściciele procesów w Polsce często odpowiadają za zatwierdzanie dokumentacji, ale rzadko za realizację celu procesu, którego są właścicielami.",
            "Poziomy dojrzałości procesowej są statyczne i organizacja nigdy nie może przejść z jednego poziomu na wyższy.",
            "W modelu CMMI, poziom zarządzany (managed) zakłada, że proces jest zaplanowany, monitorowany, kontrolowany, a pracownicy są przeszkoleni."
        ],
        correct: [0, 1, 2, 4, 6]
    },
    {
        question: "Które stwierdzenia dotyczące procesu przygotowania etykiety opakowania (PPEO) są poprawne?",
        options: [
            "Planista grafiki (właściciel procesu) odpowiada za tworzenie harmonogramów i dostarczanie na czas wyników w procesach tworzenia grafiki.",
            "Kluczowym zadaniem w PPEO jest ostateczne zatwierdzenie grafiki, gdzie funkcje odpowiedzialne za akceptację są określone w macierzy RACI.",
            "Jednym z mierników sukcesu dla PPEO jest liczba incydentów jakościowych (IJ), gdzie dobrym działaniem jest 1 lub mniej IJ na 1000 grafik.",
            "Proces PPEO rozpoczyna się od dostarczenia narzędzi do druku do fabryki, a kończy na przekazaniu briefu projektu grafiki.",
            "W ramach PPEO, podczas adaptacji grafiki, wybiera się jedną z dziewięciu opcji powłok i lakierów, np. matowe wykończenie z wypukłą fakturą.",
            "Zmiana w kopii na etapie ostatecznej grafiki, wynikająca z niespełnienia wymagań regulatora rynku, nie jest traktowana jako problem, ponieważ jest to naturalna część procesu.",
            "W PPEO, zadanie 'Zamrożenie grafiki' polega na usunięciu poprzednich wersji grafiki z systemu, aby uniknąć nieporozumień."
        ],
        correct: [0, 1, 2, 4]
    },
    {
        question: "Które z poniższych są przykładami marnotrawstwa (muda) w procesach?",
        options: [
            "Nadprodukcja, czyli wytwarzanie więcej niż potrzeba.",
            "Oczekiwanie, np. na wolne maszyny lub materiały.",
            "Precyzyjne i szczegółowe dokumentowanie każdego etapu procesu.",
            "Defekty, czyli niska jakość skutkująca koniecznością napraw.",
            "Transport, czyli niepotrzebne przemieszczanie materiałów lub produktów.",
            "Przeinżynierowanie, czyli dostarczanie produktu z większą liczbą funkcji, niż potrzebuje klient.",
            "Regularne szkolenia pracowników z zakresu BPM."
        ],
        correct: [0, 1, 3, 4, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących krytyki zarządzania procesami biznesowymi (BPM) są prawdziwe?",
        options: [
            "Krytycy BPM zauważają, że wiele wdrożeń kończy się niepowodzeniem, a przyczyną może być brak wsparcia kierownictwa.",
            "Zarzuca się BPM, że przyjmuje mechanicystyczną wizję organizacji, nie uwzględniając w wystarczającym stopniu procesów politycznych i walki o władzę.",
            "BPM jest powszechnie uznawane za koncepcję idealnie sprawdzającą się w organizacjach opartych wyłącznie na pracy kreatywnej (knowledge workers).",
            "Częstym źródłem niepowodzeń wdrożeń BPM jest zbyt mała formalizacja i brak standaryzacji procesów.",
            "Organizacje czasami wdrażają BPM nie dla praktycznych korzyści, ale w celu osiągnięcia celów wizerunkowych.",
            "Opór pracowników przed zmianą jest uznawany za jeden z czynników mogących prowadzić do niepowodzenia wdrożenia BPM.",
            "Zgodnie z krytyką, BPM w swojej klasycznej formie doskonale radzi sobie z zarządzaniem nieprzewidywalnymi, kreatywnymi procesami."
        ],
        correct: [0, 1, 4, 5]
    },
    {
        question: "Które z poniższych narzędzi i technik są stosowane na etapie Improve (Ulepszaj) w procedurze DMAIC?",
        options: [
            "SCAMPER, czyli technika kreatywnego myślenia oparta na pytaniach: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse.",
            "5S, czyli system organizacji miejsca pracy (Sortuj, Porządkuj, Sprzątaj, Standaryzuj, Utrwalaj).",
            "Poka Yoke, czyli strategia 'pomyłkoodporności' zapobiegająca powstawaniu błędów.",
            "Odwrotna burza mózgów, polegająca na szukaniu sposobów na pogorszenie sytuacji, a następnie odwracaniu tych pomysłów.",
            "Diagram Pareto do identyfikacji najczęstszych przyczyn problemów.",
            "Diagram przyczynowo-skutkowy (Ishikawy) do analizy źródeł problemów.",
            "Diagram spaghetti do analizy przepływów i niepotrzebnych przemieszczeń."
        ],
        correct: [0, 1, 2, 3]
    },
    {
        question: "Które stwierdzenia dotyczące roli i zadań wykonawcy procesu są prawdziwe?",
        options: [
            "Wykonawcy procesu są często najlepszym źródłem informacji do tworzenia rozwiązań optymalizacyjnych, ponieważ mają największe doświadczenie w realizacji przypisanych im aktywności.",
            "Wykonawca procesu odpowiada za cały proces od początku do końca i ponosi za niego ostateczną odpowiedzialność finansową.",
            "Uczestnicy procesu (wykonawcy) odgrywają ważną rolę podczas modelowania procesów, ponieważ posiadają wiedzę o prowadzonych działaniach.",
            "Zgodnie z definicją Dumas i in., wykonawcy są koordynowani przez właściciela procesu, który zajmuje się nierutynowymi aspektami.",
            "Wykonawca w procesie nie posiada żadnych uprawnień decyzyjnych i działa wyłącznie na podstawie szczegółowych instrukcji od właściciela procesu.",
            "Swobodny transfer wiedzy od wykonawcy do właściciela procesu jest ułatwiony w klimacie otwartej komunikacji, gdzie wykonawca nie obawia się działań odwetowych za przekazanie złych informacji.",
            "Zgodnie z definicją Smoczyńskiego, członek zespołu (wykonawca) nie ma obowiązku zgłaszania pomysłów usprawnienia procesu, ponieważ jest to wyłączna odpowiedzialność właściciela procesu."
        ],
        correct: [0, 2, 3, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących kryteriów wyboru procesu do usprawnienia (narzędzie selekcji procesów) są poprawne?",
        options: [
            "Kryterium główne 'Wpływ procesu' może obejmować podkryteria takie jak liczba pracowników, których proces dotyczy, oraz liczba klientów/partnerów.",
            "Im wyższy poziom sformalizowania procesu (lepiej udokumentowany), tym wyższą liczbę punktów powinien on otrzymać w narzędziu selekcji, ponieważ jest łatwiejszy do optymalizacji.",
            "Wagi przypisane do kryteriów i podkryteriów są subiektywną decyzją zespołu diagnostycznego, ale powinny oddawać charakter podejścia procesowego w organizacji.",
            "Zastosowanie wag w narzędziu selekcji jest zawsze obiektywne i nie wymaga uzasadnienia, ponieważ wynika z najlepszych praktyk.",
            "Wyższa częstotliwość występowania procesu przy innych warunkach niezmienionych może sugerować, że powinien on być usprawniony w pierwszej kolejności.",
            "Proces z najwyższą liczbą punktów w narzędziu selekcji jest kandydatem do usprawnienia w pierwszej kolejności.",
            "Przy wyborze procesu do usprawnienia nie warto zbierać opinii interesariuszy i wykonawców, ponieważ jest to czasochłonne i może prowadzić do konfliktów."
        ],
        correct: [0, 2, 4, 5]
    },
    {
        question: "Które z poniższych elementów powinien zawierać dokument zakresu procesu (project charter)?",
        options: [
            "Nazwę procesu oraz jego szczegółowy opis, zrozumiały także dla osoby niezaangażowanej w proces.",
            "Wskazanie właściciela procesu, który ponosi odpowiedzialność za cały proces.",
            "Zasięg procesu, czyli określenie punktu początkowego i końcowego sekwencji działań.",
            "Główne zadania procesu, które wynikają z opisu procesu i są spójne z preferencjami klientów.",
            "Klientów procesu i ich preferencje, co pozwala kształtować standardy rezultatów.",
            "Mierniki sukcesu, które umożliwiają dokonanie pomiaru wydajności procesu.",
            "Szczegółową mapę procesu w notacji BPMN, wraz z opisem każdego zdarzenia i zadania."
        ],
        correct: [0, 1, 2, 3, 4, 5]
    },
    {
        question: "Które stwierdzenia dotyczące procesu zmian w kontekście wdrażania BPM są zgodne z modelem Kurta Lewina i krzywą zmiany Kübler-Ross?",
        options: [
            "Etap 'rozmrażania' (unfreezing) polega na burzeniu starych sposobów działania i uświadomieniu potrzeby zmiany.",
            "Faza 'zamrażania' (refreezing) ma na celu utrwalenie nowych wzorców postępowania i stabilizację sytuacji po wprowadzeniu zmiany.",
            "Krzywa zmiany Kübler-Ross opisuje reakcje ludzi na zmianę, przechodząc przez etapy takie jak zaprzeczenie, złość, negocjacje, depresja i akceptacja.",
            "Podczas etapu 'zmiany' (changing) kluczowe jest ciągłe komunikowanie zmian i wspieranie ludzi w ich wysiłkach adaptacyjnych.",
            "Według Lewina, zmiana jest procesem liniowym, który po wprowadzeniu nowego status quo nie wymaga już żadnego wzmacniania.",
            "Krzywa zmiany Kübler-Ross sugeruje, że wszyscy ludzie przechodzą przez te same etapy w tym samym czasie i z tą samą intensywnością.",
            "Budowanie identyfikacji pracowników z celem i sensem zmian to działanie charakterystyczne dla etapu 'zamrażania'."
        ],
        correct: [0, 1, 2, 3]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących pomiaru i monitorowania procesów (mierniki sukcesu) są poprawne?",
        options: [
            "Mierniki sukcesu mogą być zarówno ilościowe (np. DPMO), jak i jakościowe (np. satysfakcja klienta).",
            "Mierniki procesu powinny być powiązane z potrzebami klientów i głównymi zadaniami procesu.",
            "Przykładem miernika z kategorii 'terminowość procesów' może być porównanie normatywnego czasu pracy z rzeczywistym czasem realizacji.",
            "Wskaźnik 'produkcja grafiki prawidłowo złożona za pierwszym razem' jest przykładem miernika jakości procesu.",
            "Zbieranie danych do wyliczenia mierników jest nieistotne, ponieważ najważniejsza jest intuicja właściciela procesu.",
            "Częstotliwość pomiaru mierników powinna być dopasowana do tempa odnotowywania zmian w otoczeniu.",
            "Mierniki sukcesu powinny być zdefiniowane na etapie definiowania zakresu procesu, a nie po jego wdrożeniu."
        ],
        correct: [0, 1, 2, 3, 5, 6]
    },
    {
        question: "Jakie funkcje i cele pełnią narzędzia takie jak Customer Voice Chart i Critical-to-Quality (CTQ) na etapie Define procedury DMAIC?",
        options: [
            "Customer Voice Chart służy do zbierania informacji od klientów i sortowania ich na kategorie, takie jak żądanie, rozwiązanie, specyfikacja, w celu określenia prawdziwych potrzeb.",
            "CTQ (Critical-to-Quality) ma na celu przełożenie potrzeb klientów na mierzalne wymagania krytyczne z punktu widzenia jakości.",
            "Zarówno Customer Voice Chart, jak i CTQ, koncentrują się wyłącznie na potrzebach wewnętrznych interesariuszy, a nie klientów zewnętrznych.",
            "Czynniki CTQ powinny opisywać sposób zaspokojenia potrzeby (np. 'użyć ergonomicznego materiału'), a nie samą potrzebę klienta.",
            "Customer Voice Chart pomaga uniknąć błędnego interpretowania próśb klientów (np. rozróżnienie między żądaniem a rzeczywistą potrzebą).",
            "CTQ powinny być sformułowane w kategoriach pozytywnych, np. 'strona internetowa ładuje się szybko', a nie 'strona nie może się długo ładować'.",
            "Celem obu narzędzi jest dostarczenie danych niezbędnych do dalszej analizy i usprawnienia procesu z perspektywy klienta."
        ],
        correct: [0, 1, 4, 5, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących wdrażania (implementation) i testowania procesów są prawdziwe?",
        options: [
            "Nawet najlepiej zaprojektowany proces może ponieść klęskę, jeśli nie przygotowano odpowiednio infrastruktury i nie przeszkolono wykonawców.",
            "Przed wdrożeniem procesu należy przeprowadzić analizę wpływu zmiany na inne procesy i interesariuszy.",
            "Testowanie procesów warto rozpocząć od tych najbardziej złożonych i wymagających radykalnych zmian, aby szybko zobaczyć efekty.",
            "Akcja informacyjna przed wdrożeniem powinna obejmować komunikację zmian za pomocą środków dostosowanych do odbiorców i w języku dla nich zrozumiałym.",
            "Podczas testowania procesu, informacje zwrotne od uczestników pozwalają porównać założenia z faktycznymi rezultatami i zdecydować o powszechnym wdrożeniu.",
            "Wdrożenie procesu nie wymaga planowania szkoleń, ponieważ pracownicy powinni samodzielnie dostosować się do nowych procedur.",
            "Opracowanie procedury testowania procesu, która określa cele, zadania, odpowiedzialności i zasoby, jest dobrą praktyką."
        ],
        correct: [0, 1, 3, 4, 6]
    },
    {
        question: "Które z poniższych są przykładami działań prewencyjnych i reakcyjnych w kontekście strategii Poka Yoke (pomyłkoodporności)?",
        options: [
            "Działanie prewencyjne: wprowadzenie metody pracy, która uniemożliwia popełnienie błędu (np. kształt złącza uniemożliwiający podłączenie w odwrotny sposób).",
            "Działanie reakcyjne: zatrzymanie procesu lub zasygnalizowanie błędu pracownikowi, gdy tylko błąd zostanie zauważony.",
            "Działanie prewencyjne: kontrola jakości na końcu procesu w celu odfiltrowania wadliwych produktów.",
            "Działanie reakcyjne: natychmiastowa naprawa błędu, zanim praca przejdzie na kolejne stanowisko.",
            "Działanie prewencyjne: stosowanie wykresów kontrolnych do monitorowania stabilności procesu, co jest formą kontroli statystycznej.",
            "Działanie reakcyjne: wdrożenie systemu, który po wykryciu błędu automatycznie zatrzymuje maszynę (autonomation).",
            "Działanie prewencyjne: szczegółowe instrukcje stanowiskowe, które pracownik musi przeczytać przed rozpoczęciem pracy, ale które nie uniemożliwiają błędu."
        ],
        correct: [0, 1, 3, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących mapy procesu i jej elementów są poprawne?",
        options: [
            "Mapa procesu jest graficznym odzwierciedleniem procesu i pokazuje sekwencję zdarzeń od początku do końca.",
            "Poziom szczegółowości mapy powinien zależeć od jej przeznaczenia, np. przy wysokiej rotacji pracowników warto tworzyć mapy bardziej szczegółowe.",
            "Mapa procesu powinna zawierać legendę wyjaśniającą wszystkie użyte symbole, zwłaszcza jeśli zastosowano niestandardową notację lub kolory.",
            "Standaryzacja miejsc odwzorowywania elementów na mapach (np. wykonawca po lewej stronie zadania) ułatwia ich odczytywanie i identyfikację luk.",
            "Mapę procesu docelowego (to-be) tworzy się przed zebraniem jakichkolwiek danych o obecnym procesie.",
            "Na mapie procesu nie należy umieszczać informacji o czasie realizacji zadań ani narzędziach, ponieważ to jest przeznaczone wyłącznie dla dokumentu informacyjnego (DI).",
            "Mapy ogólne (high-level) sporządza się dla procesów słabo zdefiniowanych lub bardzo złożonych, aby przedstawić ich ogólną rolę w organizacji."
        ],
        correct: [0, 1, 2, 3, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących analizy interesariuszy (stakeholder analysis) w kontekście projektów procesowych są poprawne?",
        options: [
            "Celem analizy interesariuszy jest zbudowanie poparcia dla projektu oraz identyfikacja i eliminacja potencjalnego oporu.",
            "W analizie interesariuszy określa się ich obecną postawę wobec projektu oraz postawę przewidywaną, aby zobaczyć ewentualne luki.",
            "Interesariusze to tylko te grupy lub osoby, które są bezpośrednio zaangażowane w realizację procesu (wykonawcy i właściciel).",
            "Sponsor procesu i właściciel procesu są zazwyczaj jego głównymi klientami i należy ich traktować jako grupę docelową analizy.",
            "Zidentyfikowanie interesariuszy i zrozumienie ich wpływu jest szczególnie ważne, gdy proces wykracza poza granice funkcjonalne organizacji.",
            "Brak komunikacji i zrozumienia pomiędzy interesariuszami, wynikający choćby z nieznajomości notacji, może wpłynąć na ogólne koszty projektu.",
            "Po zidentyfikowaniu luk w postawach interesariuszy, należy zbudować strategię radzenia sobie z oporem, np. poprzez odpowiednią komunikację i zaangażowanie."
        ],
        correct: [0, 1, 4, 5, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących pojęć i narzędzi z zakresu Six Sigma (DPMO, Defekt, Sigma Level) są poprawne?",
        options: [
            "Defekt (defect) to każda niezgodność produktu lub usługi z wymaganiami CTQ (Critical-to-Quality).",
            "DPMO (Defects Per Million Opportunities) to liczba defektów na milion możliwości wystąpienia defektu.",
            "Poziom sigma (Sigma Level) to miara wydajności procesu, gdzie wyższy poziom sigma oznacza mniejszą liczbę defektów.",
            "W obliczeniach DPMO, każdy defekt w produkcie jest liczony tylko raz, niezależnie od tego, ile jest możliwości jego wystąpienia.",
            "Jeśli proces osiąga poziom 6 sigma, oznacza to, że jest on wolny od jakichkolwiek defektów.",
            "Aby obliczyć DPMO, potrzebna jest znajomość całkowitej liczby defektów, liczby badanych produktów i liczby możliwych defektów na produkt.",
            "Poziom sigma na poziomie 3,4 DPMO jest powszechnie uznawany za cel dla procesów w koncepcji Six Sigma."
        ],
        correct: [0, 1, 2, 5, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących cyklu życia BPM i jego faz są zgodne z ujęciami przedstawionymi w cyklu nauczania przedmiotu Zarządzanie Procesami?",
        options: [
            "Większość modeli cyklu BPM obejmuje fazy takie jak: analiza/identyfikacja, projektowanie/modelowanie, wdrożenie/realizacja, monitorowanie/kontrola i przeprojektowanie/doskonalenie.",
            "Faza 'odkrywanie procesu' (process discovery) polega na udokumentowaniu aktualnego stanu procesu ('as-is').",
            "W modelu van der Aalsta, ostatnim etapem jest 'wdrożenie' (enactment), które nie wymaga już żadnej dalszej adaptacji.",
            "Celem fazy 'analiza procesu' (process analysis) jest identyfikacja, udokumentowanie i kwantyfikacja problemów procesu oraz ich wpływu.",
            "Faza 'przeprojektowanie procesu' (process redesign) polega na identyfikowaniu zmian i tworzeniu modelu procesu docelowego ('to-be').",
            "Wszystkie modele cyklu BPM zakładają, że proces jest linearny i po zakończeniu etapu wdrożenia nie ma już do niego powrotu.",
            "Etap 'ocena' (evaluation) w modelu Weske obejmuje eksplorację procesów i monitorowanie aktywności biznesowej."
        ],
        correct: [0, 1, 3, 4, 6]
    },
    {
        question: "Które z poniższych technik i narzędzi są stosowane na etapie Measure (Mierz) w procedurze DMAIC?",
        options: [
            "Macierz miar (Measure Matrix), która służy do zapewnienia, że dla każdego CTQ/CTB istnieją odpowiednie miary efektów.",
            "Analiza typu danych (Data Type Analysis), która pomaga określić przydatność mierników w zależności od skali pomiarowej (nominalna, porządkowa, interwałowa, ilorazowa).",
            "Diagram Pareto do identyfikacji najważniejszych (najczęstszych) przyczyn problemów.",
            "Histogram do analizy rozkładu wyników procesu i oceny, na ile mieszczą się one w oczekiwaniach klienta.",
            "Diagram przyczynowo-skutkowy (Ishikawy) do identyfikacji źródeł problemów.",
            "Obliczanie wskaźnika DPMO w celu zbadania obecnego poziomu jakości (poziomu sigma).",
            "Diagram spaghetti do analizy niepotrzebnych przemieszczeń."
        ],
        correct: [0, 1, 2, 3, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących roli i odpowiedzialności różnych interesariuszy w cyklu BPM są poprawne?",
        options: [
            "Dyrektor ds. procesów (Chief Process Officer - CPO) odpowiada za standaryzację i harmonizację procesów oraz ich ewolucję podyktowaną zmianami rynkowymi.",
            "Analitycy procesu (process analysts) zajmują się identyfikowaniem, odkrywaniem, modelowaniem i analizą procesów.",
            "Uczestnicy procesu (process participants) nie angażują się w fazy odkrywania i analizy procesu, ponieważ ich rola ogranicza się wyłącznie do wykonywania pracy operacyjnej.",
            "Grupa BPM (Centrum Doskonałości BPM) odpowiada za utrzymanie architektury procesów, ustalanie priorytetów projektów i wspieranie właścicieli procesów.",
            "Inżynierowie systemów (system engineers) odpowiadają wyłącznie za utrzymanie infrastruktury IT, a nie za przeprojektowanie procesów.",
            "Dyrektor finansowy (CFO) może być interesariuszem procesów, ponieważ ogólne wyniki finansowe organizacji są zależne od wydajności procesów.",
            "Właściciele procesów (process owners) nie odpowiadają za planowanie i organizowanie, a jedynie za monitorowanie wykonania procesu przez uczestników."
        ],
        correct: [0, 1, 3, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących roli planisty grafiki (właściciela procesu PPEO) są poprawne?",
        options: [
            "Planista grafiki odpowiada za skuteczność i wyniki procesu przygotowania etykiety opakowania (PPEO).",
            "Do jego obowiązków należy wybór odpowiednich standardowych procedur operacyjnych (SOP) zarządzania zmianą.",
            "Planista grafiki nie ma uprawnień do zatwierdzania wniosku o projekt opakowania (WPO) – robi to wyłącznie kierownik zespołu operacji.",
            "Osoba na tym stanowisku zarządza relacjami z dostawcami grafik, będąc wsparciem pierwszego poziomu w rozwiązywaniu problemów.",
            "Planista grafiki inicjuje analizę metodą 5 why w celu zidentyfikowania źródła problemu i poprawy jakości.",
            "Zakres odpowiedzialności planisty grafiki ogranicza się wyłącznie do aspektów technicznych druku, bez wpływu na harmonogram.",
            "Planista grafiki zapewnia nadzór nad pracą dostawcy i potwierdza wykonanie usługi."
        ],
        correct: [0, 1, 3, 4, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących pojęcia „ekwiwalent pełnego czasu pracy” (FTE) w kalkulacji kosztów procesu są poprawne?",
        options: [
            "Ekwiwalent FTE to stosunek godzin rzeczywiście przepracowanych w związku z zadaniem w danym procesie do całkowitej liczby godzin formalnie przepracowanych przez pracownika etatowego.",
            "FTE wykorzystuje się do alokacji kosztów osobowych na konkretny proces.",
            "Koszt oprogramowania (np. licencji Visio) należy pomnożyć przez FTE, aby uzyskać koszt przypadający na proces, jeśli oprogramowanie jest używane tylko w części etatu.",
            "Wartość FTE dla pracownika zatrudnionego na pełen etat, który w 100% swojego czasu pracuje przy jednym procesie, wynosi 1.",
            "Ekwiwalent FTE nie ma zastosowania do kosztów infrastruktury i narzędzi, a jedynie do kosztów osobowych.",
            "FTE pozwala na sprawiedliwe rozliczenie kosztów pracowników, którzy angażują się w wiele różnych procesów.",
            "Obliczenie FTE jest zbędne, jeśli organizacja stosuje metodę kosztów bezpośrednich."
        ],
        correct: [0, 1, 2, 3, 5]
    },
    {
        question: "Wskaż prawdziwe stwierdzenia dotyczące diagramu przejścia obiektów w notacji IDEF3.",
        options: [
            "Diagram przejścia obiektów pozwala określić reguły rządzące przejściami między stanami obiektów w scenariuszu.",
            "Okrąg (symbol rodzaju) zawierający nazwę obiektu reprezentuje obiekt określonego rodzaju oraz odpowiadający mu stan.",
            "Łuki przejściowe łączące okręgi symbolizują czynności zmiany jednego stanu na inny.",
            "Węzły przejściowe zawierające znak „X” (wyłączny LUB) wskazują na konieczność wykonania wszystkich ścieżek równolegle.",
            "Jednostka zachowania (UOB) opisuje procesy lub funkcje, które mogą wystąpić w systemie, oraz ograniczenia logiczne i czasowe.",
            "W IDEF3 nie można modelować współbieżności ani synchronizacji, a jedynie sekwencje liniowe.",
            "Diagram przejścia obiektów jest szczególnie przydatny do analizy logiki rozgałęzień i zależności czasowych w procesie."
        ],
        correct: [0, 1, 2, 4, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących czynności niewnoszących wartości dodanej (NVA) oraz metod ich eliminacji są poprawne?",
        options: [
            "Działania NVA to takie, które nie tworzą wartości dla klienta ani warunków do jej tworzenia.",
            "Siedem rodzajów marnotrawstwa (muda) według Ohno obejmuje m.in. oczekiwanie, nadmiar zapasów, defekty i nadprodukcję.",
            "Przykładem NVA jest powtórne zatwierdzanie grafiki z powodu błędu, za który klient nie zapłaciłby.",
            "Metoda 5 why polega na pięciokrotnym zadaniu pytania „dlaczego” w celu dotarcia do źródłowej przyczyny problemu.",
            "Analiza przyczyn źródłowych (root cause analysis) koncentruje się na objawach, a nie na pierwotnych przyczynach marnotrawstwa.",
            "Eliminacja NVA może obejmować rezygnację z nadmiernych kontroli jakości, które nie dodają wartości.",
            "Działania NVA są pożądanym elementem każdego procesu, ponieważ zwiększają jego niezawodność."
        ],
        correct: [0, 1, 2, 3, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących narzędzia SIPOC i jego zastosowania na etapie Define są poprawne?",
        options: [
            "SIPOC to akronim od Supplier, Input, Process, Output, Customer.",
            "Celem SIPOC jest upewnienie się, że wszyscy członkowie zespołu w ten sam sposób rozumieją proces na wysokim poziomie ogólności.",
            "W SIPOC proces powinien być narysowany jako ogólna mapa składająca się z 5-7 elementów, bez zbędnych szczegółów.",
            "W SIPOC identyfikuje się głównych dostawców (Suppliers) i wejścia (Inputs), ale pomija się wyjścia (Outputs).",
            "Klientami (Customers) w SIPOC są zazwyczaj sponsor procesu i właściciel procesu.",
            "SIPOC pomaga określić kluczowe wejścia i wyjścia procesu oraz zidentyfikować klientów, którzy otrzymują rezultaty.",
            "Narzędzie SIPOC jest przydatne do szybkiego zarysowania procesu przed przystąpieniem do bardziej szczegółowego mapowania."
        ],
        correct: [0, 1, 2, 5, 6]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących porównania BPM i metodyki Agile są poprawne?",
        options: [
            "BPM zakłada, że dobry proces będzie dobrze funkcjonował niezależnie od wykonawców, podczas gdy Agile podkreśla znaczenie konkretnych ludzi i ich kompetencji.",
            "Metodyki Agile opierają się na adaptacji i szybkich próbach (sprintach), a nie na szczegółowym planowaniu długoterminowym.",
            "Wdrożenie BPM w modelu współpracy (collaboration) jest stosunkowo łatwe, ponieważ zadania są tam unikatowe i wymagają improwizacji.",
            "Zespoły Agile traktują informacje od klientów jako lepszą wskazówkę niż intuicje menedżerów.",
            "Tradycyjny BPM lepiej radzi sobie z pracą rutynową i powtarzalną (modele transakcyjne i integracyjne) niż z pracą kreatywną.",
            "Głównym elementem metodyki Agile jest szczegółowo zdefiniowany proces, a zespół ma się do niego dostosowywać.",
            "W Agile sprinty służą przede wszystkim do wymuszenia wydajniejszej pracy poprzez sztywne terminy, a nie do uzyskiwania informacji zwrotnej od klienta."
        ],
        correct: [0, 1, 3, 4]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących wybranych symboli i koncepcji w BPMN są poprawne?",
        options: [
            "Basen (Pool) reprezentuje uczestnika procesu (np. organizację, rolę), a przepływy sekwencji nie mogą przekraczać granic basenu.",
            "Tory (Swimlanes) służą do organizowania i kategoryzowania działań w ramach puli, np. według roli lub działu.",
            "Przepływ komunikatów (Message Flow) jest używany do pokazania wymiany informacji pomiędzy dwoma basenami.",
            "Bramka (Gateway) służy do sterowania rozgałęzieniami i łączeniami przepływu sekwencji (np. XOR, AND, OR).",
            "Zdarzenie początkowe (Start Event) może być tylko jednego typu – brak szczegółowej specyfikacji, co je wyzwala.",
            "Choreografia (Choreography) w BPMN istnieje pomiędzy pulami i reprezentuje kontrakt proceduralny między współdziałającymi uczestnikami, bez jednego podmiotu odpowiedzialnego.",
            "Obiekt danych (Data Object) w BPMN pokazuje, jakie dane są potrzebne lub produkowane przez czynności."
        ],
        correct: [0, 1, 2, 3, 5, 6]
    },
    {
        question: "Wskaż poprawne stwierdzenia dotyczące czynników sukcesu i krytycznych elementów wdrożenia BPM.",
        options: [
            "Dopasowanie strategiczne (Strategic Alignment) oznacza, że plan BPM wynika z planu strategicznego i jest z nim spójny.",
            "Kultura organizacyjna wspierająca BPM charakteryzuje się łatwością przyswajania zmian i postrzeganiem procesów jako naturalnego sposobu pracy.",
            "Wykonawcy procesu w organizacji procesowej nie potrzebują znajomości całego procesu, wystarczy, że znają swoje zadanie.",
            "Infrastruktura IT dla BPM powinna pozwalać na modelowanie, realizację, monitorowanie i usprawnianie procesów.",
            "Właściciel procesu powinien być menedżerem wyższego szczebla odpowiedzialnym za zarządzanie całym procesem, od początku do końca.",
            "Metody stosowane w BPM obejmują analizę i projektowanie procesów, ale nie obejmują metod zarządzania projektami procesowymi.",
            "Brak odpowiednich mierników procesowych (mierzących proces, a nie funkcje) jest jednym z warunków sprawnego procesu."
        ],
        correct: [0, 1, 3, 4]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących pojęcia „czas przebiegu procesu” (cycle time) i jego skracania są poprawne?",
        options: [
            "Czas przebiegu procesu to całkowity czas od momentu zainicjowania procesu do momentu dostarczenia rezultatu klientowi.",
            "Czas przebiegu obejmuje zarówno czas rzeczywiście poświęcony na pracę (processing time), jak i czas oczekiwania (waiting time).",
            "Skracanie czasu oczekiwania jest często łatwiejsze i daje szybsze efekty niż skracanie czasu czystej pracy.",
            "Zwiększenie obciążenia pracą wykonawcy (multitasking) zawsze skraca czas przebiegu procesu.",
            "Eliminacja zadania automatycznie skraca całkowity czas przebiegu procesu.",
            "Wąskie gardła (bottlenecks) w procesie wydłużają czas przebiegu, a ich identyfikacja jest kluczowa dla optymalizacji.",
            "Czas przebiegu procesu nie ma związku z kosztami procesu – może być długi, ale tani."
        ],
        correct: [0, 1, 2, 4, 5]
    },
    {
        question: "Które z poniższych stwierdzeń dotyczących analizy ryzyka i działań naprawczych w procesie (na przykładzie PPEO) są poprawne?",
        options: [
            "Incydent jakościowy (IJ) w PPEO wymaga udokumentowania w raporcie, który zawiera m.in. typ incydentu, potencjalne ryzyko i podstawową przyczynę.",
            "Przykładem podstawowej przyczyny incydentu może być pominięcie tłumaczenia jednego z języków na etykiecie, przez co konsument nie ma pełnej informacji.",
            "Działanie naprawcze w przypadku błędnej grafiki obejmuje aktualizację grafiki i ponowną jej akceptację przez wszystkie funkcje.",
            "Właściciel procesu nie ma obowiązku informowania o zmianach w grafice ani aktualizowania harmonogramu – robi to zespół projektowy.",
            "Analiza „dlaczego-dlaczego” (5 why) jest wymagana np. na wniosek kierownika zespołu operacji w celu zbadania przyczyn incydentu.",
            "Tolerowanie przez właściciela procesu odstępstw od standardów (np. samodzielne nanoszenie zmian zamiast odrzucenia grafiki) może być problemem zarządczym.",
            "Ryzyko PR (public relations) i ryzyko dla klienta/konsumenta to przykłady potencjalnych ryzyk uwzględnianych w raporcie incydentu."
        ],
        correct: [0, 1, 2, 4, 5, 6]
    }
];

const simulator = {
    state: {
        questions: [],          // Wylosowane 30 pytań
        userAnswers: [],        // Tablica tablic np. [[0, 1], [], [3], ...]
        currentIndex: 0,
        timeLeft: 45 * 60,      // 45 minut w sekundach
        timerInterval: null,
        isExamActive: false,
        isReviewMode: false,
        score: 0
    },

    init() {
        this.loadSharedProgress();
        
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.remove('active');
                setTimeout(() => loader.style.display = 'none', 300);
            }
        }, 500);

        this.setupMobileMenu();
        this.setupModals();
    },

    // Inicjalizacja egzaminu
    startExam() {
        if (examDatabase.length < 30) {
            alert("Błąd: Baza danych zawiera mniej niż 30 pytań! Wklej pełną bazę do pliku simulator.js");
            return;
        }

        // 1. Losowanie (Fisher-Yates) i pobranie 30 pytań
        let shuffled = [...examDatabase];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.state.questions = shuffled.slice(0, 30);
        
        // 2. Przygotowanie tablicy odpowiedzi (puste tablice dla 30 pytań)
        this.state.userAnswers = Array.from({ length: 30 }, () => []);
        this.state.currentIndex = 0;
        this.state.isExamActive = true;
        this.state.timeLeft = 45 * 60; // 45 minut

        // 3. Zmiana widoku
        document.getElementById('exam-intro').classList.add('hidden');
        document.getElementById('exam-intro').classList.remove('active');
        
        const core = document.getElementById('exam-core');
        core.classList.remove('hidden');
        setTimeout(() => core.classList.add('active'), 20);

        // 4. Start
        this.buildNavigator();
        this.renderQuestion();
        this.startTimer();
    },

    startTimer() {
        const display = document.getElementById('time-display');
        
        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            
            let minutes = Math.floor(this.state.timeLeft / 60);
            let seconds = this.state.timeLeft % 60;
            
            display.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            // Poniżej 5 minut - ostrzeżenie
            if (this.state.timeLeft <= 300) {
                display.classList.add('danger');
            }

            // Koniec czasu
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.submitExam(true); // Wymuszone zakończenie
            }
        }, 1000);
    },

    // Przełączanie checkboxów
    toggleOption(optionIndex, btnElement) {
        if (!this.state.isExamActive) return; // Zabezpieczenie przed klikaniem w trybie przeglądu

        let currentSelections = this.state.userAnswers[this.state.currentIndex];
        
        const indexPos = currentSelections.indexOf(optionIndex);
        if (indexPos === -1) {
            // Dodaj do wybranych
            currentSelections.push(optionIndex);
            btnElement.classList.add('selected');
        } else {
            // Usuń z wybranych
            currentSelections.splice(indexPos, 1);
            btnElement.classList.remove('selected');
        }
        
        this.updateNavigatorUI();
    },

    renderQuestion() {
        this.updateNavigatorUI();

        const q = this.state.questions[this.state.currentIndex];
        document.getElementById('question-text').innerText = q.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        const currentSelections = this.state.userAnswers[this.state.currentIndex];

        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            
            if (this.state.isReviewMode) {
                // TRYB PRZEGLĄDU BŁĘDÓW
                btn.disabled = true;
                const isSelected = currentSelections.includes(index);
                const isCorrect = q.correct.includes(index);

                if (isSelected && isCorrect) {
                    btn.classList.add('correct'); // Dobrze zaznaczone
                } else if (isSelected && !isCorrect) {
                    btn.classList.add('wrong'); // Źle zaznaczone
                } else if (!isSelected && isCorrect) {
                    btn.classList.add('correct');
                    btn.style.borderStyle = 'dashed'; // Opcja którą pominął, a była poprawna
                    btn.style.opacity = '0.6';
                }
            } else {
                // TRYB NORMALNEGO EGZAMINU
                if (currentSelections.includes(index)) {
                    btn.classList.add('selected');
                }
                btn.onclick = () => this.toggleOption(index, btn);
            }

            optionsContainer.appendChild(btn);
        });

        // Obsługa statusu w trybie przeglądu
        const statusEl = document.getElementById('review-status');
        if (this.state.isReviewMode) {
            statusEl.classList.remove('hidden');
            if (this.checkIfAnswerIsPerfect(currentSelections, q.correct)) {
                statusEl.innerText = "KWALIFIKACJA: 1 punkt (Brak błędów)";
                statusEl.style.color = "var(--success-color)";
            } else {
                statusEl.innerText = "KWALIFIKACJA: 0 punktów (Błąd w odpowiedzi)";
                statusEl.style.color = "var(--danger-color)";
            }
        }

        // Obsługa przycisku Next
        const nextBtn = document.getElementById('next-btn');
        if (this.state.currentIndex < 29) {
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = () => {
                this.state.currentIndex++;
                this.renderQuestion();
            };
        } else {
            nextBtn.classList.add('hidden');
        }
    },

    buildNavigator() {
        const navContainer = document.getElementById('quiz-navigator');
        navContainer.innerHTML = '';
        
        for (let i = 0; i < 30; i++) {
            const btn = document.createElement('button');
            btn.className = 'nav-dot';
            btn.innerText = i + 1;
            
            btn.onclick = () => {
                this.state.currentIndex = i;
                this.renderQuestion();
                document.getElementById('quiz-map-modal').classList.add('hidden');
            };
            
            navContainer.appendChild(btn);
        }
    },

    updateNavigatorUI() {
        const dots = document.querySelectorAll('.nav-dot');
        
        dots.forEach((dot, index) => {
            dot.className = 'nav-dot';
            
            const selections = this.state.userAnswers[index];

            if (this.state.isReviewMode) {
                // W przeglądzie pokazujemy co miałeś dobrze a co źle
                const isPerfect = this.checkIfAnswerIsPerfect(selections, this.state.questions[index].correct);
                if (isPerfect) dot.classList.add('answered-correct');
                else dot.classList.add('answered-wrong');
            } else {
                // W trakcie egzaminu tylko szary vs niebieski (odpowiedziano)
                if (selections.length > 0) dot.classList.add('answered');
            }
            
            if (index === this.state.currentIndex) {
                dot.classList.add('active');
                dot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        document.getElementById('pill-text').innerText = `Pytanie ${this.state.currentIndex + 1} / 30`;
        document.getElementById('pill-fill').style.width = `${((this.state.currentIndex + 1) / 30) * 100}%`;

        const prevBtn = document.getElementById('nav-prev-btn');
        const nextBtn = document.getElementById('nav-next-btn');
        if(prevBtn) {
            prevBtn.disabled = this.state.currentIndex === 0;
            prevBtn.style.opacity = prevBtn.disabled ? '0.2' : '1';
        }
        if(nextBtn) {
            nextBtn.disabled = this.state.currentIndex === 29;
            nextBtn.style.opacity = nextBtn.disabled ? '0.2' : '1';
        }
    },

    showEndConfirm() {
        // Zlicz, na ile pytań padła chociaż 1 odpowiedź
        const answeredCount = this.state.userAnswers.filter(arr => arr.length > 0).length;
        document.getElementById('confirm-modal-text').innerText = `Zaznaczyłeś odpowiedzi w ${answeredCount} z 30 pytań.`;
        document.getElementById('confirm-modal').classList.remove('hidden');
    },

    // Główna logika sprawdzająca (0 lub 1 punkt)
    checkIfAnswerIsPerfect(userArr, correctArr) {
        if (userArr.length !== correctArr.length) return false;
        
        // Sortujemy tablice i sprawdzamy czy są identyczne
        const sortedUser = [...userArr].sort();
        const sortedCorrect = [...correctArr].sort();
        
        return JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
    },

    submitExam(isForced = false) {
        clearInterval(this.state.timerInterval);
        this.state.isExamActive = false;
        document.getElementById('confirm-modal').classList.add('hidden');

        // Obliczanie wyniku
        this.state.score = 0;
        for (let i = 0; i < 30; i++) {
            if (this.checkIfAnswerIsPerfect(this.state.userAnswers[i], this.state.questions[i].correct)) {
                this.state.score++;
            }
        }

        this.showResults();
    },

    showResults() {
        document.getElementById('exam-core').classList.add('hidden');
        document.getElementById('exam-core').classList.remove('active');
        
        const results = document.getElementById('exam-results');
        results.classList.remove('hidden');
        setTimeout(() => results.classList.add('active'), 20);

        const percentage = Math.round((this.state.score / 30) * 100);
        document.getElementById('final-score-text').innerText = `${percentage}%`;
        document.getElementById('result-points').innerText = `Zdobyte punkty: ${this.state.score} / 30`;

        const circle = document.getElementById('result-circle');
        const title = document.getElementById('result-status-title');

        if (this.state.score >= 16) {
            title.innerText = "EGZAMIN ZALICZONY!";
            title.style.color = "var(--success-color)";
            circle.style.borderColor = "var(--success-color)";
            document.getElementById('final-score-text').style.color = "var(--success-color)";
        } else {
            title.innerText = "EGZAMIN NIEZALICZONY";
            title.style.color = "var(--danger-color)";
            circle.style.borderColor = "var(--danger-color)";
            document.getElementById('final-score-text').style.color = "var(--danger-color)";
        }
    },

    startReviewMode() {
        this.state.isReviewMode = true;
        this.state.currentIndex = 0;
        
        document.getElementById('exam-results').classList.add('hidden');
        document.getElementById('exam-results').classList.remove('active');
        
        const core = document.getElementById('exam-core');
        core.classList.remove('hidden');
        setTimeout(() => core.classList.add('active'), 20);

        // Ukrycie timera i przycisku Zakończ
        document.getElementById('exam-timer-bar').style.display = 'none';
        document.querySelector('.quiz-footer').style.display = 'none';
        
        this.renderQuestion();
    },

    // === UTILITIES ===
    setupModals() {
        const prevBtn = document.getElementById('nav-prev-btn');
        const nextBtn = document.getElementById('nav-next-btn');
        const mapToggle = document.getElementById('nav-map-toggle');
        const closeModal = document.getElementById('close-map-btn');
        const modal = document.getElementById('quiz-map-modal');

        if(prevBtn) prevBtn.onclick = () => {
            if (this.state.currentIndex > 0) { this.state.currentIndex--; this.renderQuestion(); }
        };
        if(nextBtn) nextBtn.onclick = () => {
            if (this.state.currentIndex < 29) { this.state.currentIndex++; this.renderQuestion(); }
        };

        if(mapToggle) mapToggle.onclick = () => modal.classList.remove('hidden');
        if(closeModal) closeModal.onclick = () => modal.classList.add('hidden');
        if(modal) modal.onclick = (e) => { if(e.target === modal) modal.classList.add('hidden'); };
    },

    setupMobileMenu() {
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
    },

    loadSharedProgress() {
        const saved = localStorage.getItem('siz_app_state_v1');
        if (saved) {
            try {
                const parsedState = JSON.parse(saved);
                const globalProgress = document.getElementById('global-progress');
                const progressPercent = document.getElementById('progress-percent');
                if (globalProgress) globalProgress.style.width = `${parsedState.progress || 0}%`;
                if (progressPercent) progressPercent.innerText = `${parsedState.progress || 0}%`;

                let mastery = 0;
                if (parsedState.score !== undefined) {
                    const totalSteps = 150; 
                    const maxPossibleScore = totalSteps * 10;
                    mastery = Math.round((parsedState.score / maxPossibleScore) * 100);
                }

                const masteryProgress = document.getElementById('mastery-progress');
                const masteryPercent = document.getElementById('mastery-percent');
                if (masteryProgress) masteryProgress.style.width = `${mastery || 0}%`;
                if (masteryPercent) masteryPercent.innerText = `${mastery || 0}%`;
            } catch(e) { }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    simulator.init();
});
