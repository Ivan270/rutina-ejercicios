export default class Plan {
	constructor(semanas, dias) {
		this.semanas = semanas;
		this.dias = dias;
	}
	totalDias() {
		return this.semanas * this.dias;
	}
	mostrarSemanas() {
		return `Semanas: ${this.semanas}`;
	}
	mostrarDias() {
		return `Días: ${this.dias}`;
	}
}
