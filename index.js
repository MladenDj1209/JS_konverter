let eur;
let usd;

const konvertor = function(bam) {
	 eur = bam/1.95;
	 usd = bam*0.61;

	return {
		eur, usd
	}
}

konvertor(10);
console.log('Iznos u eurima je:' +eur);
console.log('Iznos u dolarima je:' +usd);