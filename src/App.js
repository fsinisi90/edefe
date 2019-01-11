import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialData = {'Arkolón': ['AlgunoTieneViagra.ogg'], 'Bolsoloco': ['BuenoSeñoresCover.ogg', 'CallatePeladoCover.ogg', 'DeambulandoCoverBorracho.ogg', 'Eructo.ogg', 'Eructo2.ogg', 'HimnoArgentino.ogg', 'NoSabesDeFutbol.ogg', 'ParaQueMiSobrinoRompeLosHuevos.ogg', 'RisaMalefica.ogg', 'Route66.ogg', 'TeApuroUnTrapitoCover.ogg', 'VamoMacriMeteaPreso.ogg'], 'CACIQUE': ['ChisteConError.ogg', 'DespuesDeEntrarPorColectora.ogg', 'ElTiempoNoPara.ogg', 'GolDeVasco.ogg', 'ILoveYouTooMuchBaby.ogg', 'ImitandoAMoria.ogg', 'JuntosALaPar1SeOlvida.ogg', 'JuntosALaPar2Googleada.ogg', 'LaPila.ogg', 'LesGustaElDedo.ogg', 'NoSeLeEntiendeUnaMierda.ogg', 'NoVivesDeEnsenada.ogg', 'PeteConUnChicleDeMenta.ogg', 'ShauShauShauShauShau.ogg', 'TeFuisteAlCarajoKru.ogg', 'WeAreTheChampions.ogg', 'YQueGustoTieneElOjete.ogg'], 'Cuervo': ['BastaDeEstaGente.ogg', 'BastaDePappoTodoElTiempo.ogg', 'BuenoSeñores.ogg', 'CallatePeladoPelotudo.ogg', 'DaleMessiDale.ogg', 'EseDatoNoLoTenia.ogg', 'EstanDefendiendoAlGordoBonadeo.ogg', 'EstasMasGagaQueNunca.ogg', 'FestejasQueGanoChileDosFinales.ogg', 'FortiTePidoDisculpas.ogg', 'GaaaSadio.ogg', 'GaMusaGaGaGa.ogg', 'GaToniGaGaGa.ogg', 'GorilaHdrmp.ogg', 'HabiaRenunciado.ogg', 'HormonadoHijoDeReMilPuta.ogg', 'LuqueHaciaGolesConLaPija.ogg', 'MeCagaronElViernes.ogg', 'MeCojoAZeideHermano.ogg', 'MeGustabaLaSeleccion.ogg', 'MeHizoAgarrarAcidez.ogg', 'MessiLaConchaDeTuMadre.ogg', 'MiraComoPateo.ogg', 'MiraIlen.ogg', 'NadieSeAtreva.ogg', 'NoNoRrocu.ogg', 'PerdimosDosFinalesConChile.ogg', 'QuePuedeHacerUnJugadorDeIndependiente.ogg', 'Route66.ogg', 'TeImaginasCogerteAlDani.ogg', 'TenemosEnElGrupoAUnChileno.ogg', 'TraemeloACacique.ogg', 'UnaManoDeRaydenEnElMenton.ogg', 'VamoMacri.ogg', 'VamoMacriMeteaPreso.ogg', 'YoNiEnPedoEso.ogg'], 'Fantasma': ['MeMandoUnPrivadoIlen.ogg', 'UruguayoYBrasileroDeMierda.ogg'], 'Forti': ['ParaMaxi.ogg', 'RacingMufa.ogg'], 'Fran': ['NoCompresMasParaguayo.ogg'], 'frehley': ['AMiMeEncantaria.ogg', 'CesarManzanelli.ogg', 'CharuteandoVieja.ogg', 'ColoEnCopaArgentina.ogg', 'ContemosTodo.ogg', 'Ehhhhh.ogg', 'EsMuelaCariada.ogg', 'EsPateticoSigueComoAntes.ogg', 'EstosMuchachosEstanMuyMal.ogg', 'EstuveEstalladisimo.ogg', 'EsUnChisteEseClub.ogg', 'GabitoFlogger.ogg', 'GorilaANadieVieja.ogg', 'LeRompoChocolatadaLaBoca.ogg', 'MmmSospechoso.ogg', 'NoSabeVocalizar.ogg', 'NoVesLaHerida.ogg', 'NoVesLaTierraVencida.ogg', 'NuevoOrdenMundial.ogg', 'PenalLaConchaPutaDeTuMadre.ogg', 'PeroQueRrocu.ogg', 'QueCojones.ogg', 'QueSePuedeAgregarDeEsteInfradotado.ogg', 'TeJuroQueEsMuyFuerte.ogg', 'TemazoDeRobbieWilliams.ogg', 'TemazoDeRobbieWilliamsRemix.ogg', 'TeVeoYTePongo.ogg', 'VayanALaburar.ogg', 'VosNoLePodesDecirGorila.ogg', 'YaEstoyMedioBodega.ogg', 'YoTeEstoyEsperando.ogg', 'YoVotoTrabajadores.ogg'], 'Gabinho': ['ApareceHablandoDelBrocoli.ogg'], 'ilen_tau': ['AguanteLaPizzaDeAnana.ogg', 'DescendidoDeMierda.ogg', 'EsaGenteQueMataPollitos.ogg', 'LosMandoEnPrivado.ogg', 'MaxiGastonQueVotaronEnBlanco.ogg', 'MiPersonalidadEsBizarra.ogg', 'Roschman.ogg', 'TeApuroUnTrapito.ogg', 'VamoMacriRemix.ogg'], 'kru': ['Coloooon.ogg', 'Maxilakdead.ogg', 'MeHacenMandarUnAudio.ogg', 'QuePorongaCover.ogg', 'Temita.mp4'], 'La Dani': ['ChupeArmani.ogg', 'NoHuboRrocu.ogg', 'NuevoOrdenMundialCover.ogg'], 'Makelelejuas': ['Cagones.ogg', 'DeambulandoPorElForo.ogg', 'Gooooo.ogg', 'Marolio.ogg'], 'maxgk': ['CallatePeladoPelotudo.ogg', 'CallatePeladoRemix.ogg', 'DosMetrosLasPelotas.ogg', 'MePodesChuparLaPorongaYLosDosHuevos.ogg', 'SosCorrentino.ogg'], 'Maxilakde': ['AlaEsGrande.ogg', 'DePachecoALaPaternal.mp4', 'FilhoDaPuta.ogg', 'IrAUnaMisa.ogg', 'MarplatensePelotudo.ogg', 'Meeeh.ogg', 'MetelePuñitoAhoraHolan.ogg', 'ReparteMuchoDinero.ogg', 'YoEstoyMuyPreocupado.ogg', 'YoEstoyMuyPreocupado2.ogg'], 'PALMEIRAS': ['ElMalMenor.ogg', 'EstouMuitoPreocupado.ogg', 'LaRubiaTarada.ogg', 'MiraGabito.ogg', 'RiverNoLevantaMas.ogg', 'UnOlorAMierda.ogg', 'VamoMacriMeteaPreso.ogg'], 'Pappo': ['Desconfío.ogg', 'MeEstoyViniendoViejo.ogg', 'RockAndRollYFiebre.ogg'], 'Ronin': ['LesMandoUnSaludo.ogg'], 'tutinho': ['EstouMuitoPreocupado.ogg', 'SunchalensePelotudo.ogg', 'VamoMacriMeteaPreso.ogg']}

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
