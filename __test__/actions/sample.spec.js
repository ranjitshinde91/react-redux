import {sampleAction} from '../../src/app/actions/sample'


describe('[Acions]', () => {

	test('"sampleAction" should return correct action object', () => {
		const action = sampleAction()
		expect(action.type).toEqual("SAMPLE_ACTION")
		expect(action.payload).toEqual({})
	});

});
