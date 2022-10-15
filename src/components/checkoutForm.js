import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutForm extends Component {
  render() {
    const {
      name,
      cpf,
      email,
      tel,
      cep,
      adress,
      /*       complement,
      number,
      city,
      estado, */
      handleChange,
    } = this.props;
    return (
      <>
        <h2>Informações do Comprador</h2>
        <div>
          <input
            data-testid="checkout-fullname"
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            value={ name }
            onChange={ handleChange }
            required
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            id="cpf"
            placeholder="CPF"
            value={ cpf }
            onChange={ handleChange }
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={ email }
            onChange={ handleChange }
            required
          />
          <input
            data-testid="checkout-phone"
            type="text"
            name="tel"
            id="tel"
            placeholder="Telefone"
            value={ tel }
            onChange={ handleChange }
            required
          />
        </div>
        <div>
          <input
            data-testid="checkout-cep"
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
            value={ cep }
            onChange={ handleChange }
            required
          />
          <input
            data-testid="checkout-address"
            type="text"
            name="adress"
            id="adress"
            placeholder="Endereço"
            value={ adress }
            onChange={ handleChange }
            required
          />
        </div>
        {/* <div>
          <input
            type="text"
            name="complement"
            id="complement"
            placeholder="Complemento"
            value={ complement }
            onChange={ handleChange }
            required
          />
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Número"
            value={ number }
            onChange={ handleChange }
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Cidade"
            value={ city }
            onChange={ handleChange }
            required
          />
          <select
            id="estado"
            name="estado"
            value={ estado }
            onChange={ handleChange }
            required
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
        </div> */}
      </>
    );
  }
}

CheckoutForm.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  /*   complement: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired, */
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutForm;
