const initUrl = 'http://api.fixer.io/latest?base='

export const getRates = (base = 'GBP', amount = 1, target = 'AUD') => {
  console.log('amount',amount)
    return dispatch => {
      return fetch(`${initUrl}${base}`)
      .then(response => response.json())
      .then(rates => dispatch(setCurrency(rates,amount,base,target)))
      .catch(error => console.log(error))
    }
  }

  export const setResult = data => {
    return dispatch => {
      dispatch(getRates(data.base,data.amount,data.target))
    }
  }
  
  export const setCurrency = (rates,amount,base,target) => {
    return {
      type: 'GET_RATES_SUCCESS',
      rates,
      base: rates.base,
      target: target,
      amount: amount,
      result: calculator(rates.rates[target],amount)
    }
  }

  export const calculator = (rates, amount) => {
      return rates * amount
  }


