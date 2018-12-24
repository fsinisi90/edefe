import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialData = {'Arkolón': ['AlgunoTieneViagra.ogg'], 'Bolsoloco': ['BuenoSeñoresCover.ogg', 'Eructo.ogg', 'RisaMalefica.ogg', 'Route66.ogg', 'TeApuroUnTrapitoCover.ogg', 'VamoMacriMeteaPreso.ogg'], 'CACIQUE': ['ChisteConError.ogg', 'NoVivesDeEnsenada.ogg', 'WeAreTheChampions.ogg'], 'Cuervo': ['BastaDePappoTodoElTiempo.ogg', 'CallatePeladoPelotudo.ogg', 'DaleMessiDale.ogg', 'EstasMasGagaQueNunca.ogg', 'FestejasQueGanoChileDosFinales.ogg', 'GaaaSadio.ogg', 'GorilaHdrmp.ogg', 'MeCagaronElViernes.ogg', 'MeHizoAgarrarAcidez.ogg', 'MessiLaConchaDeTuMadre.ogg', 'MiraComoPateo.ogg', 'MiraIlen.ogg', 'NadieSeAtreva.ogg', 'QuePuedeHacerUnJugadorDeIndependiente.ogg', 'Route66.ogg', 'TenemosEnElGrupoAUnChileno.ogg', 'TraemeloACacique.ogg', 'UnaManoDeRaydenEnElMenton.ogg', 'VamoMacri.ogg', 'VamoMacriMeteaPreso.ogg'], 'Fantasma': ['MeMandoUnPrivadoIlen.ogg', 'UruguayoYBrasileroDeMierda.ogg'], 'Forti': ['ParaMaxi.ogg', 'RacingMufa.ogg'], 'frehley': ['CharuteandoVieja.ogg', 'EsPateticoSigueComoAntes.ogg', 'EstosMuchachosEstanMuyMal.ogg', 'GorilaANadieVieja.ogg', 'LeRompoChocolatadaLaBoca.ogg', 'NoSabeVocalizar.ogg', 'PeroQueRrocu.ogg', 'TemazoDeRobbieWilliamsRemix.ogg', 'TeVeoYTePongo.ogg', 'VayanALaburar.ogg', 'VosNoLePodesDecirGorila.ogg', 'YoTeEstoyEsperando.ogg'], 'Gabinho': ['ApareceHablandoDelBrocoli.ogg'], 'ilen_tau': ['AguanteLaPizzaDeAnana.ogg', 'DescendidoDeMierda.ogg', 'EsaGenteQueMataPollitos.ogg', 'MiPersonalidadEsBizarra.ogg', 'Roschman.ogg', 'TeApuroUnTrapito.ogg', 'VamoMacriRemix.ogg'], 'kru': ['Coloooon.ogg', 'Maxilakdead.ogg', 'QuePorongaCover.ogg'], 'La Dani': ['ChupeArmani.ogg', 'NoHuboRrocu.ogg', 'NuevoOrdenMundialCover.ogg'], 'Makelelejuas': ['Cagones.ogg', 'DeambulandoPorElForo.ogg', 'Gooooo.ogg'], 'maxgk': ['MePodesChuparLaPorongaYLosDosHuevos.ogg'], 'Maxilakde': ['AlaEsGrande.ogg', 'DePachecoALaPaternal.mp4', 'MarplatensePelotudo.ogg', 'MetelePuñitoAhoraHolan.ogg', 'YoEstoyMuyPreocupado.ogg'], 'PALMEIRAS': ['ElMalMenor.ogg', 'EstouMuitoPreocupado.ogg', 'MiraGabito.ogg', 'RiverNoLevantaMas.ogg', 'UnOlorAMierda.ogg', 'VamoMacriMeteaPreso.ogg'], 'Pappo': ['Desconfío.ogg', 'RockAndRollYFiebre.ogg'], 'Ronin': ['LesMandoUnSaludo.ogg'], 'tutinho': ['EstouMuitoPreocupado.ogg', 'VamoMacriMeteaPreso.ogg']}

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
