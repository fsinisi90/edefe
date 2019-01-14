import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialData = {'Arkolón': ['AlgunoTieneViagra.ogg', 'SeTeAflojoLaPera.ogg'], 'Bolsoloco': ['AndateADormir.ogg', 'AndateADormirMaricon.ogg', 'Argentina.ogg', 'BuenoSeñoresCover.ogg', 'CallatePeladoCover.ogg', 'DeambulandoCoverBorracho.ogg', 'Eructo.ogg', 'Eructo2.ogg', 'Eructo3.ogg', 'EsPateticoCover.ogg', 'HimnoArgentino.ogg', 'IrAUnaMisa.ogg', 'NoSabesDeFutbol.ogg', 'ParaQueMiSobrinoRompeLosHuevos.ogg', 'RisaMalefica.ogg', 'Route66.ogg', 'TeApuroUnTrapitoCover.ogg', 'VamoMacriMeteaPreso.ogg'], 'CACIQUE': ['Almorzando.ogg', 'ArkolonArkolon.ogg', 'ChisteConError.ogg', 'ColonColon.ogg', 'DespuesDeEntrarPorColectora.ogg', 'ElTiempoNoPara.ogg', 'EnLaSelva.ogg', 'FueLoMejorDelAmor.ogg', 'GolDeVasco.ogg', 'ILoveYouTooMuchBaby.ogg', 'ImitandoAMoria.ogg', 'JuntosALaPar1SeOlvida.ogg', 'JuntosALaPar2Googleada.ogg', 'LaPila.ogg', 'LesGustaElDedo.ogg', 'LosMuchachosSabaleros.ogg', 'Machirulo.ogg', 'NoSeLeEntiendeUnaMierda.ogg', 'NoVesLaHeridaCover.ogg', 'NoVivesDeEnsenada.ogg', 'Osvaldo.ogg', 'PeteConUnChicleDeMenta.ogg', 'RataBlanca.ogg', 'RisaLoca.ogg', 'Ronin.ogg', 'ShauShauShauShauShau.ogg', 'TeFuisteAlCarajoKru.ogg', 'TeLlevoDentroDeMi.ogg', 'WeAreTheChampions.ogg', 'YQueGustoTieneElOjete.ogg'], 'Cuervo': ['BastaDeEstaGente.ogg', 'BastaDePappoTodoElTiempo.ogg', 'Brasilero.ogg', 'BuenoSeñores.ogg', 'CallatePeladoPelotudo.ogg', 'ChilenoTeEstasCagandoDeRisa.ogg', 'ChilenoTeEstasCagandoDeRisa2.ogg', 'ChupeGabinho.ogg', 'ChupeInglaterra.ogg', 'ChupeSabalero.ogg', 'ColonColonColon.ogg', 'Croacia.ogg', 'DaleMessiDale.ogg', 'DicenQueLosCuervosEstanCagados.ogg', 'EsaGrasaQueTenesEnLaAfa.ogg', 'EseDatoNoLoTenia.ogg', 'EseVarDeMierda.ogg', 'EstanDefendiendoAlGordoBonadeo.ogg', 'EstasMasGagaQueNunca.ogg', 'FestejasQueGanoChileDosFinales.ogg', 'FortiTePidoDisculpas.ogg', 'GaaaSadio.ogg', 'GaMusaGaGaGa.ogg', 'GaToniGaGaGa.ogg', 'GorilaHdrmp.ogg', 'HabiaRenunciado.ogg', 'HijoDeReMilPutaDefiní.ogg', 'HormonadoHijoDeReMilPuta.ogg', 'LeEnciendeLaMechaATodos.ogg', 'LosVotantesDeCambiemos.ogg', 'LuqueHaciaGolesConLaPija.ogg', 'MatenAAlguien.ogg', 'MeCagaronElViernes.ogg', 'MeCojoAZeideHermano.ogg', 'MeGustabaLaSeleccion.ogg', 'MeHizoAgarrarAcidez.ogg', 'MessiLaConchaDeTuMadre.ogg', 'MiraComoPateo.ogg', 'MiraIlen.ogg', 'NadieSeAtreva.ogg', 'NiMeHablesDeEsosPelotudos.ogg', 'NOM.ogg', 'NoNoRrocu.ogg', 'PerdimosDosFinalesConChile.ogg', 'PizzaDeAnana.ogg', 'PorElCulo.ogg', 'PorElCulo2.ogg', 'PorElCulo3.ogg', 'QuePuedeHacerUnJugadorDeIndependiente.ogg', 'QueQueresQueTeDiga.ogg', 'Route66.ogg', 'Siboldi.ogg', 'SonLasDosHinchadasJuntas.ogg', 'TeImaginasCogerteAlDani.ogg', 'TenemosEnElGrupoAUnChileno.ogg', 'TraemeloACacique.ogg', 'UnaManoDeRaydenEnElMenton.ogg', 'VamoMacri.ogg', 'VamoMacriMeteaPreso.ogg', 'ViejoDeMierda.ogg', 'VoyAPonerDeDespertadorElGemido.ogg', 'YoNiEnPedoEso.ogg'], 'Fantasma': ['MeMandoUnPrivadoIlen.ogg', 'UruguayoYBrasileroDeMierda.ogg'], 'Forti': ['ParaMaxi.ogg', 'RacingMufa.ogg'], 'Fran': ['NoCompresMasParaguayo.ogg'], 'frehley': ['AMiMeEncantaria.ogg', 'CesarManzanelli.ogg', 'CharuteandoVieja.ogg', 'ColoEnCopaArgentina.ogg', 'ContemosTodo.ogg', 'Ehhhhh.ogg', 'EsMuelaCariada.ogg', 'EsPateticoSigueComoAntes.ogg', 'EstosMuchachosEstanMuyMal.ogg', 'EstuveEstalladisimo.ogg', 'EsUnChisteEseClub.ogg', 'EveryTimeIHoldYou.ogg', 'GabitoFlogger.ogg', 'GorilaANadieVieja.ogg', 'LeRompoChocolatadaLaBoca.ogg', 'MasGenteDeMoron.ogg', 'MmmSospechoso.ogg', 'NiUnaRanchera.ogg', 'NoSabeVocalizar.ogg', 'NoVesLaHerida.ogg', 'NoVesLaTierraVencida.ogg', 'NuevoOrdenMundial.ogg', 'PenalLaConchaPutaDeTuMadre.ogg', 'PeroQueRrocu.ogg', 'QueCojones.ogg', 'QueSePuedeAgregarDeEsteInfradotado.ogg', 'SonidoEpico.ogg', 'TeJuroQueEsMuyFuerte.ogg', 'TemazoDeRobbieWilliams.ogg', 'TemazoDeRobbieWilliamsRemix.ogg', 'TeVeoYTePongo.ogg', 'VayanALaburar.ogg', 'VosNoLePodesDecirGorila.ogg', 'YaEstoyMedioBodega.ogg', 'YoTeEstoyEsperando.ogg', 'YoVotoTrabajadores.ogg'], 'Gabinho': ['ApareceHablandoDelBrocoli.ogg', 'ArkeolonLeTembloLaPera.ogg', 'EscuchameUnaCosaArkeolon.ogg', 'MeSalioMedioIlen.ogg', 'NoEstoyTriste.ogg', 'SeDobadonUnPbi.ogg'], 'ilen_tau': ['AguanteLaPizzaDeAnana.ogg', 'DescendidoDeMierda.ogg', 'EsaGenteQueMataPollitos.ogg', 'LosMandoEnPrivado.ogg', 'MaxiGastonQueVotaronEnBlanco.ogg', 'MiPersonalidadEsBizarra.ogg', 'NiNaciendoDosVeces.ogg', 'Roschman.ogg', 'TeApuroUnTrapito.ogg', 'TeneQueVolveanacé.ogg', 'VamoMacriRemix.ogg'], 'kru': ['Anana.ogg', 'Coloooon.ogg', 'Maxilakdead.ogg', 'MeHacenMandarUnAudio.ogg', 'QuePorongaCover.ogg', 'Temita.mp4'], 'La Dani': ['ChupeArmani.ogg', 'NoHuboRrocu.ogg', 'NuevoOrdenMundialCover.ogg', 'PorDiosQueHorrorDeTema.ogg'], 'Makelelejuas': ['Aleluya.ogg', 'Cagones.ogg', 'ChupeInglaterra.ogg', 'Churuchuchupe.ogg', 'DeambulandoPorElForo.ogg', 'EnPedo.ogg', 'Gooooo.ogg', 'Marolio.ogg', 'QueVuelvaIlen.ogg', 'TeEstasJuntandoConIlen.ogg'], 'maxgk': ['CallatePeladoPelotudo.ogg', 'CallatePeladoRemix.ogg', 'DosMetrosLasPelotas.ogg', 'MePodesChuparLaPorongaYLosDosHuevos.ogg', 'OjotaConElVittoria.ogg', 'SosCorrentino.ogg'], 'Maxilakde': ['AlaEsGrande.ogg', 'BanfieldMorite.ogg', 'DePachecoALaPaternal.mp4', 'DePachecoALaPaternal.ogg', 'EsasCositasLindasLasQuiero.ogg', 'FilhoDaPuta.ogg', 'IrAUnaMisa.ogg', 'MarplatensePelotudo.ogg', 'Meeeh.ogg', 'MetelePuñitoAhoraHolan.ogg', 'ReparteMuchoDinero.ogg', 'YoEstoyMuyPreocupado.ogg', 'YoEstoyMuyPreocupado2.ogg'], 'PALMEIRAS': ['ElMalMenor.ogg', 'EstouMuitoPreocupado.ogg', 'LaRubiaTarada.ogg', 'MiraGabito.ogg', 'RiverNoLevantaMas.ogg', 'UnOlorAMierda.ogg', 'VamoMacriMeteaPreso.ogg'], 'Pappo': ['AlgoHaCambiado.ogg', 'Desconfío.ogg', 'DesconfíoVivo.ogg', 'FiestaCervezal.ogg', 'MeEstoyViniendoViejo.ogg', 'RockAndRollYFiebre.ogg', 'Route66.ogg'], 'Ronin': ['LesMandoUnSaludo.ogg'], 'tutinho': ['AlgunaNotitaParaBolaVip.ogg', 'EscuchameUnaCosaJorgito.ogg', 'EstouMuitoPreocupado.ogg', 'ImitacionesGabito.ogg', 'SunchalensePelotudo.ogg', 'VamoMacriMeteaPreso.ogg']}

function Audio(props) {
    return (
        <div className="audio">
            <div className="audio-title">{props.filename.replace(/\.[^/.]+$/, "").replace(/([A-Z])/g, ' $1')}</div>
            <audio controls>
                <source src={"audios/" + props.author + "/" + props.filename} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

function Author(props) {
    return (
        <a href="#" onClick={() => props.onClick(props.name)}>{props.name}</a>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {audios: []};
    }

    showAudios(author) {
        let audios = [];
        for(var filename of initialData[author]) {
            audios.push(<Audio key={filename} author={author} filename={filename} />);
        }
        this.setState({audios: audios});
    }

    renderAuthors() {
        let authors = [];
        for(var author in initialData) {
            authors.push(<Author key={author} onClick={(name) => this.showAudios(name)} name={author} />);
        };
        return authors;
    }

    render() {
        return (
            <div id="app">
                <div id="authors">
                    <div className="authors-title">Edefeanes</div>
                    {this.renderAuthors()}
                </div>
                <div id="audios">
                    {this.state.audios}
                </div>
            </div>
        );
    }
}

export default App;
