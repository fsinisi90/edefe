import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialData = {'Arkolón': ['AlgunoTieneViagra.ogg'], 'Bolsoloco': ['BuenoSeñoresCover.ogg', 'Route66.ogg', 'TeApuroUnTrapitoCover.ogg'], 'Cuervo_Belgrano': ['DaleMessiDale.ogg', 'EstasMasGagaQueNunca.ogg', 'GaaaSadio.ogg', 'GorilaHdrmp.ogg', 'MeCagaronElViernes.ogg', 'MeHizoAgarrarAcidez.ogg', 'MessiLaConchaDeTuMadre.ogg', 'MiraComoPateo.ogg', 'MiraIlen.ogg', 'QuePuedeHacerUnJugadorDeIndependiente.ogg', 'TenemosEnElGrupoAUnChileno.ogg', 'TraemeloACacique.ogg'], 'EL_CACIQUE': ['ChisteConError.ogg', 'NoVivesDeEnsenada.ogg'], 'Fantasma_Velez': ['UruguayoYBrasileroDeMierda.ogg'], 'frehley': ['CharuteandoVieja.ogg', 'EsPateticoSigueComoAntes.ogg', 'EstosMuchachosEstanMuyMal.ogg', 'GorilaANadieVieja.ogg', 'NoSabeVocalizar.ogg', 'VayanALaburar.ogg', 'VosNoLePodesDecirGorila.ogg'], 'Gabinho': ['ApareceHablandoDelBrocoli.ogg'], 'ilen_tau': ['DescendidoDeMierda.ogg', 'EsaGenteQueMataPollitos.ogg', 'MiPersonalidadEsBizarra.ogg', 'Roschman.ogg', 'TeApuroUnTrapito.ogg'], 'kru': ['Coloooon.ogg', 'Maxilakdead.ogg'], 'La Dani': ['NoHuboRrocu.ogg', 'NuevoOrdenMundialCover.ogg'], 'Makelelejuas': ['Cagones.ogg', 'DeambulandoPorElForo.ogg', 'Gooooo.ogg'], 'Maxilakde': ['AlaEsGrande.ogg', 'DePachecoALaPaternal.mp4'], 'Pappo': ['Desconfío.ogg', 'RockAndRollYFiebre.ogg'], 'Ronin': ['LesMandoUnSaludo.ogg'], 'tutinho': ['MarplatensePelotudo.ogg']}

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
