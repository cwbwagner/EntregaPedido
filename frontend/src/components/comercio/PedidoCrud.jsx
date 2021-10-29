import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: "sticky-note",
    title: "Cadastro de Pedidos",
    subtitle: "Dados Do pedido",
};

const baseUrl = "http://localhost:3001/pedidos";
const initialState = {
    pedido: { estabelecimento: "", pedido: "",descricao: "",quantidade: "",
    data_entrada: "",hora: "", bairro: "",rua: "" ,numero: "",entregue: "",
    valor_total: "",troco: "",},
    list: [],
};

export default class PedidoCrud extends Component {
    state = { ...initialState };

    componentWillMount() {
        axios(baseUrl).then((resp) => {
            this.setState({ list: resp.data });
        });
    }

    clear() {
        this.setState({ pedido: initialState.pedido });
    }

    save() {
        const pedido = this.state.pedido;
        const method = pedido.id ? "put" : "post";
        const url = pedido.id ? `${baseUrl}/${pedido.id}` : baseUrl;
        axios[method](url, pedido).then((resp) => {
            const list = this.getUpdatedList(resp.data);
            this.setState({ pedido: initialState.pedido, list });
        });
    }

    getUpdatedList(pedido, add = true) {
        const list = this.state.list.filter((u) => u.id !== pedido.id);
        if (add) list.shift(pedido);
        return list;
    }

    updateField(event) {
        const pedido = { ...this.state.pedido };
        pedido[event.target.name] = event.target.value;
        this.setState({ pedido });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Estabelecimento</label>
                            <input
                                type="text"
                                className="form-control"
                                name="estabelecimento"
                                value={this.state.pedido.estabelecimento}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Estabelecimento..."
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Pedido</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pedido"
                                value={this.state.pedido.pedido}
                                onChange={(e) => this.updateField(e)}
                                placeholder="tipo de pedido..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Descricao</label>
                            <input
                                type="text"
                                className="form-control"
                                name="descricao"
                                value={this.state.pedido.descricao}
                                onChange={(e) => this.updateField(e)}
                                placeholder="descrição..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Quantidade</label>
                            <input
                                type="text"
                                className="form-control"
                                name="quantidade"
                                value={this.state.pedido.quantidade}
                                onChange={(e) => this.updateField(e)}
                                placeholder="quantidade..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data de Entrega</label>
                            <input
                                type="text"
                                className="form-control"
                                name="data_entrega"
                                value={this.state.pedido.data_entrega}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Data..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Hora</label>
                            <input
                                type="text"
                                className="form-control"
                                name="hora"
                                value={this.state.pedido.hora}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Hora..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Bairro</label>
                            <input
                                type="text"
                                className="form-control"
                                name="bairro"
                                value={this.state.pedido.bairro}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Bairro..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Rua</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rua"
                                value={this.state.pedido.rua}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Rua..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Numero</label>
                            <input
                                type="text"
                                className="form-control"
                                name="numero"
                                value={this.state.pedido.numero}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Numero da casa..."
                            />
                        </div>
                    </div>
                  
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Entregue</label>
                            <input
                                type="text"
                                className="form-control"
                                name="entregue"
                                value={this.state.pedido.entregue}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Entregue..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Valor Total</label>
                            <input
                                type="text"
                                className="form-control"
                                name="valor_total"
                                value={this.state.pedido.valor_total}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Valor total..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Troco</label>
                            <input
                                type="text"
                                className="form-control"
                                name="troco"
                                value={this.state.pedido.troco}
                                onChange={(e) => this.updateField(e)}
                                placeholder="Troco..."
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

    load(pedido) {
        this.setState({ pedido });
    }

    remove(pedido) {
        axios.delete(`${baseUrl}/${pedido.id}`).then((resp) => {
            const list = this.getUpdatedList(pedido, false);
            this.setState({ list });
        });
    }

    renderTable() {
        return (
            <table className="table mt-6">
                <thead>
                    <tr>
                        <th>Estabelecimento</th>
                        {/* <th>pedido</th>
                        <th>Descrição</th>
                        <th>quantidade</th> */}
                        <th>data_entrega</th>
                        <th>hora</th>
                        <th>bairro</th>
                        <th>rua</th>
                        <th>numero</th>
                        <th>Entregue</th>
                        <th>Valor total</th>
                        <th>Troco</th>
                        <th>Açoes</th>
                   </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map((pedido) => {
            return (
                <tr key={pedido.id}>
                    <td>{pedido.estabelecimento}</td>
                        {/* <td>{pedido.pedido}</td>
                        <td>{pedido.descricao}</td>
                        <td>{pedido.quantidade}</td> */}
                    <td>{pedido.data_entrega}</td>
                    <td>{pedido.hora}</td>
                    <td>{pedido.bairro}</td>
                    <td>{pedido.rua}</td>
                    <td>{pedido.numero}</td>
                    <td>{pedido.entregue}</td>
                    <td>{pedido.valor_total}</td>
                    <td>{pedido.troco}</td>
                <td>
                        <button
                            className="btn btn-warning"
                            onClick={() => this.load(pedido)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button
                            className="btn btn-danger ml-2"
                            onClick={() => this.remove(pedido)}
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
