import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: "motorcycle",
    title: "Motoboy",
    subtitle: "Contato profissional",
   
};

const baseUrl = "http://localhost:3001/motoboys";
const initialState = {
    motoboy: { nome: "", contato: "", local_proximo: "" },
    list: [],
};

export default class MotoboyCrud extends Component {
    state = { ...initialState };

    componentWillMount() {
        axios(baseUrl).then((resp) => {
            this.setState({ list: resp.data });
        });
    }

    clear() {
        this.setState({ motoboy: initialState.motoboy });
    }

    save() {
        const motoboy = this.state.motoboy;
        const method = motoboy.id ? "put" : "post";
        const url = motoboy.id ? `${baseUrl}/${motoboy.id}` : baseUrl;
        axios[method](url, motoboy).then((resp) => {
            const list = this.getUpdatedList(resp.data);
            this.setState({ motoboy: initialState.motoboy, list });
        });
    }

    getUpdatedList(motoboy, add = true) {
        const list = this.state.list.filter((u) => u.id !== motoboy.id);
        if (add) list.shift(motoboy);
        return list;
    }

    updateField(event) {
        const motoboy = { ...this.state.motoboy };
        motoboy[event.target.name] = event.target.value;
        this.setState({ motoboy });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nome"
                                value={this.state.motoboy.nome}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Nome..."
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Contato</label>
                            <input
                                type="text"
                                className="form-control"
                                name="contato"
                                value={this.state.motoboy.contato}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Contato..."
                            />
                        </div>
                    </div>
                   
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Motoboy Mais Proximo </label>
                            <input
                                type="text"
                                className="form-control"
                                name="local_proximo"
                                value={this.state.motoboy.local_proximo}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Motoboy proximo..."
                            />
                        </div>
                    </div>
                  
           </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => this.save(e)}
                        >
                            Salvar
                        </button>

                        <button
                            className="btn btn-secondary ml-2"
                            onClick={(e) => this.clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    load(motoboy) {
        this.setState({ motoboy });
    }

    remove(motoboy) {
        axios.delete(`${baseUrl}/${motoboy.id}`).then((resp) => {
            const list = this.getUpdatedList(motoboy, false);
            this.setState({ list });
        });
    }

    renderTable() {
        return (
            <table className="table mt-6">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>Motoboy Mais proximo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map((motoboy) => {
            return (
                <tr key={motoboy.id}>
                    <td>{motoboy.nome}</td>
                    <td>{motoboy.contato}</td>
                    <td>{motoboy.local_proximo}</td>
                    <td>
                        <button
                            className="btn btn-warning"
                            onClick={() => this.load(motoboy)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button
                            className="btn btn-danger mp-6 t-5"
                            onClick={() => this.remove(motoboy)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}
