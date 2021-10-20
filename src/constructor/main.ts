import Constructor from './Constructor.svelte';
import { CONSTRUCTOR_ELEMENT_ID } from '../common/constants';

const constructor = new Constructor({
	target: document.getElementById(CONSTRUCTOR_ELEMENT_ID),
});

export default constructor;
