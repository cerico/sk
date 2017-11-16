export default (state = [], action) => {
    switch (action.type) {
      case 'GET_RATES_SUCCESS':
        const data = {rates:action.rates,
          result:action.result,
          target:action.target,
          base:action.base,
          amount:action.amount
      }
        return data;
      default:
        return state;
    }
  }