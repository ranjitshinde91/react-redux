import sampleReducer from '../../src/app/reducers/sample'

describe("[Reducers] - sample",()=>{
  test("should return initial state if no action matches any case in the reducer",()=>{
    const action = {
			type   : '',
			payload: {}
		}

		const state         = undefined
		const newState      = sampleReducer(state, action)
		const expectedState = {name: 'ThoughtWorks'}

		expect(newState).toEqual(expectedState)
  });
});
