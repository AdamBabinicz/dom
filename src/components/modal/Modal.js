import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../../components/ScrollToTop";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 200vh; */
  padding: 3rem 13rem;
  background: #fff;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.342);
    transition: all 0.3s ease-in-out;
    font-size: 18px;
  }
  a:hover {
    color: #00000096;
  }
  .link {
    color: rgba(0, 0, 0, 0.342);
    transition: all 0.3s ease-in-out;
    font-size: 28px;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1100px) {
    padding: 3rem 6rem;
  }

  @media screen and (max-width: 640px) {
    padding: 2rem 3rem;
  }
`;

const Modal = () => {
  return (
    <>
      <ScrollToTop />
      <ModalContainer>
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faUserSecret} />
        </Link>
        <h1>Polityka prywatności i polityka cookies</h1>
        <h2>I Informacje ogólne</h2> <br />
        <p>
          Niniejsza Polityka Prywatności określa sposób pozyskiwania,
          przetwarzania oraz zabezpieczania danych osobowych w rozumieniu ustawy
          o ochronie danych osobowych z dnia 29 sierpnia 1997 roku (Dz.U. Nr
          133, poz. 883 z póź. zm.) oraz ustawą o świadczeniu usług drogą
          elektroniczną z dnia 18 lipca 2002 r. (Dz.U. Nr 144, poz. 1204 z póź.
          zm.)
          {/* Właścicielem strony internetowej zakladaniestronwww.pl oraz
        administratorem danych osobowych jest Iwona Pichalska prowadząca
        działalność gospodarczą pod nazwą: E-AKADEMIA ONLINE IWONA PICHALSKA NIP
        8231561760 REGON 386878491 z siedzibą w 08-300 Sokołów Podlaski, ul.
        Kolejowa 26c, wpisany do Centralnej Ewidencji i Informacji o
        Działalności Gospodarczej Rzeczypospolitej Polskiej. */}
        </p>
        <br />
        <h2>II Dane osobowe</h2> <br />
        <p>
          Serwis zbiera informacje podane dobrowolnie przez użytkownika. Dane
          osobowe są pozyskiwane podczas kontaktu mailowego bądź telefonicznego
          oraz podczas składania oferty. Dane osobowe są wykorzystywane
          wyłącznie w celu wysyłania korespondencji oraz realizacji oferty, o
          ile wyraził na to zgodę.
        </p>
        <p>
          Zawartość strony internetowej można przeglądać bez podawania
          jakichkolwiek danych osobowych.
        </p>
        <br />
        <p>
          Każda osoba, która udostępniła swoje dane osobowe ma prawo do dostępu
          do ich treści oraz możliwość ich poprawiania, uaktualniania,
          uzupełniania, jak i również żądania zaprzestania przetwarzania danych
          osobowych oraz wniesienia sprzeciwu wobec przetwarzania danych
          osobowych. Wymienione czynności można dokonać poprzez wysłanie
          stosownego oświadczenia na adres email: puaro@vp.pl. <br /> Pozyskane
          przez administratora dane osobowe są przechowywane, przetwarzane i
          chronione zgodnie z obowiązującymi przepisami prawa.
        </p>
        <br />
        {/*Zbiór danych osobowych został zgłoszony do Urzędu
      Ochrony Danych Osobowych (uodo.gov.pl).*/}
        <p>
          Administrator chroni zgromadzone dane osobowe korzystając z
          następujących środków: – szyfrowanie danych służących do
          korespondencji – zabezpieczenie zbioru danych przed nieuprawnionym
          dostępem.
        </p>
        <br />
        <h2>III Informacja o plikach cookies</h2> <br />
        <p>
          Serwis korzysta z plików cookies. Pliki cookies (tzw. „ciasteczka”)
          stanowią dane informatyczne, w szczególności pliki tekstowe, które
          przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
          przeznaczone są do korzystania ze stron internetowych Serwisu.
        </p>
        <br />
        <p>
          Cookies zazwyczaj zawierają nazwę strony internetowej, z której
          pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny
          numer. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
          Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator
          Serwisu.
        </p>
        <br />
        <p>
          Pliki cookies wykorzystywane są w następujących celach: tworzenia
          statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu
          korzystają ze stron internetowych, co umożliwia ulepszanie ich
          struktury i zawartości; utrzymania sesji Użytkownika Serwisu (po
          zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie
          Serwisu ponownie wpisywać loginu i hasła; określania profilu
          użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach
          reklamowych, w szczególności sieci Google.
        </p>
        <br />
        <p>
          W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
          „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
        </p>
        <p>
          Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
          urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia
          strony internetowej lub wyłączenia oprogramowania (przeglądarki
          internetowej).
        </p>
        <p>
          „Stałe” pliki cookies przechowywane są w urządzeniu końcowym
          Użytkownika przez czas określony w parametrach plików cookies lub do
          czasu ich usunięcia przez Użytkownika.
        </p>
        <br />
        <p>
          Oprogramowanie do przeglądania stron internetowych (przeglądarka
          internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
          cookies w urządzeniu końcowym Użytkownika.
        </p>
        <p>
          Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.
          Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe
          jest także automatyczne blokowanie plików cookies.
        </p>
        <br />
        <p>
          Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja
          przeglądarki internetowej. Ograniczenia stosowania plików cookies mogą
          wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych
          Serwisu.
        </p>
        <p>
          Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i
          wykorzystywane mogą być również przez współpracujących z operatorem
          Serwisu reklamodawców oraz partnerów.
        </p>
        <br />
        <p>
          Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby
          poznać zasady korzystania z plików cookies wykorzystywane w
          statystykach: Polityka ochrony prywatności Google Analytics. Pliki
          cookies mogą być wykorzystane przez sieci reklamowe, w szczególności
          sieć Google, do wyświetlenia reklam dopasowanych do sposobu, w jaki
          użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o
          ścieżce nawigacji użytkownika lub czasie pozostawania na danej
          stronie.
        </p>
        <br />
        <p>
          W zakresie informacji o preferencjach użytkownika gromadzonych przez
          sieć reklamową Google użytkownik może przeglądać i edytować informacje
          wynikające z plików cookies przy pomocy narzędzia:
          https://www.google.com/ads/preferences/
        </p>
        <br />
        <h2>
          IV Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
        </h2>
        <br />
        <p>
          Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
          ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
          cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
          utrzymania preferencji użytkownika może utrudnić, a w skrajnych
          przypadkach może uniemożliwić korzystanie ze stron www.
        </p>
        <br />
        <p>
          W celu zarządzania ustawieniami cookies wybierz z listy poniżej
          przeglądarkę internetową/ system i postępuj zgodnie z instrukcjami
          <br /> – Internet Explorer
          <br /> – Chrome
          <br /> – Safari
          <br /> – Firefox
          <br /> - Opera
          <br /> – Android
          <br /> – Safari (iOS)
          <br /> – Windows Phone
          <br /> – Blackberry
        </p>
        <br />
        <h2>V Udostępnienie danych</h2> <br />
        <p>
          Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w
          granicach prawnie dozwolonych. Operator może mieć obowiązek udzielania
          informacji zebranych przez Serwis upoważnionym organom na podstawie
          zgodnych z prawem żądań w zakresie wynikającym z żądania.
        </p>
        <br />
        <h2>VI Postanowienia końcowe</h2> <br />
        <p>
          Administrator ma prawo do zmian w niniejszej Polityce Prywatności.
          Osoby udostępniające swoje dane osobowe obowiązuje aktualnie
          obowiązująca wersja Polityki Prywatności, dostępna na stronie
          <Link
            to="//a-g.netlify.app/modal"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; czarna.netlify.app/modal
          </Link>
        </p>
        <br />
        <p>
          W sprawach nieuregulowanych niniejszą Polityką Prywatności stosuje się
          obowiązujące przepisy prawa polskiego.
        </p>
      </ModalContainer>
    </>
  );
};

export default Modal;
