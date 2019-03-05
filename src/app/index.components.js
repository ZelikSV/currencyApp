import headerModule from './components/header/header.module';
import footerModule from './components/footer/footer.module';
import currencyModule from './components/currency/currency.module';

export default angular.module('index.components', [
	headerModule.name,
	footerModule.name,
	currencyModule.name
	
]);
