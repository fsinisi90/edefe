import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialData = {'Arkolón': ['AlgunoTieneViagra.ogg', 'SeTeAflojoLaPera.ogg'], 'bierofka': ['NoGanamosUnaMierda.ogg'], 'Bolsoloco': ['AndateADormirMaricon.ogg', 'Argentina.ogg', 'BanfieldMorite.ogg', 'BuenoSeñoresCover.ogg', 'CallatePeladoCover.ogg', 'DeambulandoCoverBorracho.ogg', 'Eructo.ogg', 'Eructo2.ogg', 'Eructo3.ogg', 'EsPateticoCover.ogg', 'HimnoArgentino.ogg', 'IrAUnaMisa.ogg', 'MejorSinGallinas.ogg', 'MiViejaPappo.ogg', 'NoSabesDeFutbol.ogg', 'ParaQueMiSobrinoRompeLosHuevos.ogg', 'RisaMalefica.ogg', 'Route66.ogg', 'TeApuroUnTrapitoCover.ogg', 'TeVaiColocarTodo.ogg', 'VamoMacriMeteaPreso.ogg', 'VosChupameBienLaPoronga(Cover).ogg'], 'CACIQUE': ['Almorzando.ogg', 'ArkolonArkolon.ogg', 'ChisteConError.ogg', 'ColonColon.ogg', 'DespuesDeEntrarPorColectora.ogg', 'ElTiempoNoPara.ogg', 'EnLaSelva.ogg', 'FueLoMejorDelAmor.ogg', 'GolDeVasco.ogg', 'ILoveYouTooMuchBaby.ogg', 'ImitandoAMoria.ogg', 'IntroMetal.mpeg', 'JuntosALaPar1SeOlvida.ogg', 'JuntosALaPar2Googleada.ogg', 'LaPila.ogg', 'LesGustaElDedo.ogg', 'LosMuchachosSabaleros.ogg', 'Machirulo.ogg', 'MufaMufaMufa.ogg', 'NoSeLeEntiendeUnaMierda.ogg', 'NoVesLaHeridaCover.ogg', 'NoVivesDeEnsenada.ogg', 'Osvaldo.ogg', 'PeteConUnChicleDeMenta.ogg', 'RataBlanca.ogg', 'RisaLoca.ogg', 'RockAndRollYFiebre.ogg', 'Ronin.ogg', 'ShauShauShauShauShau.ogg', 'TeFuisteAlCarajoKru.ogg', 'TeLlevoDentroDeMi.ogg', 'VolvioCacique.ogg', 'WeAreTheChampions.mpeg', 'WeAreTheChampions.ogg', 'YQueGustoTieneElOjete.ogg'], 'Cuervo': ['AcaLesDejoUnTerribleGarco.ogg', 'AhPeroQueBondiSeArmo.ogg', 'BastaDeEstaGente.ogg', 'BastaDeMufa.ogg', 'BastaDePappoTodoElTiempo.ogg', 'BragaTeVamoAMata.ogg', 'Brasilero.ogg', 'BuenoSeñores.ogg', 'CallatePeladoPelotudo.ogg', 'CantitoColon.ogg', 'CantitoColon2.ogg', 'ChilenoTeEstasCagandoDeRisa.ogg', 'ChilenoTeEstasCagandoDeRisa2.ogg', 'ChoriVeganoLocura.ogg', 'ChupeGabinho.ogg', 'ChupeGabito.ogg', 'ChupeInglaterra.ogg', 'ChupeKru.ogg', 'ChupeSabalero.ogg', 'ColonColonColon.ogg', 'CopaDeBrasil.ogg', 'CopaDeBrasil2.ogg', 'Croacia.ogg', 'DaleMessiDale.ogg', 'DicenQueLosCuervosEstanCagados.ogg', 'EnanoDeTorta.ogg', 'EsaGrasaQueTenesEnLaAfa.ogg', 'EseDatoNoLoTenia.ogg', 'EseVarDeMierda.ogg', 'EsPeriodistaQueHagaAlgo.ogg', 'EstaMasGarcaQueNunca.ogg', 'EstamosHaciendoMalabares.ogg', 'EstanDefendiendoAlGordoBonadeo.ogg', 'EstasMasGagaQueNunca.ogg', 'EsUnaRataDeBodegon.ogg', 'EsUnDelincuente.ogg', 'FestejasQueGanoChileDosFinales.ogg', 'FortiTePidoDisculpas.ogg', 'GaaaSadio.ogg', 'GaMusaGaGaGa.ogg', 'GaToniGaGaGa.ogg', 'GorilaHdrmp.ogg', 'HabiaRenunciado.ogg', 'HijoDeReMilPutaDefiní.ogg', 'HormonadoHijoDeReMilPuta.ogg', 'LaCaraDeGarcaLaTiene.ogg', 'LeEnciendeLaMechaATodos.ogg', 'LosVotantesDeCambiemos.ogg', 'LuqueHaciaGolesConLaPija.ogg', 'MatenAAlguien.ogg', 'MeCagaronElViernes.ogg', 'MeCojoAZeideHermano.ogg', 'MeGustabaLaSeleccion.ogg', 'MeHizoAgarrarAcidez.ogg', 'MessiLaConchaDeTuMadre.ogg', 'MiraComoPateo.ogg', 'MiraIlen.ogg', 'NadieSeAtreva.ogg', 'NiMeHablesDeEsosPelotudos.ogg', 'NOM.ogg', 'NoNoRrocu.ogg', 'NoTeHagasElBradPitt.ogg', 'NoTienenGenteParaBajarElTelon.ogg', 'PaQueMierdaManejan.ogg', 'PerdimosDosFinalesConChile.ogg', 'PizzaDeAnana.ogg', 'PorElCulo.ogg', 'PorElCulo2.ogg', 'PorElCulo3.ogg', 'PorQuéNoMeChupanLaPijaEnFila.ogg', 'QuePuedeHacerUnJugadorDeIndependiente.ogg', 'QueQueresQueTeDiga.ogg', 'Route66.ogg', 'RrocuYaparri.ogg', 'SeMeCaenLasLagrimas.ogg', 'SiboldiLeDiriaParaPelearnos.ogg', 'SiboldiQueBotDeMierda.ogg', 'SonLasDosHinchadasJuntas.ogg', 'TeImaginasCogerteAlDani.ogg', 'TenemosEnElGrupoAUnChileno.ogg', 'TraemeloACacique.ogg', 'TíaMacuca.mpeg', 'UnaManoDeRaydenEnElMenton.ogg', 'UnAmigoMeConfirmoQueEstaArreglado.ogg', 'UyPeroQueBondiSeArmo.ogg', 'VamoElHormonado.ogg', 'VamoMacri.ogg', 'VamoMacriMeteaPreso.ogg', 'ViejoBufarron.ogg', 'ViejoDeMierda.ogg', 'ViejoDeMierdaSeFueADormir.ogg', 'VoyAPonerDeDespertadorElGemido.ogg', 'YoNiEnPedoEso.ogg', 'YoTengoAlgoConVelez.ogg', 'YVosRorschach.ogg'], 'errece': ['MuchachaLoca.ogg', 'MuchachaLoca2.ogg'], 'Fantasma': ['MeMandoUnPrivadoIlen.ogg', 'UruguayoYBrasileroDeMierda.ogg'], 'Forti': ['Manejalo.ogg', 'ParaMaxi.ogg', 'RacingMufa.ogg'], 'Fran': ['NoCompresMasParaguayo.ogg'], 'frehley': ['AhPeroQueBondiSeArmo.ogg', 'AliciaEncadenada.ogg', 'AMiMeEncantaria.ogg', 'BrazucaConJorgitoTeRompemosTodo.ogg', 'BrazucaPrivado.ogg', 'CesarManzanelli.ogg', 'CharuteandoVieja.ogg', 'ColoEnCopaArgentina.ogg', 'ContemosTodo.ogg', 'DeFiestaTodoBoedo.ogg', 'DeLaGorra.ogg', 'Ehhhhh.ogg', 'EsMuelaCariada.ogg', 'EsPateticoSigueComoAntes.ogg', 'Estallé.ogg', 'EstanRegaladas.ogg', 'EstosMuchachosEstanMuyMal.ogg', 'EstuveEstalladisimo.ogg', 'EsUnChisteEseClub.ogg', 'EveryTimeIHoldYou.ogg', 'FerroElHijoDeCuca.ogg', 'FortínTeSigo.ogg', 'GabitoFlogger.ogg', 'GorilaANadieVieja.ogg', 'HaganPappoHermano.ogg', 'HermosoPappoEstoyEstalladísimo.ogg', 'LaEcharonACanallona.ogg', 'LeRompoChocolatadaLaBoca.ogg', 'MasGenteDeMoron.ogg', 'MeDijoIlenQueTeRompeTodo.ogg', 'MmmSospechoso.ogg', 'NiUnaRanchera.ogg', 'NoEntiendoQueDice.ogg', 'NoSabeVocalizar.ogg', 'NoVesLaHerida.ogg', 'NoVesLaTierraVencida.ogg', 'NuevoOrdenMundial.ogg', 'OjoIlen.ogg', 'PenalLaConchaPutaDeTuMadre.ogg', 'PeroQueRrocu.ogg', 'QueCojones.ogg', 'QuePoronga.ogg', 'QueSePuedeAgregarDeEsteInfradotado.ogg', 'ReBodega.ogg', 'RockAndRollYFiebre.ogg', 'SeVaARosarioConChocolatada.ogg', 'SonidoEpico.ogg', 'TeJuroQueEsMuyFuerte.ogg', 'TeLlevo2Fernet.ogg', 'TemazoDeRobbieWilliams.ogg', 'TemazoDeRobbieWilliamsRemix.ogg', 'TeVeoYTePongo.ogg', 'VayanALaburar.ogg', 'VosNoLePodesDecirGorila.ogg', 'YaEstoyMedioBodega.ogg', 'YoEnLaCumbreTePongo.ogg', 'YoTeEstoyEsperando.ogg', 'YoVotoTrabajadores.ogg'], 'Gabinho': ['ApareceHablandoDelBrocoli.ogg', 'ArkeolonLeTembloLaPera.ogg', 'DeQueLaburaEstaGente(Cover).ogg', 'EscuchameUnaCosaArkeolon.ogg', 'MeSalioMedioIlen.ogg', 'NoEstoyTriste.ogg', 'SeDobadonUnPbi.ogg', 'YoLePidoALaAkd.ogg'], 'ilen_tau': ['AguanteLaPizzaDeAnana.ogg', 'AguantenLosFlogger.ogg', 'ComoLlorasCabezaDeTermo.ogg', 'CuervoVosQueresIrAVenezuela.ogg', 'DescendidoDeMierda.ogg', 'EsaGenteQueMataPollitos.ogg', 'Gracias!.ogg', 'LosMandoEnPrivado.ogg', 'MaxiGastonQueVotaronEnBlanco.ogg', 'MiPersonalidadEsBizarra.ogg', 'NiNaciendoDosVeces.ogg', 'NoMachoQueTeComiste.ogg', 'QuieroSerFlogger.ogg', 'Roschman.ogg', 'Sospechoso.ogg', 'TeApuroUnTrapito.ogg', 'TeneQueVolveanacé.ogg', 'VamoMacriMeteaPreso.ogg', 'VamoMacriRemix.ogg'], 'kru': ['Anana.ogg', 'Arrancacorazones.ogg', 'Coloooon.ogg', 'Maxilakdead.ogg', 'MeHacenMandarUnAudio.ogg', 'MirkoBill(CircoBeat).ogg', 'QuePorongaCover.ogg', 'Temita.mp4'], 'La Dani': ['ChupeArmani.ogg', 'LeTembloMas.ogg', 'NoHuboRrocu.ogg', 'NuevoOrdenMundialCover.ogg', 'PorDiosQueHorrorDeTema.ogg', 'QueBlandiGaston.ogg'], 'Makelelejuas': ['Aleluya.ogg', 'Cagones.ogg', 'ChupeInglaterra.ogg', 'Churuchuchupe.ogg', 'DeambulandoPorElForo.ogg', 'EnPedo.ogg', 'Gooooo.ogg', 'Marolio.ogg', 'QueVuelvaIlen.ogg', 'TeEstasJuntandoConIlen.ogg'], 'maxgk': ['CallatePeladoPelotudo.ogg', 'CallatePeladoRemix.ogg', 'DosMetrosLasPelotas.ogg', 'EstoyEstalladísimo.ogg', 'MePodesChuparLaPorongaYLosDosHuevos.ogg', 'OjotaConElVittoria.ogg', 'SosCorrentino.ogg'], 'Maxilakde': ['AkualonGolf.ogg', 'AlaEsGrande.ogg', 'BanfieldMorite.ogg', 'BrasileroPelotudo.ogg', 'DejenDeEcharGente.ogg', 'DePachecoALaPaternal.mp4', 'DePachecoALaPaternal.ogg', 'EsasCositasLindasLasQuiero.ogg', 'FilhoDaPuta.ogg', 'IrAUnaMisa.ogg', 'Jajaja.ogg', 'MarplatensePelotudo.ogg', 'Meeeh.ogg', 'MetelePuñitoAhoraHolan.ogg', 'ReparteMuchoDinero.ogg', 'SosMedioMogolicoRemix.ogg', 'YoEstoyMuyPreocupado.ogg', 'YoEstoyMuyPreocupado2.ogg'], 'PALMEIRAS': ['ElMalMenor.ogg', 'EstouMuitoPreocupado.ogg', 'LaRubiaTarada.ogg', 'MeMandoElPeladoUnPrivado.ogg', 'MiraGabito.ogg', 'RiverNoLevantaMas.ogg', 'SeLlamaVitoriaYNoGana.ogg', 'UnOlorAMierda.ogg', 'VamoMacriMeteaPreso.ogg'], 'Pappo': ['AlgoHaCambiado.ogg', 'Desconfío.ogg', 'DesconfíoVivo.ogg', 'FiestaCervezal.ogg', 'MeEstoyViniendoViejo.ogg', 'RockAndRollYFiebre.ogg', 'Route66.ogg', 'ThrillIsGoneChupeGabinho.ogg'], 'Ronin': ['LesMandoUnSaludo.ogg'], 'Rorschach': ['Marcha.ogg'], 'Tangalanga': ['AndateADormir.ogg', 'NoTePongasNervioso.ogg'], 'tutinho': ['AlgunaNotitaParaBolaVip.ogg', 'Buitre.ogg', 'DesconfíoAcústico.ogg', 'EscuchameUnaCosaJorgito.ogg', 'EstouMuitoPreocupado.ogg', 'ImitacionesGabito.ogg', 'Route66.ogg', 'SunchalensePelotudo.ogg', 'VamoMacriCover.ogg', 'VamoMacriMeteaPreso.ogg']}

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
