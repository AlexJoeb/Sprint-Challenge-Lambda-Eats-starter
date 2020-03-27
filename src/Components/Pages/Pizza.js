import React, { useState, useEffect } from 'react'

import { ReactComponent as ArrowUp } from '../../Assets/ArrowUp.svg';
import { ReactComponent as ArrowDown } from '../../Assets/ArrowDown.svg';

import { Link } from 'react-router-dom';

import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required().test("Name Length", "Name must be at least 2 character", val => val.glutenFree >= 2),
    size: yup.string().notOneOf(["choose"], "Please choose a pizza size."),
    sauce: yup.string().oneOf(["originalred", "garlicranch", "bbq", "spinachalfredo"], "Please choose a pizza sauce."),
    toppings: yup.string().oneOf(["originalred", "garlicranch", "bbq", "spinachalfredo"], "Please choose a pizza sauce."),
    glutenFree: yup.boolean(),
    quantity: yup.number().test("Quantity", "You must order at least 1 pizza", val => val >= 1),
    price: yup.number(),
});

function Pizza() {
    const [ order, setOrder ] = useState({
        name: '',
        size: '',
        sauce: '',
        toppings: [],
        glutenFree: false,
        instructions: '',
        quantity: 1,
        price: 0,
    });

    const [ disableSubmit, setDisableSubmit ] = useState(true);

    const [ errors, setErrors ] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        glutenFree: "",
        quantity: "",
        price: "",

    });

    useEffect(() => {
        schema.isValid(order).then(valid => {
            setDisableSubmit(!valid);
        });
    }, [order]);

    const validateChange = e => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup
          .reach(order, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors
            });
          });
      };

    const handleInput = event => {
        event.persist();
        const { target } = event;
        const { name, value } = target;
        const newData = {
            ...order,
            [name]: value,
        }
        validateChange(event);
        setOrder(newData)
    }

    return (
        <div className='pizza__container'>
            <h1 className='pizza__title'>Build Your Own Pizza</h1>
            <form onSubmit={e => e.preventDefault()} className='pizza__form'>
                <div className='pizza__form__section pizza__form__name'>
                    <div className='pizza__form__section--banner'>
                        <h1>Your Name</h1>
                        <p className='required'>Required</p>
                    </div>
                    <div className='pizza__form__section--choices pizza__form__instructions--choices'>
                        <input type='text' id='name' name='name' value={order.name} onChange={handleInput} placeholder="Who is this pizza for?" />
                    </div>
                </div>
                <div className='pizza__form__section pizza__form__size'>
                    <div className='pizza__form__section--banner'>
                        <h1>Choice of Size</h1>
                        <p className='required'>Required</p>
                    </div>
                    <select>
                        <option value='choose' defaultValue>Choose Pizza Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
                <div className='pizza__form__section pizza__form__sauce'>
                    <div className='pizza__form__section--banner'>
                        <h1>Choice of Sauce</h1>
                        <p className='required'>Required</p>
                    </div>
                    <div className='pizza__form__section--choices pizza__form__sauce--choices'>
                        <div>
                            <input type="radio" id="originalred" name="sauce" value="originalred" />
                            <label htmlFor="originalred">Original Red</label>
                        </div>
                        <div>
                            <input type="radio" id="garlicranch" name="sauce" value="garlicranch" />
                            <label htmlFor="garlicranch">Garlic Ranch</label>
                        </div>
                        <div>
                            <input type="radio" id="bbq" name="sauce" value="bbq" />
                            <label htmlFor="bbq">BBQ Sauce</label>
                        </div>
                        <div>
                            <input type="radio" id="spinachalfredo" name="sauce" value="spinachalfredo" />
                            <label htmlFor="spinachalfredo">Spinach Alfredo</label>
                        </div>
                    </div>
                </div>
                <div className='pizza__form__section pizza__form__toppings'>
                    <div className='pizza__form__section--banner'>
                        <h1>Choice of Toppings</h1>
                        <p>Choose up to 10.</p>
                    </div>
                    <div className='pizza__form__section--choices pizza__form__toppings--choices'>
                        <div>
                            <input type='checkbox' id='pepperoni' name='pepperoni' value='pepperoni' />
                            <label htmlFor='pepperoni'>Pepperoni</label>
                        </div>
                        <div>
                            <input type='checkbox' name='sausage' id='sausage' value='sausage' />
                            <label htmlFor='sausage'>Sausage</label>
                        </div>
                        <div>
                            <input type='checkbox' id='canadianbacon' name='canadianbacon' value='canadianbacon' />
                            <label htmlFor='canadianbacon'>Canadian Bacon</label>
                        </div>
                        <div>
                            <input type='checkbox' id='italianSausage' name='italianSausage' value='italianSausage' />
                            <label htmlFor='italianSausage'>Spicey Italian Sausage</label>
                        </div>
                        <div>
                            <input type='checkbox' id='grilledchicken' name='grilledchicken' value='grilledchicken' />
                            <label htmlFor='grilledchicken'>Grilled Chicken</label>
                        </div>
                        <div>
                            <input type='checkbox' id='onions' name='onions' value='onions' />
                            <label htmlFor='onions'>Onions</label>
                        </div>
                        <div>
                            <input type='checkbox' id='greenpepper' name='greenpepper' value='greenpepper' />
                            <label htmlFor='greenpepper'>Green Pepper</label>
                        </div>
                        <div>
                            <input type='checkbox' id='dicedtomatos' name='dicedtomatos' value='dicedtomatos' />
                            <label htmlFor='dicedtomatos'>Diced Tomatos</label>
                        </div>
                        <div>
                            <input type='checkbox' id='blackolives' name='blackolives' value='blackolives' />
                            <label htmlFor='blackolives'>Black Olives</label>
                        </div>
                        <div>
                            <input type='checkbox' id='roastedgarlic' name='roastedgarlic' value='roastedgarlic' />
                            <label htmlFor='roastedgarlic'>Roasted Garlic</label>
                        </div>
                        <div>
                            <input type='checkbox' id='artichokehearts' name='artichokehearts' value='artichokehearts' />
                            <label htmlFor='artichokehearts'>Artichoke Hearts</label>
                        </div>
                        <div>
                            <input type='checkbox' id='threecheese' name='threecheese' value='threecheese' />
                            <label htmlFor='threecheese'>Three Cheese</label>
                        </div>
                        <div>
                            <input type='checkbox' id='pineapple' name='pineapple' value='pineapple' />
                            <label htmlFor='pineapple'>Pineapple</label>
                        </div>
                        <div>
                            <input type='checkbox' id='extracheese' name='extracheese' value='extracheese' />
                            <label htmlFor='extracheese'>Extra Cheese</label>
                        </div>
                    </div>
                </div>

                <div className='pizza__form__section pizza__form__subs'>
                    <div className='pizza__form__section--banner'>
                        <h1>Choice of Substitute</h1>
                        <p>Choose up to 1.</p>
                    </div>
                    <div className='pizza__form__section--choices pizza__form__subs--choices'>
                        <div>
                            <input type='checkbox' id='glutenfreecrust' name='glutenfreecrust' value='glutenfreecrust' />
                            <label htmlFor='glutenfreecrust'>Gluten Free Crust</label>
                        </div>
                    </div>
                </div>

                <div className='pizza__form__section pizza__form__instructions'>
                    <div className='pizza__form__section--banner'>
                        <h1>Special Instructions</h1>
                    </div>
                    <div className='pizza__form__section--choices pizza__form__instructions--choices'>
                        <input type='text' id='instructions' name='instructions' value={order.instructions} onChange={handleInput} placeholder="Anything else you'd like to add?" />
                    </div>
                </div>

                <div className='pizza__form__submit'>
                    <div className='pizza__form__submit__counter'>
                        <p>{order.quantity}</p>
                        <div>
                            <button onClick={() => setOrder(prevState => {
                                return {...prevState, quantity: prevState.quantity + 1};
                            })}><ArrowUp /></button>
                            <button onClick={() => setOrder(prevState => {
                                return {...prevState, quantity: prevState.quantity >= 1 ? 1 : prevState.quantity - 1};
                            })}><ArrowDown /></button>
                        </div>
                    </div>
                    <button disabled={disableSubmit} className='pizza__form__submit__button' type='submit'>Add to Order<span>${(Math.round(order.price * 100) / 100).toFixed(2)}</span></button>
                </div>
            </form>
        </div>
    )
}

export default Pizza
