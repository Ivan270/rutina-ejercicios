export default class Plan {
	constructor(semanas, dias) {
		this.semanas = semanas;
		this.dias = dias;
	}
	totalDias() {
		return this.semanas * this.dias;
	}
	mostrarSemanas() {
		console.log(`Semanas: ${this.semanas}`);
	}
	mostrarDias() {
		console.log(`Días: ${this.dias}`);
	}
}
