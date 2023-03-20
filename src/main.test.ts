import { init } from './main'

describe('init', () => {
	it('should return a JSON string', () => {
		expect(init()).toEqual('{"hello":"from automerge-js"}')
	})
})
