import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from '../components/checkoutForm';

class FormEnd extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cpf: '',
      email: '',
      tel: '',
      cep: '',
      adress: '',
      complement: '',
      number: '',
      city: '',
      estado: '',
      cart: [],
      metod: '',
      disabled: true,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify([]));
    }
    const cartList = JSON.parse(localStorage.getItem('items'));
    this.setState({ cart: cartList });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      () => this.checkInput(),
    );
  };

  checkInput = () => {
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
      metod,
    } = this.state;

    const checkName = name.length > 0;
    const checkCpf = cpf.length > 0;
    const checkEmail = email.length > 0;
    const checkTel = tel.length > 0;
    const checkCep = cep.length > 0;
    const checkAdress = adress.length > 0;
    /*     const checkComplement = complement.length > 0;
    const checkNumber = number.length > 0;
    const checkCity = city.length > 0;
    const checkEstado = estado.length > 0; */
    const checkMetod = metod.length > 0;

    const validate = checkName
      && checkCpf
      && checkEmail
      && checkTel
      && checkCep
      && checkAdress
    /*       && checkComplement
      && checkNumber
      && checkCity
      && checkEstado */
      && checkMetod;

    this.setState({ disabled: !validate });
  };

  finishBuy = () => {
    const { history } = this.props;
    history.push('./');
    this.setState({ cart: '' });
    localStorage.removeItem('items');
  };

  return = () => {
    const { history } = this.props;
    history.push('./shoppingcart');
  };

  render() {
    const {
      name,
      cpf,
      email,
      tel,
      cep,
      adress,
      complement,
      number,
      city,
      estado,
      cart,
      disabled,
    } = this.state;
    return (
      <div>
        <div>
          <input type="button" value="Voltar" onClick={ this.return } />
        </div>
        <div>
          <h2>Revise seus Produtos</h2>
          {cart.map((item) => (
            <p key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </p>
          ))}
        </div>
        <CheckoutForm
          name={ name }
          cpf={ cpf }
          email={ email }
          tel={ tel }
          cep={ cep }
          adress={ adress }
          complement={ complement }
          number={ number }
          city={ city }
          estado={ estado }
          handleChange={ this.handleChange }
        />
        <div>
          <fieldset onChange={ this.handleChange }>
            <legend>Metodo de pagamento</legend>
            <label htmlFor="metod">
              Boleto
              <input
                data-testid="ticket-payment"
                type="radio"
                name="metod"
                id="metod"
                value="boleto"
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                data-testid="visa-payment"
                id="visa"
                type="radio"
                name="metod"
                value="visa"
              />
            </label>
            <label htmlFor="master">
              MasterCard
              <input
                data-testid="master-payment"
                id="master"
                type="radio"
                name="metod"
                value="master"
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                data-testid="elo-payment"
                id="elo"
                type="radio"
                name="metod"
                value="elo"
              />
            </label>
          </fieldset>
        </div>
        <div>
          <button
            data-testid="checkout-btn"
            type="button"
            onClick={ this.finishBuy }
            disabled={ disabled }
          >
            Finalizar compra
          </button>
          {disabled && <p data-testid="error-msg">Campos inválidos</p>}
        </div>
      </div>
    );
  }
}

FormEnd.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default FormEnd;
